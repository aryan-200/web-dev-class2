const warning = document.getElementById('warning');
const True = document.getElementById('true')
const creditNumEl = document.getElementById('creditNumEl');
const check = document.getElementById('check');

check.addEventListener('click',function () {
    const clickNum = creditNumEl.value;
    console.log(clickNum);
    console.log(checkcharecterNumber(clickNum));
    console.log(checkEven(clickNum));
    console.log(f(clickNum));
})

function checkcharecterNumber(string) {
    if (string.length == 16) {
        //warning.style.display = block;
        return true
    }
    else{
        // warning.style.display = none;
        return false
    }
}

function checkEven(string) {
    if (string % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}

function f(string) {
    let o = 0;
    for (let i = 0; i < string.length; i++) {
         o = o + parseInt(string[i]);
    }
    if (o > 16) {
        
    }
    else{
        return false;
    }
}