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
            .then(phones => displayMealDetail(phones.data))
    }
}

const displayMealDetail = data => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    data.forEach(phone => {
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
    <div onclick="lodeMealDetails(${phone.slug})" class="card h-100">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h1 class="card-title">${phone.phone_name}</h1>
  </div>
  </div>
    
    `
        searchResult.appendChild(div)
    })
}
