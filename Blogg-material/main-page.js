/* function openNav() {
    document.getElementById("hidden").style.display = "flex";
    document.getElementById("toggle-sidebar").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("toggle-sidebar").style.visibility = "visible";
}

 */
// toTheTop Button
let myButton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Slideshow for the blogPost1
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
};

// Search Bar

