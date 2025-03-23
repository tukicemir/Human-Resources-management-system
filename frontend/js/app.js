function navigate(page) {
    let content = "";

    switch(page) {
        case "home":
            content = "<h2>Welcome to HRMS</h2><p>This is the home page.</p>";
            break;
        case "login":
            content = `
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" required>
                    <input type="password" placeholder="Password" required>
                    <button type="submit">Login</button>
                </form>
            `;
            break;
        case "register":
            content = `
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Full Name" required>
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Password" required>
                    <button type="submit">Register</button>
                </form>
            `;
            break;
        case "dashboard":
            content = "<h2>Dashboard</h2><p>Welcome to your dashboard.</p>";
            break;
        default:
            content = "<h2>Page not found</h2>";
    }

    document.getElementById("app").innerHTML = content;
}

// Inicijalno učitaj Home stranicu
document.addEventListener("DOMContentLoaded", () => navigate("home"));
