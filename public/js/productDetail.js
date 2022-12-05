window.addEventListener("load", function () {
  const sliders = document.querySelectorAll(".main__slider-inner");
  const castSlider = document.querySelector("#main__slider-1-inner");
  const productsSlider = document.querySelectorAll("#sliderMovies");
  const windowWidth = window.innerWidth;

  let sliderGrabbed = false;

  if (windowWidth >= 1200) {
  }

  productsSlider.forEach((slider) => {
    slider.addEventListener("mousedown", (e) => {
      sliderGrabbed = true;
      slider.style.cursor = "grabbing";
    });

    slider.addEventListener("mouseup", (e) => {
      sliderGrabbed = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseleave", (e) => {
      sliderGrabbed = false;
    });

    slider.addEventListener("mousemove", (e) => {
      if (sliderGrabbed) {
        slider.parentElement.scrollLeft -= e.movementX;
      }
    });

    slider.addEventListener("wheel", (e) => {
      e.preventDefault();
      slider.parentElement.scrollLeft += e.deltaY;
    });

    console.log(slider);
  });
});
