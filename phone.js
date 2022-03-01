const searchPhone = () => {
    const searchFirld = document.getElementById('search-firld');
    const searchText = searchFirld.value;
    if (searchText == '') {
        // place write someting to display
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
    data.forEach(phone => {
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
    <div onclick="lodePhoneDetails('${phone.slug}')" class="card h-100">
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
    </div>
    <button onclick="buttonDetails('${phone.slug}')"> Details </button>
    <button onclick="buttonOthers('${phone.slug}')"> Others </button> 
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
    <h1> releaseDate  : ${phone.releaseDate}</h1>
    
    </div>
    `
    phoneDatails.appendChild(div);
}