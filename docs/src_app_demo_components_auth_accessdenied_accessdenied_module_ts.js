"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_auth_accessdenied_accessdenied_module_ts"],{

/***/ 12939:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/auth/accessdenied/accessdenied-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessdeniedRoutingModule: () => (/* binding */ AccessdeniedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _accessdenied_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessdenied.component */ 49420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class AccessdeniedRoutingModule {
  static #_ = this.ɵfac = function AccessdeniedRoutingModule_Factory(t) {
    return new (t || AccessdeniedRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AccessdeniedRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _accessdenied_component__WEBPACK_IMPORTED_MODULE_0__.AccessdeniedComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccessdeniedRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 49420:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/components/auth/accessdenied/accessdenied.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessdeniedComponent: () => (/* binding */ AccessdeniedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var _layout_config_app_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layout/config/app.config.component */ 1111);




const _c0 = () => ["/"];
class AccessdeniedComponent {
  static #_ = this.ɵfac = function AccessdeniedComponent_Factory(t) {
    return new (t || AccessdeniedComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AccessdeniedComponent,
    selectors: [["ng-component"]],
    decls: 9,
    vars: 3,
    consts: [[1, "surface-ground", "h-screen", "w-screen", "flex", "align-items-center", "justify-content-center"], [1, "surface-card", "py-7", "px-5", "sm:px-7", "shadow-2", "flex", "flex-column", "w-11", "sm:w-30rem", 2, "border-radius", "14px"], [1, "font-bold", "text-2xl", "mt-0", "mb-2"], [1, "text-color-secondary", "mb-4"], ["src", "assets/demo/images/auth/access-denied.svg", "alt", "access-denied", 1, "mb-4", "align-self-center"], ["pButton", "", "pRipple", "", "label", "Go to Dashboard", 3, "routerLink"], [3, "minimal"]],
    template: function AccessdeniedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ACCESS DENIED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "You are not authorized to access this resource..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-config", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minimal", true);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, _layout_config_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 99362:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/auth/accessdenied/accessdenied.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessdeniedModule: () => (/* binding */ AccessdeniedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _accessdenied_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessdenied-routing.module */ 12939);
/* harmony import */ var _accessdenied_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessdenied.component */ 49420);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/config/config.module */ 92913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);






class AccessdeniedModule {
  static #_ = this.ɵfac = function AccessdeniedModule_Factory(t) {
    return new (t || AccessdeniedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AccessdeniedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _accessdenied_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessdeniedRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__.AppConfigModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AccessdeniedModule, {
    declarations: [_accessdenied_component__WEBPACK_IMPORTED_MODULE_1__.AccessdeniedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _accessdenied_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessdeniedRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__.AppConfigModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_auth_accessdenied_accessdenied_module_ts.js.map