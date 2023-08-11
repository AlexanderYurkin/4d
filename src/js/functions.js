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

// ФОРМАТИРОВАНИЕ ЧИСЛА С ПРОБЕЛАМИ МЕЖДУ ТЫСЯЧАМИ, ТРЕБУЕТ КЛАСС .number ДЛЯ САМОГО ЧИСЛА

export function FormatNumber() {
  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  var elem = document.querySelectorAll(".number");

  elem.forEach((elem) => {
    var val = parseFloat(elem.innerHTML);
    elem.innerHTML = numberWithSpaces(val);
  });
}

// ПОКАЗАТЬ / СКРЫТЬ СТРОКУ ПОИСКА В ШАПКЕ

export function searchToggle() {
  const searchToggle = document.querySelector(".search__toggle"),
    searchBox = document.querySelector(".search");

  searchToggle.onclick = function (event) {
    event.preventDefault();
    searchBox.classList.toggle("active");
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

// ПЛАВНЫЙ ДРОПДАУН В ВЕРТИКАЛЬНОМ МЕНЮ

export function sidebar() {
  const sidebar = document.querySelectorAll(".sidebar .has-submenu .nav-link");

  if (sidebar) {
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
