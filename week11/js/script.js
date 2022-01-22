const audioo1 = document.getElementById("au1"); 
const audioo2 = document.getElementById("au2"); 
const audioo3 = document.getElementById("au3"); 
const audioo4 = document.getElementById("au4"); 
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

btn1.addEventListener('click',function playAudio() { 
    audioo1.play(); 
})