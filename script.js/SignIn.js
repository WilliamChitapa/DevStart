const Enteremail = document.getElementById("email");
const Enterpassword = document.getElementById("password");
const LoginEmail = document.getElementById("loginEmail");

LoginEmail.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "Profile.html";
  }, 2000);
});
