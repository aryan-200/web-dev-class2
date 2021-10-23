catImage1 = document.getElementById('cat1')

catImage2 = document.getElementById('cat2')

let step1 = screen.width + 50;

let step2 = -100;

setInterval(catWalk1, 1);

setInterval(catWalk2, 1);

function catWalk1() {

	step1--

	catImage1.style.left = `${step1}px` ;

	if ( step1 < 0) {
	step1 = screen.width;
	}
}

function catWalk2() {

	step2++

	catImage2.style.left = `${step2}px` ;

	if ( step2 > screen.width) {
	step2 = -100;
	}
}