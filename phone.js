const notFound = document.getElementById('notFound');

const searchPhone = () => {
    const searchFirld = document.getElementById('search-firld');
    const searchText = searchFirld.value;
    if (searchText == '') {
        notFound.style.display = 'block';
    }
    else {
        searchFirld.value = '';
        const url = `
        https://openapi.programming-hero.com/api/phones?search=${searchText}
        `
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhoneResult(data.data));
    }
}
const displayPhoneResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    notFound.style.display = 'none';
    const sliceResult = data.slice(0, 20);
    sliceResult.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div onclick="lodePhoneDetails('${phone.slug}')" class="card h-100">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h1 class="card-title">${phone.phone_name}</h1>
    <h3>${phone.brand}</h3>
    </div>
    </div>
    `
        searchResult.appendChild(div);
    })
}

// lodePhoneDetails
const lodePhoneDetails = slug => {
    const url = `
    https://openapi.programming-hero.com/api/phone/${slug}
    `
    fetch(url)
        .then(res => res.json())
        .then(phones => displayPhoneDetail(phones.data));
}

const displayPhoneDetail = phone => {
    const phoneDatails = document.getElementById('phone-details');
    phoneDatails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `  
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h1 class="card-title">${phone.name}</h1>
    </div>
    <button onclick="buttonDetails('${phone.slug}')"> Details </button>
    <button onclick="buttonOthers('${phone.slug}')"> Others </button> 
    <button onclick="relesButton('${phone.slug}')"> Releas </button> 
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
        .then(phones => displayButtonDetails(phones.data.mainFeatures));
}
const displayButtonDetails = phone => {
    const phoneDatails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `  
    <div class="card-body">
    <h1> MainFeatures </h1>
    <h4> storage : ${phone.storage}</h4>
    <h4> chipSet : ${phone.chipSet}</h4>
    <h4> displaySize : ${phone.displaySize}</h4>
    <h4>  memory : ${phone.memory}</h4>
    <h1> Sensors  </h1>
    <h4>1. ${phone.sensors[0]} </h4>
    <h4>2. ${phone.sensors[1]} </h4>
    <h4>3. ${phone.sensors[2]} </h4>
    <h4>4. ${phone.sensors[3]} </h4>
    <h4>5. ${phone.sensors[4]} </h4>
    <h4>6. ${phone.sensors[5]} </h4>
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
        .then(phones => displayOtherDetails(phones.data.others));
}

const displayOtherDetails = phone => {
    const phoneDatails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `  
    <div class="card-body">
    <h1> Others  </h1>
    <h4> Bluetooth : ${phone.Bluetooth}</h4>
    <h4>  GPS : ${phone.GPS}</h4>
    <h4>  NFC : ${phone.NFC}</h4>
    <h4>  Radio : ${phone.Radio}</h4>
    <h4>  USB : ${phone.USB}</h4>
    <h4> WLAN  : ${phone.WLAN}</h4>
   
    </div>
    `
    phoneDatails.appendChild(div);
}
// relesdate
const relesButton = slug => {
    const url = `
    https://openapi.programming-hero.com/api/phone/${slug}
    `
    fetch(url)
        .then(res => res.json())
        .then(phones => displayRelesDate(phones.data.releaseDate));
}
const displayRelesDate = phone => {
    const phoneDatails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `  
    <div class="card-body">
    <h1>  ReleaseDate </h1>
    <h4> ReleaseDate : ${phone ? phone : "Releasdate not found"}</h4>
    </div>
    `
    phoneDatails.appendChild(div);

}