const add = document.getElementById('plus')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const stop = document.getElementById('stop')
let minute = document.getElementById('minute')
let second = document.getElementById('second')


function clock() {
    play.addEventListener('click',function player() {
        for (let i = 0; i < play.length; i++) {
            i += second -1;
        }
        setInterval(1000,player)
    })
    
    pause.addEventListener('click',function pauser() {
        setInterval(0,play)
    })
    
    stop.addEventListener('click',function stoper() {
        minute.innerHTML = 24;
        second.innerHTML = 59;
        
    })
}