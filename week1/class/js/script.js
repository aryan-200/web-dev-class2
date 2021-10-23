const catImage = document.getElementById('cat')

let step = 0

setInterval(catWalk, 1000);

function catWalk() {

step++

catImage.style.right = `${step}px`

}