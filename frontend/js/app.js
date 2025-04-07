const routes = {
    home: `
    <div class="home-container">
        <div class="home-header">
            <img src="assets/images/logo.svg" alt="HRMS Logo" class="home-logo">
            <h1>Welcome to WorkSphere</h1>
            <p>Efficiently manage your company's human resources with ease.</p>
        </div>
        <div class="home-cards">
            <div class="home-card">
                <div class="icon">👥</div>
                <h3>Employees</h3>
                <p>Manage your employee database effortlessly.</p>
            </div>
            <div class="home-card">
                <div class="icon">📅</div>
                <h3>Leave Requests</h3>
                <p>Track and approve leave requests in one place.</p>
            </div>
            <div class="home-card">
                <div class="icon">🕒</div>
                <h3>Attendance</h3>
                <p>Monitor employee attendance seamlessly.</p>
            </div>
        </div>
    </div>
`,

dashboard: `
<div class="dashboard-container">
    <h2>Dashboard</h2>
    
    <div class="dashboard-cards">
        <div class="dashboard-card">
            <div class="card-icon">👥</div>
            <h3>Total Employees</h3>
            <p>50</p>
        </div>
        <div class="dashboard-card">
            <div class="card-icon">📅</div>
            <h3>Pending Leave Requests</h3>
            <p>3</p>
        </div>
        <div class="dashboard-card">
            <div class="card-icon">🕒</div>
            <h3>Attendance Today</h3>
            <p>48 Present / 2 Absent</p>
        </div>
        <div class="dashboard-card">
            <div class="card-icon">💼</div>
            <h3>Open Positions</h3>
            <p>5 Openings</p>
        </div>
    </div>

    <h3>Recent Leave Requests</h3>
    <table class="dashboard-table">
    <thead>
        <tr>
            <th>Employee</th>
            <th>Type</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
    <tr>
            <td>Jane Doe</td>
            <td>Vacation</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td>Michael Smith</td>
            <td>Sick Leave</td>
            <td>Approved</td>
        </tr>
        <tr>
            <td>Jane Doe</td>
            <td>Vacation</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td>Jane Doe</td>
            <td>Vacation</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td>Jane Doe</td>
            <td>Vacation</td>
            <td>Pending</td>
        </tr>
    </tbody>
    </table>

    <h3>Upcoming Events</h3>
    <ul class="dashboard-events">
        <li>🛠 System Maintenance - March 25</li>
        <li>🎉 Team Building Event - April 5</li>
        <li>📢 HR Meeting - April 10</li>
    </ul>
</div>
    `,
    employees: `
    <h2>Employees</h2>
    <input type="text" id="searchEmployees" placeholder="Search employees..." class="search-bar">
    <button id="addEmployeeBtn" class="add-button">+ Add Employee</button>
    
    <table class="employees-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody id="employeesList">
            <tr>
                <td>Ana Smith</td>
                <td>Software Engineer</td>
                <td>IT</td>
            </tr>
            <tr>
                <td>Mark Johnson</td>
                <td>HR Specialist</td>
                <td>HR</td>
            </tr>
        </tbody>
    </table>
`,
profile: `
<div class="profile-container">
    <div class="profile-card">
        <img src="assets/images/profile.jpeg" alt="Profile Picture" class="profile-picture">
        <h2>My Profile</h2>
        <div class="profile-info">
            <p><strong>Name:</strong> Emir Tukic</p>
            <p><strong>Email:</strong> emir.tukic@stu.ibu.edu.ba</p>
            <p><strong>Position:</strong> Web developer</p>
            <p><strong>Phone:</strong> +387 61 495 144</p>
        </div>
    <button class="edit-profile-btn" data-page="editProfile">Edit Profile</button>
    </div>
</div>
`,
editProfile: `
    <div class="profile-container">
        <div class="profile-card">
            <h2>Edit Profile</h2>
            <form id="edit-profile-form">
                <label>Name:</label>
                <input type="text" id="edit-name" value="Emir Tukic">
                <label>Email:</label>
                <input type="email" id="edit-email" value="emir.tukic@stu.ibu.edu.ba">
                <button type="submit">Save Changes</button>
            </form>
        </div>
    </div>
    <div id="success-modal" class="modal" style="display: none;">
        <div class="modal-content">
            <p>Profile updated successfully!</p>
            <button class="close-modal">OK</button>
        </div>
    </div>
`,
leaves: `
<div class="leaves-container">
        <h2>Leave Requests</h2>
        <p>Manage employee leave applications.</p>
        
        <button id="requestLeaveBtn" class="add-button">+ Request Leave</button>

        <table class="leaves-table">
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Leave Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id="leavesList">
                <tr>
                    <td>John Doe</td>
                    <td>Vacation</td>
                    <td>2025-04-10</td>
                    <td>2025-04-20</td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>Sick Leave</td>
                    <td>2025-03-25</td>
                    <td>2025-03-27</td>
                    <td>Approved</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Leave Request Modal -->
    <div id="leave-modal" class="modal">
        <div class="modal-content">
            <h3 class="modal-title">Request Leave</h3>
            <form id="leave-form">
                <div class="form-group">
                    <label for="leave-name">Employee Name:</label>
                    <input type="text" id="leave-name" required>
                </div>

                <div class="form-group">
                    <label for="leave-type">Leave Type:</label>
                    <select id="leave-type" required>
                        <option value="Vacation">Vacation</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Unpaid Leave">Unpaid Leave</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="leave-start">Start Date:</label>
                    <input type="date" id="leave-start" required>
                </div>

                <div class="form-group">
                    <label for="leave-end">End Date:</label>
                    <input type="date" id="leave-end" required>
                </div>

                <div class="modal-buttons">
                    <button type="submit" class="submit-btn">Submit</button>
                    <button type="button" class="close-modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Success Modal -->
    <div id="leave-success-modal" class="modal">
        <div class="modal-content">
            <p class="success-message">Leave request submitted successfully!</p>
            <button class="close-modal">OK</button>
        </div>
    </div>
`,
    attendance: `
        <div class="attendance-container">
        <h2>Attendance</h2>
        
        <div class="attendance-actions">
            <input type="date" id="attendance-date">
            <button id="filterAttendanceBtn">Filter</button>
            <button id="addAttendanceBtn" class="add-button">+ Add Attendance</button>
        </div>

        <table class="attendance-table">
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="attendanceList">
                <tr>
                    <td>John Doe</td>
                    <td>2025-03-24</td>
                    <td class="status">Present</td>
                    <td>
                        <button class="mark-absent">Mark Absent</button>
                    </td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>2025-03-24</td>
                    <td class="status">Absent</td>
                    <td>
                        <button class="mark-present">Mark Present</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Add Attendance Modal -->
    <div id="attendance-modal" class="modal" style="display: none;">
        <div class="modal-content">
            <h3>Add Attendance</h3>
            <form id="attendance-form">
                <label>Employee Name:</label>
                <input type="text" id="attendance-name" required>

                <label>Date:</label>
                <input type="date" id="attendance-date-input" required>

                <label>Status:</label>
                <select id="attendance-status" required>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="On Leave">On Leave</option>
                </select>

                <button type="submit">Save</button>
            </form>
            <button class="close-modal">Cancel</button>
        </div>
    </div>

    <!-- Success Modal -->
    <div id="attendance-success-modal" class="modal" style="display: none;">
        <div class="modal-content">
            <p>Attendance updated successfully!</p>
            <button class="close-modal">OK</button>
        </div>
    </div>
`,
    login: `
    <div class="login-container">
        <div class="login-card">
            <img src="assets/images/logo.svg" alt="HRMS Logo" class="login-logo">
            <h2>Sign in to WorkSphere</h2>

            <form id="login-form">
                <label>Email:</label>
                <input type="email" id="login-email" placeholder="Enter your email" required>

                <label>Password:</label>
                <input type="password" id="login-password" placeholder="Enter your password" required>

                <button type="submit" class="login-btn">Login</button>
            </form>

            <div class="social-login">
                <p>Or sign in with</p>
                <div class="social-login-buttons">
   <button class="social-btn"><img src="assets/images/facebook.svg" alt="Facebook"></button>
    <button class="social-btn"><img src="assets/images/google.svg" alt="Google"></button>
    <button class="social-btn"><img src="assets/images/apple.svg" alt="Apple"></button>
</div>
            </div>

            <div class="login-links">
                <a href="#" class="forgot-password">Forgot your password?</a>
            <p>Don't have an account yet?<a href="#" data-page="register" class="switch-auth"> Sign Up</a></p>
            </div>
        </div>
    </div>
`,
    register: `
    <div class="auth-container">
        <div class="auth-card">
            <img src="assets/images/logo.svg" alt="HRMS Logo" class="auth-logo">
            <h2>Registration</h2>
            <form id="register-form">
                <label>Name and Surname:</label>
                <input type="text" placeholder="Enter your name and surname" required>

                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required>

                <label>Password:</label>
                <input type="password" placeholder="Enter your password" required>

                <button type="submit" class="auth-button">Register</button>
            </form>

            <div class="social-login-buttons">
    <button class="social-btn"><img src="assets/images/facebook.svg" alt="Facebook"></button>
    <button class="social-btn"><img src="assets/images/google.svg" alt="Google"></button>
    <button class="social-btn"><img src="assets/images/apple.svg" alt="Apple"></button>
</div>


            <p>You have an account? <a href="#" data-page="login" class="switch-auth">Login</a></p>
        </div>
    </div>
    `
};

document.addEventListener("DOMContentLoaded", () => {
    function loadPage(page) {
        const content = document.getElementById('content');
        if (!content) return;
        content.innerHTML = routes[page] || '<h2>Page not found</h2>';
    }

    document.querySelectorAll('.nav-links a, .auth-buttons a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            history.pushState({ page }, "", `#${page}`);
            loadPage(page);
        });
    });

    document.querySelector('.menu-toggle')?.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.toggle('active');
    });

    window.addEventListener("popstate", (event) => {
        const page = event.state?.page || "home";
        loadPage(page);
    });

    const page = location.hash.replace("#", "") || "home";
    loadPage(page);
});

document.addEventListener("DOMContentLoaded", () => {
    function loadPage(page) {
        const content = document.getElementById('content');
        if (!content) return;
        content.style.opacity = 0;
        setTimeout(() => {
            content.innerHTML = routes[page] || '<h2>Page not found</h2>';
            content.style.opacity = 1;
        }, 300);
    }
      
    
    document.querySelector('.menu-toggle')?.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.toggle('active');
    });
    
    window.addEventListener("popstate", (event) => {
        const page = event.state?.page || "home";
        loadPage(page);
    });
    
    const page = location.hash.replace("#", "") || "home";
    loadPage(page);
});
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("input", (e) => {
        if (e.target.id === "searchEmployees") {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll("#employeesList tr").forEach(row => {
                row.style.display = row.innerText.toLowerCase().includes(query) ? "" : "none";
            });
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.id === "addEmployeeBtn") {
            alert("Feature to add employees coming soon!");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    function loadPage(page) {
        const content = document.getElementById('content');
        if (!content) return;
        content.innerHTML = routes[page] || '<h2>Page not found</h2>';
    }

    document.body.addEventListener('click', function (e) {
        const link = e.target.closest('[data-page]');
        if (link) {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            history.pushState({ page }, "", `#${page}`);
            loadPage(page);
        }
    });

    window.addEventListener("popstate", (event) => {
        const page = event.state?.page || "home";
        loadPage(page);
    });

    const page = location.hash.replace("#", "") || "home";
    loadPage(page);
});
document.body.addEventListener("submit", function (e) {
    if (e.target.matches(".profile-form")) {
        e.preventDefault(); 

        const modal = document.getElementById("success-modal");
        if (modal) {
            modal.style.display = "flex";
        }
    }
});

document.body.addEventListener("click", function (e) {
    if (e.target.matches(".close-modal")) {
        const modal = document.getElementById("success-modal");
        if (modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    function loadPage(page) {
        const content = document.getElementById("content");
        if (!content) return;
        content.innerHTML = routes[page] || "<h2>Page not found</h2>";
    }

    document.body.addEventListener("click", function (e) {
        const link = e.target.closest("[data-page]");
        if (link) {
            e.preventDefault();
            const page = link.getAttribute("data-page");
            history.pushState({ page }, "", `#${page}`);
            loadPage(page);
        }
    });

    document.body.addEventListener("submit", function (e) {
        if (e.target.id === "edit-profile-form") {
            e.preventDefault();

            const modal = document.getElementById("success-modal");
            if (modal) {
                modal.style.display = "flex";
            }
        }
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("close-modal")) {
            const modal = document.getElementById("success-modal");
            if (modal) {
                modal.style.display = "none";
            }
        }
    });

    const page = location.hash.replace("#", "") || "home";
    loadPage(page);
});
document.body.addEventListener("click", function (e) {
    if (e.target.id === "requestLeaveBtn") {
        const modal = document.getElementById("leave-modal");
        if (modal) {
            modal.style.display = "flex";
        }
    }

    if (e.target.classList.contains("close-modal")) {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.style.display = "none";
        });
    }
});

document.body.addEventListener("submit", function (e) {
    if (e.target.id === "leave-form") {
        e.preventDefault();

        const name = document.getElementById("leave-name").value;
        const type = document.getElementById("leave-type").value;
        const start = document.getElementById("leave-start").value;
        const end = document.getElementById("leave-end").value;

        const newRow = `
            <tr>
                <td>${name}</td>
                <td>${type}</td>
                <td>${start}</td>
                <td>${end}</td>
                <td>Pending</td>
            </tr>
        `;

        document.getElementById("leavesList").innerHTML += newRow;

        document.getElementById("leave-modal").style.display = "none";

        document.getElementById("leave-success-modal").style.display = "flex";

        e.target.reset();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    function setupLeaveModal() {
        const leaveModal = document.getElementById("leave-modal");
        const successModal = document.getElementById("leave-success-modal");
        const requestLeaveBtn = document.getElementById("requestLeaveBtn");
        const leaveForm = document.getElementById("leave-form");

        if (!leaveModal || !successModal || !requestLeaveBtn || !leaveForm) return;

        leaveModal.style.display = "none";
        successModal.style.display = "none";

        requestLeaveBtn.addEventListener("click", () => {
            leaveModal.style.display = "flex";
        });

        document.querySelectorAll(".close-modal").forEach(button => {
            button.addEventListener("click", () => {
                leaveModal.style.display = "none";
                successModal.style.display = "none";
            });
        });

        leaveForm.addEventListener("submit", (e) => {
            e.preventDefault();
            leaveModal.style.display = "none";
            successModal.style.display = "flex";
        });

        window.addEventListener("click", (event) => {
            if (event.target === leaveModal) leaveModal.style.display = "none";
            if (event.target === successModal) successModal.style.display = "none";
        });
    }

    function observeLeavesPage() {
        const observer = new MutationObserver(() => {
            if (location.hash.includes("leaves")) {
                setTimeout(setupLeaveModal, 50); 
            }
        });

        observer.observe(document.getElementById("content"), { childList: true, subtree: true });
    }

    observeLeavesPage();
});


const style = document.createElement("style");
style.innerHTML = `
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease-in-out;
    }

    .modal-content {
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        text-align: center;
        width: 350px;
        animation: slideIn 0.3s ease-in-out;
    }

    .modal-title {
        font-size: 1.5em;
        margin-bottom: 15px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        text-align: left;
    }

    .form-group label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .form-group input,
    .form-group select {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
    }

    .modal-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .submit-btn {
        background: #4CAF50;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
    }

    .close-modal {
        background: #f44336;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
    }

    .success-message {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 15px;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from { transform: translateY(-20px); }
        to { transform: translateY(0); }
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function (e) {
        if (e.target.matches("#filterAttendanceBtn")) {
            alert("Filter functionality coming soon!");
        }
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.matches("#addAttendanceBtn")) {
            const modal = document.getElementById("attendance-modal");
            if (modal) modal.style.display = "flex";
        }
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.matches(".close-modal")) {
            const modal = document.getElementById("attendance-modal");
            if (modal) modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function (e) {
        if (e.target.matches("#addAttendanceBtn")) {
            const modal = document.getElementById("attendance-modal");
            if (modal) modal.style.display = "flex";
        }
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.matches(".close-modal")) {
            const modal = document.getElementById("attendance-modal");
            if (modal) modal.style.display = "none";
        }
    });

    document.getElementById("attendance-form").addEventListener("submit", function (e) {
        e.preventDefault(); 
        alert("Attendance saved successfully!"); 
        document.getElementById("attendance-modal").style.display = "none"; 
    });
});

