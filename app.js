// POOMA BUILDER - Construction Management System
// Simplified approach focusing on fixing login functionality

// Application Data
const appData = {
  "projects": [
    {
      "id": "PROJ001",
      "name": "Villa Sunrise - Premium House",
      "clientName": "Mr. Rajesh Kumar",
      "clientId": "client",
      "status": "In Progress",
      "progress": 75,
      "startDate": "2025-01-15",
      "expectedCompletion": "2025-08-15",
      "budget": 2500000,
      "spent": 1875000,
      "location": "Sector 15, Gurugram",
      "plotSize": "200 sq yards",
      "builtupArea": "2800 sq ft",
      "phases": [
        {"name": "Foundation", "status": "Completed", "progress": 100, "startDate": "2025-01-15", "endDate": "2025-02-28", "budget": 400000, "spent": 380000},
        {"name": "Structure", "status": "Completed", "progress": 100, "startDate": "2025-03-01", "endDate": "2025-04-30", "budget": 600000, "spent": 580000},
        {"name": "Roofing", "status": "Completed", "progress": 100, "startDate": "2025-05-01", "endDate": "2025-05-30", "budget": 200000, "spent": 195000},
        {"name": "Electrical", "status": "In Progress", "progress": 80, "startDate": "2025-06-01", "endDate": "2025-07-15", "budget": 300000, "spent": 240000},
        {"name": "Plumbing", "status": "In Progress", "progress": 70, "startDate": "2025-06-01", "endDate": "2025-07-20", "budget": 250000, "spent": 175000},
        {"name": "Interior", "status": "Not Started", "progress": 0, "startDate": "2025-07-15", "endDate": "2025-08-15", "budget": 750000, "spent": 0}
      ]
    },
    {
      "id": "PROJ002", 
      "name": "Green Valley Apartments - Block A",
      "clientName": "Ms. Priya Sharma",
      "clientId": "client2",
      "status": "Planning",
      "progress": 15,
      "startDate": "2025-02-01",
      "expectedCompletion": "2025-12-01",
      "budget": 5000000,
      "spent": 750000,
      "location": "Noida Extension",
      "plotSize": "500 sq yards", 
      "builtupArea": "8000 sq ft",
      "phases": [
        {"name": "Foundation", "status": "In Progress", "progress": 60, "startDate": "2025-02-01", "endDate": "2025-03-30", "budget": 800000, "spent": 480000},
        {"name": "Structure", "status": "Not Started", "progress": 0, "startDate": "2025-04-01", "endDate": "2025-07-31", "budget": 1200000, "spent": 0},
        {"name": "Roofing", "status": "Not Started", "progress": 0, "startDate": "2025-08-01", "endDate": "2025-09-15", "budget": 400000, "spent": 0},
        {"name": "Electrical", "status": "Not Started", "progress": 0, "startDate": "2025-09-01", "endDate": "2025-10-30", "budget": 600000, "spent": 0},
        {"name": "Plumbing", "status": "Not Started", "progress": 0, "startDate": "2025-09-01", "endDate": "2025-11-15", "budget": 500000, "spent": 0},
        {"name": "Interior", "status": "Not Started", "progress": 0, "startDate": "2025-11-01", "endDate": "2025-12-01", "budget": 1500000, "spent": 0}
      ]
    }
  ],
  "transactions": [
    {"id": "TXN001", "projectId": "PROJ001", "date": "2025-01-15", "description": "Foundation Work - First Payment", "amount": 500000, "status": "Paid", "type": "milestone", "invoiceId": "INV001"},
    {"id": "TXN002", "projectId": "PROJ001", "date": "2025-02-28", "description": "Foundation Work - Final Payment", "amount": 300000, "status": "Paid", "type": "milestone", "invoiceId": "INV002"},
    {"id": "TXN003", "projectId": "PROJ001", "date": "2025-03-15", "description": "Steel Structure - Advance", "amount": 400000, "status": "Paid", "type": "advance", "invoiceId": "INV003"},
    {"id": "TXN004", "projectId": "PROJ001", "date": "2025-04-30", "description": "Structure Work Completion", "amount": 350000, "status": "Paid", "type": "milestone", "invoiceId": "INV004"},
    {"id": "TXN005", "projectId": "PROJ001", "date": "2025-07-01", "description": "Electrical Work - Advance", "amount": 150000, "status": "Pending", "type": "advance", "invoiceId": "INV005"},
    {"id": "TXN006", "projectId": "PROJ001", "date": "2025-07-15", "description": "Plumbing Materials", "amount": 120000, "status": "Due", "type": "materials", "invoiceId": "INV006"},
    {"id": "TXN007", "projectId": "PROJ002", "date": "2025-02-01", "description": "Project Setup and Planning", "amount": 200000, "status": "Paid", "type": "advance", "invoiceId": "INV007"},
    {"id": "TXN008", "projectId": "PROJ002", "date": "2025-02-15", "description": "Foundation Materials", "amount": 350000, "status": "Paid", "type": "materials", "invoiceId": "INV008"}
  ],
  "materials": [
    {"id": "MAT001", "projectId": "PROJ001", "name": "Cement (OPC 53)", "quantity": 200, "unit": "bags", "supplier": "ACC Limited", "cost": 350, "totalCost": 70000, "deliveryDate": "2025-01-20", "usage": "Foundation", "status": "Used", "phase": "Foundation"},
    {"id": "MAT002", "projectId": "PROJ001", "name": "Steel Rods (TMT)", "quantity": 5000, "unit": "kg", "supplier": "Tata Steel", "cost": 65, "totalCost": 325000, "deliveryDate": "2025-03-05", "usage": "Structure", "status": "Used", "phase": "Structure"},
    {"id": "MAT003", "projectId": "PROJ001", "name": "Bricks (Red Clay)", "quantity": 8000, "unit": "pieces", "supplier": "Local Supplier", "cost": 12, "totalCost": 96000, "deliveryDate": "2025-02-10", "usage": "Walls", "status": "Used", "phase": "Structure"},
    {"id": "MAT004", "projectId": "PROJ001", "name": "Electrical Cables", "quantity": 500, "unit": "meters", "supplier": "Havells", "cost": 120, "totalCost": 60000, "deliveryDate": "2025-06-05", "usage": "Electrical", "status": "In Use", "phase": "Electrical"},
    {"id": "MAT005", "projectId": "PROJ001", "name": "PVC Pipes", "quantity": 200, "unit": "meters", "supplier": "Prince Pipes", "cost": 85, "totalCost": 17000, "deliveryDate": "2025-06-10", "usage": "Plumbing", "status": "In Use", "phase": "Plumbing"},
    {"id": "MAT006", "projectId": "PROJ001", "name": "Ceramic Tiles", "quantity": 150, "unit": "sqft", "supplier": "Kajaria", "cost": 450, "totalCost": 67500, "deliveryDate": "2025-07-20", "usage": "Flooring", "status": "Delivered", "phase": "Interior"},
    {"id": "MAT007", "projectId": "PROJ002", "name": "Cement (OPC 43)", "quantity": 400, "unit": "bags", "supplier": "UltraTech", "cost": 340, "totalCost": 136000, "deliveryDate": "2025-02-05", "usage": "Foundation", "status": "In Use", "phase": "Foundation"}
  ],
  "photos": [
    {"id": "PHT001", "projectId": "PROJ001", "title": "Foundation Excavation", "date": "2025-01-18", "category": "Foundation", "description": "Initial foundation excavation completed", "phase": "Foundation", "uploadedBy": "admin"},
    {"id": "PHT002", "projectId": "PROJ001", "title": "Foundation Concrete Pour", "date": "2025-01-25", "category": "Foundation", "description": "Concrete pouring for foundation", "phase": "Foundation", "uploadedBy": "admin"},
    {"id": "PHT003", "projectId": "PROJ001", "title": "Steel Structure Framework", "date": "2025-03-10", "category": "Structure", "description": "Steel framework installation in progress", "phase": "Structure", "uploadedBy": "admin"},
    {"id": "PHT004", "projectId": "PROJ001", "title": "Wall Construction", "date": "2025-04-15", "category": "Structure", "description": "Brick wall construction", "phase": "Structure", "uploadedBy": "admin"},
    {"id": "PHT005", "projectId": "PROJ001", "title": "Roofing Work", "date": "2025-05-20", "category": "Roofing", "description": "Roof structure and tiles installation", "phase": "Roofing", "uploadedBy": "admin"},
    {"id": "PHT006", "projectId": "PROJ001", "title": "Electrical Wiring", "date": "2025-06-25", "category": "Electrical", "description": "Electrical wiring and switch installation", "phase": "Electrical", "uploadedBy": "admin"},
    {"id": "PHT007", "projectId": "PROJ002", "title": "Site Preparation", "date": "2025-02-03", "category": "Planning", "description": "Site clearing and preparation", "phase": "Foundation", "uploadedBy": "admin"}
  ],
  "workers": [
    {"id": "WRK001", "name": "Raman Singh", "role": "Site Supervisor", "contact": "+91-9876543210", "dailyWage": 800, "projects": ["PROJ001", "PROJ002"], "totalDays": 120, "attendance": [
      {"date": "2025-08-01", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-02", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-03", "status": "Present", "hours": 9, "projectId": "PROJ001"},
      {"date": "2025-08-04", "status": "Leave", "hours": 0, "projectId": null},
      {"date": "2025-08-05", "status": "Present", "hours": 8, "projectId": "PROJ002"}
    ]},
    {"id": "WRK002", "name": "Mohan Lal", "role": "Mason", "contact": "+91-9876543211", "dailyWage": 600, "projects": ["PROJ001"], "totalDays": 115, "attendance": [
      {"date": "2025-08-01", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-02", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-03", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-04", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-05", "status": "Present", "hours": 8, "projectId": "PROJ001"}
    ]},
    {"id": "WRK003", "name": "Suresh Kumar", "role": "Electrician", "contact": "+91-9876543212", "dailyWage": 700, "projects": ["PROJ001"], "totalDays": 80, "attendance": [
      {"date": "2025-08-01", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-02", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-03", "status": "Half Day", "hours": 4, "projectId": "PROJ001"},
      {"date": "2025-08-04", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-05", "status": "Present", "hours": 8, "projectId": "PROJ001"}
    ]},
    {"id": "WRK004", "name": "Vijay Sharma", "role": "Plumber", "contact": "+91-9876543213", "dailyWage": 650, "projects": ["PROJ001"], "totalDays": 70, "attendance": [
      {"date": "2025-08-01", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-02", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-03", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-04", "status": "Present", "hours": 8, "projectId": "PROJ001"},
      {"date": "2025-08-05", "status": "Leave", "hours": 0, "projectId": null}
    ]}
  ],
  "users": [
    {"username": "client", "password": "client123", "role": "client", "name": "Rajesh Kumar", "projectId": "PROJ001", "email": "rajesh@email.com"},
    {"username": "client2", "password": "client123", "role": "client", "name": "Priya Sharma", "projectId": "PROJ002", "email": "priya@email.com"},
    {"username": "admin", "password": "admin123", "role": "admin", "name": "Site Manager", "email": "admin@poomabuilder.com"},
    {"username": "supervisor", "password": "super123", "role": "admin", "name": "Construction Supervisor", "email": "supervisor@poomabuilder.com"}
  ]
};

// Global state
let currentUser = null;
let currentPage = '';
let currentTab = 'client';
let selectedProjectId = null;
let charts = {};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('POOMA BUILDER: DOM loaded, initializing...');
    initializeApp();
});

function initializeApp() {
    console.log('POOMA BUILDER: Starting initialization...');
    
    // Show loading screen first
    showLoading();
    
    // Initialize after delay
    setTimeout(() => {
        hideLoading();
        showLoginPage();
        setupEventListeners();
        console.log('POOMA BUILDER: Initialization complete');
    }, 1500);
}

function showLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loadingScreen) loadingScreen.classList.remove('hidden');
    if (loginPage) loginPage.classList.add('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    
    console.log('Loading screen displayed');
}

function hideLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => loadingScreen.classList.add('hidden'), 500);
    }
    console.log('Loading screen hidden');
}

function showLoginPage() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loadingScreen) loadingScreen.classList.add('hidden');
    if (loginPage) loginPage.classList.remove('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    
    console.log('Login page displayed');
}

function showMainApp() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loadingScreen) loadingScreen.classList.add('hidden');
    if (loginPage) loginPage.classList.add('hidden');
    if (mainApp) mainApp.classList.remove('hidden');
    
    console.log('Main app displayed');
}

function setupEventListeners() {
    console.log('POOMA BUILDER: Setting up event listeners...');
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            console.log('Login form submitted');
            handleLogin();
            return false;
        };
        console.log('Login form listener attached');
    } else {
        console.error('Login form not found!');
    }
    
    // Tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.onclick = function(e) {
            e.preventDefault();
            switchTab(this.getAttribute('data-tab'));
        };
    });
    console.log('Tab listeners attached:', tabButtons.length);
    
    // Logout button
    document.onclick = function(e) {
        // Logout
        if (e.target.id === 'logoutBtn' || e.target.closest('#logoutBtn')) {
            e.preventDefault();
            handleLogout();
            return;
        }
        
        // Navigation
        const navLink = e.target.closest('.nav-link');
        if (navLink && navLink.getAttribute('data-page')) {
            e.preventDefault();
            showPage(navLink.getAttribute('data-page'));
            return;
        }
        
        // Add Material button
        if (e.target.id === 'addMaterialBtn') {
            e.preventDefault();
            showModal('addMaterialModal');
            return;
        }
        
        // Modal close
        if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal')) {
            closeModal();
            return;
        }
    };
    
    // Add Material form
    const addMaterialForm = document.getElementById('addMaterialForm');
    if (addMaterialForm) {
        addMaterialForm.onsubmit = function(e) {
            e.preventDefault();
            handleAddMaterial(e);
        };
    }
    
    console.log('All event listeners attached');
}

function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    currentTab = tabName;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Clear form
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorDiv = document.getElementById('loginError');
    
    if (username) username.value = '';
    if (password) password.value = '';
    if (errorDiv) errorDiv.classList.add('hidden');
    
    // Update demo credentials
    updateDemoCredentials(tabName);
    
    console.log('Tab switched to:', tabName);
}

function updateDemoCredentials(tab) {
    const demoCredentials = document.getElementById('demoCredentials');
    if (!demoCredentials) return;
    
    if (tab === 'client') {
        demoCredentials.innerHTML = `
            <p>Client 1: <code>client</code> / <code>client123</code></p>
            <p>Client 2: <code>client2</code> / <code>client123</code></p>
        `;
    } else {
        demoCredentials.innerHTML = `
            <p>Admin: <code>admin</code> / <code>admin123</code></p>
            <p>Supervisor: <code>supervisor</code> / <code>super123</code></p>
        `;
    }
}

function handleLogin() {
    console.log('POOMA BUILDER: Handling login...');
    
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = loginBtn.querySelector('.btn-text');
    const btnSpinner = loginBtn.querySelector('.btn-spinner');
    const errorDiv = document.getElementById('loginError');
    
    if (!username || !password) {
        console.error('Username or password field not found!');
        return;
    }
    
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    
    console.log(`Login attempt: "${usernameValue}" / "${passwordValue}" for role: ${currentTab}`);
    
    // Show loading state
    if (btnText) btnText.textContent = 'Logging in...';
    if (btnSpinner) btnSpinner.classList.remove('hidden');
    loginBtn.disabled = true;
    if (errorDiv) errorDiv.classList.add('hidden');
    
    // Process login after delay
    setTimeout(() => {
        // Validate inputs
        if (!usernameValue || !passwordValue) {
            showError('Please enter both username and password');
            resetLoginButton();
            return;
        }
        
        // Find matching user
        const user = appData.users.find(u => {
            const match = u.username === usernameValue && 
                         u.password === passwordValue && 
                         u.role === currentTab;
            console.log(`Checking user ${u.username}: ${match ? 'MATCH' : 'NO MATCH'}`);
            return match;
        });
        
        if (user) {
            console.log('LOGIN SUCCESS for user:', user.name);
            loginSuccess(user);
        } else {
            console.log('LOGIN FAILED - No matching user found');
            showError(`Invalid credentials for ${currentTab} login. Please check your username and password.`);
            resetLoginButton();
        }
    }, 1000);
}

function loginSuccess(user) {
    currentUser = user;
    selectedProjectId = user.projectId || appData.projects[0]?.id;
    
    console.log('User logged in successfully:', user.name, 'Project ID:', selectedProjectId);
    
    // Update UI
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userRole = document.getElementById('userRole');
    
    if (userName) userName.textContent = user.name;
    if (userEmail) userEmail.textContent = user.email;
    if (userRole) userRole.textContent = user.role === 'client' ? 'Client' : 'Admin';
    
    // Setup navigation
    setupNavigation();
    
    // Show main app
    showMainApp();
    
    // Show appropriate dashboard
    const dashboardPage = user.role === 'client' ? 'clientDashboard' : 'adminDashboard';
    showPage(dashboardPage);
    
    // Success message
    showMessage(`Welcome back, ${user.name}!`, 'success');
    
    // Reset login button
    resetLoginButton();
}

function showError(message) {
    const errorDiv = document.getElementById('loginError');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
    }
    console.log('Login error:', message);
}

function resetLoginButton() {
    const loginBtn = document.getElementById('loginBtn');
    const btnText = loginBtn.querySelector('.btn-text');
    const btnSpinner = loginBtn.querySelector('.btn-spinner');
    
    if (btnText) btnText.textContent = 'Login';
    if (btnSpinner) btnSpinner.classList.add('hidden');
    loginBtn.disabled = false;
}

function handleLogout() {
    console.log('Logging out user:', currentUser?.name);
    
    const userName = currentUser?.name || 'User';
    
    // Clear state
    currentUser = null;
    selectedProjectId = null;
    currentPage = '';
    
    // Destroy charts
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
        }
    });
    charts = {};
    
    // Clear form
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (username) username.value = '';
    if (password) password.value = '';
    
    // Reset tab
    switchTab('client');
    
    // Show login page
    showLoginPage();
    
    showMessage(`Goodbye, ${userName}!`, 'info');
}

function setupNavigation() {
    console.log('Setting up navigation for role:', currentUser.role);
    
    const navList = document.getElementById('navList');
    if (!navList) return;
    
    navList.innerHTML = '';
    
    let navItems = [];
    
    if (currentUser.role === 'client') {
        navItems = [
            {id: 'clientDashboard', label: 'Dashboard', icon: '📊'},
            {id: 'projectOverviewPage', label: 'Project Overview', icon: '🏗️'},
            {id: 'siteProgress', label: 'Site Progress', icon: '⚡'},
            {id: 'transactions', label: 'Payments', icon: '💳'},
            {id: 'materials', label: 'Materials', icon: '🧱'},
            {id: 'photoGallery', label: 'Photos', icon: '📸'},
            {id: 'reports', label: 'Reports', icon: '📋'}
        ];
    } else {
        navItems = [
            {id: 'adminDashboard', label: 'Dashboard', icon: '📊'},
            {id: 'projects', label: 'Projects', icon: '🏢'},
            {id: 'transactions', label: 'Payments', icon: '💰'},
            {id: 'workers', label: 'Workers', icon: '👷'},
            {id: 'materials', label: 'Materials', icon: '📦'},
            {id: 'photoGallery', label: 'Photos', icon: '🖼️'},
            {id: 'reports', label: 'Reports', icon: '📈'}
        ];
        
        // Setup project selector
        setupProjectSelector();
    }
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `<a href="#" class="nav-link" data-page="${item.id}">
            <span>${item.icon}</span> ${item.label}
        </a>`;
        navList.appendChild(li);
    });
    
    console.log('Navigation setup complete');
}

function setupProjectSelector() {
    const projectSelector = document.getElementById('projectSelector');
    if (!projectSelector) return;
    
    projectSelector.style.display = 'flex';
    projectSelector.innerHTML = `
        <label for="projectSelect" style="font-weight: 500; color: var(--color-text-secondary);">Project:</label>
        <select id="projectSelect" class="form-control">
            <option value="">All Projects</option>
            ${appData.projects.map(p => 
                `<option value="${p.id}" ${p.id === selectedProjectId ? 'selected' : ''}>${p.name}</option>`
            ).join('')}
        </select>
    `;
    
    const selectElement = document.getElementById('projectSelect');
    if (selectElement) {
        selectElement.onchange = function() {
            selectedProjectId = this.value || null;
            console.log('Project selection changed to:', selectedProjectId);
            showMessage('Project filter updated', 'info');
            
            // Refresh current page if data-dependent
            if (currentPage && ['transactions', 'materials', 'photoGallery', 'siteProgress'].includes(currentPage)) {
                loadPageContent(currentPage);
            }
        };
    }
}

function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (!targetPage) {
        console.error('Page not found:', pageId);
        return;
    }
    
    targetPage.classList.remove('hidden');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    currentPage = pageId;
    updateBreadcrumb(pageId);
    loadPageContent(pageId);
    setupPageEventListeners();
}

function updateBreadcrumb(pageId) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    
    const pageNames = {
        'clientDashboard': 'Dashboard',
        'adminDashboard': 'Admin Dashboard',
        'projectOverviewPage': 'Project Overview',
        'siteProgress': 'Site Progress',
        'transactions': 'Transactions',
        'materials': 'Materials',
        'photoGallery': 'Photo Gallery',
        'workers': 'Workers',
        'projects': 'Projects',
        'reports': 'Reports'
    };
    
    const pageName = pageNames[pageId] || pageId;
    breadcrumb.innerHTML = `Home / ${pageName}`;
}

function loadPageContent(pageId) {
    console.log('Loading content for page:', pageId);
    
    switch(pageId) {
        case 'clientDashboard':
            renderClientDashboard();
            break;
        case 'adminDashboard':
            renderAdminDashboard();
            break;
        case 'projectOverviewPage':
            renderProjectOverview();
            break;
        case 'siteProgress':
            renderSiteProgress();
            break;
        case 'transactions':
            renderTransactions();
            break;
        case 'materials':
            renderMaterials();
            break;
        case 'photoGallery':
            renderPhotoGallery();
            break;
        case 'workers':
            renderWorkers();
            break;
        case 'projects':
            renderProjects();
            break;
        case 'reports':
            renderReports();
            break;
        default:
            console.log('Unknown page:', pageId);
    }
}

function setupPageEventListeners() {
    // Setup search listeners
    const searchInputs = document.querySelectorAll('input[id*="Search"]');
    const filterSelects = document.querySelectorAll('select[id*="Filter"]');
    
    searchInputs.forEach(input => {
        input.oninput = function() {
            setTimeout(() => loadPageContent(currentPage), 300);
        };
    });
    
    filterSelects.forEach(select => {
        select.onchange = function() {
            loadPageContent(currentPage);
        };
    });
}

function renderClientDashboard() {
    const project = getCurrentProject();
    if (!project) return;
    
    // Project Overview Widget
    const projectOverview = document.getElementById('projectOverview');
    if (projectOverview) {
        const spent = project.phases.reduce((sum, phase) => sum + (phase.spent || 0), 0);
        
        projectOverview.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Project:</span>
                <span class="stat-value">${project.name}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Location:</span>
                <span class="stat-value">${project.location}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Progress:</span>
                <span class="stat-value">${project.progress}%</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Status:</span>
                <span class="status-badge status-${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Budget:</span>
                <span class="stat-value amount">₹${formatCurrency(project.budget)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Spent:</span>
                <span class="stat-value amount">₹${formatCurrency(spent)}</span>
            </div>
        `;
    }
    
    // Progress Summary Widget
    const progressSummary = document.getElementById('progressSummary');
    if (progressSummary) {
        const completedPhases = project.phases.filter(p => p.status === 'Completed').length;
        const inProgressPhases = project.phases.filter(p => p.status === 'In Progress').length;
        
        progressSummary.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Total Phases:</span>
                <span class="stat-value">${project.phases.length}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Completed:</span>
                <span class="stat-value">${completedPhases}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">In Progress:</span>
                <span class="stat-value">${inProgressPhases}</span>
            </div>
            <div class="progress-bar" style="margin: 16px 0;">
                <div class="progress-fill" style="width: ${project.progress}%"></div>
            </div>
        `;
        
        // Create chart
        const chartCanvas = document.getElementById('progressChart');
        if (chartCanvas && window.Chart) {
            renderProgressChart(chartCanvas, project);
        }
    }
    
    // Recent Payments Widget
    const recentPayments = document.getElementById('recentPayments');
    if (recentPayments) {
        const projectTransactions = appData.transactions.filter(t => t.projectId === project.id);
        const recent = projectTransactions.slice(-3);
        
        if (recent.length === 0) {
            recentPayments.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center;">No payment records</p>';
        } else {
            recentPayments.innerHTML = recent.map(t => `
                <div class="stat-item">
                    <div>
                        <span class="stat-label">${t.description}</span>
                        <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 4px;">
                            ${formatDate(t.date)}
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <span class="stat-value amount">₹${formatCurrency(t.amount)}</span>
                        <div style="margin-top: 4px;">
                            <span class="status-badge status-${t.status.toLowerCase()}">${t.status}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Latest Photos Widget
    const latestPhotos = document.getElementById('latestPhotos');
    if (latestPhotos) {
        const projectPhotos = appData.photos.filter(p => p.projectId === project.id);
        const latest = projectPhotos.slice(-3);
        
        if (latest.length === 0) {
            latestPhotos.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center;">No photos uploaded</p>';
        } else {
            latestPhotos.innerHTML = latest.map(p => `
                <div class="stat-item" style="cursor: pointer;" onclick="showPhotoModal('${p.id}')">
                    <div>
                        <span class="stat-label">${p.title}</span>
                        <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 4px;">
                            ${p.category}
                        </div>
                    </div>
                    <span class="stat-value">${formatDate(p.date)}</span>
                </div>
            `).join('');
        }
    }
}

function renderProgressChart(canvas, project) {
    const ctx = canvas.getContext('2d');
    
    if (charts.progressChart) {
        charts.progressChart.destroy();
    }
    
    const labels = project.phases.map(p => p.name);
    const data = project.phases.map(p => p.progress);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'];
    
    charts.progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 15, usePointStyle: true }
                }
            }
        }
    });
}

function renderAdminDashboard() {
    // Project Stats
    const projectStats = document.getElementById('projectStats');
    if (projectStats) {
        const totalProjects = appData.projects.length;
        const inProgress = appData.projects.filter(p => p.status === 'In Progress').length;
        const totalBudget = appData.projects.reduce((sum, p) => sum + p.budget, 0);
        
        projectStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Total Projects:</span>
                <span class="stat-value">${totalProjects}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">In Progress:</span>
                <span class="stat-value">${inProgress}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Total Budget:</span>
                <span class="stat-value amount">₹${formatCurrency(totalBudget)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Active Workers:</span>
                <span class="stat-value">${appData.workers.length}</span>
            </div>
        `;
        
        // Chart
        const chartCanvas = document.getElementById('projectsChart');
        if (chartCanvas && window.Chart) {
            const ctx = chartCanvas.getContext('2d');
            
            if (charts.projectsChart) {
                charts.projectsChart.destroy();
            }
            
            const statusCounts = {};
            appData.projects.forEach(p => {
                statusCounts[p.status] = (statusCounts[p.status] || 0) + 1;
            });
            
            charts.projectsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(statusCounts),
                    datasets: [{
                        label: 'Projects',
                        data: Object.values(statusCounts),
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true } }
                }
            });
        }
    }
    
    // Payment Overview
    const paymentOverview = document.getElementById('paymentOverview');
    if (paymentOverview) {
        const totalReceived = appData.transactions.filter(t => t.status === 'Paid').reduce((sum, t) => sum + t.amount, 0);
        const totalPending = appData.transactions.filter(t => t.status === 'Pending' || t.status === 'Due').reduce((sum, t) => sum + t.amount, 0);
        
        paymentOverview.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Total Received:</span>
                <span class="stat-value amount">₹${formatCurrency(totalReceived)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Pending Amount:</span>
                <span class="stat-value amount">₹${formatCurrency(totalPending)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Total Transactions:</span>
                <span class="stat-value">${appData.transactions.length}</span>
            </div>
        `;
    }
    
    // Worker Attendance
    const workerAttendance = document.getElementById('workerAttendance');
    if (workerAttendance) {
        const attendanceData = appData.workers.map(w => {
            const todayRecord = w.attendance.find(a => a.date === '2025-08-05');
            return { name: w.name, status: todayRecord ? todayRecord.status : 'Not Marked', role: w.role };
        });
        
        workerAttendance.innerHTML = attendanceData.map(a => `
            <div class="stat-item">
                <div>
                    <span class="stat-label">${a.name}</span>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 2px;">
                        ${a.role}
                    </div>
                </div>
                <span class="status-badge status-${a.status.toLowerCase().replace(' ', '-')}">${a.status}</span>
            </div>
        `).join('');
    }
    
    // Material Inventory
    const materialInventory = document.getElementById('materialInventory');
    if (materialInventory) {
        const totalMaterials = appData.materials.length;
        const inUseMaterials = appData.materials.filter(m => m.status === 'In Use').length;
        const totalValue = appData.materials.reduce((sum, m) => sum + m.totalCost, 0);
        
        materialInventory.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Total Items:</span>
                <span class="stat-value">${totalMaterials}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">In Use:</span>
                <span class="stat-value">${inUseMaterials}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Total Value:</span>
                <span class="stat-value amount">₹${formatCurrency(totalValue)}</span>
            </div>
        `;
    }
}

function renderSiteProgress() {
    const project = getCurrentProject();
    if (!project) {
        const container = document.getElementById('progressTimeline');
        if (container) {
            container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">Please select a project to view progress</p>';
        }
        return;
    }
    
    const container = document.getElementById('progressTimeline');
    if (!container) return;
    
    container.innerHTML = project.phases.map(phase => {
        const statusClass = phase.status.toLowerCase().replace(' ', '-');
        
        return `
            <div class="phase-item">
                <div class="phase-icon ${statusClass}">${phase.progress}%</div>
                <div class="phase-details">
                    <div class="phase-name">${phase.name}</div>
                    <span class="status-badge status-${statusClass}">${phase.status}</span>
                    <div class="phase-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${phase.progress}%"></div>
                        </div>
                    </div>
                    <div class="phase-dates">
                        <span>📅 ${formatDate(phase.startDate)} - ${formatDate(phase.endDate)}</span>
                        <span>💰 Budget: ₹${formatCurrency(phase.budget || 0)} | Spent: ₹${formatCurrency(phase.spent || 0)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderTransactions() {
    const container = document.getElementById('transactionsList');
    if (!container) return;
    
    const transactions = getFilteredTransactions();
    
    if (transactions.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">No transactions found</p>';
        return;
    }
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${transactions.map(t => `
                    <tr>
                        <td>${formatDate(t.date)}</td>
                        <td><strong>${t.description}</strong><br><small>${t.invoiceId || ''}</small></td>
                        <td><span class="status-badge">${t.type}</span></td>
                        <td><strong>₹${formatCurrency(t.amount)}</strong></td>
                        <td><span class="status-badge status-${t.status.toLowerCase()}">${t.status}</span></td>
                        <td><button class="btn btn--sm btn--outline" onclick="downloadInvoice('${t.id}')">📄</button></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderMaterials() {
    const container = document.getElementById('materialsList');
    if (!container) return;
    
    const materials = getFilteredMaterials();
    
    if (materials.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">No materials found</p>';
        return;
    }
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Material</th>
                    <th>Phase</th>
                    <th>Quantity</th>
                    <th>Supplier</th>
                    <th>Total Cost</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${materials.map(m => `
                    <tr>
                        <td><strong>${m.name}</strong><br><small>${m.usage}</small></td>
                        <td><span class="status-badge">${m.phase}</span></td>
                        <td>${m.quantity} ${m.unit}</td>
                        <td>${m.supplier}</td>
                        <td><strong>₹${formatCurrency(m.totalCost)}</strong></td>
                        <td><span class="status-badge status-${m.status.toLowerCase().replace(' ', '-')}">${m.status}</span></td>
                        <td><button class="btn btn--sm btn--outline" onclick="viewMaterial('${m.id}')">👁️</button></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderPhotoGallery() {
    const container = document.getElementById('photoGrid');
    if (!container) return;
    
    const photos = getFilteredPhotos();
    
    if (photos.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">No photos found</p>';
        return;
    }
    
    container.innerHTML = photos.map(photo => `
        <div class="photo-item" onclick="showPhotoModal('${photo.id}')">
            <div class="photo-placeholder">📷<div class="photo-category">${photo.category}</div></div>
            <div class="photo-info">
                <div class="photo-title">${photo.title}</div>
                <div class="photo-date">${formatDate(photo.date)}</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 4px;">
                    ${photo.description}
                </div>
            </div>
        </div>
    `).join('');
}

function renderWorkers() {
    const container = document.getElementById('workersList');
    if (!container) return;
    
    const workers = getFilteredWorkers();
    
    if (workers.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">No workers found</p>';
        return;
    }
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Contact</th>
                    <th>Daily Wage</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${workers.map(w => {
                    const todayAttendance = w.attendance.find(a => a.date === '2025-08-05') || {status: 'Not Marked'};
                    return `
                        <tr>
                            <td><strong>${w.name}</strong></td>
                            <td><span class="status-badge">${w.role}</span></td>
                            <td>${w.contact}</td>
                            <td>₹${w.dailyWage}</td>
                            <td><span class="status-badge status-${todayAttendance.status.toLowerCase().replace(' ', '-')}">${todayAttendance.status}</span></td>
                            <td><button class="btn btn--sm btn--outline" onclick="viewWorkerDetails('${w.id}')">👁️</button></td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
}

function renderProjects() {
    const container = document.getElementById('projectsList');
    if (!container) return;
    
    const projects = getFilteredProjects();
    
    if (projects.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">No projects found</p>';
        return;
    }
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Budget</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${projects.map(p => `
                    <tr>
                        <td><strong>${p.name}</strong><br><small>${p.location}</small></td>
                        <td>${p.clientName}</td>
                        <td>
                            <div class="progress-bar" style="margin-bottom: 4px;">
                                <div class="progress-fill" style="width: ${p.progress}%"></div>
                            </div>
                            <small>${p.progress}%</small>
                        </td>
                        <td><span class="status-badge status-${p.status.toLowerCase().replace(' ', '-')}">${p.status}</span></td>
                        <td>₹${formatCurrency(p.budget)}</td>
                        <td><button class="btn btn--sm btn--outline" onclick="selectProject('${p.id}')">✅</button></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderProjectOverview() {
    const container = document.getElementById('projectOverviewContent');
    if (!container) return;
    
    const project = getCurrentProject();
    if (!project) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">Please select a project to view details</p>';
        return;
    }
    
    const spent = project.phases.reduce((sum, phase) => sum + (phase.spent || 0), 0);
    
    container.innerHTML = `
        <div class="card">
            <div class="card__body">
                <h3>Project Information</h3>
                <div class="stat-item"><span class="stat-label">Name:</span><span class="stat-value">${project.name}</span></div>
                <div class="stat-item"><span class="stat-label">Client:</span><span class="stat-value">${project.clientName}</span></div>
                <div class="stat-item"><span class="stat-label">Location:</span><span class="stat-value">${project.location}</span></div>
                <div class="stat-item"><span class="stat-label">Budget:</span><span class="stat-value amount">₹${formatCurrency(project.budget)}</span></div>
                <div class="stat-item"><span class="stat-label">Spent:</span><span class="stat-value amount">₹${formatCurrency(spent)}</span></div>
                <div class="stat-item"><span class="stat-label">Remaining:</span><span class="stat-value amount">₹${formatCurrency(project.budget - spent)}</span></div>
            </div>
        </div>
    `;
}

function renderReports() {
    const container = document.getElementById('financialChart');
    if (!container) return;
    
    if (window.Chart) {
        const ctx = container.getContext('2d');
        
        if (charts.financialChart) {
            charts.financialChart.destroy();
        }
        
        charts.financialChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Income',
                    data: [500000, 800000, 750000, 650000, 400000, 550000],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Expenses',
                    data: [380000, 580000, 675000, 580000, 370000, 415000],
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top' } }
            }
        });
    }
}

// Utility Functions
function getCurrentProject() {
    if (currentUser?.role === 'client' && currentUser.projectId) {
        return appData.projects.find(p => p.id === currentUser.projectId);
    }
    if (selectedProjectId) {
        return appData.projects.find(p => p.id === selectedProjectId);
    }
    return appData.projects[0];
}

function getFilteredTransactions() {
    let transactions = currentUser?.role === 'client' 
        ? appData.transactions.filter(t => t.projectId === currentUser.projectId)
        : selectedProjectId 
        ? appData.transactions.filter(t => t.projectId === selectedProjectId)
        : appData.transactions;
    
    const searchTerm = document.getElementById('transactionSearch')?.value.toLowerCase() || '';
    const filterType = document.getElementById('transactionFilter')?.value || '';
    
    if (searchTerm) {
        transactions = transactions.filter(t => 
            t.description.toLowerCase().includes(searchTerm) ||
            t.type.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filterType) {
        transactions = transactions.filter(t => t.type === filterType);
    }
    
    return transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getFilteredMaterials() {
    let materials = currentUser?.role === 'client' 
        ? appData.materials.filter(m => m.projectId === currentUser.projectId)
        : selectedProjectId 
        ? appData.materials.filter(m => m.projectId === selectedProjectId)
        : appData.materials;
    
    const searchTerm = document.getElementById('materialSearch')?.value.toLowerCase() || '';
    const filterStatus = document.getElementById('materialFilter')?.value || '';
    
    if (searchTerm) {
        materials = materials.filter(m => 
            m.name.toLowerCase().includes(searchTerm) ||
            m.supplier.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filterStatus) {
        materials = materials.filter(m => m.status === filterStatus);
    }
    
    return materials;
}

function getFilteredPhotos() {
    let photos = currentUser?.role === 'client' 
        ? appData.photos.filter(p => p.projectId === currentUser.projectId)
        : selectedProjectId 
        ? appData.photos.filter(p => p.projectId === selectedProjectId)
        : appData.photos;
    
    const filterCategory = document.getElementById('photoFilter')?.value || '';
    
    if (filterCategory) {
        photos = photos.filter(p => p.category === filterCategory);
    }
    
    return photos.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getFilteredWorkers() {
    let workers = appData.workers;
    
    const searchTerm = document.getElementById('workerSearch')?.value.toLowerCase() || '';
    const roleFilter = document.getElementById('roleFilter')?.value || '';
    
    if (searchTerm) {
        workers = workers.filter(w => 
            w.name.toLowerCase().includes(searchTerm) ||
            w.role.toLowerCase().includes(searchTerm)
        );
    }
    
    if (roleFilter) {
        workers = workers.filter(w => w.role === roleFilter);
    }
    
    return workers;
}

function getFilteredProjects() {
    let projects = appData.projects;
    
    const searchTerm = document.getElementById('projectSearch')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('statusFilter')?.value || '';
    
    if (searchTerm) {
        projects = projects.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.clientName.toLowerCase().includes(searchTerm)
        );
    }
    
    if (statusFilter) {
        projects = projects.filter(p => p.status === statusFilter);
    }
    
    return projects;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(amount);
}

// Modal Functions
function showPhotoModal(photoId) {
    const photo = appData.photos.find(p => p.id === photoId);
    if (!photo) return;
    
    const modalContent = document.getElementById('photoModalContent');
    if (modalContent) {
        modalContent.innerHTML = `
            <div class="photo-placeholder" style="height: 300px; margin-bottom: 20px; font-size: 48px;">📷</div>
            <h4>${photo.title}</h4>
            <p><strong>Date:</strong> ${formatDate(photo.date)}</p>
            <p><strong>Category:</strong> ${photo.category}</p>
            <p><strong>Description:</strong> ${photo.description}</p>
        `;
    }
    
    showModal('photoModal');
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
    document.body.style.overflow = 'auto';
}

function handleAddMaterial(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const material = {
        id: 'MAT' + String(appData.materials.length + 1).padStart(3, '0'),
        projectId: currentUser?.role === 'client' ? currentUser.projectId : selectedProjectId || appData.projects[0].id,
        name: formData.get('name'),
        phase: formData.get('phase'),
        quantity: parseInt(formData.get('quantity')),
        unit: formData.get('unit'),
        supplier: formData.get('supplier'),
        cost: parseFloat(formData.get('cost')),
        totalCost: parseInt(formData.get('quantity')) * parseFloat(formData.get('cost')),
        deliveryDate: formData.get('deliveryDate') || new Date().toISOString().split('T')[0],
        usage: formData.get('usage') || '',
        status: 'Delivered'
    };
    
    appData.materials.push(material);
    closeModal();
    e.target.reset();
    
    if (currentPage === 'materials') {
        loadPageContent('materials');
    }
    
    showMessage(`Material "${material.name}" added successfully!`, 'success');
}

function showMessage(text, type = 'info') {
    const container = document.getElementById('messageContainer');
    if (!container) return;
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    message.innerHTML = `<span>${icon}</span><span>${text}</span>`;
    
    container.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) {
            message.parentNode.removeChild(message);
        }
    }, 5000);
}

// Action Functions
function downloadInvoice(transactionId) {
    showMessage(`Downloading invoice for transaction ${transactionId}`, 'info');
}

function viewMaterial(materialId) {
    const material = appData.materials.find(m => m.id === materialId);
    if (material) {
        alert(`Material: ${material.name}\nQuantity: ${material.quantity} ${material.unit}\nSupplier: ${material.supplier}\nTotal Cost: ₹${formatCurrency(material.totalCost)}`);
    }
}

function viewWorkerDetails(workerId) {
    const worker = appData.workers.find(w => w.id === workerId);
    if (worker) {
        const totalEarned = worker.dailyWage * worker.totalDays;
        alert(`Worker: ${worker.name}\nRole: ${worker.role}\nDaily Wage: ₹${worker.dailyWage}\nTotal Earned: ₹${formatCurrency(totalEarned)}`);
    }
}

function selectProject(projectId) {
    selectedProjectId = projectId;
    const project = appData.projects.find(p => p.id === projectId);
    showMessage(`Selected project: ${project.name}`, 'success');
    
    const projectSelect = document.getElementById('projectSelect');
    if (projectSelect) {
        projectSelect.value = projectId;
    }
    
    if (currentPage && ['transactions', 'materials', 'photoGallery', 'siteProgress'].includes(currentPage)) {
        loadPageContent(currentPage);
    }
}

// Log script loaded
console.log('POOMA BUILDER: Script loaded and ready for initialization');
