// Application Data and State
let appData = {
  "projects": [
    {
      "id": "PROJ001",
      "name": "Villa Sunrise - Premium House",
      "clientName": "Mr. Rajesh Kumar",
      "status": "In Progress",
      "progress": 75,
      "startDate": "2025-01-15",
      "expectedCompletion": "2025-08-15",
      "budget": 2500000,
      "phases": [
        {"name": "Foundation", "status": "Completed", "progress": 100, "startDate": "2025-01-15", "endDate": "2025-02-28"},
        {"name": "Structure", "status": "Completed", "progress": 100, "startDate": "2025-03-01", "endDate": "2025-04-30"},
        {"name": "Roofing", "status": "Completed", "progress": 100, "startDate": "2025-05-01", "endDate": "2025-05-30"},
        {"name": "Electrical", "status": "In Progress", "progress": 80, "startDate": "2025-06-01", "endDate": "2025-07-15"},
        {"name": "Plumbing", "status": "In Progress", "progress": 70, "startDate": "2025-06-01", "endDate": "2025-07-20"},
        {"name": "Interior", "status": "Not Started", "progress": 0, "startDate": "2025-07-15", "endDate": "2025-08-15"}
      ]
    }
  ],
  "transactions": [
    {"id": "TXN001", "date": "2025-01-15", "description": "Foundation Work - First Payment", "amount": 500000, "status": "Paid", "type": "milestone"},
    {"id": "TXN002", "date": "2025-02-28", "description": "Foundation Work - Final Payment", "amount": 300000, "status": "Paid", "type": "milestone"},
    {"id": "TXN003", "date": "2025-03-15", "description": "Steel Structure - Advance", "amount": 400000, "status": "Paid", "type": "advance"},
    {"id": "TXN004", "date": "2025-04-30", "description": "Structure Work Completion", "amount": 350000, "status": "Paid", "type": "milestone"},
    {"id": "TXN005", "date": "2025-07-01", "description": "Electrical Work - Advance", "amount": 150000, "status": "Pending", "type": "advance"},
    {"id": "TXN006", "date": "2025-07-15", "description": "Plumbing Materials", "amount": 120000, "status": "Due", "type": "materials"}
  ],
  "materials": [
    {"id": "MAT001", "name": "Cement (OPC 53)", "quantity": 200, "unit": "bags", "supplier": "ACC Limited", "cost": 350, "totalCost": 70000, "deliveryDate": "2025-01-20", "usage": "Foundation", "status": "Used"},
    {"id": "MAT002", "name": "Steel Rods (TMT)", "quantity": 5000, "unit": "kg", "supplier": "Tata Steel", "cost": 65, "totalCost": 325000, "deliveryDate": "2025-03-05", "usage": "Structure", "status": "Used"},
    {"id": "MAT003", "name": "Bricks (Red Clay)", "quantity": 8000, "unit": "pieces", "supplier": "Local Supplier", "cost": 12, "totalCost": 96000, "deliveryDate": "2025-02-10", "usage": "Walls", "status": "Used"},
    {"id": "MAT004", "name": "Electrical Cables", "quantity": 500, "unit": "meters", "supplier": "Havells", "cost": 120, "totalCost": 60000, "deliveryDate": "2025-06-05", "usage": "Electrical", "status": "In Use"},
    {"id": "MAT005", "name": "PVC Pipes", "quantity": 200, "unit": "meters", "supplier": "Prince Pipes", "cost": 85, "totalCost": 17000, "deliveryDate": "2025-06-10", "usage": "Plumbing", "status": "In Use"},
    {"id": "MAT006", "name": "Ceramic Tiles", "quantity": 150, "unit": "sqft", "supplier": "Kajaria", "cost": 450, "totalCost": 67500, "deliveryDate": "2025-07-20", "usage": "Flooring", "status": "Delivered"}
  ],
  "photos": [
    {"id": "PHT001", "title": "Foundation Excavation", "date": "2025-01-18", "category": "Foundation", "description": "Initial foundation excavation completed"},
    {"id": "PHT002", "title": "Foundation Concrete Pour", "date": "2025-01-25", "category": "Foundation", "description": "Concrete pouring for foundation"},
    {"id": "PHT003", "title": "Steel Structure Framework", "date": "2025-03-10", "category": "Structure", "description": "Steel framework installation in progress"},
    {"id": "PHT004", "title": "Wall Construction", "date": "2025-04-15", "category": "Structure", "description": "Brick wall construction"},
    {"id": "PHT005", "title": "Roofing Work", "date": "2025-05-20", "category": "Roofing", "description": "Roof structure and tiles installation"},
    {"id": "PHT006", "title": "Electrical Wiring", "date": "2025-06-25", "category": "Electrical", "description": "Electrical wiring and switch installation"}
  ],
  "workers": [
    {"id": "WRK001", "name": "Raman Singh", "role": "Site Supervisor", "contact": "+91-9876543210", "dailyWage": 800, "totalDays": 120, "attendance": [
      {"date": "2025-08-01", "status": "Present", "hours": 8},
      {"date": "2025-08-02", "status": "Present", "hours": 8},
      {"date": "2025-08-03", "status": "Present", "hours": 9},
      {"date": "2025-08-04", "status": "Leave", "hours": 0},
      {"date": "2025-08-05", "status": "Present", "hours": 8}
    ]},
    {"id": "WRK002", "name": "Mohan Lal", "role": "Mason", "contact": "+91-9876543211", "dailyWage": 600, "totalDays": 115, "attendance": [
      {"date": "2025-08-01", "status": "Present", "hours": 8},
      {"date": "2025-08-02", "status": "Present", "hours": 8},
      {"date": "2025-08-03", "status": "Present", "hours": 8},
      {"date": "2025-08-04", "status": "Present", "hours": 8},
      {"date": "2025-08-05", "status": "Present", "hours": 8}
    ]},
    {"id": "WRK003", "name": "Suresh Kumar", "role": "Electrician", "contact": "+91-9876543212", "dailyWage": 700, "totalDays": 80, "attendance": [
      {"date": "2025-08-01", "status": "Present", "hours": 8},
      {"date": "2025-08-02", "status": "Present", "hours": 8},
      {"date": "2025-08-03", "status": "Half Day", "hours": 4},
      {"date": "2025-08-04", "status": "Present", "hours": 8},
      {"date": "2025-08-05", "status": "Present", "hours": 8}
    ]},
    {"id": "WRK004", "name": "Vijay Sharma", "role": "Plumber", "contact": "+91-9876543213", "dailyWage": 650, "totalDays": 70, "attendance": [
      {"date": "2025-08-01", "status": "Present", "hours": 8},
      {"date": "2025-08-02", "status": "Present", "hours": 8},
      {"date": "2025-08-03", "status": "Present", "hours": 8},
      {"date": "2025-08-04", "status": "Present", "hours": 8},
      {"date": "2025-08-05", "status": "Leave", "hours": 0}
    ]}
  ],
  "users": [
    {"username": "client", "password": "client123", "role": "client", "name": "Rajesh Kumar", "projectId": "PROJ001"},
    {"username": "admin", "password": "admin123", "role": "admin", "name": "Site Manager"}
  ]
};

// Application State
let currentUser = null;
let currentPage = '';
let currentTab = 'client';

// Initialize Application
window.addEventListener('load', function() {
    console.log('Window loaded - Initializing application');
    
    // Load data from localStorage if available
    const savedData = localStorage.getItem('poomaBuilderData');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            appData = {...appData, ...parsed};
            console.log('Data loaded from localStorage');
        } catch (e) {
            console.log('Error parsing saved data, using default data');
        }
    }
    
    initializeEventListeners();
    showLoginPage();
});

function initializeEventListeners() {
    console.log('Setting up event listeners');
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Login form submitted');
            handleLogin(e);
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
    
    // Tab switching in login
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentTab = this.dataset.tab;
            console.log('Switched to tab:', currentTab);
        });
    });
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    });
    
    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    });
    
    // Form submissions
    const addMaterialForm = document.getElementById('addMaterialForm');
    if (addMaterialForm) {
        addMaterialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleAddMaterial(e);
        });
    }
    
    console.log('Event listeners initialized');
}

function showLoginPage() {
    console.log('Showing login page');
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loginPage && mainApp) {
        loginPage.classList.remove('hidden');
        mainApp.classList.add('hidden');
    }
}

function showMainApp() {
    console.log('Showing main app');
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loginPage && mainApp) {
        loginPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
    }
}

function handleLogin(e) {
    console.log('Handling login...');
    
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    
    if (!usernameField || !passwordField) {
        console.error('Login form fields not found');
        return;
    }
    
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();
    
    console.log('Login attempt - Username:', username, 'Tab:', currentTab);
    
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }
    
    // Find user with matching credentials
    const user = appData.users.find(u => 
        u.username === username && 
        u.password === password && 
        u.role === currentTab
    );
    
    console.log('User lookup result:', user);
    
    if (user) {
        currentUser = user;
        console.log('Login successful for:', user.name);
        
        // Update UI with user info
        const userNameElement = document.getElementById('userName');
        const userRoleElement = document.getElementById('userRole');
        
        if (userNameElement && userRoleElement) {
            userNameElement.textContent = user.name;
            userRoleElement.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
        }
        
        setupNavigation();
        showMainApp();
        
        // Show appropriate dashboard
        if (user.role === 'client') {
            showPage('clientDashboard');
        } else {
            showPage('adminDashboard');
        }
    } else {
        console.log('Login failed - invalid credentials');
        alert('Invalid credentials or wrong login type. Please check your username, password, and selected login type (Client/Admin).');
    }
}

function handleLogout() {
    console.log('Logging out');
    currentUser = null;
    currentPage = '';
    
    // Clear form fields
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    
    if (usernameField) usernameField.value = '';
    if (passwordField) passwordField.value = '';
    
    // Reset to client tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const clientTab = document.querySelector('.tab-btn[data-tab="client"]');
    if (clientTab) clientTab.classList.add('active');
    currentTab = 'client';
    
    showLoginPage();
}

function setupNavigation() {
    console.log('Setting up navigation for role:', currentUser.role);
    
    const navList = document.getElementById('navList');
    if (!navList) {
        console.error('Navigation list not found');
        return;
    }
    
    navList.innerHTML = '';
    
    let navItems = [];
    
    if (currentUser.role === 'client') {
        navItems = [
            {id: 'clientDashboard', label: 'Dashboard'},
            {id: 'siteProgress', label: 'Site Progress'},
            {id: 'transactions', label: 'Transactions'},
            {id: 'materials', label: 'Materials'},
            {id: 'photoGallery', label: 'Photos'},
            {id: 'modelViewer', label: '3D Model'},
            {id: 'designPlans', label: 'Design Plans'}
        ];
    } else {
        navItems = [
            {id: 'adminDashboard', label: 'Dashboard'},
            {id: 'projects', label: 'Projects'},
            {id: 'transactions', label: 'Payments'},
            {id: 'workers', label: 'Workers'},
            {id: 'materials', label: 'Materials'},
            {id: 'photoGallery', label: 'Photos'},
            {id: 'modelViewer', label: '3D Models'}
        ];
    }
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `<a href="#" class="nav-link" data-page="${item.id}">${item.label}</a>`;
        navList.appendChild(li);
    });
    
    // Add click handlers
    navList.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const pageId = e.target.dataset.page;
            console.log('Navigation clicked:', pageId);
            showPage(pageId);
        }
    });
    
    console.log('Navigation setup complete');
}

function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    } else {
        console.error('Page not found:', pageId);
        return;
    }
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    currentPage = pageId;
    
    // Load page content
    switch(pageId) {
        case 'clientDashboard':
            renderClientDashboard();
            break;
        case 'adminDashboard':
            renderAdminDashboard();
            break;
        case 'siteProgress':
            renderSiteProgress();
            break;
        case 'transactions':
            renderTransactions();
            setupSearchAndFilters();
            break;
        case 'materials':
            renderMaterials();
            setupSearchAndFilters();
            setupModalButtons();
            break;
        case 'photoGallery':
            renderPhotoGallery();
            setupSearchAndFilters();
            setupModalButtons();
            break;
        case 'modelViewer':
            render3DModel();
            break;
        case 'designPlans':
            renderDesignPlans();
            break;
        case 'workers':
            renderWorkers();
            setupModalButtons();
            break;
        case 'projects':
            renderProjects();
            setupSearchAndFilters();
            setupModalButtons();
            break;
    }
}

function renderClientDashboard() {
    const project = appData.projects[0];
    
    // Project Overview
    const projectOverview = document.getElementById('projectOverview');
    if (projectOverview) {
        projectOverview.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Project Name:</span>
                <span class="stat-value">${project.name}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Overall Progress:</span>
                <span class="stat-value">${project.progress}%</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Status:</span>
                <span class="status-badge status-in-progress">${project.status}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Expected Completion:</span>
                <span class="stat-value">${formatDate(project.expectedCompletion)}</span>
            </div>
        `;
    }
    
    // Progress Summary
    const completedPhases = project.phases.filter(p => p.status === 'Completed').length;
    const inProgressPhases = project.phases.filter(p => p.status === 'In Progress').length;
    
    const progressSummary = document.getElementById('progressSummary');
    if (progressSummary) {
        progressSummary.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Completed Phases:</span>
                <span class="stat-value">${completedPhases}/${project.phases.length}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">In Progress:</span>
                <span class="stat-value">${inProgressPhases}</span>
            </div>
            <div class="progress-bar" style="margin: 16px 0;">
                <div class="progress-fill" style="width: ${project.progress}%"></div>
            </div>
        `;
    }
    
    // Recent Payments
    const recentTransactions = appData.transactions.slice(-3);
    const recentPayments = document.getElementById('recentPayments');
    if (recentPayments) {
        recentPayments.innerHTML = recentTransactions.map(t => `
            <div class="stat-item">
                <span class="stat-label">${t.description}</span>
                <div>
                    <span class="stat-value">₹${formatCurrency(t.amount)}</span>
                    <span class="status-badge status-${t.status.toLowerCase()}">${t.status}</span>
                </div>
            </div>
        `).join('');
    }
    
    // Latest Photos
    const latestPhotos = appData.photos.slice(-2);
    const latestPhotosElement = document.getElementById('latestPhotos');
    if (latestPhotosElement) {
        latestPhotosElement.innerHTML = latestPhotos.map(p => `
            <div class="stat-item">
                <span class="stat-label">${p.title}</span>
                <span class="stat-value">${formatDate(p.date)}</span>
            </div>
        `).join('');
    }
}

function renderAdminDashboard() {
    // Project Statistics
    const totalProjects = appData.projects.length;
    const inProgressProjects = appData.projects.filter(p => p.status === 'In Progress').length;
    
    const projectStats = document.getElementById('projectStats');
    if (projectStats) {
        projectStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Total Projects:</span>
                <span class="stat-value">${totalProjects}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">In Progress:</span>
                <span class="stat-value">${inProgressProjects}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Active Workers:</span>
                <span class="stat-value">${appData.workers.length}</span>
            </div>
        `;
    }
    
    // Payment Overview
    const totalPaid = appData.transactions.filter(t => t.status === 'Paid').reduce((sum, t) => sum + t.amount, 0);
    const totalPending = appData.transactions.filter(t => t.status === 'Pending' || t.status === 'Due').reduce((sum, t) => sum + t.amount, 0);
    
    const paymentOverview = document.getElementById('paymentOverview');
    if (paymentOverview) {
        paymentOverview.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Total Received:</span>
                <span class="stat-value">₹${formatCurrency(totalPaid)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Pending:</span>
                <span class="stat-value">₹${formatCurrency(totalPending)}</span>
            </div>
        `;
    }
    
    // Worker Attendance
    const todayAttendance = appData.workers.map(w => {
        const todayRecord = w.attendance.find(a => a.date === '2025-08-05');
        return {name: w.name, status: todayRecord ? todayRecord.status : 'Not Marked'};
    });
    
    const workerAttendance = document.getElementById('workerAttendance');
    if (workerAttendance) {
        workerAttendance.innerHTML = todayAttendance.map(a => `
            <div class="stat-item">
                <span class="stat-label">${a.name}</span>
                <span class="status-badge status-${a.status.toLowerCase().replace(' ', '-')}">${a.status}</span>
            </div>
        `).join('');
    }
    
    // Material Inventory
    const totalMaterials = appData.materials.length;
    const inUseMaterials = appData.materials.filter(m => m.status === 'In Use').length;
    
    const materialInventory = document.getElementById('materialInventory');
    if (materialInventory) {
        materialInventory.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Total Items:</span>
                <span class="stat-value">${totalMaterials}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Currently In Use:</span>
                <span class="stat-value">${inUseMaterials}</span>
            </div>
        `;
    }
}

function renderSiteProgress() {
    const project = appData.projects[0];
    const container = document.getElementById('progressTimeline');
    
    if (container) {
        container.innerHTML = project.phases.map(phase => `
            <div class="phase-item">
                <div class="phase-icon ${phase.status.toLowerCase().replace(' ', '-')}">
                    ${phase.progress}%
                </div>
                <div class="phase-details">
                    <div class="phase-name">${phase.name}</div>
                    <div class="status-badge status-${phase.status.toLowerCase().replace(' ', '-')}">${phase.status}</div>
                    <div class="phase-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${phase.progress}%"></div>
                        </div>
                    </div>
                    <div class="phase-dates">
                        <span>Start: ${formatDate(phase.startDate)}</span>
                        <span>End: ${formatDate(phase.endDate)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderTransactions() {
    const container = document.getElementById('transactionsList');
    if (!container) return;
    
    const filteredTransactions = filterTransactions();
    
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
                ${filteredTransactions.map(t => `
                    <tr>
                        <td>${formatDate(t.date)}</td>
                        <td>${t.description}</td>
                        <td><span class="status-badge">${t.type}</span></td>
                        <td>₹${formatCurrency(t.amount)}</td>
                        <td><span class="status-badge status-${t.status.toLowerCase()}">${t.status}</span></td>
                        <td>
                            <button class="btn btn--sm btn--outline" onclick="downloadInvoice('${t.id}')">Download</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderMaterials() {
    const container = document.getElementById('materialsList');
    if (!container) return;
    
    const filteredMaterials = filterMaterials();
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Material</th>
                    <th>Quantity</th>
                    <th>Supplier</th>
                    <th>Cost/Unit</th>
                    <th>Total Cost</th>
                    <th>Status</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tbody>
                ${filteredMaterials.map(m => `
                    <tr>
                        <td>${m.name}</td>
                        <td>${m.quantity} ${m.unit}</td>
                        <td>${m.supplier}</td>
                        <td>₹${m.cost}</td>
                        <td>₹${formatCurrency(m.totalCost)}</td>
                        <td><span class="status-badge status-${m.status.toLowerCase().replace(' ', '-')}">${m.status}</span></td>
                        <td>${m.usage}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderPhotoGallery() {
    const container = document.getElementById('photoGrid');
    if (!container) return;
    
    const filteredPhotos = filterPhotos();
    
    container.innerHTML = filteredPhotos.map(photo => `
        <div class="photo-item" onclick="showPhotoModal('${photo.id}')">
            <div class="photo-placeholder">
                📷 ${photo.category}
            </div>
            <div class="photo-info">
                <div class="photo-title">${photo.title}</div>
                <div class="photo-date">${formatDate(photo.date)}</div>
            </div>
        </div>
    `).join('');
}

function render3DModel() {
    const container = document.getElementById('threejsContainer');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center;">
                <h3>3D House Model Viewer</h3>
                <p>Interactive 3D model would be rendered here using Three.js</p>
                <p>Features: Rotate, Zoom, Walkthrough</p>
                <div style="margin-top: 20px;">
                    🏠 Model Loading...
                </div>
            </div>
        `;
    }
}

function renderDesignPlans() {
    // Plans are already rendered in HTML
}

function renderWorkers() {
    const container = document.getElementById('workersList');
    if (!container) return;
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Contact</th>
                    <th>Daily Wage</th>
                    <th>Total Days</th>
                    <th>Today's Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${appData.workers.map(w => {
                    const todayAttendance = w.attendance.find(a => a.date === '2025-08-05') || {status: 'Not Marked'};
                    return `
                        <tr>
                            <td>${w.name}</td>
                            <td>${w.role}</td>
                            <td>${w.contact}</td>
                            <td>₹${w.dailyWage}</td>
                            <td>${w.totalDays}</td>
                            <td><span class="status-badge status-${todayAttendance.status.toLowerCase().replace(' ', '-')}">${todayAttendance.status}</span></td>
                            <td>
                                <button class="btn btn--sm btn--outline" onclick="viewWorkerDetails('${w.id}')">View</button>
                            </td>
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
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Project ID</th>
                    <th>Name</th>
                    <th>Client</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Budget</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${appData.projects.map(p => `
                    <tr>
                        <td>${p.id}</td>
                        <td>${p.name}</td>
                        <td>${p.clientName}</td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${p.progress}%"></div>
                            </div>
                            ${p.progress}%
                        </td>
                        <td><span class="status-badge status-${p.status.toLowerCase().replace(' ', '-')}">${p.status}</span></td>
                        <td>₹${formatCurrency(p.budget)}</td>
                        <td>
                            <button class="btn btn--sm btn--outline" onclick="viewProjectDetails('${p.id}')">View</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Helper Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 0
    }).format(amount);
}

// Search and Filter Functions
function setupSearchAndFilters() {
    // Transaction filters
    const transactionSearch = document.getElementById('transactionSearch');
    const transactionFilter = document.getElementById('transactionFilter');
    
    if (transactionSearch) {
        transactionSearch.removeEventListener('input', renderTransactions);
        transactionSearch.addEventListener('input', renderTransactions);
    }
    if (transactionFilter) {
        transactionFilter.removeEventListener('change', renderTransactions);
        transactionFilter.addEventListener('change', renderTransactions);
    }
    
    // Material filters
    const materialSearch = document.getElementById('materialSearch');
    const materialFilter = document.getElementById('materialFilter');
    
    if (materialSearch) {
        materialSearch.removeEventListener('input', renderMaterials);
        materialSearch.addEventListener('input', renderMaterials);
    }
    if (materialFilter) {
        materialFilter.removeEventListener('change', renderMaterials);
        materialFilter.addEventListener('change', renderMaterials);
    }
    
    // Photo filter
    const photoFilter = document.getElementById('photoFilter');
    if (photoFilter) {
        photoFilter.removeEventListener('change', renderPhotoGallery);
        photoFilter.addEventListener('change', renderPhotoGallery);
    }
    
    // Project search
    const projectSearch = document.getElementById('projectSearch');
    if (projectSearch) {
        projectSearch.removeEventListener('input', renderProjects);
        projectSearch.addEventListener('input', renderProjects);
    }
}

function filterTransactions() {
    let filtered = [...appData.transactions];
    
    const searchTerm = document.getElementById('transactionSearch')?.value.toLowerCase() || '';
    const filterType = document.getElementById('transactionFilter')?.value || '';
    
    if (searchTerm) {
        filtered = filtered.filter(t => 
            t.description.toLowerCase().includes(searchTerm) ||
            t.type.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filterType) {
        filtered = filtered.filter(t => t.type === filterType);
    }
    
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function filterMaterials() {
    let filtered = [...appData.materials];
    
    const searchTerm = document.getElementById('materialSearch')?.value.toLowerCase() || '';
    const filterStatus = document.getElementById('materialFilter')?.value || '';
    
    if (searchTerm) {
        filtered = filtered.filter(m => 
            m.name.toLowerCase().includes(searchTerm) ||
            m.supplier.toLowerCase().includes(searchTerm) ||
            m.usage.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filterStatus) {
        filtered = filtered.filter(m => m.status === filterStatus);
    }
    
    return filtered;
}

function filterPhotos() {
    let filtered = [...appData.photos];
    
    const filterCategory = document.getElementById('photoFilter')?.value || '';
    
    if (filterCategory) {
        filtered = filtered.filter(p => p.category === filterCategory);
    }
    
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Modal Functions
function setupModalButtons() {
    // Add Material button
    const addMaterialBtn = document.getElementById('addMaterialBtn');
    if (addMaterialBtn) {
        addMaterialBtn.removeEventListener('click', showAddMaterialModal);
        addMaterialBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showAddMaterialModal();
        });
    }
    
    // Upload Photo button
    const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
    if (uploadPhotoBtn) {
        uploadPhotoBtn.removeEventListener('click', showUploadPhotoAlert);
        uploadPhotoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showUploadPhotoAlert();
        });
    }
    
    // Add Worker button
    const addWorkerBtn = document.getElementById('addWorkerBtn');
    if (addWorkerBtn) {
        addWorkerBtn.removeEventListener('click', showAddWorkerAlert);
        addWorkerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showAddWorkerAlert();
        });
    }
    
    // Add Project button
    const addProjectBtn = document.getElementById('addProjectBtn');
    if (addProjectBtn) {
        addProjectBtn.removeEventListener('click', showAddProjectAlert);
        addProjectBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showAddProjectAlert();
        });
    }
}

function showAddMaterialModal() {
    showModal('addMaterialModal');
}

function showUploadPhotoAlert() {
    alert('Photo upload functionality would be implemented here');
}

function showAddWorkerAlert() {
    alert('Add worker functionality would be implemented here');
}

function showAddProjectAlert() {
    alert('Add project functionality would be implemented here');
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
}

function showPhotoModal(photoId) {
    const photo = appData.photos.find(p => p.id === photoId);
    if (!photo) return;
    
    const modalContent = document.getElementById('photoModalContent');
    if (modalContent) {
        modalContent.innerHTML = `
            <div class="photo-placeholder" style="height: 300px; margin-bottom: 20px;">
                📷 ${photo.category} Photo
            </div>
            <h4>${photo.title}</h4>
            <p><strong>Date:</strong> ${formatDate(photo.date)}</p>
            <p><strong>Category:</strong> ${photo.category}</p>
            <p><strong>Description:</strong> ${photo.description}</p>
        `;
    }
    
    showModal('photoModal');
}

// Form Handlers
function handleAddMaterial(e) {
    const formData = new FormData(e.target);
    const material = {
        id: 'MAT' + String(appData.materials.length + 1).padStart(3, '0'),
        name: formData.get('name'),
        quantity: parseInt(formData.get('quantity')),
        unit: formData.get('unit'),
        supplier: formData.get('supplier'),
        cost: parseFloat(formData.get('cost')),
        totalCost: parseInt(formData.get('quantity')) * parseFloat(formData.get('cost')),
        deliveryDate: new Date().toISOString().split('T')[0],
        usage: formData.get('usage'),
        status: 'Delivered'
    };
    
    appData.materials.push(material);
    saveToLocalStorage();
    
    closeModal();
    e.target.reset();
    
    if (currentPage === 'materials') {
        renderMaterials();
    }
    
    alert('Material added successfully!');
}

// Action Functions
function downloadInvoice(transactionId) {
    alert(`Downloading invoice for transaction ${transactionId}`);
}

function viewWorkerDetails(workerId) {
    const worker = appData.workers.find(w => w.id === workerId);
    if (worker) {
        alert(`Worker Details:\nName: ${worker.name}\nRole: ${worker.role}\nTotal Earnings: ₹${worker.dailyWage * worker.totalDays}`);
    }
}

function viewProjectDetails(projectId) {
    const project = appData.projects.find(p => p.id === projectId);
    if (project) {
        alert(`Project Details:\nName: ${project.name}\nClient: ${project.clientName}\nProgress: ${project.progress}%`);
    }
}

// Data Persistence
function saveToLocalStorage() {
    try {
        localStorage.setItem('poomaBuilderData', JSON.stringify(appData));
        console.log('Data saved to localStorage');
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}