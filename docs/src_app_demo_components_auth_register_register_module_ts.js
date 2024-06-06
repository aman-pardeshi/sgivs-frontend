"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_auth_register_register_module_ts"],{

/***/ 25696:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/auth/register/register-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterRoutingModule: () => (/* binding */ RegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ 28502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class RegisterRoutingModule {
  static #_ = this.ɵfac = function RegisterRoutingModule_Factory(t) {
    return new (t || RegisterRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: RegisterRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 28502:
/*!*********************************************************************!*\
  !*** ./src/app/demo/components/auth/register/register.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/password */ 73219);
/* harmony import */ var _layout_config_app_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layout/config/app.config.component */ 1111);









const _c0 = a0 => ({
  "p-input-filled": a0
});
const _c1 = () => ({
  paddingLeft: "2.5rem"
});
const _c2 = () => ["/"];
class RegisterComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  get filledInput() {
    return this.layoutService.config().inputStyle === 'filled';
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["ng-component"]],
    decls: 28,
    vars: 9,
    consts: [[1, "surface-ground", "h-screen", "w-screen", "flex", "align-items-center", "justify-content-center", 3, "ngClass"], [1, "surface-card", "py-7", "px-5", "sm:px-7", "shadow-2", "flex", "flex-column", "w-11", "sm:w-30rem", 2, "border-radius", "14px"], [1, "font-bold", "text-2xl", "mt-0", "mb-2"], [1, "text-color-secondary", "mb-4"], [1, "p-input-icon-left", "mb-4"], [1, "pi", "pi-user"], ["type", "text", "pInputText", "", "placeholder", "Email", 1, "w-full"], [1, "pi", "pi-key", "z-2"], ["id", "password", "placeholder", "Password", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "inputStyle", "toggleMask"], ["pButton", "", "pRipple", "", "label", "Sign Up", 1, "mb-4", 3, "routerLink"], [1, "text-color-secondary", "text-center", "mb-4"], [1, "flex", "gap-4", "align-items-center", "justify-content-center"], ["href", "https://www.facebook.com", 1, "inline-flex", "flex-shrink-0", "w-3rem", "h-3rem", "justify-content-center", "align-items-center", "surface-ground", "border-circle"], [1, "pi", "pi-facebook", "text-2xl", "text-color"], ["href", "https://www.twitter.com", 1, "inline-flex", "flex-shrink-0", "w-3rem", "h-3rem", "justify-content-center", "align-items-center", "surface-ground", "border-circle"], [1, "pi", "pi-twitter", "text-2xl", "text-color"], ["href", "https://www.google.com", 1, "inline-flex", "flex-shrink-0", "w-3rem", "h-3rem", "justify-content-center", "align-items-center", "surface-ground", "border-circle"], [1, "pi", "pi-google", "text-2xl", "text-color"], ["href", "https://www.github.com", 1, "inline-flex", "flex-shrink-0", "w-3rem", "h-3rem", "justify-content-center", "align-items-center", "surface-ground", "border-circle"], [1, "pi", "pi-github", "text-2xl", "text-color"], [3, "minimal"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "VERONA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Welcome to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Verona Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ", where the magic happens, sign up to continue.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5)(11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 7)(14, "p-password", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "or sign up with below");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "app-config", 20);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.filledInput));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1))("toggleMask", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minimal", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_password__WEBPACK_IMPORTED_MODULE_8__.Password, _layout_config_app_config_component__WEBPACK_IMPORTED_MODULE_1__.AppConfigComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3741:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/auth/register/register.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterModule: () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 25696);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ 28502);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/config/config.module */ 92913);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/password */ 73219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);









class RegisterModule {
  static #_ = this.ɵfac = function RegisterModule_Factory(t) {
    return new (t || RegisterModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: RegisterModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_password__WEBPACK_IMPORTED_MODULE_8__.PasswordModule, src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__.AppConfigModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegisterModule, {
    declarations: [_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_password__WEBPACK_IMPORTED_MODULE_8__.PasswordModule, src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__.AppConfigModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_auth_register_register_module_ts.js.map