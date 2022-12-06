window.addEventListener("load", function (e) {
  let form = document.querySelector(".main__form");
  let name = document.querySelector("#actorsName");

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
    let errors = [];

    if (name.value == "") {
      errors.push("El campo de nombre no puede estar vacio!");
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
  });
});
