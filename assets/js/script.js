const mobileToggle = document.querySelector(".mobile-toggle");
const headerNav = document.querySelector(".header-nav");

mobileToggle.addEventListener("click", () => {
    headerNav.classList.toggle("active")
});