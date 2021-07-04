var slideIndex = 1;
var buttonNext = document.querySelector("button");

function goToMainPage() {
  window.location.href = "main.html";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var next = document.querySelector(".next");
  var prev = document.querySelector(".prev");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n > slides.length-1) { next.style.display = "none";} else {next.style.display = "block";}
  if (n === 1) { prev.style.display = "none";} else {prev.style.display = "block";}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}


showSlides(slideIndex);
buttonNext.addEventListener("click", goToMainPage);
