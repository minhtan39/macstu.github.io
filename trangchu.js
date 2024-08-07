function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const isOpen = sidebar.classList.toggle('open');
    menuButton.classList.toggle('open', isOpen);
}