const images = document.getElementsByClassName('image');

const modal = document.getElementById('modal1');

const img = document.getElementById('img');

const close = document.getElementById('close')

for (let i = 0; i < images.length; i++) {
    
    images[i].addEventListener('click',showimg);
    
    function showimg(e) {
        modal.style.display = 'block';
        img.src = e.target.src;
    }
    
    close.addEventListener('click',hideimg);
    function hideimg() {
        modal.style.display = 'none'
    }
}







//first modal
//let modal1 = document.getElementById('modal1');

//first btn
//let btn1 = document.getElementById('btn1')

//close button
//let closebtn = document.getElementById('close')

//to get open button listener
//btn1.addEventListener('click',showmodal);

//to get close button listener
//closebtn.addEventListener('click',hidemodal);

//function to use show button
//function showmodal() {
  //  modal1.style.display = 'block';
//}

//function to use hide button
//function hidemodal() {
  //  modal1.style.display = 'none'
//}

