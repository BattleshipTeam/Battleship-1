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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_logic_game_instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_logic/game_instance.js */ \"./game_logic/game_instance.js\");\n/* harmony import */ var _game_logic_game_instance_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game_logic_game_instance_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_logic_ship_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_logic/ship_methods.js */ \"./game_logic/ship_methods.js\");\n/* harmony import */ var _game_logic_ship_methods_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_logic_ship_methods_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_logic_player_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_logic/player_methods.js */ \"./game_logic/player_methods.js\");\n/* harmony import */ var _game_logic_player_methods_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_logic_player_methods_js__WEBPACK_IMPORTED_MODULE_2__);\n \r\n  \r\n   \r\n   \r\n   \r\n   \r\n   \r\n\r\n_game_logic_game_instance_js__WEBPACK_IMPORTED_MODULE_0___default()();\r\n_game_logic_game_instance_js__WEBPACK_IMPORTED_MODULE_0___default()();\r\n_game_logic_ship_methods_js__WEBPACK_IMPORTED_MODULE_1___default()();\r\n_game_logic_ship_methods_js__WEBPACK_IMPORTED_MODULE_1___default()();\r\n_game_logic_ship_methods_js__WEBPACK_IMPORTED_MODULE_1___default()();\r\n_game_logic_player_methods_js__WEBPACK_IMPORTED_MODULE_2___default()();\r\n_game_logic_player_methods_js__WEBPACK_IMPORTED_MODULE_2___default()();\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./game_logic/game_instance.js":
/*!*************************************!*\
  !*** ./game_logic/game_instance.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fire = __webpack_require__(/*! ./ship_methods.js */ \"./game_logic/ship_methods.js\").fire;\r\n\r\nfunction checkGameStatus (players) {\r\n\treturn false;\r\n}\r\n\r\nfunction takeTurn (opposingPlayer, guessFunction) {\r\n\tvar coordinates = guessFunction();\r\n\tfire(opposingPlayer, coordinates);\r\n\tvar gameOver = checkGameStatus();\r\n\t\r\n\treturn gameOver;\r\n}\r\n\r\nmodule.exports.checkGameStatus = checkGameStatus;\r\nmodule.exports.takeTurn = takeTurn;\n\n//# sourceURL=webpack:///./game_logic/game_instance.js?");

/***/ }),

/***/ "./game_logic/player_methods.js":
/*!**************************************!*\
  !*** ./game_logic/player_methods.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var checkForShip = __webpack_require__(/*! ./ship_methods.js */ \"./game_logic/ship_methods.js\").checkForShip;\r\n\r\nfunction validateLocation (player, coordinates) {\r\n  var x = coordinates[0];\r\n  var y = coordinates[1];\r\n\r\n  var spaceAvailable = !checkForShip(player, coordinates);\r\n\r\n  if ((x <= 9 && x >= 0) && (y <= 9 && y >= 0)) {\r\n    return spaceAvailable; // decides whether this valid space is occupied\r\n  } else {\r\n    return false;\r\n  }\r\n}\r\n\r\nfunction validateLocations (player, locations) {\r\n  var validated = locations.map(function (location) {\r\n    return validateLocation(player, location);\r\n  });\r\n  return validated.indexOf(false) === -1;\r\n}\r\n\r\nfunction placeShip (player, ship, startingCoordinates, direction) {\r\n  if (!direction) throw Error('You left out the direction! I need that for math!');\r\n  var proposedLocations = [];\r\n  var previousLocation,\r\n    rowNumber,\r\n    columnNumber;\r\n\r\n  for (var i = 0; i < ship.size; i++) {\r\n    previousLocation = proposedLocations[i - 1] || [];\r\n    rowNumber = previousLocation[0];\r\n    columnNumber = previousLocation[1];\r\n    \r\n    proposedLocations[i] = (i === 0)\r\n      ? startingCoordinates\r\n      : (direction === 'horizontal')\r\n        ? [rowNumber, ++columnNumber]\r\n        : [++rowNumber, columnNumber];\r\n  }\r\n  \r\n  if (validateLocations(player, proposedLocations)) {\r\n    ship.locations = proposedLocations;\r\n  } else {\r\n    return false;\r\n  }\r\n}\r\n\r\nfunction getRandomCoordinates () {\r\n  var x = Math.floor(Math.random() * 9);\r\n  var y = Math.floor(Math.random() * 9);\r\n  return [x, y];\t\r\n}\r\n\r\nfunction getRandomDirection () {\r\n  return Math.random() > 0.5\r\n    ? 'horizontal'\r\n    : 'vertical';\t\r\n}\r\n\r\n\r\n//fire(player, getRandomCoordinates());\r\n//placeShip(computerPlayer, computerPlayer.ship[0], getRandomCoordinates(), getRandomDirection());\r\n\r\nmodule.exports = {\r\n  placeShip: placeShip,\r\n  validateLocations: validateLocations,\r\n  validateLocation: validateLocation\r\n};\n\n//# sourceURL=webpack:///./game_logic/player_methods.js?");

/***/ }),

/***/ "./game_logic/ship_methods.js":
/*!************************************!*\
  !*** ./game_logic/ship_methods.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function checkForShip (player, coordinates) {\r\n\tvar shipPresent, ship;\r\n\t\r\n\tfor (var i = 0; i < player.ships.length; i++) {\r\n\t\tship = player.ships[i];\r\n\t\t\r\n\t\tshipPresent = ship.locations.filter(function (actualCoordinate) {\r\n\t\t\treturn (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);\r\n\t\t})[0];\r\n\t\t\r\n\t\tif (shipPresent) {\r\n\t\t\treturn ship;\r\n\t\t} \r\n\t}\r\n\t\r\n\treturn false;\r\n}\r\n\r\nfunction damageShip (ship, coordinates) {\r\n\tship.damage.push(coordinates);\r\n}\r\n\r\nfunction fire (player, coordinates) {\r\n\tvar ship = checkForShip(player, coordinates);\r\n\r\n\tif (ship) {\r\n\t\tdamageShip(ship, coordinates);\r\n\t}\t\r\n}\r\n\r\nmodule.exports.checkForShip = checkForShip;\r\nmodule.exports.damageShip = damageShip;\r\nmodule.exports.fire = fire;\n\n//# sourceURL=webpack:///./game_logic/ship_methods.js?");

/***/ })

/******/ });