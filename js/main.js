const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

/* Show/Hide info btns on button click */

for (let btn of infoBtns) {
  btn.addEventListener("click", showHint);

  function showHint(e) {
    e.stopPropagation(); // to prevent the event from resurfacing further to the parents and the entire document. Then the document event that returns the hide class will not work
    const infoHint = this.parentNode.querySelector(".info-hint");
    infoHint.classList.toggle("hide");
  }
}

/* Show/Hide info btns on document click */

document.addEventListener("click", hideAllHints);

function hideAllHints() {
  for (let hint of infoHints) {
    hint.addEventListener("click", (e) => {
      /* Forbid document event resurfacing onclick  hints*/
      e.stopPropagation();
    });
    hint.classList.add("hide");
  }
}

// Swiper slider
const swiper = new Swiper(".swiper", {
  // Optional params
  slidesPerView: 4,
  spaceBetween: 42,
  freeMode: true,

  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
    disabledClass: "swiper-button-disabled",
  },
});
