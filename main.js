let fullname = document.querySelector('[data-name="name"]');
let height = document.querySelector('[data-height="height"]');
let country = document.querySelector('[data-country="country"]');

fullname.innerHTML = "Sola Agboola";
height.innerHTML = "1.75cm";
country.innerHTML = "France";

console.log(fullname.innerText, height.innerText, country.innerText)