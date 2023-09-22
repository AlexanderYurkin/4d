// Проверка поддержки webp, добавление класса webp или no-webp для HTML

export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}

// ОТКЛЮЧИТЬ :FOCUS ПО КЛИКУ, НО ПОКАЗЫВАТЬ ПРИ ТАББАНГЕ С КЛАВИАТУРЫ

export function FocusTabbing() {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
    }
  }
  function handleMouseDownOnce() {
    document.body.classList.remove("user-is-tabbing");
    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  }
  window.addEventListener("keydown", handleFirstTab);
}

// КНОПКА СКРОЛЛА НАВЕРХ

export function ScrollToTop() {
  const scrollBtn = document.querySelector(".scroll-to-top");
  const btnVisibility = () => {
    if (window.scrollY > 400) {
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.visibility = "hidden";
    }
  };
  document.addEventListener("scroll", () => {
    btnVisibility();
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ПОКАЗАТЬ / СКРЫТЬ СТРОКУ ПОИСКА В ШАПКЕ

export function searchToggle() {
  const searchToggle = document.querySelector(".search-toggle"),
    searchBox = document.querySelector(".search");

  searchToggle.onclick = function (event) {
    event.preventDefault();
    searchBox.classList.toggle("show");
  };
}

// ПОКАЗАТЬ / СКРЫТЬ КАЛЬКУЛЯТОР

export function calcToggle() {
  const calcOpen = document.querySelector(".calc-btn"),
    calcClose = document.querySelector(".calc__close"),
    calc = document.querySelector(".calc");

  calcOpen.onclick = function (event) {
    event.preventDefault();
    calc.classList.add("active");
  };

  calcClose.onclick = function (event) {
    event.preventDefault();
    calc.classList.remove("active");
  };
}

// ПЛАВНОЕ РАСКРЫТИЕ МЕНЮ В САЙДБАРЕ

export function sidebar() {
  const sidebar = document.querySelectorAll(".sidebar .has-submenu .nav-link");

  if (sidebar.length) {
    document.addEventListener("DOMContentLoaded", function () {
      sidebar.forEach(function (element) {
        element.addEventListener("click", function (e) {
          element.classList.toggle("active");

          let nextEl = element.nextElementSibling;
          let parentEl = element.parentElement;

          if (nextEl) {
            e.preventDefault();
            let mycollapse = new bootstrap.Collapse(nextEl);

            if (nextEl.classList.contains("show")) {
              mycollapse.hide();
            } else {
              mycollapse.show();
              //Если надо закрывать соседние сабменю:
              // var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
              // if (opened_submenu) {
              //    new bootstrap.Collapse(opened_submenu);
              // }
            }
          }
        });
      });
    });
  }
}

// ПОЗИЦИЯ АКТИВНОГО ЭЛЕМЕНТА В ГОРИЗОНТАЛЬНОМ НАВБАРЕ

export function mobileScrollActive() {
  const activeItem = document.querySelector(".nav-mobile-scroll .nav-link.active");

  if (activeItem) {
    document.addEventListener("DOMContentLoaded", function () {
      let menu = document.querySelector(".nav-mobile-scroll > *");
      let menuRect = menu.getBoundingClientRect();
      let activeRect = activeItem.getBoundingClientRect();
      menu.scrollLeft += activeRect.left - menuRect.left;
    });
  }
}

// ФОРМА ЗАПИСИ

export function formWizard() {
  const wizardForm = document.querySelector(".form-wizard");

  if (wizardForm) {
    const previousButton = document.querySelector(".form-wizard-prev");
    const nextButton = document.querySelector(".form-wizard-next");
    const currentStepEl = document.querySelector(".current-step");
    const totalStepsEl = document.querySelector(".total-steps");
    const submitButton = document.querySelector(".form-wizard-submit");
    const tabPanels = document.querySelectorAll(".form-wizard-step");
    let currentStep = 0;

    totalStepsEl.innerHTML = tabPanels.length;
    currentStepEl.innerHTML = currentStep + 1;

    nextButton.addEventListener("click", (event) => {
      event.preventDefault();

      tabPanels[currentStep].classList.add("hidden");

      tabPanels[currentStep + 1].classList.remove("hidden");
      currentStep += 1;
      currentStepEl.innerHTML = currentStep + 1;

      updateStatusDisplay();
    });

    previousButton.addEventListener("click", (event) => {
      event.preventDefault();

      tabPanels[currentStep].classList.add("hidden");

      tabPanels[currentStep - 1].classList.remove("hidden");
      currentStep -= 1;
      currentStepEl.innerHTML = currentStep + 1;

      nextButton.removeAttribute("disabled");
      updateStatusDisplay();
    });

    function updateStatusDisplay() {
      if (currentStep === tabPanels.length - 1) {
        nextButton.classList.add("hidden");
        previousButton.classList.remove("hidden");
        submitButton.classList.remove("hidden");
      } else if (currentStep == 0) {
        nextButton.classList.remove("hidden");
        previousButton.classList.add("hidden");
        submitButton.classList.add("hidden");
      } else {
        nextButton.classList.remove("hidden");
        previousButton.classList.remove("hidden");
        submitButton.classList.add("hidden");
      }
    }
  }
}

// ОТКРЫТИЕ ДРОПДАУНА ПО ХОВЕРУ

export function dropdownHover() {
  const dropdowns = document.querySelectorAll(".dropdown:not(.no-hover)");

  if (dropdowns.length) {
    dropdowns.forEach(function (dropdown) {
      const dropdownToggle = new bootstrap.Dropdown(dropdown.querySelector(".dropdown-toggle"), {
        offset: [0, 0],
      });

      dropdown.addEventListener("mouseover", function (e) {
        dropdownToggle.show();
      });

      dropdown.addEventListener("mouseleave", function (e) {
        dropdownToggle.hide();
      });
    });
  }
}

// ПОВЕДЕНИЕ ЧЕКБОКСОВ В ФИЛЬТРЕ ФИЛИАЛОВ НА ШАГЕ ВЫБОРА ДОКТОРА

export function filialFilter() {
  const filialFilter = document.querySelector(".filial-filter");

  if (filialFilter) {
    const checkboxAnyFilial = document.getElementById("appointmentFilialFilter1");
    const checkboxes = document.querySelectorAll(".form-check-input");
    const filialFilterVal = document.querySelector(".filial-filter-val");

    checkboxAnyFilial.addEventListener("change", function () {
      if (this.checked) {
        checkboxes.forEach((checkbox, index) => {
          if (index !== 0) {
            checkbox.checked = false;
          }
        });
        filialFilterVal.textContent = document.querySelector("label[for=appointmentFilialFilter1]").textContent;
      }
    });

    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener("change", function () {
        if (index !== 0) {
          checkboxAnyFilial.checked = false;
        }

        const selectedCheckboxes = Array.from(checkboxes).filter((checkbox, index) => index !== 0 && checkbox.checked);
        const selectedCount = selectedCheckboxes.length;

        filialFilterVal.textContent = selectedCount === 0 ? "Любой филиал" : `Выбрано филиалов: ${selectedCount}`;
      });
    });
  }
}

// АККОРДИОН

export function accordion() {
  document.addEventListener("DOMContentLoaded", function () {
    const accordionTitle = document.querySelectorAll(".accordion-title");

    if (accordionTitle.length) {
      accordionTitle.forEach(function (element) {
        element.addEventListener("click", function (e) {
          let parentEl = element.closest(".accordion");
          let submenuEl = parentEl.querySelector(".accordion-body");

          parentEl.classList.toggle("active");

          if (submenuEl) {
            e.preventDefault();
            let mycollapse = new bootstrap.Collapse(submenuEl);

            if (submenuEl.classList.contains("show")) {
              mycollapse.hide();
            } else {
              mycollapse.show();
            }
          }
        });
      });
    }
  });
}

// ПОКАЗАТЬ ЧАСЫ ПРИЁМА ПРИ ВЫБОРЕ ДАТЫ ПРИЁМА

export function showHours() {
  const appointmentFilial = document.querySelectorAll(".appointment-filial");

  if (appointmentFilial.length) {
    appointmentFilial.forEach(function (element) {
      const date = element.querySelector(".appointment-filial-date");
      const time = element.querySelector(".appointment-filial-time");

      time.style.display = "none";

      function showTime() {
        time.style.display = "block";
      }

      date.addEventListener("change", showTime);
    });
  }
}

//РАЗВЕРНУТЬ СПИСОК ЧАСОВ ПРИЁМА

export function showMoreHours() {
  const hoursBlock = document.querySelectorAll(".hours");

  if (hoursBlock.length) {
    hoursBlock.forEach(function (element) {
      const hours = element.querySelectorAll(".hour");
      const hourMore = element.querySelector(".hour-more");
      const hourMoreDots = element.querySelector(".hour-more-dots");
      const showMoreButton = element.querySelector(".show-more-hours");
      let isShowingMore = false;

      function hideExtraHours() {
        for (let i = 11; i < hours.length; i++) {
          hours[i].style.display = "none";
        }
      }

      function showExtraHours() {
        for (let i = 11; i < hours.length; i++) {
          hours[i].style.display = "block";
        }
      }

      function toggleShowMore() {
        isShowingMore = !isShowingMore;
        if (isShowingMore) {
          showExtraHours();
          hourMore.classList.add("show");
        } else {
          hideExtraHours();
          hourMore.classList.remove("show");
        }
      }

      showMoreButton.addEventListener("click", toggleShowMore);

      if (hours.length > 11) {
        hideExtraHours();
        hourMore.style.display = "block";
      } else {
        hourMore.style.display = "none";
      }
    });
  }
}
