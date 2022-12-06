window.addEventListener("load", function (e) {
  console.log("hola");
  let form = document.querySelector(".main__form");
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
  let castLength = document.querySelector("#castLength");
  let productImage = document.querySelector("#productImage");
  let backgroundImage = document.querySelector("#backgroundImage");

  name.focus();

  name.addEventListener("blur", function (e) {
    if (name.value.length < 1) {
      name.nextElementSibling.innerHTML = "Completar campo!";
      name.nextElementSibling.classList.add("invalid");
      name.nextElementSibling.classList.remove("valid");
      name.classList.remove("valid");
    } else {
      name.nextElementSibling.innerHTML = "👍";
      name.nextElementSibling.classList.remove("invalid");
      name.nextElementSibling.classList.add("valid");
      name.classList.add("valid");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = [];
    let productImageValue = productImage.value;
    let backgroundImageValue = backgroundImage.value;
    let validExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
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
      !validator.isDecimal(release_year.value, { locale: "es-ES" })
    ) {
      errors.push(
        "El campo de año de salida debe ser un número entero de 4 dígitos!"
      );
    } else if (release_year.value.length !== 4) {
      errors.push(
        "El campo de año de salida debe tener 4 dígitos!"
      );
    }

    if (rating.value == "") {
      errors.push("El campo de clasificación no puede estar vacio!");
    }

    if (length.value == "") {
      errors.push("El campo de duración no puede estar vacio!");
    }

    if (imdbScore.value == "") {
      errors.push("El campo de puntaje de IMDb no puede estar vacio!");
    } else if (Number.isInteger(imdbScore.value)) {
      errors.push("El campo de puntaje de IMDb debe ser un número decimal!");
    } else if (imdbScore.value.length !== 4) {
      errors.push("El campo de puntaje de IMDb debe tener 4 dígitos!");
    } //revisar validacion de numero

    if (imdbTotalReviews.value == "") {
      errors.push("El campo de reseñas totales de IMDb no puede estar vacio!");
    }

    if (tomatoScore.value == "") {
      errors.push(
        "El campo de puntaje de Rotten Tomatoes no puede estar vacio!"
      );
    } else if (!Number.isInteger(tomatoScore.value)) {
      errors.push(
        "El campo de puntaje de Rotten Tomatoes debe ser un número entero!"
      );
    } else if (tomatoScore.value.length !== 3) {
      errors.push(
        "El campo de puntaje de Rotten Tomatoes debe tener 3 dígitos!"
      );
    }

    if (trailerLink.value == "") {
      errors.push("El campo de trailer no puede estar vacio!");
    } else if (!validator.isURL(trailerLink.value)) {
      errors.push("El campo de trailer debe ser una URL!");
    }

    if (purchasePrice.value == "") {
      errors.push("El campo de precio de venta no puede estar vacio!");
    } else if (Number.isInteger(purchasePrice.value)) {
      errors.push("El campo de precio de venta debe ser un número decimal!");
    }

    if (rentalPrice.value == "") {
      errors.push("El campo de precio de alquiler no puede estar vacio!");
    } else if (Number.isInteger(rentalPrice.value)) {
      errors.push("El campo de precio de alquiler debe ser un número decimal!");
    }

    if (synopsis.value == "") {
      errors.push("El campo de sinopsis no puede estar vacio!");
    }

    if (productImage.value == "") {
      errors.push("Es obligatorio cargar una imagen de producto!");
    } else if (!validExtensions.exec(productImageValue)) {
      errors.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png/");
    }

    if (backgroundImage.value == "") {
      errors.push("Es obligatorio cargar una imagen de fondo!");
    } else if (!validExtensions.exec(backgroundImageValue)) {
      errors.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png/");
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
    console.log("prueba");
  });
});
