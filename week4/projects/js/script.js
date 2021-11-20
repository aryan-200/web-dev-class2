const addbtn = document.getElementById('plus')
const playbtn = document.getElementById('play')
const pausebtn = document.getElementById('pause')
const stopbtn = document.getElementById('stop')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const minusbtn = document.getElementById('minus')
const tf = document.getElementById('numberpm')

let second = 0;
let startMinute = 25;
let startSecond = 59;

addbtn.addEventListener('click',function () {
    startMinute++;
    tf.innerHTML = startMinute;
})

minusbtn.addEventListener('click',function () {
    startMinute--;
    tf.innerHTML = startMinute;
})


playbtn.addEventListener('click',function () {

 setInterval(gotimer,10)
    function gotimer() {
        startSecond--;
        secondEl.innerHTML = startSecond;

        if (secondEl < 1) {
            startMinute--;
            minuteEl.innerHTML = startMinute;
            secondEl.innerHTML = 59;
            
        }

    }
})

stopbtn.addEventListener('click' ,function () {
    minuteEl.innerHTML = 25;
    secondEl.innerHTML = 0;
})

pausebtn.addEventListener('click' ,function () {
    clearInterval(gotimer)
})