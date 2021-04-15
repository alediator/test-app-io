(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videocall-videocall-module"],{

/***/ "1y/0":
/*!********************************************************!*\
  !*** ./src/app/pages/videocall/videocall.component.ts ***!
  \********************************************************/
/*! exports provided: VideoCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallComponent", function() { return VideoCallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var uuid_dist_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/dist/v4 */ "63qc");
/* harmony import */ var uuid_dist_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_dist_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/divider */ "lUkA");









class VideoCallComponent {
    constructor(router, route, fb) {
        this.router = router;
        this.route = route;
        this.fb = fb;
    }
    ngOnInit() {
        console.log('ngOnInit');
        this.joincallFormGroup = this.fb.group({
            codeInput: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        if (this.route.snapshot.params.id !== '') {
            this.code = this.route.snapshot.params.id;
            this.codeInput = this.code;
        }
    }
    /**
     * Create a new videochat room
     */
    createRoom() {
        console.log('createRoom');
        this.router.navigate([`/video-call/${uuid_dist_v4__WEBPACK_IMPORTED_MODULE_2___default()()}`]);
    }
    /**
     * Join a videochat room
     */
    joinRoom() {
        console.log('joinRoom');
        if (this.joincallFormGroup.valid) {
            console.log(this.code);
            if (this.code) {
            }
        }
    }
}
VideoCallComponent.ɵfac = function VideoCallComponent_Factory(t) { return new (t || VideoCallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
VideoCallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoCallComponent, selectors: [["back-office-videocall"]], decls: 18, vars: 0, consts: [[1, "section-header"], ["styleClass", "p-card-shadow videocall-card", "id", "start"], [1, "p-grid"], [1, "p-col-5", "p-d-flex", "p-ai-center", "p-jc-center"], [1, "videocall-card-button-container"], [1, "pi", "pi-video", "videocall-card-icon"], ["styleClass", "", "label", "Open room", "type", "submit", "id", "start-button", 3, "click"], [1, "p-col-2"], ["layout", "vertical"], [1, "pi", "pi-users", "videocall-card-icon"], ["styleClass", "", "label", "Join in a room", "type", "submit", "id", "start-button", 3, "click"]], template: function VideoCallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Videochat tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start a new call or join an existing room!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCallComponent_Template_p_button_click_9_listener() { return ctx.createRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCallComponent_Template_p_button_click_17_listener() { return ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_4__["Card"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"], primeng_divider__WEBPACK_IMPORTED_MODULE_6__["Divider"]], styles: [".videocall-card-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.videocall-card-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  padding: 10px;\n}\n[_nghost-%COMP%]     .videocall-card a, [_nghost-%COMP%]     .videocall-card a:visited {\n  text-decoration: none;\n  color: #000000;\n  text-underline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW9jYWxsL3ZpZGVvY2FsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBRE47QUFPRTs7RUFFRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlkZW9jYWxsL3ZpZGVvY2FsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlb2NhbGwge1xuICAmLWNhcmQge1xuICAgICYtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICYtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCB7XG4gIDo6bmctZGVlcCAudmlkZW9jYWxsLWNhcmQgYSxcbiAgOjpuZy1kZWVwIC52aWRlb2NhbGwtY2FyZCBhOnZpc2l0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LXVuZGVybGluZTogbm9uZTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-videocall',
                templateUrl: './videocall.component.html',
                styleUrls: ['./videocall.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "63qc":
/*!**************************************!*\
  !*** ./node_modules/uuid/dist/v4.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "nCpy"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! ./stringify.js */ "RaQl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports.default = _default;

/***/ }),

/***/ "8xxr":
/*!*****************************************!*\
  !*** ./node_modules/uuid/dist/regex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;

/***/ }),

/***/ "RQ59":
/*!********************************************!*\
  !*** ./node_modules/uuid/dist/validate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = _interopRequireDefault(__webpack_require__(/*! ./regex.js */ "8xxr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports.default = _default;

/***/ }),

/***/ "RaQl":
/*!*********************************************!*\
  !*** ./node_modules/uuid/dist/stringify.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "RQ59"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports.default = _default;

/***/ }),

/***/ "iy7I":
/*!*****************************************************!*\
  !*** ./src/app/pages/videocall/videocall.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoCallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallModule", function() { return VideoCallModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _videocall_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videocall-routing.module */ "nGW3");
/* harmony import */ var _videocall_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videocall.component */ "1y/0");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/components.module */ "qxEu");








class VideoCallModule {
}
VideoCallModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoCallModule });
VideoCallModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoCallModule_Factory(t) { return new (t || VideoCallModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _videocall_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoCallRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _core_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoCallModule, { declarations: [_videocall_component__WEBPACK_IMPORTED_MODULE_4__["VideoCallComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _videocall_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoCallRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _core_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCallModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_videocall_component__WEBPACK_IMPORTED_MODULE_4__["VideoCallComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _videocall_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoCallRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _core_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nCpy":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/rng-browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "nGW3":
/*!*************************************************************!*\
  !*** ./src/app/pages/videocall/videocall-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VideoCallRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallRoutingModule", function() { return VideoCallRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _videocall_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videocall.component */ "1y/0");





const routes = [{ path: '', component: _videocall_component__WEBPACK_IMPORTED_MODULE_2__["VideoCallComponent"] }];
class VideoCallRoutingModule {
}
VideoCallRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoCallRoutingModule });
VideoCallRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoCallRoutingModule_Factory(t) { return new (t || VideoCallRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoCallRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCallRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=videocall-videocall-module.js.map