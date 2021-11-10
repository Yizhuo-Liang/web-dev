g1 = document.getElementsByClassName('four');
g2 = document.querySelector('.two');
g3 = document.querySelector('.three');
g4 = document.querySelector('.four');
g5 = document.querySelector('.five');
g6 = document.querySelector('.six');
g7 = document.querySelector('.seven');
g8 = document.querySelector('.eight');
g9 = document.querySelector('.nine');
gex = document.getElementById('bb');
wrapper = document.querySelector('.wrapper');

function move() {
    console.info("wth");
    if(g5.matches('.five:hover' || gex.matches('.extra:hover'))) {
        gex.style.opacity = 1;
    } else {
        gex.style.opacity = 0;
    }
}
