//СМАХИВАТЕЛЬ МОБИЛЬНОГО МЕНЮ

import Xwiper from 'xwiper';
let menuOffcanvas = new bootstrap.Offcanvas(document.getElementById('Offcanvas'));
const xwiper = new Xwiper('#Offcanvas');
xwiper.onSwipeRight(() => {
   menuOffcanvas.hide();
});


//ПЛАГИН МАСОК ИНПУТОВ

import Cleave from 'cleave.js';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ru.js';

let CleaveInput = document.querySelectorAll('.input-phone');
if (CleaveInput) {
   CleaveInput.forEach(function (el) {
      new Cleave(el, {
         phone: true,
         phoneRegionCode: 'RU',
         prefix: '+7',
         noImmediatePrefix: true,
         blocks: [4, 3, 3, 4]
      })
   });
}


// ПРОСМОТРЩИК ФОТО

import { Fancybox } from "@fancyapps/ui";
import ru from "@fancyapps/ui/src/Fancybox/l10n/ru.js";
Fancybox.defaults.l10n = ru;
Fancybox.bind('[data-fancybox]', {
   Toolbar: {
      display: ["counter", "zoom", "close"],
   },
   Thumbs: {
      autoStart: false,
   },
});


//ГЛАВНЫЙ СЛАЙДЕР

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const mainSlider = document.querySelector('.main-slider');

if (mainSlider) {
   const swiper1 = new Swiper(mainSlider, {
      modules: [Navigation, Autoplay],
      slidesPerView: 1.05,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 500,
      loopFillGroupWithBlank: true,
      autoplay: {
         delay: 5000,
         pauseOnMouseEnter: true,
         disableOnInteraction: false,
      },
      navigation: {
         nextEl: ".sbn-1",
         prevEl: ".sbp-1",
      },
      breakpoints: {
         768: {
            slidesPerView: 1,
            spaceBetween: 16,
         },

         992: {
            slidesPerView: 1,
            spaceBetween: 0,
         }
      }
   });
}


// СЛАЙДЕР ВРАЧЕЙ

const doctorsSlider = document.querySelector('.doctors-slider');

if (doctorsSlider) {
   const swiper2 = new Swiper(doctorsSlider, {
      modules: [Navigation],
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 300,
      autoHeight: true,
      navigation: {
         nextEl: ".sbn-2",
         prevEl: ".sbp-2",
      },
      breakpoints: {
         576: {
            slidesPerView: 2,
            spaceBetween: 16,
         },

         768: {
            slidesPerView: 3,
            spaceBetween: 16,
         },

         992: {
            slidesPerView: 3,
            spaceBetween: 32,
         },

         1200: {
            slidesPerView: 4,
            spaceBetween: 32,
         },

         1400: {
            slidesPerView: 5,
            spaceBetween: 32,
         }
      }
   });
}


// СЛАЙДЕР РЕЙТИНГОВ

const ratesSlider = document.querySelector('.rates-slider');

if (ratesSlider) {
   const swiper3 = new Swiper(ratesSlider, {
      modules: [Navigation],
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 300,
      navigation: {
         nextEl: ".sbn-3",
         prevEl: ".sbp-3",
      },
      breakpoints: {
         576: {
            slidesPerView: 1,
            spaceBetween: 16,
         },

         768: {
            slidesPerView: 2,
            spaceBetween: 16,
         },

         992: {
            slidesPerView: 3,
            spaceBetween: 32,
         },

         1200: {
            slidesPerView: 3,
            spaceBetween: 32,
         },

         1400: {
            slidesPerView: 4,
            spaceBetween: 32,
         }
      }
   });
}


// СЛАЙДЕР ФОТОГРАФИЙ ЦЕНТРА

const branchSlider = document.querySelector('.branch-slider');

if (branchSlider) {
   const swiper4 = new Swiper(branchSlider, {
      modules: [Pagination, Autoplay],
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
         delay: 5000,
         pauseOnMouseEnter: true,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
         renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
         },
      },
   });
}


// СЛАЙДЕР АКЦИЙ ВРАЧА

const docsalesSlider = document.querySelector('.doc-sales-slider');

if (docsalesSlider) {
   const swiper5 = new Swiper(docsalesSlider, {
      modules: [Navigation],
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 300,
      navigation: {
         nextEl: ".sbn-4",
         prevEl: ".sbp-4",
      },
      breakpoints: {
         576: {
            slidesPerView: 1,
            spaceBetween: 16,
         },

         768: {
            slidesPerView: 1,
            spaceBetween: 16,
         },

         992: {
            slidesPerView: 2,
            spaceBetween: 32,
         },

         1200: {
            slidesPerView: 3,
            spaceBetween: 32,
         },
      }
   });
}


// СЛАЙДЕР РЕКОМЕНДАЦИЙ НА СТРАНИЦЕ ВРАЧА

const docrecommendSlider = document.querySelector('.doc-recommend-slider');

if (docrecommendSlider) {
   const swiper6 = new Swiper(docrecommendSlider, {
      modules: [Navigation],
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 300,
      navigation: {
         nextEl: ".sbn-5",
         prevEl: ".sbp-5",
      },
      breakpoints: {
         576: {
            slidesPerView: 1,
            spaceBetween: 16,
         },

         768: {
            slidesPerView: 1,
            spaceBetween: 16,
         },

         992: {
            slidesPerView: 2,
            spaceBetween: 32,
         },

         1200: {
            slidesPerView: 3,
            spaceBetween: 32,
         },
      }
   });
}


// СЛАЙДЕР РЕКОМЕНДАЦИЙ НА СТРАНИЦЕ УСЛУГИ / АНАЛИЗА

const servicerecommendSlider = document.querySelector('.service-recommend-slider');

if (servicerecommendSlider) {
   const swiper7 = new Swiper(servicerecommendSlider, {
      modules: [Navigation],
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 300,
      navigation: {
         nextEl: ".sbn-6",
         prevEl: ".sbp-6",
      },
      breakpoints: {
         992: {
            slidesPerView: 2,
            spaceBetween: 32,
         },
      }
   });
}

import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
flsFunctions.FocusTabbing();
flsFunctions.ScrollToTop();
flsFunctions.FormatNumber();
flsFunctions.searchToggle();
flsFunctions.calcToggle();
flsFunctions.customSelect();
flsFunctions.FormValidation();