
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(n) {
      slides.forEach(slide => slide.style.transform = `translateX(-${n * 100}%)`);
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 2000);
  });
  

  document.getElementById("login-button").addEventListener("click", function() {
    document.getElementById("login-popup").style.display = "flex";
  });
  
  document.getElementById("close-login-popup").addEventListener("click", function() {
    document.getElementById("login-popup").style.display = "none";
  });
  
  document.addEventListener("click", function(event) {
    if (event.target.id === "login-popup") {
      document.getElementById("login-popup").style.display = "none";
    }
  });
  
  
  
  