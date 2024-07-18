// Header info-dots
const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

/* Show/Hide info btns on button click */

for (let btn of infoBtns) {
  btn.addEventListener("click", showHint);

  function showHint(e) {
    e.stopPropagation(); // to prevent the event from resurfacing further to the parents and the entire document. Then the document event that returns the hide class will not work
    const infoHint = this.parentNode.querySelector(".info-hint");

    // Hide all hints before show one
    for (let hint of infoHints) {
      hint.classList.add("hide");
    }
    // Show current hint
    infoHint.classList.toggle("hide");
  }
}

/* Show/Hide info btns on document click */

document.addEventListener("click", hideAllHints);

function hideAllHints() {
  for (let hint of infoHints) {
    hint.addEventListener("click", (e) => {
      /* Forbid document event resurfacing onclick hints*/
      e.stopPropagation();
    });
    hint.classList.add("hide");
  }
}

// Swiper slider
const swiper = new Swiper(".swiper", {
  // Optional params
  slidesPerView: 1,
  spaceBetween: 42,
  // freeMode: true,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1900: {
      slidesPerView: 5,
      spaceBetween: 52,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
    disabledClass: "swiper-button-disabled",
  },
});

// Tabs
const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

function toggleActiveTabBtn(activeBtn) {
  //  Remove active tab button
  for (let btn of tabsBtns) {
    btn.classList.remove("tab-controls__btn--active");
  }

  //  Add active tab button after click on it
  activeBtn.classList.add("tab-controls__btn--active");
}

for (let btn of tabsBtns) {
  btn.addEventListener("click", changeCategory);

  function changeCategory() {
    const btnCategory = btn.dataset.tab;

    toggleActiveTabBtn(btn);

    // Find product category corresponding to the button and hide not relevant categories
    for (let product of tabsProducts) {
      const productCategory = product.dataset.tabValue;

      // Show all cards onclick btn "All"
      if (btnCategory === "all") {
        product.classList.remove("hide");
      } else {
        // Remove class hide from all cards before adding it to relevant card
        // if (btnCategory === productCategory) {
        //   product.classList.remove("hide");
        // } else if (btnCategory !== productCategory) {
        //   product.classList.add("hide");
        // }

        // Another variant of Remove class hide from all cards before adding it to relevant card
        product.classList.contains("hide")
          ? product.classList.remove("hide")
          : null;

        if (productCategory !== btnCategory) {
          product.classList.add("hide");
        }
        swiper.update(); // Update swiper after DOM manipulations to make swiper btns work correctly
      }
    }
  }
}

//  Tablet navigation
const openNavBtn = document.querySelector(".nav__btn-open");
const closeNavBtn = document.querySelector(".tablet-nav__btn-close");
const navMenu = document.querySelector(".tablet-nav");

openNavBtn.onclick = function () {
  navMenu.classList.add("tablet-nav--open");
};
closeNavBtn.onclick = function () {
  navMenu.classList.remove("tablet-nav--open");
};
