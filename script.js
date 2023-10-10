document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        toggleComponentsTheme();
    });

    function toggleComponentsTheme() {
        const components = document.querySelectorAll(".component");
        components.forEach(component => {
            component.classList.toggle("dark-mode");
        });
    }
});
