"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getServiverSideProps\": function() { return /* binding */ getServiverSideProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_micaelaandrade_Documents_Cursos_Rocketseat_Ignite22_Lab_01_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_micaelaandrade_Documents_Cursos_Rocketseat_Ignite22_Lab_01_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_micaelaandrade_Documents_Cursos_Rocketseat_Ignite22_Lab_01_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n/* eslint-disable @next/next/no-html-link-for-pages */ \nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var user = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser)().user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Hello World\"\n            }, void 0, false, {\n                fileName: \"/Users/micaelaandrade/Documents/Cursos/Rocketseat/Ignite22/Lab-01/web/src/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(user, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/micaelaandrade/Documents/Cursos/Rocketseat/Ignite22/Lab-01/web/src/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"/api/auth/login\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/micaelaandrade/Documents/Cursos/Rocketseat/Ignite22/Lab-01/web/src/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/micaelaandrade/Documents/Cursos/Rocketseat/Ignite22/Lab-01/web/src/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"Q+JCVIy3JH0MXpFK+vm68eAxsAY=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = Home;\nvar getServiverSideProps = function() {\n    var _ref = _asyncToGenerator(_Users_micaelaandrade_Documents_Cursos_Rocketseat_Ignite22_Lab_01_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var req, res, token;\n        return _Users_micaelaandrade_Documents_Cursos_Rocketseat_Ignite22_Lab_01_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    req = param.req, res = param.res;\n                    token = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.getAccessToken)(req, res);\n                    console.log(token);\n                    return _ctx.abrupt(\"return\", {\n                        props: {}\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getServiverSideProps(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBLHNEQUFzRCxDQUNROztBQUcvQyxTQUFTRSxJQUFJLEdBQUc7O0lBQzdCLElBQU0sSUFBTSxHQUFLRCw0REFBTyxFQUFFLENBQWxCRSxJQUFJO0lBQ1oscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLGFBQVc7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ0MsS0FBRzswQkFDREMsSUFBSSxDQUFDQyxTQUFTLENBQUNMLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkFDMUI7MEJBQ04sOERBQUNNLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxpQkFBaUI7MEJBQUMsT0FBSzs7Ozs7b0JBQUk7Ozs7OztZQUMvQixDQUNQO0NBQ0Y7R0FYdUJSLElBQUk7O1FBQ1RELHdEQUFPOzs7QUFERkMsS0FBQUEsSUFBSTtBQWFyQixJQUFNUyxvQkFBb0I7ZUFBeUIsMk5BQXdCO1lBQWZDLEdBQUcsRUFBRUMsR0FBRyxFQUNuRUMsS0FBSzs7OztvQkFEc0RGLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxHQUFHLFNBQUhBLEdBQUc7b0JBQ25FQyxLQUFLLEdBQUdkLG1FQUFjLENBQUNZLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7b0JBRXZDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7aURBQ1o7d0JBQ0xHLEtBQUssRUFBRSxFQUFFO3FCQUNWOzs7Ozs7S0FDRjtvQkFQWU4sb0JBQW9COzs7R0FPaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taHRtbC1saW5rLWZvci1wYWdlcyAqL1xuaW1wb3J0IHsgZ2V0QWNjZXNzVG9rZW4sIHVzZVVzZXIgfSBmcm9tIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XG4gICAgICA8cHJlPlxuICAgICAgICB7SlNPTi5zdHJpbmdpZnkodXNlciwgbnVsbCwgMil9XG4gICAgICA8L3ByZT5cbiAgICAgIDxhIGhyZWY9XCIvYXBpL2F1dGgvbG9naW5cIj5Mb2dpbjwvYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2Vydml2ZXJTaWRlUHJvcHM6IEdldFNlcnZpdmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xuICBjb25zdCB0b2tlbiA9IGdldEFjY2Vzc1Rva2VuKHJlcSwgcmVzKTtcblxuICBjb25zb2xlLmxvZyh0b2tlbik7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9LFxuICB9XG59Il0sIm5hbWVzIjpbImdldEFjY2Vzc1Rva2VuIiwidXNlVXNlciIsIkhvbWUiLCJ1c2VyIiwiZGl2IiwiaDEiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwiYSIsImhyZWYiLCJnZXRTZXJ2aXZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsInRva2VuIiwiY29uc29sZSIsImxvZyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});