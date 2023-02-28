window.addEventListener("load", function (e) {
  let form = document.querySelector(".main__form");
  //INPUTS
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  //INPUTS CONTAINERS
  let emailContainer = document.querySelector(".main__form-input");
  let passwordContainer = document.querySelector(".main__form-input-password");
  //ERRORS
  let emailError = true;
  let passwordError = true;

  email.addEventListener("blur", function (e) {
    if (email.value == "") {
      emailContainer.nextElementSibling.style.display = "block";
      emailContainer.nextElementSibling.innerHTML =
        "Debe ingresar un email válido.";
      emailContainer.classList.add("error-indicator");
      emailError = true;
    } else if (!validator.isEmail(email.value)) {
      emailContainer.nextElementSibling.style.display = "block";
      emailContainer.nextElementSibling.innerHTML =
        "Debe ingresar un email válido.";
      emailContainer.classList.add("error-indicator");
      emailError = true;
    } else {
      emailContainer.nextElementSibling.style.display = "none";
      emailContainer.nextElementSibling.innerHTML = "";
      emailContainer.classList.remove("error-indicator");
      emailError = false;
    }
  });

  email.addEventListener("keyup", function (e) {
    if (email.value == "") {
      emailContainer.nextElementSibling.style.display = "block";
      emailContainer.nextElementSibling.innerHTML =
        "Debe ingresar un email válido.";
      emailContainer.classList.add("error-indicator");
      emailError = true;
    } else if (!validator.isEmail(email.value)) {
      emailContainer.nextElementSibling.style.display = "block";
      emailContainer.nextElementSibling.innerHTML =
        "Debe ingresar un email válido.";
      emailContainer.classList.add("error-indicator");
      emailError = true;
    } else {
      emailContainer.nextElementSibling.style.display = "none";
      emailContainer.nextElementSibling.innerHTML = "";
      emailContainer.classList.remove("error-indicator");
      emailError = false;
    }
  });

  password.addEventListener("blur", function (e) {
    if (password.value == "") {
      passwordContainer.nextElementSibling.style.display = "block";
      passwordContainer.nextElementSibling.innerHTML =
        "La contraseña debe tener entre 4 y 50 caracteres.";
      passwordContainer.classList.add("error-indicator");
      passwordError = true;
    } else if (password.value.length < 4 || password.value.length > 50) {
      passwordContainer.nextElementSibling.style.display = "block";
      passwordContainer.nextElementSibling.innerHTML =
        "La contraseña debe tener entre 4 y 50 caracteres.";
      passwordContainer.classList.add("error-indicator");
      passwordError = true;
    } else {
      passwordContainer.nextElementSibling.style.display = "none";
      passwordContainer.nextElementSibling.innerHTML = "";
      passwordContainer.classList.remove("error-indicator");
      passwordError = false;
    }
  });

  password.addEventListener("keyup", function (e) {
    if (password.value == "") {
      passwordContainer.nextElementSibling.style.display = "block";
      passwordContainer.nextElementSibling.innerHTML =
        "La contraseña debe tener entre 4 y 50 caracteres.";
      passwordContainer.classList.add("error-indicator");
      passwordError = true;
    } else if (password.value.length < 4 || password.value.length > 50) {
      passwordContainer.nextElementSibling.style.display = "block";
      passwordContainer.nextElementSibling.innerHTML =
        "La contraseña debe tener entre 4 y 50 caracteres.";
      passwordContainer.classList.add("error-indicator");
      passwordError = true;
    } else {
      passwordContainer.nextElementSibling.style.display = "none";
      passwordContainer.nextElementSibling.innerHTML = "";
      passwordContainer.classList.remove("error-indicator");
      passwordError = false;
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!email.value == "" && emailError == false) {
      fetch("http://localhost:3030/api/users")
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          let dbEmails = users.data.map((user) => {
            return user.email.toLowerCase();
          });
          if (!dbEmails.includes(email.value.toLowerCase())) {
            emailContainer.nextElementSibling.style.display = "block";
            emailContainer.nextElementSibling.innerHTML =
              "No se pudo encontrar este email.";
            emailContainer.classList.add("error-indicator");
            emailError = true;
          }
          if (
            !email.value == "" &&
            !password.value == "" &&
            emailError == false &&
            passwordError == false
          ) {
            this.submit();
          }
        })
        .catch((error) => console.log(error));
    }
  });
});
