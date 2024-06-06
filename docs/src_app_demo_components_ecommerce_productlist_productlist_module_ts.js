"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_ecommerce_productlist_productlist_module_ts"],{

/***/ 70599:
/*!*************************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/productlist/productlist-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListRoutingModule: () => (/* binding */ ProductListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _productlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productlist.component */ 98667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class ProductListRoutingModule {
  static #_ = this.ɵfac = function ProductListRoutingModule_Factory(t) {
    return new (t || ProductListRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ProductListRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _productlist_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductListRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98667:
/*!********************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/productlist/productlist.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/ripple */ 51339);



function ProductListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12)(8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "5.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.price);
  }
}
const _c0 = a0 => ({
  "box-shadow": a0
});
function ProductListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23)(8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "$150.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26)(13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_9_Template_div_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const product_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](product_r3.color = "Bluegray");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_9_Template_div_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const product_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](product_r3.color = "Indigo");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_9_Template_div_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const product_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](product_r3.color = "Purple");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_9_Template_div_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const product_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](product_r3.color = "Cyan");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, product_r3.color === "Bluegray" ? "0 0 0 0.2rem var(--bluegray-500)" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, product_r3.color === "Indigo" ? "0 0 0 0.2rem var(--indigo-500)" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, product_r3.color === "Purple" ? "0 0 0 0.2rem var(--purple-500)" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, product_r3.color === "Cyan" ? "0 0 0 0.2rem var(--cyan-500)" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.color);
  }
}
class ProductListComponent {
  constructor() {
    this.color1 = 'Bluegray';
    this.products = [{
      price: '$140.00',
      image: 'assets/demo/images/ecommerce/product-list/product-list-4-1.png'
    }, {
      price: '$82.00',
      image: 'assets/demo/images/ecommerce/product-list/product-list-4-2.png'
    }, {
      price: '$54.00',
      image: 'assets/demo/images/ecommerce/product-list/product-list-4-3.png'
    }, {
      price: '$72.00',
      image: 'assets/demo/images/ecommerce/product-list/product-list-4-4.png'
    }, {
      price: '$99.00',
      image: 'assets/demo/images/ecommerce/product-list/product-list-4-5.png'
    }, {
      price: '$89.00',
      image: 'assets/demo/images/ecommerce/product-list/product-list-4-6.png'
    }];
    this.products2 = [{
      color: 'Bluegray',
      image: 'assets/demo/images/ecommerce/product-list/product-list-2-1.png'
    }, {
      color: 'Indigo',
      image: 'assets/demo/images/ecommerce/product-list/product-list-2-2.png'
    }, {
      color: 'Purple',
      image: 'assets/demo/images/ecommerce/product-list/product-list-2-3.png'
    }, {
      color: 'Cyan',
      image: 'assets/demo/images/ecommerce/product-list/product-list-2-4.png'
    }];
  }
  static #_ = this.ɵfac = function ProductListComponent_Factory(t) {
    return new (t || ProductListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductListComponent,
    selectors: [["ng-component"]],
    decls: 10,
    vars: 2,
    consts: [[1, "card"], [1, "text-900", "font-medium", "text-4xl", "mb-4"], [1, "mt-0", "p-0", "mb-5", "text-700", "text-2xl"], [1, "grid", "-mt-3", "-ml-3", "-mr-3"], ["class", "col-12 md:col-6 lg:col-4", 4, "ngFor", "ngForOf"], ["class", "col-12 md:col-6 lg:col-3 mb-5 lg:mb-0", 4, "ngFor", "ngForOf"], [1, "col-12", "md:col-6", "lg:col-4"], [1, "p-2"], [1, "shadow-2", "p-4", "surface-card", "border-round"], [1, "relative", "mb-3"], [1, "surface-card", "text-900", "shadow-2", "px-3", "py-2", "absolute", 2, "border-radius", "1.5rem", "left", "1rem", "top", "1rem"], [1, "w-full", 3, "src"], [1, "flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-900", "font-medium", "text-xl"], [1, "pi", "pi-star-fill", "text-yellow-500", "mr-1"], [1, "font-medium"], [1, "mt-0", "mb-3", "text-700", "line-height-3"], [1, "text-primary", "text-xl", "font-medium"], [1, "col-12", "md:col-6", "lg:col-3", "mb-5", "lg:mb-0"], [1, "mb-3", "relative"], ["type", "button", "pRipple", "", 1, "border-1", "border-white", "border-round", "py-2", "px-3", "absolute", "bg-black-alpha-30", "text-white", "inline-flex", "align-items-center", "justify-content-center", "hover:bg-black-alpha-40", "transition-colors", "transition-duration-300", "cursor-pointer", 2, "bottom", "1rem", "left", "1rem", "width", "calc(100% - 2rem)"], [1, "pi", "pi-shopping-cart", "mr-3", "text-base"], [1, "text-base"], [1, "flex", "flex-column", "align-items-center"], [1, "text-xl", "text-900", "font-medium", "mb-3"], [1, "text-xl", "text-900", "mb-3"], [1, "flex", "align-items-center", "mb-3"], [1, "w-2rem", "h-2rem", "flex-shrink-0", "border-circle", "bg-bluegray-500", "mr-3", "cursor-pointer", "border-2", "surface-border", "transition-all", "transition-duration-300", 3, "ngStyle", "click"], [1, "w-2rem", "h-2rem", "flex-shrink-0", "border-circle", "bg-indigo-500", "hover:border-indigo-500", "mr-3", "cursor-pointer", "border-2", "surface-border", "transition-all", "transition-duration-300", 3, "ngStyle", "click"], [1, "w-2rem", "h-2rem", "flex-shrink-0", "border-circle", "bg-purple-500", "hover:border-purple-500", "mr-3", "cursor-pointer", "border-2", "surface-border", "transition-all", "transition-duration-300", 3, "ngStyle", "click"], [1, "w-2rem", "h-2rem", "flex-shrink-0", "border-circle", "bg-cyan-500", "hover:border-cyan-500", "cursor-pointer", "border-2", "surface-border", "transition-all", "transition-duration-300", 3, "ngStyle", "click"], [1, "text-700"]],
    template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Popular Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Exclusive Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductListComponent_div_6_Template, 18, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0)(8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductListComponent_div_9_Template, 19, 14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple],
    encapsulation: 2
  });
}

/***/ }),

/***/ 30395:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/productlist/productlist.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListModule: () => (/* binding */ ProductListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _productlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productlist-routing.module */ 70599);
/* harmony import */ var _productlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productlist.component */ 98667);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





class ProductListModule {
  static #_ = this.ɵfac = function ProductListModule_Factory(t) {
    return new (t || ProductListModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ProductListModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _productlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductListRoutingModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductListModule, {
    declarations: [_productlist_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _productlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductListRoutingModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_ecommerce_productlist_productlist_module_ts.js.map