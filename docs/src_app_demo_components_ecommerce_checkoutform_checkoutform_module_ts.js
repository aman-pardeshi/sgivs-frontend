"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_ecommerce_checkoutform_checkoutform_module_ts"],{

/***/ 92603:
/*!***************************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/checkoutform/checkoutform-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutFormRoutingModule: () => (/* binding */ CheckoutFormRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _checkoutform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkoutform.component */ 81202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class CheckoutFormRoutingModule {
  static #_ = this.ɵfac = function CheckoutFormRoutingModule_Factory(t) {
    return new (t || CheckoutFormRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CheckoutFormRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _checkoutform_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutFormComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckoutFormRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 81202:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/checkoutform/checkoutform.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutFormComponent: () => (/* binding */ CheckoutFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ 11580);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputnumber */ 65362);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputgroup */ 86763);









class CheckoutFormComponent {
  constructor() {
    this.quantities = [1, 1, 1];
    this.value = '';
    this.checked = true;
    this.checked2 = true;
    this.cities = [{
      name: 'USA / New York',
      code: 'NY'
    }, {
      name: 'Italy / Rome',
      code: 'RM'
    }, {
      name: 'United Kingdoom / London',
      code: 'LDN'
    }, {
      name: 'Turkey / Istanbul',
      code: 'IST'
    }, {
      name: 'France / Paris',
      code: 'PRS'
    }];
    this.selectedCity = '';
  }
  static #_ = this.ɵfac = function CheckoutFormComponent_Factory(t) {
    return new (t || CheckoutFormComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CheckoutFormComponent,
    selectors: [["ng-component"]],
    decls: 86,
    vars: 12,
    consts: [[1, "card"], [1, "grid", "grid-nogutter"], [1, "col-12", "px-4", "mt-4", "md:mt-6", "md:px-6"], [1, "text-900", "block", "font-bold", "text-xl"], [1, "col-12", "lg:col-6", "h-full", "px-4", "py-4", "md:px-6"], [1, "flex", "list-none", "flex-wrap", "p-0", "mb-6"], [1, "flex", "align-items-center", "text-primary", "mr-2"], [1, "pi", "pi-chevron-right", "text-500", "text-xs", "ml-2"], [1, "flex", "align-items-center", "text-500", "mr-2"], [1, "grid", "formgrid"], [1, "col-12", "field", "mb-6"], [1, "text-900", "text-2xl", "block", "font-medium", "mb-5"], ["id", "email", "placeholder", "Email", "type", "text", 1, "p-inputtext", "w-full", "mb-4"], ["name", "checkbox-1", "label", "Email me with news and offers", "inputId", "id", 1, "text-900", 3, "ngModel", "binary", "ngModelChange"], [1, "col-12", "field", "mb-4"], ["placeholder", "Country / City", "optionLabel", "name", "styleClass", "w-full", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "col-12", "lg:col-6", "field", "mb-4"], ["id", "name", "placeholder", "Name", "type", "text", 1, "p-inputtext", "w-full"], ["id", "lastname", "placeholder", "Last Name", "type", "text", 1, "p-inputtext", "w-full"], ["id", "address", "placeholder", "Address", "type", "text", 1, "p-inputtext", "w-full"], ["id", "address2", "placeholder", "Apartment, suite, etc", "type", "text", 1, "p-inputtext", "w-full"], ["id", "pc", "placeholder", "Postal Code", "type", "text", 1, "p-inputtext", "w-full"], ["id", "city", "placeholder", "City", "type", "text", 1, "p-inputtext", "w-full"], ["name", "checkbox-1", "label", "Save for next purchase", "inputId", "id", 1, "text-900", 3, "ngModel", "binary", "ngModelChange"], [1, "col-12", "flex", "flex-column", "lg:flex-row", "justify-content-center", "align-items-center", "lg:justify-content-end", "my-6"], ["pButton", "", "pRipple", "", "label", "Return to Cart", "icon", "pi pi-fw pi-arrow-left", 1, "p-button-secondary", "p-button-outlined", "mt-3", "lg:mt-0", "w-full", "lg:w-auto", "flex-order-2", "lg:flex-order-1", "lg:mr-4"], ["pButton", "", "pRipple", "", "label", "Continue to Shipping", "icon", "pi pi-fw pi-check", 1, "p-button-primary", "w-full", "lg:w-auto", "flex-order-1", "lg:flex-order-2"], [1, "col-12", "lg:col-6", "px-4", "py-4", "md:px-6"], [1, "pb-3", "surface-border"], [1, "text-900", "font-medium", "text-xl"], [1, "flex", "flex-column", "lg:flex-row", "flex-wrap", "lg:align-items-center", "py-2", "mt-3", "surface-border"], ["src", "assets/demo/images/ecommerce/shop/shop-1.png", "alt", "product", 1, "w-8rem", "h-8rem", "flex-shrink-0", "mb-3"], [1, "flex-auto", "lg:ml-3"], [1, "flex", "align-items-center", "justify-content-between", "mb-3"], [1, "text-900", "font-bold"], [1, "text-600", "text-sm", "mb-3"], [1, "flex", "flex-auto", "justify-content-between", "align-items-center"], ["buttonLayout", "horizontal", "spinnerMode", "horizontal", "inputStyleClass", "w-2rem text-center py-2 px-1 border-transparent outline-none shadow-none", "decrementButtonClass", "p-button-text text-600 hover:text-primary py-1 px-1", "incrementButtonClass", "p-button-text text-600 hover:text-primary py-1 px-1", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", 1, "border-1", "surface-border", "border-round", 3, "showButtons", "min", "ngModel", "ngModelChange"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-text", "p-button-rounded"], [1, "py-2", "mt-3", "surface-border"], [1, "mb-3"], ["type", "text", "pInputText", "", "placeholder", "Promo code", 1, "w-full", 3, "ngModel", "ngModelChange"], ["type", "button", "pButton", "", "pRipple", "", "label", "Apply", 3, "disabled"], [1, "py-2", "mt-3"], [1, "flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-900", "font-medium"], [1, "text-900"], [1, "text-primary", "font-bold"], [1, "py-2", "mt-3", "bg-yellow-100", "flex", "align-items-center", "justify-content-center", "border-round"], ["src", "assets/demo/images/ecommerce/shop/flag.png", "alt", "Country Flag", 1, "mr-2"], [1, "text-black-alpha-90", "font-medium"]],
    template: function CheckoutFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5)(7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutFormComponent_Template_p_checkbox_ngModelChange_23_listener($event) {
          return ctx.checked = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutFormComponent_Template_p_dropdown_ngModelChange_27_listener($event) {
          return ctx.selectedCity = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16)(41, "p-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutFormComponent_Template_p_checkbox_ngModelChange_41_listener($event) {
          return ctx.checked2 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "button", 25)(44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27)(46, "div", 28)(47, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Your Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32)(52, "div", 33)(53, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "$123.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Black | Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 36)(60, "p-inputNumber", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutFormComponent_Template_p_inputNumber_ngModelChange_60_listener($event) {
          return ctx.quantities[0] = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 39)(63, "p-inputGroup", 40)(64, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutFormComponent_Template_input_ngModelChange_64_listener($event) {
          return ctx.value = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 43)(67, "div", 44)(68, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "$123.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 44)(73, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 44)(78, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "$123.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "No additional duties or taxes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked)("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.cities)("ngModel", ctx.selectedCity)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked2)("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showButtons", true)("min", 0)("ngModel", ctx.quantities[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.value);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_5__.InputNumber, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_8__.InputGroup],
    encapsulation: 2
  });
}

/***/ }),

/***/ 45625:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/checkoutform/checkoutform.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutFormModule: () => (/* binding */ CheckoutFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _checkoutform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkoutform.component */ 81202);
/* harmony import */ var _checkoutform_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkoutform-routing.module */ 92603);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/checkbox */ 11580);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputnumber */ 65362);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputgroup */ 86763);
/* harmony import */ var primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputgroupaddon */ 46179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);













class CheckoutFormModule {
  static #_ = this.ɵfac = function CheckoutFormModule_Factory(t) {
    return new (t || CheckoutFormModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CheckoutFormModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _checkoutform_routing_module__WEBPACK_IMPORTED_MODULE_1__.CheckoutFormRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__.CheckboxModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__.InputNumberModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_11__.InputGroupModule, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_12__.InputGroupAddonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckoutFormModule, {
    declarations: [_checkoutform_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _checkoutform_routing_module__WEBPACK_IMPORTED_MODULE_1__.CheckoutFormRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__.CheckboxModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__.InputNumberModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_11__.InputGroupModule, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_12__.InputGroupAddonModule]
  });
})();

/***/ }),

/***/ 86763:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputgroup.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputGroup: () => (/* binding */ InputGroup),
/* harmony export */   InputGroupModule: () => (/* binding */ InputGroupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 98026);






/**
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 * @group Components
 */
const _c0 = ["*"];
class InputGroup {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  static ɵfac = function InputGroup_Factory(t) {
    return new (t || InputGroup)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputGroup,
    selectors: [["p-inputGroup"]],
    hostAttrs: [1, "p-element", "p-inputgroup"],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 3,
    consts: [[1, "p-inputgroup", 3, "ngClass", "ngStyle"]],
    template: function InputGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.styleClass)("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "inputgroup");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inputGroup',
      template: `
        <div class="p-inputgroup" [attr.data-pc-name]="'inputgroup'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
      host: {
        class: 'p-element p-inputgroup'
      }
    }]
  }], null, {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class InputGroupModule {
  static ɵfac = function InputGroupModule_Factory(t) {
    return new (t || InputGroupModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InputGroupModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputGroupModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [InputGroup, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
      declarations: [InputGroup]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 46179:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputGroupAddon: () => (/* binding */ InputGroupAddon),
/* harmony export */   InputGroupAddonModule: () => (/* binding */ InputGroupAddonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 98026);






/**
 * InputGroupAddon displays text, icon, buttons and other content can be grouped next to an input.
 * @group Components
 */
const _c0 = ["*"];
class InputGroupAddon {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  static ɵfac = function InputGroupAddon_Factory(t) {
    return new (t || InputGroupAddon)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputGroupAddon,
    selectors: [["p-inputGroupAddon"]],
    hostAttrs: [1, "p-element", "p-inputgroup-addon"],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 3,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function InputGroupAddon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.styleClass)("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "inputgroupaddon");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputGroupAddon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inputGroupAddon',
      template: `
        <div [attr.data-pc-name]="'inputgroupaddon'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
      host: {
        class: 'p-element p-inputgroup-addon'
      }
    }]
  }], null, {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class InputGroupAddonModule {
  static ɵfac = function InputGroupAddonModule_Factory(t) {
    return new (t || InputGroupAddonModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InputGroupAddonModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputGroupAddonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [InputGroupAddon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
      declarations: [InputGroupAddon]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_ecommerce_checkoutform_checkoutform_module_ts.js.map