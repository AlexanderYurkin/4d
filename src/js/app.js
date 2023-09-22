//СМАХИВАТЕЛЬ МОБИЛЬНОГО МЕНЮ

import Xwiper from "xwiper";
let menuOffcanvas = new bootstrap.Offcanvas(document.getElementById("Offcanvas"));
const xwiper = new Xwiper("#Offcanvas");
xwiper.onSwipeRight(() => {
  menuOffcanvas.hide();
});

//ПЛАГИН МАСОК ИНПУТОВ

import IMask from "imask";

const phoneInput = document.querySelectorAll(".input-phone");
const textInput = document.querySelectorAll(".input-text");
const dateInput = document.querySelectorAll(".input-date");

if (phoneInput.length) {
  phoneInput.forEach(function (el) {
    var phoneMask;

    el.addEventListener("focus", function () {
      phoneMask = IMask(el, {
        mask: "+{7} 000 000 00 00",
        lazy: false,
        placeholderChar: "*",
      });
    });

    el.addEventListener("blur", function () {
      phoneMask.updateOptions({
        mask: "+{7} 000 000 00 00",
        lazy: true,
      });
    });
  });
}

if (textInput.length) {
  textInput.forEach(function (el) {
    var textMask = IMask(el, {
      mask: /^[a-zа-яё\s]+$/iu,
    });
  });
}

if (dateInput.length) {
  dateInput.forEach(function (el) {
    let minDate = el.dataset.mindate.split(",");
    let maxDate = el.dataset.maxdate.split(",");

    var dateMask;

    el.addEventListener("focus", function () {
      dateMask = IMask(el, {
        mask: Date,
        min: new Date(minDate[0], minDate[1], minDate[2]),
        max: new Date(maxDate[0], maxDate[1], maxDate[2]),
        lazy: false,
      });
    });

    el.addEventListener("blur", function () {
      dateMask.updateOptions({
        mask: Date,
        min: new Date(minDate[0], minDate[1], minDate[2]),
        max: new Date(maxDate[0], maxDate[1], maxDate[2]),
        lazy: true,
      });
    });
  });
}

// ПРОСМОТРЩИК ФОТО

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
  Toolbar: {
    display: {
      left: ["infobar"],
      right: ["zoomIn", "thumbs", "close"],
    },
  },

  l10n: {
    CLOSE: "Закрыть",
    NEXT: "Дальше",
    PREV: "Назад",
    MODAL: "Вы можете закрыть данное окно, нажав клавишу ESC",
    ERROR: "Что-то пошло не так. Пожалуйста, повторите попытку позже",
    IMAGE_ERROR: "Изображение не найдено",
    ELEMENT_NOT_FOUND: "HTML элемент не найден",
    AJAX_NOT_FOUND: "Ошибка загрузки AJAX : Не найдено",
    AJAX_FORBIDDEN: "Ошибка загрузки AJAX : Запрещено",
    IFRAME_ERROR: "Ошибка загрузки страницы",
    TOGGLE_ZOOM: "Переключить уровень масштаба",
    TOGGLE_THUMBS: "Переключить эскиз",
    TOGGLE_SLIDESHOW: "Переключить презентацию",
    TOGGLE_FULLSCREEN: "Переключить режим полного экрана",
    DOWNLOAD: "Скачать",
    ZOOMIN: "Увеличить",
    ZOOMOUT: "Уменьшить",
  },
});

//АВТОКОМПЛИТ У ПОИСКА

import autoComplete from "@tarekraafat/autocomplete.js";

const searchForms = document.querySelectorAll(".search-form");

if (searchForms.length) {
  searchForms.forEach(function (el) {
    const searchInput = el.querySelector(".search-form-input");

    const autoCompleteJS = new autoComplete({
      selector: () => {
        return searchInput;
      },
      placeHolder: "Найти...",
      data: {
        src: async () => {
          try {
            document.querySelector(".search-form-input").setAttribute("placeholder", "Loading...");
            const source = await fetch("files/search-data.json");
            const data = await source.json();
            document.querySelector(".search-form-input").setAttribute("placeholder", autoCompleteJS.placeHolder);
            return data;
          } catch (error) {
            return error;
          }
        },
        cache: true,
      },
      resultsList: {
        element: (list, data) => {
          if (!data.results.length) {
            const message = document.createElement("div");
            message.setAttribute("class", "no_result");
            message.innerHTML = `<span>Не найдено "${data.query}"</span>`;
            list.prepend(message);
          }
        },
        noResults: true,
        tabSelect: true,
      },
      resultItem: {
        highlight: true,
      },
      events: {
        input: {
          focus: () => {
            if (autoCompleteJS.input.value.length) autoCompleteJS.start();
          },
        },
      },
    });

    autoCompleteJS.input.addEventListener("selection", function (event) {
      const feedback = event.detail;
      autoCompleteJS.input.blur();
      const selection = feedback.selection.value;
      autoCompleteJS.input.value = selection;
    });
  });
}

//ГЛАВНЫЙ СЛАЙДЕР

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

const mainSlider = document.querySelector(".main-slider");

if (mainSlider) {
  let slider = mainSlider.querySelector(".swiper");
  new Swiper(slider, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1.03,
    spaceBetween: 16,
    observer: true,
    autoHeight: true,
    autoplay: {
      delay: 6000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sbn-1",
      prevEl: ".sbp-1",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
    breakpoints: {
      576: {
        slidesPerView: 1.001,
        spaceBetween: 16,
      },

      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
}

// СЛАЙДЕР ВРАЧЕЙ

const doctorsSliderContainers = document.querySelectorAll(".doctors-slider");

if (doctorsSliderContainers.length) {
  for (const sliderContainer of doctorsSliderContainers) {
    let slider = sliderContainer.querySelector(".swiper");
    let next = sliderContainer.querySelector(".sbn-2");
    let prev = sliderContainer.querySelector(".sbp-2");

    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 1.25,
      spaceBetween: 16,
      observer: true,
      // loop: true,
      autoHeight: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        576: {
          slidesPerView: 2.001,
          spaceBetween: 16,
        },

        768: {
          slidesPerView: 3.001,
          spaceBetween: 16,
        },

        992: {
          slidesPerView: 4,
          spaceBetween: 16,
        },

        1200: {
          slidesPerView: 5,
          spaceBetween: 16,
        },

        1400: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },
    });
  }
}

// СЛАЙДЕР РЕЙТИНГОВ

const ratesSliderContainers = document.querySelectorAll(".rates-slider");

if (ratesSliderContainers.length) {
  for (const sliderContainer of ratesSliderContainers) {
    let slider = sliderContainer.querySelector(".swiper");
    let next = sliderContainer.querySelector(".sbn-3");
    let prev = sliderContainer.querySelector(".sbp-3");

    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 1.25,
      spaceBetween: 16,
      observer: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        576: {
          slidesPerView: 1.75,
          spaceBetween: 16,
        },

        768: {
          slidesPerView: 2.25,
          spaceBetween: 16,
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }
}

// СЛАЙДЕР КАРТОЧЕК НА РАЗНЫХ СТРАНИЦАХ

const cardsSliderContainers = document.querySelectorAll(".cards-slider");

if (cardsSliderContainers.length) {
  for (const SliderContainer of cardsSliderContainers) {
    let slider = SliderContainer.querySelector(".swiper");
    let next = SliderContainer.querySelector(".sbn-4");
    let prev = SliderContainer.querySelector(".sbp-4");

    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 1.15,
      spaceBetween: 16,
      observer: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        576: {
          slidesPerView: 1.75,
          spaceBetween: 16,
        },

        768: {
          slidesPerView: 2.25,
          spaceBetween: 16,
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 16,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },

        // 1400: {
        //   slidesPerView: 3,
        //   spaceBetween: 24,
        // },
      },
    });
  }
}

import * as flsFunctions from "./functions.js";
flsFunctions.isWebp();
flsFunctions.FocusTabbing();
flsFunctions.ScrollToTop();
flsFunctions.dropdownHover();
flsFunctions.searchToggle();
flsFunctions.calcToggle();
flsFunctions.sidebar();
flsFunctions.mobileScrollActive();
flsFunctions.formWizard();
flsFunctions.filialFilter();
flsFunctions.accordion();
flsFunctions.showHours();
flsFunctions.showMoreHours();
