/*
// ===============================
// Click Sound on Link Click
// ===============================
const clickSound = new Audio('assets/click-sound.mp3');
clickSound.preload = 'auto';

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // delay navigation so sound can play
    clickSound.currentTime = 0;
    clickSound.play();

    const targetUrl = link.getAttribute('href');
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 200); // adjust delay to match sound length
  });
});

*/
// ===============================
// Mobile Menu Toggle (ARIA accessible)
// ===============================
const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");

menuToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("open");

  // accessibility toggle
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !isExpanded);
});

// ===============================
// Loading Screen Fade-Out
// ===============================
window.addEventListener('load', () => {
  const loader = document.getElementById('loading');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.style.display = 'none', 500);
  }
});


// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('#lightbox .close');

if (lightbox && lightboxImg && caption && closeBtn) {
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;

      // Use data-caption if available, else fallback to alt
      caption.textContent = img.getAttribute('data-caption') || img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return; // if no carousel, exit

  // Get images from data attribute
  const images = JSON.parse(carousel.getAttribute("data-images"));
  let currentIndex = 0;

  const projectImage = document.getElementById("project-image");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  function showImage(index) {
    projectImage.classList.add("fade-out");
    setTimeout(() => {
      projectImage.src = images[index];
      projectImage.onload = () => projectImage.classList.remove("fade-out");
    }, 300);
  }

  if (projectImage && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }
});

