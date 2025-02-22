// Simple login functionality
const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-page');
const dashboard = document.getElementById('dashboard');
const logoutBtn = document.getElementById('logout-btn');
const loginError = document.getElementById('login-error');

// Dummy credentials
const validUsername = "admin";
const validPassword = "password";

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        loginPage.classList.add('hidden');
        dashboard.classList.remove('hidden');
    } else {
        loginError.textContent = "Invalid username or password.";
    }
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    dashboard.classList.add('hidden');
    loginPage.classList.remove('hidden');
    loginForm.reset();
});

// Project management
const projectForm = document.getElementById('project-form');
const projectList = document.getElementById('projects');

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('project-name').value;
    const deadline = document.getElementById('project-deadline').value;
    const status = document.getElementById('project-status').value;

    const projectItem = document.createElement('li');
    projectItem.textContent =(` ${name} - Deadline: ${deadline} - Status: ${status}`);

    projectList.appendChild(projectItem);

    projectForm.reset();
});