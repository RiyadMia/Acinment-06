const searchPhone = () => {
    const searchFirld = document.getElementById('search-firld');
    // clear data
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
    
    `
    phoneDatails.appendChild(div);
}