const loginPassword = document.querySelector(".register_password");
const closeBtn = document.querySelector(".close_eye");
// Password part login
closeBtn.addEventListener("mousedown", () => {
  loginPassword.type = "text";
});
closeBtn.addEventListener("mouseup", () => {
  loginPassword.type = "password";
});
closeBtn.addEventListener("mouseout", () => {
  loginPassword.type = "password";
});
