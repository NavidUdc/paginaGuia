/**
 * DEVTRACK & BACKEND ROADMAP - APLICACIÓN PRINCIPAL
 * Gestión integral de proyectos y guía de estudio avanzada de Backend, APIs y Microservicios.
 */

// Claves de Almacenamiento Local
const STORAGE_KEYS = {
  PROJECTS: "devtrack_projects_v1",
  ROADMAP_PROGRESS: "devtrack_roadmap_progress_v1",
  THEME: "devtrack_theme_v1",
  ACTIVE_TAB: "devtrack_active_tab_v1"
};

// Estado Global de la Aplicación
const state = {
  projects: [],
  roadmapProgress: {}, // { "f1-t1": true, "f1-t2": false, ... }
  activeTab: "dashboard",
  theme: "dark",
  filters: {
    search: "",
    status: "all",
    category: "all",
    phase: "all"
  },
  editingProjectId: null
};

// Inicialización de la Aplicación
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initTheme();
  initNavigation();
  initEventListeners();
  renderAll();
});

/**
 * Cargar datos iniciales o desde localStorage
 */
function loadState() {
  try {
    const savedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (savedProjects) {
      state.projects = JSON.parse(savedProjects);
    } else {
      state.projects = [...INITIAL_PROJECTS];
      saveProjects();
    }

    const savedProgress = localStorage.getItem(STORAGE_KEYS.ROADMAP_PROGRESS);
    if (savedProgress) {
      state.roadmapProgress = JSON.parse(savedProgress);
    } else {
      // Marcar algunos iniciales para mostrar progreso demostrativo
      state.roadmapProgress = {
        "f1-t1": true,
        "f1-t2": true,
        "f1-t3": true,
        "f1-t4": true,
        "f2-t1": true,
        "f2-t2": true
      };
      saveRoadmapProgress();
    }

    const savedTab = localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB);
    if (savedTab && ["dashboard", "roadmap", "projects", "portfolio"].includes(savedTab)) {
      state.activeTab = savedTab;
    }

    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) {
      state.theme = savedTheme;
    }
  } catch (err) {
    console.error("Error al cargar estado:", err);
    state.projects = [...INITIAL_PROJECTS];
    state.roadmapProgress = {};
  }
}

function saveProjects() {
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(state.projects));
}

function saveRoadmapProgress() {
  localStorage.setItem(STORAGE_KEYS.ROADMAP_PROGRESS, JSON.stringify(state.roadmapProgress));
}

/**
 * Gestión del Tema (Dark / Light)
 */
function initTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.innerHTML = state.theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
  }
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.innerHTML = state.theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
  }
}

/**
 * Navegación por Pestañas
 */
function initNavigation() {
  const tabBtns = document.querySelectorAll(".nav-tabs .tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabTarget = btn.getAttribute("data-tab");
      switchTab(tabTarget);
    });
  });
  switchTab(state.activeTab, false);
}

function switchTab(tabId, shouldSave = true) {
  state.activeTab = tabId;
  if (shouldSave) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, tabId);
  }

  // Actualizar botones nav
  document.querySelectorAll(".nav-tabs .tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  // Actualizar paneles visibles
  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `view-${tabId}`);
  });

  // Re-renderizar la vista activa
  if (tabId === "dashboard") renderDashboard();
  if (tabId === "roadmap") renderRoadmap();
  if (tabId === "projects") renderProjects();
  if (tabId === "portfolio") renderPortfolioShowcase();
}

/**
 * Escuchadores de Eventos Globales
 */
function initEventListeners() {
  // Theme toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // Botón Nuevo Proyecto
  const newProjectBtn = document.getElementById("newProjectBtn");
  if (newProjectBtn) {
    newProjectBtn.addEventListener("click", () => openProjectModal());
  }

  const newProjectHeroBtn = document.getElementById("newProjectHeroBtn");
  if (newProjectHeroBtn) {
    newProjectHeroBtn.addEventListener("click", () => openProjectModal());
  }

  // Modal Cerrar
  const closeModalBtn = document.getElementById("closeProjectModal");
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeProjectModal);

  const cancelModalBtn = document.getElementById("cancelProjectBtn");
  if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeProjectModal);

  const modalOverlay = document.getElementById("projectModalOverlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  // Formulario Proyecto
  const projectForm = document.getElementById("projectForm");
  if (projectForm) {
    projectForm.addEventListener("submit", handleProjectFormSubmit);
  }

  // Filtros de Proyectos
  const searchInput = document.getElementById("projectSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.filters.search = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  const statusFilter = document.getElementById("statusFilter");
  if (statusFilter) {
    statusFilter.addEventListener("change", (e) => {
      state.filters.status = e.target.value;
      renderProjects();
    });
  }

  const categoryFilter = document.getElementById("categoryFilter");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", (e) => {
      state.filters.category = e.target.value;
      renderProjects();
    });
  }

  // Botones de Backup / Restaurar
  const exportBtn = document.getElementById("exportDataBtn");
  if (exportBtn) exportBtn.addEventListener("click", exportDataAsJSON);

  const importBtn = document.getElementById("importDataBtn");
  const fileInput = document.getElementById("importFileInput");
  if (importBtn && fileInput) {
    importBtn.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleImportJSON);
  }

  const resetBtn = document.getElementById("resetDataBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetToDemoData);

  // Atajo de teclado ESC para cerrar modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

/**
 * RENDERIZAR TODO
 */
function renderAll() {
  updateGlobalStats();
  renderDashboard();
  renderRoadmap();
  renderProjects();
  renderPortfolioShowcase();
}

/**
 * Métricas y Estadísticas Globales
 */
function calculateMetrics() {
  // Total de temas en el temario
  let totalTopics = 0;
  let completedTopics = 0;

  ROADMAP_DATA.forEach(phase => {
    phase.topics.forEach(t => {
      totalTopics++;
      if (state.roadmapProgress[t.id]) {
        completedTopics++;
      }
    });
  });

  const syllabusProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  // Estadísticas de proyectos
  const totalProjects = state.projects.length;
  const completedProjects = state.projects.filter(p => p.status === "completado").length;
  const inProgressProjects = state.projects.filter(p => p.status === "en_progreso").length;
  const plannedProjects = state.projects.filter(p => p.status === "planificado").length;

  return {
    totalTopics,
    completedTopics,
    syllabusProgress,
    totalProjects,
    completedProjects,
    inProgressProjects,
    plannedProjects
  };
}

function updateGlobalStats() {
  const metrics = calculateMetrics();

  // Actualizar indicadores en el DOM
  const elProgressPercent = document.getElementById("globalProgressPercent");
  if (elProgressPercent) elProgressPercent.textContent = `${metrics.syllabusProgress}%`;

  const elProgressBar = document.getElementById("globalProgressBar");
  if (elProgressBar) elProgressBar.style.width = `${metrics.syllabusProgress}%`;

  const elTopicsCount = document.getElementById("statTopicsCompleted");
  if (elTopicsCount) elTopicsCount.textContent = `${metrics.completedTopics} / ${metrics.totalTopics}`;

  const elCompletedProjects = document.getElementById("statProjectsCompleted");
  if (elCompletedProjects) elCompletedProjects.textContent = metrics.completedProjects;

  const elInProgressProjects = document.getElementById("statProjectsInProgress");
  if (elInProgressProjects) elInProgressProjects.textContent = metrics.inProgressProjects;
}

/**
 * 1. RENDERIZADO DEL DASHBOARD
 */
function renderDashboard() {
  updateGlobalStats();
  const metrics = calculateMetrics();

  const container = document.getElementById("dashboardPhasesSummary");
  if (!container) return;

  let html = "";
  ROADMAP_DATA.forEach(phase => {
    let phaseTotal = phase.topics.length;
    let phaseDone = phase.topics.filter(t => state.roadmapProgress[t.id]).length;
    let percent = Math.round((phaseDone / phaseTotal) * 100);
    let isCompleted = percent === 100;

    html += `
      <div class="stat-card" style="cursor: pointer;" onclick="goToPhase('${phase.id}')">
        <div class="stat-icon" style="background: ${isCompleted ? 'rgba(16, 185, 129, 0.2)' : 'rgba(56, 189, 248, 0.15)'}; color: ${isCompleted ? '#10b981' : '#38bdf8'}; font-weight: 800;">
          ${isCompleted ? '✔' : phase.phaseNumber}
        </div>
        <div class="stat-info" style="flex: 1;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
            <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">${phase.title.split(':')[1] || phase.title}</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: ${isCompleted ? '#10b981' : 'var(--primary)'};">${percent}%</span>
          </div>
          <div class="progress-container" style="height: 6px; margin-bottom: 6px;">
            <div class="progress-bar" style="width: ${percent}%; background: ${isCompleted ? '#10b981' : 'var(--primary)'};"></div>
          </div>
          <span style="font-size: 0.75rem; color: var(--text-secondary);">${phaseDone} de ${phaseTotal} módulos completados</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Proyectos recientes en Dashboard
  renderDashboardRecentProjects();
}

function renderDashboardRecentProjects() {
  const container = document.getElementById("dashboardRecentProjects");
  if (!container) return;

  if (state.projects.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 2rem;">
        <p>Aún no has registrado proyectos. Explora el temario y pulsa "Añadir a mis proyectos" en cualquiera de las fases.</p>
        <button class="btn btn-primary btn-sm" onclick="switchTab('roadmap')">Explorar Temario</button>
      </div>
    `;
    return;
  }

  const recent = [...state.projects].slice(0, 3);
  let html = "";

  recent.forEach(p => {
    html += `
      <div class="user-project-card ${p.status}" style="padding: 1.25rem;">
        <div class="card-top">
          <span class="status-badge ${p.status}">
            ${getStatusIcon(p.status)} ${formatStatus(p.status)}
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${p.category || 'Backend'}</span>
        </div>
        <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem;">${p.title}</h4>
        <p class="project-desc" style="-webkit-line-clamp: 2;">${p.description}</p>
        <div class="project-tags" style="margin-bottom: 0.75rem;">
          ${(p.tags || []).slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
          <span style="font-size: 0.75rem; color: var(--text-secondary);">${p.phaseOrigin || 'Proyecto Libre'}</span>
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${p.id}')">Ver Detalle</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * 2. RENDERIZADO DEL TEMARIO & RUTA DE ESTUDIO (ROADMAP)
 */
function renderRoadmap() {
  const container = document.getElementById("roadmapPhasesContainer");
  if (!container) return;

  let html = "";

  ROADMAP_DATA.forEach(phase => {
    let phaseTotal = phase.topics.length;
    let phaseDone = phase.topics.filter(t => state.roadmapProgress[t.id]).length;
    let percent = Math.round((phaseDone / phaseTotal) * 100);
    let isPhaseComplete = percent === 100;

    html += `
      <div class="phase-card ${phase.phaseNumber === 1 ? 'open' : ''}" id="${phase.id}">
        <div class="phase-header" onclick="togglePhaseCollapse('${phase.id}')">
          <div class="phase-title-wrap">
            <div class="phase-num ${isPhaseComplete ? 'completed' : ''}">
              ${isPhaseComplete ? '✔' : phase.phaseNumber}
            </div>
            <div class="phase-meta">
              <h3>
                ${phase.title}
                <span class="badge-pill" style="margin-bottom: 0; font-size: 0.7rem; padding: 0.15rem 0.5rem;">${phase.badge}</span>
              </h3>
              <p>${phase.subtitle}</p>
            </div>
          </div>
          <div class="phase-actions" onclick="event.stopPropagation()">
            <div class="phase-progress-pill">
              <span>${phaseDone}/${phaseTotal} temas</span>
              <strong style="color: ${isPhaseComplete ? '#10b981' : 'var(--primary)'};">${percent}%</strong>
            </div>
            <button class="btn btn-secondary btn-sm" title="Marcar toda la fase" onclick="toggleEntirePhase('${phase.id}')">
              ${isPhaseComplete ? 'Desmarcar Fase' : 'Completar Fase'}
            </button>
            <span class="phase-collapse-icon" onclick="togglePhaseCollapse('${phase.id}')">▼</span>
          </div>
        </div>

        <div class="phase-body">
          <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.5rem; border-left: 3px solid var(--primary); padding-left: 1rem;">
            ${phase.description}
          </p>

          <h4 class="section-subtitle">
            <span>📚</span> Temas y Módulos de Aprendizaje
          </h4>

          <div class="topics-list">
            ${phase.topics.map(topic => {
              const isChecked = !!state.roadmapProgress[topic.id];
              return `
                <div class="topic-item ${isChecked ? 'completed' : ''}" id="card-${topic.id}">
                  <div>
                    <div class="topic-top">
                      <input 
                        type="checkbox" 
                        class="topic-checkbox" 
                        id="chk-${topic.id}" 
                        ${isChecked ? 'checked' : ''} 
                        onchange="toggleTopicCheck('${phase.id}', '${topic.id}', this.checked)"
                      />
                      <label for="chk-${topic.id}" class="topic-title" style="cursor: pointer;">
                        ${topic.title}
                      </label>
                    </div>
                    <p class="topic-desc">${topic.description}</p>
                  </div>
                  <div>
                    <div class="subtopics-tags">
                      ${topic.subtopics.map(st => `<span class="subtopic-tag">${st}</span>`).join('')}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <h4 class="section-subtitle" style="margin-top: 2rem;">
            <span>💼</span> Proyectos Prácticos para Añadir a tu Portafolio
          </h4>
          <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">
            Construye estos proyectos para aplicar directamente lo aprendido en esta fase y añadirlos de inmediato a tu portafolio.
          </p>

          <div class="roadmap-projects-grid">
            ${phase.portfolioProjects.map(proj => {
              const isAlreadyAdded = state.projects.some(p => p.title.toLowerCase() === proj.title.toLowerCase());
              return `
                <div class="proposed-project-card">
                  <span class="proposed-badge">${proj.difficulty}</span>
                  <div>
                    <h5 class="proposed-title">${proj.title}</h5>
                    <p class="proposed-summary">${proj.summary}</p>
                    
                    <div class="deliverables-box">
                      <h5>Especificaciones y Entregables Clave:</h5>
                      <ul>
                        ${proj.deliverables.map(deliv => `<li>${deliv}</li>`).join('')}
                      </ul>
                    </div>

                    <div class="recruiter-note">
                      <strong>🎯 Lo que evalúan los reclutadores:</strong> ${proj.whyRecruitersLoveIt}
                    </div>
                  </div>

                  <div>
                    <div class="project-tags" style="margin-bottom: 1rem;">
                      ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>

                    <button 
                      class="btn ${isAlreadyAdded ? 'btn-secondary' : 'btn-success'} btn-sm" 
                      style="width: 100%; font-weight: 700;"
                      onclick="addProposedProjectToTracker('${encodeURIComponent(JSON.stringify(proj))}')"
                    >
                      ${isAlreadyAdded ? '✔ Ya está en tus proyectos' : '🚀 Añadir a mis proyectos'}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function togglePhaseCollapse(phaseId) {
  const card = document.getElementById(phaseId);
  if (card) {
    card.classList.toggle("open");
  }
}

function goToPhase(phaseId) {
  switchTab("roadmap");
  setTimeout(() => {
    const el = document.getElementById(phaseId);
    if (el) {
      if (!el.classList.contains("open")) el.classList.add("open");
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
}

function toggleTopicCheck(phaseId, topicId, isChecked) {
  state.roadmapProgress[topicId] = isChecked;
  saveRoadmapProgress();

  const card = document.getElementById(`card-${topicId}`);
  if (card) {
    card.classList.toggle("completed", isChecked);
  }

  // Actualizar métricas
  updateGlobalStats();
  renderDashboard();

  // Actualizar barra y pill de la fase
  const phase = ROADMAP_DATA.find(p => p.id === phaseId);
  if (phase) {
    let phaseTotal = phase.topics.length;
    let phaseDone = phase.topics.filter(t => state.roadmapProgress[t.id]).length;
    let percent = Math.round((phaseDone / phaseTotal) * 100);
    let isPhaseComplete = percent === 100;

    const phaseCard = document.getElementById(phaseId);
    if (phaseCard) {
      const numBadge = phaseCard.querySelector(".phase-num");
      if (numBadge) {
        numBadge.className = `phase-num ${isPhaseComplete ? 'completed' : ''}`;
        numBadge.innerHTML = isPhaseComplete ? '✔' : phase.phaseNumber;
      }
      const pill = phaseCard.querySelector(".phase-progress-pill strong");
      if (pill) pill.textContent = `${percent}%`;
      const pillCount = phaseCard.querySelector(".phase-progress-pill span");
      if (pillCount) pillCount.textContent = `${phaseDone}/${phaseTotal} temas`;
    }
  }

  showToast(isChecked ? "Módulo marcado como aprendido 🎉" : "Módulo desmarcado", "info");
}

function toggleEntirePhase(phaseId) {
  const phase = ROADMAP_DATA.find(p => p.id === phaseId);
  if (!phase) return;

  const allDone = phase.topics.every(t => state.roadmapProgress[t.id]);
  const newStatus = !allDone;

  phase.topics.forEach(t => {
    state.roadmapProgress[t.id] = newStatus;
  });

  saveRoadmapProgress();
  renderRoadmap();
  renderDashboard();
  updateGlobalStats();

  showToast(newStatus ? `¡Fase ${phase.phaseNumber} completada al 100%! 🚀` : `Fase ${phase.phaseNumber} desmarcada`, "success");
}

/**
 * Añadir proyecto propuesto del roadmap al tracker del usuario
 */
function addProposedProjectToTracker(encodedData) {
  try {
    const projData = JSON.parse(decodeURIComponent(encodedData));
    
    // Verificar si ya existe
    const exists = state.projects.some(p => p.title.toLowerCase() === projData.title.toLowerCase());
    if (exists) {
      showToast("Este proyecto ya se encuentra en tu lista de proyectos", "info");
      switchTab("projects");
      return;
    }

    // Abrir modal con datos precargados
    openProjectModal(null, {
      title: projData.title,
      category: projData.category,
      difficulty: projData.difficulty,
      status: "planificado",
      priority: "alta",
      phaseOrigin: projData.phaseOrigin,
      tags: projData.tags,
      description: projData.summary,
      deliverables: projData.deliverables,
      whyRecruitersLoveIt: projData.whyRecruitersLoveIt
    });

    showToast("Revisa los detalles y pulsa Guardar para agregarlo", "info");
  } catch (err) {
    console.error("Error al procesar proyecto:", err);
  }
}

/**
 * 3. RENDERIZADO DEL TRACKER DE PROYECTOS
 */
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  let filtered = state.projects.filter(p => {
    // Filtro búsqueda
    if (state.filters.search) {
      const q = state.filters.search;
      const matchTitle = (p.title || "").toLowerCase().includes(q);
      const matchDesc = (p.description || "").toLowerCase().includes(q);
      const matchTag = (p.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchTag) return false;
    }

    // Filtro estado
    if (state.filters.status !== "all" && p.status !== state.filters.status) {
      return false;
    }

    // Filtro categoría
    if (state.filters.category !== "all" && p.category !== state.filters.category) {
      return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">📁</div>
        <h4>No se encontraron proyectos</h4>
        <p>No hay proyectos que coincidan con tus criterios de búsqueda o aún no has creado ninguno.</p>
        <button class="btn btn-primary" onclick="openProjectModal()">
          <span>➕</span> Crear Nuevo Proyecto
        </button>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(p => {
    html += `
      <div class="user-project-card ${p.status}">
        <div class="card-top">
          <span class="status-badge ${p.status}">
            ${getStatusIcon(p.status)} ${formatStatus(p.status)}
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${p.category || 'General'}</span>
        </div>

        <div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description || 'Sin descripción detallada.'}</p>
          
          <div class="project-tags">
            ${(p.tags || []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div>
          <div class="project-links">
            ${p.repoUrl ? `
              <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="link-btn">
                <span>💻</span> Repositorio
              </a>
            ` : ''}

            ${p.demoUrl ? `
              <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="link-btn" style="color: var(--primary);">
                <span>🌐</span> Swagger/Demo
              </a>
            ` : ''}

            ${p.postmanUrl ? `
              <a href="${p.postmanUrl}" target="_blank" rel="noopener noreferrer" class="link-btn" style="color: #f97316;">
                <span>📮</span> Postman
              </a>
            ` : ''}

            <div class="card-actions-menu">
              <button class="btn btn-secondary btn-icon" title="Editar proyecto" onclick="openProjectModal('${p.id}')">
                ✏️
              </button>
              <button class="btn btn-secondary btn-icon" title="Eliminar proyecto" onclick="deleteProject('${p.id}')" style="color: var(--danger);">
                🗑️
              </button>
            </div>
          </div>

          <div style="margin-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">
              ${p.phaseOrigin ? `📍 ${p.phaseOrigin}` : 'Proyecto personalizado'}
            </span>
            <select 
              class="filter-select" 
              style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" 
              onchange="quickChangeProjectStatus('${p.id}', this.value)"
            >
              <option value="planificado" ${p.status === 'planificado' ? 'selected' : ''}>⏳ Planificado</option>
              <option value="en_progreso" ${p.status === 'en_progreso' ? 'selected' : ''}>⚡ En Desarrollo</option>
              <option value="completado" ${p.status === 'completado' ? 'selected' : ''}>✔ Completado</option>
            </select>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function quickChangeProjectStatus(projectId, newStatus) {
  const proj = state.projects.find(p => p.id === projectId);
  if (proj) {
    proj.status = newStatus;
    if (newStatus === "completado" && !proj.completedAt) {
      proj.completedAt = new Date().toISOString().split("T")[0];
    }
    saveProjects();
    renderProjects();
    renderDashboard();
    renderPortfolioShowcase();
    showToast(`Estado actualizado a: ${formatStatus(newStatus)}`, "success");
  }
}

/**
 * 4. RENDERIZADO DEL SHOWCASE DE PORTAFOLIO
 */
function renderPortfolioShowcase() {
  const container = document.getElementById("portfolioShowcaseContainer");
  if (!container) return;

  const completed = state.projects.filter(p => p.status === "completado");
  const inProgress = state.projects.filter(p => p.status === "en_progreso");

  if (completed.length === 0 && inProgress.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🚀</div>
        <h4>Aún no hay proyectos listos para tu portafolio</h4>
        <p>A medida que marques proyectos como "En Desarrollo" o "Completado", aparecerán aquí estructurados profesionalmente para mostrarlos a reclutadores o clientes.</p>
        <button class="btn btn-primary" onclick="switchTab('roadmap')">Ver proyectos recomendados</button>
      </div>
    `;
    return;
  }

  let html = `
    <div style="display: flex; justify-content: flex-end; margin-bottom: 1.5rem; gap: 0.75rem;">
      <button class="btn btn-secondary btn-sm" onclick="window.print()">
        <span>🖨️</span> Imprimir / Guardar como PDF
      </button>
    </div>
  `;

  // Sección de Proyectos Completados
  if (completed.length > 0) {
    html += `
      <div style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem; color: #10b981;">
          <span>🌟</span> Proyectos Completados y Verificados (${completed.length})
        </h3>
        <div class="projects-grid">
          ${completed.map(p => renderPortfolioCard(p)).join('')}
        </div>
      </div>
    `;
  }

  // Sección de Proyectos en Progreso
  if (inProgress.length > 0) {
    html += `
      <div>
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem; color: var(--primary);">
          <span>⚙️</span> Proyectos Activos en Desarrollo (${inProgress.length})
        </h3>
        <div class="projects-grid">
          ${inProgress.map(p => renderPortfolioCard(p)).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

function renderPortfolioCard(p) {
  return `
    <div class="user-project-card ${p.status}">
      <div class="card-top">
        <span class="status-badge ${p.status}">
          ${getStatusIcon(p.status)} ${formatStatus(p.status)}
        </span>
        <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">${p.category || 'Backend'}</span>
      </div>

      <div>
        <h3 class="project-title" style="font-size: 1.25rem;">${p.title}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.6;">
          ${p.description}
        </p>

        ${p.keyFeatures && p.keyFeatures.length > 0 ? `
          <div class="deliverables-box" style="margin-bottom: 1rem;">
            <h5>Capacidades Técnicas Destacadas:</h5>
            <ul>
              ${p.keyFeatures.map(kf => `<li>${kf}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="project-tags">
          ${(p.tags || []).map(t => `<span class="tech-tag" style="background: rgba(56, 189, 248, 0.12); color: var(--primary);">${t}</span>`).join('')}
        </div>
      </div>

      <div class="project-links" style="margin-top: 1rem;">
        ${p.repoUrl ? `
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex: 1;">
            <span>💻</span> Código GitHub
          </a>
        ` : ''}

        ${p.demoUrl ? `
          <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex: 1;">
            <span>🚀</span> Demo / Swagger
          </a>
        ` : ''}
      </div>
    </div>
  `;
}

/**
 * GESTIÓN DE MODALES (CREAR / EDITAR PROYECTO)
 */
function openProjectModal(projectId = null, prefillData = null) {
  state.editingProjectId = projectId;
  const overlay = document.getElementById("projectModalOverlay");
  const modalTitle = document.getElementById("projectModalTitle");
  const form = document.getElementById("projectForm");

  form.reset();

  if (projectId) {
    modalTitle.textContent = "Editar Proyecto";
    const proj = state.projects.find(p => p.id === projectId);
    if (proj) {
      document.getElementById("formProjectTitle").value = proj.title || "";
      document.getElementById("formProjectCategory").value = proj.category || "Backend Core";
      document.getElementById("formProjectStatus").value = proj.status || "planificado";
      document.getElementById("formProjectPriority").value = proj.priority || "media";
      document.getElementById("formProjectPhase").value = proj.phaseOrigin || "";
      document.getElementById("formProjectRepo").value = proj.repoUrl || "";
      document.getElementById("formProjectDemo").value = proj.demoUrl || "";
      document.getElementById("formProjectPostman").value = proj.postmanUrl || "";
      document.getElementById("formProjectTags").value = (proj.tags || []).join(", ");
      document.getElementById("formProjectDescription").value = proj.description || "";
      document.getElementById("formProjectFeatures").value = (proj.keyFeatures || []).join("\n");
      document.getElementById("formProjectNotes").value = proj.notes || "";
    }
  } else if (prefillData) {
    modalTitle.textContent = "Añadir Proyecto al Portafolio";
    document.getElementById("formProjectTitle").value = prefillData.title || "";
    document.getElementById("formProjectCategory").value = prefillData.category || "Backend Core";
    document.getElementById("formProjectStatus").value = prefillData.status || "planificado";
    document.getElementById("formProjectPriority").value = prefillData.priority || "alta";
    document.getElementById("formProjectPhase").value = prefillData.phaseOrigin || "";
    document.getElementById("formProjectTags").value = (prefillData.tags || []).join(", ");
    document.getElementById("formProjectDescription").value = prefillData.description || "";
    document.getElementById("formProjectFeatures").value = (prefillData.deliverables || []).join("\n");
    document.getElementById("formProjectNotes").value = prefillData.whyRecruitersLoveIt ? `Recomendación: ${prefillData.whyRecruitersLoveIt}` : "";
  } else {
    modalTitle.textContent = "Nuevo Proyecto";
  }

  overlay.classList.add("active");
}

function closeProjectModal() {
  const overlay = document.getElementById("projectModalOverlay");
  if (overlay) overlay.classList.remove("active");
  state.editingProjectId = null;
}

function handleProjectFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("formProjectTitle").value.trim();
  if (!title) {
    showToast("El título del proyecto es obligatorio", "error");
    return;
  }

  const category = document.getElementById("formProjectCategory").value;
  const status = document.getElementById("formProjectStatus").value;
  const priority = document.getElementById("formProjectPriority").value;
  const phaseOrigin = document.getElementById("formProjectPhase").value.trim();
  const repoUrl = document.getElementById("formProjectRepo").value.trim();
  const demoUrl = document.getElementById("formProjectDemo").value.trim();
  const postmanUrl = document.getElementById("formProjectPostman").value.trim();
  const tagsRaw = document.getElementById("formProjectTags").value;
  const tags = tagsRaw.split(",").map(t => t.trim()).filter(Boolean);
  const description = document.getElementById("formProjectDescription").value.trim();
  const featuresRaw = document.getElementById("formProjectFeatures").value;
  const keyFeatures = featuresRaw.split("\n").map(f => f.trim()).filter(Boolean);
  const notes = document.getElementById("formProjectNotes").value.trim();

  if (state.editingProjectId) {
    // Actualizar existente
    const index = state.projects.findIndex(p => p.id === state.editingProjectId);
    if (index !== -1) {
      state.projects[index] = {
        ...state.projects[index],
        title,
        category,
        status,
        priority,
        phaseOrigin,
        repoUrl,
        demoUrl,
        postmanUrl,
        tags,
        description,
        keyFeatures,
        notes,
        completedAt: status === "completado" ? (state.projects[index].completedAt || new Date().toISOString().split("T")[0]) : null
      };
      showToast("Proyecto actualizado con éxito", "success");
    }
  } else {
    // Crear nuevo proyecto
    const newProject = {
      id: `proj-${Date.now()}`,
      title,
      category,
      status,
      priority,
      phaseOrigin,
      repoUrl,
      demoUrl,
      postmanUrl,
      tags,
      description,
      keyFeatures,
      notes,
      createdAt: new Date().toISOString().split("T")[0],
      completedAt: status === "completado" ? new Date().toISOString().split("T")[0] : null
    };
    state.projects.unshift(newProject);
    showToast("¡Proyecto añadido a tu portafolio! 🚀", "success");
  }

  saveProjects();
  closeProjectModal();
  renderProjects();
  renderDashboard();
  renderPortfolioShowcase();
}

function deleteProject(projectId) {
  const proj = state.projects.find(p => p.id === projectId);
  if (!proj) return;

  if (confirm(`¿Estás seguro de que deseas eliminar el proyecto "${proj.title}"?`)) {
    state.projects = state.projects.filter(p => p.id !== projectId);
    saveProjects();
    renderProjects();
    renderDashboard();
    renderPortfolioShowcase();
    showToast("Proyecto eliminado", "info");
  }
}

/**
 * EXPORTAR & IMPORTAR BACKUP (JSON)
 */
function exportDataAsJSON() {
  const backup = {
    exportedAt: new Date().toISOString(),
    version: "1.0",
    projects: state.projects,
    roadmapProgress: state.roadmapProgress
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `devtrack_backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast("Backup exportado correctamente en formato JSON", "success");
}

function handleImportJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported.projects && Array.isArray(imported.projects)) {
        state.projects = imported.projects;
        saveProjects();
      }
      if (imported.roadmapProgress && typeof imported.roadmapProgress === "object") {
        state.roadmapProgress = imported.roadmapProgress;
        saveRoadmapProgress();
      }
      renderAll();
      showToast("Datos importados exitosamente 🎉", "success");
    } catch (err) {
      console.error("Error al importar JSON:", err);
      showToast("El archivo seleccionado no tiene un formato JSON válido", "error");
    }
  };
  reader.readAsText(file);
  e.target.value = ""; // reset input
}

function resetToDemoData() {
  if (confirm("¿Deseas restaurar los proyectos y progreso de demostración iniciales?")) {
    state.projects = [...INITIAL_PROJECTS];
    state.roadmapProgress = {
      "f1-t1": true,
      "f1-t2": true,
      "f1-t3": true,
      "f1-t4": true,
      "f2-t1": true,
      "f2-t2": true
    };
    saveProjects();
    saveRoadmapProgress();
    renderAll();
    showToast("Datos de demostración restablecidos", "info");
  }
}

/**
 * UTILIDADES DE FORMATO Y TOASTS
 */
function formatStatus(status) {
  switch (status) {
    case "completado": return "Completado";
    case "en_progreso": return "En Desarrollo";
    case "planificado": return "Planificado";
    default: return status;
  }
}

function getStatusIcon(status) {
  switch (status) {
    case "completado": return "✔";
    case "en_progreso": return "⚡";
    case "planificado": return "⏳";
    default: return "📌";
  }
}

function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "❌";

  toast.innerHTML = `
    <span style="font-size: 1.1rem;">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
