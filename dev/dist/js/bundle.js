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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {




/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n  position: absolute\r\n                       ^\r\n      Invalid CSS after \"...on: absolute; }\": expected 1 selector or at-rule, was \"<<<<<<< HEAD {\"\r\n      in C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\dev\\src\\sass\\m-sentenceBlog.sass (line 33, column 25)\n    at runLoaders (C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.<anonymous> (C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\node_modules\\async\\dist\\async.js:2257:31)\n    at Object.callback (C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\node_modules\\async\\dist\\async.js:958:16)\n    at options.error (C:\\Users\\Mai\\Documents\\GitHub\\WooTemplate-Learning\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map