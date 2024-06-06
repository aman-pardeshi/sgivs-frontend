"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_dashboards_sales_sales_dashboard_module_ts"],{

/***/ 85377:
/*!************************************************************************************!*\
  !*** ./src/app/demo/components/dashboards/sales/sales.dashboard-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesDashboarRoutingModule: () => (/* binding */ SalesDashboarRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _sales_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.dashboard.component */ 7441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class SalesDashboarRoutingModule {
  static #_ = this.ɵfac = function SalesDashboarRoutingModule_Factory(t) {
    return new (t || SalesDashboarRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SalesDashboarRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _sales_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SalesDashboardComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SalesDashboarRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7441:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/dashboards/sales/sales.dashboard.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesDashboardComponent: () => (/* binding */ SalesDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/product.service */ 20981);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/badge */ 67650);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chart */ 73530);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 57411);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/knob */ 51762);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputgroup */ 86763);

















const _c0 = ["chatcontainer"];
const _c1 = (a0, a1) => ({
  "border-primary-500": a0,
  "hover:surface-hover": a1
});
function SalesDashboardComponent_li_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalesDashboardComponent_li_79_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const item_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r7.activeListItemIndex = i_r6;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.activeListItem = item_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 127)(3, "div", 128)(4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p-badge", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c1, ctx_r0.activeListItemIndex === i_r6, ctx_r0.activeListItemIndex !== i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.subtext);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r5.ratio);
  }
}
function SalesDashboardComponent_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-sortIcon", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p-sortIcon", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "p-sortIcon", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "th", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SalesDashboardComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td")(14, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/product/", product_r9.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", product_r9.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r9.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 5, product_r9.price, "USD"), " ");
  }
}
function SalesDashboardComponent_li_123_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 147);
  }
  if (rf & 2) {
    const chartMessage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chartMessage_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function SalesDashboardComponent_li_123_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r18);
  }
}
function SalesDashboardComponent_li_123_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 148)(1, "div")(2, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "2m ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SalesDashboardComponent_li_123_div_2_div_6_Template, 2, 1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chartMessage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chartMessage_r10.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", chartMessage_r10.messages);
  }
}
function SalesDashboardComponent_li_123_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r22);
  }
}
function SalesDashboardComponent_li_123_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 152)(1, "div")(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "2m ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SalesDashboardComponent_li_123_div_3_div_6_Template, 2, 1, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chartMessage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chartMessage_r10.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", chartMessage_r10.messages);
  }
}
function SalesDashboardComponent_li_123_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 147);
  }
  if (rf & 2) {
    const chartMessage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chartMessage_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
const _c2 = (a0, a1) => ({
  "justify-content-start": a0,
  "justify-content-end": a1
});
function SalesDashboardComponent_li_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SalesDashboardComponent_li_123_img_1_Template, 1, 1, "img", 144)(2, SalesDashboardComponent_li_123_div_2_Template, 7, 2, "div", 145)(3, SalesDashboardComponent_li_123_div_3_Template, 7, 2, "div", 146)(4, SalesDashboardComponent_li_123_img_4_Template, 1, 1, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chartMessage_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c2, !chartMessage_r10.self, chartMessage_r10.self));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chartMessage_r10.self);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chartMessage_r10.self);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chartMessage_r10.self);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chartMessage_r10.self);
  }
}
const _c3 = a0 => ({
  "h-3rem bg-primary-500": a0
});
const _c4 = a0 => ({
  "h-5rem bg-primary-500": a0
});
const _c5 = a0 => ({
  "h-4rem bg-primary-500": a0
});
const _c6 = (a0, a1) => ({
  "border-primary-500": a0,
  "surface-border": a1
});
class SalesDashboardComponent {
  constructor(productService, layoutService) {
    this.productService = productService;
    this.layoutService = layoutService;
    this.products = [];
    this.productsThisWeek = [];
    this.productsLastWeek = [];
    this.analytics = [];
    this.chatMessages = [];
    this.activeTab = 0;
    this.activeListItemIndex = 1;
    this.activeListItem = {
      image: 'assets/demo/images/dashboard/headphones.svg',
      text: 'HF Headphones',
      subtext: 'Wireless',
      ratio: '+24%'
    };
    this.listItems = [];
  }
  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data.slice(0, 5));
    this.productService.getProducts().then(data => this.productsThisWeek = data.slice(0, 5));
    this.productService.getProductsMixed().then(data => this.productsLastWeek = data.slice(0, 5));
    this.orderWeek = [{
      name: 'This Week',
      code: '0'
    }, {
      name: 'Last Week',
      code: '1'
    }];
    this.analytics = [{
      label: 'Products',
      value: 1
    }, {
      label: 'Sales',
      value: 2
    }, {
      label: 'Customers',
      value: 3
    }];
    const documentStyle = getComputedStyle(document.documentElement);
    this.revenueChart = {
      labels: ['Online', 'Retail', 'Partner'],
      datasets: [{
        data: [12, 32, 56],
        backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--teal-500'), documentStyle.getPropertyValue('--purple-500')],
        borderWidth: 0
      }]
    };
    this.revenueOptions = {
      plugins: {
        legend: {
          display: false
        }
      },
      responsive: true,
      cutout: 60
    };
    this.chatMessages = [{
      self: false,
      from: 'Jane Cooper',
      url: 'assets/demo/images/avatar/stephenshaw.png',
      messages: ['Hey M. hope you are well. Our idea is accepted by the board. ']
    }, {
      self: true,
      from: 'Jerome Bell',
      url: 'assets/demo/images/avatar/ivanmagalhaes.png',
      messages: ['we did it! 🤠']
    }, {
      self: false,
      from: 'Darlene Robertson',
      url: 'assets/demo/images/avatar/amyelsner.png',
      messages: ['I will be looking at the process then, just to be sure 🤓 ']
    }];
    this.listItems = [{
      image: 'assets/demo/images/dashboard/sneaker.png',
      text: 'Red Sneakers',
      subtext: 'RX Series',
      ratio: '+40%'
    }, {
      image: 'assets/demo/images/dashboard/headphones.png',
      text: 'HF Headphones',
      subtext: 'Wireless',
      ratio: '+24%'
    }, {
      image: 'assets/demo/images/dashboard/sunglasses.png',
      text: 'Sunglasses',
      subtext: 'UV Protection',
      ratio: '+17%'
    }];
  }
  recentSales(code) {
    if (code === '0') this.products = this.productsThisWeek;else this.products = this.productsLastWeek;
  }
  onChatKeydown(event) {
    if (event.key === 'Enter') {
      const message = event.currentTarget.value;
      const lastMessage = this.chatMessages[this.chatMessages.length - 1];
      if (lastMessage.from) {
        this.chatMessages.push({
          self: true,
          from: 'Jerome Bell',
          url: 'assets/demo/images/avatar/ivanmagalhaes.png',
          messages: [message]
        });
      } else {
        lastMessage.messages.push(message);
      }
      if (message.match(/primeng|primereact|primefaces|primevue/i)) {
        this.chatMessages.push({
          nth: false,
          from: 'Ioni Bowcher',
          url: 'assets/demo/images/avatar/ionibowcher.png',
          messages: ['Always bet on Prime!']
        });
      }
      event.currentTarget.value = '';
      const el = this.chatContainerViewChild.nativeElement;
      setTimeout(() => {
        el.scroll({
          top: el.scrollHeight,
          behavior: 'smooth'
        });
      }, 1);
    }
  }
  onTabClick(index) {
    this.activeTab = index;
    if (index === 0) {
      this.listItems = [{
        image: 'assets/demo/images/dashboard/sneaker.png',
        text: 'Red Sneakers',
        subtext: 'RX Series',
        ratio: '+40%'
      }, {
        image: 'assets/demo/images/dashboard/headphones.png',
        text: 'HF Headphones',
        subtext: 'Wireless',
        ratio: '+24%'
      }, {
        image: 'assets/demo/images/dashboard/sunglasses.png',
        text: 'Sunglasses',
        subtext: 'UV Protection',
        ratio: '+17%'
      }];
    } else if (index === 1) {
      this.listItems = [{
        image: 'assets/demo/images/dashboard/camera.png',
        text: 'Instant Camera',
        subtext: 'II-Mark',
        ratio: '+27%'
      }, {
        image: 'assets/demo/images/dashboard/cupcake.png',
        text: 'Cupcake',
        subtext: 'Cinnamon',
        ratio: '+41%'
      }, {
        image: 'assets/demo/images/dashboard/drink.png',
        text: 'Cold Drink',
        subtext: 'Lime',
        ratio: '+56%'
      }];
    } else if (index === 2) {
      this.listItems = [{
        image: 'assets/demo/images/dashboard/tripod.png',
        text: 'Tripod',
        subtext: 'Stabilizer',
        ratio: '+34%'
      }, {
        image: 'assets/demo/images/dashboard/headphone2.png',
        text: 'Headphone',
        subtext: 'Wireless',
        ratio: '+67%'
      }, {
        image: 'assets/demo/images/dashboard/spoon.png',
        text: 'Spoon Set',
        subtext: 'Colorful',
        ratio: '+8%'
      }];
    }
    this.activeListItem = this.listItems[this.activeListItemIndex];
  }
  static #_ = this.ɵfac = function SalesDashboardComponent_Factory(t) {
    return new (t || SalesDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SalesDashboardComponent,
    selectors: [["ng-component"]],
    viewQuery: function SalesDashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chatContainerViewChild = _t.first);
      }
    },
    decls: 387,
    vars: 61,
    consts: [[1, "grid"], [1, "col-12"], [1, "flex", "flex-column", "md:flex-row", "md:align-items-center", "md:justify-content-between", "mb-3", "gap-3"], [1, "flex", "align-items-center"], ["src", "assets/demo/images/avatar/profile.jpg", "width", "64", "alt", "profile", 1, "border-circle", "border-2", "border-primary", "flex-shrink-0"], [1, "ml-3"], [1, "text-4xl", "font-light"], [1, "font-normal"], [1, "text-color-secondary"], [1, "flex", "align-items-center", "justify-content-between", "gap-3"], ["placeholder", "Category", "styleClass", "w-full sm:w-10rem", 3, "options", "ngModel", "ngModelChange"], ["selectionMode", "range", "styleClass", "w-full sm:w-14rem", "placeholder", "Select Range", 3, "showIcon"], [1, "card", "p-0", "grid", "grid-nogutter"], [1, "col-12", "md:col-6", "lg:col-3", "py-5", "px-6", "border-none", "md:border-right-1", "surface-border"], [1, "flex", "align-items-center", "mb-3"], ["icon", "pi pi-shopping-cart", "size", "large", "shape", "circle", "styleClass", "text-base bg-indigo-100 text-indigo-700"], [1, "text-xl", "ml-2"], [1, "flex", "align-items-center", "justify-content-between", "mb-3"], [1, "block", "font-bold", "text-6xl", "mb-3"], [1, "flex", "align-items-center", "justify-content-between", "h-2rem", "px-2", "py-1", "bg-green-100", "text-green-900", "border-round"], [1, "pi", "pi-arrow-up-right"], [1, "font-bold", "ml-1"], [1, "border-round", "overflow-hidden", "surface-200", 2, "height", ".5rem"], [1, "h-full", "bg-indigo-500", 2, "width", "40%"], ["icon", "pi pi-money-bill", "size", "large", "shape", "circle", "styleClass", "text-base bg-green-100 text-green-700"], [1, "h-full", "bg-green-500", 2, "width", "60%"], ["icon", "pi pi-users", "size", "large", "shape", "circle", "styleClass", "text-base bg-yellow-100 text-yellow-700"], [1, "h-full", "bg-yellow-500", 2, "width", "80%"], [1, "col-12", "md:col-6", "lg:col-3", "py-5", "px-6"], ["icon", "pi pi-comments", "size", "large", "shape", "circle", "styleClass", "text-base bg-purple-100 text-purple-700"], [1, "h-full", "bg-purple-500", 2, "width", "30%"], [1, "col-12", "lg:col-6"], [1, "card", "h-full"], [1, "flex", "flex-wrap", "gap-5"], [1, "flex-1", "list-none", "p-0", "m-0"], ["class", "border-round p-3 flex cursor-pointer border-1 border-transparent", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex-1", "flex", "flex-column", "align-items-center", "justify-content-center"], [1, "bars", "flex", "align-items-end", "mb-4"], [1, "w-1rem", "h-2rem", "mr-2", "surface-200", "border-round", 3, "ngClass"], [1, "w-1rem", "h-3rem", "mr-2", "surface-200", "border-round", 3, "ngClass"], [1, "w-1rem", "h-4rem", "mr-2", "surface-200", "border-round"], [1, "w-1rem", "h-6rem", "mr-2", "surface-200", "border-round", 3, "ngClass"], [1, "w-1rem", "h-5rem", "mr-2", "surface-200", "border-round", 3, "ngClass"], [1, "w-1rem", "h-1rem", "mr-2", "surface-200", "border-round"], [1, "font-bold"], [1, "flex", "align-items-center", "mt-7", "border-round"], [1, "flex", "flex-column", "align-items-center", "flex-1", "py-3", "cursor-pointer", "border-top-1", "hover:surface-hover", 3, "ngClass", "click"], [1, "pi", "pi-sort-amount-down", "text-2xl", "mb-2"], [1, "pi", "pi-chart-line", "text-2xl", "mb-2"], [1, "pi", "pi-star", "text-2xl", "mb-2"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-between", "mb-3", "gap-3"], [1, "m-0"], ["optionLabel", "name", "styleClass", "w-10rem", 3, "options", "ngModel", "ngModelChange", "onChange"], [3, "value", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "col-12", "md:col-6", "xl:col-6"], [1, "list-none", "p-0", "px-3", "mt-4", "mb-6", "h-21rem", "overflow-y-auto"], ["chatcontainer", ""], ["class", "flex align-items-start mb-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "text", "pInputText", "", "placeholder", "Write your message (Hint: 'PrimeNG')", 3, "keydown"], [1, "col-12", "md:col-6", "xl:col-3"], [1, "flex", "align-items-center", "gap-2"], ["pButton", "", "type", "button", "icon", "pi pi-angle-left", 1, "p-button-outlined", "p-button-rounded", "p-button-plain", "h-2rem", "w-2rem", "p-0"], ["pButton", "", "type", "button", "icon", "pi pi-angle-right", 1, "p-button-outlined", "p-button-rounded", "p-button-plain", "h-2rem", "w-2rem", "p-0"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], ["type", "doughnut", "width", "180px", "height", "180px", 1, "mb-5", 3, "data", "options"], [1, "font-bold", "mb-2"], [1, "font-bold", "text-6xl", "mb-2"], [1, "font-bold", "mb-4", "text-green-500"], [1, "flex", "align-items-center", "justify-content-center", "gap-3"], [1, "pi", "pi-circle-on", "text-indigo-500"], [1, "text-color-secondary", "ml-2"], [1, "pi", "pi-circle-on", "text-teal-500"], [1, "pi", "pi-circle-on", "text-purple-500"], [1, "col-12", "md:col-6", "lg:col-3"], [1, "list-none", "m-0", "p-0"], [1, "mb-4"], [1, "flex", "align-items-center", "justify-content-between", "mb-2"], [1, "h-full", "bg-orange-500", 2, "width", "40%"], [1, "h-full", "bg-indigo-500", 2, "width", "60%"], [1, "h-full", "bg-blue-500", 2, "width", "90%"], [1, "h-full", "bg-green-500", 2, "width", "50%"], [1, "h-full", "bg-yellow-500", 2, "width", "45%"], [1, "h-full", "bg-teal-500", 2, "width", "70%"], [1, "card", "p-0"], ["src", "assets/demo/images/dashboard/bg-product.jpg", "alt", "blog-bg", 1, "w-full", "border-round-top-2xl"], [1, "p-4"], [1, "inline-flex", "align-items-center"], [1, "pi", "pi-check-circle", "ml-3", "text-xl", "text-green-500"], [1, "pi", "pi-bookmark", "ml-3", "text-xl", "text-color-secondary"], [1, "mb-5", "line-height-3"], [1, "flex", "align-items-center", "justify-content-between"], ["src", "assets/demo/images/avatar/amyelsner.png", "alt", "avatar", 1, "flex-shrink-0", "w-2rem", "h-2rem"], [1, "text-color-secondary", "flex", "align-items-center"], [1, "pi", "pi-heart", "mr-1"], [1, "pi", "pi-eye", "ml-4", "mr-1"], [1, "list-none", "p-0", "m-0"], [1, "flex", "align-items-center", "justify-content-between", "pb-2"], ["src", "assets/demo/images/product/bamboo-watch.png", "alt", "verona-layout", 1, "w-3rem", "h-3rem", "border-round"], [1, "ml-2", "flex", "flex-column"], [1, "text-color-secondary", "text-sm"], ["styleClass", "ml-auto", 3, "ngModel", "size", "showValue"], [1, "flex", "align-items-center", "justify-content-between", "py-2"], ["src", "assets/demo/images/product/black-watch.png", "alt", "verona-layout", "width", "42", "height", "42", 1, "border-round"], ["src", "assets/demo/images/product/blue-band.png", "alt", "verona-layout", "width", "42", "height", "42", 1, "border-round"], ["src", "assets/demo/images/product/blue-t-shirt.png", "alt", "verona-layout", "width", "42", "height", "42", 1, "border-round"], ["src", "assets/demo/images/product/sneakers.jpg", "alt", "verona-layout", "width", "42", "height", "42", 1, "border-round"], [1, "col-12", "md:col-6", "lg:col-6"], [1, "card"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-around", "gap-2"], ["pButton", "", "pRipple", "", "href", "#", "icon", "pi pi-plus text-2xl", 1, "w-4rem", "h-4rem", "p-button-outlined", "p-button-rounded", "mb-2"], [1, "font-bold", "text-sm"], [1, "flex", "align-items-center", "justify-content-center", "w-4rem", "h-4rem", "bg-transparent", "border-3", "surface-border", "border-circle", "relative"], ["src", "assets/demo/images/avatar/amyelsner.png", 1, "border-circle", "h-3rem", "w-3rem"], [1, "absolute", "top-0", "surface-card", "border-circle", "flex", "align-items-center", "justify-content-center", 2, "right", "-.75rem", "width", "1.5rem", "height", "1.5rem"], [1, "pi", "pi-globe", "text-sm"], ["src", "assets/demo/images/avatar/annafali.png", 1, "border-circle", "h-3rem", "w-3rem"], ["src", "assets/demo/images/avatar/asiyajavayant.png", 1, "border-circle", "h-3rem", "w-3rem"], ["src", "assets/demo/images/avatar/bernardodominic.png", 1, "border-circle", "h-3rem", "w-3rem"], ["src", "assets/demo/images/avatar/ionibowcher.png", 1, "border-circle", "h-3rem", "w-3rem"], ["src", "assets/demo/images/avatar/onyamalimba.png", 1, "border-circle", "h-3rem", "w-3rem"], ["src", "assets/demo/images/avatar/elwinsharvill.png", 1, "border-circle", "h-3rem", "w-3rem"], ["src", "assets/demo/images/avatar/stephenshaw.png", 1, "border-circle", "h-3rem", "w-3rem"], [1, "border-round", "p-3", "flex", "cursor-pointer", "border-1", "border-transparent", 3, "ngClass", "click"], ["width", "64", 1, "mr-3", "border-round", 3, "src"], [1, "flex-1", "flex", "align-items-center", "justify-content-between"], [1, "flex", "flex-column"], [1, "text-primary-700", "mb-1"], [3, "value"], [1, "pi", "pi-chevron-right", "text-color-secondary", "ml-3"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "price"], ["field", "price"], [2, "width", "5rem"], [1, "p-column-title"], ["width", "50px", 3, "src", "alt"], [1, "text-center"], ["pButton", "", "type", "button", "icon", "pi pi-search", 1, "p-button-text"], [1, "flex", "align-items-start", "mb-3", 3, "ngClass"], ["width", "36", "height", "36", "class", "border-circle", 3, "src", 4, "ngIf"], ["class", "ml-2 flex flex-column align-items-start", 4, "ngIf"], ["class", "mr-3 flex flex-column align-items-end", 4, "ngIf"], ["width", "36", "height", "36", 1, "border-circle", 3, "src"], [1, "ml-2", "flex", "flex-column", "align-items-start"], [1, "font-bold", "mr-3"], ["class", "inline-block text-left surface-100 border-round px-5 py-3 mt-3", 4, "ngFor", "ngForOf"], [1, "inline-block", "text-left", "surface-100", "border-round", "px-5", "py-3", "mt-3"], [1, "mr-3", "flex", "flex-column", "align-items-end"], [1, "font-bold", "ml-3"], ["class", "inline-block text-right bg-primary-500 text-primary-50 border-round px-5 py-3 mt-3", 4, "ngFor", "ngForOf"], [1, "inline-block", "text-right", "bg-primary-500", "text-primary-50", "border-round", "px-5", "py-3", "mt-3"]],
    template: function SalesDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bonjour, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Hermione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "26 January 2023, Thu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "p-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalesDashboardComponent_Template_p_dropdown_ngModelChange_13_listener($event) {
          return ctx.selectedDrop = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "p-calendar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1)(16, "div", 12)(17, "div", 13)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "p-avatar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17)(23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "1420");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "551");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13)(32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "p-avatar", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 17)(37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "1420");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "2.7K");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 13)(46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "p-avatar", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 17)(51, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "1420");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "254");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 28)(60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "p-avatar", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 17)(65, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "1420");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "85");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 31)(74, "div", 32)(75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Store Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 33)(78, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, SalesDashboardComponent_li_79_Template, 10, 8, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 36)(81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "div", 38)(83, "div", 39)(84, "div", 40)(85, "div", 41)(86, "div", 38)(87, "div", 42)(88, "div", 39)(89, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 45)(95, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalesDashboardComponent_Template_div_click_95_listener() {
          return ctx.onTabClick(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalesDashboardComponent_Template_div_click_99_listener() {
          return ctx.onTabClick(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalesDashboardComponent_Template_div_click_103_listener() {
          return ctx.onTabClick(2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 31)(108, "div", 32)(109, "div", 50)(110, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Recent Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "p-dropdown", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalesDashboardComponent_Template_p_dropdown_ngModelChange_112_listener($event) {
          return ctx.selectedOrderWeek = $event;
        })("onChange", function SalesDashboardComponent_Template_p_dropdown_onChange_112_listener($event) {
          return ctx.recentSales($event.value.code);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "p-table", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, SalesDashboardComponent_ng_template_114_Template, 13, 0, "ng-template", 54)(115, SalesDashboardComponent_ng_template_115_Template, 20, 8, "ng-template", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 56)(117, "div", 32)(118, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Live Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div")(121, "ul", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](123, SalesDashboardComponent_li_123_Template, 5, 8, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "p-inputGroup", 60)(125, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function SalesDashboardComponent_Template_input_keydown_125_listener($event) {
          return ctx.onChatKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 62)(127, "div", 32)(128, "div", 17)(129, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Revenue Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "button", 64)(133, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "p-chart", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Total Revenue This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "88k");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "+21%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " higher than last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 71)(145, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Retail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "Partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 76)(158, "div", 32)(159, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Sales Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "ul", 77)(162, "li", 78)(163, "div", 79)(164, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Online Marketplaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "%40");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "li", 78)(171, "div", 79)(172, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Resellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "%60");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "li", 78)(179, "div", 79)(180, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "%90");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "li", 78)(187, "div", 79)(188, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Organic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "%50");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "li", 78)(195, "div", 79)(196, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "%30");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "li", 78)(203, "div", 79)(204, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "%30");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](209, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "li")(211, "div", 79)(212, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "Partners");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "%30");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 62)(219, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](220, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "div", 88)(222, "div", 17)(223, "div", 89)(224, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "Optimizing Logistics with AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Sit amet nulla facilisi morbi tempus iaculis. Dolor magna eget est lorem ipsum dolor sit. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "888");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "8888");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 62)(240, "div", 32)(241, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Best Sellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "ul", 98)(244, "li", 99)(245, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 101)(248, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "Bamboo Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](252, "p-knob", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "li", 104)(254, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 101)(257, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Black Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "p-knob", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "li", 104)(263, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](264, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "div", 101)(266, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "Blue Band");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "Fitness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "p-knob", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "li", 104)(272, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](273, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 101)(275, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "Blue T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278, "Clothing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](279, "p-knob", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "li", 104)(281, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](282, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div", 101)(284, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "Black Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](288, "p-knob", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "li", 104)(290, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](291, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "div", 101)(293, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "Sneakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, "Clothing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](297, "p-knob", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "div", 109)(299, "div", 110)(300, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "Customer Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "div", 111)(303, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](304, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "div", 66)(308, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](309, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](311, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "Darlene Robertson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](315, "2m ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "div", 66)(317, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](318, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](320, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "Albert Flores");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, "1h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 66)(326, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](327, "img", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](329, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "Annette Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, "6m ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "div", 66)(335, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](336, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](338, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, "Ralph Edwards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "4m ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "div", 110)(344, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](345, "Potential Influencers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "div", 111)(347, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](348, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "div", 66)(352, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](353, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](355, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "Jenna Watson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](359, "2m ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "div", 66)(361, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](362, "img", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](364, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](366, "Dan Cooper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "10m ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "div", 66)(370, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](371, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](373, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](375, "Kathryn Murphy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](377, "50m ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "div", 66)(379, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](380, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](381, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](382, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](383, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](384, "Smith Wilson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "40m ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.analytics)("ngModel", ctx.selectedDrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](40, _c3, ctx.activeListItemIndex === 2 && ctx.activeTab === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](42, _c4, ctx.activeListItemIndex === 1 && ctx.activeTab !== 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](44, _c5, ctx.activeListItemIndex === 2 && ctx.activeTab !== 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](46, _c5, ctx.activeListItemIndex === 1 && ctx.activeTab === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](48, _c5, ctx.activeListItemIndex === 0 && ctx.activeTab === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](50, _c5, ctx.activeListItemIndex === 0 && ctx.activeTab !== 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.activeListItem.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.activeListItem.subtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](52, _c6, ctx.activeTab === 0, ctx.activeTab !== 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](55, _c6, ctx.activeTab === 1, ctx.activeTab !== 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](58, _c6, ctx.activeTab === 2, ctx.activeTab !== 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.orderWeek)("ngModel", ctx.selectedOrderWeek);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.products)("rows", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chatMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.revenueChart)("options", ctx.revenueOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", 75)("size", 40)("showValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", 20)("size", 40)("showValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", 42)("size", 40)("showValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", 26)("size", 40)("showValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", 10)("size", 40)("showValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", 60)("size", 40)("showValue", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.Badge, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_chart__WEBPACK_IMPORTED_MODULE_10__.UIChart, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar, primeng_avatar__WEBPACK_IMPORTED_MODULE_14__.Avatar, primeng_knob__WEBPACK_IMPORTED_MODULE_15__.Knob, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_16__.InputGroup, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 25619:
/*!****************************************************************************!*\
  !*** ./src/app/demo/components/dashboards/sales/sales.dashboard.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesDashboardModule: () => (/* binding */ SalesDashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputnumber */ 65362);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/chart */ 73530);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tag */ 32455);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/badge */ 67650);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var _sales_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.dashboard-routing.module */ 85377);
/* harmony import */ var _sales_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.dashboard.component */ 7441);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 57411);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/knob */ 51762);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputgroup */ 86763);
/* harmony import */ var primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputgroupaddon */ 46179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);






















class SalesDashboardModule {
  static #_ = this.ɵfac = function SalesDashboardModule_Factory(t) {
    return new (t || SalesDashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: SalesDashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, primeng_tag__WEBPACK_IMPORTED_MODULE_7__.TagModule, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumberModule, primeng_chart__WEBPACK_IMPORTED_MODULE_12__.ChartModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_16__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_17__.AvatarGroupModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__.ProgressBarModule, primeng_knob__WEBPACK_IMPORTED_MODULE_19__.KnobModule, _sales_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesDashboarRoutingModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_20__.InputGroupModule, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_21__.InputGroupAddonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesDashboardModule, {
    declarations: [_sales_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.SalesDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, primeng_tag__WEBPACK_IMPORTED_MODULE_7__.TagModule, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumberModule, primeng_chart__WEBPACK_IMPORTED_MODULE_12__.ChartModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_16__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_17__.AvatarGroupModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__.ProgressBarModule, primeng_knob__WEBPACK_IMPORTED_MODULE_19__.KnobModule, _sales_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesDashboarRoutingModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_20__.InputGroupModule, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_21__.InputGroupAddonModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_dashboards_sales_sales_dashboard_module_ts.js.map