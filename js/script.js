const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);








document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-btn");

    function setActiveTab(tabName) {
        sections.forEach(section => {
            section.classList.toggle("active", section.dataset.tabContent === tabName);
        });

        buttons.forEach(button => {
            button.classList.toggle("active", button.dataset.tabBtn === tabName);
        });
    }

    // Establecer "project" como la sección activa por defecto
    setActiveTab("project");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            setActiveTab(button.dataset.tabBtn);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".project-list").classList.add("loaded");
    }, 200); // Retraso para un efecto más fluido
});
