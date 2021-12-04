const root = document.getElementById('root');
const pa = document.createElement('p')
const btn = document.createElement('button');
const p1 = ('If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.');
const p2 =('If life were predictable it would cease to be life, and be without flavor.');
const p3 =('Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.');
const p4 =('The greatest glory in living lies not in never falling, but in rising every time we fall.');
const p5 =('The way to get started is to quit talking and begin doing.');

btn.innerHTML = 'next';

pa.appendChild=(root);


btn.addEventListener('click',function () {
   const random = Math.random()*6;
   pa.innerHTML = ('p' + random);
})