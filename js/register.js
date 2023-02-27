const elRegisterForm = document.querySelector(".sign_main_left_form");
const elRegisterFormName = document.querySelector(".user_name_input");
const elRegisterFormEmail = document.querySelector(".user_email_input");
const elRegisterFormPassword = document.querySelector(".user_password_input");



// fetch("https://trial.mobiscroll.com/content/countries.json").then(res => res.json()).then(data => {
//   let eachCountry = "";
//   data.forEach(element => {
//     eachCountry += `<option>${element.text}</option>`
//     // console.log(element.text);
    
//   });
//   countrySelect.innerHTML = eachCountry;
// }).catch(err => console.log(err))


async function registerUsers() {
  try {
    const res = await fetch(`http://meinarzt-app-production.up.railway.app/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: elRegisterFormName.value,
        email: elRegisterFormEmail.value,
        password: elRegisterFormPassword.value,
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
