const notFound = document.getElementById('notFound')

const searchPhone = () => {
    const searchFirld = document.getElementById('search-firld');
    const searchText = searchFirld.value;
    if (searchText == '') {
        notFound.style.display = 'block'
    }
    else {
        searchFirld.value = '';
        const url = `
        https://openapi.programming-hero.com/api/phones?search=${searchText}
        `
        fetch(url)
            .then(res => res.json())
            .then(phones => displayPhoneResult(phones.data))
    }
}

const displayPhoneResult = data => {
    const searchResult = document.getElementById('search-result')

    searchResult.textContent = '';
    notFound.style.display = 'none'
    data.forEach(phone => {
        const div = document.createElement('div')

        div.classList.add('col');

        div.innerHTML = `
    <div onclick="lodePhoneDetails('${phone.slug}')" class="card h-100">
    <h1>${phone.brand}</h1>
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h1 class="card-title">${phone.phone_name}</h1>
    </div>
    </div>
    `
        searchResult.appendChild(div)
    })
}

// lodePhoneDetails
const lodePhoneDetails = slug => {
    const url = `
    https://openapi.programming-hero.com/api/phone/${slug}
    `
    fetch(url)
        .then(res => res.json())
        .then(phones => displayPhoneDetail(phones.data))
}

const displayPhoneDetail = phone => {
    const phoneDatails = document.getElementById('phone-details')
    phoneDatails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('col');

    div.innerHTML = `  
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h1 class="card-title">${phone.name}</h1>
    </div>
    <button onclick="buttonDetails('${phone.slug}')"> Details </button>
    <button onclick="sensorDetails('${phone.slug}')"> Sensor </button>
    <button onclick="buttonOthers('${phone.slug}')"> Others </button> 
    </div>
    `
    phoneDatails.appendChild(div);
}
// ButtonDetails

const buttonDetails = slug => {
    const url = `
    https://openapi.programming-hero.com/api/phone/${slug}
    `
    fetch(url)
        .then(res => res.json())
        .then(phones => displayButtonDetails(phones.data.mainFeatures))
}
const displayButtonDetails = phone => {
    const phoneDatails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.classList.add('col');
    div.innerHTML = `  
    <div class="card-body">
    <h1> MainFeatures </h1>
    <h1> storage : ${phone.storage}</h1>
    <h1> chipSet : ${phone.chipSet}</h1>
    <h1> displaySize : ${phone.displaySize}</h1>
    <h1>  memory : ${phone.memory}</h1>
    </div>
    `
    phoneDatails.appendChild(div);
}

// sensor
const sensorDetails = slug => {
    const url = `
    https://openapi.programming-hero.com/api/phone/${slug}
    `
    fetch(url)
        .then(res => res.json())
        // .then(phones => console.log(phones.data.mainFeatures.sensors[0]))
        .then(phones => displaySensorDetails(phones.data.mainFeatures))
}
const displaySensorDetails = phone => {
    const phoneDatails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.classList.add('col');
    div.innerHTML = `  
    <div class="card-body">
    <h1> Sensors  </h1>
    <h1>1. ${phone.sensors[0]} </h1>
    <h1>2. ${phone.sensors[1]} </h1>
    <h1>3. ${phone.sensors[2]} </h1>
    <h1>4. ${phone.sensors[3]} </h1>
    <h1>5. ${phone.sensors[4]} </h1>
    <h1>6. ${phone.sensors[5]} </h1>
    </div>
    `
    phoneDatails.appendChild(div);
}

// ButtonOthers

const buttonOthers = slug => {
    const url = `
    https://openapi.programming-hero.com/api/phone/${slug}
    `
    fetch(url)
        .then(res => res.json())
        .then(phones => displayOtherDetails(phones.data.others))
}

const displayOtherDetails = phone => {
    const phoneDatails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.classList.add('col');
    div.innerHTML = `  
    <div class="card-body">
    <h1> Others  </h1>
    <h1> Bluetooth : ${phone.Bluetooth}</h1>
    <h1>  GPS : ${phone.GPS}</h1>
    <h1>  NFC : ${phone.NFC}</h1>
    <h1>  Radio : ${phone.Radio}</h1>
    <h1>  USB : ${phone.USB}</h1>
    <h1> WLAN  : ${phone.WLAN}</h1>
    </div>
    `
    phoneDatails.appendChild(div);
}

