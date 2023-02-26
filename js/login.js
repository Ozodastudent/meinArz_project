const elLoginForm = document.querySelector(".register_form");
const elLoginEmail = document.querySelector(".register_email");
const elLoginPassword = document.querySelector(".register_password");

const closeBtn = document.querySelector(".close_eye");
// Password part login
closeBtn.addEventListener("mousedown", () => {
  elLoginPassword.type = "text";
});
closeBtn.addEventListener("mouseup", () => {
  elLoginPassword.type = "password";
});
closeBtn.addEventListener("mouseout", () => {
  elLoginPassword.type = "password";
});

// login part

async function loginUsers() {
  try {
    const login = {
      email: elLoginEmail.value.trim(),
      password: elLoginPassword.value.trim(),
    };
    const res = await fetch(`http://127.0.0.1:5000/meinarzt-app-production.up.railway.app/auth/login`, {
      method: "POST",
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const data = await res.json();
    
    if (data.token) {
      localStorage.setItem("login-token", JSON.stringify(data.token));
      window.location.pathname = "/home.html";
    }
  } catch (error) {
    console.log(error);
  }
}

elLoginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  loginUsers();
});
