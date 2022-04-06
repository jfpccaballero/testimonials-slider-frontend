let carousel = document.querySelector(".carousel");
let slides = Array.from(carousel.children);

let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

let last = slides[slides.length - 1];
let first = slides[0];

let moveSlide = (currentSlide, targetSlide) => {
    currentSlide.classList.remove("active");
    currentSlide.classList.add("not-active");
    targetSlide.classList.remove("not-active");
    targetSlide.classList.add("active");
}

slides.forEach(slide => {
    if(!slide.classList.contains("active")) {
        slide.classList.add ("not-active");
    }
    if (first.classList.contains("active")) {
        prevButton.classList.add("not-active")
    }
    
    window.onclick = (e) => {
        let currentSlide = carousel.querySelector(".active");
        if (e.target.matches(".next")){
            let nextSlide = currentSlide.nextElementSibling;
            moveSlide(currentSlide, nextSlide);
            if (prevButton.classList.contains("not-active")){
                prevButton.classList.remove("not-active");
            }
            if (nextSlide == last) {
                nextButton.classList.add("not-active");
            }
        } else if (e.target.matches(".prev")) {
            let prevSlide = currentSlide.previousElementSibling;
            moveSlide(currentSlide, prevSlide);
            if (nextButton.classList.contains("not-active")){
                nextButton.classList.remove("not-active");
            }
            if (prevSlide === first) {
                prevButton.classList.add("not-active");
            }
        } 
    }
});