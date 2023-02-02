window.addEventListener("load", function (e) {
  let form = document.querySelector(".main__form");
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

  email.addEventListener("blur", function (e) {
    if (email.value == "") {
      emailContainer.nextElementSibling.style.display = "block";
      emailContainer.nextElementSibling.innerHTML =
        "Debe ingresar un email válido.";
      emailContainer.classList.add("error-indicator");
    } else if (!validator.isURL(email.value)) {
      emailContainer.nextElementSibling.style.display = "block";
      emailContainer.nextElementSibling.innerHTML =
        "Debe ingresar un email válido.";
      emailContainer.classList.add("error-indicator");
    } else {
      emailContainer.nextElementSibling.style.display = "none";
      emailContainer.nextElementSibling.innerHTML = "";
      emailContainer.classList.remove("error-indicator");
    }
  });

  email.addEventListener("keyup", function (e) {
    if (email.value == "") {
      emailContainer.nextElementSibling.style.display = "block";
      emailContainer.nextElementSibling.innerHTML =
        "Debe ingresar un email válido.";
      emailContainer.classList.add("error-indicator");
    } else if (!validator.isURL(email.value)) {
      emailContainer.nextElementSibling.style.display = "block";
      emailContainer.nextElementSibling.innerHTML =
        "Debe ingresar un email válido.";
      emailContainer.classList.add("error-indicator");
    } else {
      emailContainer.nextElementSibling.style.display = "none";
      emailContainer.nextElementSibling.innerHTML = "";
      emailContainer.classList.remove("error-indicator");
    }
  });

  password.addEventListener("blur", function (e) {
    if (password.value == "") {
      passwordContainer.nextElementSibling.style.display = "block";
      passwordContainer.nextElementSibling.innerHTML =
        "La contraseña debe tener entre 4 y 50 caracteres.";
      passwordContainer.classList.add("error-indicator");
    } else if (password.value.length < 4 || password.value.length > 50) {
      passwordContainer.nextElementSibling.style.display = "block";
      passwordContainer.nextElementSibling.innerHTML =
        "La contraseña debe tener entre 4 y 50 caracteres.";
      passwordContainer.classList.add("error-indicator");
    } else if (
      password.value !== "" &&
      confirmPassword.value != password.value
    ) {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Las contraseñas no coinciden.";
      confirmPasswordContainer.classList.add("error-indicator");
    } else if (
      password.value !== "" &&
      confirmPassword.value == password.value
    ) {
      confirmPasswordContainer.nextElementSibling.style.display = "none";
      confirmPasswordContainer.nextElementSibling.innerHTML = "";
      confirmPasswordContainer.classList.remove("error-indicator");
    } else {
      passwordContainer.nextElementSibling.style.display = "none";
      passwordContainer.nextElementSibling.innerHTML = "";
      passwordContainer.classList.remove("error-indicator");
    }
  });

  password.addEventListener("keyup", function (e) {
    if (password.value == "") {
      passwordContainer.nextElementSibling.style.display = "block";
      passwordContainer.nextElementSibling.innerHTML =
        "La contraseña debe tener entre 4 y 50 caracteres.";
      passwordContainer.classList.add("error-indicator");
    } else if (password.value.length < 4 || password.value.length > 50) {
      passwordContainer.nextElementSibling.style.display = "block";
      passwordContainer.nextElementSibling.innerHTML =
        "La contraseña debe tener entre 4 y 50 caracteres.";
      passwordContainer.classList.add("error-indicator");
    } else if (
      password.value !== "" &&
      confirmPassword.value == password.value
    ) {
      confirmPasswordContainer.nextElementSibling.style.display = "none";
      confirmPasswordContainer.nextElementSibling.innerHTML = "";
      confirmPasswordContainer.classList.remove("error-indicator");
    } else {
      passwordContainer.nextElementSibling.style.display = "none";
      passwordContainer.nextElementSibling.innerHTML = "";
      passwordContainer.classList.remove("error-indicator");
    }
  });

  confirmPassword.addEventListener("blur", function (e) {
    if (confirmPassword.value == "") {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Debe coincidir con la contraseña.";
      confirmPasswordContainer.classList.add("error-indicator");
    } else if (confirmPassword.value != password.value) {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Las contraseñas no coinciden.";
      confirmPasswordContainer.classList.add("error-indicator");
    } else {
      confirmPasswordContainer.nextElementSibling.style.display = "none";
      confirmPasswordContainer.nextElementSibling.innerHTML = "";
      confirmPasswordContainer.classList.remove("error-indicator");
    }
  });

  confirmPassword.addEventListener("keyup", function (e) {
    if (confirmPassword.value == "") {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Debe coincidir con la contraseña.";
      confirmPasswordContainer.classList.add("error-indicator");
    } else if (confirmPassword.value != password.value) {
      confirmPasswordContainer.nextElementSibling.style.display = "block";
      confirmPasswordContainer.nextElementSibling.innerHTML =
        "Las contraseñas no coinciden.";
      confirmPasswordContainer.classList.add("error-indicator");
    } else {
      confirmPasswordContainer.nextElementSibling.style.display = "none";
      confirmPasswordContainer.nextElementSibling.innerHTML = "";
      confirmPasswordContainer.classList.remove("error-indicator");
    }
  });

  name.addEventListener("blur", function (e) {
    if (name.value == "") {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML = "Debe ingresar un nombre.";
      nameContainer.classList.add("error-indicator");
    } else if (name.value.length > 25) {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML =
        "El nombre puede tener máximo 25 caracteres.";
      nameContainer.classList.add("error-indicator");
    } else {
      nameContainer.nextElementSibling.style.display = "none";
      nameContainer.nextElementSibling.innerHTML = "";
      nameContainer.classList.remove("error-indicator");
    }
  });

  name.addEventListener("keyup", function (e) {
    if (name.value == "") {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML = "Debe ingresar un nombre.";
      nameContainer.classList.add("error-indicator");
    } else if (name.value.length > 25) {
      nameContainer.nextElementSibling.style.display = "block";
      nameContainer.nextElementSibling.innerHTML =
        "El nombre puede tener máximo 25 caracteres.";
      nameContainer.classList.add("error-indicator");
    } else {
      nameContainer.nextElementSibling.style.display = "none";
      nameContainer.nextElementSibling.innerHTML = "";
      nameContainer.classList.remove("error-indicator");
    }
  });

  surname.addEventListener("blur", function (e) {
    if (surname.value == "") {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "Debe ingresar un apellido.";
      surnameContainer.classList.add("error-indicator");
    } else if (surname.value.length > 25) {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "El apellido puede tener máximo 25 caracteres.";
      surnameContainer.classList.add("error-indicator");
    } else {
      surnameContainer.nextElementSibling.style.display = "none";
      surnameContainer.nextElementSibling.innerHTML = "";
      surnameContainer.classList.remove("error-indicator");
    }
  });

  surname.addEventListener("keyup", function (e) {
    if (surname.value == "") {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "Debe ingresar un apellido.";
      surnameContainer.classList.add("error-indicator");
    } else if (surname.value.length > 25) {
      surnameContainer.nextElementSibling.style.display = "block";
      surnameContainer.nextElementSibling.innerHTML =
        "El apellido puede tener máximo 25 caracteres.";
      surnameContainer.classList.add("error-indicator");
    } else {
      surnameContainer.nextElementSibling.style.display = "none";
      surnameContainer.nextElementSibling.innerHTML = "";
      surnameContainer.classList.remove("error-indicator");
    }
  });

  phone.addEventListener("blur", function (e) {
    if (phone.value == "") {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "Debe ingresar un número de teléfono.";
      phoneContainer.classList.add("error-indicator");
    } else if (!validator.isInt(phone.value)) {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "El número de teléfono solo puede contener números.";
      phoneContainer.classList.add("error-indicator");
    } else if (phone.value.length > 30) {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "El número puede tener máximo 30 caracteres.";
      phoneContainer.classList.add("error-indicator");
    } else {
      phoneContainer.nextElementSibling.style.display = "none";
      phoneContainer.nextElementSibling.innerHTML = "";
      phoneContainer.classList.remove("error-indicator");
    }
  });

  phone.addEventListener("keyup", function (e) {
    if (phone.value == "") {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "Debe ingresar un número de teléfono.";
      phoneContainer.classList.add("error-indicator");
    } else if (!validator.isInt(phone.value)) {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "El número de teléfono solo puede contener números.";
      phoneContainer.classList.add("error-indicator");
    } else if (phone.value.length > 30) {
      phoneContainer.nextElementSibling.style.display = "block";
      phoneContainer.nextElementSibling.innerHTML =
        "El número puede tener máximo 30 caracteres.";
      phoneContainer.classList.add("error-indicator");
    } else {
      phoneContainer.nextElementSibling.style.display = "none";
      phoneContainer.nextElementSibling.innerHTML = "";
      phoneContainer.classList.remove("error-indicator");
    }
  });

  birthdate.addEventListener("blur", function (e) {
    if (birthdate.value == "") {
      birthdateContainer.nextElementSibling.style.display = "block";
      birthdateContainer.nextElementSibling.innerHTML =
        "Debe ingresar una fecha de nacimiento.";
      birthdateContainer.classList.add("error-indicator");
    } else {
      birthdateContainer.nextElementSibling.style.display = "none";
      birthdateContainer.nextElementSibling.innerHTML = "";
      birthdateContainer.classList.remove("error-indicator");
    }
  });

  birthdate.addEventListener("keyup", function (e) {
    if (birthdate.value == "") {
      birthdateContainer.nextElementSibling.style.display = "block";
      birthdateContainer.nextElementSibling.innerHTML =
        "Debe ingresar una fecha de nacimiento.";
      birthdateContainer.classList.add("error-indicator");
    } else {
      birthdateContainer.nextElementSibling.style.display = "none";
      birthdateContainer.nextElementSibling.innerHTML = "";
      birthdateContainer.classList.remove("error-indicator");
    }
  });

  genres.forEach(function (genre) {
    genre.addEventListener("blur", function (e) {
      if (genre1.value == "" || genre2.value == "") {
        genresContainer.nextElementSibling.style.display = "block";
        genresContainer.nextElementSibling.innerHTML =
          "Debe elegír 2 géneros favoritos.";
      } else if (genre1.value == genre2.value) {
        genresContainer.nextElementSibling.style.display = "block";
        genresContainer.nextElementSibling.innerHTML =
          "Los géneros favoritos deben ser diferentes.";
      } else {
        genresContainer.nextElementSibling.style.display = "none";
        genresContainer.nextElementSibling.innerHTML = "";
        genresContainer.classList.remove("error-indicator");
      }
    });
  });

/*   form.addEventListener("submit", function (e) {
    let errors = []; //Probar de crear objeto tipo Express Validator para mostrar errores abajo de cada campo
    let productImageValue = productImage.value;
    let backgroundImageValue = backgroundImage.value;
    let validExtensions = /(.jpg|.jpeg|.png)$/i; //Revisar el código que use para multer

    if (types[0].checked == false && types[1].checked == false) {
      errors.push("El selector de tipo no puede estar vacio!");
    }

    if (name.value == "") {
      errors.push("El campo de nombre no puede estar vacio!");
    }

    if (release_year.value == "") {
      errors.push("El campo de año de salida no puede estar vacio!");
    } else if (
      !validator.isNumeric(release_year.value) ||
      !validator.isInt(release_year.value)
    ) {
      errors.push(
        "El campo de año de salida debe ser un número entero de 4 dígitos!"
      );
    } else if (release_year.value.length !== 4) {
      errors.push("El campo de año de salida debe tener 4 dígitos!");
    }

    if (rating.value == "") {
      errors.push("El campo de clasificación no puede estar vacio!");
    }

    if (length.value == "") {
      errors.push("El campo de duración no puede estar vacio!");
    }

    if (imdbScore.value == "") {
      errors.push("El campo de puntaje de IMDb no puede estar vacio!");
    } else if (
      !validator.isNumeric(imdbScore.value) ||
      validator.isInt(imdbScore.value) ||
      imdbScore.value > 10
    ) {
      console.log(validator.isInt(imdbScore.value));
      errors.push(
        "El campo de puntaje de IMDb debe ser un número decimal entre 0 y 10!"
      );
    } else if (imdbScore.value.length !== 3) {
      errors.push("El campo de puntaje de IMDb debe tener 3 dígitos!");
    }

    if (imdbTotalReviews.value == "") {
      errors.push("El campo de reseñas totales de IMDb no puede estar vacio!");
    }

    if (tomatoScore.value == "") {
      errors.push(
        "El campo de puntaje de Rotten Tomatoes no puede estar vacio!"
      );
    } else if (!validator.isInt(tomatoScore.value) || tomatoScore.value > 100) {
      errors.push(
        "El campo de puntaje de Rotten Tomatoes debe ser un número entero entre 0 y 100!"
      );
    } else if (tomatoScore.value.length > 3) {
      errors.push(
        "El campo de puntaje de Rotten Tomatoes puede tener máximo 3 dígitos!"
      );
    }

    if (trailerLink.value == "") {
      errors.push("El campo de trailer no puede estar vacio!");
    } else if (!validator.isURL(trailerLink.value)) {
      errors.push("El campo de trailer debe ser una URL!");
    }

    if (genre1.value == "") {
      errors.push("El selector de género 1 no puede estar vacio!");
    }

    if (genre2.value == "") {
      errors.push("El selector de género 2 no puede estar vacio!");
    }

    if (
      !genre1.value == "" &&
      !genre2.value == "" &&
      genre1.value == genre2.value
    ) {
      errors.push("Los selectores de géneros no pueden tener el mismo valor!");
    }

    if (purchasePrice.value == "") {
      errors.push("El campo de precio de venta no puede estar vacio!");
    } else if (
      !validator.isNumeric(purchasePrice.value) ||
      validator.isInt(purchasePrice.value)
    ) {
      errors.push("El campo de precio de venta debe ser un número decimal!");
    }

    if (rentalPrice.value == "") {
      errors.push("El campo de precio de alquiler no puede estar vacio!");
    } else if (
      !validator.isNumeric(rentalPrice.value) ||
      validator.isInt(rentalPrice.value)
    ) {
      errors.push("El campo de precio de alquiler debe ser un número decimal!");
    }

    if (synopsis.value == "") {
      errors.push("El campo de sinopsis no puede estar vacio!");
    }

    if (director.value == "") {
      errors.push("El selector de director no puede estar vacio!");
    }

    if (screenwriter.value == "") {
      errors.push("El selector de guionista no puede estar vacio!");
    }

    if (castLength.value == "") {
      errors.push("El selector de cantidad de actores no puede estar vacio!");
    }

    if (productImage.value == "") {
      errors.push("Es obligatorio cargar una imagen de producto!");
    }

    if (backgroundImage.value == "") {
      errors.push("Es obligatorio cargar una imagen de fondo!");
    }

    if (
      !validExtensions.exec(backgroundImageValue) ||
      !validExtensions.exec(productImageValue)
    ) {
      errors.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png");
    }

    if (errors.length > 0) {
      e.preventDefault();
      let ulErrors = document.querySelector(".errors");

      ulErrors.innerHTML = "";

      errors.forEach((error) => {
        ulErrors.innerHTML += `<li>${error}</li>`;
      });
      ulErrors.style.display = "block";
      name.focus();
    } else {
      alert("La carga se realizó exitosamente");
    }
  }); */
});
