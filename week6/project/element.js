const root = document.getElementById('root')
const div1 = document.createElement('div');
const div2 = document.createElement('div')
const button1 = document.createElement('button')
const blockqoute = document.createElement('blockqoute');
const h2 = document.createElement('h2')

blockqoute.innerHTML ='Wisely, and slow. They stumble that run fast';
blockqoute.id = 'quote';
blockqoute.className = 'transition';

h2.innerHTML = 'William Shakespeare'
h2.id = 'author';

div1.className = 'quote';
div1.appendChild(blockqoute);
div1.appendChild(h2);
root.appendChild(div1);

div2.className = 'buttons'
button1.id = 'button'
button1.innerHTML = 'new qoute'
div2.appendChild(button1);
root.appendChild(div2)

/* <div class="quote">
<blockquote class="transition" id="quote">Wisely, and slow. They stumble that run fast</blockquote>
<h2 id="author">William Shakespeare</h2>
<div class="clearFix"></div>
</div>

<div class="buttons">
<button id="button">New quote</button>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-tumblr"></i></a>
</div> */