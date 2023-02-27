const elSelectCountries = document.querySelector(".country_select");
const elSelectLanguages = document.querySelector(".language_select");

async function getCountries(){
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        selectCountries(data, elSelectCountries);
        selectLanguages(data, elSelectLanguages)
    } catch (error) {
        console.log(error);
    }
}
getCountries();

function selectCountries(array, node) {
    let sortCountries =  array.sort((a, b) => {
        if (a.name.common < b.name.common) {
            return -1;
        }else if(a.name.common > b.name.common) {
            return 1;
        }else{
            return 0;
        }
    });
    sortCountries.forEach(item => {
        node.innerHTML += `
        <option class="counter-option" value=${item.name.common}>${item.name.common}</option>
        `
    });
}


function selectLanguages(array, node) {
    let sortCountries =  array.sort((a, b) => {
        if (a.name.common < b.name.common) {
            return -1;
        }else if(a.name.common > b.name.common) {
            return 1;
        }else{
            return 0;
        }
    });
    sortCountries.forEach(item => {    
        for (const [key, value] of Object.entries(item.languages)) {
            node.innerHTML += `
            <option class="counter-option" value=${value}>${value}</option>
            `
        }
    });
}

