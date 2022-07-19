/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial */ \"./src/modules/initial.js\");\n\n\n(0,_modules_initial__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://twistkichen/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction about(){\n    const div = document.createElement('div');\n    div.classList.add('about');\n\n    const h3 = document.createElement('h3');\n    h3.textContent='Información';\n\n    const p = document.createElement('p');\n    p.textContent = 'Let’s use what we’ve learned and take a chance to continue practicing DOM manipulation by dynamically rendering a simple restaurant homepage! By the end, we are going to be using JavaScript alone to generate the entire contents of the website! ';\n\n    div.appendChild(h3);\n    div.appendChild(p);\n    return div;\n}\n\nfunction loadAbout(){\n    const main = document.getElementById('main');\n    main.textContent=''\n    main.appendChild(about());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://twistkichen/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPizza = [\n    {\n        name: 'Fruits',\n        img : '../dist/images/fruits.jpg'\n    },\n    {\n        name: 'Litti Chokha',\n        img : '../dist/images/litti chokha.jpg'\n    },\n    {\n        name: 'Dhosa',\n        img : '../dist/images/dhosa.jpg'\n    },\n    {\n        name: 'Bugger',\n        img : '../dist/images/buger.jpg'\n    },\n    {\n        name: 'Cheken',\n        img : '../dist/images/cheken.jpg'\n    },\n    {\n        name: 'Panner',\n        img : '../dist/images/paneer.jpg'\n    }\n]\n\nfunction cellPizza(p){\n    let pizza = document.createElement('div');\n    pizza.classList.add('pizza');\n    let h3 = document.createElement('h3');\n    h3.textContent = p.name;\n    let img = document.createElement('img');\n    img.classList.add('imgPizza');\n    img.setAttribute('src', p.img);\n    pizza.appendChild(h3);\n    pizza.appendChild(img);\n\n    return pizza;\n}\n\nfunction gridPizzas (){\n    const divGrid = document.createElement('div');\n    divGrid.classList.add('menuGrid');\n        \n    for(let i of menuPizza){\n        const pizza = cellPizza(i);\n        divGrid.appendChild(pizza); \n    }\n    return divGrid;\n}\n\nfunction loadContent(){\n    const main = document.getElementById('main');\n    main.textContent = \"\";\n    const div = document.createElement('div');\n    div.appendChild(gridPizzas());\n\n    main.appendChild(div);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContent);\n\n//# sourceURL=webpack://twistkichen/./src/modules/content.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction messageHome(){\n    const divTitle = document.createElement('div');\n    divTitle.classList.add('titleHome');\n    const i = document.createElement('i');\n    i.classList.add('fa-pizza-slice');\n    i.classList.add('fas');\n    const h2 = document.createElement('h2');\n    h2.textContent = \"here are many restaurants. Some restaurants are quick and easy and others you stay at for a couple of hours.\"\n\n    \n\n    divTitle.appendChild(i);\n    divTitle.appendChild(h2);\n    return divTitle;\n}\n\n\nfunction loadHome(){\n    const main = document.getElementById('main');\n    main.textContent = \"\";\n    const div = document.createElement('div');\n    div.classList.add('home');\n\n    const img = document.createElement('img');\n    img.setAttribute('src','./images/hotel.jpg');\n\n    div.appendChild(messageHome());\n    div.appendChild(img)\n    main.appendChild(div);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://twistkichen/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./src/modules/content.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\n\n\n\n\nfunction createHeader(){\n    const header = document.createElement('header');\n    header.classList.add('header');\n    header.innerHTML = `\n        <div class=\"title\">\n            <h1>TwistKichen</h1>\n            <i class=\"fas fa-pizza-slice\"></i>\n        </div>\n    `\n    const nav = createNav();\n    header.appendChild(nav);\n\n    return header;\n}\n\nfunction createNav(){\n    const nav = document.createElement('nav');\n    nav.classList.add('nav');\n    const buttonHome = document.createElement('button');\n    buttonHome.textContent= 'Home';\n    buttonHome.addEventListener('click',(e)=>{\n        \n        if(e.target.classList.contains('active')) return;\n        setActiveButton(buttonHome);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    })\n\n    const buttonContent = document.createElement('button');\n    buttonContent.textContent = 'Content';\n    buttonContent.addEventListener('click',(e)=>{\n        \n        if(e.target.classList.contains('active')) return;\n        setActiveButton(buttonContent);\n        (0,_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    })\n\n    const buttonAbout = document.createElement('button');\n    buttonAbout.textContent= 'About';\n    buttonAbout.addEventListener('click',(e)=>{\n        \n        if(e.target.classList.contains('active')) return;\n        setActiveButton(buttonAbout);\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    })\n    \n    nav.appendChild(buttonHome);\n    nav.appendChild(buttonContent);\n    nav.appendChild(buttonAbout);\n\n    return nav\n}\n\nfunction createMain(){\n    const main = document.createElement('div');\n    main.id = 'main';\n    main.classList.add('main');\n    return main;\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".nav button\");\n  \n    buttons.forEach((button) => {\n      if (button !== this) {\n        button.classList.remove('active');\n      }\n    }); \n  \n    button.classList.add(\"active\");\n  }\n\n  function createFooter(){\n      const footer = document.createElement('footer')\n      footer.classList.add('footer');\n      footer.style.backgroundColor='reb'\n      \n      return footer;\n  }\n\nfunction initialPage(){\n    const content = document.getElementById('content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain())\n    content.appendChild(createFooter());\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPage);\n\n//# sourceURL=webpack://twistkichen/./src/modules/initial.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;