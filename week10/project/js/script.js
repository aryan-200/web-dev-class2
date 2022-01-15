const URL = 'https://randomuser.me/api';
const container = document.getElementById('container')
const addbtn = document.getElementById('addbtn')
const error = document.getElementById('error')

addbtn.addEventListener('click',function add() {

    fetch(URL)
    .then(function (response) {
        return response.json()
    })
    
    .then(function (data) {
        console.log(data);
        const newform = document.createElement('div')
        newform.className = 'form';
        const image = document.createElement('img')
        image.className = 'item';
        image.src = data.results[0].picture.large;
        const username = document.createElement('h4')
        username.className = 'item';
        username.innerHTML = data.results[0].name.first + data.results[0].name.last;
        const location = document.createElement('h4')
        location.className = 'item';
        location.innerHTML = data.results[0].location.city +',' + data.results[0].location.country;
        const address = document.createElement('p')
        address.innerHTML = data.results[0].location.street.name;
        address.className = 'item';
        const age = document.createElement('p')
        age.innerHTML = data.results[0].registered.age;
        age.className = 'item';
        const email = document.createElement('p')
        email.href = "mailto:"+ data.results[0].email;
        email.className = 'item';
        email.href = "mailto:"+ data.results[0].email;
        const phone = document.createElement('p')
        phone.href = "tel:"+data.results[0].phone;
        phone.innerHTML = data.results[0].phone;
        phone.className = 'item';
        const delet = document.createElement('button')
        delet.innerHTML = 'remove';
        delet.className = 'removebtn';
        
        newform.appendChild(image)
        newform.appendChild(username)
        newform.appendChild(location)
        newform.appendChild(address)
        newform.appendChild(age)
        newform.appendChild(email)
        newform.appendChild(phone)
        newform.appendChild(delet)
        container.appendChild(newform);
        
        delet.addEventListener('click',function () {
            newform.remove()
        })
    })
    .catch(function (errore) {
        error.innerHTML = 'something wrong'
    })
})