const url = 'https://randomuser.me/api';
const refresh = document.getElementById('refresh')
const profile = document.getElementById('profile')
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
    email.href = "mailto:"+ data.results[0].email;
    phone.href = "tel:"+data.results[0].phone;
    phone.innerHTML = data.results[0].phone;
    age.innerHTML = data.results[0].registered.age;
    address.innerHTML = data.results[0].location.street.name;
    profile.innerHTML = data.results[0].name.title;
})

refresh.addEventListener('click',  function (data){
    fetch(url)
    .then(function (response) {
    return response.json()

    })
    .then(function (data) {
        console.log(data)
        img.src = data.results[0].picture.large;
        nam.innerHTML = data.results[0].name.first + data.results[0].name.last;
        locationl.innerHTML = data.results[0].location.city +',' + data.results[0].location.country;
        email.href = "mailto:"+ data.results[0].email;
        email.innerHTML = data.results[0].email;
        phone.href = "tel:"+data.results[0].phone;
        phone.innerHTML = data.results[0].phone;
        age.innerHTML = data.results[0].registered.age;
        address.innerHTML = data.results[0].location.street.name;
        profile.innerHTML = data.results[0].name.title;
    })
})