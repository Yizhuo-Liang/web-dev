const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nextBtn");
const text = document.querySelector("#text");
let count = 1;

prev.addEventListener('click', () => {
    if(count > 1) {
        count--;
        text.innerHTML = count;
    }
});

next.addEventListener('click', () => {
    count++;
    text.innerHTML = count;
});