function form() {
  let nameError = document.getElementById("nameerror");
  let name = document.getElementById("name").value;
  let secondname = document.getElementById("secondname").value;
  let secondNameError = document.getElementById("secondNameError");
  let number = document.getElementById("number").value;
  let numberError = document.getElementById("numberError");
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");
  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("passwordError");
  let password2 = document.getElementById("password2").value;
  let passwordError2 = document.getElementById("passwordError2");
  if (
    name === "" &&
    secondname === "" &&
    number === "" &&
    email === "" &&
    password === "" &&
    password2 === ""
  ) {
    alert("Form Fill!");
  }

  if (name === "" && nameError.textContent === "") {
    nameError.textContent = "Enter first Name ";
    return false;
  } else {
    nameError.textContent = "";
  }

  if (secondname === "" && secondNameError.textContent === "") {
    secondNameError.textContent = "Enter second Name";
    return false;
  } else {
    secondNameError.textContent = "";
  }
  if (number === "") {
    numberError.textContent = "Enter Number";
    return false;
  }
  if (number.length > 10 && numberError.textContent === "") {
    numberError.textContent = "Error Number";
    return false;
  } else {
    numberError.textContent = "";
  }
  if (email === "" && emailError.textContent === "") {
    emailError.textContent = "Enter email";
    return false;
  } else {
    emailError.textContent = "";
  }
  if (password === "" && passwordError.textContent === "") {
    passwordError.textContent = "enter password";
    return false;
  } else {
    passwordError.textContent = "";
  }
  if (password2 === "" && passwordError2.textContent === "") {
    passwordError2.textContent = "enter second password";
    return false;
  } else {
    passwordError2.textContent = "";
  }
  if (password !== password2) {
    passwordError2.textContent = "password not match";
    return false;
  }
  alert("Form Submitted!");
  return true;
}
