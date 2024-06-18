//offerbar
var offerbar = document.querySelector(".offer-bar")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click", function () {
    offerbar.style.display = "none"
})


//Selecting side nav,Menu bar

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
//slider

document.addEventListener("DOMContentLoaded", function() {
   const slides = document.querySelectorAll(".sliderimage");
   const totalSlides = slides.length;
   let currentSlide = 0;
   const slideWidth = slides[0].clientWidth; // Get the width of each slide

   function showSlide(slideIndex) {
       const newMargin = -slideIndex * slideWidth; // Calculate the new margin
       document.querySelector(".slidercontainer").style.marginLeft = newMargin + "px";
   }

   function nextSlide() {
       currentSlide = (currentSlide + 1) % totalSlides;
       showSlide(currentSlide);
   }

   function prevSlide() {
       currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
       showSlide(currentSlide);
   }

   document.querySelector(".leftsliderbutton").addEventListener("click", function() {
       prevSlide();
   });

   document.querySelector(".rightsliderbutton").addEventListener("click", function() {
       nextSlide();
   });
});

// heart


var heart = document.querySelectorAll(".heart")
heart.forEach(function(el) {
        var likebutton = el.querySelector("#likebutton")
        var redlikebutton = el.querySelector("#redlikebutton")
        likebutton.addEventListener("click",function () {
            likebutton.style.display="none"
            redlikebutton.style.display="block"
        })
        redlikebutton.addEventListener("click",function () {
            likebutton.style.display="block"
            redlikebutton.style.display="none"
        })
    }
)