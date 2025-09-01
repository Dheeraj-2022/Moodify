// Form validation
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!email || !password) {
                alert("All fields are required!");
            } else {
                alert("Login successful!");
                window.location.href = "dashboard.html";
            }
        });
    }

    // Emotion detection simulation
    const detectBtn = document.getElementById("detectEmotion");
    if (detectBtn) {
        detectBtn.addEventListener("click", () => {
            document.getElementById("emotionResult").innerText = "Happy 😊";
            setTimeout(() => {
                window.location.href = "recommendations.html";
            }, 1000);
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});

// Dark mode styles
const style = document.createElement("style");
style.textContent = `
.dark-mode {
  background: #121212;
  color: #fff;
}
.dark-mode header, .dark-mode footer {
  background: #000;
}
.dark-mode .song-card {
  background: #222;
  color: #fff;
}
`;
document.head.appendChild(style);
