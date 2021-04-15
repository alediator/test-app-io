(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-management-user-management-module"],{

/***/ "EVeu":
/*!*************************************************************************!*\
  !*** ./src/app/pages/user-management/user-management-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component */ "w8Zw");





const routes = [{ path: '', component: _user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"] }];
class UserManagementRoutingModule {
}
UserManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagementRoutingModule });
UserManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagementRoutingModule_Factory(t) { return new (t || UserManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "W+7R":
/*!***************************************************************************************!*\
  !*** ./src/app/core/components/user-management-table/user-management-table.module.ts ***!
  \***************************************************************************************/
/*! exports provided: UserManagementTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementTableModule", function() { return UserManagementTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");






class UserManagementTableModule {
}
UserManagementTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagementTableModule });
UserManagementTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagementTableModule_Factory(t) { return new (t || UserManagementTableModule)(); }, providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementTableModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "hLrj":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management-routing.module */ "EVeu");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management.component */ "w8Zw");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/components.module */ "qxEu");
/* harmony import */ var _core_components_user_management_table_user_management_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/user-management-table/user-management-table.module */ "W+7R");







class UserManagementModule {
}
UserManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagementModule });
UserManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagementModule_Factory(t) { return new (t || UserManagementModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _core_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _core_components_user_management_table_user_management_table_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementTableModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementModule, { declarations: [_user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _core_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _core_components_user_management_table_user_management_table_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _core_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _core_components_user_management_table_user_management_table_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementTableModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "w8Zw":
/*!********************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_user_management_table_user_management_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/user-management-table/user-management-table.component */ "HhCs");



class UserManagementComponent {
}
UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) { return new (t || UserManagementComponent)(); };
UserManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserManagementComponent, selectors: [["back-office-user-management"]], decls: 1, vars: 0, template: function UserManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "back-office-user-management-table");
    } }, directives: [_core_components_user_management_table_user_management_table_component__WEBPACK_IMPORTED_MODULE_1__["UserManagementTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-user-management',
                templateUrl: './user-management.component.html',
                styleUrls: ['./user-management.component.scss'],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=user-management-user-management-module.js.map