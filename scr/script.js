// 监听滚动事件，修改导航栏样式
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/90', 'shadow-md');
    } else {
        navbar.classList.remove('bg-white/90', 'shadow-md');
    }
});
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('fa-bars', 'fa-times'); // 切换图标
});
new Swiper('.swiper-container', {
    loop: true, // 循环播放
    autoplay: { delay: 5000 }, // 自动切换间隔
    pagination: { el: '.swiper-pagination', clickable: true }, // 分页器可点击
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, // 前后导航按钮
});