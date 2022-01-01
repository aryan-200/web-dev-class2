const url = 'https://randomuser.me/api';
const refresh = document.getElementById('refresh')
const img = document.getElementById('image');
const email = document.getElementById('email');
const phone = document.getElementById('phon');
const age = document.getElementById('age');
const address = document.getElementById('address');
const locationl = document.getElementById('location');
const nam = document.getElementById('name');

fetch(url)
.then(function (response) {
   return response.json()

})
.then(function (data) {
    console.log(data)
    img.src = data.results[0].picture.large;
    nam.innerHTML = data.results[0].name.first + data.results[0].name.last;
    locationl.innerHTML = data.results[0].location.city +',' + data.results[0].location.country;
    email.innerHTML = data.results[0].email;
    phone.innerHTML = data.results[0].phone;
    age.innerHTML = data.results[0].registered.age;
    address.innerHTML = data.results[0].location.street.name;
})

refresh.addEventListener('click',  function refresh(){
    window.location.reload("Refresh")
})