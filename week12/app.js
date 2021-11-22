const msg = document.querySelector("#msg");
const mdm = document.querySelector("#mdm");

let clicked = false;

document.onmousemove = function() {

    if(msg.matches('#msg:hover') && !clicked) {
        msg.style.boxShadow = "2vw 10vh 20vw rgb(0, 0, 0, 0.42)";
    }

    if(clicked) {
        msg.style.boxShadow = "none";
    }

    if(clicked && !msg.matches('#msg:hover')) {
        clicked = false;
    }
}

msg.addEventListener("click", () => {
    clicked = true;
});