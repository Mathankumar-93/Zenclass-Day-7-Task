//Get all the countries with a population of less than 2 lakhs using Filter function.

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    // console.log(countries);
    countries.filter((value) => {
        if (value.population < 200000) {
            console.log(value.name.common);
            console.log(value.population);
        };
    })
    
};
    xhr.send();