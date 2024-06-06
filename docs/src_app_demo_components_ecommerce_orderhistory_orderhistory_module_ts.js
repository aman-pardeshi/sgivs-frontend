"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_ecommerce_orderhistory_orderhistory_module_ts"],{

/***/ 92774:
/*!***************************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/orderhistory/orderhistory-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderHistoryRoutingModule: () => (/* binding */ OrderHistoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _orderhistory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderhistory.component */ 94211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class OrderHistoryRoutingModule {
  static #_ = this.ɵfac = function OrderHistoryRoutingModule_Factory(t) {
    return new (t || OrderHistoryRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: OrderHistoryRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _orderhistory_component__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderHistoryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 94211:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/orderhistory/orderhistory.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderHistoryComponent: () => (/* binding */ OrderHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/divider */ 10920);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 51339);




function OrderHistoryComponent_div_10_div_20_p_divider_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-divider", 38);
  }
}
function OrderHistoryComponent_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28)(4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Buy Again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 33)(13, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrderHistoryComponent_div_10_div_20_p_divider_17_Template, 1, 0, "p-divider", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", product_r3.color, " | ", product_r3.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("| ", product_r3.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "2.5rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.deliveryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 !== order_r1.products.length - 1);
  }
}
function OrderHistoryComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-divider", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11)(9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p-divider", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrderHistoryComponent_div_10_div_20_Template, 18, 9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17)(22, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Archive Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Write a Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.orderNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.orderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r1.products);
  }
}
class OrderHistoryComponent {
  constructor() {
    this.orders = [{
      orderNumber: '45123',
      orderDate: '7 February 2023',
      amount: '$123.00',
      products: [{
        name: 'Product Name Placeholder A Little Bit Long One',
        color: 'White',
        size: 'Small',
        price: '$50',
        deliveryDate: 'Delivered on 7 February 2023',
        image: 'assets/demo/images/ecommerce/order-history/orderhistory-1.png'
      }, {
        name: 'Product Name Placeholder A Little Bit Long One',
        color: 'White',
        size: 'Small',
        price: '$50',
        deliveryDate: 'Delivered on 7 February 2023',
        image: 'assets/demo/images/ecommerce/order-history/orderhistory-2.png'
      }, {
        name: 'Product Name Placeholder A Little Bit Long One',
        color: 'White',
        size: 'Small',
        price: '$63',
        deliveryDate: 'Delivered on 7 February 2023',
        image: 'assets/demo/images/ecommerce/order-history/orderhistory-3.png'
      }]
    }, {
      orderNumber: '45126',
      orderDate: '9 February 2023',
      amount: '$250.00',
      products: [{
        name: 'Product Name Placeholder A Little Bit Long One',
        color: 'White',
        size: 'Small',
        price: '$80',
        deliveryDate: 'Delivered on 9 February 2023',
        image: 'assets/demo/images/ecommerce/order-history/orderhistory-4.png'
      }, {
        name: 'Product Name Placeholder A Little Bit Long One',
        color: 'White',
        size: 'Small',
        price: '$20',
        deliveryDate: 'Delivered on 9 February 2023',
        image: 'assets/demo/images/ecommerce/order-history/orderhistory-5.png'
      }, {
        name: 'Product Name Placeholder A Little Bit Long One',
        color: 'White',
        size: 'Small',
        price: '$150',
        deliveryDate: 'Delivered on 9 February 2023',
        image: 'assets/demo/images/ecommerce/order-history/orderhistory-6.png'
      }]
    }];
  }
  static #_ = this.ɵfac = function OrderHistoryComponent_Factory(t) {
    return new (t || OrderHistoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrderHistoryComponent,
    selectors: [["ng-component"]],
    decls: 11,
    vars: 1,
    consts: [[1, "card"], [1, "flex", "flex-column", "md:flex-row", "justify-content-between", "align-items-center", "mb-4"], [1, "flex", "flex-column", "text-center", "md:text-left"], [1, "text-900", "text-2xl", "mb-2"], [1, "text-700", "text-lg"], [1, "p-input-icon-right", "mt-5", "mb-2", "md:mt-0", "md:mb-0", "w-full", "lg:w-25rem"], [1, "pi", "pi-search", "text-gray-400"], ["type", "text", "placeholder", "Search", 1, "p-inputtext", "w-full", "lg:w-25rem", "surface-50"], ["class", "surface-card grid grid-nogutter border-round shadow-2 mb-6", 4, "ngFor", "ngForOf"], [1, "surface-card", "grid", "grid-nogutter", "border-round", "shadow-2", "mb-6"], [1, "col-12", "flex", "p-2", "surface-100", "border-round-top"], [1, "p-2", "flex-auto", "text-center", "md:text-left"], [1, "text-700", "block"], [1, "text-900", "font-medium", "block", "mt-2"], ["align", "center", "layout", "vertical", "styleClass", "h-full  mx-0 lg:mx-3 surface-border"], [1, "col-12"], ["class", "p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [1, "col-12", "p-0", "flex", "border-top-1", "surface-border"], ["tabindex", "0", 1, "cursor-pointer", "py-4", "flex", "flex-column", "md:flex-row", "text-center", "justify-content-center", "align-items-center", "text-primary", "hover:bg-primary", "hover:text-0", "transition-duration-150", "w-full", 2, "border-bottom-left-radius", "6px"], [1, "pi", "pi-folder", "mr-2", "mb-2", "md:mb-1"], ["tabindex", "0", 1, "cursor-pointer", "py-4", "flex", "flex-column", "md:flex-row", "text-center", "justify-content-center", "align-items-center", "text-primary", "hover:bg-primary", "hover:text-0", "transition-duration-150", "w-full"], [1, "pi", "pi-refresh", "mr-2", "mb-2", "md:mb-1"], [1, "pi", "pi-file", "mr-2", "mb-2", "md:mb-1"], ["tabindex", "0", 1, "cursor-pointer", "py-4", "flex", "flex-column", "md:flex-row", "text-center", "justify-content-center", "align-items-center", "text-primary", "hover:bg-primary", "hover:text-0", "transition-duration-150", "w-full", 2, "border-bottom-right-radius", "6px"], [1, "pi", "pi-comment", "mr-2", "mb-2", "md:mb-1"], [1, "p-2", "my-4", "flex", "flex-column", "lg:flex-row", "justify-content-between", "align-items-center"], [1, "flex", "flex-column", "lg:flex-row", "justify-content-center", "align-items-center", "px-2"], ["alt", "product", 1, "w-8rem", "h-8rem", "mr-3", "flex-shrink-0", 3, "src"], [1, "flex", "flex-column", "my-auto", "text-center", "md:text-left"], [1, "text-900", "font-medium", "mb-3", "mt-3", "lg:mt-0"], [1, "text-700", "text-sm", "mb-3"], ["pRipple", "", "tabindex", "0", 1, "p-2", "select-none", "cursor-pointer", "w-10rem", "mx-auto", "lg:mx-0", "border-round", "font-medium", "text-center", "border-1", "border-primary", "text-primary", "transition-duration-150"], [1, "font-light"], [1, "mr-0", "lg:mr-3", "mt-4", "lg:mt-0", "p-2", "flex", "align-items-center", 2, "background-color", "rgba(76, 175, 80,.1)"], [1, "bg-green-500", "text-white", "flex", "align-items-center", "justify-content-center", "border-circle", "mr-2", 2, "min-width", "2rem", "min-height", "2rem"], [1, "pi", "pi-check"], [1, "text-green-500"], ["class", "w-full block lg:hidden surface-border", 4, "ngIf"], [1, "w-full", "block", "lg:hidden", "surface-border"]],
    template: function OrderHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dignissim diam quis enim lobortis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6)(9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrderHistoryComponent_div_10_Template, 34, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, primeng_divider__WEBPACK_IMPORTED_MODULE_2__.Divider, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple],
    encapsulation: 2
  });
}

/***/ }),

/***/ 42916:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/orderhistory/orderhistory.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderHistoryModule: () => (/* binding */ OrderHistoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderhistory-routing.module */ 92774);
/* harmony import */ var _orderhistory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderhistory.component */ 94211);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/divider */ 10920);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);







class OrderHistoryModule {
  static #_ = this.ɵfac = function OrderHistoryModule_Factory(t) {
    return new (t || OrderHistoryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: OrderHistoryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_divider__WEBPACK_IMPORTED_MODULE_5__.DividerModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrderHistoryModule, {
    declarations: [_orderhistory_component__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_divider__WEBPACK_IMPORTED_MODULE_5__.DividerModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_ecommerce_orderhistory_orderhistory_module_ts.js.map