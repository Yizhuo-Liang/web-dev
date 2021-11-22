// Setup const variables with querySelector
const carouselSlide = document.querySelector('#carousel-slide1');
const carouselImage = document.querySelectorAll('#carousel-slide1 div');
const carouselSlide2 = document.querySelector('#carousel-slide2');
const carouselImage2 = document.querySelectorAll('#carousel-slide2 div');

// Buttons
const prevBtn1 = document.querySelector('#prevBtn1');
const nextBtn1 = document.querySelector('#nextBtn1');

// Variables setup
counter1 = 1;
counter2 = 1;
size = carouselImage[0].clientWidth;
size2 = carouselImage2[0].clientWidth;
vpWidth = document.documentElement.clientWidth;
// const mysteriousOffset = 0.008 * vpWidth;
const mysteriousOffset = 0;

// Setup the window when loading
window.addEventListener("load", function () {
    
    greatestWidth = carouselImage[0].clientWidth;
    for(i = 1; i < carouselImage.length; i++) {
        if(carouselImage[i].clientWidth > greatestWidth) greatestWidth = carouselImage[i].clientWidth;
    }

    // set the widths
    for(i = 0; i < carouselImage.length; i++) {
        carouselImage[i].style.width = greatestWidth + 'px';
        console.log("setted" + carouselImage[i].clientWidth + " " + greatestWidth);
    }

    size = greatestWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter1 - 0.08 * vpWidth - mysteriousOffset) + "px";

    greatestWidth = carouselImage2[0].clientWidth;
    for(i = 1; i < carouselImage2.length; i++) {
        if(carouselImage2[i].clientWidth > greatestWidth) greatestWidth = carouselImage2[i].clientWidth;
    }

    // set the widths
    for(i = 0; i < carouselImage2.length; i++) {
        carouselImage2[i].style.width = greatestWidth + 'px';
        // console.log("setted" + carouselImage2[i].clientWidth + " " + greatestWidth);
    }

    size2 = greatestWidth;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2 - 0.16 * vpWidth - mysteriousOffset) + "px";
});

// setup the window when resized
window.addEventListener("resize", function () {

    // update viewport width
    vpWidth = document.documentElement.clientWidth;

    greatestWidth = carouselImage[0].clientWidth;
    for(i = 1; i < carouselImage.length; i++) {
        if(carouselImage[i].clientWidth > greatestWidth) greatestWidth = carouselImage[i].clientWidth;
    }

    // set the widths
    for(i = 0; i < carouselImage.length; i++) {
        carouselImage[i].style.width = greatestWidth + 'px';
        // console.log("setted" + carouselImage[i].clientWidth + " " + greatestWidth);
    }

    size = greatestWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter1 - 0.08 * vpWidth - mysteriousOffset) + "px";

    greatestWidth = carouselImage2[0].clientWidth;
    for(i = 1; i < carouselImage2.length; i++) {
        if(carouselImage2[i].clientWidth > greatestWidth) greatestWidth = carouselImage2[i].clientWidth;
    }

    // set the widths
    for(i = 0; i < carouselImage2.length; i++) {
        carouselImage2[i].style.width = greatestWidth + 'px';
        // console.log("setted" + carouselImage2[i].clientWidth + " " + greatestWidth);
    }

    size2 = greatestWidth;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2 - 0.16 * vpWidth - mysteriousOffset) + "px";
});

// Button Listeners

nextBtn1.addEventListener('click', () => {
    if(counter1 == carouselImage.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter1++;
    // size = carouselImage[counter - 1].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter1 - 0.08 * vpWidth * counter1 - mysteriousOffset) + 'px';
});

prevBtn1.addEventListener('click', () => {
    if(counter1 == 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter1--;
    // size = carouselImage[counter + 1].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter1 - 0.08 * vpWidth * counter1 - mysteriousOffset) + 'px';
});

nextBtn2.addEventListener('click', () => {
    if(counter2 == carouselImage2.length - 1) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    // if(counter2 == 1) {
    //     carouselSlide2.style.transform = 'translateX(' + (-size2 * 3.2 * counter2 - 0.16 * vpWidth * counter2 - mysteriousOffset) + 'px';
    //     counter2++;
    //     return;
    // }
    counter2++;
    // size = carouselImage[counter - 1].clientWidth;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2 - 0.16 * vpWidth * counter2 - mysteriousOffset) + 'px';
});

prevBtn2.addEventListener('click', () => {
    if(counter2 == 1) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    // if(counter2 == 1) {
    //     carouselSlide2.style.transform = 'translateX(' + (-size2 * 3.2 * counter2 - 0.16 * vpWidth * counter2 - mysteriousOffset) + 'px';
    //     counter2--;
    //     return;
    // }
    counter2--;
    // size = carouselImage[counter + 1].clientWidth;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2 - 0.16 * vpWidth * counter2 - mysteriousOffset) + 'px';
});

carouselSlide.addEventListener('transitioned', () => {
    if(carouselImage[counter].id === 'lastClone1') {
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
    if(carouselImage[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
});

g2 = document.querySelector('.two');
g5 = document.querySelector('.five');
g8 = document.querySelector('.eight');
gex = document.getElementById('bb');

document.onmousemove = function() {
    if(g5.matches('.five:hover') || gex.matches('.extra:hover')) {
        gex.style.opacity = 1;
        g2.style.opacity = 0;
        g8.style.opacity = 0;
    } else {
        gex.style.opacity = 0;
        g2.style.opacity = 1;
        g8.style.opacity = 1;
    }
}
