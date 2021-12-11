const service = document.getElementById('service');
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const amount = document.getElementById('amount');
const calculate = document.getElementById('calculate');

calculate.addEventListener('click',function () {
   const billNum = bill.value
   const peopleNum = people.value
   const serviceNum = service.value
   const amountNum = billNum*serviceNum/100/peopleNum 
   amount.innerHTML = Math.round(amountNum);
})