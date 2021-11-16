var country = document.getElementById('countries');

fetch("https://restcountries.com/v3.1/all")
    .then(function (data) {
        return data.json();
    })
    .then(function (countries) {
        countries.forEach(element => {
            var list = document.createElement('div');
            list.classList.add('card');

            list.innerHTML = `
            <div class="cardHeader">
                <img src="${element.flags.png}" alt="flags" />
            </div>
            <div class="cardBody">
                <h2 class="element-name">${element.name.common}</h2>
                <h3>
                    <strong>Population:</strong>
                    ${element.population}
                </h3>
                <h3>
                    <strong>Region:</strong>
                    ${element.region}
                </h3>
                <h3>
                    <strong>Capital:</strong>
                    ${element.capital}
                </h3>
            </div>
        `
            country.appendChild(list);
        })

    })
    .catch(function (err) {
        console.error(err)
    })

