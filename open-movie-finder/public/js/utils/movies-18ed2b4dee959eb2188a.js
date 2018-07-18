/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/*!***************************************!*\
  !*** ./app/client/js/utils/movies.js ***!
  \***************************************/
/*! exports provided: initialMovies, additionalMovies */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialMovies", function() { return initialMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalMovies", function() { return additionalMovies; });
// some sample movies
var initialMovies = {
  movie1: {
    title: "Ferris Bueller's Day Off",
    year: "1986",
    description: "A high school wise guy is determined to have a day off from school, despite what the principal thinks of that.",
    poster: "./posters/ferris.png"
  },
  movie2: {
    title: "Bridget Jones' Diary",
    year: "2001",
    description: "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
    poster: "./posters/bridget-jones.png"
  },
  movie3: {
    title: "50 First Dates",
    year: "2004",
    description: "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams.",
    poster: "./posters/50-first-dates.png"
  },
  movie4: {
    title: "Matilda",
    year: "1996",
    description: "Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable.",
    poster: "./posters/matilda.png"
  }
};

var additionalMovies = {
  movie5: {
    title: "Dirty Dancing",
    year: "1987",
    description: "Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle.",
    poster: "./posters/dirty-dancing.png"
  },
  movie6: {
    title: "When Harry Met Sally",
    year: "1989",
    description: "Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
    poster: "./posters/when-harry-met-sally.png"
  },
  movie7: {
    title: "Elf",
    year: "2003",
    description: "After inadvertently wreaking havoc on the elf community due to his ungainly size, a man raised as an elf at the North Pole is sent to the U.S. in search of his true identity.",
    poster: "./posters/elf.png"
  },
  movie8: {
    title: "Grease",
    year: "1978",
    description: "Good girl Sandy and greaser Danny fell in love over the summer. When they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance?",
    poster: "./posters/grease.png"
  }
};




/***/ })

/******/ });
//# sourceMappingURL=movies-18ed2b4dee959eb2188a.js.map