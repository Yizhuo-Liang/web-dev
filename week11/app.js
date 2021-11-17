const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nextBtn");
const text = document.querySelector("#text");
const scream = document.querySelector("#scream_image");
let count = 1;
let prevDisable = false;

prev.addEventListener('click', () => {
    if(count > 1 && !prevDisabble) {
        count--;
        text.innerHTML = count;
    }
});

next.addEventListener('click', () => {
    count++;
    text.innerHTML = count;

    if(count === 4) {
        prev.style.opacity = 0.5;
        prevDisable = true;
    }

    if(count === 5) {
        prev.style.opacity = 0;
    }

    if(count === 6) {
        text.style.color = "red";
    }

    if(count === 8) {
        next.style.width = "5vw";
    }

    if(count === 9) {
        next.style.width = "4vw";
    }

    if(count === 10) {
        next.style.width = "3vw";
    }

    if(count === 11) {
        next.style.width = "2vw";
    }

    if(count === 12) {
        next.style.width = "1vw";
    }

    if(count===13){
        document.body.style.backgroundImage="url('https://yizhuo-liang.github.io/pictures/scream.jpeg%27)";
        scream.style.opacity = 1;
    }
});