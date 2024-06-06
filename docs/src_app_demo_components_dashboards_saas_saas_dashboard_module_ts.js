"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_dashboards_saas_saas_dashboard_module_ts"],{

/***/ 20908:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/dashboards/saas/saas.dashboard-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaaSDashboardRoutingModule: () => (/* binding */ SaaSDashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _saas_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saas.dashboard.component */ 85491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class SaaSDashboardRoutingModule {
  static #_ = this.ɵfac = function SaaSDashboardRoutingModule_Factory(t) {
    return new (t || SaaSDashboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SaaSDashboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _saas_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SaaSDashboardComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SaaSDashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 85491:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/components/dashboards/saas/saas.dashboard.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaaSDashboardComponent: () => (/* binding */ SaaSDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tag */ 32455);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chart */ 73530);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ 61820);













const _c0 = () => ({
  "background-color": "rgba(101, 214, 173, 0.1)",
  "color": "#27AB83",
  "border": "1px solid #65D6AD"
});
const _c1 = () => ({
  "background-color": "rgba(250, 219, 95, 0.1)",
  "color": "#DE911D",
  "border": "1px solid #FADB5F"
});
const _c2 = () => ({
  "background-color": "rgba(94, 208, 250, 0.1)",
  "color": "#1992D4",
  "border": "1px solid #5ED0FA"
});
const _c3 = () => ({
  "background-color": "rgba(43, 176, 237, 0.1)",
  "color": "#127FBF",
  "border": "1px solid #2BB0ED"
});
const _c4 = () => ({
  "background-color": "rgba(255, 155, 155, 0.1)",
  "color": "#CF1124",
  "border": "1px solid #FF9B9B"
});
const _c5 = a0 => ({
  "background-color": a0
});
const _c6 = () => ({
  height: ".5rem"
});
class SaaSDashboardComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(25)).subscribe(config => {
      this.initCharts();
    });
  }
  ngOnInit() {
    this.initCharts();
    this.overviewWeeks = [{
      name: 'Last Week',
      code: '0'
    }, {
      name: 'This Week',
      code: '1'
    }];
    this.selectedOverviewWeek = this.overviewWeeks[0];
  }
  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const primaryColor = documentStyle.getPropertyValue('--primary-color');
    const primaryColor300 = documentStyle.getPropertyValue('--primary-200');
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    this.overviewChartData = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [{
        label: 'Organic',
        data: [2, 1, 0.5, 0.6, 0.5, 1.3, 1],
        borderColor: [primaryColor],
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        type: 'line',
        fill: false
      }, {
        label: 'Referral',
        data: [4.88, 3, 6.2, 4.5, 2.1, 5.1, 4.1],
        backgroundColor: [this.layoutService.config().colorScheme === 'dark' ? '#879AAF' : '#E4E7EB'],
        hoverBackgroundColor: [primaryColor300],
        fill: true,
        borderRadius: 10,
        borderSkipped: 'top bottom',
        barPercentage: 0.3
      }]
    };
    this.overviewChartOptions = {
      plugins: {
        legend: {
          position: 'bottom',
          align: 'end',
          labels: {
            color: textColorSecondary
          }
        }
      },
      responsive: true,
      hover: {
        mode: 'index'
      },
      scales: {
        y: {
          max: 7,
          min: 0,
          ticks: {
            stepSize: 0,
            callback: function (value, index) {
              if (index === 0) {
                return value;
              } else {
                return value + 'k';
              }
            },
            color: textColorSecondary
          },
          grid: {
            borderDash: [2, 2],
            color: borderColor,
            drawBorder: false
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            color: textColorSecondary
          }
        }
      }
    };
    this.revenueChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        data: [11, 17, 30, 60, 88, 92],
        borderColor: 'rgba(25, 146, 212, 0.5)',
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        fill: false,
        tension: .4
      }, {
        data: [11, 19, 39, 59, 69, 71],
        borderColor: 'rgba(25, 146, 212, 0.5)',
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        fill: false,
        tension: .4
      }, {
        data: [11, 17, 21, 30, 47, 83],
        backgroundColor: 'rgba(25, 146, 212, 0.2)',
        borderColor: 'rgba(25, 146, 212, 0.5)',
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        fill: true,
        tension: .4
      }]
    };
    this.revenueChartOptions = {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          grid: {
            color: borderColor
          },
          max: 100,
          min: 0,
          ticks: {
            color: textColorSecondary
          }
        },
        x: {
          grid: {
            color: borderColor
          },
          ticks: {
            color: textColorSecondary,
            beginAtZero: true
          }
        }
      }
    };
  }
  changeOverviewWeek() {
    const dataSet1 = [[2, 1, 0.5, 0.6, 0.5, 1.3, 1], [4.88, 3, 6.2, 4.5, 2.1, 5.1, 4.1]];
    const dataSet2 = [[3, 2.4, 1.5, 0.6, 4.5, 3.3, 2], [3.2, 4.1, 2.2, 5.5, 4.1, 3.6, 3.5]];
    if (this.selectedOverviewWeek.code === '1') {
      this.overviewChartData.datasets[0].data = dataSet2[parseInt('0')];
      this.overviewChartData.datasets[1].data = dataSet2[parseInt('1')];
    } else {
      this.overviewChartData.datasets[0].data = dataSet1[parseInt('0')];
      this.overviewChartData.datasets[1].data = dataSet1[parseInt('1')];
    }
    this.overviewChartData = {
      ...this.overviewChartData
    };
  }
  get colorScheme() {
    return this.layoutService.config().colorScheme;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function SaaSDashboardComponent_Factory(t) {
    return new (t || SaaSDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SaaSDashboardComponent,
    selectors: [["ng-component"]],
    decls: 522,
    vars: 50,
    consts: [[1, "grid"], [1, "col-12", "lg:col-6", "xl:col-3"], [1, "card", "p-0", "overflow-hidden", "flex", "flex-column"], [1, "flex", "align-items-center", "p-3"], [1, "pi", "pi-users", "text-6xl", "text-blue-500"], [1, "ml-3"], [1, "text-blue-500", "block", "white-space-nowrap"], [1, "text-blue-500", "block", "text-4xl", "font-bold"], ["alt", "users", 1, "w-full", 3, "src"], [1, "pi", "pi-map", "text-6xl", "text-orange-500"], [1, "text-orange-500", "block", "white-space-nowrap"], [1, "text-orange-500", "block", "text-4xl", "font-bold"], ["alt", "locations", 1, "w-full", 3, "src"], [1, "pi", "pi-directions", "text-6xl", "text-green-500"], [1, "text-green-500", "block", "white-space-nowrap"], [1, "text-green-500", "block", "text-4xl", "font-bold"], ["alt", "conversion", 1, "w-full", 3, "src"], [1, "card", "h-full", "p-0", "overflow-hidden", "flex", "flex-column"], [1, "pi", "pi-comments", "text-6xl", "text-purple-500"], [1, "text-purple-500", "block", "white-space-nowrap"], [1, "text-purple-500", "block", "text-4xl", "font-bold"], ["alt", "interactions", 1, "w-full", "mt-auto", 3, "src"], [1, "col-12", "xl:col-6"], [1, "card", "h-full"], [1, "flex", "justify-content-between", "align-items-center", "mb-3"], ["optionLabel", "name", 3, "options", "ngModel", "ngModelChange", "onChange"], [1, "graph"], ["type", "bar", "height", "400px", 3, "data", "options"], ["overviewchart", ""], [1, "list-none", "p-0", "m-0"], [1, "mb-4", "flex", "align-items-center"], ["label", "BS", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], [1, "block"], [1, "text-color-secondary", "block"], ["label", "LA", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], ["label", "JB", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], ["label", "JJ", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], ["label", "AB", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], ["label", "AF", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], ["type", "button", "pButton", "", "pRipple", "", "label", "View All", "icon", "pi pi-arrow-right", "iconPos", "right", 1, "w-full", "mt-3"], [1, "card"], [1, "text-center", "mb-5"], ["alt", "graph", 1, "w-full", 3, "src"], [1, "mb-4", "flex", "align-items-center", "justify-content-start"], ["icon", "pi pi-user-edit", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], [1, "text-blue-500", "hover:underline", "cursor-pointer", "block", "font-bold"], ["icon", "pi pi-send", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], ["icon", "pi pi-video", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], ["icon", "pi pi-briefcase", "size", "large", "shape", "circle", "styleClass", "text-base font-bold"], [1, "col-12", "lg:col-6", "xl:col-4"], [1, "flex", "align-items-center", "justify-content-between", "pb-2", "mb-1", "border-bottom-1", "surface-border"], [1, "font-bold"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-between", "py-1"], ["styleClass", "w-8rem justify-content-evenly"], ["image", "assets/demo/images/avatar/amyelsner.png", "shape", "circle"], ["image", "assets/demo/images/avatar/asiyajavayant.png", "shape", "circle"], ["image", "assets/demo/images/avatar/onyamalimba.png", "shape", "circle"], ["image", "assets/demo/images/avatar/ionibowcher.png", "shape", "circle"], ["styleClass", "w-6rem justify-content-evenly"], ["image", "assets/demo/images/avatar/annafali.png", "shape", "circle"], ["image", "assets/demo/images/avatar/bernardodominic.png", "shape", "circle"], ["image", "assets/demo/images/avatar/elwinsharvill.png", "shape", "circle"], ["styleClass", "w-4rem justify-content-evenly"], ["image", "assets/demo/images/avatar/ivanmagalhaes.png", "shape", "circle"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-between", "py-2"], ["header", "Europe", "styleClass", "p-0"], [1, "w-full"], [1, "py-1"], [1, "text-right"], [1, "inline-flex", "align-items-center", "justify-content-between", "px-2", "py-1", "bg-green-100", "text-green-900", "border-round", 2, "min-width", "3.5rem"], [1, "pi", "pi-arrow-up"], [1, "font-bold", "ml-1"], [1, "inline-flex", "p-1", "align-items-center", "justify-content-center", "surface-100", "text-700", "p-1", "border-round", "text-sm", 2, "min-width", "4rem"], [1, "inline-flex", "p-1", "align-items-center", "justify-content-center", "surface-700", "text-100", "p-1", "border-round", "text-sm", 2, "min-width", "4rem"], [1, "inline-flex", "align-items-center", "justify-content-between", "px-2", "py-1", "bg-red-100", "text-red-900", "border-round", 2, "min-width", "3.5rem"], [1, "pi", "pi-arrow-down"], ["header", "United States"], [1, "flex", "flex-column", "mb-3"], [1, "text-lg", "mb-3"], ["value", "Conversion", "styleClass", "mb-3"], [1, "inline-flex", "align-items-center"], [1, "pi", "pi-clock", "mr-1", "text-color-secondary"], [1, "text-color-secondary"], [1, "font-bold", "ml-2"], [1, "line-height-3", "mt-0", "mb-5"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "flex", "align-items-center"], ["pButton", "", "type", "button", "icon", "pi pi-angle-left", 1, "p-button-outlined", "p-button-rounded", "p-button-plain", "p-button-sm", "mr-2", "p-2", "w-2rem", "h-2rem"], ["pButton", "", "type", "button", "icon", "pi pi-angle-right", 1, "p-button-outlined", "p-button-rounded", "p-button-plain", "p-button-sm", "p-2", "w-2rem", "h-2rem"], [1, "font-bold", "ml-3"], ["image", "assets/demo/images/avatar/xuxuefeng.png", "shape", "circle"], [1, "col-12", "lg:col-6"], [1, "card", "widget-timeline"], [1, "flex", "mb-3"], [1, "flex", "flex-column", "align-items-center"], [1, "flex", "align-items-center", "justify-content-center", "border-circle", "p-2", "timeline-icon", "bg-blue-100", "text-blue-500"], [1, "pi", "pi-twitter"], [1, "h-full", "bg-blue-100", 2, "width", "2px", "min-height", "4rem"], [1, "ml-3", "flex-1"], [1, "flex", "align-items-center", "justify-content-between", "mb-3"], [1, "font-bold", "text-color-secondary"], [1, "p-3", "border-round"], [1, "flex", "align-items-center", "justify-content-between", "mb-2"], ["src", "assets/demo/images/avatar/xuxuefeng.png", "alt", "avatar", 1, "w-2rem"], [1, "font-bold", "mb-2"], [1, "text-color-secondary", "text-sm", "line-height-3", "mb-3", 2, "max-width", "28rem"], ["styleClass", "w-full md:w-6", 3, "value", "showValue"], [1, "flex", "align-items-center", "justify-content-center", "border-circle", "p-2", "timeline-icon", "bg-yellow-100", "text-yellow-500"], [1, "pi", "pi-star"], [1, "h-full", "bg-yellow-100", 2, "width", "2px", "min-height", "4rem"], [1, "flex", "align-items-center", "justify-content-between"], [1, "flex", "align-items-center", "justify-content-center", "border-circle", "p-2", "timeline-icon", "bg-green-100", "text-green-500"], [1, "pi", "pi-link"], [1, "h-full", "bg-green-100", 2, "width", "2px", "min-height", "4rem"], [1, "flex", "align-items-center", "justify-content-start", "mb-2"], ["src", "assets/demo/images/dashboard/bg-detail.svg", "alt", "bg", 1, "w-2rem"], [1, "flex", "align-items-center", "justify-content-start"], [1, "text-center"], ["pRipple", "", "styleClass", "p-button-text", "icon", "pi pi-chevron-down", "label", "View More"], ["type", "line", "id", "nasdaq-chart", "height", "348", 3, "data", "options"]],
    template: function SaaSDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "USERS SIGNED UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "3882");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1)(12, "div", 2)(13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5)(16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "LIFETIME VALUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "532");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1)(22, "div", 2)(23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 5)(26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "CONVERSION RATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "12.6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 1)(32, "div", 17)(33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5)(36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "ACTIVE TRIALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "440");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22)(42, "div", 23)(43, "div", 24)(44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Acquisition Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p-dropdown", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SaaSDashboardComponent_Template_p_dropdown_ngModelChange_46_listener($event) {
          return ctx.selectedOverviewWeek = $event;
        })("onChange", function SaaSDashboardComponent_Template_p_dropdown_onChange_46_listener() {
          return ctx.changeOverviewWeek();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "p-chart", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 1)(51, "div", 23)(52, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Latest Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "ul", 29)(55, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "p-avatar", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 5)(58, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Brooklyn Simmons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Manager at Mitsubishi");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "p-avatar", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 5)(65, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Leslie Alexander");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Customer Success at General Electric");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "p-avatar", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 5)(72, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Jerome Bell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Mario Carrier at Nintendo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "p-avatar", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 5)(79, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Jim Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Reliability Engineer at eBay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "p-avatar", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 5)(86, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Annette Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Delivery Woman at Pizza Hut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "p-avatar", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 5)(93, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Albert Flores");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Team Leader at Insomniac Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 1)(99, "div", 40)(100, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "ul", 29)(103, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "p-avatar", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 5)(106, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Add your personal information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Go Profile Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "p-avatar", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 5)(113, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Verify your phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Send Verification SMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "p-avatar", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 5)(120, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Verify your Face ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Upload Pictures");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "p-avatar", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 5)(127, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Give permissions for personal data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "View Agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 49)(132, "div", 23)(133, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Trials Leads By Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 50)(136, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "ul", 29)(141, "li", 52)(142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "p-avatarGroup", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "p-avatar", 54)(146, "p-avatar", 55)(147, "p-avatar", 56)(148, "p-avatar", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "li", 52)(150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "p-avatarGroup", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "p-avatar", 59)(154, "p-avatar", 60)(155, "p-avatar", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "li", 52)(157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Human Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "p-avatarGroup", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](160, "p-avatar", 63)(161, "p-avatar", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "li", 64)(163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "p-avatarGroup", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "p-avatar", 54)(167, "p-avatar", 55)(168, "p-avatar", 56)(169, "p-avatar", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "li", 64)(171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "p-avatarGroup", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "p-avatar", 54)(175, "p-avatar", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "li", 64)(177, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "R&D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "p-avatarGroup", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "p-avatar", 54)(181, "p-avatar", 55)(182, "p-avatar", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "li", 64)(184, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Reliability");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "p-avatarGroup", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "p-avatar", 54)(188, "p-avatar", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "li", 64)(190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "p-avatarGroup", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "p-avatar", 54)(194, "p-avatar", 55)(195, "p-avatar", 56)(196, "p-avatar", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 49)(198, "div", 23)(199, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Leads By Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "p-tabView")(202, "p-tabPanel", 65)(203, "table", 66)(204, "tbody")(205, "tr")(206, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "\uD83C\uDDEE\uD83C\uDDF9 Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "td")(209, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "90");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "td", 68)(212, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "td", 68)(217, "div", 72)(218, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "tr")(221, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "\uD83C\uDDEB\uD83C\uDDF7 France");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "td")(224, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "61");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "td", 68)(227, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "td", 68)(232, "div", 73)(233, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "tr")(236, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, "\uD83C\uDDE9\uD83C\uDDEA Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "td")(239, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "46");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "td", 68)(242, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "td", 68)(247, "div", 73)(248, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "tr")(251, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "\uD83C\uDDF3\uD83C\uDDF1 Netherlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "td")(254, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "td", 68)(257, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "td", 68)(262, "div", 72)(263, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "tr")(266, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "\uD83C\uDDEA\uD83C\uDDF8 Spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "td")(269, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "td", 68)(272, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](273, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "td", 68)(277, "div", 73)(278, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "tr")(281, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "\uD83C\uDDE7\uD83C\uDDF7 Brazil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "td")(284, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "37");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "td", 68)(287, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](288, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "td", 68)(292, "div", 73)(293, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "tr")(296, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "\uD83C\uDDF2\uD83C\uDDFD Mexico");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "td")(299, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](300, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "td", 68)(302, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](303, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](305, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "td", 68)(307, "div", 73)(308, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "p-tabPanel", 76)(311, "table", 66)(312, "tbody")(313, "tr")(314, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](315, "California");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "td")(317, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "79");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "td", 68)(320, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](321, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "td", 68)(325, "div", 73)(326, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](327, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "tr")(329, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "Texas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "td")(332, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, "71");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "td", 68)(335, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](336, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "td", 68)(340, "div", 72)(341, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "tr")(344, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](345, "Florida");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "td")(347, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "55");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "td", 68)(350, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](351, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "td", 68)(355, "div", 72)(356, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "tr")(359, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "td")(362, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](363, "48");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](364, "td", 68)(365, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](366, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "td", 68)(370, "div", 73)(371, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](372, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](373, "tr")(374, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](375, "Ohio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "td")(377, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "td", 68)(380, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](383, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "td", 68)(385, "div", 73)(386, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](387, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "tr")(389, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](390, "New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "td")(392, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, "48");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "td", 68)(395, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](396, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](397, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](398, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "td", 68)(400, "div", 73)(401, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](402, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "tr")(404, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](405, "Ohio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](406, "td")(407, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](408, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "td", 68)(410, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](411, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "td", 68)(415, "div", 73)(416, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](417, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](418, "div", 49)(419, "div", 23)(420, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "Recent Blog Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 77)(423, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, "What is the Customer Journey?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](425, "p-tag", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](426, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](427, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](429, "Jan 15.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](431, "4 days 36 mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](433, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "Sit amet nulla facilisi morbi tempus iaculis. Dolor magna eget est lorem ipsum dolor sit. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "div", 85)(437, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](438, "button", 87)(439, "button", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](440, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](441, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](443, "/8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "p-avatarGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](445, "p-avatar", 54)(446, "p-avatar", 55)(447, "p-avatar", 56)(448, "p-avatar", 57)(449, "p-avatar", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "div", 91)(451, "div", 92)(452, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](453, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "ul", 29)(455, "li", 93)(456, "div", 94)(457, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](458, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](459, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "div", 98)(461, "div", 99)(462, "span")(463, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](464, "Tom Mathias");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](465, " retweeted a tweet about your following keyword. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](466, "span", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](467, "46m");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](468, "div", 101)(469, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](470, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](471, "p-avatarGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](472, "p-avatar", 54)(473, "p-avatar", 55)(474, "p-avatar", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](475, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](476, "Jeff Atwood");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "p", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](478, "Hooray! I suck at hardware but I was able to get the pi zero W, plus usb case, plus two color e-ink hat, to work!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](479, "p-progressBar", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](480, "li", 93)(481, "div", 94)(482, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](483, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](484, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](485, "div", 98)(486, "div", 110)(487, "span")(488, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](489, "Scott Wesley");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](490, " starred NS0021 on customer list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "span", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](492, "1h 51m");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "li", 93)(494, "div", 94)(495, "span", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](496, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](497, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](498, "div", 98)(499, "div", 99)(500, "span")(501, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](502, "Jorge Gomez");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](503, " shared design files on cloud. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "span", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](505, "12h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](506, "ul", 29)(507, "li", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](508, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](509, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](510, "01.Verona-Remastered.fig");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](511, "li", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](512, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](513, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](514, "02.Verona-Marketing.fig");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](516, "p-button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](517, "div", 22)(518, "div", 40)(519, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](520, "Monthly Recurring Revenue Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](521, "p-chart", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/demo/images/dashboard/users" + (ctx.colorScheme === "light" ? "" : "-dark") + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/demo/images/dashboard/locations" + (ctx.colorScheme === "light" ? "" : "-dark") + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/demo/images/dashboard/rate" + (ctx.colorScheme === "light" ? "" : "-dark") + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/demo/images/dashboard/interactions" + (ctx.colorScheme === "light" ? "" : "-dark") + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.overviewWeeks)("ngModel", ctx.selectedOverviewWeek);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.overviewChartData)("options", ctx.overviewChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](39, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](41, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](42, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/demo/images/dashboard/completion-graph-" + (ctx.colorScheme === "light" ? "light" : "dark") + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](43, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](44, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](45, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](46, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](343);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](47, _c5, ctx.colorScheme === "dark" ? "rgba(227, 248, 255, 0.1)" : "rgba(227, 248, 255, 0.5)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](49, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 50)("showValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.revenueChartData)("options", ctx.revenueChartOptions);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_tag__WEBPACK_IMPORTED_MODULE_5__.Tag, primeng_chart__WEBPACK_IMPORTED_MODULE_6__.UIChart, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_9__.AvatarGroup, primeng_avatar__WEBPACK_IMPORTED_MODULE_10__.Avatar, primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__.ProgressBar, primeng_tabview__WEBPACK_IMPORTED_MODULE_12__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_12__.TabPanel],
    encapsulation: 2
  });
}

/***/ }),

/***/ 25692:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/dashboards/saas/saas.dashboard.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaaSDashboardModule: () => (/* binding */ SaaSDashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ 65362);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chart */ 73530);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var _saas_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saas.dashboard.component */ 85491);
/* harmony import */ var _saas_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saas.dashboard-routing.module */ 20908);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panel */ 16110);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ 61820);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tag */ 32455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);


















class SaaSDashboardModule {
  static #_ = this.ɵfac = function SaaSDashboardModule_Factory(t) {
    return new (t || SaaSDashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: SaaSDashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumberModule, primeng_chart__WEBPACK_IMPORTED_MODULE_10__.ChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_13__.AvatarGroupModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_14__.AvatarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__.ProgressBarModule, primeng_panel__WEBPACK_IMPORTED_MODULE_16__.PanelModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, _saas_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.SaaSDashboardRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SaaSDashboardModule, {
    declarations: [_saas_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SaaSDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumberModule, primeng_chart__WEBPACK_IMPORTED_MODULE_10__.ChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_13__.AvatarGroupModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_14__.AvatarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__.ProgressBarModule, primeng_panel__WEBPACK_IMPORTED_MODULE_16__.PanelModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, _saas_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.SaaSDashboardRoutingModule]
  });
})();

/***/ }),

/***/ 50655:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 97777);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_dashboards_saas_saas_dashboard_module_ts.js.map