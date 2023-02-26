const elRegisterForm = document.querySelector(".sign_main_left_form");
const elRegisterFormName = document.querySelector(".user_name_input");
const elRegisterFormEmail = document.querySelector(".user_email_input");
const elRegisterFormPassword = document.querySelector(".user_password_input");


async function registerUsers() {
  try {
    const response = await fetch("http://127.0.0.1:5500/meinarzt-app-production.up.railway.app/auth/signup", {
      method: "PUT",
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Maxmud",
        lastName: "Axmedov",
        email: "axmedovmaxmud559@gmail.com",
        password: "12345678",
        specialitysId: 0,
        isDoctor: true,
        attachPaths: [
          "string"
        ],
        gender: true
      })
    })
    const data = await response;
    console.log(data);

    if (data.token) {
      window.localStorage.setItem("register-token", data.token);
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
