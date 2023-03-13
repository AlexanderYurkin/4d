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
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}

export function FormValidation() {
   (() => {
      'use strict'

      const forms = document.querySelectorAll('.needs-validation')

      Array.from(forms).forEach(form => {
         form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
               event.preventDefault()
               event.stopPropagation()
            }

            form.classList.add('was-validated')
         }, false)
      })
   })()
}


// ОТКЛЮЧИТЬ :FOCUS ПО КЛИКУ, НО ПОКАЗЫВАТЬ ПРИ ТАББАНГЕ С КЛАВИАТУРЫ

export function FocusTabbing() {
   function handleFirstTab(e) {
      if (e.keyCode === 9) {
         document.body.classList.add('user-is-tabbing');
         window.removeEventListener('keydown', handleFirstTab);
         window.addEventListener('mousedown', handleMouseDownOnce);
      }
   }
   function handleMouseDownOnce() {
      document.body.classList.remove('user-is-tabbing');
      window.removeEventListener('mousedown', handleMouseDownOnce);
      window.addEventListener('keydown', handleFirstTab);
   }
   window.addEventListener('keydown', handleFirstTab);
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
         behavior: "smooth"
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

   elem.forEach(elem => {
      var val = parseFloat(elem.innerHTML);
      elem.innerHTML = numberWithSpaces(val);
   })
}


// ПОКАЗАТЬ / СКРЫТЬ СТРОКУ ПОИСКА

export function searchToggle() {
   const searchToggle = document.querySelector('.search__toggle'),
      searchBox = document.querySelector('.search');

   searchToggle.onclick = function (event) {
      event.preventDefault();
      searchBox.classList.toggle('active');
   };
}

// ПОКАЗАТЬ / СКРЫТЬ КАЛЬКУЛЯТОР

export function calcToggle() {
   const calcOpen = document.querySelector('.calc-btn'),
      calcClose = document.querySelector('.calc__close'),
      calc = document.querySelector('.calc');

   calcOpen.onclick = function (event) {
      event.preventDefault();
      calc.classList.add('active');
   };

   calcClose.onclick = function (event) {
      event.preventDefault();
      calc.classList.remove('active');
   };
}

// КАСТОМНЫЙ СЕЛЕКТ

export function customSelect() {
   const selected = document.querySelector(".selected");
   const optionsContainer = document.querySelector(".options-container");
   const optionsList = document.querySelectorAll(".option");

   selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
   });

   optionsList.forEach(option => {
      option.addEventListener("click", () => {
         selected.innerHTML = option.querySelector("label").innerHTML;
         optionsContainer.classList.remove("active");
      });
   });
}