"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_pages_category_index_js"],{

/***/ "./resources/js/admin/pages/category/index.js":
/*!****************************************************!*\
  !*** ./resources/js/admin/pages/category/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/EditFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/DeleteFilled.js");
/* harmony import */ var _components_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/breadcrumbs */ "./resources/js/admin/components/breadcrumbs.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/hook */ "./resources/js/lib/hook.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/calendar */ "./resources/js/admin/components/calendar.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _require = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js"),
    Button = _require.Button,
    Table = _require.Table,
    Popconfirm = _require.Popconfirm,
    message = _require.message,
    Input = _require.Input,
    Space = _require.Space;













var _ref =  false ? 0 : {
  name: "axecv8-CategoryPage",
  styles: "color:red;label:CategoryPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc1xcZG9hblxccGhwLXByb2plY3RcXHBocF9FTF9NQU5BR0VcXHJlc291cmNlc1xcanNcXGFkbWluXFxwYWdlc1xcY2F0ZWdvcnlcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtKd0QiLCJmaWxlIjoiRDpcXHdvcmtzXFxkb2FuXFxwaHAtcHJvamVjdFxccGhwX0VMX01BTkFHRVxccmVzb3VyY2VzXFxqc1xcYWRtaW5cXHBhZ2VzXFxjYXRlZ29yeVxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IEJ1dHRvbiwgVGFibGUsIFBvcGNvbmZpcm0sIG1lc3NhZ2UsIElucHV0LCBTcGFjZSB9ID0gcmVxdWlyZShcImFudGRcIik7XG5pbXBvcnQgeyBEZWxldGVGaWxsZWQsIEVkaXRGaWxsZWQsIENvcHlPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnNcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQsIHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9ob29rXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYWxlbmRhclwiO1xuXG5jb25zdCBDYXRlZ29yeVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpc2xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGRlYm91bmNlZFNlYXJjaFF1ZXJ5ID0gdXNlRGVib3VuY2Uoc2VhcmNoLCA2MDApO1xuXG4gICAgY29uc3QgW3BhZ2luYXRpb24sIHNldFBhZ2luYXRpb25dID0gdXNlU3RhdGUoe1xuICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICBwYWdlU2l6ZTogNSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2FkbWluL2NhdGVnb3J5L1wiLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiBwYWdpbmF0aW9uLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBkZWJvdW5jZWRTZWFyY2hRdWVyeSxcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiBzdGFydERhdGUgPyBzdGFydERhdGUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGVuZF9kYXRlOiBlbmREYXRlID8gZW5kRGF0ZSA6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0UGFnaW5hdGlvbih7XG4gICAgICAgICAgICAuLi5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgdG90YWw6IGRhdGEudG90YWwsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXREYXRhKGRhdGEuZGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9LCBbcGFnaW5hdGlvbi5jdXJyZW50LCBkZWJvdW5jZWRTZWFyY2hRdWVyeSwgc3RhcnREYXRlLCBlbmREYXRlXSk7XG5cbiAgICBjb25zdCBoYW5kbGVUYWJsZUNoYW5nZSA9IChwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIpID0+IHtcbiAgICAgICAgc2V0UGFnaW5hdGlvbihwYWdpbmF0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2FkbWluL2NhdGVnb3J5L1wiICsgaWQpO1xuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpO1xuICAgICAgICAgICAgc2V0RGF0YShuZXdEYXRhKTtcbiAgICAgICAgICAgIHNldFBhZ2luYXRpb24oe1xuICAgICAgICAgICAgICAgIC4uLnBhZ2luYXRpb24sXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld0RhdGEubGVuZ3RoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJYb8OhIGRhbmggbeG7pWMgdGjDoG5oIGPDtG5nXCIpO1xuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoXCJjYXRlZ29yeVwiKTtcbiAgICAgICAgfSBjYXRjaCAoeyByZXNwb25zZSB9KSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIgaXRlbXM9e1tcIkRhbmggbeG7pWNcIl19PlxuICAgICAgICAgICAgICAgIDxTcGFjZT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvYWRtaW4vY2F0ZWdvcnkvbmV3XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRow6ptIGRhbmggbeG7pWNcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUw6xtIGtp4bq/bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRTdGFydERhdGUoZGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbmREYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0RW5kRGF0ZShkYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMjQsIG1pbkhlaWdodDogMzYwIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17KCkgPT4gYFThu5VuZyBz4buRIGRhbmggbeG7pWMgJHtwYWdpbmF0aW9uLnRvdGFsfWB9XG4gICAgICAgICAgICAgICAgICAgIHJvd0tleT17KHJlY29yZCkgPT4gcmVjb3JkLmlkfVxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFibGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTVFRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQsIGluZGV4KSA9PiBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlTDqm4gZGFuaCBt4bulY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5nw6B5IHThuqFvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChyZWNvcmQuY3JlYXRlZF9hdCkuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkREL01NL1lZWVksIGhoOm1tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvYWRtaW4vY2F0ZWdvcnkvJHtyZWNvcmQuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0RmlsbGVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWMOhYyBuaOG6rW4geG/DoVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShyZWNvcmQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGaWxsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UGFnZTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var CategoryPage = function CategoryPage() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      startDate = _useState4[0],
      setStartDate = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      endDate = _useState6[0],
      setEndDate = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isloading = _useState10[0],
      setIsLoading = _useState10[1];

  var debouncedSearchQuery = (0,_lib_hook__WEBPACK_IMPORTED_MODULE_4__.useDebounce)(search, 600);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    current: 1,
    pageSize: 5,
    total: 0
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      pagination = _useState12[0],
      setPagination = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            _context.next = 3;
            return axios.get("/api/admin/category/", {
              params: {
                page: pagination.current,
                pageSize: pagination.pageSize,
                search: debouncedSearchQuery,
                start_date: startDate ? startDate : null,
                end_date: endDate ? endDate : null
              }
            });

          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
              total: data.total
            }));
            setData(data.data);
            setIsLoading(false);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [pagination.current, debouncedSearchQuery, startDate, endDate]);

  var handleTableChange = function handleTableChange(pagination, filters, sorter) {
    setPagination(pagination);
  };

  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var newData, response, _data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios["delete"]("/api/admin/category/" + id);

            case 3:
              newData = data.filter(function (item) {
                return item.id !== id;
              });
              setData(newData);
              setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
                total: newData.length
              }));
              message.success("Xoá danh mục thành công");
              queryClient.invalidateQueries("category");
              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              response = _context2.t0.response;
              _data = response.data;
              message.error(_data.error);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function handleDelete(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: ["Danh mục"]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Space, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Button, {
    onClick: function onClick() {
      return navigate("/admin/category/new");
    },
    className: "ml-auto",
    type: "primary"
  }, "Th\xEAm danh m\u1EE5c"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Input, {
    placeholder: "T\xECm ki\u1EBFm",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_calendar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "startDate",
    onChange: function onChange(date) {
      return setStartDate(date);
    },
    placeholder: "Start date"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_calendar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "endDate",
    onChange: function onChange(date) {
      return setEndDate(date);
    },
    placeholder: "End date"
  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "site-layout-background",
    style: {
      padding: 24,
      minHeight: 360
    }
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Table, {
    footer: function footer() {
      return "T\u1ED5ng s\u1ED1 danh m\u1EE5c ".concat(pagination.total);
    },
    rowKey: function rowKey(record) {
      return record.id;
    },
    pagination: pagination,
    onChange: handleTableChange,
    columns: [{
      title: "STT",
      render: function render(text, record, index) {
        return index + 1;
      }
    }, {
      title: "Tên danh mục",
      dataIndex: "name"
    }, {
      title: "Ngày tạo",
      render: function render(text, record, index) {
        return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", null, moment__WEBPACK_IMPORTED_MODULE_5___default()(record.created_at).format("DD/MM/YYYY, hh:mm"));
      }
    }, {
      width: 100,
      render: function render(text, record, index) {
        return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          key: index
        }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
          className: "mr-2",
          to: "/admin/category/".concat(record.id)
        }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], null)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Popconfirm, {
          title: "X\xE1c nh\u1EADn xo\xE1",
          onConfirm: function onConfirm() {
            return handleDelete(record.id);
          }
        }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
          css: _ref
        })));
      }
    }],
    dataSource: data,
    loading: isloading
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPage);

/***/ })

}]);