const audioo1 = document.getElementById("au1"); 
const audioo2 = document.getElementById("au2"); 
const audioo3 = document.getElementById("au3"); 
const audioo4 = document.getElementById("au4"); 
const audioo5 = document.getElementById("au5"); 
const audioo6 = document.getElementById("au6"); 
const audioo7 = document.getElementById("au7"); 
const audioo8 = document.getElementById("au8");
const audioo9 = document.getElementById("au9"); 
const audioo10 = document.getElementById("au10"); 
const audioo11 = document.getElementById("au11"); 
const audioo12 = document.getElementById("au12");
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn10 = document.getElementById("btn10")
const btn11 = document.getElementById("btn11")
const btn12 = document.getElementById("btn12")

btn1.addEventListener('click',function () { 
    audioo1.currentTime = 0;
    audioo1.play(); 
})

btn2.addEventListener('click',function () {
    audioo2.currentTime = 0;
    audioo2.play();
})

btn3.addEventListener('click',function () {
    audioo3.currentTime = 0;
    audioo3.play();
})

btn4.addEventListener('click',function () {
    audioo4.currentTime = 0;
    audioo4.play();
})

btn5.addEventListener('click',function () {
    audioo5.currentTime = 0;
    audioo5.play();
})

btn6.addEventListener('click',function () {
    audioo6.currentTime = 0;
    audioo6.play();
})

btn7.addEventListener('click',function () {
    audioo7.currentTime = 0;
    audioo7.play();
})

btn8.addEventListener('click',function () {
    audioo8.currentTime = 0;
    audioo8.play();
})

btn9.addEventListener('click',function () {
    audioo9.currentTime = 0;
    audioo9.play();
})

btn10.addEventListener('click',function () {
    audioo10.currentTime = 0;
    audioo10.play();
})

btn11.addEventListener('click',function () {
    audioo11.currentTime = 0;
    audioo11.play();
})

document.addEventListener('keydown',function (e) {
    if (e.key == 'a') {
        audioo1.currentTime = 0;
        audioo1.play()
    }
})

document.addEventListener('keydown',function (e) {
    if (e.key == 'a') {
        audioo2.currentTime = 0;
        audioo2.play()
    }
    if (e.key == 's') {
        audioo4.currentTime = 0;
        audioo4.play()
    }
    if (e.key == 'd') {
        audioo3.currentTime = 0;
        audioo3.play()
    }
    if (e.key == 'f') {
        audioo5.currentTime = 0;
        audioo5.play()
    }
    if (e.key == 'g') {
        audioo6.currentTime = 0;
        audioo6.play()
    }
    if (e.key == 'h') {
        audioo7.currentTime = 0;
        audioo7.play()
    }
    if (e.key == 'j') {
        audioo8.currentTime = 0;
        audioo8.play()
    }
    if (e.key == 'k') {
        audioo9.currentTime = 0;
        audioo9.play()
    }
    if (e.key == 'l') {
        audioo10.currentTime = 0;
        audioo10.play()
    }
    if (e.key == ';') {
        audioo11.currentTime = 0;
        audioo11.play()
    }
    if (e.key == 'i') {
        audioo12.currentTime = 0;
        audioo12.play()
    }
})

