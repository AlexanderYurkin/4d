/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/maps.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
// КАРТЫ ФИЛИАЛОВ

let map1 = document.getElementById("Map1");

if (map1) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map(map1, {
        center: [44.048235, 43.068824],
        zoom: 14,
        controls: ["zoomControl"],
      }),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {},
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/map-marker.svg",
          // Размеры метки.
          iconImageSize: [40, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-20, -57],
        }
      );

    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(myPlacemark);
  });
}

let map2 = document.getElementById("Map2");

if (map2) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map(map2, {
        center: [44.031842, 43.068947],
        zoom: 14,
        controls: ["zoomControl"],
      }),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {},
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/map-marker.svg",
          // Размеры метки.
          iconImageSize: [40, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-20, -57],
        }
      );

    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(myPlacemark);
  });
}

let map3 = document.getElementById("Map3");

if (map3) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map(map3, {
        center: [44.041452, 42.85559],
        zoom: 14,
        controls: ["zoomControl"],
      }),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {},
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/map-marker.svg",
          // Размеры метки.
          iconImageSize: [40, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-20, -57],
        }
      );

    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(myPlacemark);
  });
}

let map4 = document.getElementById("Map4");

if (map4) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map(map4, {
        center: [44.207855, 43.137578],
        zoom: 14,
        controls: ["zoomControl"],
      }),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: "Собственный значок метки",
          balloonContent: "Это красивая метка",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/map-marker.svg",
          // Размеры метки.
          iconImageSize: [40, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-20, -57],
        }
      );

    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(myPlacemark);
  });
}

/******/ })()
;
//# sourceMappingURL=maps.js.map