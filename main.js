// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Hero image fade animation
const heroImgs = [
    document.getElementById('heroImg1'),
    document.getElementById('heroImg2'),
    document.getElementById('heroImg3')
];
let heroIdx = 0;
setInterval(() => {
    const prevIdx = heroIdx;
    heroIdx = (heroIdx + 1) % heroImgs.length;
    heroImgs[prevIdx].style.opacity = 0;
    heroImgs[heroIdx].style.opacity = 1;
}, 5000);

// Testimoni slider logic
(function () {
    const track = document.getElementById('testiTrack');
    const prev = document.getElementById('testiPrev');
    const next = document.getElementById('testiNext');
    const prevSm = document.getElementById('testiPrevSm');
    const nextSm = document.getElementById('testiNextSm');
    const itemCount = 10;
    let current = 0;
    function getShowCount() {
        return window.innerWidth >= 768 ? 3 : 1;
    }
    function updateSlider() {
        const show = getShowCount();
        const itemWidth = track.children[0].offsetWidth + 16; // mx-2 = 8px left+right
        const container = document.getElementById('testiSlider');
        const containerWidth = container.offsetWidth;
        const totalWidth = itemCount * itemWidth;
        const maxOffset = Math.max(0, totalWidth - containerWidth);
        let offset = current * itemWidth;
        if (offset > maxOffset) {
            offset = maxOffset;
            current = Math.round(offset / itemWidth);
        }
        track.style.transform = `translateX(-${offset}px)`;
    }
    function nextSlide() {
        current++;
        updateSlider();
    }
    function prevSlide() {
        current--;
        if (current < 0) current = 0;
        updateSlider();
    }
    if (next) next.addEventListener('click', nextSlide);
    if (prev) prev.addEventListener('click', prevSlide);
    if (nextSm) nextSm.addEventListener('click', nextSlide);
    if (prevSm) prevSm.addEventListener('click', prevSlide);
    window.addEventListener('resize', updateSlider);
    updateSlider();
})();
