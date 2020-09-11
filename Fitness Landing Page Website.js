function toggleMenu() {
    'use strict';
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}