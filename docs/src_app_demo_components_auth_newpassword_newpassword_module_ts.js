"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_auth_newpassword_newpassword_module_ts"],{

/***/ 30887:
/*!********************************************************************************!*\
  !*** ./src/app/demo/components/auth/newpassword/newpassword-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPasswordRoutingModule: () => (/* binding */ NewPasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _newpassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newpassword.component */ 31640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class NewPasswordRoutingModule {
  static #_ = this.ɵfac = function NewPasswordRoutingModule_Factory(t) {
    return new (t || NewPasswordRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NewPasswordRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _newpassword_component__WEBPACK_IMPORTED_MODULE_0__.NewPasswordComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewPasswordRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 31640:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/auth/newpassword/newpassword.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPasswordComponent: () => (/* binding */ NewPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _layout_config_app_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layout/config/app.config.component */ 1111);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/password */ 73219);








const _c0 = a0 => ({
  "p-input-filled": a0
});
const _c1 = () => ({
  paddingLeft: "2.5rem"
});
const _c2 = () => ["/"];
class NewPasswordComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  get filledInput() {
    return this.layoutService.config().inputStyle === 'filled';
  }
  static #_ = this.ɵfac = function NewPasswordComponent_Factory(t) {
    return new (t || NewPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NewPasswordComponent,
    selectors: [["ng-component"]],
    decls: 14,
    vars: 13,
    consts: [[1, "surface-ground", "h-screen", "w-screen", "flex", "align-items-center", "justify-content-center", 3, "ngClass"], [1, "surface-card", "py-7", "px-5", "sm:px-7", "shadow-2", "flex", "flex-column", "w-11", "sm:w-30rem", 2, "border-radius", "14px"], [1, "font-bold", "text-2xl", "mt-0", "mb-2"], [1, "text-color-secondary", "mb-4"], [1, "p-input-icon-left", "mb-4"], [1, "pi", "pi-key", "z-2"], ["id", "password", "placeholder", "Password", "styleClass", "w-full", "inputStyleClass", "w-full ", 3, "inputStyle", "toggleMask"], ["id", "password", "placeholder", "Confirm Password", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "inputStyle", "toggleMask", "feedback"], ["pButton", "", "pRipple", "", "label", "Submit", 3, "routerLink"], [3, "minimal"]],
    template: function NewPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Enter your new password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 5)(8, "p-password", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5)(11, "p-password", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-config", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.filledInput));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1))("toggleMask", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1))("toggleMask", true)("feedback", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minimal", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _layout_config_app_config_component__WEBPACK_IMPORTED_MODULE_1__.AppConfigComponent, primeng_password__WEBPACK_IMPORTED_MODULE_7__.Password],
    encapsulation: 2
  });
}

/***/ }),

/***/ 68212:
/*!************************************************************************!*\
  !*** ./src/app/demo/components/auth/newpassword/newpassword.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPasswordModule: () => (/* binding */ NewPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _newpassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newpassword.component */ 31640);
/* harmony import */ var _newpassword_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newpassword-routing.module */ 30887);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/config/config.module */ 92913);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/password */ 73219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);










class NewPasswordModule {
  static #_ = this.ɵfac = function NewPasswordModule_Factory(t) {
    return new (t || NewPasswordModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: NewPasswordModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _newpassword_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__.AppConfigModule, primeng_password__WEBPACK_IMPORTED_MODULE_9__.PasswordModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewPasswordModule, {
    declarations: [_newpassword_component__WEBPACK_IMPORTED_MODULE_0__.NewPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _newpassword_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__.AppConfigModule, primeng_password__WEBPACK_IMPORTED_MODULE_9__.PasswordModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_auth_newpassword_newpassword_module_ts.js.map