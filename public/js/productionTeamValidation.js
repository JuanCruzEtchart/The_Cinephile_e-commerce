window.addEventListener("load", function (e) {
  let form = document.querySelector(".main__form");
  let types = document.querySelectorAll(".type");
  let fullName = document.querySelector("#actorsName");
  let biography = document.querySelector("#actorsBiography");
  let photo = document.querySelector("#actorsPhoto");
  let fields = document.querySelectorAll(".field");

  fullName.focus();

  fullName.addEventListener("blur", function (e) {
    if (fullName.value.length == "") {
      fullName.nextElementSibling.innerHTML = "Completar campo!";
      fullName.nextElementSibling.classList.add("invalid");
      fullName.nextElementSibling.classList.remove("valid-status");
      fullName.classList.remove("valid");
    } else {
      fullName.nextElementSibling.innerHTML = "👍";
      fullName.nextElementSibling.classList.remove("invalid");
      fullName.nextElementSibling.classList.add("valid-status");
      fullName.classList.add("valid");
    }
  });

  biography.addEventListener("blur", function (e) {
    if (biography.value.length == "") {
      biography.nextElementSibling.innerHTML = "Completar campo!";
      biography.nextElementSibling.classList.add("invalid");
      biography.nextElementSibling.classList.remove("valid-status");
      biography.classList.remove("valid");
    } else if (!validator.isURL(biography.value)) {
      biography.nextElementSibling.innerHTML = "Debe ser una URL!";
      biography.nextElementSibling.classList.add("invalid");
      biography.nextElementSibling.classList.remove("valid-status");
      trailerLink.classList.remove("valid");
    } else {
      biography.nextElementSibling.innerHTML = "👍";
      biography.nextElementSibling.classList.remove("invalid");
      biography.nextElementSibling.classList.add("valid-status");
      biography.classList.add("valid");
    }
  });

  form.addEventListener("submit", function (e) {
    let errors = [];
    let photoValue = photo.value;
    let validExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    if (
      types[0].checked == false &&
      types[1].checked == false &&
      types[2].checked == false
    ) {
      errors.push("El selector de tipo no puede estar vacio!");
    }

    if (fullName.value == "") {
      errors.push("El campo de nombre no puede estar vacio!");
    }

    if (biography.value == "") {
      errors.push("El campo de biografía no puede estar vacio!");
    } else if (!validator.isURL(biography.value)) {
      errors.push("El campo de biografía debe ser una URL!");
    }

    if (photo.value == "") {
      errors.push("Es obligatorio cargar una foto!");
    } else if (!validExtensions.exec(photoValue)) {
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
      fullName.focus();
    } else {
      alert("La carga se realizó exitosamente");
    }
  });
});
