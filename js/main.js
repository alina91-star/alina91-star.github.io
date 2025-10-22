/* ===========================================
   Slideshow with Navigation + Lightbox
   =========================================== */

// Start from first slide
let slideIndex = 1;
showSlides(slideIndex);

// Manual controls (Prev/Next)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dots control
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Main slideshow logic
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and activate the correct dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto slideshow every 5 seconds
setInterval(() => { plusSlides(1); }, 5000);


/* ===========================================
   LIGHTBOX FUNCTIONALITY (Fullscreen view)
   =========================================== */
const slides = document.querySelectorAll(".slide img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

slides.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    lightboxImg.classList.add("zoomIn");
  });
});

// Close lightbox
function closeLightbox() {
  lightbox.style.display = "none";
  lightboxImg.classList.remove("zoomIn");
}

/* ===========================================
   Smooth Scroll for Navbar Links
   =========================================== */
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
