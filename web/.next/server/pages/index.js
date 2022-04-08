"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n    return null;\n};\nconst getServerSideProps = async ({ req , res  })=>{\n    const session = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/api/auth/login\",\n                permanent: false\n            }\n        };\n    } else {\n        return {\n            redirect: {\n                destination: \"/app\",\n                permanent: false\n            }\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFHakMsU0FBU0MsSUFBSSxHQUFHO0lBQzdCLE9BQU8sSUFBSSxDQUFDO0NBQ2I7QUFFTSxNQUFNQyxrQkFBa0IsR0FBdUIsT0FBTyxFQUFFQyxHQUFHLEdBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQzVFLE1BQU1DLE9BQU8sR0FBR0wsK0RBQVUsQ0FBQ0csR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFFcEMsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDWixPQUFPO1lBQ0xDLFFBQVEsRUFBRTtnQkFDUkMsV0FBVyxFQUFFLGlCQUFpQjtnQkFDOUJDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0Y7S0FDRixNQUFNO1FBQ0wsT0FBTztZQUNMRixRQUFRLEVBQUU7Z0JBQ1JDLFdBQVcsRUFBRSxNQUFNO2dCQUNuQkMsU0FBUyxFQUFFLEtBQUs7YUFDakI7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGdldFNlc3Npb24ocmVxLCByZXMpO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogJy9hcGkvYXV0aC9sb2dpbicsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogJy9hcHAnLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiSG9tZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsInNlc3Npb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();