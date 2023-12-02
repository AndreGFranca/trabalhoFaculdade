document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('nav-menu-icon');
    const menu = document.querySelector('.nav-menu');
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});