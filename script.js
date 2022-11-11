let slides = 1;
newSlide(slides);

function freshslide(n) {
    newSlide(slides += n);
}

function currentSlide(n) {
    newSlide(slides = n);
}

function newSlide(n) {
    let i;
    let myslides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > myslides.length) {slides = 1}    
    if (n < 1) {slides = myslides.length}
    for (i = 0; i < myslides.length; i++) {
      myslides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    myslides[slides-1].style.display = "block";  
    dots[slides-1].className += " active";
  }