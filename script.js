let current = 0;
const headerImage = document.getElementById('headerimage');
const images = document.querySelectorAll('#headerimage img');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

function updateCarousel() {
  // Calculate single slide width in pixels and translate by that amount
  const totalWidth = headerImage.getBoundingClientRect().width;
  const slideWidth = totalWidth / images.length;
  const offset = -current * slideWidth;
  headerImage.style.transform = `translateX(${offset}px)`;
}

// Update on resize to keep calculations correct
window.addEventListener('resize', updateCarousel);

// Initialize position
updateCarousel();

leftArrow.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  updateCarousel();
});

rightArrow.addEventListener('click', () => {
  current = (current + 1) % images.length;
  updateCarousel();
});
