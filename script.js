// Responsive menu btn

const menuBtn = document.querySelector(".menu-btn");
const navBtn = document.querySelector(".nav");


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navBtn.classList.toggle("active");
})

// video slider

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })

    slides.forEach((slide) => {
        slide.classList.remove("active");
    })

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});