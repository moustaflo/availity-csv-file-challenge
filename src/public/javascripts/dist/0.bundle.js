(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/views/Pages/pitchdeckpage.jsx":
/*!*******************************************!*\
  !*** ./src/views/Pages/pitchdeckpage.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Parts_pitchupload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Parts/pitchupload.jsx */ "./src/views/Parts/pitchupload.jsx");
/* harmony import */ var _Parts_uploadbutton_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Parts/uploadbutton.jsx */ "./src/views/Parts/uploadbutton.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Welcome = /*#__PURE__*/function (_Component) {
  _inherits(Welcome, _Component);

  var _super = _createSuper(Welcome);

  function Welcome(props) {
    var _this;

    _classCallCheck(this, Welcome);

    _this = _super.call(this, props);

    _this.fileTypeCheck = function () {
      var fileToCheck = _this.state.uploadedFile; // Accepted file types

      var fileTypes = ['text/csv'];
      if (fileTypes.every(function (type) {
        return fileToCheck.type !== type;
      })) return false;
      return true;
    };

    _this.onUploadPitch = function (userInput) {
      _this.setState({
        uploadedFile: userInput
      });
    };

    _this.onClickHandler = function () {
      if (_this.fileTypeCheck()) {
        var fileData = new FormData();
        fileData.append('file', _this.state.uploadedFile);

        _this.setState({
          uploadResponse: 'Uploading...',
          uploadResponseColor: 'black'
        });

        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/upload', fileData).then(function (response) {
          _this.setState({
            uploadResponse: response.data.uploadResponse,
            uploadResponseColor: 'green',
            images: response.data.images
          });
        })["catch"](function (error) {
          _this.setState({
            uploadResponse: error,
            uploadResponseColor: 'red'
          });
        });
      } else {
        _this.setState({
          uploadResponse: 'the file extension for ' + _this.state.uploadedFile['name'] + ' is not accepted at this time',
          uploadResponseColor: 'red'
        });
      }
    };

    _this.state = {
      uploadedFile: '',
      uploadResponse: '',
      uploadResponseColor: '',
      images: []
    };
    return _this;
  }

  _createClass(Welcome, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        style: {
          background: 'white',
          color: this.state.uploadResponseColor
        }
      }, this.state.uploadResponse), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_pitchupload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onUploadPitch: this.onUploadPitch
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_uploadbutton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClickHandler: this.onClickHandler,
        uploadResponse: this.state.uploadResponse,
        uploadedFile: this.state.uploadedFile,
        companyName: this.state.companyName,
        companyMotto: this.props.companyMotto
      }));
    }
  }]);

  return Welcome;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ "./src/views/Parts/pitchupload.jsx":
/*!*****************************************!*\
  !*** ./src/views/Parts/pitchupload.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PitchUpload = /*#__PURE__*/function (_Component) {
  _inherits(PitchUpload, _Component);

  var _super = _createSuper(PitchUpload);

  function PitchUpload(props) {
    _classCallCheck(this, PitchUpload);

    return _super.call(this, props);
  }

  _createClass(PitchUpload, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        name: "csv",
        onChange: function onChange(Event) {
          return _this.props.onUploadPitch(Event.target.files[0]);
        }
      }));
    }
  }]);

  return PitchUpload;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PitchUpload);

/***/ }),

/***/ "./src/views/Parts/uploadbutton.jsx":
/*!******************************************!*\
  !*** ./src/views/Parts/uploadbutton.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var UploadButton = /*#__PURE__*/function (_Component) {
  _inherits(UploadButton, _Component);

  var _super = _createSuper(UploadButton);

  function UploadButton(props) {
    _classCallCheck(this, UploadButton);

    return _super.call(this, props);
  }

  _createClass(UploadButton, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        disabled: this.props.uploadResponse === 'Uploading...' || this.props.uploadedFile === '' ? true : false,
        onClick: function onClick() {
          return _this.props.onClickHandler();
        }
      }, 'Upload'));
    }
  }]);

  return UploadButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UploadButton);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUGFnZXMvcGl0Y2hkZWNrcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1BhcnRzL3BpdGNodXBsb2FkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUGFydHMvdXBsb2FkYnV0dG9uLmpzeCJdLCJuYW1lcyI6WyJXZWxjb21lIiwicHJvcHMiLCJmaWxlVHlwZUNoZWNrIiwiZmlsZVRvQ2hlY2siLCJzdGF0ZSIsInVwbG9hZGVkRmlsZSIsImZpbGVUeXBlcyIsImV2ZXJ5IiwidHlwZSIsIm9uVXBsb2FkUGl0Y2giLCJ1c2VySW5wdXQiLCJzZXRTdGF0ZSIsIm9uQ2xpY2tIYW5kbGVyIiwiZmlsZURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVwbG9hZFJlc3BvbnNlIiwidXBsb2FkUmVzcG9uc2VDb2xvciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJpbWFnZXMiLCJlcnJvciIsInRleHRBbGlnbiIsImJhY2tncm91bmQiLCJjb2xvciIsImNvbXBhbnlOYW1lIiwiY29tcGFueU1vdHRvIiwiQ29tcG9uZW50IiwiUGl0Y2hVcGxvYWQiLCJFdmVudCIsInRhcmdldCIsImZpbGVzIiwiVXBsb2FkQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTzs7Ozs7QUFDSixtQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjs7QUFEa0IsVUFVcEJDLGFBVm9CLEdBVUosWUFBSztBQUNuQixVQUFJQyxXQUFXLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxZQUE3QixDQURtQixDQUVuQjs7QUFDQSxVQUFNQyxTQUFTLEdBQUcsQ0FBQyxVQUFELENBQWxCO0FBRUEsVUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCLFVBQUFDLElBQUk7QUFBQSxl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LENBQUMvQixLQUFMLENBQVdRLGFBQVgsQ0FBeUJ1QixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUF6QixDQUFYO0FBQUE7QUFBeEMsUUFERixDQURKO0FBS0Q7Ozs7RUFYdUJKLCtDOztBQWNYQywwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztJQUVNSSxZOzs7OztBQUNKLHdCQUFhbEMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDZCQUNaQSxLQURZO0FBRW5COzs7O1dBRUQsa0JBQVU7QUFBQTs7QUFDUiwwQkFDSSxxRkFDRTtBQUNBLFlBQUksRUFBQyxRQURMO0FBRUEsZ0JBQVEsRUFBRSxLQUFLQSxLQUFMLENBQVdlLGNBQVgsS0FBOEIsY0FBOUIsSUFBZ0QsS0FBS2YsS0FBTCxDQUFXSSxZQUFYLEtBQTRCLEVBQTVFLEdBQWdGLElBQWhGLEdBQXNGLEtBRmhHO0FBR0EsZUFBTyxFQUFFO0FBQUEsaUJBQU0sS0FBSSxDQUFDSixLQUFMLENBQVdXLGNBQVgsRUFBTjtBQUFBO0FBSFQsU0FHNkMsUUFIN0MsQ0FERixDQURKO0FBU0Q7Ozs7RUFmd0JrQiwrQzs7QUFrQlpLLDJFQUFmLEUiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQaXRjaFVwbG9hZCBmcm9tICcuLi9QYXJ0cy9waXRjaHVwbG9hZC5qc3gnO1xuaW1wb3J0IFVwbG9hZEJ1dHRvbiBmcm9tICcuLi9QYXJ0cy91cGxvYWRidXR0b24uanN4JztcblxuY2xhc3MgV2VsY29tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cGxvYWRlZEZpbGU6ICcnLFxuICAgICAgdXBsb2FkUmVzcG9uc2U6ICcnLFxuICAgICAgdXBsb2FkUmVzcG9uc2VDb2xvcjogJycsXG4gICAgICBpbWFnZXM6IFtdLFxuICAgIH1cbiAgfVxuXG4gIGZpbGVUeXBlQ2hlY2sgPSAoKT0+IHtcbiAgICBsZXQgZmlsZVRvQ2hlY2sgPSB0aGlzLnN0YXRlLnVwbG9hZGVkRmlsZSBcbiAgICAvLyBBY2NlcHRlZCBmaWxlIHR5cGVzXG4gICAgY29uc3QgZmlsZVR5cGVzID0gWyd0ZXh0L2NzdiddXG5cbiAgICBpZiAoZmlsZVR5cGVzLmV2ZXJ5KHR5cGUgPT4gZmlsZVRvQ2hlY2sudHlwZSAhPT0gdHlwZSkpIHJldHVybiBmYWxzZVxuXG4gICAgcmV0dXJuIHRydWVcbiAgXG4gIH1cblxuICBvblVwbG9hZFBpdGNoID0gKHVzZXJJbnB1dCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBsb2FkZWRGaWxlOiB1c2VySW5wdXRcbiAgICB9KVxuICB9XG5cbiAgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmlsZVR5cGVDaGVjaygpKSB7XG4gICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICBmaWxlRGF0YS5hcHBlbmQoJ2ZpbGUnLCB0aGlzLnN0YXRlLnVwbG9hZGVkRmlsZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBsb2FkUmVzcG9uc2U6ICdVcGxvYWRpbmcuLi4nLFxuICAgICAgdXBsb2FkUmVzcG9uc2VDb2xvcjogJ2JsYWNrJ1xuICAgICAgfSlcbiAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdXBsb2FkJywgZmlsZURhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVwbG9hZFJlc3BvbnNlOiByZXNwb25zZS5kYXRhLnVwbG9hZFJlc3BvbnNlLFxuICAgICAgICAgIHVwbG9hZFJlc3BvbnNlQ29sb3I6ICdncmVlbicsXG4gICAgICAgICAgaW1hZ2VzOiByZXNwb25zZS5kYXRhLmltYWdlc1xuICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVwbG9hZFJlc3BvbnNlOiBlcnJvcixcbiAgICAgICAgICB1cGxvYWRSZXNwb25zZUNvbG9yOiAncmVkJ1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVwbG9hZFJlc3BvbnNlOiAndGhlIGZpbGUgZXh0ZW5zaW9uIGZvciAnICsgdGhpcy5zdGF0ZS51cGxvYWRlZEZpbGVbJ25hbWUnXSArICcgaXMgbm90IGFjY2VwdGVkIGF0IHRoaXMgdGltZScsXG4gICAgICAgIHVwbG9hZFJlc3BvbnNlQ29sb3I6ICdyZWQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgIDxoMiBzdHlsZT17e2JhY2tncm91bmQ6ICd3aGl0ZScsIGNvbG9yOiB0aGlzLnN0YXRlLnVwbG9hZFJlc3BvbnNlQ29sb3J9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS51cGxvYWRSZXNwb25zZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPFBpdGNoVXBsb2FkIG9uVXBsb2FkUGl0Y2g9e3RoaXMub25VcGxvYWRQaXRjaH0+PC9QaXRjaFVwbG9hZD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPFVwbG9hZEJ1dHRvbiBcbiAgICAgICAgb25DbGlja0hhbmRsZXI9e3RoaXMub25DbGlja0hhbmRsZXJ9IFxuICAgICAgICB1cGxvYWRSZXNwb25zZT17dGhpcy5zdGF0ZS51cGxvYWRSZXNwb25zZX0gXG4gICAgICAgIHVwbG9hZGVkRmlsZT17dGhpcy5zdGF0ZS51cGxvYWRlZEZpbGV9IFxuICAgICAgICBjb21wYW55TmFtZT17dGhpcy5zdGF0ZS5jb21wYW55TmFtZX0gXG4gICAgICAgIGNvbXBhbnlNb3R0bz17dGhpcy5wcm9wcy5jb21wYW55TW90dG99PlxuICAgICAgICA8L1VwbG9hZEJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFBpdGNoVXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIG5hbWU9J2Nzdicgb25DaGFuZ2U9eyhFdmVudCkgPT4gdGhpcy5wcm9wcy5vblVwbG9hZFBpdGNoKEV2ZW50LnRhcmdldC5maWxlc1swXSl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpdGNoVXBsb2FkIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBVcGxvYWRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIHR5cGU9J2J1dHRvbicgXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMudXBsb2FkUmVzcG9uc2UgPT09ICdVcGxvYWRpbmcuLi4nIHx8IHRoaXMucHJvcHMudXBsb2FkZWRGaWxlID09PSAnJz8gdHJ1ZTogZmFsc2V9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrSGFuZGxlcigpfT57J1VwbG9hZCd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9