//Print the following details name, capital, flag, using forEach function.

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    // console.log(countries);
    countries.forEach((value) => {
        console.log(value.name.common);
        console.log(value.capital);
        console.log(value.flag);
    });
    
};
    xhr.send();
