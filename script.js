
/*
    Acknowledgment: code for make navbar sticky
    modified from the tutorial of W3School
*/

window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function makeSticky() {
    if(navbar == null) console.info("okay"); 
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}