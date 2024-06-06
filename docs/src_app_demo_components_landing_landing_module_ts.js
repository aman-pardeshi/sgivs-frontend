"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_landing_landing_module_ts"],{

/***/ 56935:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/landing/landing-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingRoutingModule: () => (/* binding */ LandingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 22218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class LandingRoutingModule {
  static #_ = this.ɵfac = function LandingRoutingModule_Factory(t) {
    return new (t || LandingRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: LandingRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 22218:
/*!**************************************************************!*\
  !*** ./src/app/demo/components/landing/landing.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/styleclass */ 30152);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _layout_config_app_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/config/app.config.component */ 1111);








const _c0 = () => ["/"];
const _c1 = () => ["/auth/login"];
class LandingComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  scrollTo(viewChild) {
    viewChild.scrollIntoView({
      behavior: 'smooth'
    });
  }
  get backgroundStyle() {
    let path = 'assets/demo/images/landing/';
    let image = this.layoutService.config().colorScheme === 'dark' ? 'line-effect-dark.svg' : 'line-effect.svg';
    return {
      'background-image': 'url(' + path + image + ')'
    };
  }
  get colorScheme() {
    return this.layoutService.config().colorScheme;
  }
  static #_ = this.ɵfac = function LandingComponent_Factory(t) {
    return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LandingComponent,
    selectors: [["ng-component"]],
    decls: 240,
    vars: 7,
    consts: [[1, "surface-ground", "min-h-screen", "w-screen"], [1, "landing-wrapper"], [1, "bg-no-repeat", "bg-cover", "bg-bottom", 3, "ngStyle"], [1, "flex", "align-items-center", "justify-content-between", "px-5", "sm:px-8", "py-6"], [3, "routerLink"], [1, "text-2xl", "font-bold", "text-color"], [1, "relative"], ["pRipple", "", "pStyleClass", "@next", "enterClass", "hidden", "enterActiveClass", "scalein", "leaveActiveClass", "fadeout", "leaveToClass", "hidden", 1, "cursor-pointer", "block", "lg:hidden", "select-none", "p-link", "w-3rem", "h-3rem", "inline-flex", "align-items-center", "justify-content-center", "border-circle", 3, "hideOnOutsideClick"], [1, "pi", "pi-bars", "text-4xl"], ["id", "landing-menu", 1, "hidden", "lg:block", "absolute", "right-0", "top-auto", "lg:static", "z-1", "shadow-2", "lg:shadow-none", "w-15rem", "lg:w-auto", "surface-overlay", "lg:surface-ground", "origin-top", "p-3", "lg:p-0", 2, "border-radius", "14px"], [1, "flex", "flex-column", "lg:flex-row", "m-0", "p-0", "list-none", "text-2xl", "lg:text-base"], ["pStyleClass", "#landing-menu", "leaveActiveClass", "fadeout", "leaveToClass", "hidden", 1, "block", "p-3", "cursor-pointer", "font-bold", "text-color-secondary", "hover:text-color", "transition-colors", "transition-duration-300", 3, "click"], [1, "block", "p-3", "cursor-pointer", "font-bold", "text-color-secondary", "hover:text-color", "transition-colors", "transition-duration-300", 3, "routerLink"], [1, "flex", "flex-column", "lg:flex-row", "gap-5", "align-items-center", "justify-content-between", "px-5", "sm:px-8", "py-8", "overflow-hidden"], [1, "flex-1", "fadein", "animation-duration-1000"], [1, "font-bold", "text-7xl", "mt-0", "mb-5"], [1, "text-3xl", "mb-5", "line-height-3"], ["pButton", "", "pRipple", "", "label", "TRY NOW"], [1, "flex-1"], ["alt", "intro image", "src", "assets/demo/images/landing/screen.jpg", 1, "fadeinright", "animation-ease-in-out", "animation-duration-1000", "w-full", "border-round-2xl", "shadow-2"], [1, "p-8"], ["stats", ""], [1, "flex", "flex-column", "align-items-center", "mb-7"], [1, "font-bold", "text-color-secondary", "text-2xl", "mb-3"], [1, "font-bold", "text-6xl", "my-0"], [1, "flex", "flex-column", "xl:flex-row", "justify-content-center", "gap-5"], [1, "surface-card", "text-center", "py-7", "px-5", "shadow-2", 2, "border-radius", "14px"], [1, "text-xl", "text-color-secondary", "mb-3"], [1, "mt-0", "mb-3", "font-bold", "text-4xl"], [1, "line-height-3", "mb-5", "text-color-secondary"], ["pButton", "", "icon", "pi pi-arrow-right", "label", "Get Started", "iconPos", "right", 1, "p-button-text"], [1, "mt-8", "xl:pt-8"], ["alt", "intro image", "src", "assets/demo/images/landing/feature-components.svg", 1, "w-9", "md:w-4", "xl:w-9"], [1, "flex", "flex-column", "md:flex-row", "xl:flex-column", "gap-5"], [1, "flex-1", "surface-card", "flex", "flex-column", "xl:flex-row", "xl:align-items-center", "justify-content-between", "py-7", "px-5", "shadow-2", "gap-5", 2, "border-radius", "14px"], [1, "flex-1", "flex-order-1", "xl:flex-order-0", "text-center", "xl:text-left"], ["alt", "intro image", "src", "assets/demo/images/landing/feature-blocks.svg", 1, "w-9"], [1, "text-center", "xl:text-right", "flex-1"], ["pButton", "", "icon", "pi pi-arrow-right", "label", "Browse Blocks", "iconPos", "right", 1, "p-button-text"], [1, "text-center", "xl:text-left", "flex-1"], ["pButton", "", "icon", "pi pi-arrow-right", "label", "Explore Icons", "iconPos", "right", 1, "p-button-text"], [1, "flex-1", "text-center", "xl:text-right"], ["alt", "intro image", "src", "assets/demo/images/landing/feature-icons.svg", 1, "w-9"], ["pButton", "", "icon", "pi pi-arrow-right", "label", "View Designer", "iconPos", "right", 1, "p-button-text"], ["alt", "intro image", "src", "assets/demo/images/landing/feature-designer.svg", 1, "w-9", "md:w-4", "xl:w-9"], [1, "px-5", "sm:px-8", "py-8", "surface-card"], ["features", ""], [1, "flex", "flex-column", "lg:flex-row", "justify-content-center", "gap-5"], [1, "bg-orange-50", "p-6", "flex", "align-items-center", "justify-content-center", "mb-5", 2, "border-radius", "14px", "border-top-left-radius", "5rem"], ["alt", "intro image", "src", "assets/demo/images/landing/icon-modern-responsive.svg", 1, "h-6rem", "sm:h-12rem"], [1, "mt-0", "mb-5", "font-bold", "text-4xl"], [1, "line-height-3", "text-color-secondary"], [1, "bg-green-50", "p-6", "flex", "align-items-center", "justify-content-center", "mb-5", 2, "border-radius", "14px"], ["alt", "intro image", "src", "assets/demo/images/landing/icon-modern-design.svg", 1, "h-6rem", "sm:h-12rem"], [1, "bg-red-50", "p-6", "flex", "align-items-center", "justify-content-center", "mb-5", 2, "border-radius", "14px", "border-bottom-right-radius", "5rem"], ["alt", "intro image", "src", "assets/demo/images/landing/icon-clean-code.svg", 1, "h-6rem", "sm:h-12rem"], [1, "px-5", "sm:px-8", "py-8", "surface-ground", "flex", "flex-wrap", "gap-5", "align-items-center", "justify-content-between"], [1, "text-4xl", "font-bold"], ["pButton", "", "pRipple", "", "label", "Join Now", 1, "p-button-raised"], [1, "px-5", "sm:px-8", "py-8", "surface-card", "flex", "flex-column", "lg:flex-row", "justify-content-center", "gap-5"], ["pricing", ""], [1, "shadow-2", "surface-card", "p-5", "text-center", "border-round-2xl"], ["alt", "intro image", "src", "assets/demo/images/landing/asset-free.svg", 1, "w-full", "sm:w-6", "lg:w-full", "block", "mx-auto", "mb-5"], [1, "text-2xl", "font-bold", "mb-3"], [1, "mb-5"], [1, "text-6xl", "font-bold"], [1, "text-xl", "text-color-secondary"], [1, "p-2", "mb-5", "font-bold", "block", "text-center", "cursor-pointer", "hover:surface-hover", "transition-colors", "transition-duration-300", 2, "border-radius", "2rem", "box-shadow", "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 24px 36px rgba(0, 0, 0, 0.04)"], [1, "list-none", "p-0", "m-0"], [1, "flex", "align-items-center"], [1, "pi", "pi-check-circle", "text-green-500", "text-xl", "mr-2"], ["alt", "intro image", "src", "assets/demo/images/landing/asset-premium.svg", 1, "w-full", "sm:w-6", "lg:w-full", "block", "mx-auto", "mb-5"], [1, "flex", "align-items-center", "mb-3"], ["alt", "intro image", "src", "assets/demo/images/landing/asset-enterprise.svg", 1, "w-full", "sm:w-6", "lg:w-full", "block", "mx-auto", "mb-5"], [1, "px-5", "sm:px-8", "py-8", "bg-gray-900", "flex", "flex-column", "md:flex-row", "md:align-items-start", "gap-5", 2, "border-top-left-radius", "14px", "border-top-right-radius", "14px"], [1, "flex", "align-items-center", "flex-1"], ["alt", "intro image", "src", "assets/demo/images/landing/logo-v.svg", 1, "w-4rem"], [1, "text-white", "text-5xl", "font-bold", "ml-2"], [1, "text-xl", "text-gray-600", "mb-4"], [1, "mb-3"], [1, "cursor-pointer", "text-white", "text-xl"], ["href", "https://www.primefaces.org/primeng", 1, "cursor-pointer", "text-white", "text-xl"], ["href", "https://www.primefaces.org/showcase", 1, "cursor-pointer", "text-white", "text-xl"], ["href", "https://www.primefaces.org/primereact", 1, "cursor-pointer", "text-white", "text-xl"], ["href", "https://www.primefaces.org/primevue", 1, "cursor-pointer", "text-white", "text-xl"], [1, "flex", "flex-1", "gap-4"], ["href", "http://github.com/primefaces"], [1, "pi", "pi-github", "text-white", "text-5xl"], ["href", "https://discord.gg/gzKFYnpmCY"], [1, "pi", "pi-discord", "text-white", "text-5xl"], ["href", "http://twitter/primeng"], [1, "pi", "pi-twitter", "text-white", "text-5xl"], [3, "minimal"]],
    template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "VERONA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "ul", 10)(12, "li")(13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scrollTo(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "STATS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li")(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](91);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scrollTo(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "FEATURES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](119);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scrollTo(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "PRICING");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li")(22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "PrimeTek Presents Verona");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Minimal layout inspired by a beautiful city");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20, 21)(35, "div", 22)(36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Ecosystem");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "All You Need Is Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 25)(41, "div", 26)(42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Easy to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Play like a toy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "More than ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "80");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " UI components.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 33)(55, "div", 34)(56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 37)(59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "PrimeBlocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Save your time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "PrimeBlocks have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "370+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " blocks: hero sections, pricing, footers and more....");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 34)(70, "div", 39)(71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "PrimeIcons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Enjoy 300+ Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "What you need in your app, you find any icon in PrimeIcons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 26)(81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Theme Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Design Your Own");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Limitless customization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 45, 46)(92, "div", 47)(93, "div")(94, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h3", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div")(101, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h3", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div")(108, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "h3", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Clean Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 56)(115, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Join the Prime Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 59, 60)(120, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 64)(125, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "$0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "TRY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "ul", 68)(132, "li", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Responsive Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 64)(141, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "$9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "TRY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "ul", 68)(148, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Responsive Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "10000 Push Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "li", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "50 Support Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 64)(165, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "$19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "TRY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "ul", 68)(172, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "Responsive Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Unlimited Push Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](181, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "1000 Support Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Free Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "li", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "Unlimited Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 74)(193, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Verona");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 18)(198, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "LATEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "ul", 68)(201, "li", 79)(202, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "Ultima");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "li", 79)(205, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Apollo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "li", 79)(208, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Sakai");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "li", 79)(211, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Diamond");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "li")(214, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "Poseidon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 18)(217, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "DEMOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "ul", 68)(220, "li", 79)(221, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "PrimeNG");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "li", 79)(224, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "PrimeFaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "li", 79)(227, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "PrimeReact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "li")(230, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "PrimeVue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 85)(233, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](234, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](238, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "app-config", 92);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.backgroundStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hideOnOutsideClick", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](217);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minimal", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_styleclass__WEBPACK_IMPORTED_MODULE_6__.StyleClass, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _layout_config_app_config_component__WEBPACK_IMPORTED_MODULE_1__.AppConfigComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 96010:
/*!***********************************************************!*\
  !*** ./src/app/demo/components/landing/landing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingModule: () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 56935);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ 22218);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/styleclass */ 30152);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/config/config.module */ 92913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);










class LandingModule {
  constructor(router) {
    this.router = router;
  }
  static #_ = this.ɵfac = function LandingModule_Factory(t) {
    return new (t || LandingModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: LandingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_7__.StyleClassModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__.AppConfigModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_7__.StyleClassModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, src_app_layout_config_config_module__WEBPACK_IMPORTED_MODULE_2__.AppConfigModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_landing_landing_module_ts.js.map