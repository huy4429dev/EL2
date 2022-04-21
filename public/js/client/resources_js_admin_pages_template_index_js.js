"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_pages_template_index_js"],{

/***/ "./resources/js/admin/pages/template/index.js":
/*!****************************************************!*\
  !*** ./resources/js/admin/pages/template/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/table/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/popconfirm/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/EditFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/DeleteFilled.js");
/* harmony import */ var _components_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/breadcrumbs */ "./resources/js/admin/components/breadcrumbs.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











var _ref =  false ? 0 : {
  name: "hftogg-TemplatePage",
  styles: "width:100%;border:none;height:100vh;label:TemplatePage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc1xcZG9hblxccGhwLXByb2plY3RcXHBocF9FTF9NQU5BR0VcXHJlc291cmNlc1xcanNcXGFkbWluXFxwYWdlc1xcdGVtcGxhdGVcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFZ0MiLCJmaWxlIjoiRDpcXHdvcmtzXFxkb2FuXFxwaHAtcHJvamVjdFxccGhwX0VMX01BTkFHRVxccmVzb3VyY2VzXFxqc1xcYWRtaW5cXHBhZ2VzXFx0ZW1wbGF0ZVxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyLCBCdXR0b24sIFRhYmxlLCBQb3Bjb25maXJtLCBtZXNzYWdlLCBJbnB1dCwgRHJhd2VyLCBTcGFjZSB9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IHsgRGVsZXRlRmlsbGVkLCBFZGl0RmlsbGVkLCBDb3B5T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50LCB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcblxyXG5jb25zdCBUZW1wbGF0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShbJ3RlbXBsYXRlJ10sIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvYWRtaW4vdGVtcGxhdGVcIik7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2FkbWluL3RlbXBsYXRlL1wiICsgaWQpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJYb8OhIG3huqt1ZSBtYWlsIHRow6BuaCBjw7RuZ1wiKTtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoXCJ0ZW1wbGF0ZVwiKTtcclxuICAgICAgICB9IGNhdGNoICh7IHJlc3BvbnNlIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPEJyZWFkY3J1bWIgaXRlbXM9e1tcIk3huqt1IGVtYWlsXCJdfSA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvYWRtaW4vdGVtcGxhdGUvbmV3XCIpfSBjbGFzc05hbWU9XCJtbC1hdXRvXCIgdHlwZT1cInByaW1hcnlcIj5UaMOqbSBt4bqrdSBlbWFpbDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIiBzdHlsZT17eyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAzNjAgfX0+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLmlkfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJTVFRcIiwgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4gaW5kZXggKyAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogJ1TDqm4gY2hp4bq/biBk4buLY2gnLHJlbmRlcjoodGV4dCxyZWNvcmQsIGluZGV4KT0+IHJlY29yZC5uYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ByZXZpZXcnLCByZW5kZXI6ICh0ZXh0LCByZWNvcmQsIGluZGV4KSA9PiA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcmV2aWV3KHJlY29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5YZW0gdGjhu608L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCwgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibXItMlwiIHRvPXtgL2FkbWluL3RlbXBsYXRlLyR7cmVjb3JkLmlkfWB9ID48RWRpdEZpbGxlZCAvPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybSB0aXRsZT1cIljDoWMgbmjhuq1uIHhvw6FcIiBvbkNvbmZpcm09eygpID0+IGhhbmRsZURlbGV0ZShyZWNvcmQuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZpbGxlZCBjc3M9e2Nzc2Bjb2xvcjpyZWRgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJldmlldyAmJlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJldmlldy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UHJldmlldyhudWxsKX1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9eyEhcHJldmlld31cclxuICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0UHJldmlldyhudWxsKX0+xJDDs25nPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZSBjc3M9e2Nzc2B3aWR0aDoxMDAlO2JvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoYH0gc3JjRG9jPXtwcmV2aWV3Lmh0bWx9IC8+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlUGFnZTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "13gnlyn-TemplatePage",
  styles: "color:red;label:TemplatePage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc1xcZG9hblxccGhwLXByb2plY3RcXHBocF9FTF9NQU5BR0VcXHJlc291cmNlc1xcanNcXGFkbWluXFxwYWdlc1xcdGVtcGxhdGVcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EMEQiLCJmaWxlIjoiRDpcXHdvcmtzXFxkb2FuXFxwaHAtcHJvamVjdFxccGhwX0VMX01BTkFHRVxccmVzb3VyY2VzXFxqc1xcYWRtaW5cXHBhZ2VzXFx0ZW1wbGF0ZVxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyLCBCdXR0b24sIFRhYmxlLCBQb3Bjb25maXJtLCBtZXNzYWdlLCBJbnB1dCwgRHJhd2VyLCBTcGFjZSB9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IHsgRGVsZXRlRmlsbGVkLCBFZGl0RmlsbGVkLCBDb3B5T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50LCB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcblxyXG5jb25zdCBUZW1wbGF0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShbJ3RlbXBsYXRlJ10sIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvYWRtaW4vdGVtcGxhdGVcIik7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2FkbWluL3RlbXBsYXRlL1wiICsgaWQpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJYb8OhIG3huqt1ZSBtYWlsIHRow6BuaCBjw7RuZ1wiKTtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoXCJ0ZW1wbGF0ZVwiKTtcclxuICAgICAgICB9IGNhdGNoICh7IHJlc3BvbnNlIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPEJyZWFkY3J1bWIgaXRlbXM9e1tcIk3huqt1IGVtYWlsXCJdfSA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvYWRtaW4vdGVtcGxhdGUvbmV3XCIpfSBjbGFzc05hbWU9XCJtbC1hdXRvXCIgdHlwZT1cInByaW1hcnlcIj5UaMOqbSBt4bqrdSBlbWFpbDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIiBzdHlsZT17eyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAzNjAgfX0+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLmlkfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJTVFRcIiwgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4gaW5kZXggKyAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogJ1TDqm4gY2hp4bq/biBk4buLY2gnLHJlbmRlcjoodGV4dCxyZWNvcmQsIGluZGV4KT0+IHJlY29yZC5uYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ByZXZpZXcnLCByZW5kZXI6ICh0ZXh0LCByZWNvcmQsIGluZGV4KSA9PiA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcmV2aWV3KHJlY29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5YZW0gdGjhu608L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCwgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibXItMlwiIHRvPXtgL2FkbWluL3RlbXBsYXRlLyR7cmVjb3JkLmlkfWB9ID48RWRpdEZpbGxlZCAvPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybSB0aXRsZT1cIljDoWMgbmjhuq1uIHhvw6FcIiBvbkNvbmZpcm09eygpID0+IGhhbmRsZURlbGV0ZShyZWNvcmQuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZpbGxlZCBjc3M9e2Nzc2Bjb2xvcjpyZWRgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJldmlldyAmJlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJldmlldy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UHJldmlldyhudWxsKX1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9eyEhcHJldmlld31cclxuICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0UHJldmlldyhudWxsKX0+xJDDs25nPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZSBjc3M9e2Nzc2B3aWR0aDoxMDAlO2JvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoYH0gc3JjRG9jPXtwcmV2aWV3Lmh0bWx9IC8+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlUGFnZTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var TemplatePage = function TemplatePage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      preview = _useState2[0],
      setPreview = _useState2[1];

  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();

  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(['template'], /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get("/api/admin/template");

          case 2:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))),
      isLoading = _useQuery.isLoading,
      data = _useQuery.data;

  var handleDelete = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response, _data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios["delete"]("/api/admin/template/" + id);

            case 3:
              antd__WEBPACK_IMPORTED_MODULE_5__["default"].success("Xoá mẫue mail thành công");
              queryClient.invalidateQueries("template");
              _context2.next = 12;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              response = _context2.t0.response;
              _data = response.data;
              antd__WEBPACK_IMPORTED_MODULE_5__["default"].error(_data.error);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function handleDelete(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: ["Mẫu email"]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return navigate("/admin/template/new");
    },
    className: "ml-auto",
    type: "primary"
  }, "Th\xEAm m\u1EABu email")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "site-layout-background",
    style: {
      padding: 24,
      minHeight: 360
    }
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    rowKey: function rowKey(record) {
      return record.id;
    },
    loading: isLoading,
    pagination: false,
    columns: [{
      title: "STT",
      render: function render(text, record, index) {
        return index + 1;
      }
    }, {
      title: 'Tên chiến dịch',
      render: function render(text, record, index) {
        return record.name;
      }
    }, {
      title: 'Preview',
      render: function render(text, record, index) {
        return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onClick: function onClick() {
            return setPreview(record);
          }
        }, "Xem th\u1EED");
      }
    }, {
      width: 100,
      render: function render(text, record, index) {
        return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          key: index
        }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
          className: "mr-2",
          to: "/admin/template/".concat(record.id)
        }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], null)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
          title: "X\xE1c nh\u1EADn xo\xE1",
          onConfirm: function onConfirm() {
            return handleDelete(record.id);
          }
        }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["default"], {
          css: _ref2
        })));
      }
    }],
    dataSource: data
  })), preview && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: preview.name,
    placement: "right",
    size: "large",
    onClose: function onClose() {
      return setPreview(null);
    },
    visible: !!preview,
    extra: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_14__["default"], null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return setPreview(null);
      }
    }, "\u0110\xF3ng"))
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("iframe", {
    css: _ref,
    srcDoc: preview.html
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplatePage);

/***/ })

}]);