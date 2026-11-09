// ! Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navLinks.style.display = "flex";
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

});


// ****** Menu Link Click

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.style.display = "none";
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});