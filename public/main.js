(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+G7O":
/*!**************************************************************************!*\
  !*** ./src/app/core/interceptors/auth-header/auth-header.interceptor.ts ***!
  \**************************************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _auth_header_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-header.constants */ "dgaP");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "RL7/");





class AuthHeaderInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const token = this.authService.getCredentials().accessToken;
        if (!token) {
            return next.handle(request);
        }
        const requestWithHeaders = request.clone({
            headers: request.headers.set(_auth_header_constants__WEBPACK_IMPORTED_MODULE_2__["AuthHeaderConstants"].HEADERS.AUTHORIZATION, `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].token_prefix}${token}`),
        });
        return next.handle(requestWithHeaders);
    }
}
AuthHeaderInterceptor.ɵfac = function AuthHeaderInterceptor_Factory(t) { return new (t || AuthHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthHeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthHeaderInterceptor, factory: AuthHeaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHeaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "/wR0":
/*!********************************************************************!*\
  !*** ./src/app/core/components/login-form/login-form.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _login_form_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form.constants */ "e2fb");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-status-codes */ "FLyn");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/auth.service */ "RL7/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");















function LoginFormComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.loginFormConstants.ERRORS.USERNAME_REQUIRED, " ");
} }
function LoginFormComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.loginFormConstants.ERRORS.USERNAME_EMAIL, " ");
} }
function LoginFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.loginFormConstants.ERRORS.PASSWORD_REQUIRED, " ");
} }
class LoginFormComponent {
    constructor(authService, router, fb, messageService) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.messageService = messageService;
        this.showPassword = false;
        this.formSubmitted = false;
        this.loginButtonDisabled = false;
        this.loginButtonIcon = '';
        this.loginFormConstants = _login_form_constants__WEBPACK_IMPORTED_MODULE_3__["LoginFormConstants"];
    }
    ngOnInit() {
        this.loginFormGroup = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    /**
     * Toggle password visibility
     */
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
    /**
     * Submit the login form
     */
    submitLogin() {
        this.formSubmitted = true;
        this.messageService.clear();
        const self = this;
        if (this.loginFormGroup.valid) {
            this.loginButtonDisabled = true;
            this.loginButtonIcon = 'pi pi-spin pi-spinner';
            this.authService.signIn(this.loginFormGroup.value).subscribe({
                next(data) {
                    self.authService.storeCredential(data);
                    self.router.navigateByUrl('/overview');
                },
                error(err) {
                    self.messageService.add({
                        severity: 'error',
                        detail: err.status === http_status_codes__WEBPACK_IMPORTED_MODULE_4__["StatusCodes"].BAD_REQUEST
                            ? _login_form_constants__WEBPACK_IMPORTED_MODULE_3__["LoginFormConstants"].ERRORS.INVALID_CREDENTIALS
                            : _login_form_constants__WEBPACK_IMPORTED_MODULE_3__["LoginFormConstants"].ERRORS.SERVER
                    });
                    self.loginButtonDisabled = false;
                    self.loginButtonIcon = '';
                }
            });
        }
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["back-office-login-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], decls: 20, vars: 14, consts: [["id", "login-card", "styleClass", "login-card"], [1, "p-col-12"], ["id", "back-office-title"], ["id", "login-form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["loginForm", "ngForm"], [3, "value", "valueChange"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12"], ["formControlName", "username", "id", "username", "pInputText", "", "type", "text", 1, "input-padding", 3, "placeholder"], ["class", "p-invalid", 4, "ngIf"], ["for", "password"], [1, "p-input-icon-right"], [3, "click"], ["formControlName", "password", "id", "password", "pInputText", "", 1, "input-padding", 3, "type", "placeholder"], ["styleClass", "login-button", "type", "submit", "iconPos", "right", 1, "p-offset-2", "p-col-8", 3, "disabled", "label", "icon"], [1, "p-invalid"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_4_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-messages", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LoginFormComponent_Template_p_messages_valueChange_7_listener($event) { return ctx.messages = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginFormComponent_small_11_Template, 2, 1, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginFormComponent_small_12_Template, 2, 1, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_Template_i_click_16_listener() { return ctx.togglePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginFormComponent_small_18_Template, 2, 1, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loginFormConstants.LABELS.BACKOFFICE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.loginFormConstants.LABELS.USERNAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.loginFormGroup.controls.username.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.loginFormGroup.controls.username.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.showPassword ? "pi pi-eye-slash hover-pointer" : "pi pi-eye hover-pointer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.loginFormConstants.LABELS.PASSWORD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.loginFormGroup.controls.password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx.loginFormConstants.LABELS.LOGIN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginButtonDisabled)("icon", ctx.loginButtonIcon);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_7__["Card"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_messages__WEBPACK_IMPORTED_MODULE_8__["Messages"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["Button"]], styles: [".p-formgrid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\nform[_ngcontent-%COMP%]   .pi-eye[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .pi-eye-slash[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n#back-office-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 25px;\n  text-align: center;\n  font-weight: 400;\n  font-size: 2.3em;\n}\n[_nghost-%COMP%]     .login-card {\n  background-color: rgba(39, 48, 60, 0.9);\n  color: #FFFFFF;\n  padding: 10px 0 25px 0;\n}\n[_nghost-%COMP%]     .login-button {\n  margin-top: 40px;\n  background-color: #005B70;\n}\n[_nghost-%COMP%]     .login-button:hover, [_nghost-%COMP%]     .login-button:focus {\n  background-color: rgba(0, 91, 112, 0.92);\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .login-card {\n    box-shadow: none;\n  }\n\n  [_nghost-%COMP%]     .login-card {\n    z-index: -10;\n    height: 100%;\n  }\n\n  [_nghost-%COMP%]     .p-card-body {\n    margin-top: 250px;\n  }\n\n  [_nghost-%COMP%]     .login-card {\n    background-color: rgba(39, 48, 60, 0.7);\n    padding: 10px 35px 25px 35px;\n  }\n\n  #back-office-title[_ngcontent-%COMP%] {\n    font-size: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTsrQ0FBQTtBQUdBO0VBQ0UsZUFBQTtBQUFGO0FBR0E7O0VBRUUsZUFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUlFO0VBQ0UsdUNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFESjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQUhKO0FBUUU7O0VBRUUsd0NBQUE7QUFMSjtBQVNBO0VBRUk7SUFDRSxnQkFBQTtFQVBKOztFQVlFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFUSjs7RUFjRTtJQUNFLGlCQUFBO0VBWEo7O0VBZ0JFO0lBQ0UsdUNBQUE7SUFDQSw0QkFBQTtFQWJKOztFQWlCQTtJQUNFLGNBQUE7RUFkRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgY2xhc3NlcyBkZWZpbmUgdGhlIGZvcm0gY29tcG9uZW50cywgYnV0IGNvdWxkIGJlIGFwcGxpZWQgZ2xvYmFsbHkuXG4gICBQbGVhc2UgY29uc2lkZXIgbW92aW5nIHRoZW0gc29tZXdoZXJlIGVsc2UgKi9cblxuLnAtZm9ybWdyaWQgaW5wdXQge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbmZvcm0gLnBpLWV5ZSxcbmZvcm0gLnBpLWV5ZS1zbGFzaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2JhY2stb2ZmaWNlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC5sb2dpbi1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCA0OCwgNjAsIDAuOTApO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDEwcHggMCAyNXB4IDA7XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QjcwO1xuICB9XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC5sb2dpbi1idXR0b246aG92ZXIsXG4gIDo6bmctZGVlcCAubG9naW4tYnV0dG9uOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDkxLCAxMTIsIDAuOTIpO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgOmhvc3Qge1xuICAgIDo6bmctZGVlcCAubG9naW4tY2FyZCB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIDpob3N0IHtcbiAgICA6Om5nLWRlZXAgLmxvZ2luLWNhcmQge1xuICAgICAgei1pbmRleDogLTEwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIDpob3N0IHtcbiAgICA6Om5nLWRlZXAgLnAtY2FyZC1ib2R5IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1MHB4O1xuICAgIH1cbiAgfVxuXG4gIDpob3N0IHtcbiAgICA6Om5nLWRlZXAgLmxvZ2luLWNhcmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgNDgsIDYwLCAwLjcwKTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMzVweCAyNXB4IDM1cHg7XG4gICAgfVxuICB9XG5cbiAgI2JhY2stb2ZmaWNlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.scss'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/psanchez/Projects/DIL/aareon-smart-platform/smartvideo/back-office/src/main.ts */"zUnb");


/***/ }),

/***/ "0GXH":
/*!******************************************************!*\
  !*** ./src/app/core/services/auth/auth.constants.ts ***!
  \******************************************************/
/*! exports provided: AuthConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthConstants", function() { return AuthConstants; });
/**
 * Constant file for the authorization  component.
 */
class AuthConstants {
}
/**
 * Storage access token used during login process
 */
AuthConstants.STORAGE_ACCESS_TOKEN = 'ACCESS_TOKEN';
/**
 * Storage refresh token used during login process
 */
AuthConstants.STORAGE_REFRESH_TOKEN = 'REFRESH_TOKEN';
/**
 * Headers used in the login request
 */
AuthConstants.HEADERS = {
    TENANT_ID: 'X-TENANT-ID',
    USERNAME: 'X-USERNAME',
    PASSWORD: 'x-password',
    FINGERPRINT: 'fingerprint',
};


/***/ }),

/***/ "1cRO":
/*!********************************************************!*\
  !*** ./src/app/core/services/logger/logger.service.ts ***!
  \********************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");



class LoggerService {
    constructor() { }
    /**
     * Info level log
     * @param value any
     * @param rest any
     */
    info(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.log(value, rest);
        }
    }
    /**
     * Log level log
     * @param value any
     * @param rest any
     */
    log(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.log(value, rest);
        }
    }
    /**
     * Warning level log
     * @param value any
     * @param rest any
     */
    warn(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.warn(value, rest);
        }
    }
    /**
     * Error level log
     * @param value any
     * @param rest any
     */
    error(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.error(value, rest);
        }
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2ppc":
/*!*********************************************************************************!*\
  !*** ./src/app/core/services/error-handler/handlers/component-error-handler.ts ***!
  \*********************************************************************************/
/*! exports provided: ComponentErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentErrorHandler", function() { return ComponentErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logger/logger.service */ "1cRO");



class ComponentErrorHandler {
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * handle Component Error
     * @param error Error
     */
    handle(error) {
        this.logger.error(error.message);
    }
}
ComponentErrorHandler.ɵfac = function ComponentErrorHandler_Factory(t) { return new (t || ComponentErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"])); };
ComponentErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComponentErrorHandler, factory: ComponentErrorHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "4O0E":
/*!********************************************************************************!*\
  !*** ./src/app/core/services/error-handler/error-handler-factory.constants.ts ***!
  \********************************************************************************/
/*! exports provided: ErrorHandlerFactoryConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerFactoryConstants", function() { return ErrorHandlerFactoryConstants; });
/**
 * Constant file for the error handler factory class.
 */
class ErrorHandlerFactoryConstants {
}
ErrorHandlerFactoryConstants.ERROR_MAPPINGS = {
    ConnectionError: 'ConnectionError',
    ComponentError: 'ComponentError',
};


/***/ }),

/***/ "52dF":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/interceptors.module.ts ***!
  \**********************************************************/
/*! exports provided: InterceptorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorsModule", function() { return InterceptorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class InterceptorsModule {
}
InterceptorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterceptorsModule });
InterceptorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterceptorsModule_Factory(t) { return new (t || InterceptorsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterceptorsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "5Eit":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/room-config-form/room-config-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: RoomConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomConfigFormComponent", function() { return RoomConfigFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _room_config_form_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-config-form.constants */ "m59G");
/* harmony import */ var uuid_dist_v4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/dist/v4 */ "63qc");
/* harmony import */ var uuid_dist_v4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_dist_v4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ "xlun");














function RoomConfigFormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.roomConfigFormConstants.LABELS.ID);
} }
function RoomConfigFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.roomConfigFormConstants.LABELS.NAME);
} }
function RoomConfigFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomConfigFormComponent_div_18_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.copyRoomId(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.roomConfigFormConstants.LABELS.ID, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.roomId);
} }
function RoomConfigFormComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx_r4.roomConfigFormConstants.LABELS.CREATE);
} }
function RoomConfigFormComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx_r5.roomConfigFormConstants.LABELS.JOIN);
} }
class RoomConfigFormComponent {
    constructor(router, fb, messageService, config, ref) {
        this.router = router;
        this.fb = fb;
        this.messageService = messageService;
        this.config = config;
        this.ref = ref;
        this.formSubmitted = false;
        this.roomConfigFormConstants = _room_config_form_constants__WEBPACK_IMPORTED_MODULE_2__["RoomConfigFormConstants"];
        this.mode = this.config.data.mode;
    }
    ngOnInit() {
        if (localStorage.getItem('roomId')) {
            this.roomId = localStorage.getItem('roomId');
        }
        else {
            this.roomId = uuid_dist_v4__WEBPACK_IMPORTED_MODULE_3___default()();
            localStorage.setItem('roomId', this.roomId);
        }
        const storedConfig = JSON.parse(localStorage.getItem('roomConfig'));
        this.roomConfigFormGroup = this.fb.group({
            roomId: [this.roomId],
            name: [storedConfig ? storedConfig.name : ''],
            username: [storedConfig ? storedConfig.username : ''],
            camera: [storedConfig ? storedConfig.camera : true],
            microphone: [storedConfig ? storedConfig.microphone : true],
            new: [true]
        });
    }
    /**
     * Copy the room id in the clipboard
     */
    copyRoomId() {
        navigator.clipboard
            .writeText(this.roomId)
            .then(() => console.log('copied'))
            .catch((e) => console.error(e));
    }
    /**
     * Submit the create room form
     */
    createRoom() {
        console.log('createRoom');
        // store all the room config in localStorage
        localStorage.setItem('roomConfig', JSON.stringify(this.roomConfigFormGroup.value));
        this.ref.close();
        this.router.navigate([`/video-call/${this.roomId}`]);
    }
    /**
     * Submit the join room form
     */
    joinRoom() {
        console.log('joinRoom');
        const storedConfig = JSON.parse(localStorage.getItem('roomConfig'));
        localStorage.setItem('roomConfig', JSON.stringify({
            roomId: this.roomConfigFormGroup.value.roomId,
            name: storedConfig && storedConfig.name ? storedConfig.name : 'Meeting room',
            username: this.roomConfigFormGroup.value.username,
            microphone: this.roomConfigFormGroup.value.microphone,
            camera: this.roomConfigFormGroup.value.camera,
            new: false
        }));
        this.ref.close();
        this.router.navigate([`/video-call/${this.roomConfigFormGroup.value.roomId}`]);
    }
}
RoomConfigFormComponent.ɵfac = function RoomConfigFormComponent_Factory(t) { return new (t || RoomConfigFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogRef"])); };
RoomConfigFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomConfigFormComponent, selectors: [["room-config-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])], decls: 21, vars: 9, consts: [["id", "room-config-form", "novalidate", "", 1, "room-config-form", 3, "formGroup", "ngSubmit"], ["roomConfigForm", "ngForm"], [1, "p-col-12"], ["class", "p-col-12 room-config-form-input-container", 4, "ngIf"], [1, "p-col-12", "room-config-form-input-container"], ["for", "username", 1, "room-config-form-label"], ["formControlName", "username", "id", "room-username", "pInputText", "", "type", "text", 1, "input-padding"], ["for", "camera", 1, "room-config-form-label"], ["src", "assets/img/video-solid.svg", 1, "room-config-form-label-icon"], ["formControlName", "camera"], ["for", "microphone", 1, "room-config-form-label"], ["src", "assets/img/microphone-solid.svg", 1, "room-config-form-label-icon"], ["formControlName", "microphone"], ["class", "p-offset-10", 4, "ngIf"], ["for", "room-id", 1, "room-config-form-label"], ["formControlName", "roomId", "id", "room-id", "pInputText", "", "type", "text", 1, "input-padding"], ["for", "name", 1, "room-config-form-label"], ["formControlName", "name", "id", "room-name", "pInputText", "", "type", "text", 1, "input-padding"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-copy", "pTooltip", "Copied!", "tooltipPosition", "top", "tooltipEvent", "focus", 1, "p-button-rounded", "p-button-outlined", "copy-button", 3, "click"], [1, "p-offset-10"], ["styleClass", "room-config-button", "type", "submit", 1, "p-col-2", 3, "label"]], template: function RoomConfigFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RoomConfigFormComponent_Template_form_ngSubmit_0_listener() { return ctx.mode === "create" ? ctx.createRoom() : ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoomConfigFormComponent_div_3_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomConfigFormComponent_div_4_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p-inputSwitch", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p-inputSwitch", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoomConfigFormComponent_div_18_Template, 6, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RoomConfigFormComponent_div_19_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RoomConfigFormComponent_div_20_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.roomConfigFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.roomConfigFormConstants.LABELS.USERNAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.roomConfigFormConstants.LABELS.CAMERA, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.roomConfigFormConstants.LABELS.MICROPHONE, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "join");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__["InputSwitch"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["Button"]], styles: [".room-config-form[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.room-config-form-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n}\n.room-config-form-label[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 1.25rem;\n}\n.room-config-form-label-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n[_nghost-%COMP%]     .room-config-button {\n  background: #005b70;\n}\n[_nghost-%COMP%]     .room-config-button:hover, [_nghost-%COMP%]     .room-config-button:focus {\n  background: rgba(0, 91, 112, 0.92);\n}\n[_nghost-%COMP%]     .copy-button {\n  color: #005b70;\n}\n[_nghost-%COMP%]     .copy-button:hover, [_nghost-%COMP%]     .copy-button:focus {\n  color: rgba(0, 91, 112, 0.92) !important;\n}\n[_nghost-%COMP%]     .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n  background: #005b70;\n}\n[_nghost-%COMP%]     .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider, [_nghost-%COMP%]     .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {\n  background: rgba(34, 44, 57, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Jvb20tY29uZmlnLWZvcm0vcm9vbS1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ047QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNOO0FBS0U7RUFDRSxtQkFBQTtBQUZKO0FBT0U7O0VBRUUsa0NBQUE7QUFKSjtBQVNFO0VBQ0UsY0FBQTtBQU5KO0FBVUU7O0VBRUUsd0NBQUE7QUFQSjtBQVdFO0VBQ0UsbUJBQUE7QUFSSjtBQVdFOztFQUlFLGlDQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcm9vbS1jb25maWctZm9ybS9yb29tLWNvbmZpZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb20tY29uZmlnLWZvcm0ge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gICYtaW5wdXQge1xuICAgICYtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgIH1cbiAgfVxuICAmLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAmLWljb24ge1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC5yb29tLWNvbmZpZy1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMwMDViNzA7XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnJvb20tY29uZmlnLWJ1dHRvbjpob3ZlcixcbiAgOjpuZy1kZWVwIC5yb29tLWNvbmZpZy1idXR0b246Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgOTEsIDExMiwgMC45Mik7XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLmNvcHktYnV0dG9uIHtcbiAgICBjb2xvcjogIzAwNWI3MDtcbiAgfVxufVxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLmNvcHktYnV0dG9uOmhvdmVyLFxuICA6Om5nLWRlZXAgLmNvcHktYnV0dG9uOmZvY3VzIHtcbiAgICBjb2xvcjogcmdiYSgwLCA5MSwgMTEyLCAwLjkyKSAhaW1wb3J0YW50O1xuICB9XG59XG46aG9zdCB7XG4gIDo6bmctZGVlcCAucC1pbnB1dHN3aXRjaC5wLWlucHV0c3dpdGNoLWNoZWNrZWQgLnAtaW5wdXRzd2l0Y2gtc2xpZGVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogIzAwNWI3MDtcbiAgfVxuXG4gIDo6bmctZGVlcCAucC1pbnB1dHN3aXRjaC5wLWlucHV0c3dpdGNoLWNoZWNrZWQgLnAtaW5wdXRzd2l0Y2gtc2xpZGVyLFxuICA6Om5nLWRlZXBcbiAgICAucC1pbnB1dHN3aXRjaC5wLWlucHV0c3dpdGNoLWNoZWNrZWQ6bm90KC5wLWRpc2FibGVkKTpob3ZlclxuICAgIC5wLWlucHV0c3dpdGNoLXNsaWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgNDQsIDU3LCAwLjUpO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomConfigFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'room-config-form',
                templateUrl: './room-config-form.component.html',
                styleUrls: ['./room-config-form.component.scss'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogConfig"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogRef"] }]; }, null); })();


/***/ }),

/***/ "9APP":
/*!****************************************************!*\
  !*** ./src/app/core/services/user/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.constants */ "w47b");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");






class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        /**
         * getAllUsers
         * @description Retrieve a list of users from coreuser service
         * @returns  A Observable with an array of coreuser
         */
        this.getAllUsers = () => {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    [_user_constants__WEBPACK_IMPORTED_MODULE_2__["UserConstants"].HEADERS.TENANT_ID]: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tenantId,
                    [_user_constants__WEBPACK_IMPORTED_MODULE_2__["UserConstants"].HEADERS.FINGERPRINT]: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fingerprint,
                }),
            };
            const baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].https +
                _user_constants__WEBPACK_IMPORTED_MODULE_2__["UserConstants"].COREUSER_SERVICE +
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].branch +
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceUrlDomain +
                '/';
            return this.httpClient.get(baseURL + _user_constants__WEBPACK_IMPORTED_MODULE_2__["UserConstants"].USERS_ENDPOINT, httpOptions);
        };
    }
    /**
     * @param user CoreUser
     */
    setActive(user) {
        const now = new Date().getTime();
        const activationTime = new Date(user.user.activation_date).getTime();
        const deactivationTime = new Date(user.user.deactivation_date).getTime();
        user.user.active = activationTime < now
            && (deactivationTime >= now || user.user.deactivation_date === null);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9Xeq":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --cloud` replaces `environment.ts` with `environment.cloud.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    serviceUrlDomain: '.dev.aareonit.fr',
    tenantId: 'dev33sp2demo1_35ye7J9CJ5',
    fingerprint: '0123456789',
    branch: '-develop',
    timeout: 30000,
    // Generics
    https: 'https://',
    token_prefix: 'Bearer ',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EEZ+":
/*!******************************************************************************!*\
  !*** ./src/app/core/services/error-handler/error-handler-factory.service.ts ***!
  \******************************************************************************/
/*! exports provided: ErrorHandlerFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerFactoryService", function() { return ErrorHandlerFactoryService; });
/* harmony import */ var _error_handler_factory_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handler-factory.constants */ "4O0E");
/* harmony import */ var _handlers_connection_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/connection-error-handler */ "FYzy");
/* harmony import */ var _handlers_component_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/component-error-handler */ "2ppc");
/* harmony import */ var _handlers_default_error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/default-error-handler */ "IwzI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/logger.service */ "1cRO");







class ErrorHandlerFactoryService {
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * creates a new handler according to the received error
     * @param error Error
     */
    createHandler(error) {
        let handler;
        const className = error.constructor.name;
        switch (className) {
            case _error_handler_factory_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorHandlerFactoryConstants"].ERROR_MAPPINGS.ConnectionError:
                handler = new _handlers_connection_error_handler__WEBPACK_IMPORTED_MODULE_1__["ConnectionErrorHandler"](this.logger);
                break;
            case _error_handler_factory_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorHandlerFactoryConstants"].ERROR_MAPPINGS.ComponentError:
                handler = new _handlers_component_error_handler__WEBPACK_IMPORTED_MODULE_2__["ComponentErrorHandler"](this.logger);
                break;
            default:
                handler = new _handlers_default_error_handler__WEBPACK_IMPORTED_MODULE_3__["DefaultErrorHandler"](this.logger);
        }
        return handler;
    }
}
ErrorHandlerFactoryService.ɵfac = function ErrorHandlerFactoryService_Factory(t) { return new (t || ErrorHandlerFactoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"])); };
ErrorHandlerFactoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ErrorHandlerFactoryService, factory: ErrorHandlerFactoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ErrorHandlerFactoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "FYzy":
/*!**********************************************************************************!*\
  !*** ./src/app/core/services/error-handler/handlers/connection-error-handler.ts ***!
  \**********************************************************************************/
/*! exports provided: ConnectionErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionErrorHandler", function() { return ConnectionErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logger/logger.service */ "1cRO");



class ConnectionErrorHandler {
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * handle the Connection Error
     * @param error Error
     */
    handle(error) {
        this.logger.error('Error is: ' + error.message);
    }
}
ConnectionErrorHandler.ɵfac = function ConnectionErrorHandler_Factory(t) { return new (t || ConnectionErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"])); };
ConnectionErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConnectionErrorHandler, factory: ConnectionErrorHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectionErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "HhCs":
/*!******************************************************************************************!*\
  !*** ./src/app/core/components/user-management-table/user-management-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserManagementTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementTableComponent", function() { return UserManagementTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status-codes */ "FLyn");
/* harmony import */ var _user_management_table_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management-table.constants */ "QV9/");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user/user.service */ "9APP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/blockui */ "0LTx");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
















function UserManagementTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UserManagementTableComponent_ng_template_4_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserManagementTableComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " User Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Activation date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserManagementTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-tableCheckbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-inputSwitch", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserManagementTableComponent_ng_template_6_Template_p_inputSwitch_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const user_r7 = ctx.$implicit; return user_r7.user.active = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.user.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r7.user.role === "admin" ? "Administrator" : "Regular user", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.user.activation_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r7.user.active);
} }
function UserManagementTableComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" In total there are ", ctx_r4.users ? ctx_r4.users.length : 0, " users. ");
} }
const _c0 = function () { return ["user.user_name", "user.role"]; };
class UserManagementTableComponent {
    constructor(userService, messageService, 
    /*private confirmationService: ConfirmationService,*/
    router) {
        this.userService = userService;
        this.messageService = messageService;
        this.router = router;
    }
    ngOnInit() {
        this.blockedTable = true;
        const self = this;
        this.userService.getAllUsers().subscribe({
            next(data) {
                self.users = data.results;
                self.calculateActive();
                self.blockedTable = false;
            },
            error(err) {
                self.messageService.add({
                    severity: 'error',
                    detail: err.status === http_status_codes__WEBPACK_IMPORTED_MODULE_2__["StatusCodes"].UNAUTHORIZED
                        ? _user_management_table_constants__WEBPACK_IMPORTED_MODULE_3__["UserManagementTableConstants"].ERRORS.INVALID_TOKEN
                        : _user_management_table_constants__WEBPACK_IMPORTED_MODULE_3__["UserManagementTableConstants"].ERRORS.SERVER,
                });
                self.blockedTable = false;
            },
        });
    }
    /**
     * sets active status on all users from table
     */
    calculateActive() {
        this.users.forEach((user) => {
            this.userService.setActive(user);
        });
    }
    openNew() {
    }
    deleteSelectedUsers() {
    }
    editUser(user) {
    }
    deleteUser(user) {
    }
    hideDialog() {
    }
    saveUser() {
    }
}
UserManagementTableComponent.ɵfac = function UserManagementTableComponent_Factory(t) { return new (t || UserManagementTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UserManagementTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserManagementTableComponent, selectors: [["back-office-user-management-table"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])], decls: 10, vars: 10, consts: [[1, "blockable-div"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "users-table", 3, "value", "rows", "paginator", "globalFilterFields", "selection", "rowHover", "showCurrentPageReport", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [3, "target", "blocked"], [1, "p-d-flex", "p-ai-center", "p-jc-between"], [1, "p-m-0"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], [2, "width", "3rem"], ["pSortableColumn", "user.user_name"], ["field", "name"], ["pSortableColumn", "user.role"], ["field", "role"], ["pSortableColumn", "user.activation_date"], ["field", "activationDate"], [3, "value"], [3, "ngModel", "ngModelChange"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", "p-mr-2"], ["pButton", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning"]], template: function UserManagementTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function UserManagementTableComponent_Template_p_table_selectionChange_2_listener($event) { return ctx.selectedUsers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserManagementTableComponent_ng_template_4_Template, 6, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserManagementTableComponent_ng_template_5_Template, 15, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserManagementTableComponent_ng_template_6_Template, 14, 5, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserManagementTableComponent_ng_template_7_Template, 2, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-blockUI", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-progressSpinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.users)("rows", 10)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("selection", ctx.selectedUsers)("rowHover", true)("showCurrentPageReport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", _r0)("blocked", ctx.blockedTable);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"], primeng_blockui__WEBPACK_IMPORTED_MODULE_8__["BlockUI"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinner"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableHeaderCheckbox"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["SortIcon"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableCheckbox"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitch"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"]], styles: [".blockable-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n[_nghost-%COMP%]     .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n  background: #222c39;\n}\n\n[_nghost-%COMP%]     .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider, [_nghost-%COMP%]     .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {\n  background: rgba(34, 44, 57, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3VzZXItbWFuYWdlbWVudC10YWJsZS91c2VyLW1hbmFnZW1lbnQtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUdFO0VBSUUsbUJBQUE7QUFISjs7QUFNRTs7RUFPRSxpQ0FBQTtBQVRKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3VzZXItbWFuYWdlbWVudC10YWJsZS91c2VyLW1hbmFnZW1lbnQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2thYmxlLWRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXBcbiAgICAucC1pbnB1dHN3aXRjaC5wLWlucHV0c3dpdGNoLWNoZWNrZWRcbiAgICAucC1pbnB1dHN3aXRjaC1zbGlkZXI6YmVmb3JlXG4gIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyYzM5O1xuICB9XG5cbiAgOjpuZy1kZWVwXG4gIC5wLWlucHV0c3dpdGNoLnAtaW5wdXRzd2l0Y2gtY2hlY2tlZFxuICAucC1pbnB1dHN3aXRjaC1zbGlkZXIsXG4gIDo6bmctZGVlcFxuICAucC1pbnB1dHN3aXRjaC5wLWlucHV0c3dpdGNoLWNoZWNrZWQ6bm90KC5wLWRpc2FibGVkKTpob3ZlclxuICAucC1pbnB1dHN3aXRjaC1zbGlkZXJcbiAge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDQ0LCA1NywgMC41KTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-user-management-table',
                templateUrl: './user-management-table.component.html',
                styleUrls: ['./user-management-table.component.scss'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]],
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "IwzI":
/*!*******************************************************************************!*\
  !*** ./src/app/core/services/error-handler/handlers/default-error-handler.ts ***!
  \*******************************************************************************/
/*! exports provided: DefaultErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultErrorHandler", function() { return DefaultErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logger/logger.service */ "1cRO");



class DefaultErrorHandler {
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * handles default Error
     * @param error Error
     */
    handle(error) {
        this.logger.error(error.message);
    }
}
DefaultErrorHandler.ɵfac = function DefaultErrorHandler_Factory(t) { return new (t || DefaultErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"])); };
DefaultErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefaultErrorHandler, factory: DefaultErrorHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "JPXe":
/*!******************************************************!*\
  !*** ./src/app/core/layout/admin/admin.component.ts ***!
  \******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_top_menu_admin_top_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-top-menu/admin-top-menu.component */ "N2PU");
/* harmony import */ var _admin_side_menu_admin_side_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-side-menu/admin-side-menu.component */ "wTmn");
/* harmony import */ var _admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-content/admin-content.component */ "YMfe");





class AdminComponent {
    constructor() { }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["back-office-admin"]], decls: 6, vars: 2, consts: [[1, "admin-layout"], [3, "sideMenu"], [3, "content"], ["sideMenu", ""], ["content", ""]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "back-office-admin-top-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "back-office-admin-side-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "back-office-admin-content", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sideMenu", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", _r1);
    } }, directives: [_admin_top_menu_admin_top_menu_component__WEBPACK_IMPORTED_MODULE_1__["AdminTopMenuComponent"], _admin_side_menu_admin_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["AdminSideMenuComponent"], _admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_3__["AdminContentComponent"]], styles: [".admin-layout[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1sYXlvdXQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Mrsu":
/*!**********************************************************************!*\
  !*** ./src/app/core/services/error-handler/error-handler.service.ts ***!
  \**********************************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _error_handler_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler-factory.service */ "EEZ+");



class ErrorHandlerService {
    constructor(factory) {
        this.factory = factory;
    }
    /**
     * catches the error and handle it accordingly
     * @param error Error
     */
    handleError(error) {
        this.handler = this.factory.createHandler(error);
        this.handler.handle(error);
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_factory_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerFactoryService"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _error_handler_factory_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerFactoryService"] }]; }, null); })();


/***/ }),

/***/ "N2PU":
/*!************************************************************************!*\
  !*** ./src/app/core/layout/admin-top-menu/admin-top-menu.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminTopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTopMenuComponent", function() { return AdminTopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "RL7/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menu */ "1SLH");






class AdminTopMenuComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                command: () => {
                    this.logout();
                }
            }
        ];
    }
    /**
     * toggle menu display from hamburger button
     */
    toggleMenu(event) {
        this.sideMenu.toggleOverride();
        event.stopPropagation();
    }
    /**
     * Logs the user out and redirect to login page
     */
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    }
    /**
     * VideoCall Functions POC
     */
    goToVideoCall() {
        this.router.navigateByUrl('/video-call');
    }
}
AdminTopMenuComponent.ɵfac = function AdminTopMenuComponent_Factory(t) { return new (t || AdminTopMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminTopMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTopMenuComponent, selectors: [["back-office-admin-top-menu"]], inputs: { sideMenu: "sideMenu" }, decls: 12, vars: 2, consts: [[1, "backoffice-header", "p-col-12"], [1, "p-grid"], [1, "p-col-8", "p-sm-6"], ["styleClass", "toggle-menu p-button-sm", 3, "onClick"], [1, "pi", "pi-bars"], ["src", "assets/aareon_logo_inverted.svg"], [1, "p-col-4", "p-sm-6", "user-info"], ["styleClass", "user-menu-button", 3, "click"], ["data-letters", "JD"], ["styleClass", "user-menu", 3, "popup", "model"], ["menu", ""]], template: function AdminTopMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AdminTopMenuComponent_Template_p_button_onClick_3_listener($event) { return ctx.toggleMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTopMenuComponent_Template_p_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return _r0.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "John Doe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p-menu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popup", true)("model", ctx.items);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_3__["Button"], primeng_menu__WEBPACK_IMPORTED_MODULE_4__["Menu"]], styles: ["header[_ngcontent-%COMP%] {\n  background-color: #222c39;\n}\n\n.backoffice-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 80px;\n  z-index: 100;\n}\n\n.backoffice-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-block-start: 0.5em;\n  margin-block-end: 0.5em;\n  width: 14em;\n  height: 3em;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding-right: 2.5em;\n}\n\n[data-letters][_ngcontent-%COMP%]:before {\n  content: attr(data-letters);\n  display: inline-block;\n  font-size: 1em;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  text-align: center;\n  border-radius: 50%;\n  background: #ffffff;\n  vertical-align: middle;\n  margin-right: 0.5em;\n  color: #222c39;\n}\n\n[_nghost-%COMP%]     .p-button {\n  min-width: 2.8rem;\n  vertical-align: top;\n  margin-block-start: 0.8em;\n  margin-block-end: 0.5em;\n  margin-right: 10px;\n  background: #222c39;\n}\n\n[_nghost-%COMP%]     .toggle-menu:hover, [_nghost-%COMP%]     .toggle-menu:focus {\n  background: #ffffff;\n  color: #222c39;\n}\n\n[_nghost-%COMP%]     .user-menu-button:hover, [_nghost-%COMP%]     .user-menu-button:focus {\n  background: #222c39;\n  color: #ffffff;\n}\n\n[_nghost-%COMP%]     .user-menu {\n  top: 80px !important;\n  right: 17px !important;\n  left: auto !important;\n  background: #222c39;\n}\n\n[_nghost-%COMP%]     .user-menu .p-menuitem-link .p-menuitem-text, [_nghost-%COMP%]     .user-menu .p-menuitem-link .p-menuitem-icon {\n  color: #ffffff !important;\n}\n\n@media (min-width: 769px) {\n  [_nghost-%COMP%]     .toggle-menu {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvYWRtaW4tdG9wLW1lbnUvYWRtaW4tdG9wLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUtFOztFQUVFLG1CQUFBO0VBQ0EsY0FBQTtBQUZKOztBQU9FOztFQUVFLG1CQUFBO0VBQ0EsY0FBQTtBQUpKOztBQVNFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFXRTs7RUFFRSx5QkFBQTtBQVJKOztBQVlBO0VBRUk7SUFDRSxhQUFBO0VBVko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2FkbWluLXRvcC1tZW51L2FkbWluLXRvcC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmMzOTtcbn1cblxuLmJhY2tvZmZpY2UtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogODBweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uYmFja29mZmljZS1oZWFkZXIgaW1nIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC41ZW07XG4gIHdpZHRoOiAxNGVtO1xuICBoZWlnaHQ6IDNlbTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udXNlci1pbmZvIHAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1yaWdodDogMi41ZW07XG59XG5cbltkYXRhLWxldHRlcnNdOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sZXR0ZXJzKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDFlbTtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBjb2xvcjogIzIyMmMzOTtcbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnAtYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDIuOHJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC44ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyMjJjMzk7XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnRvZ2dsZS1tZW51OmhvdmVyLFxuICA6Om5nLWRlZXAgLnRvZ2dsZS1tZW51OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMjIyYzM5O1xuICB9XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC51c2VyLW1lbnUtYnV0dG9uOmhvdmVyLFxuICA6Om5nLWRlZXAgLnVzZXItbWVudS1idXR0b246Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICMyMjJjMzk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnVzZXItbWVudSB7XG4gICAgdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzIyMmMzOTtcbiAgfVxufVxuXG46aG9zdCB7XG4gIDo6bmctZGVlcCAudXNlci1tZW51IC5wLW1lbnVpdGVtLWxpbmsgLnAtbWVudWl0ZW0tdGV4dCxcbiAgOjpuZy1kZWVwIC51c2VyLW1lbnUgLnAtbWVudWl0ZW0tbGluayAucC1tZW51aXRlbS1pY29uIHtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICA6aG9zdCB7XG4gICAgOjpuZy1kZWVwIC50b2dnbGUtbWVudSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTopMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-admin-top-menu',
                templateUrl: './admin-top-menu.component.html',
                styleUrls: ['./admin-top-menu.component.scss']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { sideMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _events_events_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/events.module */ "Yp2f");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.module */ "Z9Cr");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "V/fk");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/pipes.module */ "9Xeq");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/directives.module */ "yGOH");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/blockui */ "0LTx");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ "xlun");




















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _events_events_module__WEBPACK_IMPORTED_MODULE_2__["EventsModule"],
            _services_services_module__WEBPACK_IMPORTED_MODULE_3__["ServicesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
            primeng_menu__WEBPACK_IMPORTED_MODULE_10__["MenuModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_12__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_13__["MessageModule"],
            primeng_blockui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
            primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"]
        ], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_10__["MenuModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_12__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_13__["MessageModule"],
        primeng_blockui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _events_events_module__WEBPACK_IMPORTED_MODULE_2__["EventsModule"],
        _services_services_module__WEBPACK_IMPORTED_MODULE_3__["ServicesModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_10__["MenuModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_12__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_13__["MessageModule"],
        primeng_blockui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"]], exports: [primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_10__["MenuModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_12__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_13__["MessageModule"],
        primeng_blockui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _events_events_module__WEBPACK_IMPORTED_MODULE_2__["EventsModule"],
                    _services_services_module__WEBPACK_IMPORTED_MODULE_3__["ServicesModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
                    primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
                    primeng_menu__WEBPACK_IMPORTED_MODULE_10__["MenuModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_12__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_13__["MessageModule"],
                    primeng_blockui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"],
                    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
                    primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
                    primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
                    primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"]
                ],
                exports: [
                    primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
                    primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
                    primeng_menu__WEBPACK_IMPORTED_MODULE_10__["MenuModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_12__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_13__["MessageModule"],
                    primeng_blockui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"],
                    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
                    primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
                    primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QV9/":
/*!******************************************************************************************!*\
  !*** ./src/app/core/components/user-management-table/user-management-table.constants.ts ***!
  \******************************************************************************************/
/*! exports provided: UserManagementTableConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementTableConstants", function() { return UserManagementTableConstants; });
/**
 * Constant file for the login form component.
 */
class UserManagementTableConstants {
}
/**
 * Object with all constants related the login errors
 */
UserManagementTableConstants.ERRORS = {
    INVALID_TOKEN: 'Your token is invalid. Please login you again',
    SERVER: 'There was an error trying to process your request. Please, try again later',
};


/***/ }),

/***/ "RL7/":
/*!****************************************************!*\
  !*** ./src/app/core/services/auth/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.constants */ "0GXH");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");






class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Process Sign in request
     * @param loginForm the submitted login data
     * @return Observable<LoginToken>
     */
    signIn(loginForm) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                [_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].HEADERS.TENANT_ID]: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tenantId,
                [_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].HEADERS.FINGERPRINT]: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fingerprint,
                [_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].HEADERS.USERNAME]: loginForm.username,
                [_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].HEADERS.PASSWORD]: loginForm.password,
            }),
        };
        return this.httpClient.get('https://auth-orm-develop.dev.aareonit.fr/api/authenticate', httpOptions);
    }
    /**
     * Store access tokens on local storage
     * @param token token to store
     */
    storeCredential(token) {
        localStorage.setItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_ACCESS_TOKEN, token.accessToken);
        localStorage.setItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_REFRESH_TOKEN, token.refreshToken);
    }
    /**
     * get credentials for use
     * @return LoginToken
     */
    getCredentials() {
        return {
            token: localStorage.getItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_ACCESS_TOKEN),
            accessToken: localStorage.getItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_ACCESS_TOKEN),
            refreshToken: localStorage.getItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_REFRESH_TOKEN),
        };
    }
    /**
     * Verifies if the user is logged in
     * @return boolean
     */
    isLoggedIn() {
        return (localStorage.getItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_ACCESS_TOKEN) !== null &&
            localStorage.getItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_REFRESH_TOKEN) !== null);
    }
    /**
     * Logs the user out
     */
    logout() {
        localStorage.removeItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_ACCESS_TOKEN);
        localStorage.removeItem(_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STORAGE_REFRESH_TOKEN);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reset-css */ "+m2t");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
        this.title = 'back-office';
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["back-office-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"] }]; }, null); })();


/***/ }),

/***/ "UNLS":
/*!**************************************************************************!*\
  !*** ./src/app/core/layout/admin-side-menu/admin-side-menu.constants.ts ***!
  \**************************************************************************/
/*! exports provided: AdminSideMenuConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSideMenuConstants", function() { return AdminSideMenuConstants; });
/**
 * Constant file for the authorization  component.
 */
class AdminSideMenuConstants {
}
/**
 * Storage maximum size for tablet viewport
 */
AdminSideMenuConstants.TABLET_BREAKPOINT = 992;
/**
 * Storage maximum size for mobile viewport
 */
AdminSideMenuConstants.MOBILE_BREAKPOINT = 768;


/***/ }),

/***/ "V/fk":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "YMfe":
/*!**********************************************************************!*\
  !*** ./src/app/core/layout/admin-content/admin-content.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminContentComponent", function() { return AdminContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminContentComponent {
    constructor() {
        this.contentOverride = '';
    }
    /**
     * forces padding to tablet size
     */
    overridePadding() {
        this.contentOverride = 'content-override';
    }
    /**
     * clear padding correction
     */
    clearOverride() {
        this.contentOverride = '';
    }
}
AdminContentComponent.ɵfac = function AdminContentComponent_Factory(t) { return new (t || AdminContentComponent)(); };
AdminContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminContentComponent, selectors: [["back-office-admin-content"]], decls: 4, vars: 3, consts: [[1, "content-inside"]], template: function AdminContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("content ", ctx.contentOverride, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     h1 {\n  font-weight: normal;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 0.5em 0 0 0;\n  width: 100%;\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-top: 85px;\n  padding-left: 220px;\n  padding-bottom: 70px;\n  transition: padding 0.3s;\n  min-height: 100%;\n}\n\n.content-inside[_ngcontent-%COMP%] {\n  padding: 7px;\n}\n\n.content-override[_ngcontent-%COMP%] {\n  padding-left: 80px !important;\n}\n\n@media (max-width: 992px) {\n  .content[_ngcontent-%COMP%] {\n    padding-left: 100px;\n  }\n}\n\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvYWRtaW4tY29udGVudC9hZG1pbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9sYXlvdXQvYWRtaW4tY29udGVudC9hZG1pbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGgxIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDAuNWVtIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA4NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudC1pbnNpZGUge1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi5jb250ZW50LW92ZXJyaWRlIHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-admin-content',
                templateUrl: './admin-content.component.html',
                styleUrls: ['./admin-content.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Yp2f":
/*!************************************************!*\
  !*** ./src/app/shared/events/events.module.ts ***!
  \************************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class EventsModule {
}
EventsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EventsModule });
EventsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EventsModule_Factory(t) { return new (t || EventsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Z9Cr":
/*!****************************************************!*\
  !*** ./src/app/shared/services/services.module.ts ***!
  \****************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_interceptors_auth_header_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptors/auth-header/auth-header.interceptor */ "+G7O");
/* harmony import */ var _core_services_error_handler_error_handler_factory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/error-handler/error-handler-factory.service */ "EEZ+");
/* harmony import */ var _core_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/services/error-handler/error-handler.service */ "Mrsu");
// Vendors




// Bootstrapping angular application dependencies











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _core_services_error_handler_error_handler_factory_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerFactoryService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _core_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlerService"] },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_auth_header_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthHeaderInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot({
                // url: 'http://localhost:3000'
                url: 'https://test-app-io.herokuapp.com'
                // url: 'https://smartvideo-io-216.dev.aareonit.fr'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot({
                        // url: 'http://localhost:3000'
                        url: 'https://test-app-io.herokuapp.com'
                        // url: 'https://smartvideo-io-216.dev.aareonit.fr'
                    }),
                ],
                providers: [
                    _core_services_error_handler_error_handler_factory_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerFactoryService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _core_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlerService"] },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_auth_header_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthHeaderInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dgaP":
/*!************************************************************************!*\
  !*** ./src/app/core/interceptors/auth-header/auth-header.constants.ts ***!
  \************************************************************************/
/*! exports provided: AuthHeaderConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderConstants", function() { return AuthHeaderConstants; });
/**
 * Constant file for the auth header interceptor.
 */
class AuthHeaderConstants {
}
/**
 * Object with all constants related the login
 */
AuthHeaderConstants.HEADERS = {
    AUTHORIZATION: 'Authorization'
};


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");




class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "e2fb":
/*!********************************************************************!*\
  !*** ./src/app/core/components/login-form/login-form.constants.ts ***!
  \********************************************************************/
/*! exports provided: LoginFormConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormConstants", function() { return LoginFormConstants; });
/**
 * Constant file for the login form component.
 */
class LoginFormConstants {
}
/**
 * Object with all constants related the login
 */
LoginFormConstants.LABELS = {
    BACKOFFICE: 'Backoffice',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    LOGIN: 'LOGIN',
};
/**
 * Object with all constants related the login errors
 */
LoginFormConstants.ERRORS = {
    USERNAME_REQUIRED: 'Please, enter your username',
    USERNAME_EMAIL: 'Please, enter a valid email',
    PASSWORD_REQUIRED: 'Please, enter your password',
    INVALID_CREDENTIALS: 'Sorry, the username or password are invalid',
    SERVER: 'There was an error trying to process your request. Please, try again later',
};


/***/ }),

/***/ "eeTa":
/*!**************************************************!*\
  !*** ./src/app/core/guards/back-office.guard.ts ***!
  \**************************************************/
/*! exports provided: BackOfficeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficeGuard", function() { return BackOfficeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "RL7/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class BackOfficeGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        return this.router.createUrlTree(['/login']);
    }
}
BackOfficeGuard.ɵfac = function BackOfficeGuard_Factory(t) { return new (t || BackOfficeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BackOfficeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackOfficeGuard, factory: BackOfficeGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackOfficeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "gGyX":
/*!********************************************************************!*\
  !*** ./src/app/core/layout/admin-footer/admin-footer.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFooterComponent", function() { return AdminFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminFooterComponent {
    constructor() { }
}
AdminFooterComponent.ɵfac = function AdminFooterComponent_Factory(t) { return new (t || AdminFooterComponent)(); };
AdminFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminFooterComponent, selectors: [["back-office-admin-footer"]], decls: 4, vars: 0, consts: [[1, "backoffice-footer", "p-grid", "p-nogutter"], [1, "p-col-12"]], template: function AdminFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aareon Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #222c39;\n  height: 70px;\n  margin-top: -70px;\n}\n\n.backoffice-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1em;\n  color: #ffffff;\n}\n\n.backoffice-footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvYWRtaW4tZm9vdGVyL2FkbWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2FkbWluLWZvb3Rlci9hZG1pbi1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYzM5O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xufVxuXG4uYmFja29mZmljZS1mb290ZXIgZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5iYWNrb2ZmaWNlLWZvb3RlciBoNSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-admin-footer',
                templateUrl: './admin-footer.component.html',
                styleUrls: ['./admin-footer.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m59G":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/room-config-form/room-config-form.constants.ts ***!
  \********************************************************************************/
/*! exports provided: RoomConfigFormConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomConfigFormConstants", function() { return RoomConfigFormConstants; });
/**
 * Constant file for the room configuration form component.
 */
class RoomConfigFormConstants {
}
/**
 * Object with all constants related the room configuration
 */
RoomConfigFormConstants.LABELS = {
    CAMERA: 'Camera',
    CANCEL: 'Cancel',
    CREATE: ' Create',
    ID: 'Room ID',
    JOIN: 'Join',
    MICROPHONE: 'Microphone',
    NAME: 'Room name (Optional)',
    USERNAME: 'Your name (Optional)'
};
/**
 * Object with all constants related the room configuration errors
 */
RoomConfigFormConstants.ERRORS = {
    SERVER: 'There was an error trying to process your request. Please, try again later',
};


/***/ }),

/***/ "nh7x":
/*!**********************************************!*\
  !*** ./src/app/core/layout/layout.module.ts ***!
  \**********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "JPXe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_top_menu_admin_top_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-top-menu/admin-top-menu.component */ "N2PU");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _admin_side_menu_admin_side_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-side-menu/admin-side-menu.component */ "wTmn");
/* harmony import */ var _admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-footer/admin-footer.component */ "gGyX");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var _admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-content/admin-content.component */ "YMfe");











class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        _admin_top_menu_admin_top_menu_component__WEBPACK_IMPORTED_MODULE_4__["AdminTopMenuComponent"],
        _admin_side_menu_admin_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["AdminSideMenuComponent"],
        _admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_7__["AdminFooterComponent"],
        _admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_9__["AdminContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
                    _admin_top_menu_admin_top_menu_component__WEBPACK_IMPORTED_MODULE_4__["AdminTopMenuComponent"],
                    _admin_side_menu_admin_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["AdminSideMenuComponent"],
                    _admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_7__["AdminFooterComponent"],
                    _admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_9__["AdminContentComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.module */ "nh7x");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ "qxEu");
/* harmony import */ var _guards_guards_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/guards.module */ "xAKi");
/* harmony import */ var _interceptors_interceptors_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/interceptors.module */ "52dF");
// Vendors


// Layout dependencies





class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _guards_guards_module__WEBPACK_IMPORTED_MODULE_4__["GuardsModule"],
            _interceptors_interceptors_module__WEBPACK_IMPORTED_MODULE_5__["InterceptorsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _guards_guards_module__WEBPACK_IMPORTED_MODULE_4__["GuardsModule"],
        _interceptors_interceptors_module__WEBPACK_IMPORTED_MODULE_5__["InterceptorsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                    _guards_guards_module__WEBPACK_IMPORTED_MODULE_4__["GuardsModule"],
                    _interceptors_interceptors_module__WEBPACK_IMPORTED_MODULE_5__["InterceptorsModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "qxEu":
/*!******************************************************!*\
  !*** ./src/app/core/components/components.module.ts ***!
  \******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "/wR0");
/* harmony import */ var _room_config_form_room_config_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-config-form/room-config-form.component */ "5Eit");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_management_table_user_management_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management-table/user-management-table.component */ "HhCs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/multiselect */ "lVkt");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/contextmenu */ "yNBN");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ "+DzE");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/tooltip */ "xlun");































class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_11__["SliderModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__["MultiSelectModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__["FileUploadModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__["ToolbarModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_21__["RatingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__["InputNumberModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__["InputTextareaModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_26__["InputSwitchModule"],
            primeng_divider__WEBPACK_IMPORTED_MODULE_27__["DividerModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_28__["TooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"], _room_config_form_room_config_form_component__WEBPACK_IMPORTED_MODULE_3__["RoomConfigFormComponent"], _user_management_table_user_management_table_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_11__["SliderModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__["MultiSelectModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__["FileUploadModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__["ToolbarModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_21__["RatingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__["InputNumberModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__["InputTextareaModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_26__["InputSwitchModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_27__["DividerModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_28__["TooltipModule"]], exports: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"], _room_config_form_room_config_form_component__WEBPACK_IMPORTED_MODULE_3__["RoomConfigFormComponent"], _user_management_table_user_management_table_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementTableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"], _room_config_form_room_config_form_component__WEBPACK_IMPORTED_MODULE_3__["RoomConfigFormComponent"], _user_management_table_user_management_table_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementTableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                    primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
                    primeng_slider__WEBPACK_IMPORTED_MODULE_11__["SliderModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
                    primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__["MultiSelectModule"],
                    primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
                    primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__["FileUploadModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_20__["ToolbarModule"],
                    primeng_rating__WEBPACK_IMPORTED_MODULE_21__["RatingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__["InputNumberModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"],
                    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__["InputTextareaModule"],
                    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_26__["InputSwitchModule"],
                    primeng_divider__WEBPACK_IMPORTED_MODULE_27__["DividerModule"],
                    primeng_tooltip__WEBPACK_IMPORTED_MODULE_28__["TooltipModule"]
                ],
                exports: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"], _room_config_form_room_config_form_component__WEBPACK_IMPORTED_MODULE_3__["RoomConfigFormComponent"], _user_management_table_user_management_table_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementTableComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guards_back_office_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/guards/back-office.guard */ "eeTa");
/* harmony import */ var _core_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/layout/admin/admin.component */ "JPXe");






const routes = [
    {
        path: '',
        component: _core_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: 'overview',
                loadChildren: () => __webpack_require__.e(/*! import() | overview-overview-module */ "overview-overview-module").then(__webpack_require__.bind(null, /*! ./overview/overview.module */ "QW0Q")).then((m) => m.OverviewModule),
                canActivate: [_core_guards_back_office_guard__WEBPACK_IMPORTED_MODULE_2__["BackOfficeGuard"]]
            },
            {
                path: 'user-management',
                loadChildren: () => __webpack_require__.e(/*! import() | user-management-user-management-module */ "user-management-user-management-module").then(__webpack_require__.bind(null, /*! ./user-management/user-management.module */ "hLrj")).then((m) => m.UserManagementModule),
                canActivate: [_core_guards_back_office_guard__WEBPACK_IMPORTED_MODULE_2__["BackOfficeGuard"]]
            },
            {
                path: 'video-call',
                loadChildren: () => __webpack_require__.e(/*! import() | videocall-videocall-module */ "videocall-videocall-module").then(__webpack_require__.bind(null, /*! ./videocall/videocall.module */ "iy7I")).then((m) => m.VideoCallModule),
                canActivate: [_core_guards_back_office_guard__WEBPACK_IMPORTED_MODULE_2__["BackOfficeGuard"]]
            },
            {
                path: 'video-call/:roomId',
                loadChildren: () => __webpack_require__.e(/*! import() | videocall-room-videocallroom-module */ "videocall-room-videocallroom-module").then(__webpack_require__.bind(null, /*! ./videocall-room/videocallroom.module */ "+pmC")).then((m) => m.VideoCallRoomModule),
                canActivate: [_core_guards_back_office_guard__WEBPACK_IMPORTED_MODULE_2__["BackOfficeGuard"]]
            }
        ]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "F4UR")).then((m) => m.LoginModule)
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, providers: [_core_guards_back_office_guard__WEBPACK_IMPORTED_MODULE_2__["BackOfficeGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_core_guards_back_office_guard__WEBPACK_IMPORTED_MODULE_2__["BackOfficeGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w47b":
/*!******************************************************!*\
  !*** ./src/app/core/services/user/user.constants.ts ***!
  \******************************************************/
/*! exports provided: UserConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConstants", function() { return UserConstants; });
/**
 * Constant file for the user  component.
 */
class UserConstants {
}
/**
 * Endpoint that retrieve the user list
 */
UserConstants.USERS_ENDPOINT = 'api/v1/users';
/**
 * Service name
 */
UserConstants.COREUSER_SERVICE = 'coreuser-orm';
/**
 * Headers used in the login request
 */
UserConstants.HEADERS = {
    TENANT_ID: 'X-TENANT-ID',
    FINGERPRINT: 'fingerprint',
};


/***/ }),

/***/ "wTmn":
/*!**************************************************************************!*\
  !*** ./src/app/core/layout/admin-side-menu/admin-side-menu.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSideMenuComponent", function() { return AdminSideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_side_menu_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-side-menu.constants */ "UNLS");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "jIHw");






class AdminSideMenuComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.override = false;
        this.sideMenuOverride = '';
        this.pMenuOverride = '';
        this.width = window.innerWidth;
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Overview',
                icon: 'pi pi-home',
                routerLink: '/overview',
                title: 'Overview',
                command: () => {
                    this.clearOverride();
                },
            },
            /*{
              label: 'User Management',
              icon: 'pi pi-users',
              routerLink: '/user-management',
              title: 'User Management',
              command: () => {
                this.clearOverride();
              },
            },*/
            {
                label: 'Video Call',
                icon: 'pi pi-video',
                routerLink: '/video-call',
                title: 'Video Call',
                command: () => {
                    this.clearOverride();
                },
            },
        ];
        this.setChevronDirection();
    }
    /**
     * adjust overriding according to resize situation
     * @param event event dispatched when viewport changes its size
     */
    onResize(event) {
        this.width = window.innerWidth;
        this.clearOverride();
    }
    /**
     * if theres a click outside the component and viewport is small, collapse the menu
     * @param event event dispatched on click
     */
    clickOut(event) {
        this.clearOverride();
    }
    /**
     * Overrides the natural (extended or collapsed) behavior
     */
    toggleOverride() {
        if (this.width > _admin_side_menu_constants__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenuConstants"].TABLET_BREAKPOINT &&
            this.override === false) {
            this.sideMenuOverride = 'side-menu-override-collapse';
            this.pMenuOverride =
                'p-menu-override-collapse p-menuitem-text-override-collapse';
            this.content.overridePadding();
        }
        else if (this.override === false) {
            this.sideMenuOverride = 'side-menu-override-expand';
            this.pMenuOverride =
                'p-menu-override-expand p-menuitem-text-override-expand';
        }
        else {
            this.sideMenuOverride = '';
            this.pMenuOverride = '';
            this.content.clearOverride();
        }
        this.override = !this.override;
        this.setChevronDirection();
    }
    /**
     * collapses the menu on small viewports
     */
    clearOverride() {
        if (this.width <= _admin_side_menu_constants__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenuConstants"].TABLET_BREAKPOINT) {
            this.sideMenuOverride = '';
            this.pMenuOverride = '';
            this.override = false;
            this.content.clearOverride();
        }
        this.setChevronDirection();
    }
    /**
     * Sets the icon direction depending on viewport and override state
     */
    setChevronDirection() {
        this.chevronDirection = 'left';
        if (this.isBigViewportAndOverride() ||
            this.isSmallViewportAndNotOverride()) {
            this.chevronDirection = 'right';
        }
        this.setCollapseMenuLabel();
    }
    /**
     * Sets the  label depending on viewport and override state
     */
    setCollapseMenuLabel() {
        this.collapseButtonLabel = '';
        if (this.isBigViewportAndNotOverride() ||
            this.isSmallViewportAndOverride()) {
            this.collapseButtonLabel = 'Collapse Menu';
        }
    }
    /**
     * Viewport size is big and menu is collapsed?
     */
    isBigViewportAndOverride() {
        return (this.width > _admin_side_menu_constants__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenuConstants"].TABLET_BREAKPOINT &&
            this.override === true);
    }
    /**
     * Viewport size is big and menu is expanded?
     */
    isBigViewportAndNotOverride() {
        return (this.width > _admin_side_menu_constants__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenuConstants"].TABLET_BREAKPOINT &&
            this.override === false);
    }
    /**
     * Viewport size is tablet/mobile and menu is expanded?
     */
    isSmallViewportAndOverride() {
        return (this.width <= _admin_side_menu_constants__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenuConstants"].TABLET_BREAKPOINT &&
            this.override === true);
    }
    /**
     * Viewport size is tablet/mobile and menu is collapsed?
     */
    isSmallViewportAndNotOverride() {
        return (this.width <= _admin_side_menu_constants__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenuConstants"].TABLET_BREAKPOINT &&
            this.override === false);
    }
}
AdminSideMenuComponent.ɵfac = function AdminSideMenuComponent_Factory(t) { return new (t || AdminSideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AdminSideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminSideMenuComponent, selectors: [["back-office-admin-side-menu"]], hostBindings: function AdminSideMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AdminSideMenuComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { content: "content" }, decls: 3, vars: 7, consts: [[3, "clickOutside"], [3, "model", "styleClass"], ["styleClass", "toggle-collapse p-button-sm", "iconPos", "left", 3, "label", "icon", "onClick"]], template: function AdminSideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AdminSideMenuComponent_Template_aside_clickOutside_0_listener($event) { return ctx.clickOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AdminSideMenuComponent_Template_p_button_onClick_2_listener() { return ctx.toggleOverride(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("backoffice-side-menu p-col-fixed ", ctx.sideMenuOverride, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("styleClass", ctx.pMenuOverride);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx.collapseButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("icon", "pi pi-chevron-", ctx.chevronDirection, "");
    } }, directives: [ng_click_outside__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"], primeng_menu__WEBPACK_IMPORTED_MODULE_3__["Menu"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["Button"]], styles: [".backoffice-side-menu[_ngcontent-%COMP%] {\n  transition: width 0.3s;\n  width: 220px;\n  position: fixed;\n  top: 80px;\n  height: 100%;\n  background: #222c39;\n  overflow: hidden;\n  z-index: 100;\n}\n\n[_nghost-%COMP%]     .p-menu {\n  transition: width 0.3s;\n  background: #222c39;\n  border: none;\n  width: 15.5rem;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon, [_nghost-%COMP%]     .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #29ccae;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-link .p-menuitem-text, [_nghost-%COMP%]     .p-menu .p-menuitem-link .p-menuitem-icon {\n  color: #ffffff;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-link-active .p-menuitem-text, [_nghost-%COMP%]     .p-menu .p-menuitem-link-active .p-menuitem-icon {\n  color: #29ccae;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-link-active .p-menuitem-icon, [_nghost-%COMP%]     .p-menu .p-menuitem-link .p-menuitem-icon {\n  font-size: 1.8em;\n}\n\n[_nghost-%COMP%]     .p-button {\n  min-width: 2.8rem;\n  background: #222c39;\n}\n\n[_nghost-%COMP%]     .p-button:hover, [_nghost-%COMP%]     .p-button:focus {\n  background: #ffffff;\n  color: #222c39;\n}\n\n[_nghost-%COMP%]     .toggle-collapse {\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n}\n\n[_nghost-%COMP%]     .toggle-collapse .p-button-icon {\n  font-size: 1.8em;\n}\n\n.side-menu-override-expand[_ngcontent-%COMP%] {\n  width: 220px !important;\n  left: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-menu.p-menu-override-expand {\n  width: 12.5rem;\n}\n\n[_nghost-%COMP%]     .p-menu.p-menu-override-expand .p-menuitem-text {\n  display: block;\n}\n\n\n\n.side-menu-override-collapse[_ngcontent-%COMP%] {\n  width: 80px !important;\n}\n\n[_nghost-%COMP%]     .p-menu.p-menu-override-collapse {\n  width: 5.2rem;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-link {\n  padding: 1rem 1rem 1rem 1.5rem;\n}\n\n[_nghost-%COMP%]     .p-menu.p-menu-override-collapse .p-menuitem-text {\n  display: none;\n}\n\n\n\n@media (max-width: 992px) {\n  [_nghost-%COMP%]     .p-menuitem-text {\n    display: none;\n  }\n\n  [_nghost-%COMP%]     .p-menu {\n    width: 5.2rem;\n  }\n\n  .backoffice-side-menu[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n}\n\n@media (max-width: 768px) {\n  .backoffice-side-menu[_ngcontent-%COMP%] {\n    left: -80px;\n  }\n\n  [_nghost-%COMP%]     .toggle-collapse {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvYWRtaW4tc2lkZS1tZW51L2FkbWluLXNpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0U7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFLRTs7RUFFRSxjQUFBO0FBRko7O0FBT0U7O0VBRUUsY0FBQTtBQUpKOztBQVNFOztFQUVFLGNBQUE7QUFOSjs7QUFXRTs7RUFFRSxnQkFBQTtBQVJKOztBQWFFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQVZKOztBQWVFOztFQUVFLG1CQUFBO0VBQ0EsY0FBQTtBQVpKOztBQWlCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQWRKOztBQW1CRTtFQUNFLGdCQUFBO0FBaEJKOztBQXFCQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFsQkY7O0FBc0JFO0VBQ0UsY0FBQTtBQW5CSjs7QUF3QkU7RUFDRSxjQUFBO0FBckJKOztBQXdCQSxVQUFBOztBQUVBO0VBQ0Usc0JBQUE7QUF0QkY7O0FBMEJFO0VBQ0UsYUFBQTtBQXZCSjs7QUE0QkU7RUFDRSw4QkFBQTtBQXpCSjs7QUE4QkU7RUFDRSxhQUFBO0FBM0JKOztBQStCQSxVQUFBOztBQUVBO0VBRUk7SUFDRSxhQUFBO0VBOUJKOztFQW1DRTtJQUNFLGFBQUE7RUFoQ0o7O0VBb0NBO0lBQ0UsV0FBQTtFQWpDRjtBQUNGOztBQW9DQTtFQUNFO0lBQ0UsV0FBQTtFQWxDRjs7RUFzQ0U7SUFDRSxhQUFBO0VBbkNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xheW91dC9hZG1pbi1zaWRlLW1lbnUvYWRtaW4tc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tvZmZpY2Utc2lkZS1tZW51IHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgd2lkdGg6IDIyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogODBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMjIyYzM5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC5wLW1lbnUge1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgYmFja2dyb3VuZDogIzIyMmMzOTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDE1LjVyZW07XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnAtbWVudSAucC1tZW51aXRlbS1saW5rOm5vdCgucC1kaXNhYmxlZCk6aG92ZXIgLnAtbWVudWl0ZW0taWNvbixcbiAgOjpuZy1kZWVwIC5wLW1lbnUgLnAtbWVudWl0ZW0tbGluazpub3QoLnAtZGlzYWJsZWQpOmhvdmVyIC5wLW1lbnVpdGVtLXRleHQge1xuICAgIGNvbG9yOiAjMjljY2FlO1xuICB9XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC5wLW1lbnUgLnAtbWVudWl0ZW0tbGluayAucC1tZW51aXRlbS10ZXh0LFxuICA6Om5nLWRlZXAgLnAtbWVudSAucC1tZW51aXRlbS1saW5rIC5wLW1lbnVpdGVtLWljb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC5wLW1lbnUgLnAtbWVudWl0ZW0tbGluay1hY3RpdmUgLnAtbWVudWl0ZW0tdGV4dCxcbiAgOjpuZy1kZWVwIC5wLW1lbnUgLnAtbWVudWl0ZW0tbGluay1hY3RpdmUgLnAtbWVudWl0ZW0taWNvbiB7XG4gICAgY29sb3I6ICMyOWNjYWU7XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnAtbWVudSAucC1tZW51aXRlbS1saW5rLWFjdGl2ZSAucC1tZW51aXRlbS1pY29uLFxuICA6Om5nLWRlZXAgLnAtbWVudSAucC1tZW51aXRlbS1saW5rIC5wLW1lbnVpdGVtLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnAtYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDIuOHJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyYzM5O1xuICB9XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC5wLWJ1dHRvbjpob3ZlcixcbiAgOjpuZy1kZWVwIC5wLWJ1dHRvbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzIyMmMzOTtcbiAgfVxufVxuXG46aG9zdCB7XG4gIDo6bmctZGVlcCAudG9nZ2xlLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnRvZ2dsZS1jb2xsYXBzZSAucC1idXR0b24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgfVxufVxuXG4vL292ZXJyaWRlIGNvbGxhcHNlZCBkZWZhdWx0IG9uIHNtYWxsIHZpZXdwb3J0c1xuLnNpZGUtbWVudS1vdmVycmlkZS1leHBhbmQge1xuICB3aWR0aDogMjIwcHggIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCB7XG4gIDo6bmctZGVlcCAucC1tZW51LnAtbWVudS1vdmVycmlkZS1leHBhbmQge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5cbjpob3N0IHtcbiAgOjpuZy1kZWVwIC5wLW1lbnUucC1tZW51LW92ZXJyaWRlLWV4cGFuZCAucC1tZW51aXRlbS10ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLyogLS0tLS0gKi9cbi8vb3ZlcnJpZGUgZXhwYW5kZWQgZGVmYXVsdCBvbiBiaWcgdmlld3BvcnRzXG4uc2lkZS1tZW51LW92ZXJyaWRlLWNvbGxhcHNlIHtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnAtbWVudS5wLW1lbnUtb3ZlcnJpZGUtY29sbGFwc2Uge1xuICAgIHdpZHRoOiA1LjJyZW07XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnAtbWVudSAucC1tZW51aXRlbS1saW5rIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxLjVyZW07XG4gIH1cbn1cblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnAtbWVudS5wLW1lbnUtb3ZlcnJpZGUtY29sbGFwc2UgLnAtbWVudWl0ZW0tdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vKiAtLS0tLSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgOmhvc3Qge1xuICAgIDo6bmctZGVlcCAucC1tZW51aXRlbS10ZXh0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgOmhvc3Qge1xuICAgIDo6bmctZGVlcCAucC1tZW51IHtcbiAgICAgIHdpZHRoOiA1LjJyZW07XG4gICAgfVxuICB9XG5cbiAgLmJhY2tvZmZpY2Utc2lkZS1tZW51IHtcbiAgICB3aWR0aDogODBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJhY2tvZmZpY2Utc2lkZS1tZW51IHtcbiAgICBsZWZ0OiAtODBweDtcbiAgfVxuXG4gIDpob3N0IHtcbiAgICA6Om5nLWRlZXAgLnRvZ2dsZS1jb2xsYXBzZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-admin-side-menu',
                templateUrl: './admin-side-menu.component.html',
                styleUrls: ['./admin-side-menu.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "xAKi":
/*!**********************************************!*\
  !*** ./src/app/core/guards/guards.module.ts ***!
  \**********************************************/
/*! exports provided: GuardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardsModule", function() { return GuardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class GuardsModule {
}
GuardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuardsModule });
GuardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuardsModule_Factory(t) { return new (t || GuardsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuardsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "yGOH":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/directives.module.ts ***!
  \********************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DirectivesModule {
}
DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map