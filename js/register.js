const elRegisterForm = document.querySelector(".sign_main_left_form");
const elRegisterFormName = document.querySelector(".user_name_input");
const elRegisterFormEmail = document.querySelector(".user_email_input");
const elRegisterFormPassword = document.querySelector(".user_password_input");

const elSelectCountries = document.querySelector(".country_select");
const elSelectLanguages = document.querySelector(".language_select");

// GET Countries API
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


// Countries Render 
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

// GET Languages
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
        console.log(item.la); 
        for (const [key, value] of Object.entries(item.languages)) {
            node.innerHTML += `
            <option class="counter-option" value=${value}>${value}</option>
            `
        }
    });
}

// Register 
async function registerUsers() {
  try {
    const res = await fetch("http://127.0.0.1:5503/meinarzt-app-production.up.railway.app/auth/signup", {
      method: "POST",
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: elRegisterFormName.value,
        lastName: elRegisterFormName.value,
        email: elRegisterFormEmail.value,
        password: elRegisterFormPassword.value,
        specialitysId: 0,
        isDoctor: true,
        attachPaths: [
          "string"
        ],
        gender: true
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.token) {
      console.log(data);
      localStorage.setItem("register-token", data.token);
      window.location.pathname = "/home.html";
    }
  } catch (error) {
    console.log(error);
  }
}

elRegisterForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  registerUsers();
});
