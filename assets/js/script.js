'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
    elementToggleFunc(this);
});

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
}

let lastClickedBtn = null;

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        // Check if lastClickedBtn is defined and has a classList before using it
        if (lastClickedBtn && lastClickedBtn.classList) {
            lastClickedBtn.classList.remove("active");
        }

        this.classList.add("active");
        lastClickedBtn = this;
    });
}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const pageName = this.getAttribute("data-nav-link");

    // Find the corresponding page with the matching data-page attribute
    const targetPage = document.querySelector(`[data-page="${pageName}"]`);

    if (targetPage) {
      // Scroll to the target page
      targetPage.scrollIntoView({ behavior: "smooth" });

      // Update the active state of navigation links
      for (let j = 0; j < pages.length; j++) {
        if (pages[j] && navigationLinks[j]) {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }

      if (this) {
        this.classList.add("active");
      }

      if (targetPage) {
        targetPage.classList.add("active");
      }
    }
  });
}
