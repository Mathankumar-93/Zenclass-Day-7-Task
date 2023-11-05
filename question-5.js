//Print the country that uses US dollars as currency.

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    // console.log(countries);
    
    let dollar = countries.filter((value) => value.currencies && value.currencies.USD);
    
    dollar.forEach((value) => console.log(value.name.common));
};
    xhr.send();