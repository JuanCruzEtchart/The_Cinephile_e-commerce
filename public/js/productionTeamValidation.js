window.addEventListener("load", function (e) {
  console.log("hola");
  let form = document.querySelector(".main__form");
  let types = document.querySelectorAll(".type");
  let fullName = document.querySelector("#actorsName");
  let biography = document.querySelector("#actorsBiography");
  let photo = document.querySelector("#actorsPhoto");
  let fields = document.querySelectorAll(".field");

  fullName.focus();

  fields.forEach(function (field) {
    field.addEventListener("blur", function (e) {
      if (
        (field.name == "name" || field.name == "biography_link") &&
        field.value.length < 1
      ) {
        field.nextElementSibling.innerHTML = "Completar campo!";
        field.nextElementSibling.classList.add("invalid");
        field.nextElementSibling.classList.remove("valid");
        field.classList.remove("valid");
      } else {
        field.nextElementSibling.innerHTML = "👍";
        field.nextElementSibling.classList.remove("invalid");
        field.nextElementSibling.classList.add("valid");
        field.classList.add("valid");
      }
    });
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
    } /* else if (!validator.isURL(biography.value)) {
      errors.push("El campo de biografía debe ser una URL!");
    } */

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
    } else {
      alert("La carga se realizó exitosamente");
    }
  });
});
