const elRegisterForm = document.querySelector(".sign_main_left_form");
const elRegisterFormName = document.querySelector(".user_name_input");
const elRegisterFormEmail = document.querySelector(".user_email_input");
const elRegisterFormPassword = document.querySelector(".user_password_input");

async function registerUsers() {
  try {
    const res = await fetch("http://localhost:5502/meinarzt-app-production.up.railway.app/auth/signup", {
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
