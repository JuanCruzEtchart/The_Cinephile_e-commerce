window.addEventListener("load", function (e) {
  const hamburger = document.querySelector(".header__burger-menu");
  const sidebar = document.querySelector(".header__sidebar");
  const overlay = document.querySelector("#overlay");
  const searchBar = document.querySelector(".header__search-container");
  const searchButton = document.querySelector(".header__submit");

  let menuOpen = false;

  hamburger.addEventListener("click", function () {
    if (!menuOpen) {
      menuOpen = true;
      overlay.style.display = "block";
      sidebar.style.width = "150px";
    }
  });

  overlay.addEventListener("click", function () {
    if (menuOpen) {
      menuOpen = false;
      overlay.style.display = "none";
      sidebar.style.width = "0px";
    }
  });

/*   searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchBar.classList.toggle("active");
  }); */
});
