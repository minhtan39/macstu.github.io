function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const isOpen = sidebar.classList.toggle('open');
    menuButton.classList.toggle('open', isOpen);
}
/*Chạm vào bất kỳ Sidebar thu vào*/
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');

    // Kiểm tra nếu nhấp ra ngoài sidebar và menu button
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open');
        menuButton.classList.remove('open');
    }
});
