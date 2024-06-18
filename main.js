CurrentSlideID = 1;

sliderElement = document.getElementById('slider')
totalSlides = sliderElement.childElementCount;
console.log(totalSlides);

function next() {
    if (totalSlides < CurrentSlideID) {
        CurrentSlideID++;
        showSlide();
    }
}

function prev() {
    if (CurrentSlideID > 1) {
        CurrentSlideID--;
        showSlide();
    }
}
function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName("li")
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (CurrentSlideID === index + 1) {
            element.classList.remove("hidden")
        }
        else {
            element.classList.add("hidden")
        }

    }

}