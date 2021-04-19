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
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_core_components_room_config_form_room_config_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/components/room-config-form/room-config-form.component */ "5Eit");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/divider */ "lUkA");












class VideoCallComponent {
    constructor(router, route, fb, dialogService) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.dialogService = dialogService;
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
     * Configure a new videochat room
     */
    showRoomConfiguration(mode) {
        console.log('showRoomConfiguration');
        this.ref = this.dialogService.open(src_app_core_components_room_config_form_room_config_form_component__WEBPACK_IMPORTED_MODULE_4__["RoomConfigFormComponent"], {
            data: {
                mode
            },
            header: mode === 'create' ? 'Create room' : 'Join room',
            width: '35%'
        });
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
VideoCallComponent.ɵfac = function VideoCallComponent_Factory(t) { return new (t || VideoCallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"])); };
VideoCallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoCallComponent, selectors: [["back-office-videocall"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])], decls: 20, vars: 0, consts: [[1, "section-header"], ["styleClass", "p-card-shadow videocall-card", "id", "start"], [1, "p-grid"], [1, "p-col-5", "p-d-flex", "p-ai-center", "p-jc-center"], [1, "videocall-card-button-container"], [1, "pi", "pi-video", "videocall-card-icon"], ["styleClass", "", "label", "Create room", "type", "submit", "id", "start-button", 3, "click"], [1, "p-col-2"], ["layout", "vertical"], [1, "pi", "pi-users", "videocall-card-icon"], ["styleClass", "", "label", "Join room", "type", "submit", "id", "start-button", 3, "click"]], template: function VideoCallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Videochat tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is the Aareon video chat tool!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You can use our video chat tool within the portal and you can contact your colleagues and field workers quickly. Try it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCallComponent_Template_p_button_click_11_listener() { return ctx.showRoomConfiguration("create"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCallComponent_Template_p_button_click_19_listener() { return ctx.showRoomConfiguration("join"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_6__["Card"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"], primeng_divider__WEBPACK_IMPORTED_MODULE_8__["Divider"]], styles: [".videocall-card-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.videocall-card-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  padding: 10px;\n}\n[_nghost-%COMP%]     .videocall-card a, [_nghost-%COMP%]     .videocall-card a:visited {\n  text-decoration: none;\n  color: #000000;\n  text-underline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW9jYWxsL3ZpZGVvY2FsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBRE47QUFPRTs7RUFFRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlkZW9jYWxsL3ZpZGVvY2FsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlb2NhbGwge1xuICAmLWNhcmQge1xuICAgICYtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICYtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCB7XG4gIDo6bmctZGVlcCAudmlkZW9jYWxsLWNhcmQgYSxcbiAgOjpuZy1kZWVwIC52aWRlb2NhbGwtY2FyZCBhOnZpc2l0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LXVuZGVybGluZTogbm9uZTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-videocall',
                templateUrl: './videocall.component.html',
                styleUrls: ['./videocall.component.scss'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }]; }, null); })();


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