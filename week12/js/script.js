const root = document.getElementById('root')
const url = 'https://randomuser.me/api/?results=100'
fetch(url)
.then(function (response) {
   return response.json()

})

.then(function (data) {
    console.log(data.results);
    data.results.forEach(function (element) {
        console.log(element);
        const pn = document.createElement('p')
        pn.innerHTML= element.name.first;
        root.appendChild(pn)
                if (element.gender == 'male') {
            root.appendChild(pn)
       }

    })




    // for (let x = 0; x < 100; x++) {
    //     const pn = document.createElement('p')
    //     pn.innerHTML= data.results[x].name.first;
    //     if (data.results[x].gender == 'male') {
    //         root.appendChild(pn)

    //     }
    // }
})

   