(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overview-overview-module"],{

/***/ "4FS9":
/*!***********************************************************!*\
  !*** ./src/app/pages/overview/overview-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OverviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewRoutingModule", function() { return OverviewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.component */ "zds7");





const routes = [{ path: '', component: _overview_component__WEBPACK_IMPORTED_MODULE_2__["OverviewComponent"] }];
class OverviewRoutingModule {
}
OverviewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OverviewRoutingModule });
OverviewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OverviewRoutingModule_Factory(t) { return new (t || OverviewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OverviewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "QW0Q":
/*!***************************************************!*\
  !*** ./src/app/pages/overview/overview.module.ts ***!
  \***************************************************/
/*! exports provided: OverviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewModule", function() { return OverviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _overview_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview-routing.module */ "4FS9");
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.component */ "zds7");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");






class OverviewModule {
}
OverviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OverviewModule });
OverviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OverviewModule_Factory(t) { return new (t || OverviewModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["OverviewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OverviewModule, { declarations: [_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["OverviewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["OverviewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zds7":
/*!******************************************************!*\
  !*** ./src/app/pages/overview/overview.component.ts ***!
  \******************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class OverviewComponent {
    constructor() { }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["back-office-overview"]], decls: 14, vars: 0, consts: [[1, "section-header"], ["styleClass", "p-card-shadow overview-card"], [1, "p-grid"], [1, "p-col-2", "center"], [1, "pi", "pi-users", "overview-card-icon"], [1, "p-col-10"], ["routerLink", "/user-management", "routerLinkActive", "active"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Backoffice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome to backoffice website!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Create and edit your users here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_1__["Card"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".overview-card-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  padding: 10px;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n[_nghost-%COMP%]     .overview-card a, [_nghost-%COMP%]     .overview-card a:visited {\n  text-decoration: none;\n  color: #000000;\n  text-underline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFHRTs7RUFFRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcnZpZXctY2FyZC1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCB7XG4gIDo6bmctZGVlcCAub3ZlcnZpZXctY2FyZCBhLFxuICA6Om5nLWRlZXAgLm92ZXJ2aWV3LWNhcmQgYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC11bmRlcmxpbmU6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-overview',
                templateUrl: './overview.component.html',
                styleUrls: ['./overview.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=overview-overview-module.js.map