/** PROJECT SLIDER */
let slideIndexProject1 = 1;
showSlidesProj(slideIndexProject1);

// Thumbnail image controls
function currentSlide(n) {
    showSlidesProj(slideIndexProject1 = n);
    slideIndexPic1 = 1;
}

function showSlidesProj(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesProject");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndexProject1 = 1}
    if (n < 1) {slideIndexProject1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexProject1-1].style.display = "block";
    dots[slideIndexProject1-1].className += " active";
    //   captionText.innerHTML = dots[slideIndexProject1-1].alt;
}

/** PIC SLEIDER */
/** Project 1 */
let slideIndexPic1 = 1;
showSlidesPic1(slideIndexPic1);

// Next/previous controls
function plusSlidesPic1(n) {
    showSlidesPic1(slideIndexPic1 += n);
}

function showSlidesPic1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesProj1");
    let dots = document.getElementsByClassName("dot1");
    if (n > slides.length) {slideIndexPic1 = 1}
    if (n < 1) {slideIndexPic1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexPic1-1].style.display = "block";
    dots[slideIndexPic1-1].className += " active";
}

/** Project 2 */
let slideIndexPic2 = 1;
showSlidesPic2(slideIndexPic2);

// Next/previous controls
function plusSlidesPic2(n) {
    showSlidesPic2(slideIndexPic2 += n);
}

function showSlidesPic2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesProj2");
    let dots = document.getElementsByClassName("dot2");
    if (n > slides.length) {slideIndexPic2 = 1}
    if (n < 1) {slideIndexPic2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexPic2-1].style.display = "block";
    dots[slideIndexPic2-1].className += " active";
}

/** Project 3 */
let slideIndexPic3 = 1;
showSlidesPic3(slideIndexPic3);

// Next/previous controls
function plusSlidesPic3(n) {
    showSlidesPic3(slideIndexPic3 += n);
}

function showSlidesPic3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesProj3");
    let dots = document.getElementsByClassName("dot3");
    if (n > slides.length) {slideIndexPic3 = 1}
    if (n < 1) {slideIndexPic3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexPic3-1].style.display = "block";
    dots[slideIndexPic3-1].className += " active";
}