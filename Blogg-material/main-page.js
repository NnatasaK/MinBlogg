function openNav() {
    document.getElementById("hidden").style.display = "flex";
    document.getElementById("toggle-sidebar").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("toggle-sidebar").style.visibility = "visible";
}


// Get the button
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}