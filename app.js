function inputdata() {
  let name = document.getElementById("txt");
  let name1 = document.getElementById("txt-name");
  let password = document.getElementById("pass");
  let password1 = document.getElementById("pass1");
  let mail = document.getElementById("email");
  let mail2 = document.getElementById("email1");
  let button = document.getElementById("btn");
  if (name.value.length == 0) {
    name.classList = "redcolor";
    name1.style.display = "block";
  } else {
    name1.style.display = "none";
    name.classList = "skycolor";
  }
  if (password.value.length == 0) {
    password.classList = "redcolor";
    password1.style.display = "block";
  } else {
    password1.style.display = "none";
    password.classList = "skycolor";
  }
  if (mail.value.length == 0) {
    mail.classList = "redcolor";
    mail2.style.display = "block";
  } else {
    mail2.style.display = "none";
    mail.classList = "skycolor";
  }
}
