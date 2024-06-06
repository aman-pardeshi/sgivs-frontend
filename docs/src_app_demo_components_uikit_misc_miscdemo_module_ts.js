"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_uikit_misc_miscdemo_module_ts"],{

/***/ 40776:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/misc/miscdemo-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiscDemoRoutingModule: () => (/* binding */ MiscDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _miscdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./miscdemo.component */ 69014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class MiscDemoRoutingModule {
  static #_ = this.ɵfac = function MiscDemoRoutingModule_Factory(t) {
    return new (t || MiscDemoRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MiscDemoRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _miscdemo_component__WEBPACK_IMPORTED_MODULE_0__.MiscDemoComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MiscDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 69014:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uikit/misc/miscdemo.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiscDemoComponent: () => (/* binding */ MiscDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/badge */ 67650);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/scrollpanel */ 18788);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tag */ 32455);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chip */ 23500);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/skeleton */ 32953);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scrolltop */ 71944);











const _c0 = () => ({
  "background-color": "#9c27b0",
  "color": "#ffffff"
});
const _c1 = () => ({
  "background-color": "#2196F3",
  "color": "#ffffff"
});
const _c2 = () => ({
  width: "250px",
  height: "200px"
});
class MiscDemoComponent {
  constructor() {
    this.value = 0;
  }
  ngOnInit() {
    this.interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 100;
        clearInterval(this.interval);
      }
    }, 2000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  static #_ = this.ɵfac = function MiscDemoComponent_Factory(t) {
    return new (t || MiscDemoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MiscDemoComponent,
    selectors: [["ng-component"]],
    decls: 140,
    vars: 27,
    consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "col"], [3, "value", "showValue"], [1, "col-12", "lg:col-6"], [1, "flex", "flex-wrap", "gap-2"], ["value", "2"], ["value", "8", "severity", "success"], ["value", "4", "severity", "info"], ["value", "12", "severity", "warning"], ["value", "3", "severity", "danger"], ["pBadge", "", "value", "2", 1, "pi", "pi-bell", "mr-4", "p-text-secondary", 2, "font-size", "2rem"], ["pBadge", "", "severity", "danger", 1, "pi", "pi-calendar", "mr-4", "p-text-secondary", 2, "font-size", "2rem", 3, "value"], ["pBadge", "", "severity", "danger", 1, "pi", "pi-envelope", "p-text-secondary", 2, "font-size", "2rem"], ["label", "Emails", "badge", "8"], ["label", "Messages", "icon", "pi pi-users", "styleClass", "p-button-warning", "badge", "8", "badgeClass", "p-badge-danger"], [1, "flex", "flex-wrap", "gap-2", "align-items-end"], ["value", "4", "size", "large", "severity", "warning"], ["value", "6", "size", "xlarge", "severity", "success"], ["styleClass", "mb-3"], ["image", "assets/demo/images/avatar/amyelsner.png", "size", "large", "shape", "circle"], ["image", "assets/demo/images/avatar/asiyajavayant.png", "size", "large", "shape", "circle"], ["image", "assets/demo/images/avatar/onyamalimba.png", "size", "large", "shape", "circle"], ["image", "assets/demo/images/avatar/ionibowcher.png", "size", "large", "shape", "circle"], ["image", "assets/demo/images/avatar/xuxuefeng.png", "size", "large", "shape", "circle"], ["label", "+2", "shape", "circle", "size", "large"], ["label", "P", "size", "xlarge", "shape", "circle"], ["label", "V", "size", "large", "shape", "circle"], ["label", "U", "shape", "circle"], ["icon", "pi pi-user", "pBadge", "", "value", "4", "severity", "success", "size", "xlarge"], ["target", "parent", "styleClass", "custom-scrolltop", "icon", "pi pi-arrow-up", 3, "threshold"], ["value", "Primary"], ["severity", "success", "value", "Success"], ["severity", "info", "value", "Info"], ["severity", "warning", "value", "Warning"], ["severity", "danger", "value", "Danger"], ["value", "Primary", 3, "rounded"], ["severity", "success", "value", "Success", 3, "rounded"], ["severity", "info", "value", "Info", 3, "rounded"], ["severity", "warning", "value", "Warning", 3, "rounded"], ["severity", "danger", "value", "Danger", 3, "rounded"], ["icon", "pi pi-user", "value", "Primary"], ["icon", "pi pi-check", "severity", "success", "value", "Success"], ["icon", "pi pi-info-circle", "severity", "info", "value", "Info"], ["con", "pi pi-exclamation-triangle", "severity", "warning", "value", "Warning"], ["icon", "pi pi-times", "severity", "danger", "value", "Danger"], [1, "flex", "flex-wrap", "align-items-center"], ["label", "Action", "styleClass", "m-1"], ["label", "Comedy", "styleClass", "m-1"], ["label", "Mystery", "styleClass", "m-1"], ["label", "Thriller", "styleClass", "m-1", 3, "removable"], ["label", "Apple", "icon", "pi pi-apple", "styleClass", "m-1"], ["label", "Facebook", "icon", "pi pi-facebook", "styleClass", "m-1"], ["label", "Google", "icon", "pi pi-google", "styleClass", "m-1"], ["label", "Microsoft", "icon", "pi pi-microsoft", "styleClass", "m-1", 3, "removable"], ["label", "Amy Elsner", "image", "assets/demo/images/avatar/amyelsner.png", "styleClass", "m-1"], ["label", "Asiya Javayant", "image", "assets/demo/images/avatar/asiyajavayant.png", "styleClass", "m-1"], ["label", "Onyama Limba", "image", "assets/demo/images/avatar/onyamalimba.png", "styleClass", "m-1"], ["label", "Xuxue Feng", "image", "assets/demo/images/avatar/xuxuefeng.png", "styleClass", "m-1", 3, "removable"], ["label", "Action", "styleClass", "m-1 custom-chip"], ["label", "Comedy", "styleClass", "m-1 custom-chip"], ["label", "Onyama Limba", "image", "assets/demo/images/avatar/onyamalimba.png", "styleClass", "m-1 custom-chip"], ["label", "Xuxue Feng", "image", "assets/demo/images/avatar/xuxuefeng.png", "styleClass", "m-1 custom-chip", 3, "removable"], [1, "border-round", "border-1", "surface-border", "p-4"], [1, "flex", "mb-3"], ["shape", "circle", "size", "4rem", "styleClass", "mr-2"], ["width", "10rem", "styleClass", "mb-2"], ["width", "5rem", "styleClass", "mb-2"], ["height", ".5rem"], ["width", "100%", "height", "150px"], [1, "flex", "justify-content-between", "mt-3"], ["width", "4rem", "height", "2rem"]],
    template: function MiscDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ProgressBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-progressBar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-progressBar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "div", 2)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p-badge", 7)(18, "p-badge", 8)(19, "p-badge", 9)(20, "p-badge", 10)(21, "p-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Positioned Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12)(26, "i", 13)(27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Inline Button Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p-button", 15)(32, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "p-badge", 7)(37, "p-badge", 18)(38, "p-badge", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2)(40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Avatar Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p-avatarGroup", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "p-avatar", 21)(46, "p-avatar", 22)(47, "p-avatar", 23)(48, "p-avatar", 24)(49, "p-avatar", 25)(50, "p-avatar", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Label - Circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "p-avatar", 27)(55, "p-avatar", 28)(56, "p-avatar", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Icon - Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "p-avatar", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2)(61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "ScrollTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p-scrollPanel")(64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "p-scrollTop", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5)(68, "div", 2)(69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "p-tag", 32)(75, "p-tag", 33)(76, "p-tag", 34)(77, "p-tag", 35)(78, "p-tag", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "p-tag", 37)(83, "p-tag", 38)(84, "p-tag", 39)(85, "p-tag", 40)(86, "p-tag", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "p-tag", 42)(91, "p-tag", 43)(92, "p-tag", 44)(93, "p-tag", 45)(94, "p-tag", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2)(96, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "p-chip", 48)(102, "p-chip", 49)(103, "p-chip", 50)(104, "p-chip", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "p-chip", 52)(109, "p-chip", 53)(110, "p-chip", 54)(111, "p-chip", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "p-chip", 56)(116, "p-chip", 57)(117, "p-chip", 58)(118, "p-chip", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "p-chip", 60)(123, "p-chip", 61)(124, "p-chip", 62)(125, "p-chip", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 2)(127, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Skeleton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 64)(130, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "p-skeleton", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "p-skeleton", 67)(134, "p-skeleton", 68)(135, "p-skeleton", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "p-skeleton", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "p-skeleton", 72)(139, "p-skeleton", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("showValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50)("showValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "10+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("threshold", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
      }
    },
    dependencies: [primeng_progressbar__WEBPACK_IMPORTED_MODULE_1__.ProgressBar, primeng_badge__WEBPACK_IMPORTED_MODULE_2__.Badge, primeng_badge__WEBPACK_IMPORTED_MODULE_2__.BadgeDirective, primeng_avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_4__.ScrollPanel, primeng_tag__WEBPACK_IMPORTED_MODULE_5__.Tag, primeng_chip__WEBPACK_IMPORTED_MODULE_6__.Chip, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__.Skeleton, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_9__.AvatarGroup, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_10__.ScrollTop],
    encapsulation: 2
  });
}

/***/ }),

/***/ 33658:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/misc/miscdemo.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiscDemoModule: () => (/* binding */ MiscDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _miscdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./miscdemo.component */ 69014);
/* harmony import */ var _miscdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miscdemo-routing.module */ 40776);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/badge */ 67650);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/scrollpanel */ 18788);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tag */ 32455);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chip */ 23500);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/skeleton */ 32953);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/scrolltop */ 71944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);














class MiscDemoModule {
  static #_ = this.ɵfac = function MiscDemoModule_Factory(t) {
    return new (t || MiscDemoModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MiscDemoModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _miscdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.MiscDemoRoutingModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__.ProgressBarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_5__.BadgeModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__.ScrollPanelModule, primeng_tag__WEBPACK_IMPORTED_MODULE_8__.TagModule, primeng_chip__WEBPACK_IMPORTED_MODULE_9__.ChipModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__.SkeletonModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_12__.AvatarGroupModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__.ScrollTopModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MiscDemoModule, {
    declarations: [_miscdemo_component__WEBPACK_IMPORTED_MODULE_0__.MiscDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _miscdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.MiscDemoRoutingModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__.ProgressBarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_5__.BadgeModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__.ScrollPanelModule, primeng_tag__WEBPACK_IMPORTED_MODULE_8__.TagModule, primeng_chip__WEBPACK_IMPORTED_MODULE_9__.ChipModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__.SkeletonModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_12__.AvatarGroupModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__.ScrollTopModule]
  });
})();

/***/ }),

/***/ 18788:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-scrollpanel.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollPanel: () => (/* binding */ ScrollPanel),
/* harmony export */   ScrollPanelModule: () => (/* binding */ ScrollPanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 64946);







/**
 * ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.
 * @group Components
 */
const _c0 = ["container"];
const _c1 = ["content"];
const _c2 = ["xBar"];
const _c3 = ["yBar"];
function ScrollPanel_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c4 = ["*"];
class ScrollPanel {
  platformId;
  el;
  zone;
  cd;
  document;
  renderer;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Step factor to scroll the content while pressing the arrow keys.
   * @group Props
   */
  step = 5;
  containerViewChild;
  contentViewChild;
  xBarViewChild;
  yBarViewChild;
  templates;
  scrollYRatio;
  scrollXRatio;
  timeoutFrame = fn => setTimeout(fn, 0);
  initialized = false;
  lastPageY;
  lastPageX;
  isXBarClicked = false;
  isYBarClicked = false;
  contentTemplate;
  lastScrollLeft = 0;
  lastScrollTop = 0;
  orientation = 'vertical';
  timer;
  windowResizeListener;
  contentScrollListener;
  mouseEnterListener;
  xBarMouseDownListener;
  yBarMouseDownListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  constructor(platformId, el, zone, cd, document, renderer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.cd = cd;
    this.document = document;
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.moveBar();
        this.moveBar = this.moveBar.bind(this);
        this.onXBarMouseDown = this.onXBarMouseDown.bind(this);
        this.onYBarMouseDown = this.onYBarMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
        this.windowResizeListener = this.renderer.listen(window, 'resize', this.moveBar);
        this.contentScrollListener = this.renderer.listen(this.contentViewChild.nativeElement, 'scroll', this.moveBar);
        this.mouseEnterListener = this.renderer.listen(this.contentViewChild.nativeElement, 'mouseenter', this.moveBar);
        this.xBarMouseDownListener = this.renderer.listen(this.xBarViewChild.nativeElement, 'mousedown', this.onXBarMouseDown);
        this.yBarMouseDownListener = this.renderer.listen(this.yBarViewChild.nativeElement, 'mousedown', this.onYBarMouseDown);
        this.calculateContainerHeight();
        this.initialized = true;
      });
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'content':
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  calculateContainerHeight() {
    let container = this.containerViewChild.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    const window = this.document.defaultView;
    let containerStyles = window.getComputedStyle(container),
      xBarStyles = window.getComputedStyle(xBar),
      pureContainerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(container) - parseInt(xBarStyles['height'], 10);
    if (containerStyles['max-height'] != 'none' && pureContainerHeight == 0) {
      if (content.offsetHeight + parseInt(xBarStyles['height'], 10) > parseInt(containerStyles['max-height'], 10)) {
        container.style.height = containerStyles['max-height'];
      } else {
        container.style.height = content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + 'px';
      }
    }
  }
  moveBar() {
    let container = this.containerViewChild.nativeElement;
    let content = this.contentViewChild.nativeElement;
    /* horizontal scroll */
    let xBar = this.xBarViewChild.nativeElement;
    let totalWidth = content.scrollWidth;
    let ownWidth = content.clientWidth;
    let bottom = (container.clientHeight - xBar.clientHeight) * -1;
    this.scrollXRatio = ownWidth / totalWidth;
    /* vertical scroll */
    let yBar = this.yBarViewChild.nativeElement;
    let totalHeight = content.scrollHeight;
    let ownHeight = content.clientHeight;
    let right = (container.clientWidth - yBar.clientWidth) * -1;
    this.scrollYRatio = ownHeight / totalHeight;
    this.requestAnimationFrame(() => {
      if (this.scrollXRatio >= 1) {
        xBar.setAttribute('data-p-scrollpanel-hidden', 'true');
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(xBar, 'p-scrollpanel-hidden');
      } else {
        xBar.setAttribute('data-p-scrollpanel-hidden', 'false');
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(xBar, 'p-scrollpanel-hidden');
        const xBarWidth = Math.max(this.scrollXRatio * 100, 10);
        const xBarLeft = content.scrollLeft * (100 - xBarWidth) / (totalWidth - ownWidth);
        xBar.style.cssText = 'width:' + xBarWidth + '%; left:' + xBarLeft + '%;bottom:' + bottom + 'px;';
      }
      if (this.scrollYRatio >= 1) {
        yBar.setAttribute('data-p-scrollpanel-hidden', 'true');
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(yBar, 'p-scrollpanel-hidden');
      } else {
        yBar.setAttribute('data-p-scrollpanel-hidden', 'false');
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(yBar, 'p-scrollpanel-hidden');
        const yBarHeight = Math.max(this.scrollYRatio * 100, 10);
        const yBarTop = content.scrollTop * (100 - yBarHeight) / (totalHeight - ownHeight);
        yBar.style.cssText = 'height:' + yBarHeight + '%; top: calc(' + yBarTop + '% - ' + xBar.clientHeight + 'px);right:' + right + 'px;';
      }
    });
    this.cd.markForCheck();
  }
  onScroll(event) {
    if (this.lastScrollLeft !== event.target.scrollLeft) {
      this.lastScrollLeft = event.target.scrollLeft;
      this.orientation = 'horizontal';
    } else if (this.lastScrollTop !== event.target.scrollTop) {
      this.lastScrollTop = event.target.scrollTop;
      this.orientation = 'vertical';
    }
    this.moveBar();
  }
  onKeyDown(event) {
    if (this.orientation === 'vertical') {
      switch (event.code) {
        case 'ArrowDown':
          {
            this.setTimer('scrollTop', this.step);
            event.preventDefault();
            break;
          }
        case 'ArrowUp':
          {
            this.setTimer('scrollTop', this.step * -1);
            event.preventDefault();
            break;
          }
        case 'ArrowLeft':
        case 'ArrowRight':
          {
            event.preventDefault();
            break;
          }
        default:
          //no op
          break;
      }
    } else if (this.orientation === 'horizontal') {
      switch (event.code) {
        case 'ArrowRight':
          {
            this.setTimer('scrollLeft', this.step);
            event.preventDefault();
            break;
          }
        case 'ArrowLeft':
          {
            this.setTimer('scrollLeft', this.step * -1);
            event.preventDefault();
            break;
          }
        case 'ArrowDown':
        case 'ArrowUp':
          {
            event.preventDefault();
            break;
          }
        default:
          //no op
          break;
      }
    }
  }
  onKeyUp() {
    this.clearTimer();
  }
  repeat(bar, step) {
    this.contentViewChild.nativeElement[bar] += step;
    this.moveBar();
  }
  setTimer(bar, step) {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(bar, step);
    }, 40);
  }
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  bindDocumentMouseListeners() {
    if (!this.documentMouseMoveListener) {
      this.documentMouseMoveListener = e => {
        this.onDocumentMouseMove(e);
      };
      this.document.addEventListener('mousemove', this.documentMouseMoveListener);
    }
    if (!this.documentMouseUpListener) {
      this.documentMouseUpListener = e => {
        this.onDocumentMouseUp(e);
      };
      this.document.addEventListener('mouseup', this.documentMouseUpListener);
    }
  }
  unbindDocumentMouseListeners() {
    if (this.documentMouseMoveListener) {
      this.document.removeEventListener('mousemove', this.documentMouseMoveListener);
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      document.removeEventListener('mouseup', this.documentMouseUpListener);
      this.documentMouseUpListener = null;
    }
  }
  onYBarMouseDown(e) {
    this.isYBarClicked = true;
    this.yBarViewChild.nativeElement.focus();
    this.lastPageY = e.pageY;
    this.yBarViewChild.nativeElement.setAttribute('data-p-scrollpanel-grabbed', 'true');
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.yBarViewChild.nativeElement, 'p-scrollpanel-grabbed');
    this.document.body.setAttribute('data-p-scrollpanel-grabbed', 'true');
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.document.body, 'p-scrollpanel-grabbed');
    this.bindDocumentMouseListeners();
    e.preventDefault();
  }
  onXBarMouseDown(e) {
    this.isXBarClicked = true;
    this.xBarViewChild.nativeElement.focus();
    this.lastPageX = e.pageX;
    this.xBarViewChild.nativeElement.setAttribute('data-p-scrollpanel-grabbed', 'false');
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.xBarViewChild.nativeElement, 'p-scrollpanel-grabbed');
    this.document.body.setAttribute('data-p-scrollpanel-grabbed', 'false');
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.document.body, 'p-scrollpanel-grabbed');
    this.bindDocumentMouseListeners();
    e.preventDefault();
  }
  onDocumentMouseMove(e) {
    if (this.isXBarClicked) {
      this.onMouseMoveForXBar(e);
    } else if (this.isYBarClicked) {
      this.onMouseMoveForYBar(e);
    } else {
      this.onMouseMoveForXBar(e);
      this.onMouseMoveForYBar(e);
    }
  }
  onMouseMoveForXBar(e) {
    let deltaX = e.pageX - this.lastPageX;
    this.lastPageX = e.pageX;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollLeft += deltaX / this.scrollXRatio;
    });
  }
  onMouseMoveForYBar(e) {
    let deltaY = e.pageY - this.lastPageY;
    this.lastPageY = e.pageY;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollTop += deltaY / this.scrollYRatio;
    });
  }
  /**
   * Scrolls the top location to the given value.
   * @param scrollTop
   * @group Method
   */
  scrollTop(scrollTop) {
    let scrollableHeight = this.contentViewChild.nativeElement.scrollHeight - this.contentViewChild.nativeElement.clientHeight;
    scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0;
    this.contentViewChild.nativeElement.scrollTop = scrollTop;
  }
  onFocus(event) {
    if (this.xBarViewChild.nativeElement.isSameNode(event.target)) {
      this.orientation = 'horizontal';
    } else if (this.yBarViewChild.nativeElement.isSameNode(event.target)) {
      this.orientation = 'vertical';
    }
  }
  onBlur() {
    if (this.orientation === 'horizontal') {
      this.orientation = 'vertical';
    }
  }
  onDocumentMouseUp(e) {
    this.yBarViewChild.nativeElement.setAttribute('data-p-scrollpanel-grabbed', 'false');
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.yBarViewChild.nativeElement, 'p-scrollpanel-grabbed');
    this.xBarViewChild.nativeElement.setAttribute('data-p-scrollpanel-grabbed', 'false');
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.xBarViewChild.nativeElement, 'p-scrollpanel-grabbed');
    this.document.body.setAttribute('data-p-scrollpanel-grabbed', 'false');
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.document.body, 'p-scrollpanel-grabbed');
    this.unbindDocumentMouseListeners();
    this.isXBarClicked = false;
    this.isYBarClicked = false;
  }
  requestAnimationFrame(f) {
    let frame = window.requestAnimationFrame || this.timeoutFrame;
    frame(f);
  }
  unbindListeners() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
    if (this.contentScrollListener) {
      this.contentScrollListener();
      this.contentScrollListener = null;
    }
    if (this.mouseEnterListener) {
      this.mouseEnterListener();
      this.mouseEnterListener = null;
    }
    if (this.xBarMouseDownListener) {
      this.xBarMouseDownListener();
      this.xBarMouseDownListener = null;
    }
    if (this.yBarMouseDownListener) {
      this.yBarMouseDownListener();
      this.yBarMouseDownListener = null;
    }
  }
  ngOnDestroy() {
    if (this.initialized) {
      this.unbindListeners();
    }
  }
  /**
   * Refreshes the position and size of the scrollbar.
   * @group Method
   */
  refresh() {
    this.moveBar();
  }
  static ɵfac = function ScrollPanel_Factory(t) {
    return new (t || ScrollPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScrollPanel,
    selectors: [["p-scrollPanel"]],
    contentQueries: function ScrollPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ScrollPanel_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.xBarViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yBarViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      step: "step"
    },
    ngContentSelectors: _c4,
    decls: 11,
    vars: 14,
    consts: [[3, "ngClass", "ngStyle"], ["container", ""], [1, "p-scrollpanel-wrapper"], [1, "p-scrollpanel-content", 3, "mouseenter", "scroll"], ["content", ""], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "scrollbar", 1, "p-scrollpanel-bar", "p-scrollpanel-bar-x", 3, "mousedown", "keydown", "keyup", "focus", "blur"], ["xBar", ""], ["tabindex", "0", "role", "scrollbar", 1, "p-scrollpanel-bar", "p-scrollpanel-bar-y", 3, "mousedown", "keydown", "keyup", "focus"], ["yBar", ""]],
    template: function ScrollPanel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ScrollPanel_Template_div_mouseenter_3_listener() {
          return ctx.moveBar();
        })("scroll", function ScrollPanel_Template_div_scroll_3_listener($event) {
          return ctx.onScroll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScrollPanel_ng_container_6_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ScrollPanel_Template_div_mousedown_7_listener($event) {
          return ctx.onXBarMouseDown($event);
        })("keydown", function ScrollPanel_Template_div_keydown_7_listener($event) {
          return ctx.onKeyDown($event);
        })("keyup", function ScrollPanel_Template_div_keyup_7_listener() {
          return ctx.onKeyUp();
        })("focus", function ScrollPanel_Template_div_focus_7_listener($event) {
          return ctx.onFocus($event);
        })("blur", function ScrollPanel_Template_div_blur_7_listener() {
          return ctx.onBlur();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ScrollPanel_Template_div_mousedown_9_listener($event) {
          return ctx.onYBarMouseDown($event);
        })("keydown", function ScrollPanel_Template_div_keydown_9_listener($event) {
          return ctx.onKeyDown($event);
        })("keyup", function ScrollPanel_Template_div_keyup_9_listener() {
          return ctx.onKeyUp();
        })("focus", function ScrollPanel_Template_div_focus_9_listener($event) {
          return ctx.onFocus($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-scrollpanel p-component")("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "scrollpanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", "horizontal")("aria-valuenow", ctx.lastScrollLeft)("data-pc-section", "barx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", "vertical")("aria-valuenow", ctx.lastScrollTop)("data-pc-section", "bary");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["@layer primeng{.p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-scrollPanel',
      template: `
        <div #container [ngClass]="'p-scrollpanel p-component'" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'scrollpanel'">
            <div class="p-scrollpanel-wrapper" [attr.data-pc-section]="'wrapper'">
                <div #content class="p-scrollpanel-content" [attr.data-pc-section]="'content'" (mouseenter)="moveBar()" (scroll)="onScroll($event)">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
            </div>
            <div
                #xBar
                class="p-scrollpanel-bar p-scrollpanel-bar-x"
                tabindex="0"
                role="scrollbar"
                [attr.aria-orientation]="'horizontal'"
                [attr.aria-valuenow]="lastScrollLeft"
                [attr.data-pc-section]="'barx'"
                (mousedown)="onXBarMouseDown($event)"
                (keydown)="onKeyDown($event)"
                (keyup)="onKeyUp()"
                (focus)="onFocus($event)"
                (blur)="onBlur()"
            ></div>
            <div
                #yBar
                class="p-scrollpanel-bar p-scrollpanel-bar-y"
                tabindex="0"
                role="scrollbar"
                [attr.aria-orientation]="'vertical'"
                [attr.aria-valuenow]="lastScrollTop"
                [attr.data-pc-section]="'bary'"
                (mousedown)="onYBarMouseDown($event)"
                (keydown)="onKeyDown($event)"
                (keyup)="onKeyUp()"
                (focus)="onFocus($event)"
            ></div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}}\n"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }], {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    contentViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content']
    }],
    xBarViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['xBar']
    }],
    yBarViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['yBar']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate]
    }]
  });
})();
class ScrollPanelModule {
  static ɵfac = function ScrollPanelModule_Factory(t) {
    return new (t || ScrollPanelModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ScrollPanelModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollPanelModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [ScrollPanel],
      declarations: [ScrollPanel]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 71944:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-scrolltop.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollTop: () => (/* binding */ ScrollTop),
/* harmony export */   ScrollTopModule: () => (/* binding */ ScrollTopModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 64946);
/* harmony import */ var primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/chevronup */ 4210);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 15861);











/**
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 * @group Components
 */
function ScrollTop_button_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-scrolltop-icon");
  }
}
const _c0 = () => ({
  "font-size": "1rem",
  scale: "1.5"
});
function ScrollTop_button_0_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-scrolltop-icon")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
  }
}
function ScrollTop_button_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScrollTop_button_0_ng_container_1_span_1_Template, 1, 3, "span", 4)(2, ScrollTop_button_0_ng_container_1_ChevronUpIcon_2_Template, 1, 3, "ChevronUpIcon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.icon);
  }
}
function ScrollTop_button_0_2_ng_template_0_Template(rf, ctx) {}
function ScrollTop_button_0_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScrollTop_button_0_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.icon);
  }
}
const _c1 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c2 = a1 => ({
  value: "open",
  params: a1
});
const _c3 = () => ({
  styleClass: "p-scrolltop-icon"
});
function ScrollTop_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function ScrollTop_button_0_Template_button_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onEnter($event));
    })("@animation.done", function ScrollTop_button_0_Template_button_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onLeave($event));
    })("click", function ScrollTop_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScrollTop_button_0_ng_container_1_Template, 3, 2, "ng-container", 2)(2, ScrollTop_button_0_2_Template, 1, 1, null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.buttonAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.iconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
  }
}
class ScrollTop {
  document;
  platformId;
  renderer;
  el;
  cd;
  config;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Target of the ScrollTop.
   * @group Props
   */
  target = 'window';
  /**
   * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
   * @group Props
   */
  threshold = 400;
  /**
   * Name of the icon or JSX.Element for icon.
   * @group Props
   */
  icon;
  /**
   * Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.
   * @group Props
   */
  behavior = 'smooth';
  /**
   * A string value used to determine the display transition options.
   * @group Props
   */
  showTransitionOptions = '.15s';
  /**
   * A string value used to determine the hiding transition options.
   * @group Props
   */
  hideTransitionOptions = '.15s';
  /**
   * Establishes a string value that labels the scroll-top button.
   * @group Props
   */
  buttonAriaLabel;
  templates;
  iconTemplate;
  documentScrollListener;
  parentScrollListener;
  visible = false;
  overlay;
  window;
  constructor(document, platformId, renderer, el, cd, config) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.cd = cd;
    this.config = config;
    this.window = this.document.defaultView;
  }
  ngOnInit() {
    if (this.target === 'window') this.bindDocumentScrollListener();else if (this.target === 'parent') this.bindParentScrollListener();
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'icon':
          this.iconTemplate = item.template;
          break;
      }
    });
  }
  onClick() {
    let scrollElement = this.target === 'window' ? this.window : this.el.nativeElement.parentElement;
    scrollElement.scroll({
      top: 0,
      behavior: this.behavior
    });
  }
  onEnter(event) {
    switch (event.toState) {
      case 'open':
        this.overlay = event.element;
        primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.set('overlay', this.overlay, this.config.zIndex.overlay);
        break;
      case 'void':
        this.overlay = null;
        break;
    }
  }
  onLeave(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.clear(event.element);
        break;
    }
  }
  checkVisibility(scrollY) {
    if (scrollY > this.threshold) this.visible = true;else this.visible = false;
    this.cd.markForCheck();
  }
  bindParentScrollListener() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      this.parentScrollListener = this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', () => {
        this.checkVisibility(this.el.nativeElement.parentElement.scrollTop);
      });
    }
  }
  bindDocumentScrollListener() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      this.documentScrollListener = this.renderer.listen(this.window, 'scroll', () => {
        this.checkVisibility(primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWindowScrollTop());
      });
    }
  }
  unbindParentScrollListener() {
    if (this.parentScrollListener) {
      this.parentScrollListener();
      this.parentScrollListener = null;
    }
  }
  unbindDocumentScrollListener() {
    if (this.documentScrollListener) {
      this.documentScrollListener();
      this.documentScrollListener = null;
    }
  }
  containerClass() {
    return {
      'p-scrolltop p-link p-component': true,
      'p-scrolltop-sticky': this.target !== 'window'
    };
  }
  ngOnDestroy() {
    if (this.target === 'window') this.unbindDocumentScrollListener();else if (this.target === 'parent') this.unbindParentScrollListener();
    if (this.overlay) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.clear(this.overlay);
      this.overlay = null;
    }
  }
  static ɵfac = function ScrollTop_Factory(t) {
    return new (t || ScrollTop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScrollTop,
    selectors: [["p-scrollTop"]],
    contentQueries: function ScrollTop_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      target: "target",
      threshold: "threshold",
      icon: "icon",
      behavior: "behavior",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      buttonAriaLabel: "buttonAriaLabel"
    },
    decls: 1,
    vars: 1,
    consts: [["type", "button", 3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], ["type", "button", 3, "ngClass", "ngStyle", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", "ngStyle", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", "ngStyle"], [3, "ngIf"]],
    template: function ScrollTop_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScrollTop_button_0_Template, 3, 15, "button", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon],
    styles: ["@layer primeng{.p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}}\n"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{showTransitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('open => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{hideTransitionParams}}'))])]
    },
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-scrollTop',
      template: `
        <button
            *ngIf="visible"
            [@animation]="{ value: 'open', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (@animation.start)="onEnter($event)"
            (@animation.done)="onLeave($event)"
            [attr.aria-label]="buttonAriaLabel"
            [ngClass]="containerClass()"
            (click)="onClick()"
            [class]="styleClass"
            [ngStyle]="style"
            type="button"
        >
            <ng-container *ngIf="!iconTemplate">
                <span *ngIf="icon" [class]="icon" [ngClass]="'p-scrolltop-icon'"></span>
                <ChevronUpIcon *ngIf="!icon" [styleClass]="'p-scrolltop-icon'" [ngStyle]="{ 'font-size': '1rem', scale: '1.5' }" />
            </ng-container>
            <ng-template [ngIf]="!icon" *ngTemplateOutlet="iconTemplate; context: { styleClass: 'p-scrolltop-icon' }"></ng-template>
        </button>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{showTransitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('open => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{hideTransitionParams}}'))])],
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
  }], {
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    threshold: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    behavior: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    buttonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }]
  });
})();
class ScrollTopModule {
  static ɵfac = function ScrollTopModule_Factory(t) {
    return new (t || ScrollTopModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ScrollTopModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
      exports: [ScrollTop, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
      declarations: [ScrollTop]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 32953:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-skeleton.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skeleton: () => (/* binding */ Skeleton),
/* harmony export */   SkeletonModule: () => (/* binding */ SkeletonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);





/**
 * Skeleton is a placeholder to display instead of the actual content.
 * @group Components
 */
class Skeleton {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Shape of the element.
   * @group Props
   */
  shape = 'rectangle';
  /**
   * Type of the animation.
   * @gruop Props
   */
  animation = 'wave';
  /**
   * Border radius of the element, defaults to value from theme.
   * @group Props
   */
  borderRadius;
  /**
   * Size of the Circle or Square.
   * @group Props
   */
  size;
  /**
   * Width of the element.
   * @group Props
   */
  width = '100%';
  /**
   * Height of the element.
   * @group Props
   */
  height = '1rem';
  containerClass() {
    return {
      'p-skeleton p-component': true,
      'p-skeleton-circle': this.shape === 'circle',
      'p-skeleton-none': this.animation === 'none'
    };
  }
  containerStyle() {
    if (this.size) return {
      ...this.style,
      width: this.size,
      height: this.size,
      borderRadius: this.borderRadius
    };else return {
      ...this.style,
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius
    };
  }
  static ɵfac = function Skeleton_Factory(t) {
    return new (t || Skeleton)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Skeleton,
    selectors: [["p-skeleton"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      shape: "shape",
      animation: "animation",
      borderRadius: "borderRadius",
      size: "size",
      width: "width",
      height: "height"
    },
    decls: 1,
    vars: 7,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function Skeleton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "skeleton")("aria-hidden", true)("data-pc-section", "root");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Skeleton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-skeleton',
      template: ` <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle()" [attr.data-pc-name]="'skeleton'" [attr.aria-hidden]="true" [attr.data-pc-section]="'root'"></div> `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"]
    }]
  }], null, {
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    borderRadius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class SkeletonModule {
  static ɵfac = function SkeletonModule_Factory(t) {
    return new (t || SkeletonModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: SkeletonModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkeletonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [Skeleton],
      declarations: [Skeleton]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_misc_miscdemo_module_ts.js.map