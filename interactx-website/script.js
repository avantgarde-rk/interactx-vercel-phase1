// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

mobileMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function showDescription(pack) {
    const descriptions = {
        Silver: "The Silver Pack includes basic features such as email support and limited cloud storage.",
        Gold: "The Gold Pack includes all Silver features plus advanced analytics and priority customer support.",
        Platinum: "The Platinum Pack includes all Gold features plus dedicated account management and unlimited storage."
    };

    const descriptionBox = document.getElementById("description");
    descriptionBox.textContent = descriptions[pack];
    descriptionBox.style.display = "block";
}
