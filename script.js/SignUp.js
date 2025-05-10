const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const SignBtn = document.getElementById("SignBtn");
const WrongMessage = document.getElementById("wrong");

SignBtn.addEventListener("click", () => {
  const emailT = email.value.trim();
  const passwordT = password.value.trim();
  const confirmPasswordT = confirmPassword.value.trim();

  if (!emailT || !passwordT || !confirmPasswordT) {
    WrongMessage.textContent = "Please fill in the gaps";
    WrongMessage.style.color = "red";
  } else if (passwordT.length < 5) {
    WrongMessage.textContent = "No maximo 5 caracteres";
    WrongMessage.style.color = "white";
  } else if (passwordT !== confirmPasswordT) {
    WrongMessage.textContent = "Have to be the same passwords";
    WrongMessage.style.color = "red";
  } else if (passwordT == confirmPasswordT) {
    WrongMessage.textContent = "sucessfuly";
    WrongMessage.style.color = "green";
    localStorage.setItem("email", emailT);
    localStorage.setItem("password", passwordT);

    setTimeout(() => {
      window.location.href = "SignIn.html";
    }, 2000);
  }
});
