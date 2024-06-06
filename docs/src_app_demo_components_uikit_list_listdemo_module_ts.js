"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_uikit_list_listdemo_module_ts"],{

/***/ 53483:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/list/listdemo-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListDemoRoutingModule: () => (/* binding */ ListDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _listdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listdemo.component */ 95918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class ListDemoRoutingModule {
  static #_ = this.ɵfac = function ListDemoRoutingModule_Factory(t) {
    return new (t || ListDemoRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ListDemoRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _listdemo_component__WEBPACK_IMPORTED_MODULE_0__.ListDemoComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ListDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 95918:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uikit/list/listdemo.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListDemoComponent: () => (/* binding */ ListDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/product.service */ 20981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dataview */ 33197);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/picklist */ 34177);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/orderlist */ 7880);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/rating */ 85583);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 32947);











function ListDemoComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "p-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function ListDemoComponent_ng_template_7_Template_p_dropdown_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onSortChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ListDemoComponent_ng_template_7_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p-dataViewLayoutOptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.sortOptions);
  }
}
function ListDemoComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20)(4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p-rating", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 27)(14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/demo/images/product/" + product_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", product_r9.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r9.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", product_r9.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", product_r9.inventoryStatus === "OUTOFSTOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("product-badge status-" + product_r9.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r9.inventoryStatus);
  }
}
function ListDemoComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "p-rating", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 39)(17, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("product-badge status-" + product_r10.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r10.inventoryStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/demo/images/product/" + product_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", product_r10.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", product_r10.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", product_r10.inventoryStatus === "OUTOFSTOCK");
  }
}
function ListDemoComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r11.name);
  }
}
function ListDemoComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r12.name);
  }
}
const _c0 = () => ({
  "height": "250px"
});
class ListDemoComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.sortOptions = [];
    this.sortOrder = 0;
    this.sortField = '';
    this.sourceCities = [];
    this.targetCities = [];
    this.orderCities = [];
  }
  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
    this.sourceCities = [{
      name: 'San Francisco',
      code: 'SF'
    }, {
      name: 'London',
      code: 'LDN'
    }, {
      name: 'Paris',
      code: 'PRS'
    }, {
      name: 'Istanbul',
      code: 'IST'
    }, {
      name: 'Berlin',
      code: 'BRL'
    }, {
      name: 'Barcelona',
      code: 'BRC'
    }, {
      name: 'Rome',
      code: 'RM'
    }];
    this.targetCities = [];
    this.orderCities = [{
      name: 'San Francisco',
      code: 'SF'
    }, {
      name: 'London',
      code: 'LDN'
    }, {
      name: 'Paris',
      code: 'PRS'
    }, {
      name: 'Istanbul',
      code: 'IST'
    }, {
      name: 'Berlin',
      code: 'BRL'
    }, {
      name: 'Barcelona',
      code: 'BRC'
    }, {
      name: 'Rome',
      code: 'RM'
    }];
    this.sortOptions = [{
      label: 'Price High to Low',
      value: '!price'
    }, {
      label: 'Price Low to High',
      value: 'price'
    }];
  }
  onSortChange(event) {
    const value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  onFilter(dv, event) {
    dv.filter(event.target.value);
  }
  static #_ = this.ɵfac = function ListDemoComponent_Factory(t) {
    return new (t || ListDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ListDemoComponent,
    selectors: [["ng-component"]],
    decls: 22,
    vars: 17,
    consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["filterBy", "name", "layout", "grid", 3, "value", "paginator", "rows", "sortField", "sortOrder"], ["dv", ""], ["pTemplate", "header"], ["pTemplate", "listItem"], ["pTemplate", "gridItem"], [1, "col-12", "xl:col-8"], ["sourceHeader", "From", "targetHeader", "To", 3, "source", "target", "dragdrop", "responsive", "sourceStyle", "targetStyle"], ["pTemplate", "item"], [1, "col-12", "xl:col-4"], ["header", "Cities", 3, "value", "dragdrop", "listStyle"], [1, "flex", "flex-column", "md:flex-row", "md:justify-content-between", "gap-2"], ["placeholder", "Sort By Price", 3, "options", "onChange"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["type", "search", "pInputText", "", "placeholder", "Search by Name", 3, "input"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "p-3", "w-full"], [1, "my-4", "md:my-0", "w-9", "md:w-10rem", "shadow-2", "mr-5", 3, "src", "alt"], [1, "flex-1", "flex", "flex-column", "align-items-center", "text-center", "md:text-left"], [1, "font-bold", "text-2xl"], [1, "mb-2"], ["styleClass", "mb-2", 3, "ngModel", "readonly", "cancel"], [1, "flex", "align-items-center", "mt-2"], [1, "pi", "pi-tag", "mr-2"], [1, "font-semibold"], [1, "flex", "flex-row", "md:flex-column", "justify-content-between", "w-full", "md:w-auto", "align-items-center", "md:align-items-end", "mt-5", "md:mt-0"], [1, "text-2xl", "font-semibold", "mb-2", "align-self-center", "md:align-self-end"], ["icon", "pi pi-shopping-cart", "label", "Add to Cart", "styleClass", "mb-2 p-button-sm", 3, "disabled"], [1, "col-12", "md:col-4"], [1, "card", "m-3", "border-1", "surface-border"], [1, "flex", "flex-wrap", "gap-2", "align-items-center", "justify-content-between", "mb-2"], [1, "flex", "align-items-center"], [1, "flex", "flex-column", "align-items-center", "text-center", "mb-3"], [1, "w-9", "shadow-2", "my-3", "mx-0", 3, "src", "alt"], [1, "text-2xl", "font-bold"], [1, "mb-3"], [3, "ngModel", "readonly", "cancel"], [1, "flex", "align-items-center", "justify-content-between"], [1, "text-2xl", "font-semibold"], ["icon", "pi pi-shopping-cart", 3, "disabled"]],
    template: function ListDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "DataView");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-dataView", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListDemoComponent_ng_template_7_Template, 6, 1, "ng-template", 5)(8, ListDemoComponent_ng_template_8_Template, 19, 13, "ng-template", 6)(9, ListDemoComponent_ng_template_9_Template, 20, 13, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 2)(12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "PickList");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p-pickList", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListDemoComponent_ng_template_15_Template, 2, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "div", 2)(18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "OrderList");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p-orderList", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ListDemoComponent_ng_template_21_Template, 2, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.products)("paginator", true)("rows", 9)("sortField", ctx.sortField)("sortOrder", ctx.sortOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", ctx.sourceCities)("target", ctx.targetCities)("dragdrop", true)("responsive", true)("sourceStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0))("targetStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.orderCities)("dragdrop", true)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, primeng_dataview__WEBPACK_IMPORTED_MODULE_3__.DataView, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_dataview__WEBPACK_IMPORTED_MODULE_3__.DataViewLayoutOptions, primeng_picklist__WEBPACK_IMPORTED_MODULE_5__.PickList, primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__.OrderList, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_rating__WEBPACK_IMPORTED_MODULE_9__.Rating, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button],
    encapsulation: 2
  });
}

/***/ }),

/***/ 40900:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/list/listdemo.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListDemoModule: () => (/* binding */ ListDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _listdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listdemo.component */ 95918);
/* harmony import */ var _listdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listdemo-routing.module */ 53483);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dataview */ 33197);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/picklist */ 34177);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/orderlist */ 7880);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/rating */ 85583);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);












class ListDemoModule {
  static #_ = this.ɵfac = function ListDemoModule_Factory(t) {
    return new (t || ListDemoModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ListDemoModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _listdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListDemoRoutingModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_5__.DataViewModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_6__.PickListModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_7__.OrderListModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, primeng_rating__WEBPACK_IMPORTED_MODULE_10__.RatingModule, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ListDemoModule, {
    declarations: [_listdemo_component__WEBPACK_IMPORTED_MODULE_0__.ListDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _listdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListDemoRoutingModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_5__.DataViewModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_6__.PickListModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_7__.OrderListModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, primeng_rating__WEBPACK_IMPORTED_MODULE_10__.RatingModule, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule]
  });
})();

/***/ }),

/***/ 98133:
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledoubledown.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDoubleDownIcon: () => (/* binding */ AngleDoubleDownIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 43128);



class AngleDoubleDownIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵAngleDoubleDownIcon_BaseFactory;
    return function AngleDoubleDownIcon_Factory(t) {
      return (ɵAngleDoubleDownIcon_BaseFactory || (ɵAngleDoubleDownIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDoubleDownIcon)))(t || AngleDoubleDownIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AngleDoubleDownIcon,
    selectors: [["AngleDoubleDownIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.70786 6.59831C6.80043 6.63674 6.89974 6.65629 6.99997 6.65581C7.19621 6.64081 7.37877 6.54953 7.50853 6.40153L11.0685 2.8416C11.1364 2.69925 11.1586 2.53932 11.132 2.38384C11.1053 2.22837 11.0311 2.08498 10.9195 1.97343C10.808 1.86188 10.6646 1.78766 10.5091 1.76099C10.3536 1.73431 10.1937 1.75649 10.0513 1.82448L6.99997 4.87585L3.9486 1.82448C3.80625 1.75649 3.64632 1.73431 3.49084 1.76099C3.33536 1.78766 3.19197 1.86188 3.08043 1.97343C2.96888 2.08498 2.89466 2.22837 2.86798 2.38384C2.84131 2.53932 2.86349 2.69925 2.93147 2.8416L6.46089 6.43205C6.53132 6.50336 6.61528 6.55989 6.70786 6.59831ZM6.70786 12.1925C6.80043 12.2309 6.89974 12.2505 6.99997 12.25C7.10241 12.2465 7.20306 12.2222 7.29575 12.1785C7.38845 12.1348 7.47124 12.0726 7.53905 11.9957L11.0685 8.46629C11.1614 8.32292 11.2036 8.15249 11.1881 7.98233C11.1727 7.81216 11.1005 7.6521 10.9833 7.52781C10.866 7.40353 10.7104 7.3222 10.5415 7.29688C10.3725 7.27155 10.1999 7.30369 10.0513 7.38814L6.99997 10.4395L3.9486 7.38814C3.80006 7.30369 3.62747 7.27155 3.45849 7.29688C3.28951 7.3222 3.13393 7.40353 3.01667 7.52781C2.89942 7.6521 2.82729 7.81216 2.81184 7.98233C2.79639 8.15249 2.83852 8.32292 2.93148 8.46629L6.4609 12.0262C6.53133 12.0975 6.61529 12.1541 6.70786 12.1925Z", "fill", "currentColor"]],
    template: function AngleDoubleDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngleDoubleDownIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'AngleDoubleDownIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.70786 6.59831C6.80043 6.63674 6.89974 6.65629 6.99997 6.65581C7.19621 6.64081 7.37877 6.54953 7.50853 6.40153L11.0685 2.8416C11.1364 2.69925 11.1586 2.53932 11.132 2.38384C11.1053 2.22837 11.0311 2.08498 10.9195 1.97343C10.808 1.86188 10.6646 1.78766 10.5091 1.76099C10.3536 1.73431 10.1937 1.75649 10.0513 1.82448L6.99997 4.87585L3.9486 1.82448C3.80625 1.75649 3.64632 1.73431 3.49084 1.76099C3.33536 1.78766 3.19197 1.86188 3.08043 1.97343C2.96888 2.08498 2.89466 2.22837 2.86798 2.38384C2.84131 2.53932 2.86349 2.69925 2.93147 2.8416L6.46089 6.43205C6.53132 6.50336 6.61528 6.55989 6.70786 6.59831ZM6.70786 12.1925C6.80043 12.2309 6.89974 12.2505 6.99997 12.25C7.10241 12.2465 7.20306 12.2222 7.29575 12.1785C7.38845 12.1348 7.47124 12.0726 7.53905 11.9957L11.0685 8.46629C11.1614 8.32292 11.2036 8.15249 11.1881 7.98233C11.1727 7.81216 11.1005 7.6521 10.9833 7.52781C10.866 7.40353 10.7104 7.3222 10.5415 7.29688C10.3725 7.27155 10.1999 7.30369 10.0513 7.38814L6.99997 10.4395L3.9486 7.38814C3.80006 7.30369 3.62747 7.27155 3.45849 7.29688C3.28951 7.3222 3.13393 7.40353 3.01667 7.52781C2.89942 7.6521 2.82729 7.81216 2.81184 7.98233C2.79639 8.15249 2.83852 8.32292 2.93148 8.46629L6.4609 12.0262C6.53133 12.0975 6.61529 12.1541 6.70786 12.1925Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 54692:
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledoubleup.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDoubleUpIcon: () => (/* binding */ AngleDoubleUpIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 43128);



class AngleDoubleUpIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵAngleDoubleUpIcon_BaseFactory;
    return function AngleDoubleUpIcon_Factory(t) {
      return (ɵAngleDoubleUpIcon_BaseFactory || (ɵAngleDoubleUpIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDoubleUpIcon)))(t || AngleDoubleUpIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AngleDoubleUpIcon,
    selectors: [["AngleDoubleUpIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M10.1504 6.67719C10.2417 6.71508 10.3396 6.73436 10.4385 6.73389C10.6338 6.74289 10.8249 6.67441 10.97 6.54334C11.1109 6.4023 11.19 6.21112 11.19 6.01178C11.19 5.81245 11.1109 5.62127 10.97 5.48023L7.45977 1.96998C7.31873 1.82912 7.12755 1.75 6.92821 1.75C6.72888 1.75 6.5377 1.82912 6.39666 1.96998L2.9165 5.45014C2.83353 5.58905 2.79755 5.751 2.81392 5.91196C2.83028 6.07293 2.89811 6.22433 3.00734 6.34369C3.11656 6.46306 3.26137 6.54402 3.42025 6.57456C3.57914 6.60511 3.74364 6.5836 3.88934 6.51325L6.89813 3.50446L9.90691 6.51325C9.97636 6.58357 10.0592 6.6393 10.1504 6.67719ZM9.93702 11.9993C10.065 12.1452 10.245 12.2352 10.4385 12.25C10.632 12.2352 10.812 12.1452 10.9399 11.9993C11.0633 11.8614 11.1315 11.6828 11.1315 11.4978C11.1315 11.3128 11.0633 11.1342 10.9399 10.9963L7.48987 7.48609C7.34883 7.34523 7.15765 7.26611 6.95832 7.26611C6.75899 7.26611 6.5678 7.34523 6.42677 7.48609L2.91652 10.9963C2.84948 11.1367 2.82761 11.2944 2.85391 11.4477C2.88022 11.601 2.9534 11.7424 3.06339 11.8524C3.17338 11.9624 3.31477 12.0356 3.46808 12.0619C3.62139 12.0882 3.77908 12.0663 3.91945 11.9993L6.92823 8.99048L9.93702 11.9993Z", "fill", "currentColor"]],
    template: function AngleDoubleUpIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngleDoubleUpIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'AngleDoubleUpIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1504 6.67719C10.2417 6.71508 10.3396 6.73436 10.4385 6.73389C10.6338 6.74289 10.8249 6.67441 10.97 6.54334C11.1109 6.4023 11.19 6.21112 11.19 6.01178C11.19 5.81245 11.1109 5.62127 10.97 5.48023L7.45977 1.96998C7.31873 1.82912 7.12755 1.75 6.92821 1.75C6.72888 1.75 6.5377 1.82912 6.39666 1.96998L2.9165 5.45014C2.83353 5.58905 2.79755 5.751 2.81392 5.91196C2.83028 6.07293 2.89811 6.22433 3.00734 6.34369C3.11656 6.46306 3.26137 6.54402 3.42025 6.57456C3.57914 6.60511 3.74364 6.5836 3.88934 6.51325L6.89813 3.50446L9.90691 6.51325C9.97636 6.58357 10.0592 6.6393 10.1504 6.67719ZM9.93702 11.9993C10.065 12.1452 10.245 12.2352 10.4385 12.25C10.632 12.2352 10.812 12.1452 10.9399 11.9993C11.0633 11.8614 11.1315 11.6828 11.1315 11.4978C11.1315 11.3128 11.0633 11.1342 10.9399 10.9963L7.48987 7.48609C7.34883 7.34523 7.15765 7.26611 6.95832 7.26611C6.75899 7.26611 6.5678 7.34523 6.42677 7.48609L2.91652 10.9963C2.84948 11.1367 2.82761 11.2944 2.85391 11.4477C2.88022 11.601 2.9534 11.7424 3.06339 11.8524C3.17338 11.9624 3.31477 12.0356 3.46808 12.0619C3.62139 12.0882 3.77908 12.0663 3.91945 11.9993L6.92823 8.99048L9.93702 11.9993Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7880:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-orderlist.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderList: () => (/* binding */ OrderList),
/* harmony export */   OrderListModule: () => (/* binding */ OrderListModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 64946);
/* harmony import */ var primeng_icons_angledoubledown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/angledoubledown */ 98133);
/* harmony import */ var primeng_icons_angledoubleup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/angledoubleup */ 54692);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/angledown */ 12269);
/* harmony import */ var primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angleup */ 45325);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/search */ 79103);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 15861);




















/**
 * OrderList is used to managed the order of a collection.
 * @group Components
 */
const _c0 = ["listelement"];
const _c1 = ["filter"];
function OrderList_AngleUpIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "moveupicon");
  }
}
function OrderList_4_ng_template_0_Template(rf, ctx) {}
function OrderList_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderList_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDoubleUpIcon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movetopicon");
  }
}
function OrderList_7_ng_template_0_Template(rf, ctx) {}
function OrderList_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderList_7_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDownIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movedownicon");
  }
}
function OrderList_10_ng_template_0_Template(rf, ctx) {}
function OrderList_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderList_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDoubleDownIcon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movebottomicon");
  }
}
function OrderList_13_ng_template_0_Template(rf, ctx) {}
function OrderList_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderList_13_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.header);
  }
}
function OrderList_div_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function OrderList_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderList_div_15_div_1_Template, 2, 1, "div", 12)(2, OrderList_div_15_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.headerTemplate);
  }
}
function OrderList_div_16_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c2 = a0 => ({
  options: a0
});
function OrderList_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderList_div_16_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r19.filterOptions));
  }
}
function OrderList_div_16_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchIcon", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-orderlist-filter-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "filterIcon");
  }
}
function OrderList_div_16_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {}
function OrderList_div_16_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderList_div_16_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_div_16_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderList_div_16_ng_template_2_span_4_1_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "filterIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r25.filterIconTemplate);
  }
}
function OrderList_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18)(1, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function OrderList_div_16_ng_template_2_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.onFilterKeyup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderList_div_16_ng_template_2_SearchIcon_3_Template, 1, 2, "SearchIcon", 21)(4, OrderList_div_16_ng_template_2_span_4_Template, 2, 2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r20.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r20.filterPlaceholder)("aria-label", ctx_r20.ariaFilterLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.filterIconTemplate);
  }
}
function OrderList_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderList_div_16_ng_container_1_Template, 2, 4, "ng-container", 15)(2, OrderList_div_16_ng_template_2_Template, 5, 6, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "filterContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.filterTemplate)("ngIfElse", _r21);
  }
}
function OrderList_ng_template_19_li_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c3 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
const _c4 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function OrderList_ng_template_19_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderList_ng_template_19_li_0_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r30 = ctx_r36.$implicit;
      const i_r31 = ctx_r36.index;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.onItemClick($event, item_r30, i_r31, ctx_r35.id + "_" + i_r31));
    })("touchend", function OrderList_ng_template_19_li_0_Template_li_touchend_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r38.onItemTouchEnd());
    })("mousedown", function OrderList_ng_template_19_li_0_Template_li_mousedown_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.onOptionMouseDown(i_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderList_ng_template_19_li_0_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r31 = ctx_r41.index;
    const item_r30 = ctx_r41.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r33.id + "_" + i_r31)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c3, ctx_r33.isSelected(item_r30), ctx_r33.disabled, ctx_r33.id + "_" + i_r31 === ctx_r33.focusedOptionId()))("cdkDragData", item_r30)("cdkDragDisabled", !ctx_r33.dragdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx_r33.isSelected(item_r30))("data-pc-section", "item")("data-p-highlight", ctx_r33.isSelected(item_r30))("data-p-focused", ctx_r33.id + "_" + i_r31 === ctx_r33.focusedOptionId());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r33.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c4, item_r30, i_r31));
  }
}
function OrderList_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderList_ng_template_19_li_0_Template, 2, 17, "li", 25);
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isItemVisible(item_r30));
  }
}
function OrderList_ng_container_20_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function OrderList_ng_container_20_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderList_ng_container_20_li_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "emptyMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r42.emptyMessageTemplate);
  }
}
function OrderList_ng_container_20_li_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function OrderList_ng_container_20_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderList_ng_container_20_li_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "emptyMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r43.emptyFilterMessageTemplate);
  }
}
function OrderList_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderList_ng_container_20_li_1_Template, 2, 2, "li", 27)(2, OrderList_ng_container_20_li_2_Template, 2, 2, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.filterValue || !ctx_r12.emptyFilterMessageTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.filterValue);
  }
}
const _c5 = (a1, a2, a3) => ({
  "p-orderlist p-component": true,
  "p-orderlist-striped": a1,
  "p-orderlist-controls-left": a2,
  "p-orderlist-controls-right": a3
});
class OrderList {
  document;
  platformId;
  renderer;
  el;
  cd;
  filterService;
  config;
  /**
   * Text for the caption.
   * @group Props
   */
  header;
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
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Inline style of the list element.
   * @group Props
   */
  listStyle;
  /**
   * A boolean value that indicates whether the component should be responsive.
   * @group Props
   */
  responsive;
  /**
   * When specified displays an input field to filter the items on keyup and decides which fields to search against.
   * @group Props
   */
  filterBy;
  /**
   * Placeholder of the filter input.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = true;
  /**
   * Whether to enable dragdrop based reordering.
   * @group Props
   */
  dragdrop = false;
  /**
   * Defines the location of the buttons with respect to the list.
   * @group Props
   */
  controlsPosition = 'left';
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = 'contains';
  /**
   * Indicates the width of the screen at which the component should change its behavior.
   * @group Props
   */
  breakpoint = '960px';
  /**
   * Whether to displays rows with alternating colors.
   * @group Props
   */
  stripedRows;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * A list of values that are currently selected.
   * @group Props
   */
  set selection(val) {
    this.d_selection = val;
  }
  get selection() {
    return this.d_selection;
  }
  /**
   * Array of values to be displayed in the component.
   * It represents the data source for the list of items.
   * @group Props
   */
  set value(val) {
    this._value = val;
    if (this.filterValue) {
      this.filter();
    }
  }
  get value() {
    return this._value;
  }
  /**
   * Callback to invoke on selection change.
   * @param {*} any - selection instance.
   * @group Emits
   */
  selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when list is reordered.
   * @param {*} any - list instance.
   * @group Emits
   */
  onReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when selection changes.
   * @param {OrderListSelectionChangeEvent} event - Custom change event.
   * @group Emits
   */
  onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when filtering occurs.
   * @param {OrderListFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the list is focused
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the list is blurred
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  listViewChild;
  filterViewChild;
  templates;
  itemTemplate;
  headerTemplate;
  emptyMessageTemplate;
  emptyFilterMessageTemplate;
  filterTemplate;
  get moveUpAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveUp : undefined;
  }
  get moveTopAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveTop : undefined;
  }
  get moveDownAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveDown : undefined;
  }
  get moveBottomAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveBottom : undefined;
  }
  moveUpIconTemplate;
  moveTopIconTemplate;
  moveDownIconTemplate;
  moveBottomIconTemplate;
  filterIconTemplate;
  filterOptions;
  d_selection = [];
  movedUp;
  movedDown;
  itemTouched;
  styleElement;
  id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
  focused = false;
  focusedOptionIndex = -1;
  focusedOption;
  filterValue;
  visibleOptions;
  _value;
  constructor(document, platformId, renderer, el, cd, filterService, config) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
  }
  ngOnInit() {
    if (this.responsive) {
      this.createStyle();
    }
    if (this.filterBy) {
      this.filterOptions = {
        filter: value => this.onFilterKeyup(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'empty':
          this.emptyMessageTemplate = item.template;
          break;
        case 'emptyfilter':
          this.emptyFilterMessageTemplate = item.template;
          break;
        case 'filter':
          this.filterTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'moveupicon':
          this.moveUpIconTemplate = item.template;
          break;
        case 'movetopicon':
          this.moveTopIconTemplate = item.template;
          break;
        case 'movedownicon':
          this.moveDownIconTemplate = item.template;
          break;
        case 'movebottomicon':
          this.moveBottomIconTemplate = item.template;
          break;
        case 'filtericon':
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewChecked() {
    if (this.movedUp || this.movedDown) {
      let listItems = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.find(this.listViewChild?.nativeElement, 'li.p-highlight');
      let listItem;
      if (listItems.length > 0) {
        if (this.movedUp) listItem = listItems[0];else listItem = listItems[listItems.length - 1];
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.scrollInView(this.listViewChild?.nativeElement, listItem);
      }
      this.movedUp = false;
      this.movedDown = false;
    }
  }
  onItemClick(event, item, index, selectedId) {
    this.itemTouched = false;
    let focusedIndex = index ? index : primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(this.focusedOption, this.value);
    let selectedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(item, this.d_selection);
    let selected = selectedIndex !== -1;
    let metaSelection = this.itemTouched ? false : this.metaKeySelection;
    if (selectedId) {
      this.focusedOptionIndex = selectedId;
    }
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey;
      if (selected && metaKey) {
        this.d_selection = this.d_selection.filter((val, focusedIndex) => focusedIndex !== selectedIndex);
      } else {
        this.d_selection = metaKey ? this.d_selection ? [...this.d_selection] : [] : [];
        primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.insertIntoOrderedArray(item, focusedIndex, this.d_selection, this.value);
      }
    } else {
      if (selected) {
        this.d_selection = this.d_selection.filter((val, focusedIndex) => focusedIndex !== selectedIndex);
      } else {
        this.d_selection = this.d_selection ? [...this.d_selection] : [];
        primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.insertIntoOrderedArray(item, focusedIndex, this.d_selection, this.value);
      }
    }
    //binding
    this.selectionChange.emit(this.d_selection);
    //event
    this.onSelectionChange.emit({
      originalEvent: event,
      value: this.d_selection
    });
  }
  onFilterKeyup(event) {
    this.filterValue = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
    this.filter();
    this.onFilterEvent.emit({
      originalEvent: event,
      value: this.visibleOptions
    });
  }
  filter() {
    let searchFields = this.filterBy.split(',');
    this.visibleOptions = this.filterService.filter(this.value, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this.filterValue = null;
    this.filterViewChild && (this.filterViewChild.nativeElement.value = '');
  }
  isItemVisible(item) {
    if (this.filterValue && this.filterValue.trim().length) {
      for (let i = 0; i < this.visibleOptions.length; i++) {
        if (item == this.visibleOptions[i]) {
          return true;
        }
      }
    } else {
      return true;
    }
  }
  onItemTouchEnd() {
    this.itemTouched = true;
  }
  isSelected(item) {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(item, this.d_selection) !== -1;
  }
  isEmpty() {
    return this.filterValue ? !this.visibleOptions || this.visibleOptions.length === 0 : !this.value || this.value.length === 0;
  }
  moveUp() {
    if (this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(selectedItem, this.value);
        if (selectedItemIndex != 0 && this.value instanceof Array) {
          let movedItem = this.value[selectedItemIndex];
          let temp = this.value[selectedItemIndex - 1];
          this.value[selectedItemIndex - 1] = movedItem;
          this.value[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.movedUp = true;
      this.onReorder.emit(this.selection);
    }
  }
  moveTop() {
    if (this.selection) {
      for (let i = this.selection.length - 1; i >= 0; i--) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(selectedItem, this.value);
        if (selectedItemIndex != 0 && this.value instanceof Array) {
          let movedItem = this.value.splice(selectedItemIndex, 1)[0];
          this.value.unshift(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.onReorder.emit(this.selection);
      this.listViewChild.nativeElement.scrollTop = 0;
    }
  }
  moveDown() {
    if (this.selection) {
      for (let i = this.selection.length - 1; i >= 0; i--) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(selectedItem, this.value);
        if (this.value instanceof Array && selectedItemIndex != this.value.length - 1) {
          let movedItem = this.value[selectedItemIndex];
          let temp = this.value[selectedItemIndex + 1];
          this.value[selectedItemIndex + 1] = movedItem;
          this.value[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.movedDown = true;
      this.onReorder.emit(this.selection);
    }
  }
  moveBottom() {
    if (this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(selectedItem, this.value);
        if (this.value instanceof Array && selectedItemIndex != this.value.length - 1) {
          let movedItem = this.value.splice(selectedItemIndex, 1)[0];
          this.value.push(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.onReorder.emit(this.selection);
      this.listViewChild.nativeElement.scrollTop = this.listViewChild?.nativeElement.scrollHeight;
    }
  }
  onDrop(event) {
    let previousIndex = event.previousIndex;
    let currentIndex = event.currentIndex;
    if (previousIndex !== currentIndex) {
      if (this.visibleOptions) {
        if (this.filterValue) {
          previousIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(event.item.data, this.value);
          currentIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(this.visibleOptions[currentIndex], this.value);
        }
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(this.visibleOptions, event.previousIndex, event.currentIndex);
      }
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(this.value, previousIndex, currentIndex);
      this.changeFocusedOptionIndex(currentIndex);
      this.onReorder.emit([event.item.data]);
    }
  }
  onListFocus(event) {
    const focusableEl = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.listViewChild.nativeElement, '[data-p-highlight="true"]') || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    if (focusableEl) {
      const findIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(focusableEl, this.listViewChild.nativeElement.children);
      this.focused = true;
      const index = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : focusableEl ? findIndex : -1;
      this.changeFocusedOptionIndex(index);
    }
    this.onFocus.emit(event);
  }
  onListBlur(event) {
    this.focused = false;
    this.focusedOption = null;
    this.focusedOptionIndex = -1;
    this.onBlur.emit(event);
  }
  onItemKeydown(event) {
    switch (event.code) {
      case 'ArrowDown':
        this.onArrowDownKey(event);
        break;
      case 'ArrowUp':
        this.onArrowUpKey(event);
        break;
      case 'Home':
        this.onHomeKey(event);
        break;
      case 'End':
        this.onEndKey(event);
        break;
      case 'Enter':
        this.onEnterKey(event);
        break;
      case 'Space':
        this.onSpaceKey(event);
        break;
      case 'KeyA':
        if (event.ctrlKey) {
          this.d_selection = [...this.value];
          this.selectionChange.emit(this.d_selection);
        }
      default:
        break;
    }
  }
  onOptionMouseDown(index) {
    this.focused = true;
    this.focusedOptionIndex = index;
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
    if (event.shiftKey) {
      this.onEnterKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
    if (event.shiftKey) {
      this.onEnterKey(event);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    if (event.ctrlKey && event.shiftKey) {
      let visibleOptions = this.getVisibleOptions();
      let focusedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
      this.d_selection = [...this.value].slice(0, focusedIndex + 1);
      this.selectionChange.emit(this.d_selection);
    } else {
      this.changeFocusedOptionIndex(0);
    }
    event.preventDefault();
  }
  onEndKey(event) {
    if (event.ctrlKey && event.shiftKey) {
      let visibleOptions = this.getVisibleOptions();
      let focusedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
      this.d_selection = [...this.value].slice(focusedIndex, visibleOptions.length - 1);
      this.selectionChange.emit(this.d_selection);
    } else {
      this.changeFocusedOptionIndex(primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]').length - 1);
    }
    event.preventDefault();
  }
  onEnterKey(event) {
    this.onItemClick(event, this.focusedOption);
    event.preventDefault();
  }
  onSpaceKey(event) {
    event.preventDefault();
    if (event.shiftKey && this.selection && this.selection.length > 0) {
      let visibleOptions = this.getVisibleOptions();
      let lastSelectedIndex = this.getLatestSelectedVisibleOptionIndex(visibleOptions);
      if (lastSelectedIndex !== -1) {
        let focusedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
        this.d_selection = [...visibleOptions.slice(Math.min(lastSelectedIndex, focusedIndex), Math.max(lastSelectedIndex, focusedIndex) + 1)];
        this.selectionChange.emit(this.d_selection);
        this.onSelectionChange.emit({
          originalEvent: event,
          value: this.d_selection
        });
        return;
      }
    }
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const items = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    const matchedOptionIndex = [...items].findIndex(link => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const items = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    const matchedOptionIndex = [...items].findIndex(link => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  getLatestSelectedVisibleOptionIndex(visibleOptions) {
    const latestSelectedItem = [...this.d_selection].reverse().find(item => visibleOptions.includes(item));
    return latestSelectedItem !== undefined ? visibleOptions.indexOf(latestSelectedItem) : -1;
  }
  getVisibleOptions() {
    return this.visibleOptions && this.visibleOptions.length > 0 ? this.visibleOptions : this.value && this.value.length > 0 ? this.value : null;
  }
  getFocusedOption(index) {
    if (index === -1) return null;
    return this.visibleOptions && this.visibleOptions.length ? this.visibleOptions[index] : this.value && this.value.length ? this.value[index] : null;
  }
  changeFocusedOptionIndex(index) {
    const items = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    let order = index >= items.length ? items.length - 1 : index < 0 ? 0 : index;
    this.focusedOptionIndex = items[order] ? items[order].getAttribute('id') : -1;
    this.focusedOption = this.getFocusedOption(order);
    this.scrollInView(this.focusedOptionIndex);
  }
  scrollInView(id) {
    const element = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.listViewChild.nativeElement, `[data-pc-section="item"][id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return !primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(nextItem, 'p-orderlist-item') || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return !primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(prevItem, 'p-orderlist-item') || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;else return null;
  }
  moveDisabled() {
    if (this.disabled || !this.selection.length) {
      return true;
    }
  }
  focusedOptionId() {
    return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
  }
  createStyle() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      if (!this.styleElement) {
        this.renderer.setAttribute(this.el.nativeElement.children[0], this.id, '');
        this.styleElement = this.renderer.createElement('style');
        this.renderer.setAttribute(this.styleElement, 'type', 'text/css');
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = `
                    @media screen and (max-width: ${this.breakpoint}) {
                        .p-orderlist[${this.id}] {
                            flex-direction: column;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls {
                            padding: var(--content-padding);
                            flex-direction: row;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls .p-button {
                            margin-right: var(--inline-spacing);
                            margin-bottom: 0;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls .p-button:last-child {
                            margin-right: 0;
                        }
                    }
                `;
        this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
      }
    }
  }
  destroyStyle() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      if (this.styleElement) {
        this.renderer.removeChild(this.document, this.styleElement);
        this.styleElement = null;
        ``;
      }
    }
  }
  ngOnDestroy() {
    this.destroyStyle();
  }
  static ɵfac = function OrderList_Factory(t) {
    return new (t || OrderList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrderList,
    selectors: [["p-orderList"]],
    contentQueries: function OrderList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function OrderList_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      header: "header",
      style: "style",
      styleClass: "styleClass",
      tabindex: "tabindex",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      listStyle: "listStyle",
      responsive: "responsive",
      filterBy: "filterBy",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      metaKeySelection: "metaKeySelection",
      dragdrop: "dragdrop",
      controlsPosition: "controlsPosition",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      breakpoint: "breakpoint",
      stripedRows: "stripedRows",
      disabled: "disabled",
      trackBy: "trackBy",
      selection: "selection",
      value: "value"
    },
    outputs: {
      selectionChange: "selectionChange",
      onReorder: "onReorder",
      onSelectionChange: "onSelectionChange",
      onFilterEvent: "onFilterEvent",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    decls: 21,
    vars: 43,
    consts: [[3, "ngClass", "ngStyle"], [1, "p-orderlist-controls"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-icon-only", 3, "disabled", "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-orderlist-list-container"], ["class", "p-orderlist-header", 4, "ngIf"], ["class", "p-orderlist-filter-container", 4, "ngIf"], ["cdkDropList", "", "role", "listbox", "aria-multiselectable", "true", 1, "p-orderlist-list", 3, "id", "ngStyle", "tabindex", "cdkDropListDropped", "focus", "blur", "keydown"], ["listelement", ""], ["ngFor", "", 3, "ngForTrackBy", "ngForOf"], [1, "p-orderlist-header"], ["class", "p-orderlist-title", 4, "ngIf"], [1, "p-orderlist-title"], [1, "p-orderlist-filter-container"], [4, "ngIf", "ngIfElse"], ["builtInFilterElement", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-orderlist-filter"], ["type", "text", "role", "textbox", 1, "p-orderlist-filter-input", "p-inputtext", "p-component", 3, "disabled", "keyup"], ["filter", ""], [3, "styleClass", 4, "ngIf"], ["class", "p-orderlist-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-orderlist-filter-icon"], ["pRipple", "", "cdkDrag", "", "role", "option", "class", "p-orderlist-item", 3, "id", "ngClass", "cdkDragData", "cdkDragDisabled", "click", "touchend", "mousedown", 4, "ngIf"], ["pRipple", "", "cdkDrag", "", "role", "option", 1, "p-orderlist-item", 3, "id", "ngClass", "cdkDragData", "cdkDragDisabled", "click", "touchend", "mousedown"], ["class", "p-orderlist-empty-message", 4, "ngIf"], [1, "p-orderlist-empty-message"]],
    template: function OrderList_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderList_Template_button_click_2_listener() {
          return ctx.moveUp();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderList_AngleUpIcon_3_Template, 1, 1, "AngleUpIcon", 3)(4, OrderList_4_Template, 1, 0, null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderList_Template_button_click_5_listener() {
          return ctx.moveTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderList_AngleDoubleUpIcon_6_Template, 1, 1, "AngleDoubleUpIcon", 3)(7, OrderList_7_Template, 1, 0, null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderList_Template_button_click_8_listener() {
          return ctx.moveDown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrderList_AngleDownIcon_9_Template, 1, 1, "AngleDownIcon", 3)(10, OrderList_10_Template, 1, 0, null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderList_Template_button_click_11_listener() {
          return ctx.moveBottom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderList_AngleDoubleDownIcon_12_Template, 1, 1, "AngleDoubleDownIcon", 3)(13, OrderList_13_Template, 1, 0, null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrderList_div_15_Template, 3, 3, "div", 6)(16, OrderList_div_16_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function OrderList_Template_ul_cdkDropListDropped_17_listener($event) {
          return ctx.onDrop($event);
        })("focus", function OrderList_Template_ul_focus_17_listener($event) {
          return ctx.onListFocus($event);
        })("blur", function OrderList_Template_ul_blur_17_listener($event) {
          return ctx.onListBlur($event);
        })("keydown", function OrderList_Template_ul_keydown_17_listener($event) {
          return ctx.onItemKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OrderList_ng_template_19_Template, 1, 1, "ng-template", 10)(20, OrderList_ng_container_20_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](39, _c5, ctx.stripedRows, ctx.controlsPosition === "left", ctx.controlsPosition === "right"))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "root");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.moveDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.moveUpAriaLabel)("data-pc-section", "moveUpButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moveUpIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.moveUpIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.moveDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.moveTopAriaLabel)("data-pc-section", "moveTopButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moveTopIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.moveTopIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.moveDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.moveDownAriaLabel)("data-pc-section", "moveDownButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moveDownIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.moveDownIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.moveDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.moveBottomAriaLabel)("data-pc-section", "moveBottomButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moveBottomIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.moveBottomIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header || ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "_list")("ngStyle", ctx.listStyle)("tabindex", ctx.tabindex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "list")("aria-activedescendant", ctx.focused ? ctx.focusedOptionId() : undefined)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForTrackBy", ctx.trackBy)("ngForOf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmpty() && (ctx.emptyMessageTemplate || ctx.emptyFilterMessageTemplate));
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag, primeng_icons_angledoubledown__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleDownIcon, primeng_icons_angledoubleup__WEBPACK_IMPORTED_MODULE_9__.AngleDoubleUpIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_10__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_11__.AngleDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__.SearchIcon],
    styles: ["@layer primeng{.p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-orderlist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-orderlist-item,.p-orderlist.p-state-disabled .p-button{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-orderList',
      template: `
        <div
            [ngClass]="{ 'p-orderlist p-component': true, 'p-orderlist-striped': stripedRows, 'p-orderlist-controls-left': controlsPosition === 'left', 'p-orderlist-controls-right': controlsPosition === 'right' }"
            [ngStyle]="style"
            [class]="styleClass"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-orderlist-controls" [attr.data-pc-section]="'controls'">
                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveUp()" [attr.aria-label]="moveUpAriaLabel" [attr.data-pc-section]="'moveUpButton'">
                    <AngleUpIcon *ngIf="!moveUpIconTemplate" [attr.data-pc-section]="'moveupicon'" />
                    <ng-template *ngTemplateOutlet="moveUpIconTemplate"></ng-template>
                </button>
                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveTop()" [attr.aria-label]="moveTopAriaLabel" [attr.data-pc-section]="'moveTopButton'">
                    <AngleDoubleUpIcon *ngIf="!moveTopIconTemplate" [attr.data-pc-section]="'movetopicon'" />
                    <ng-template *ngTemplateOutlet="moveTopIconTemplate"></ng-template>
                </button>
                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveDown()" [attr.aria-label]="moveDownAriaLabel" [attr.data-pc-section]="'moveDownButton'">
                    <AngleDownIcon *ngIf="!moveDownIconTemplate" [attr.data-pc-section]="'movedownicon'" />
                    <ng-template *ngTemplateOutlet="moveDownIconTemplate"></ng-template>
                </button>
                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveBottom()" [attr.aria-label]="moveBottomAriaLabel" [attr.data-pc-section]="'moveBottomButton'">
                    <AngleDoubleDownIcon *ngIf="!moveBottomIconTemplate" [attr.data-pc-section]="'movebottomicon'" />
                    <ng-template *ngTemplateOutlet="moveBottomIconTemplate"></ng-template>
                </button>
            </div>
            <div class="p-orderlist-list-container" [attr.data-pc-section]="'container'">
                <div class="p-orderlist-header" *ngIf="header || headerTemplate" [attr.data-pc-section]="'header'">
                    <div class="p-orderlist-title" *ngIf="!headerTemplate">{{ header }}</div>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                </div>
                <div class="p-orderlist-filter-container" *ngIf="filterBy" [attr.data-pc-section]="'filterContainer'">
                    <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                        <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                    </ng-container>
                    <ng-template #builtInFilterElement>
                        <div class="p-orderlist-filter" [attr.data-pc-section]="'filter'">
                            <input
                                #filter
                                type="text"
                                role="textbox"
                                (keyup)="onFilterKeyup($event)"
                                [disabled]="disabled"
                                class="p-orderlist-filter-input p-inputtext p-component"
                                [attr.placeholder]="filterPlaceholder"
                                [attr.aria-label]="ariaFilterLabel"
                            />
                            <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-orderlist-filter-icon'" [attr.data-pc-section]="'filterIcon'" />
                            <span class="p-orderlist-filter-icon" *ngIf="filterIconTemplate" [attr.data-pc-section]="'filterIcon'">
                                <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                            </span>
                        </div>
                    </ng-template>
                </div>
                <ul
                    #listelement
                    [id]="id + '_list'"
                    cdkDropList
                    (cdkDropListDropped)="onDrop($event)"
                    class="p-orderlist-list"
                    [ngStyle]="listStyle"
                    [attr.data-pc-section]="'list'"
                    role="listbox"
                    [tabindex]="tabindex"
                    aria-multiselectable="true"
                    [attr.aria-activedescendant]="focused ? focusedOptionId() : undefined"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    (focus)="onListFocus($event)"
                    (blur)="onListBlur($event)"
                    (keydown)="onItemKeydown($event)"
                >
                    <ng-template ngFor [ngForTrackBy]="trackBy" let-item [ngForOf]="value" let-i="index" let-l="last">
                        <li
                            [id]="id + '_' + i"
                            pRipple
                            cdkDrag
                            role="option"
                            class="p-orderlist-item"
                            [ngClass]="{ 'p-highlight': isSelected(item), 'p-disabled': disabled, 'p-focus': id + '_' + i === focusedOptionId() }"
                            [cdkDragData]="item"
                            [cdkDragDisabled]="!dragdrop"
                            (click)="onItemClick($event, item, i, id + '_' + i)"
                            (touchend)="onItemTouchEnd()"
                            (mousedown)="onOptionMouseDown(i)"
                            *ngIf="isItemVisible(item)"
                            [attr.aria-selected]="isSelected(item)"
                            [attr.data-pc-section]="'item'"
                            [attr.data-p-highlight]="isSelected(item)"
                            [attr.data-p-focused]="id + '_' + i === focusedOptionId()"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                        </li>
                    </ng-template>
                    <ng-container *ngIf="isEmpty() && (emptyMessageTemplate || emptyFilterMessageTemplate)">
                        <li *ngIf="!filterValue || !emptyFilterMessageTemplate" class="p-orderlist-empty-message" [attr.data-pc-section]="'emptyMessage'">
                            <ng-container *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
                        </li>
                        <li *ngIf="filterValue" class="p-orderlist-empty-message" [attr.data-pc-section]="'emptyMessage'">
                            <ng-container *ngTemplateOutlet="emptyFilterMessageTemplate"></ng-container>
                        </li>
                    </ng-container>
                </ul>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-orderlist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-orderlist-item,.p-orderlist.p-state-disabled .p-button{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
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
    type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig
  }], {
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    metaKeySelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    controlsPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterMatchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stripedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onReorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFilterEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    listViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['listelement']
    }],
    filterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filter']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate]
    }]
  });
})();
class OrderListModule {
  static ɵfac = function OrderListModule_Factory(t) {
    return new (t || OrderListModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: OrderListModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule, primeng_icons_angledoubledown__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleDownIcon, primeng_icons_angledoubleup__WEBPACK_IMPORTED_MODULE_9__.AngleDoubleUpIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_10__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_11__.AngleDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__.SearchIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderListModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule, primeng_icons_angledoubledown__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleDownIcon, primeng_icons_angledoubleup__WEBPACK_IMPORTED_MODULE_9__.AngleDoubleUpIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_10__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_11__.AngleDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__.SearchIcon],
      exports: [OrderList, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule],
      declarations: [OrderList]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 34177:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-picklist.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickList: () => (/* binding */ PickList),
/* harmony export */   PickListModule: () => (/* binding */ PickListModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 64946);
/* harmony import */ var primeng_icons_angledoubledown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/angledoubledown */ 98133);
/* harmony import */ var primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/angledoubleleft */ 50147);
/* harmony import */ var primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angledoubleright */ 33246);
/* harmony import */ var primeng_icons_angledoubleup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/angledoubleup */ 54692);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/angledown */ 12269);
/* harmony import */ var primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/angleleft */ 49298);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/angleright */ 65486);
/* harmony import */ var primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/icons/angleup */ 45325);
/* harmony import */ var primeng_icons_home__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/icons/home */ 36737);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/icons/search */ 79103);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 15861);

























/**
 * PickList is used to reorder items between different lists.
 * @group Components
 */
const _c0 = ["sourcelist"];
const _c1 = ["targetlist"];
const _c2 = ["sourceFilter"];
const _c3 = ["targetFilter"];
function PickList_div_1_AngleUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "moveupicon");
  }
}
function PickList_div_1_3_ng_template_0_Template(rf, ctx) {}
function PickList_div_1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_1_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_1_AngleDoubleUpIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movetopicon");
  }
}
function PickList_div_1_6_ng_template_0_Template(rf, ctx) {}
function PickList_div_1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_1_6_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_1_AngleDownIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movedownicon");
  }
}
function PickList_div_1_9_ng_template_0_Template(rf, ctx) {}
function PickList_div_1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_1_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_1_AngleDoubleDownIcon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movebottomicon");
  }
}
function PickList_div_1_12_ng_template_0_Template(rf, ctx) {}
function PickList_div_1_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_1_12_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.moveUp(_r3, ctx_r32.source, ctx_r32.selectedItemsSource, ctx_r32.onSourceReorder, ctx_r32.SOURCE_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PickList_div_1_AngleUpIcon_2_Template, 1, 1, "AngleUpIcon", 8)(3, PickList_div_1_3_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.moveTop(_r3, ctx_r34.source, ctx_r34.selectedItemsSource, ctx_r34.onSourceReorder, ctx_r34.SOURCE_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PickList_div_1_AngleDoubleUpIcon_5_Template, 1, 1, "AngleDoubleUpIcon", 8)(6, PickList_div_1_6_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.moveDown(_r3, ctx_r35.source, ctx_r35.selectedItemsSource, ctx_r35.onSourceReorder, ctx_r35.SOURCE_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PickList_div_1_AngleDownIcon_8_Template, 1, 1, "AngleDownIcon", 8)(9, PickList_div_1_9_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_div_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r36.moveBottom(_r3, ctx_r36.source, ctx_r36.selectedItemsSource, ctx_r36.onSourceReorder, ctx_r36.SOURCE_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PickList_div_1_AngleDoubleDownIcon_11_Template, 1, 1, "AngleDoubleDownIcon", 8)(12, PickList_div_1_12_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourceControls")("data-pc-group-section", "controls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.sourceMoveDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.moveUpAriaLabel)("data-pc-section", "sourceMoveUpButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.moveUpIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.moveUpIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.sourceMoveDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.moveTopAriaLabel)("data-pc-section", "sourceMoveTopButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.moveTopIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.moveTopIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.sourceMoveDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.moveDownAriaLabel)("data-pc-section", "sourceMoveDownButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.moveDownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.moveDownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.sourceMoveDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.moveBottomAriaLabel)("data-pc-section", "sourceMoveBottomButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.moveBottomIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.moveBottomIconTemplate);
  }
}
function PickList_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r37.sourceHeader);
  }
}
function PickList_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PickList_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_3_div_1_Template, 2, 1, "div", 19)(2, PickList_div_3_ng_container_2_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourceHeader")("data-pc-group-section", "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.sourceHeaderTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.sourceHeaderTemplate);
  }
}
function PickList_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c4 = a0 => ({
  options: a0
});
function PickList_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r39.sourceFilterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r39.sourceFilterOptions));
  }
}
function PickList_div_4_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchIcon", 29);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-picklist-filter-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourcefilterIcon");
  }
}
function PickList_div_4_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {}
function PickList_div_4_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_4_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_4_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_4_ng_template_2_span_4_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourcefilterIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r45.sourceFilterIconTemplate);
  }
}
function PickList_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24)(1, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PickList_div_4_ng_template_2_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onFilter($event, ctx_r48.SOURCE_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PickList_div_4_ng_template_2_SearchIcon_3_Template, 1, 2, "SearchIcon", 27)(4, PickList_div_4_ng_template_2_span_4_Template, 2, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourceFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r40.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r40.sourceFilterPlaceholder)("aria-label", ctx_r40.ariaSourceFilterLabel)("data-pc-section", "sourceFilterInput");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r40.sourceFilterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.sourceFilterIconTemplate);
  }
}
function PickList_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_4_ng_container_1_Template, 2, 4, "ng-container", 22)(2, PickList_div_4_ng_template_2_Template, 5, 7, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourceFilterContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.sourceFilterTemplate)("ngIfElse", _r41);
  }
}
function PickList_ng_template_7_li_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c5 = (a1, a2) => ({
  "p-picklist-item": true,
  "p-highlight": a1,
  "p-disabled": a2
});
const _c6 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function PickList_ng_template_7_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_ng_template_7_li_0_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r50 = ctx_r56.$implicit;
      const i_r51 = ctx_r56.index;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r55.onItemClick($event, item_r50, ctx_r55.selectedItemsSource, ctx_r55.onSourceSelect, ctx_r55.idSource + "_" + i_r51));
    })("mousedown", function PickList_ng_template_7_li_0_Template_li_mousedown_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r58.onOptionMouseDown(i_r51, ctx_r58.SOURCE_LIST));
    })("dblclick", function PickList_ng_template_7_li_0_Template_li_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r60.onSourceItemDblClick());
    })("touchend", function PickList_ng_template_7_li_0_Template_li_touchend_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r61.onItemTouchEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_template_7_li_0_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r50 = ctx_r62.$implicit;
    const i_r51 = ctx_r62.index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c5, ctx_r53.isSelected(item_r50, ctx_r53.selectedItemsSource), ctx_r53.disabled))("id", ctx_r53.idSource + "_" + i_r51)("ngClass", ctx_r53.itemClass(item_r50, ctx_r53.idSource + "_" + i_r51, ctx_r53.selectedItemsSource))("cdkDragData", item_r50)("cdkDragDisabled", !ctx_r53.dragdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "item")("aria-selected", ctx_r53.isSelected(item_r50, ctx_r53.selectedItemsSource));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r53.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c6, item_r50, i_r51));
  }
}
function PickList_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_ng_template_7_li_0_Template, 2, 15, "li", 31);
  }
  if (rf & 2) {
    const item_r50 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isItemVisible(item_r50, ctx_r4.SOURCE_LIST));
  }
}
function PickList_ng_container_8_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PickList_ng_container_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_8_li_1_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourceEmptyMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r63.emptyMessageSourceTemplate);
  }
}
function PickList_ng_container_8_li_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PickList_ng_container_8_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_8_li_2_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourceEmptyMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r64.emptyFilterMessageSourceTemplate);
  }
}
function PickList_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_8_li_1_Template, 2, 2, "li", 33)(2, PickList_ng_container_8_li_2_Template, 2, 2, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.filterValueSource || !ctx_r5.emptyFilterMessageSourceTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.filterValueSource);
  }
}
function PickList_ng_container_11_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movetotargeticon");
  }
}
function PickList_ng_container_11_AngleDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movetotargeticon");
  }
}
function PickList_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_11_AngleRightIcon_1_Template, 1, 1, "AngleRightIcon", 8)(2, PickList_ng_container_11_AngleDownIcon_2_Template, 1, 1, "AngleDownIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.viewChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.viewChanged);
  }
}
function PickList_12_ng_template_0_Template(rf, ctx) {}
function PickList_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_12_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_14_AngleDoubleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleRightIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movealltotargeticon");
  }
}
function PickList_ng_container_14_AngleDoubleDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movealltotargeticon");
  }
}
function PickList_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_14_AngleDoubleRightIcon_1_Template, 1, 1, "AngleDoubleRightIcon", 8)(2, PickList_ng_container_14_AngleDoubleDownIcon_2_Template, 1, 1, "AngleDoubleDownIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.viewChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.viewChanged);
  }
}
function PickList_15_ng_template_0_Template(rf, ctx) {}
function PickList_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_15_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_17_AngleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleLeftIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movedownsourceticon");
  }
}
function PickList_ng_container_17_AngleUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movedownsourceticon");
  }
}
function PickList_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_17_AngleLeftIcon_1_Template, 1, 1, "AngleLeftIcon", 8)(2, PickList_ng_container_17_AngleUpIcon_2_Template, 1, 1, "AngleUpIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.viewChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.viewChanged);
  }
}
function PickList_18_ng_template_0_Template(rf, ctx) {}
function PickList_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_18_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_20_AngleDoubleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleLeftIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movealltosourceticon");
  }
}
function PickList_ng_container_20_AngleDoubleUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movealltosourceticon");
  }
}
function PickList_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_20_AngleDoubleLeftIcon_1_Template, 1, 1, "AngleDoubleLeftIcon", 8)(2, PickList_ng_container_20_AngleDoubleUpIcon_2_Template, 1, 1, "AngleDoubleUpIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.viewChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.viewChanged);
  }
}
function PickList_21_ng_template_0_Template(rf, ctx) {}
function PickList_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_21_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r79.targetHeader);
  }
}
function PickList_div_23_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PickList_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_23_div_1_Template, 2, 1, "div", 19)(2, PickList_div_23_ng_container_2_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetHead")("data-pc-group-section", "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.targetHeaderTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.targetHeaderTemplate);
  }
}
function PickList_div_24_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PickList_div_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_24_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r81.targetFilterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r81.targetFilterOptions));
  }
}
function PickList_div_24_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchIcon", 29);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-picklist-filter-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetfiltericon");
  }
}
function PickList_div_24_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {}
function PickList_div_24_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_24_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_24_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_24_ng_template_2_span_4_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetfiltericon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r87.targetFilterIconTemplate);
  }
}
function PickList_div_24_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24)(1, "input", 25, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PickList_div_24_ng_template_2_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r90.onFilter($event, ctx_r90.TARGET_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PickList_div_24_ng_template_2_SearchIcon_3_Template, 1, 2, "SearchIcon", 27)(4, PickList_div_24_ng_template_2_span_4_Template, 2, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r82.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r82.targetFilterPlaceholder)("aria-label", ctx_r82.ariaTargetFilterLabel)("data-pc-section", "targetFilterInput");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r82.targetFilterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.targetFilterIconTemplate);
  }
}
function PickList_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_24_ng_container_1_Template, 2, 4, "ng-container", 22)(2, PickList_div_24_ng_template_2_Template, 5, 7, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetFilterContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.targetFilterTemplate)("ngIfElse", _r83);
  }
}
function PickList_ng_template_27_li_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PickList_ng_template_27_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_ng_template_27_li_0_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r92 = ctx_r98.$implicit;
      const i_r93 = ctx_r98.index;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r97.onItemClick($event, item_r92, ctx_r97.selectedItemsTarget, ctx_r97.onTargetSelect, ctx_r97.idTarget + "_" + i_r93));
    })("mousedown", function PickList_ng_template_27_li_0_Template_li_mousedown_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);
      const i_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r100.onOptionMouseDown(i_r93, ctx_r100.TARGET_LIST));
    })("dblclick", function PickList_ng_template_27_li_0_Template_li_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r102.onTargetItemDblClick());
    })("touchend", function PickList_ng_template_27_li_0_Template_li_touchend_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r103.onItemTouchEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_template_27_li_0_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r92 = ctx_r104.$implicit;
    const i_r93 = ctx_r104.index;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c5, ctx_r95.isSelected(item_r92, ctx_r95.selectedItemsTarget), ctx_r95.disabled))("id", ctx_r95.idTarget + "_" + i_r93)("ngClass", ctx_r95.itemClass(item_r92, ctx_r95.idTarget + "_" + i_r93, ctx_r95.selectedItemsTarget))("cdkDragData", item_r92)("cdkDragDisabled", !ctx_r95.dragdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "item")("aria-selected", ctx_r95.isSelected(item_r92, ctx_r95.selectedItemsTarget));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r95.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c6, item_r92, i_r93));
  }
}
function PickList_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_ng_template_27_li_0_Template, 2, 15, "li", 31);
  }
  if (rf & 2) {
    const item_r92 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.isItemVisible(item_r92, ctx_r17.TARGET_LIST));
  }
}
function PickList_ng_container_28_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PickList_ng_container_28_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_28_li_1_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetEmptyMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r105.emptyMessageTargetTemplate);
  }
}
function PickList_ng_container_28_li_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PickList_ng_container_28_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_28_li_2_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetEmptyMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r106.emptyFilterMessageTargetTemplate);
  }
}
function PickList_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_ng_container_28_li_1_Template, 2, 2, "li", 33)(2, PickList_ng_container_28_li_2_Template, 2, 2, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.filterValueTarget || !ctx_r18.emptyFilterMessageTargetTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.filterValueTarget);
  }
}
function PickList_div_29_AngleUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "moveupicon");
  }
}
function PickList_div_29_3_ng_template_0_Template(rf, ctx) {}
function PickList_div_29_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_29_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_29_AngleDoubleUpIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movetopicon");
  }
}
function PickList_div_29_6_ng_template_0_Template(rf, ctx) {}
function PickList_div_29_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_29_6_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_29_AngleDownIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movedownicon");
  }
}
function PickList_div_29_9_ng_template_0_Template(rf, ctx) {}
function PickList_div_29_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_29_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_29_AngleDoubleDownIcon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "movebottomicon");
  }
}
function PickList_div_29_12_ng_template_0_Template(rf, ctx) {}
function PickList_div_29_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PickList_div_29_12_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_div_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r121.moveUp(_r16, ctx_r121.target, ctx_r121.selectedItemsTarget, ctx_r121.onTargetReorder, ctx_r121.TARGET_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PickList_div_29_AngleUpIcon_2_Template, 1, 1, "AngleUpIcon", 8)(3, PickList_div_29_3_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_div_29_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r123.moveTop(_r16, ctx_r123.target, ctx_r123.selectedItemsTarget, ctx_r123.onTargetReorder, ctx_r123.TARGET_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PickList_div_29_AngleDoubleUpIcon_5_Template, 1, 1, "AngleDoubleUpIcon", 8)(6, PickList_div_29_6_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_div_29_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r124.moveDown(_r16, ctx_r124.target, ctx_r124.selectedItemsTarget, ctx_r124.onTargetReorder, ctx_r124.TARGET_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PickList_div_29_AngleDownIcon_8_Template, 1, 1, "AngleDownIcon", 8)(9, PickList_div_29_9_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_div_29_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r125.moveBottom(_r16, ctx_r125.target, ctx_r125.selectedItemsTarget, ctx_r125.onTargetReorder, ctx_r125.TARGET_LIST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PickList_div_29_AngleDoubleDownIcon_11_Template, 1, 1, "AngleDoubleDownIcon", 8)(12, PickList_div_29_12_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetControls")("data-pc-group-section", "controls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r19.targetMoveDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r19.moveUpAriaLabel)("data-pc-section", "targetMoveUpButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.moveUpIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.moveUpIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r19.targetMoveDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r19.moveTopAriaLabel)("data-pc-section", "targetMoveTopButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.moveTopIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.moveTopIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r19.targetMoveDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r19.moveDownAriaLabel)("data-pc-section", "targetMoveDownButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.moveDownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.moveDownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r19.targetMoveDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r19.moveBottomAriaLabel)("data-pc-section", "targetMoveBottomButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.moveBottomIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.moveBottomIconTemplate);
  }
}
const _c7 = a1 => ({
  "p-picklist p-component": true,
  "p-picklist-striped": a1
});
const _c8 = a0 => ({
  $implicit: a0
});
class PickList {
  document;
  platformId;
  renderer;
  el;
  cd;
  filterService;
  config;
  /**
   * An array of objects for the source list.
   * @group Props
   */
  source;
  /**
   * An array of objects for the target list.
   * @group Props
   */
  target;
  /**
   * Text for the source list caption
   * @group Props
   */
  sourceHeader;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Defines a string that labels the move to right button for accessibility.
   * @group Props
   */
  rightButtonAriaLabel;
  /**
   * Defines a string that labels the move to left button for accessibility.
   * @group Props
   */
  leftButtonAriaLabel;
  /**
   * Defines a string that labels the move to all right button for accessibility.
   * @group Props
   */
  allRightButtonAriaLabel;
  /**
   * Defines a string that labels the move to all left button for accessibility.
   * @group Props
   */
  allLeftButtonAriaLabel;
  /**
   * Defines a string that labels the move to up button for accessibility.
   * @group Props
   */
  upButtonAriaLabel;
  /**
   * Defines a string that labels the move to down button for accessibility.
   * @group Props
   */
  downButtonAriaLabel;
  /**
   * Defines a string that labels the move to top button for accessibility.
   * @group Props
   */
  topButtonAriaLabel;
  /**
   * Defines a string that labels the move to bottom button for accessibility.
   * @group Props
   */
  bottomButtonAriaLabel;
  /**
   * Text for the target list caption
   * @group Props
   */
  targetHeader;
  /**
   * When enabled orderlist adjusts its controls based on screen size.
   * @group Props
   */
  responsive;
  /**
   * When specified displays an input field to filter the items on keyup and decides which field to search (Accepts multiple fields with a comma).
   * @group Props
   */
  filterBy;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity. Use sourceTrackBy or targetTrackBy in case different algorithms are needed per list.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy in source list, default algorithm checks for object identity.
   * @group Props
   */
  sourceTrackBy;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy in target list, default algorithm checks for object identity.
   * @group Props
   */
  targetTrackBy;
  /**
   * Whether to show filter input for source list when filterBy is enabled.
   * @group Props
   */
  showSourceFilter = true;
  /**
   * Whether to show filter input for target list when filterBy is enabled.
   * @group Props
   */
  showTargetFilter = true;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = true;
  /**
   * Whether to enable dragdrop based reordering.
   * @group Props
   */
  dragdrop = false;
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
   * Inline style of the source list element.
   * @group Props
   */
  sourceStyle;
  /**
   * Inline style of the target list element.
   * @group Props
   */
  targetStyle;
  /**
   * Whether to show buttons of source list.
   * @group Props
   */
  showSourceControls = true;
  /**
   * Whether to show buttons of target list.
   * @group Props
   */
  showTargetControls = true;
  /**
   * Placeholder text on source filter input.
   * @group Props
   */
  sourceFilterPlaceholder;
  /**
   * Placeholder text on target filter input.
   * @group Props
   */
  targetFilterPlaceholder;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Defines a string that labels the filter input of source list.
   * @group Props
   */
  ariaSourceFilterLabel;
  /**
   * Defines a string that labels the filter input of target list.
   * @group Props
   */
  ariaTargetFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = 'contains';
  /**
   * Whether to displays rows with alternating colors.
   * @group Props
   */
  stripedRows;
  /**
   * Keeps selection on the transfer list.
   * @group Props
   */
  keepSelection = false;
  /**
   * Indicates the width of the screen at which the component should change its behavior.
   * @group Props
   */
  get breakpoint() {
    return this._breakpoint;
  }
  set breakpoint(value) {
    if (value !== this._breakpoint) {
      this._breakpoint = value;
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.destroyMedia();
        this.initMedia();
      }
    }
  }
  /**
   * Callback to invoke when items are moved from target to source.
   * @param {PickListMoveToSourceEvent} event - Custom move to source event.
   * @group Emits
   */
  onMoveToSource = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when all items are moved from target to source.
   * @param {PickListMoveAllToSourceEvent} event - Custom move all to source event.
   * @group Emits
   */
  onMoveAllToSource = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when all items are moved from source to target.
   * @param {PickListMoveAllToTargetEvent} event - Custom move all to target event.
   * @group Emits
   */
  onMoveAllToTarget = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when items are moved from source to target.
   * @param {PickListMoveToTargetEvent} event - Custom move to target event.
   * @group Emits
   */
  onMoveToTarget = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when items are reordered within source list.
   * @param {PickListSourceReorderEvent} event - Custom source reorder event.
   * @group Emits
   */
  onSourceReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when items are reordered within target list.
   * @param {PickListTargetReorderEvent} event - Custom target reorder event.
   * @group Emits
   */
  onTargetReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when items are selected within source list.
   * @param {PickListSourceSelectEvent} event - Custom source select event.
   * @group Emits
   */
  onSourceSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when items are selected within target list.
   * @param {PickListTargetSelectEvent} event - Custom target select event.
   * @group Emits
   */
  onTargetSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the source list is filtered
   * @param {PickListSourceFilterEvent} event - Custom source filter event.
   * @group Emits
   */
  onSourceFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the target list is filtered
   * @param {PickListTargetFilterEvent} event - Custom target filter event.
   * @group Emits
   */
  onTargetFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the list is focused
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the list is blurred
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  listViewSourceChild;
  listViewTargetChild;
  sourceFilterViewChild;
  targetFilterViewChild;
  templates;
  get moveUpAriaLabel() {
    return this.upButtonAriaLabel ? this.upButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveUp : undefined;
  }
  get moveTopAriaLabel() {
    return this.topButtonAriaLabel ? this.topButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveTop : undefined;
  }
  get moveDownAriaLabel() {
    return this.downButtonAriaLabel ? this.downButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveDown : undefined;
  }
  get moveBottomAriaLabel() {
    return this.bottomButtonAriaLabel ? this.bottomButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveDown : undefined;
  }
  get moveToTargetAriaLabel() {
    return this.rightButtonAriaLabel ? this.rightButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveToTarget : undefined;
  }
  get moveAllToTargetAriaLabel() {
    return this.allRightButtonAriaLabel ? this.allRightButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveAllToTarget : undefined;
  }
  get moveToSourceAriaLabel() {
    return this.allLeftButtonAriaLabel ? this.allLeftButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveToSource : undefined;
  }
  get moveAllToSourceAriaLabel() {
    return this.allLeftButtonAriaLabel ? this.allLeftButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveAllToSource : undefined;
  }
  get idSource() {
    return this.id + '_source';
  }
  get idTarget() {
    return this.id + '_target';
  }
  get focusedOptionId() {
    return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
  }
  _breakpoint = '960px';
  itemTemplate;
  moveTopIconTemplate;
  moveUpIconTemplate;
  moveDownIconTemplate;
  moveBottomIconTemplate;
  moveToTargetIconTemplate;
  moveAllToTargetIconTemplate;
  moveToSourceIconTemplate;
  moveAllToSourceIconTemplate;
  targetFilterIconTemplate;
  sourceFilterIconTemplate;
  visibleOptionsSource;
  visibleOptionsTarget;
  selectedItemsSource = [];
  selectedItemsTarget = [];
  reorderedListElement;
  movedUp;
  movedDown;
  itemTouched;
  styleElement;
  id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
  filterValueSource;
  filterValueTarget;
  fromListType;
  emptyMessageSourceTemplate;
  emptyFilterMessageSourceTemplate;
  emptyMessageTargetTemplate;
  emptyFilterMessageTargetTemplate;
  sourceHeaderTemplate;
  targetHeaderTemplate;
  sourceFilterTemplate;
  targetFilterTemplate;
  sourceFilterOptions;
  targetFilterOptions;
  SOURCE_LIST = -1;
  TARGET_LIST = 1;
  window;
  media;
  viewChanged;
  focusedOptionIndex = -1;
  focusedOption;
  focused = {
    sourceList: false,
    targetList: false
  };
  mediaChangeListener;
  constructor(document, platformId, renderer, el, cd, filterService, config) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
    this.window = this.document.defaultView;
  }
  ngOnInit() {
    if (this.responsive) {
      this.createStyle();
      this.initMedia();
    }
    if (this.filterBy) {
      this.sourceFilterOptions = {
        filter: value => this.filterSource(value),
        reset: () => this.resetSourceFilter()
      };
      this.targetFilterOptions = {
        filter: value => this.filterTarget(value),
        reset: () => this.resetTargetFilter()
      };
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'sourceHeader':
          this.sourceHeaderTemplate = item.template;
          break;
        case 'targetHeader':
          this.targetHeaderTemplate = item.template;
          break;
        case 'sourceFilter':
          this.sourceFilterTemplate = item.template;
          break;
        case 'targetFilter':
          this.targetFilterTemplate = item.template;
          break;
        case 'emptymessagesource':
          this.emptyMessageSourceTemplate = item.template;
          break;
        case 'emptyfiltermessagesource':
          this.emptyFilterMessageSourceTemplate = item.template;
          break;
        case 'emptymessagetarget':
          this.emptyMessageTargetTemplate = item.template;
          break;
        case 'emptyfiltermessagetarget':
          this.emptyFilterMessageTargetTemplate = item.template;
          break;
        case 'moveupicon':
          this.moveUpIconTemplate = item.template;
          break;
        case 'movetopicon':
          this.moveTopIconTemplate = item.template;
          break;
        case 'movedownicon':
          this.moveDownIconTemplate = item.template;
          break;
        case 'movebottomicon':
          this.moveBottomIconTemplate = item.template;
          break;
        case 'movetotargeticon':
          this.moveToTargetIconTemplate = item.template;
          break;
        case 'movealltotargeticon':
          this.moveAllToTargetIconTemplate = item.template;
          break;
        case 'movetosourceicon':
          this.moveToSourceIconTemplate = item.template;
          break;
        case 'movealltosourceicon':
          this.moveAllToSourceIconTemplate = item.template;
          break;
        case 'targetfiltericon':
          this.targetFilterIconTemplate = item.template;
          break;
        case 'sourcefiltericon':
          this.sourceFilterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewChecked() {
    if (this.movedUp || this.movedDown) {
      let listItems = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.reorderedListElement, 'li.p-highlight');
      let listItem;
      if (this.movedUp) listItem = listItems[0];else listItem = listItems[listItems.length - 1];
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.scrollInView(this.reorderedListElement, listItem);
      this.movedUp = false;
      this.movedDown = false;
      this.reorderedListElement = null;
    }
  }
  onItemClick(event, item, selectedItems, callback, itemId) {
    if (this.disabled) {
      return;
    }
    let index = this.findIndexInList(item, selectedItems);
    if (itemId) this.focusedOptionIndex = itemId;
    let selected = index != -1;
    let metaSelection = this.itemTouched ? false : this.metaKeySelection;
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey || event.shiftKey;
      if (selected && metaKey) {
        selectedItems.splice(index, 1);
      } else {
        if (!metaKey) {
          selectedItems.length = 0;
        }
        selectedItems.push(item);
      }
    } else {
      if (selected) selectedItems.splice(index, 1);else selectedItems.push(item);
    }
    callback.emit({
      originalEvent: event,
      items: selectedItems
    });
    this.itemTouched = false;
  }
  onOptionMouseDown(index, listType) {
    this.focused[listType === this.SOURCE_LIST ? 'sourceList' : 'targetList'] = true;
    this.focusedOptionIndex = index;
  }
  onSourceItemDblClick() {
    if (this.disabled) {
      return;
    }
    this.moveRight();
  }
  onTargetItemDblClick() {
    if (this.disabled) {
      return;
    }
    this.moveLeft();
  }
  onFilter(event, listType) {
    let query = event.target.value;
    if (listType === this.SOURCE_LIST) this.filterSource(query);else if (listType === this.TARGET_LIST) this.filterTarget(query);
  }
  filterSource(value = '') {
    this.filterValueSource = value.trim().toLocaleLowerCase(this.filterLocale);
    this.filter(this.source, this.SOURCE_LIST);
  }
  filterTarget(value = '') {
    this.filterValueTarget = value.trim().toLocaleLowerCase(this.filterLocale);
    this.filter(this.target, this.TARGET_LIST);
  }
  filter(data, listType) {
    let searchFields = this.filterBy.split(',');
    if (listType === this.SOURCE_LIST) {
      this.visibleOptionsSource = this.filterService.filter(data, searchFields, this.filterValueSource, this.filterMatchMode, this.filterLocale);
      this.onSourceFilter.emit({
        query: this.filterValueSource,
        value: this.visibleOptionsSource
      });
    } else if (listType === this.TARGET_LIST) {
      this.visibleOptionsTarget = this.filterService.filter(data, searchFields, this.filterValueTarget, this.filterMatchMode, this.filterLocale);
      this.onTargetFilter.emit({
        query: this.filterValueTarget,
        value: this.visibleOptionsTarget
      });
    }
  }
  isItemVisible(item, listType) {
    if (listType == this.SOURCE_LIST) return this.isVisibleInList(this.visibleOptionsSource, item, this.filterValueSource);else return this.isVisibleInList(this.visibleOptionsTarget, item, this.filterValueTarget);
  }
  isEmpty(listType) {
    if (listType == this.SOURCE_LIST) return this.filterValueSource ? !this.visibleOptionsSource || this.visibleOptionsSource.length === 0 : !this.source || this.source.length === 0;else return this.filterValueTarget ? !this.visibleOptionsTarget || this.visibleOptionsTarget.length === 0 : !this.target || this.target.length === 0;
  }
  isVisibleInList(data, item, filterValue) {
    if (filterValue && filterValue.trim().length) {
      for (let i = 0; i < data.length; i++) {
        if (item == data[i]) {
          return true;
        }
      }
    } else {
      return true;
    }
  }
  onItemTouchEnd() {
    if (this.disabled) {
      return;
    }
    this.itemTouched = true;
  }
  sortByIndexInList(items, list) {
    return items.sort((item1, item2) => primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(item1, list) - primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(item2, list));
  }
  moveUp(listElement, list, selectedItems, callback, listType) {
    if (selectedItems && selectedItems.length) {
      selectedItems = this.sortByIndexInList(selectedItems, list);
      for (let i = 0; i < selectedItems.length; i++) {
        let selectedItem = selectedItems[i];
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, list);
        if (selectedItemIndex != 0) {
          let movedItem = list[selectedItemIndex];
          let temp = list[selectedItemIndex - 1];
          list[selectedItemIndex - 1] = movedItem;
          list[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && (this.filterValueSource && listType === this.SOURCE_LIST || this.filterValueTarget && listType === this.TARGET_LIST)) this.filter(list, listType);
      this.movedUp = true;
      this.reorderedListElement = listElement;
      callback.emit({
        items: selectedItems
      });
    }
  }
  moveTop(listElement, list, selectedItems, callback, listType) {
    if (selectedItems && selectedItems.length) {
      selectedItems = this.sortByIndexInList(selectedItems, list);
      for (let i = 0; i < selectedItems.length; i++) {
        let selectedItem = selectedItems[i];
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, list);
        if (selectedItemIndex != 0) {
          let movedItem = list.splice(selectedItemIndex, 1)[0];
          list.unshift(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && (this.filterValueSource && listType === this.SOURCE_LIST || this.filterValueTarget && listType === this.TARGET_LIST)) this.filter(list, listType);
      listElement.scrollTop = 0;
      callback.emit({
        items: selectedItems
      });
    }
  }
  moveDown(listElement, list, selectedItems, callback, listType) {
    if (selectedItems && selectedItems.length) {
      selectedItems = this.sortByIndexInList(selectedItems, list);
      for (let i = selectedItems.length - 1; i >= 0; i--) {
        let selectedItem = selectedItems[i];
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, list);
        if (selectedItemIndex != list.length - 1) {
          let movedItem = list[selectedItemIndex];
          let temp = list[selectedItemIndex + 1];
          list[selectedItemIndex + 1] = movedItem;
          list[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && (this.filterValueSource && listType === this.SOURCE_LIST || this.filterValueTarget && listType === this.TARGET_LIST)) this.filter(list, listType);
      this.movedDown = true;
      this.reorderedListElement = listElement;
      callback.emit({
        items: selectedItems
      });
    }
  }
  moveBottom(listElement, list, selectedItems, callback, listType) {
    if (selectedItems && selectedItems.length) {
      selectedItems = this.sortByIndexInList(selectedItems, list);
      for (let i = selectedItems.length - 1; i >= 0; i--) {
        let selectedItem = selectedItems[i];
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, list);
        if (selectedItemIndex != list.length - 1) {
          let movedItem = list.splice(selectedItemIndex, 1)[0];
          list.push(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && (this.filterValueSource && listType === this.SOURCE_LIST || this.filterValueTarget && listType === this.TARGET_LIST)) this.filter(list, listType);
      listElement.scrollTop = listElement.scrollHeight;
      callback.emit({
        items: selectedItems
      });
    }
  }
  moveRight() {
    if (this.selectedItemsSource && this.selectedItemsSource.length) {
      for (let i = 0; i < this.selectedItemsSource.length; i++) {
        let selectedItem = this.selectedItemsSource[i];
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, this.target) == -1) {
          this.target?.push(this.source?.splice(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, this.source), 1)[0]);
          if (this.visibleOptionsSource?.includes(selectedItem)) {
            this.visibleOptionsSource.splice(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, this.visibleOptionsSource), 1);
          }
        }
      }
      this.onMoveToTarget.emit({
        items: this.selectedItemsSource
      });
      if (this.keepSelection) {
        this.selectedItemsTarget = [...this.selectedItemsTarget, ...this.selectedItemsSource];
      }
      this.selectedItemsSource = [];
      if (this.filterValueTarget) {
        this.filter(this.target, this.TARGET_LIST);
      }
    }
  }
  moveAllRight() {
    if (this.source) {
      let movedItems = [];
      for (let i = 0; i < this.source.length; i++) {
        if (this.isItemVisible(this.source[i], this.SOURCE_LIST)) {
          let removedItem = this.source.splice(i, 1)[0];
          this.target?.push(removedItem);
          movedItems.push(removedItem);
          i--;
        }
      }
      this.onMoveAllToTarget.emit({
        items: movedItems
      });
      if (this.keepSelection) {
        this.selectedItemsTarget = [...this.selectedItemsTarget, ...this.selectedItemsSource];
      }
      this.selectedItemsSource = [];
      if (this.filterValueTarget) {
        this.filter(this.target, this.TARGET_LIST);
      }
      this.visibleOptionsSource = [];
    }
  }
  moveLeft() {
    if (this.selectedItemsTarget && this.selectedItemsTarget.length) {
      for (let i = 0; i < this.selectedItemsTarget.length; i++) {
        let selectedItem = this.selectedItemsTarget[i];
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, this.source) == -1) {
          this.source?.push(this.target?.splice(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, this.target), 1)[0]);
          if (this.visibleOptionsTarget?.includes(selectedItem)) {
            this.visibleOptionsTarget.splice(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedItem, this.visibleOptionsTarget), 1)[0];
          }
        }
      }
      this.onMoveToSource.emit({
        items: this.selectedItemsTarget
      });
      if (this.keepSelection) {
        this.selectedItemsSource = [...this.selectedItemsSource, ...this.selectedItemsTarget];
      }
      this.selectedItemsTarget = [];
      if (this.filterValueSource) {
        this.filter(this.source, this.SOURCE_LIST);
      }
    }
  }
  moveAllLeft() {
    if (this.target) {
      let movedItems = [];
      for (let i = 0; i < this.target.length; i++) {
        if (this.isItemVisible(this.target[i], this.TARGET_LIST)) {
          let removedItem = this.target.splice(i, 1)[0];
          this.source?.push(removedItem);
          movedItems.push(removedItem);
          i--;
        }
      }
      this.onMoveAllToSource.emit({
        items: movedItems
      });
      if (this.keepSelection) {
        this.selectedItemsSource = [...this.selectedItemsSource, ...this.selectedItemsTarget];
      }
      this.selectedItemsTarget = [];
      if (this.filterValueSource) {
        this.filter(this.source, this.SOURCE_LIST);
      }
      this.visibleOptionsTarget = [];
    }
  }
  isSelected(item, selectedItems) {
    return this.findIndexInList(item, selectedItems) != -1;
  }
  itemClass(item, id, selectedItems) {
    return {
      'p-picklist-item': true,
      'p-highlight': this.isSelected(item, selectedItems),
      'p-focus': id === this.focusedOptionId
    };
  }
  findIndexInList(item, selectedItems) {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(item, selectedItems);
  }
  onDrop(event, listType) {
    let isTransfer = event.previousContainer !== event.container;
    let dropIndexes = this.getDropIndexes(event.previousIndex, event.currentIndex, listType, isTransfer, event.item.data);
    if (listType === this.SOURCE_LIST) {
      if (isTransfer) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.transferArrayItem)(event.previousContainer.data, event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(event.item.data, this.selectedItemsTarget);
        if (selectedItemIndex != -1) {
          this.selectedItemsTarget.splice(selectedItemIndex, 1);
          if (this.keepSelection) {
            this.selectedItemsTarget.push(event.item.data);
          }
        }
        if (this.visibleOptionsTarget) this.visibleOptionsTarget.splice(event.previousIndex, 1);
        this.onMoveToSource.emit({
          items: [event.item.data]
        });
      } else {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.moveItemInArray)(event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
        this.onSourceReorder.emit({
          items: [event.item.data]
        });
      }
      if (this.filterValueSource) {
        this.filter(this.source, this.SOURCE_LIST);
      }
    } else {
      if (isTransfer) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.transferArrayItem)(event.previousContainer.data, event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
        let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(event.item.data, this.selectedItemsSource);
        if (selectedItemIndex != -1) {
          this.selectedItemsSource.splice(selectedItemIndex, 1);
          if (this.keepSelection) {
            this.selectedItemsTarget.push(event.item.data);
          }
        }
        if (this.visibleOptionsSource) this.visibleOptionsSource.splice(event.previousIndex, 1);
        this.onMoveToTarget.emit({
          items: [event.item.data]
        });
      } else {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.moveItemInArray)(event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
        this.onTargetReorder.emit({
          items: [event.item.data]
        });
      }
      if (this.filterValueTarget) {
        this.filter(this.target, this.TARGET_LIST);
      }
    }
  }
  onListFocus(event, listType) {
    let listElement = this.getListElement(listType);
    const selectedFirstItem = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(listElement, 'li.p-picklist-item.p-highlight') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(listElement, 'li.p-picklist-item');
    const findIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(selectedFirstItem, listElement.children);
    this.focused[listType === this.SOURCE_LIST ? 'sourceList' : 'targetList'] = true;
    const index = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : selectedFirstItem ? findIndex : -1;
    this.changeFocusedOptionIndex(index, listType);
    this.onFocus.emit(event);
  }
  onListBlur(event, listType) {
    this.focused[listType === this.SOURCE_LIST ? 'sourceList' : 'targetList'] = false;
    this.focusedOptionIndex = -1;
    this.focusedOption = null;
    this.onBlur.emit(event);
  }
  getListElement(listType) {
    return listType === this.SOURCE_LIST ? this.listViewSourceChild?.nativeElement : this.listViewTargetChild?.nativeElement;
  }
  getListItems(listType) {
    let listElemet = this.getListElement(listType);
    return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(listElemet, 'li.p-picklist-item');
  }
  getLatestSelectedVisibleOptionIndex(visibleList, selectedItems) {
    const latestSelectedItem = [...selectedItems].reverse().find(item => visibleList.includes(item));
    return latestSelectedItem !== undefined ? visibleList.indexOf(latestSelectedItem) : -1;
  }
  getVisibleList(listType) {
    if (listType === this.SOURCE_LIST) {
      return this.visibleOptionsSource && this.visibleOptionsSource.length > 0 ? this.visibleOptionsSource : this.source && this.source.length > 0 ? this.source : null;
    }
    return this.visibleOptionsTarget && this.visibleOptionsTarget.length > 0 ? this.visibleOptionsTarget : this.target && this.target.length > 0 ? this.target : null;
  }
  setSelectionList(listType, selectedItems) {
    if (listType === this.SOURCE_LIST) {
      this.selectedItemsSource = selectedItems;
    } else {
      this.selectedItemsTarget = selectedItems;
    }
  }
  findNextOptionIndex(index, listType) {
    const items = this.getListItems(listType);
    const matchedOptionIndex = [...items].findIndex(link => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index, listType) {
    const items = this.getListItems(listType);
    const matchedOptionIndex = [...items].findIndex(link => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  onItemKeyDown(event, selectedItems, callback, listType) {
    switch (event.code) {
      case 'ArrowDown':
        this.onArrowDownKey(event, selectedItems, callback, listType);
        break;
      case 'ArrowUp':
        this.onArrowUpKey(event, selectedItems, callback, listType);
        break;
      case 'Home':
        this.onHomeKey(event, selectedItems, callback, listType);
        break;
      case 'End':
        this.onEndKey(event, selectedItems, callback, listType);
        break;
      case 'Enter':
        this.onEnterKey(event, selectedItems, callback);
        break;
      case 'Space':
        this.onSpaceKey(event, selectedItems, callback, listType);
        break;
      case 'KeyA':
        if (event.ctrlKey) {
          this.setSelectionList(listType, this.getVisibleList(listType));
          callback.emit({
            items: selectedItems
          });
          event.preventDefault();
        }
      default:
        break;
    }
  }
  getFocusedOption(index, listType) {
    if (index === -1) return null;
    if (listType === this.SOURCE_LIST) {
      return this.visibleOptionsSource && this.visibleOptionsSource.length ? this.visibleOptionsSource[index] : this.source && this.source.length ? this.source[index] : null;
    }
    return this.visibleOptionsTarget && this.visibleOptionsTarget.length ? this.visibleOptionsTarget[index] : this.target && this.target.length ? this.target[index] : null;
  }
  changeFocusedOptionIndex(index, listType) {
    const items = this.getListItems(listType);
    if (items?.length > 0) {
      let order = index >= items.length ? items.length - 1 : index < 0 ? 0 : index;
      this.focusedOptionIndex = items[order].getAttribute('id');
      this.focusedOption = this.getFocusedOption(order, listType);
      this.scrollInView(items[order].getAttribute('id'), listType);
    }
  }
  scrollInView(id, listType) {
    const element = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.getListElement(listType), `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: 'nearest',
        inline: 'start'
      });
    }
  }
  onArrowDownKey(event, selectedItems, callback, listType) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex, listType);
    this.changeFocusedOptionIndex(optionIndex, listType);
    if (event.shiftKey) {
      this.onEnterKey(event, selectedItems, callback);
    }
    event.preventDefault();
  }
  onArrowUpKey(event, selectedItems, callback, listType) {
    const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex, listType);
    this.changeFocusedOptionIndex(optionIndex, listType);
    if (event.shiftKey) {
      this.onEnterKey(event, selectedItems, callback);
    }
    event.preventDefault();
  }
  onEnterKey(event, selectedItems, callback) {
    this.onItemClick(event, this.focusedOption, selectedItems, callback);
    event.preventDefault();
  }
  onSpaceKey(event, selectedItems, callback, listType) {
    event.preventDefault();
    if (event.shiftKey && selectedItems && selectedItems.length > 0) {
      let visibleList = this.getVisibleList(listType);
      let lastSelectedIndex = this.getLatestSelectedVisibleOptionIndex(visibleList, selectedItems);
      if (lastSelectedIndex !== -1) {
        let focusedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(this.focusedOption, visibleList);
        selectedItems = [...visibleList.slice(Math.min(lastSelectedIndex, focusedIndex), Math.max(lastSelectedIndex, focusedIndex) + 1)];
        this.setSelectionList(listType, selectedItems);
        callback.emit({
          items: selectedItems
        });
        return;
      }
    }
    this.onEnterKey(event, selectedItems, callback);
  }
  onHomeKey(event, selectedItems, callback, listType) {
    if (event.ctrlKey && event.shiftKey) {
      let visibleList = this.getVisibleList(listType);
      let focusedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(this.focusedOption, visibleList);
      selectedItems = [...visibleList.slice(0, focusedIndex + 1)];
      this.setSelectionList(listType, selectedItems);
      callback.emit({
        items: selectedItems
      });
    } else {
      this.changeFocusedOptionIndex(0, listType);
    }
    event.preventDefault();
  }
  onEndKey(event, selectedItems, callback, listType) {
    let visibleList = this.getVisibleList(listType);
    let lastIndex = visibleList && visibleList.length > 0 ? visibleList.length - 1 : null;
    if (lastIndex === null) return;
    if (event.ctrlKey && event.shiftKey) {
      let focusedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(this.focusedOption, visibleList);
      selectedItems = [...visibleList.slice(focusedIndex, lastIndex)];
      this.setSelectionList(listType, selectedItems);
      callback.emit({
        items: selectedItems
      });
    } else {
      this.changeFocusedOptionIndex(lastIndex, listType);
    }
    event.preventDefault();
  }
  getDropIndexes(fromIndex, toIndex, droppedList, isTransfer, data) {
    let previousIndex, currentIndex;
    if (droppedList === this.SOURCE_LIST) {
      previousIndex = isTransfer ? this.filterValueTarget ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(data, this.target) : fromIndex : this.filterValueSource ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(data, this.source) : fromIndex;
      currentIndex = this.filterValueSource ? this.findFilteredCurrentIndex(this.visibleOptionsSource, toIndex, this.source) : toIndex;
    } else {
      previousIndex = isTransfer ? this.filterValueSource ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(data, this.source) : fromIndex : this.filterValueTarget ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(data, this.target) : fromIndex;
      currentIndex = this.filterValueTarget ? this.findFilteredCurrentIndex(this.visibleOptionsTarget, toIndex, this.target) : toIndex;
    }
    return {
      previousIndex,
      currentIndex
    };
  }
  findFilteredCurrentIndex(visibleOptions, index, options) {
    if (visibleOptions.length === index) {
      let toIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(visibleOptions[index - 1], options);
      return toIndex + 1;
    } else {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(visibleOptions[index], options);
    }
  }
  resetSourceFilter() {
    this.visibleOptionsSource = null;
    this.filterValueSource = null;
    this.sourceFilterViewChild && (this.sourceFilterViewChild.nativeElement.value = '');
  }
  resetTargetFilter() {
    this.visibleOptionsTarget = null;
    this.filterValueTarget = null;
    this.targetFilterViewChild && (this.targetFilterViewChild.nativeElement.value = '');
  }
  resetFilter() {
    this.resetSourceFilter();
    this.resetTargetFilter();
  }
  onItemKeydown(event, item, selectedItems, callback) {
    let listItem = event.currentTarget;
    switch (event.which) {
      //down
      case 40:
        var nextItem = this.findNextItem(listItem);
        if (nextItem) {
          nextItem.focus();
        }
        event.preventDefault();
        break;
      //up
      case 38:
        var prevItem = this.findPrevItem(listItem);
        if (prevItem) {
          prevItem.focus();
        }
        event.preventDefault();
        break;
      //enter
      case 13:
        this.onItemClick(event, item, selectedItems, callback);
        event.preventDefault();
        break;
    }
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextItem, 'p-picklist-item') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevItem, 'p-picklist-item') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;else return null;
  }
  initMedia() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this.media = this.window.matchMedia(`(max-width: ${this.breakpoint})`);
      this.viewChanged = this.media.matches;
      this.bindMediaChangeListener();
    }
  }
  destroyMedia() {
    this.unbindMediaChangeListener();
  }
  bindMediaChangeListener() {
    if (this.media && !this.mediaChangeListener) {
      this.mediaChangeListener = this.renderer.listen(this.media, 'change', event => {
        this.viewChanged = event.matches;
        this.cd.markForCheck();
      });
    }
  }
  unbindMediaChangeListener() {
    if (this.mediaChangeListener) {
      this.mediaChangeListener();
      this.mediaChangeListener = null;
    }
  }
  createStyle() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      if (!this.styleElement) {
        this.renderer.setAttribute(this.el.nativeElement.children[0], this.id, '');
        this.styleElement = this.renderer.createElement('style');
        this.renderer.setAttribute(this.styleElement, 'type', 'text/css');
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = `
                @media screen and (max-width: ${this.breakpoint}) {
                    .p-picklist[${this.id}] {
                        flex-direction: column;
                    }

                    .p-picklist[${this.id}] .p-picklist-buttons {
                        padding: var(--content-padding);
                        flex-direction: row;
                    }

                    .p-picklist[${this.id}] .p-picklist-buttons .p-button {
                        margin-right: var(--inline-spacing);
                        margin-bottom: 0;
                    }

                    .p-picklist[${this.id}] .p-picklist-buttons .p-button:last-child {
                        margin-right: 0;
                    }
                }`;
        this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
      }
    }
  }
  sourceMoveDisabled() {
    if (this.disabled || !this.selectedItemsSource.length) {
      return true;
    }
  }
  targetMoveDisabled() {
    if (this.disabled || !this.selectedItemsTarget.length) {
      return true;
    }
  }
  moveRightDisabled() {
    return this.disabled || primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(this.selectedItemsSource);
  }
  moveLeftDisabled() {
    return this.disabled || primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(this.selectedItemsTarget);
  }
  moveAllRightDisabled() {
    return this.disabled || primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(this.source);
  }
  moveAllLeftDisabled() {
    return this.disabled || primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(this.target);
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
      ``;
    }
  }
  ngOnDestroy() {
    this.destroyStyle();
    this.destroyMedia();
  }
  static ɵfac = function PickList_Factory(t) {
    return new (t || PickList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PickList,
    selectors: [["p-pickList"]],
    contentQueries: function PickList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function PickList_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewSourceChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewTargetChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sourceFilterViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.targetFilterViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      source: "source",
      target: "target",
      sourceHeader: "sourceHeader",
      tabindex: "tabindex",
      rightButtonAriaLabel: "rightButtonAriaLabel",
      leftButtonAriaLabel: "leftButtonAriaLabel",
      allRightButtonAriaLabel: "allRightButtonAriaLabel",
      allLeftButtonAriaLabel: "allLeftButtonAriaLabel",
      upButtonAriaLabel: "upButtonAriaLabel",
      downButtonAriaLabel: "downButtonAriaLabel",
      topButtonAriaLabel: "topButtonAriaLabel",
      bottomButtonAriaLabel: "bottomButtonAriaLabel",
      targetHeader: "targetHeader",
      responsive: "responsive",
      filterBy: "filterBy",
      filterLocale: "filterLocale",
      trackBy: "trackBy",
      sourceTrackBy: "sourceTrackBy",
      targetTrackBy: "targetTrackBy",
      showSourceFilter: "showSourceFilter",
      showTargetFilter: "showTargetFilter",
      metaKeySelection: "metaKeySelection",
      dragdrop: "dragdrop",
      style: "style",
      styleClass: "styleClass",
      sourceStyle: "sourceStyle",
      targetStyle: "targetStyle",
      showSourceControls: "showSourceControls",
      showTargetControls: "showTargetControls",
      sourceFilterPlaceholder: "sourceFilterPlaceholder",
      targetFilterPlaceholder: "targetFilterPlaceholder",
      disabled: "disabled",
      ariaSourceFilterLabel: "ariaSourceFilterLabel",
      ariaTargetFilterLabel: "ariaTargetFilterLabel",
      filterMatchMode: "filterMatchMode",
      stripedRows: "stripedRows",
      keepSelection: "keepSelection",
      breakpoint: "breakpoint"
    },
    outputs: {
      onMoveToSource: "onMoveToSource",
      onMoveAllToSource: "onMoveAllToSource",
      onMoveAllToTarget: "onMoveAllToTarget",
      onMoveToTarget: "onMoveToTarget",
      onSourceReorder: "onSourceReorder",
      onTargetReorder: "onTargetReorder",
      onSourceSelect: "onSourceSelect",
      onTargetSelect: "onTargetSelect",
      onSourceFilter: "onSourceFilter",
      onTargetFilter: "onTargetFilter",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    decls: 30,
    vars: 72,
    consts: [["cdkDropListGroup", "", 3, "ngStyle", "ngClass"], ["class", "p-picklist-buttons p-picklist-source-controls", 4, "ngIf"], [1, "p-picklist-list-wrapper", "p-picklist-source-wrapper"], ["class", "p-picklist-header", 4, "ngIf"], ["class", "p-picklist-filter-container", 4, "ngIf"], ["cdkDropList", "", "role", "listbox", "aria-multiselectable", "true", 1, "p-picklist-list", "p-picklist-source", 3, "id", "cdkDropListData", "ngStyle", "keydown", "focus", "blur", "cdkDropListDropped"], ["sourcelist", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "p-picklist-buttons", "p-picklist-transfer-buttons"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-icon-only", 3, "disabled", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-picklist-list-wrapper", "p-picklist-target-wrapper"], ["cdkDropList", "", "role", "listbox", "aria-multiselectable", "true", 1, "p-picklist-list", "p-picklist-target", 3, "id", "cdkDropListData", "ngStyle", "keydown", "focus", "blur", "cdkDropListDropped"], ["targetlist", ""], ["class", "p-picklist-buttons p-picklist-target-controls", 4, "ngIf"], [1, "p-picklist-buttons", "p-picklist-source-controls"], [4, "ngTemplateOutlet"], [1, "p-picklist-header"], ["class", "p-picklist-title", 4, "ngIf"], [1, "p-picklist-title"], [1, "p-picklist-filter-container"], [4, "ngIf", "ngIfElse"], ["builtInSourceElement", ""], [1, "p-picklist-filter"], ["type", "text", "role", "textbox", 1, "p-picklist-filter-input", "p-inputtext", "p-component", 3, "disabled", "keyup"], ["sourceFilter", ""], [3, "styleClass", 4, "ngIf"], ["class", "p-picklist-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-picklist-filter-icon"], ["pRipple", "", "cdkDrag", "", "role", "option", 3, "ngClass", "id", "cdkDragData", "cdkDragDisabled", "click", "mousedown", "dblclick", "touchend", 4, "ngIf"], ["pRipple", "", "cdkDrag", "", "role", "option", 3, "ngClass", "id", "cdkDragData", "cdkDragDisabled", "click", "mousedown", "dblclick", "touchend"], ["class", "p-picklist-empty-message", 4, "ngIf"], [1, "p-picklist-empty-message"], ["builtInTargetElement", ""], ["targetFilter", ""], [1, "p-picklist-buttons", "p-picklist-target-controls"]],
    template: function PickList_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickList_div_1_Template, 13, 22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PickList_div_3_Template, 3, 4, "div", 3)(4, PickList_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PickList_Template_ul_keydown_5_listener($event) {
          return ctx.onItemKeyDown($event, ctx.selectedItemsSource, ctx.onSourceSelect, ctx.SOURCE_LIST);
        })("focus", function PickList_Template_ul_focus_5_listener($event) {
          return ctx.onListFocus($event, ctx.SOURCE_LIST);
        })("blur", function PickList_Template_ul_blur_5_listener($event) {
          return ctx.onListBlur($event, ctx.SOURCE_LIST);
        })("cdkDropListDropped", function PickList_Template_ul_cdkDropListDropped_5_listener($event) {
          return ctx.onDrop($event, ctx.SOURCE_LIST);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PickList_ng_template_7_Template, 1, 1, "ng-template", 7)(8, PickList_ng_container_8_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_Template_button_click_10_listener() {
          return ctx.moveRight();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PickList_ng_container_11_Template, 3, 2, "ng-container", 8)(12, PickList_12_Template, 1, 0, null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_Template_button_click_13_listener() {
          return ctx.moveAllRight();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PickList_ng_container_14_Template, 3, 2, "ng-container", 8)(15, PickList_15_Template, 1, 0, null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_Template_button_click_16_listener() {
          return ctx.moveLeft();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PickList_ng_container_17_Template, 3, 2, "ng-container", 8)(18, PickList_18_Template, 1, 0, null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickList_Template_button_click_19_listener() {
          return ctx.moveAllLeft();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PickList_ng_container_20_Template, 3, 2, "ng-container", 8)(21, PickList_21_Template, 1, 0, null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PickList_div_23_Template, 3, 4, "div", 3)(24, PickList_div_24_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PickList_Template_ul_keydown_25_listener($event) {
          return ctx.onItemKeyDown($event, ctx.selectedItemsTarget, ctx.onTargetSelect, ctx.TARGET_LIST);
        })("focus", function PickList_Template_ul_focus_25_listener($event) {
          return ctx.onListFocus($event, ctx.TARGET_LIST);
        })("blur", function PickList_Template_ul_blur_25_listener($event) {
          return ctx.onListBlur($event, ctx.TARGET_LIST);
        })("cdkDropListDropped", function PickList_Template_ul_cdkDropListDropped_25_listener($event) {
          return ctx.onDrop($event, ctx.TARGET_LIST);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PickList_ng_template_27_Template, 1, 1, "ng-template", 7)(28, PickList_ng_container_28_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PickList_div_29_Template, 13, 22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c7, ctx.stripedRows));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "picklist")("data-pc-section", "root");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSourceControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "sourceWrapper")("data-pc-group-section", "listWrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sourceHeader || ctx.sourceHeaderTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterBy && ctx.showSourceFilter !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.idSource + "_list")("cdkDropListData", ctx.source)("ngStyle", ctx.sourceStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", ctx.focused["sourceList"] ? ctx.focusedOptionId : undefined)("tabindex", ctx.source && ctx.source.length > 0 ? ctx.tabindex : -1)("data-pc-section", "sourceList")("data-pc-group-section", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.source)("ngForTrackBy", ctx.sourceTrackBy || ctx.trackBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmpty(ctx.SOURCE_LIST) && (ctx.emptyMessageSourceTemplate || ctx.emptyFilterMessageSourceTemplate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "buttons")("data-pc-group-section", "controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.moveRightDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.moveToTargetAriaLabel)("data-pc-section", "moveToTargetButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moveToTargetIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.moveToTargetIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c8, ctx.viewChanged));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.moveAllRightDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.moveAllToTargetAriaLabel)("data-pc-section", "moveAllToTargetButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moveAllToTargetIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.moveAllToTargetIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c8, ctx.viewChanged));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.moveLeftDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.moveToSourceAriaLabel)("data-pc-section", "moveToSourceButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moveToSourceIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.moveToSourceIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c8, ctx.viewChanged));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.moveAllLeftDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.moveAllToSourceAriaLabel)("data-pc-section", "moveAllToSourceButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moveAllToSourceIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.moveAllToSourceIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c8, ctx.viewChanged));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "targetWrapper")("data-pc-group-section", "listwrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.targetHeader || ctx.targetHeaderTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterBy && ctx.showTargetFilter !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.idTarget + "_list")("cdkDropListData", ctx.target)("ngStyle", ctx.targetStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", ctx.focused["targetList"] ? ctx.focusedOptionId : undefined)("tabindex", ctx.target && ctx.target.length > 0 ? ctx.tabindex : -1)("data-pc-section", "targetList")("data-pc-group-section", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.target)("ngForTrackBy", ctx.targetTrackBy || ctx.trackBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmpty(ctx.TARGET_LIST) && (ctx.emptyMessageTargetTemplate || ctx.emptyFilterMessageTargetTemplate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTargetControls);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag, primeng_icons_angledoubledown__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleDownIcon, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_9__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_10__.AngleDoubleRightIcon, primeng_icons_angledoubleup__WEBPACK_IMPORTED_MODULE_11__.AngleDoubleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_12__.AngleDownIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_13__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_14__.AngleRightIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_15__.AngleUpIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_16__.SearchIcon],
    styles: ["@layer primeng{.p-picklist{display:flex}.p-picklist-buttons{display:flex;flex-direction:column;justify-content:center}.p-picklist-list-wrapper{flex:1 1 50%}.p-picklist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-picklist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-picklist-item:not(.cdk-drag-disabled){cursor:move}.p-picklist-item.cdk-drag-placeholder{opacity:0}.p-picklist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-picklist-filter{position:relative}.p-picklist-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-picklist-filter-input{width:100%}.p-picklist-list.cdk-drop-list-dragging .p-picklist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-pickList',
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="{ 'p-picklist p-component': true, 'p-picklist-striped': stripedRows }" cdkDropListGroup [attr.data-pc-name]="'picklist'" [attr.data-pc-section]="'root'">
            <div class="p-picklist-buttons p-picklist-source-controls" *ngIf="showSourceControls" [attr.data-pc-section]="'sourceControls'" [attr.data-pc-group-section]="'controls'">
                <button
                    type="button"
                    [attr.aria-label]="moveUpAriaLabel"
                    pButton
                    pRipple
                    class="p-button-icon-only"
                    [disabled]="sourceMoveDisabled()"
                    (click)="moveUp(sourcelist, source, selectedItemsSource, onSourceReorder, SOURCE_LIST)"
                    [attr.data-pc-section]="'sourceMoveUpButton'"
                >
                    <AngleUpIcon *ngIf="!moveUpIconTemplate" [attr.data-pc-section]="'moveupicon'" />
                    <ng-template *ngTemplateOutlet="moveUpIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveTopAriaLabel"
                    pButton
                    pRipple
                    class="p-button-icon-only"
                    [disabled]="sourceMoveDisabled()"
                    (click)="moveTop(sourcelist, source, selectedItemsSource, onSourceReorder, SOURCE_LIST)"
                    [attr.data-pc-section]="'sourceMoveTopButton'"
                >
                    <AngleDoubleUpIcon *ngIf="!moveTopIconTemplate" [attr.data-pc-section]="'movetopicon'" />
                    <ng-template *ngTemplateOutlet="moveTopIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveDownAriaLabel"
                    pButton
                    pRipple
                    class="p-button-icon-only"
                    [disabled]="sourceMoveDisabled()"
                    (click)="moveDown(sourcelist, source, selectedItemsSource, onSourceReorder, SOURCE_LIST)"
                    [attr.data-pc-section]="'sourceMoveDownButton'"
                >
                    <AngleDownIcon *ngIf="!moveDownIconTemplate" [attr.data-pc-section]="'movedownicon'" />
                    <ng-template *ngTemplateOutlet="moveDownIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveBottomAriaLabel"
                    pButton
                    pRipple
                    class="p-button-icon-only"
                    [disabled]="sourceMoveDisabled()"
                    (click)="moveBottom(sourcelist, source, selectedItemsSource, onSourceReorder, SOURCE_LIST)"
                    [attr.data-pc-section]="'sourceMoveBottomButton'"
                >
                    <AngleDoubleDownIcon *ngIf="!moveBottomIconTemplate" [attr.data-pc-section]="'movebottomicon'" />
                    <ng-template *ngTemplateOutlet="moveBottomIconTemplate"></ng-template>
                </button>
            </div>
            <div class="p-picklist-list-wrapper p-picklist-source-wrapper" [attr.data-pc-section]="'sourceWrapper'" [attr.data-pc-group-section]="'listWrapper'">
                <div class="p-picklist-header" *ngIf="sourceHeader || sourceHeaderTemplate" [attr.data-pc-section]="'sourceHeader'" [attr.data-pc-group-section]="'header'">
                    <div class="p-picklist-title" *ngIf="!sourceHeaderTemplate">{{ sourceHeader }}</div>
                    <ng-container *ngTemplateOutlet="sourceHeaderTemplate"></ng-container>
                </div>
                <div class="p-picklist-filter-container" *ngIf="filterBy && showSourceFilter !== false" [attr.data-pc-section]="'sourceFilterContainer'">
                    <ng-container *ngIf="sourceFilterTemplate; else builtInSourceElement">
                        <ng-container *ngTemplateOutlet="sourceFilterTemplate; context: { options: sourceFilterOptions }"></ng-container>
                    </ng-container>
                    <ng-template #builtInSourceElement>
                        <div class="p-picklist-filter" [attr.data-pc-section]="'sourceFilter'">
                            <input
                                #sourceFilter
                                type="text"
                                role="textbox"
                                (keyup)="onFilter($event, SOURCE_LIST)"
                                class="p-picklist-filter-input p-inputtext p-component"
                                [disabled]="disabled"
                                [attr.placeholder]="sourceFilterPlaceholder"
                                [attr.aria-label]="ariaSourceFilterLabel"
                                [attr.data-pc-section]="'sourceFilterInput'"
                            />
                            <SearchIcon *ngIf="!sourceFilterIconTemplate" [styleClass]="'p-picklist-filter-icon'" [attr.data-pc-section]="'sourcefilterIcon'" />
                            <span class="p-picklist-filter-icon" *ngIf="sourceFilterIconTemplate" [attr.data-pc-section]="'sourcefilterIcon'">
                                <ng-template *ngTemplateOutlet="sourceFilterIconTemplate"></ng-template>
                            </span>
                        </div>
                    </ng-template>
                </div>

                <ul
                    #sourcelist
                    class="p-picklist-list p-picklist-source"
                    [id]="idSource + '_list'"
                    (keydown)="onItemKeyDown($event, selectedItemsSource, onSourceSelect, SOURCE_LIST)"
                    (focus)="onListFocus($event, SOURCE_LIST)"
                    (blur)="onListBlur($event, SOURCE_LIST)"
                    cdkDropList
                    [cdkDropListData]="source"
                    (cdkDropListDropped)="onDrop($event, SOURCE_LIST)"
                    [ngStyle]="sourceStyle"
                    role="listbox"
                    aria-multiselectable="true"
                    [attr.aria-activedescendant]="focused['sourceList'] ? focusedOptionId : undefined"
                    [attr.tabindex]="source && source.length > 0 ? tabindex : -1"
                    [attr.data-pc-section]="'sourceList'"
                    [attr.data-pc-group-section]="'list'"
                >
                    <ng-template ngFor let-item [ngForOf]="source" [ngForTrackBy]="sourceTrackBy || trackBy" let-i="index" let-l="last">
                        <li
                            [ngClass]="{ 'p-picklist-item': true, 'p-highlight': isSelected(item, selectedItemsSource), 'p-disabled': disabled }"
                            pRipple
                            cdkDrag
                            [id]="idSource + '_' + i"
                            [ngClass]="itemClass(item, idSource + '_' + i, selectedItemsSource)"
                            [cdkDragData]="item"
                            [cdkDragDisabled]="!dragdrop"
                            (click)="onItemClick($event, item, selectedItemsSource, onSourceSelect, idSource + '_' + i)"
                            (mousedown)="onOptionMouseDown(i, SOURCE_LIST)"
                            (dblclick)="onSourceItemDblClick()"
                            (touchend)="onItemTouchEnd()"
                            *ngIf="isItemVisible(item, SOURCE_LIST)"
                            role="option"
                            [attr.data-pc-section]="'item'"
                            [attr.aria-selected]="isSelected(item, selectedItemsSource)"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                        </li>
                    </ng-template>
                    <ng-container *ngIf="isEmpty(SOURCE_LIST) && (emptyMessageSourceTemplate || emptyFilterMessageSourceTemplate)">
                        <li class="p-picklist-empty-message" *ngIf="!filterValueSource || !emptyFilterMessageSourceTemplate" [attr.data-pc-section]="'sourceEmptyMessage'">
                            <ng-container *ngTemplateOutlet="emptyMessageSourceTemplate"></ng-container>
                        </li>
                        <li class="p-picklist-empty-message" *ngIf="filterValueSource" [attr.data-pc-section]="'sourceEmptyMessage'">
                            <ng-container *ngTemplateOutlet="emptyFilterMessageSourceTemplate"></ng-container>
                        </li>
                    </ng-container>
                </ul>
            </div>
            <div class="p-picklist-buttons p-picklist-transfer-buttons" [attr.data-pc-section]="'buttons'" [attr.data-pc-group-section]="'controls'">
                <button type="button" [attr.aria-label]="moveToTargetAriaLabel" pButton pRipple class="p-button-icon-only" [disabled]="moveRightDisabled()" (click)="moveRight()" [attr.data-pc-section]="'moveToTargetButton'">
                    <ng-container *ngIf="!moveToTargetIconTemplate">
                        <AngleRightIcon *ngIf="!viewChanged" [attr.data-pc-section]="'movetotargeticon'" />
                        <AngleDownIcon *ngIf="viewChanged" [attr.data-pc-section]="'movetotargeticon'" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="moveToTargetIconTemplate; context: { $implicit: viewChanged }"></ng-template>
                </button>
                <button type="button" [attr.aria-label]="moveAllToTargetAriaLabel" pButton pRipple class="p-button-icon-only" [disabled]="moveAllRightDisabled()" (click)="moveAllRight()" [attr.data-pc-section]="'moveAllToTargetButton'">
                    <ng-container *ngIf="!moveAllToTargetIconTemplate">
                        <AngleDoubleRightIcon *ngIf="!viewChanged" [attr.data-pc-section]="'movealltotargeticon'" />
                        <AngleDoubleDownIcon *ngIf="viewChanged" [attr.data-pc-section]="'movealltotargeticon'" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="moveAllToTargetIconTemplate; context: { $implicit: viewChanged }"></ng-template>
                </button>
                <button type="button" [attr.aria-label]="moveToSourceAriaLabel" pButton pRipple class="p-button-icon-only" [disabled]="moveLeftDisabled()" (click)="moveLeft()" [attr.data-pc-section]="'moveToSourceButton'">
                    <ng-container *ngIf="!moveToSourceIconTemplate">
                        <AngleLeftIcon *ngIf="!viewChanged" [attr.data-pc-section]="'movedownsourceticon'" />
                        <AngleUpIcon *ngIf="viewChanged" [attr.data-pc-section]="'movedownsourceticon'" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="moveToSourceIconTemplate; context: { $implicit: viewChanged }"></ng-template>
                </button>
                <button type="button" [attr.aria-label]="moveAllToSourceAriaLabel" pButton pRipple class="p-button-icon-only" [disabled]="moveAllLeftDisabled()" (click)="moveAllLeft()" [attr.data-pc-section]="'moveAllToSourceButton'">
                    <ng-container *ngIf="!moveAllToSourceIconTemplate">
                        <AngleDoubleLeftIcon *ngIf="!viewChanged" [attr.data-pc-section]="'movealltosourceticon'" />
                        <AngleDoubleUpIcon *ngIf="viewChanged" [attr.data-pc-section]="'movealltosourceticon'" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="moveAllToSourceIconTemplate; context: { $implicit: viewChanged }"></ng-template>
                </button>
            </div>
            <div class="p-picklist-list-wrapper p-picklist-target-wrapper" [attr.data-pc-section]="'targetWrapper'" [attr.data-pc-group-section]="'listwrapper'">
                <div class="p-picklist-header" *ngIf="targetHeader || targetHeaderTemplate" [attr.data-pc-section]="'targetHead'" [attr.data-pc-group-section]="'header'">
                    <div class="p-picklist-title" *ngIf="!targetHeaderTemplate">{{ targetHeader }}</div>
                    <ng-container *ngTemplateOutlet="targetHeaderTemplate"></ng-container>
                </div>
                <div class="p-picklist-filter-container" *ngIf="filterBy && showTargetFilter !== false" [attr.data-pc-section]="'targetFilterContainer'">
                    <ng-container *ngIf="targetFilterTemplate; else builtInTargetElement">
                        <ng-container *ngTemplateOutlet="targetFilterTemplate; context: { options: targetFilterOptions }"></ng-container>
                    </ng-container>
                    <ng-template #builtInTargetElement>
                        <div class="p-picklist-filter" [attr.data-pc-section]="'targetFilter'">
                            <input
                                #targetFilter
                                type="text"
                                role="textbox"
                                (keyup)="onFilter($event, TARGET_LIST)"
                                class="p-picklist-filter-input p-inputtext p-component"
                                [disabled]="disabled"
                                [attr.placeholder]="targetFilterPlaceholder"
                                [attr.aria-label]="ariaTargetFilterLabel"
                                [attr.data-pc-section]="'targetFilterInput'"
                            />
                            <SearchIcon *ngIf="!targetFilterIconTemplate" [styleClass]="'p-picklist-filter-icon'" [attr.data-pc-section]="'targetfiltericon'" />
                            <span class="p-picklist-filter-icon" *ngIf="targetFilterIconTemplate" [attr.data-pc-section]="'targetfiltericon'">
                                <ng-template *ngTemplateOutlet="targetFilterIconTemplate"></ng-template>
                            </span>
                        </div>
                    </ng-template>
                </div>
                <ul
                    #targetlist
                    class="p-picklist-list p-picklist-target"
                    [id]="idTarget + '_list'"
                    (keydown)="onItemKeyDown($event, selectedItemsTarget, onTargetSelect, TARGET_LIST)"
                    (focus)="onListFocus($event, TARGET_LIST)"
                    (blur)="onListBlur($event, TARGET_LIST)"
                    cdkDropList
                    [cdkDropListData]="target"
                    (cdkDropListDropped)="onDrop($event, TARGET_LIST)"
                    [ngStyle]="targetStyle"
                    role="listbox"
                    aria-multiselectable="true"
                    [attr.aria-activedescendant]="focused['targetList'] ? focusedOptionId : undefined"
                    [attr.tabindex]="target && target.length > 0 ? tabindex : -1"
                    [attr.data-pc-section]="'targetList'"
                    [attr.data-pc-group-section]="'list'"
                >
                    <ng-template ngFor let-item [ngForOf]="target" [ngForTrackBy]="targetTrackBy || trackBy" let-i="index" let-l="last">
                        <li
                            [ngClass]="{ 'p-picklist-item': true, 'p-highlight': isSelected(item, selectedItemsTarget), 'p-disabled': disabled }"
                            pRipple
                            cdkDrag
                            [id]="idTarget + '_' + i"
                            [ngClass]="itemClass(item, idTarget + '_' + i, selectedItemsTarget)"
                            [cdkDragData]="item"
                            [cdkDragDisabled]="!dragdrop"
                            (click)="onItemClick($event, item, selectedItemsTarget, onTargetSelect, idTarget + '_' + i)"
                            (mousedown)="onOptionMouseDown(i, TARGET_LIST)"
                            (dblclick)="onTargetItemDblClick()"
                            (touchend)="onItemTouchEnd()"
                            *ngIf="isItemVisible(item, TARGET_LIST)"
                            role="option"
                            [attr.data-pc-section]="'item'"
                            [attr.aria-selected]="isSelected(item, selectedItemsTarget)"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                        </li>
                    </ng-template>
                    <ng-container *ngIf="isEmpty(TARGET_LIST) && (emptyMessageTargetTemplate || emptyFilterMessageTargetTemplate)">
                        <li class="p-picklist-empty-message" *ngIf="!filterValueTarget || !emptyFilterMessageTargetTemplate" [attr.data-pc-section]="'targetEmptyMessage'">
                            <ng-container *ngTemplateOutlet="emptyMessageTargetTemplate"></ng-container>
                        </li>
                        <li class="p-picklist-empty-message" *ngIf="filterValueTarget" [attr.data-pc-section]="'targetEmptyMessage'">
                            <ng-container *ngTemplateOutlet="emptyFilterMessageTargetTemplate"></ng-container>
                        </li>
                    </ng-container>
                </ul>
            </div>
            <div class="p-picklist-buttons p-picklist-target-controls" *ngIf="showTargetControls" [attr.data-pc-section]="'targetControls'" [attr.data-pc-group-section]="'controls'">
                <button
                    type="button"
                    [attr.aria-label]="moveUpAriaLabel"
                    pButton
                    pRipple
                    class="p-button-icon-only"
                    [disabled]="targetMoveDisabled()"
                    (click)="moveUp(targetlist, target, selectedItemsTarget, onTargetReorder, TARGET_LIST)"
                    [attr.data-pc-section]="'targetMoveUpButton'"
                >
                    <AngleUpIcon *ngIf="!moveUpIconTemplate" [attr.data-pc-section]="'moveupicon'" />
                    <ng-template *ngTemplateOutlet="moveUpIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveTopAriaLabel"
                    pButton
                    pRipple
                    class="p-button-icon-only"
                    [disabled]="targetMoveDisabled()"
                    (click)="moveTop(targetlist, target, selectedItemsTarget, onTargetReorder, TARGET_LIST)"
                    [attr.data-pc-section]="'targetMoveTopButton'"
                >
                    <AngleDoubleUpIcon *ngIf="!moveTopIconTemplate" [attr.data-pc-section]="'movetopicon'" />
                    <ng-template *ngTemplateOutlet="moveTopIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveDownAriaLabel"
                    pButton
                    pRipple
                    class="p-button-icon-only"
                    [disabled]="targetMoveDisabled()"
                    (click)="moveDown(targetlist, target, selectedItemsTarget, onTargetReorder, TARGET_LIST)"
                    [attr.data-pc-section]="'targetMoveDownButton'"
                >
                    <AngleDownIcon *ngIf="!moveDownIconTemplate" [attr.data-pc-section]="'movedownicon'" />
                    <ng-template *ngTemplateOutlet="moveDownIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveBottomAriaLabel"
                    pButton
                    pRipple
                    class="p-button-icon-only"
                    [disabled]="targetMoveDisabled()"
                    (click)="moveBottom(targetlist, target, selectedItemsTarget, onTargetReorder, TARGET_LIST)"
                    [attr.data-pc-section]="'targetMoveBottomButton'"
                >
                    <AngleDoubleDownIcon *ngIf="!moveBottomIconTemplate" [attr.data-pc-section]="'movebottomicon'" />
                    <ng-template *ngTemplateOutlet="moveBottomIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-picklist{display:flex}.p-picklist-buttons{display:flex;flex-direction:column;justify-content:center}.p-picklist-list-wrapper{flex:1 1 50%}.p-picklist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-picklist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-picklist-item:not(.cdk-drag-disabled){cursor:move}.p-picklist-item.cdk-drag-placeholder{opacity:0}.p-picklist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-picklist-filter{position:relative}.p-picklist-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-picklist-filter-input{width:100%}.p-picklist-list.cdk-drop-list-dragging .p-picklist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
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
    type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig
  }], {
    source: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sourceHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rightButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    leftButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allRightButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allLeftButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    upButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    downButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    topButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bottomButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sourceTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSourceFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTargetFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    metaKeySelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sourceStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSourceControls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTargetControls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sourceFilterPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetFilterPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaSourceFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaTargetFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterMatchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stripedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keepSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onMoveToSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMoveAllToSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMoveAllToTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMoveToTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSourceReorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onTargetReorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSourceSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onTargetSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSourceFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onTargetFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    listViewSourceChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['sourcelist']
    }],
    listViewTargetChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['targetlist']
    }],
    sourceFilterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['sourceFilter']
    }],
    targetFilterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['targetFilter']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate]
    }]
  });
})();
const DragConfig = {
  zIndex: 1200
};
class PickListModule {
  static ɵfac = function PickListModule_Factory(t) {
    return new (t || PickListModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: PickListModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CDK_DRAG_CONFIG,
      useValue: DragConfig
    }],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, primeng_icons_angledoubledown__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleDownIcon, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_9__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_10__.AngleDoubleRightIcon, primeng_icons_angledoubleup__WEBPACK_IMPORTED_MODULE_11__.AngleDoubleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_12__.AngleDownIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_13__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_14__.AngleRightIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_15__.AngleUpIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_16__.SearchIcon, primeng_icons_home__WEBPACK_IMPORTED_MODULE_17__.HomeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickListModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, primeng_icons_angledoubledown__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleDownIcon, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_9__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_10__.AngleDoubleRightIcon, primeng_icons_angledoubleup__WEBPACK_IMPORTED_MODULE_11__.AngleDoubleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_12__.AngleDownIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_13__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_14__.AngleRightIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_15__.AngleUpIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_16__.SearchIcon, primeng_icons_home__WEBPACK_IMPORTED_MODULE_17__.HomeIcon],
      exports: [PickList, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule],
      declarations: [PickList],
      providers: [{
        provide: _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CDK_DRAG_CONFIG,
        useValue: DragConfig
      }]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_list_listdemo_module_ts.js.map