window.addEventListener("load", function (e) {
  let form = document.querySelector(".main__form");
  //INPUTS
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirmPassword");
  let name = document.querySelector("#name");
  let surname = document.querySelector("#surname");
  let phone = document.querySelector("#phone");
  let birthdate = document.querySelector("#birthdate");
  let genres = document.querySelectorAll("#genres");
  let genre1 = document.querySelector(".genre1");
  let genre2 = document.querySelector(".genre2");
  let userPhoto = document.querySelector("#photo");
  //INPUTS CONTAINERS
  let emailContainer = document.querySelector(".main__form-input");
  let passwordContainer = document.querySelector(".main__form-input-password");
  let confirmPasswordContainer = document.querySelector(
    ".main__form-input-confirmPassword"
  );
  let nameContainer = document.querySelector(".main__form-input-name");
  let surnameContainer = document.querySelector(".main__form-input-surname");
  let phoneContainer = document.querySelector(".main__form-input-phone");
  let birthdateContainer = document.querySelector(
    ".main__form-input-birthdate"
  );
  let genresContainer = document.querySelector(".main__genre-select");
  let photoContainer = document.querySelector(".main__form-input-photo");
  //ERRORS
  let emailError = true;
  let passwordError = true;
  let confirmPasswordError = true;
  let nameError = true;
  let surnameError = true;
  let phoneError = true;
  let birthdateError = true;
  let genresError = true;
  let photoError = true;

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
    } else if (
      password.value !== "" &&
      confirmPassword.value != password.value
    ) {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Las contraseñas no coinciden.";
      confirmPasswordContainer.classList.add("error-indicator");
      confirmpasswordError = true;
    } else {
      passwordContainer.nextElementSibling.style.display = "none";
      passwordContainer.nextElementSibling.innerHTML = "";
      passwordContainer.classList.remove("error-indicator");
      passwordError = false;
      confirmPasswordError = false;
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
    } else if (
      password.value !== "" &&
      confirmPassword.value == password.value
    ) {
      confirmPasswordContainer.nextElementSibling.style.display = "none";
      confirmPasswordContainer.nextElementSibling.innerHTML = "";
      confirmPasswordContainer.classList.remove("error-indicator");
      confirmPasswordError = true;
    } else {
      passwordContainer.nextElementSibling.style.display = "none";
      passwordContainer.nextElementSibling.innerHTML = "";
      passwordContainer.classList.remove("error-indicator");
      passwordError = false;
      confirmPasswordError = false;
    }
  });

  confirmPassword.addEventListener("blur", function (e) {
    if (confirmPassword.value == "") {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Debe coincidir con la contraseña.";
      confirmPasswordContainer.classList.add("error-indicator");
      confirmPasswordError = true;
    } else if (confirmPassword.value != password.value) {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Las contraseñas no coinciden.";
      confirmPasswordContainer.classList.add("error-indicator");
      confirmPasswordError = true;
    } else {
      confirmPasswordContainer.nextElementSibling.style.display = "none";
      confirmPasswordContainer.nextElementSibling.innerHTML = "";
      confirmPasswordContainer.classList.remove("error-indicator");
      confirmPasswordError = false;
    }
  });

  confirmPassword.addEventListener("keyup", function (e) {
    if (confirmPassword.value == "") {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Debe coincidir con la contraseña.";
      confirmPasswordContainer.classList.add("error-indicator");
      confirmPasswordError = true;
    } else if (confirmPassword.value != password.value) {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Las contraseñas no coinciden.";
      confirmPasswordContainer.classList.add("error-indicator");
      confirmPasswordError = true;
    } else {
      confirmPasswordContainer.nextElementSibling.style.display = "none";
      confirmPasswordContainer.nextElementSibling.innerHTML = "";
      confirmPasswordContainer.classList.remove("error-indicator");
      confirmPasswordError = false;
    }
  });

  name.addEventListener("blur", function (e) {
    if (name.value == "") {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML = "Debe ingresar un nombre.";
      nameContainer.classList.add("error-indicator");
      nameError = true;
    } else if (!validator.isAlpha(name.value)) {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML =
        "El nombre no debe contener números.";
      nameContainer.classList.add("error-indicator");
      nameError = true;
    } else if (name.value.length > 25) {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML =
        "El nombre puede tener máximo 25 caracteres.";
      nameContainer.classList.add("error-indicator");
      nameError = true;
    } else {
      nameContainer.nextElementSibling.style.display = "none";
      nameContainer.nextElementSibling.innerHTML = "";
      nameContainer.classList.remove("error-indicator");
      nameError = false;
    }
  });

  name.addEventListener("keyup", function (e) {
    if (name.value == "") {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML = "Debe ingresar un nombre.";
      nameContainer.classList.add("error-indicator");
      nameError = true;
    } else if (!validator.isAlpha(name.value)) {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML =
        "El nombre no debe contener números.";
      nameContainer.classList.add("error-indicator");
      nameError = true;
    } else if (name.value.length > 25) {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML =
        "El nombre puede tener máximo 25 caracteres.";
      nameContainer.classList.add("error-indicator");
      nameError = true;
    } else {
      nameContainer.nextElementSibling.style.display = "none";
      nameContainer.nextElementSibling.innerHTML = "";
      nameContainer.classList.remove("error-indicator");
      nameError = false;
    }
  });

  surname.addEventListener("blur", function (e) {
    if (surname.value == "") {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "Debe ingresar un apellido.";
      surnameContainer.classList.add("error-indicator");
      surnameError = true;
    } else if (!validator.isAlpha(surname.value)) {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "El apellido no debe contener números.";
      surnameContainer.classList.add("error-indicator");
      surnameError = true;
    } else if (surname.value.length > 25) {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "El apellido puede tener máximo 25 caracteres.";
      surnameContainer.classList.add("error-indicator");
      surnameError = true;
    } else {
      surnameContainer.nextElementSibling.style.display = "none";
      surnameContainer.nextElementSibling.innerHTML = "";
      surnameContainer.classList.remove("error-indicator");
      surnameError = false;
    }
  });

  surname.addEventListener("keyup", function (e) {
    if (surname.value == "") {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "Debe ingresar un apellido.";
      surnameContainer.classList.add("error-indicator");
      surnameError = true;
    } else if (!validator.isAlpha(surname.value)) {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "El apellido no debe contener números.";
      surnameContainer.classList.add("error-indicator");
      surnameError = true;
    } else if (surname.value.length > 25) {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "El apellido puede tener máximo 25 caracteres.";
      surnameContainer.classList.add("error-indicator");
      surnameError = true;
    } else {
      surnameContainer.nextElementSibling.style.display = "none";
      surnameContainer.nextElementSibling.innerHTML = "";
      surnameContainer.classList.remove("error-indicator");
      surnameError = false;
    }
  });

  phone.addEventListener("blur", function (e) {
    if (phone.value == "") {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "Debe ingresar un número de teléfono.";
      phoneContainer.classList.add("error-indicator");
      phoneError = true;
    } else if (!validator.isInt(phone.value)) {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "El número de teléfono solo puede contener números.";
      phoneContainer.classList.add("error-indicator");
      phoneError = true;
    } else if (phone.value.length > 30) {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "El número puede tener máximo 30 caracteres.";
      phoneContainer.classList.add("error-indicator");
      phoneError = true;
    } else {
      phoneContainer.nextElementSibling.style.display = "none";
      phoneContainer.nextElementSibling.innerHTML = "";
      phoneContainer.classList.remove("error-indicator");
      phoneError = false;
    }
  });

  phone.addEventListener("keyup", function (e) {
    if (phone.value == "") {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "Debe ingresar un número de teléfono.";
      phoneContainer.classList.add("error-indicator");
      phoneError = true;
    } else if (!validator.isInt(phone.value)) {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "El número de teléfono solo puede contener números.";
      phoneContainer.classList.add("error-indicator");
      phoneError = true;
    } else if (phone.value.length > 30) {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "El número puede tener máximo 30 caracteres.";
      phoneContainer.classList.add("error-indicator");
      phoneError = true;
    } else {
      phoneContainer.nextElementSibling.style.display = "none";
      phoneContainer.nextElementSibling.innerHTML = "";
      phoneContainer.classList.remove("error-indicator");
      phoneError = false;
    }
  });

  birthdate.addEventListener("blur", function (e) {
    if (birthdate.value == "") {
      birthdateContainer.nextElementSibling.style.display = "block";
      birthdateContainer.nextElementSibling.innerHTML =
        "Debe ingresar una fecha de nacimiento.";
      birthdateContainer.classList.add("error-indicator");
      birthdateError = true;
    } else {
      birthdateContainer.nextElementSibling.style.display = "none";
      birthdateContainer.nextElementSibling.innerHTML = "";
      birthdateContainer.classList.remove("error-indicator");
      birthdateError = false;
    }
  });

  birthdate.addEventListener("keyup", function (e) {
    if (birthdate.value == "") {
      birthdateContainer.nextElementSibling.style.display = "block";
      birthdateContainer.nextElementSibling.innerHTML =
        "Debe ingresar una fecha de nacimiento.";
      birthdateContainer.classList.add("error-indicator");
      birthdateError = true;
    } else {
      birthdateContainer.nextElementSibling.style.display = "none";
      birthdateContainer.nextElementSibling.innerHTML = "";
      birthdateContainer.classList.remove("error-indicator");
      birthdateError = false;
    }
  });

  genres.forEach(function (genre) {
    genre.addEventListener("blur", function (e) {
      if (genre1.value == "" || genre2.value == "") {
        genresContainer.nextElementSibling.style.display = "block";
        genresContainer.nextElementSibling.innerHTML =
          "Debe elegír 2 géneros favoritos.";
        genresError = true;
      } else if (genre1.value == genre2.value) {
        genresContainer.nextElementSibling.style.display = "block";
        genresContainer.nextElementSibling.innerHTML =
          "Los géneros favoritos deben ser diferentes.";
        genresError = true;
      } else {
        genresContainer.nextElementSibling.style.display = "none";
        genresContainer.nextElementSibling.innerHTML = "";
        genresContainer.classList.remove("error-indicator");
        genresError = false;
      }
    });
  });

  form.addEventListener("submit", function (e) {
    let validExtensions = /(.jpg|.jpeg|.png)$/i;
    e.preventDefault();

    fetch("http://localhost:3030/api/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        let dbEmails = users.data.map((user) => {
          return user.email;
        });
        if (dbEmails.includes(email.value)) {
          emailContainer.nextElementSibling.style.display = "block";
          emailContainer.nextElementSibling.innerHTML =
            "El email que ingresó ya se encuentra en uso.";
          emailContainer.classList.add("error-indicator");
          emailError = true;
        } else {
          emailContainer.nextElementSibling.style.display = "none";
          emailContainer.nextElementSibling.innerHTML = "";
          emailContainer.classList.remove("error-indicator");
          emailError = false;
        }

        if (!userPhoto.value == "" && !validExtensions.exec(userPhoto.value)) {
          photoContainer.nextElementSibling.style.display = "block";
          photoContainer.nextElementSibling.innerHTML =
            "Solo se aceptan archivos con extensión png, jpg o jpeg.";
          photoError = true;
        } else {
          photoContainer.nextElementSibling.style.display = "none";
          photoContainer.nextElementSibling.innerHTML = "";
          photoError = false;
        }

        if (
          email.value == "" ||
          password.value == "" ||
          confirmPassword.value == "" ||
          name.value == "" ||
          surname.value == "" ||
          phone.value == "" ||
          birthdate.value == "" ||
          genre1.value == "" ||
          genre2.value == ""
        ) {
          alert("El formulario está incompleto.");
        } else if (
          emailError == true ||
          passwordError == true ||
          confirmPasswordError == true ||
          nameError == true ||
          surnameError == true ||
          phoneError == true ||
          birthdateError == true ||
          genresError == true ||
          photoError == true
        ) {
          alert("El formulario tiene errores.");
        } else {
          alert("El usuario se creo exitosamente!");
          this.submit();
        }
      })
      .catch((error) => console.log(error));
  });
});
