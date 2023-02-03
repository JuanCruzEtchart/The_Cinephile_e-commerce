window.addEventListener("load", function (e) {
  let form = document.querySelector(".main__form-put");
  let types = document.querySelectorAll(".type");
  let name = document.querySelector("#name");
  let release_year = document.querySelector("#year");
  let rating = document.querySelector("#rated");
  let length = document.querySelector("#length");
  let imdbScore = document.querySelector("#imdbScore");
  let imdbTotalReviews = document.querySelector("#imdbTotalReviews");
  let tomatoScore = document.querySelector("#tomatoScore");
  let trailerLink = document.querySelector("#trailerLink");
  let genre1 = document.querySelector("#genre1");
  let genre2 = document.querySelector("#genre2");
  let purchasePrice = document.querySelector("#purchasePrice");
  let rentalPrice = document.querySelector("#rentalPrice");
  let synopsis = document.querySelector("#synopsis");
  let director = document.querySelector("#director");
  let screenwriter = document.querySelector("#screenwriter");
  let productImage = document.querySelector("#productImage");
  let backgroundImage = document.querySelector("#backgroundImage");

  name.focus();

  name.addEventListener("blur", function (e) {
    if (name.value == "") {
      name.nextElementSibling.innerHTML = "Completar campo!";
      name.nextElementSibling.classList.add("invalid");
      name.nextElementSibling.classList.remove("valid-status");
      name.classList.remove("valid");
    } else {
      name.nextElementSibling.innerHTML = "👍";
      name.nextElementSibling.classList.remove("invalid");
      name.nextElementSibling.classList.add("valid-status");
      name.classList.add("valid");
    }
  });

  release_year.addEventListener("blur", function (e) {
    if (release_year.value == "") {
      release_year.nextElementSibling.innerHTML = "Completar campo!";
      release_year.nextElementSibling.classList.add("invalid");
      release_year.nextElementSibling.classList.remove("valid-status");
      release_year.classList.remove("valid");
    } else if (
      !validator.isNumeric(release_year.value) ||
      !validator.isInt(release_year.value)
    ) {
      release_year.nextElementSibling.innerHTML =
        "Debe ser un número entero de 4 dígitos";
      release_year.nextElementSibling.classList.add("invalid");
      release_year.nextElementSibling.classList.remove("valid-status");
      release_year.classList.remove("valid");
    } else if (release_year.value.length !== 4) {
      release_year.nextElementSibling.innerHTML = "Debe tener 4 dígitos!";
      release_year.nextElementSibling.classList.add("invalid");
      release_year.nextElementSibling.classList.remove("valid-status");
      release_year.classList.remove("valid");
    } else {
      release_year.nextElementSibling.innerHTML = "👍";
      release_year.nextElementSibling.classList.remove("invalid");
      release_year.nextElementSibling.classList.add("valid-status");
      release_year.classList.add("valid");
    }
  });

  rating.addEventListener("blur", function (e) {
    if (rating.value == "") {
      rating.nextElementSibling.innerHTML = "Completar campo!";
      rating.nextElementSibling.classList.add("invalid");
      rating.nextElementSibling.classList.remove("valid-status");
      rating.classList.remove("valid");
    } else {
      rating.nextElementSibling.innerHTML = "👍";
      rating.nextElementSibling.classList.remove("invalid");
      rating.nextElementSibling.classList.add("valid-status");
      rating.classList.add("valid");
    }
  });

  length.addEventListener("blur", function (e) {
    if (length.value == "") {
      length.nextElementSibling.innerHTML = "Completar campo!";
      length.nextElementSibling.classList.add("invalid");
      length.nextElementSibling.classList.remove("valid-status");
      length.classList.remove("valid");
    } else {
      length.nextElementSibling.innerHTML = "👍";
      length.nextElementSibling.classList.remove("invalid");
      length.nextElementSibling.classList.add("valid-status");
      length.classList.add("valid");
    }
  });

  imdbScore.addEventListener("blur", function (e) {
    if (imdbScore.value == "") {
      imdbScore.nextElementSibling.innerHTML = "Completar campo!";
      imdbScore.nextElementSibling.classList.add("invalid");
      imdbScore.nextElementSibling.classList.remove("valid-status");
      imdbScore.classList.remove("valid");
    } else if (
      !validator.isNumeric(imdbScore.value) ||
      validator.isInt(imdbScore.value) ||
      imdbScore.value > 10
    ) {
      imdbScore.nextElementSibling.innerHTML =
        "Debe ser un número decimal entre 0 y 10!";
      imdbScore.nextElementSibling.classList.add("invalid");
      imdbScore.nextElementSibling.classList.remove("valid-status");
      imdbScore.classList.remove("valid");
    } else if (imdbScore.value.length !== 3) {
      imdbScore.nextElementSibling.innerHTML = "Debe tener 2 dígitos!";
      imdbScore.nextElementSibling.classList.add("invalid");
      imdbScore.nextElementSibling.classList.remove("valid-status");
      imdbScore.classList.remove("valid");
    } else {
      imdbScore.nextElementSibling.innerHTML = "👍";
      imdbScore.nextElementSibling.classList.remove("invalid");
      imdbScore.nextElementSibling.classList.add("valid-status");
      imdbScore.classList.add("valid");
    }
  });

  imdbTotalReviews.addEventListener("blur", function (e) {
    if (imdbTotalReviews.value == "") {
      imdbTotalReviews.nextElementSibling.innerHTML = "Completar campo!";
      imdbTotalReviews.nextElementSibling.classList.add("invalid");
      imdbTotalReviews.nextElementSibling.classList.remove("valid-status");
      imdbTotalReviews.classList.remove("valid");
    } else {
      imdbTotalReviews.nextElementSibling.innerHTML = "👍";
      imdbTotalReviews.nextElementSibling.classList.remove("invalid");
      imdbTotalReviews.nextElementSibling.classList.add("valid-status");
      imdbTotalReviews.classList.add("valid");
    }
  });

  tomatoScore.addEventListener("blur", function (e) {
    if (tomatoScore.value == "") {
      tomatoScore.nextElementSibling.innerHTML = "Completar campo!";
      tomatoScore.nextElementSibling.classList.add("invalid");
      tomatoScore.nextElementSibling.classList.remove("valid-status");
      tomatoScore.classList.remove("valid");
    } else if (!validator.isInt(tomatoScore.value) || tomatoScore.value > 100) {
      tomatoScore.nextElementSibling.innerHTML =
        "Debe ser un número entero entre 0 y 100!";
      tomatoScore.nextElementSibling.classList.add("invalid");
      tomatoScore.nextElementSibling.classList.remove("valid-status");
      tomatoScore.classList.remove("valid");
    } else if (tomatoScore.value.length > 3) {
      tomatoScore.nextElementSibling.innerHTML =
        "Puede tener máximo 3 dígitos!";
      tomatoScore.nextElementSibling.classList.add("invalid");
      tomatoScore.nextElementSibling.classList.remove("valid-status");
      tomatoScore.classList.remove("valid");
    } else {
      tomatoScore.nextElementSibling.innerHTML = "👍";
      tomatoScore.nextElementSibling.classList.remove("invalid");
      tomatoScore.nextElementSibling.classList.add("valid-status");
      tomatoScore.classList.add("valid");
    }
  });

  trailerLink.addEventListener("blur", function (e) {
    if (trailerLink.value.length == "") {
      trailerLink.nextElementSibling.innerHTML = "Completar campo!";
      trailerLink.nextElementSibling.classList.add("invalid");
      trailerLink.nextElementSibling.classList.remove("valid-status");
      trailerLink.classList.remove("valid");
    } else if (!validator.isURL(trailerLink.value)) {
      trailerLink.nextElementSibling.innerHTML = "Debe ser una URL!";
      trailerLink.nextElementSibling.classList.add("invalid");
      trailerLink.nextElementSibling.classList.remove("valid-status");
      trailerLink.classList.remove("valid");
    } else {
      trailerLink.nextElementSibling.innerHTML = "👍";
      trailerLink.nextElementSibling.classList.remove("invalid");
      trailerLink.nextElementSibling.classList.add("valid-status");
      trailerLink.classList.add("valid");
    }
  });

  purchasePrice.addEventListener("blur", function (e) {
    if (purchasePrice.value == "") {
      purchasePrice.nextElementSibling.innerHTML = "Completar campo!";
      purchasePrice.nextElementSibling.classList.add("invalid");
      purchasePrice.nextElementSibling.classList.remove("valid-status");
      purchasePrice.classList.remove("valid");
    } else if (
      !validator.isNumeric(purchasePrice.value) ||
      validator.isInt(purchasePrice.value)
    ) {
      purchasePrice.nextElementSibling.innerHTML =
        "Debe ser un número decimal!";
      purchasePrice.nextElementSibling.classList.add("invalid");
      purchasePrice.nextElementSibling.classList.remove("valid-status");
      purchasePrice.classList.remove("valid");
    } else {
      purchasePrice.nextElementSibling.innerHTML = "👍";
      purchasePrice.nextElementSibling.classList.remove("invalid");
      purchasePrice.nextElementSibling.classList.add("valid-status");
      purchasePrice.classList.add("valid");
    }
  });

  rentalPrice.addEventListener("blur", function (e) {
    if (rentalPrice.value == "") {
      rentalPrice.nextElementSibling.innerHTML = "Completar campo!";
      rentalPrice.nextElementSibling.classList.add("invalid");
      rentalPrice.nextElementSibling.classList.remove("valid-status");
      rentalPrice.classList.remove("valid");
    } else if (
      !validator.isNumeric(rentalPrice.value) ||
      validator.isInt(rentalPrice.value)
    ) {
      rentalPrice.nextElementSibling.innerHTML = "Debe ser un número decimal!";
      rentalPrice.nextElementSibling.classList.add("invalid");
      rentalPrice.nextElementSibling.classList.remove("valid-status");
      rentalPrice.classList.remove("valid");
    } else {
      rentalPrice.nextElementSibling.innerHTML = "👍";
      rentalPrice.nextElementSibling.classList.remove("invalid");
      rentalPrice.nextElementSibling.classList.add("valid-status");
      rentalPrice.classList.add("valid");
    }
  });

  synopsis.addEventListener("blur", function (e) {
    if (synopsis.value == "") {
      synopsis.nextElementSibling.innerHTML = "Completar campo!";
      synopsis.nextElementSibling.classList.add("invalid");
      synopsis.nextElementSibling.classList.remove("valid-status");
      synopsis.classList.remove("valid");
    } else {
      synopsis.nextElementSibling.innerHTML = "👍";
      synopsis.nextElementSibling.classList.remove("invalid");
      synopsis.nextElementSibling.classList.add("valid-status");
      synopsis.classList.add("valid");
    }
  });

  form.addEventListener("submit", function (e) {
    let errors = [];
    let validExtensions = /(.jpg|.jpeg|.png)$/i;

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

    if (
      !productImage.value == "" &&
      !validExtensions.exec(productImage.value)
    ) {
      errors.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png");
    } else if (
      !backgroundImage.value == "" &&
      !validExtensions.exec(backgroundImage.value)
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
      alert("La edición se realizó exitosamente");
    }
  });
});
