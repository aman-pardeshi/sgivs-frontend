"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_apps_file_file_app_module_ts"],{

/***/ 35898:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/apps/file/file.app-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileAppRoutingModule: () => (/* binding */ FileAppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _file_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.app.component */ 66460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class FileAppRoutingModule {
  static #_ = this.ɵfac = function FileAppRoutingModule_Factory(t) {
    return new (t || FileAppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: FileAppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _file_app_component__WEBPACK_IMPORTED_MODULE_0__.FileAppComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FileAppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 66460:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/apps/file/file.app.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileAppComponent: () => (/* binding */ FileAppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_file_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/file.app.service */ 35803);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chart */ 73530);
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploader/uploader.component */ 85466);












function FileAppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileAppComponent_div_1_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r6.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "p-menu", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 35)(13, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const metric_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](metric_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", metric_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("popup", true)("model", ctx_r0.menuitems);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", metric_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", metric_r5.fieldColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](metric_r5.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](metric_r5.fileSize);
  }
}
function FileAppComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const folder_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", folder_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](folder_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](folder_r9.size);
  }
}
function FileAppComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "File Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FileAppComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "button", 49)(14, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("text-xl text-primary mr-2 " + file_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r10.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r10.fileSize);
  }
}
const _c0 = () => ({
  "width": "75%"
});
class FileAppComponent {
  constructor(fileService, layoutService) {
    this.fileService = fileService;
    this.layoutService = layoutService;
    this.files = [];
    this.metrics = [];
    this.folders = [];
    this.menuitems = [];
    this.subscription = this.layoutService.configUpdate$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(25)).subscribe(config => {
      this.initChart();
    });
  }
  ngOnInit() {
    this.fileService.getFiles().then(data => this.files = data);
    this.fileService.getMetrics().then(data => this.metrics = data);
    this.fileService.getFoldersLarge().then(data => this.folders = data);
    this.initChart();
    this.menuitems = [{
      label: 'View',
      icon: 'pi pi-search'
    }, {
      label: 'Refresh',
      icon: 'pi pi-refresh'
    }];
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.chartPlugins = [{
      beforeDraw: function (chart) {
        let ctx = chart.ctx;
        let width = chart.width;
        let height = chart.height;
        let fontSize = 1.50;
        let oldFill = ctx.fillStyle;
        ctx.restore();
        ctx.font = fontSize + "rem sans-serif";
        ctx.textBaseline = "middle";
        let text = "Free Space";
        let text2 = 50 + "GB / " + 80 + "GB";
        let textX = Math.round((width - ctx.measureText(text).width) / 2);
        let textY = (height + chart.chartArea.top) / 2.25;
        let text2X = Math.round((width - ctx.measureText(text).width) / 2.10);
        let text2Y = (height + chart.chartArea.top) / 1.75;
        ctx.fillStyle = chart.config.data.datasets[0].backgroundColor[0];
        ctx.fillText(text, textX, textY);
        ctx.fillText(text2, text2X, text2Y);
        ctx.fillStyle = oldFill;
        ctx.save();
      }
    }];
    this.fileChart = {
      datasets: [{
        data: [300, 100],
        backgroundColor: [documentStyle.getPropertyValue('--primary-600'), documentStyle.getPropertyValue('--primary-100')],
        hoverBackgroundColor: [documentStyle.getPropertyValue('--primary-700'), documentStyle.getPropertyValue('--primary-200')],
        borderColor: 'transparent',
        fill: true
      }]
    };
    this.fileChartOptions = {
      animation: {
        duration: 0
      },
      cutout: '90%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
  static #_ = this.ɵfac = function FileAppComponent_Factory(t) {
    return new (t || FileAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_file_app_service__WEBPACK_IMPORTED_MODULE_0__.FileAppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FileAppComponent,
    selectors: [["ng-component"]],
    decls: 50,
    vars: 11,
    consts: [[1, "grid"], ["class", "col-12 md:col-6 lg:col-3", 4, "ngFor", "ngForOf"], [1, "col-12", "md:col-5", "xl:col-3"], [1, "card"], [1, "text-900", "text-xl", "font-semibold", "mb-3"], ["type", "doughnut", "id", "country-chart", 3, "plugins", "data", "options"], [1, "mt-5", "flex", "gap-3"], ["pButton", "", "pRipple", "", "icon", "pi pi-search", "label", "Details", 1, "p-button-outlined", "flex-1"], ["pButton", "", "pRipple", "", "icon", "pi pi-upload", "label", "Upgrade", 1, "flex-1"], [1, "list-none", "p-0", "m-0"], [1, "p-3", "mb-3", "flex", "align-items-center", "justify-content-between", "cursor-pointer", "border-round", "bg-indigo-50", "text-indigo-900"], [1, "flex", "align-items-center"], [1, "pi", "pi-image", "text-2xl", "mr-3"], [1, "ext-lg", "font-medium"], [1, "text-lg", "font-bold"], [1, "p-3", "mb-3", "flex", "align-items-center", "justify-content-between", "cursor-pointer", "border-round", "bg-purple-50", "text-purple-900"], [1, "pi", "pi-file", "text-2xl", "mr-3"], [1, "p-3", "flex", "align-items-center", "justify-content-between", "cursor-pointer", "border-round", "bg-teal-50", "text-teal-900"], [1, "pi", "pi-video", "text-2xl", "mr-3"], [1, "card", "p-0"], [1, "col-12", "md:col-7", "xl:col-9"], ["class", "col-12 md:col-6 xl:col-4", 4, "ngFor", "ngForOf"], ["responsiveLayout", "scroll", 3, "value", "rows", "paginator"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [1, "col-12", "md:col-6", "lg:col-3"], [1, "card", "h-full"], [1, "flex", "align-items-center", "justify-content-between", "mb-3"], [1, "text-900", "text-xl", "font-semibold"], ["pButton", "", "pRipple", "", 1, "p-button-text", "p-button-sm", "p-button-rounded", 3, "icon", "click"], ["appendTo", "body", 3, "popup", "model"], ["menu", ""], [1, "border-round", 2, "height", "6px", 3, "ngClass"], [1, "h-full", "border-round", 2, "width", "34%", 3, "ngClass"], [1, "flex", "align-item-center", "justify-content-between"], [1, "text-900", "mt-3", "text-md", "font-medium"], [1, "col-12", "md:col-6", "xl:col-4"], [1, "p-3", "border-1", "surface-border", "flex", "align-items-center", "justify-content-between", "hover:surface-100", "cursor-pointer", "border-round"], [1, "text-2xl", "mr-3", 3, "ngClass"], [1, "text-900", "text-lg", "font-medium"], [1, "text-600", "text-lg", "font-semibold"], ["pSortableColumn", "name", 1, "white-space-nowrap", 2, "min-width", "12rem"], ["field", "name"], ["pSortableColumn", "date", 1, "white-space-nowrap", 2, "min-width", "12rem"], ["field", "date"], ["pSortableColumn", "fileSize", 1, "white-space-nowrap", 2, "min-width", "12rem"], [2, "width", "10rem"], [1, "text-center"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", 1, "p-button-danger", "p-button-text", "p-button-rounded", "mr-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-search", 1, "p-button-text", "p-button-rounded"]],
    template: function FileAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FileAppComponent_div_1_Template, 17, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Account Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "button", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", 9)(14, "li", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "85");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 15)(22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "231");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li", 17)(29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "app-file-uploader");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 20)(38, "div", 3)(39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Folders");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, FileAppComponent_div_42_Template, 8, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 3)(44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Recent Uploads");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p-table", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, FileAppComponent_ng_template_48_Template, 11, 0, "ng-template", 24)(49, FileAppComponent_ng_template_49_Template, 15, 5, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.metrics);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.fileChart)("options", ctx.fileChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.folders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.files)("rows", 8)("paginator", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_menu__WEBPACK_IMPORTED_MODULE_10__.Menu, primeng_chart__WEBPACK_IMPORTED_MODULE_11__.UIChart, _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_2__.UploaderComponent],
    styles: ["[_nghost-%COMP%]     .p-fileupload-content {\n  border: 0 none;\n}\n[_nghost-%COMP%]     .p-fileupload-row {\n  display: none;\n}\n[_nghost-%COMP%]     .p-progressbar {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload {\n  padding: 0;\n}\n[_nghost-%COMP%]     .p-fileupload-buttonbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2FwcHMvZmlsZS9maWxlLmFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGNBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0FBRlI7QUFLSTtFQUNJLFVBQUE7QUFIUjtBQU1JO0VBQ0ksYUFBQTtBQUpSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAucC1maWxldXBsb2FkLWNvbnRlbnQge1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICB9XG5cbiAgICAucC1maWxldXBsb2FkLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnAtcHJvZ3Jlc3NiYXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnAtZmlsZXVwbG9hZCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLnAtZmlsZXVwbG9hZC1idXR0b25iYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 69369:
/*!**************************************************************!*\
  !*** ./src/app/demo/components/apps/file/file.app.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileAppModule: () => (/* binding */ FileAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/chart */ 73530);
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploader/uploader.component */ 85466);
/* harmony import */ var _service_file_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/file.app.service */ 35803);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var _file_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file.app-routing.module */ 35898);
/* harmony import */ var _file_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file.app.component */ 66460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);














class FileAppModule {
  static #_ = this.ɵfac = function FileAppModule_Factory(t) {
    return new (t || FileAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: FileAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_service_file_app_service__WEBPACK_IMPORTED_MODULE_1__.FileAppService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _file_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.FileAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule, primeng_menu__WEBPACK_IMPORTED_MODULE_11__.MenuModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__.FileUploadModule, primeng_chart__WEBPACK_IMPORTED_MODULE_13__.ChartModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FileAppModule, {
    declarations: [_file_app_component__WEBPACK_IMPORTED_MODULE_3__.FileAppComponent, _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_0__.UploaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _file_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.FileAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule, primeng_menu__WEBPACK_IMPORTED_MODULE_11__.MenuModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__.FileUploadModule, primeng_chart__WEBPACK_IMPORTED_MODULE_13__.ChartModule]
  });
})();

/***/ }),

/***/ 35803:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/apps/file/service/file.app.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileAppService: () => (/* binding */ FileAppService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54860);


class FileAppService {
  constructor(http) {
    this.http = http;
  }
  getFiles() {
    return this.http.get('assets/demo/data/file-management.json').toPromise().then(res => res.files).then(data => data);
  }
  getMetrics() {
    return this.http.get('assets/demo/data/file-management.json').toPromise().then(res => res.metrics).then(data => data);
  }
  getFoldersSmall() {
    return this.http.get('assets/demo/data/file-management.json').toPromise().then(res => res.folders_small).then(data => data);
  }
  getFoldersLarge() {
    return this.http.get('assets/demo/data/file-management.json').toPromise().then(res => res.folders_large).then(data => data);
  }
  static #_ = this.ɵfac = function FileAppService_Factory(t) {
    return new (t || FileAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FileAppService,
    factory: FileAppService.ɵfac
  });
}

/***/ }),

/***/ 85466:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/apps/file/uploader/uploader.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploaderComponent: () => (/* binding */ UploaderComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fileupload */ 88285);








const _c0 = ["buttonEl"];
function UploaderComponent_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Drop or select files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function UploaderComponent_ng_template_4_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function UploaderComponent_ng_template_4_div_2_div_1_Template_div_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const file_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onImageMouseOver(file_r5));
    })("mouseleave", function UploaderComponent_ng_template_4_div_2_div_1_Template_div_mouseleave_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const file_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onImageMouseLeave(file_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploaderComponent_ng_template_4_div_2_div_1_Template_button_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const file_r5 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.removeImage($event, file_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", file_r5.objectURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", file_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", file_r5.name);
  }
}
function UploaderComponent_ng_template_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploaderComponent_ng_template_4_div_2_div_1_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.uploadedFiles);
  }
}
function UploaderComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploaderComponent_ng_template_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.advancedFileInput.nativeElement.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploaderComponent_ng_template_4_div_1_Template, 6, 0, "div", 6)(2, UploaderComponent_ng_template_4_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.uploadedFiles.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.uploadedFiles.length);
  }
}
class UploaderComponent {
  constructor(messageService) {
    this.messageService = messageService;
    this.uploadedFiles = [];
  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'File uploaded successfully'
    });
  }
  onImageMouseOver(file) {
    this.buttonEl.toArray().forEach(el => {
      el.nativeElement.id === file.name ? el.nativeElement.style.display = 'flex' : null;
    });
  }
  onImageMouseLeave(file) {
    this.buttonEl.toArray().forEach(el => {
      el.nativeElement.id === file.name ? el.nativeElement.style.display = 'none' : null;
    });
  }
  removeImage(event, file) {
    event.stopPropagation();
    this.uploadedFiles = this.uploadedFiles.filter(i => i !== file);
  }
  static #_ = this.ɵfac = function UploaderComponent_Factory(t) {
    return new (t || UploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UploaderComponent,
    selectors: [["app-file-uploader"]],
    viewQuery: function UploaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonEl = _t);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService])],
    decls: 5,
    vars: 5,
    consts: [["key", "fu"], [1, "card"], ["name", "demo[]", "url", "./upload.php", "accept", "image/*", 1, "w-full", 3, "customUpload", "multiple", "showUploadButton", "showCancelButton", "auto", "onUpload", "onSelect"], ["fileUploader", ""], ["pTemplate", "content"], [1, "w-full", "py-3", 2, "cursor", "copy", 3, "click"], ["class", "h-full flex flex-column justify-content-center align-items-center", 4, "ngIf"], ["class", "flex flex-wrap gap-5", 4, "ngIf"], [1, "h-full", "flex", "flex-column", "justify-content-center", "align-items-center"], [1, "pi", "pi-upload", "text-900", "text-2xl", "mb-3"], [1, "font-bold", "text-900", "text-xl", "mb-3"], [1, "font-medium", "text-600", "text-md", "text-center"], [1, "flex", "flex-wrap", "gap-5"], ["class", "h-full relative w-7rem h-7rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto", "style", "padding: 1px;", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "h-full", "relative", "w-7rem", "h-7rem", "border-3", "border-transparent", "border-round", "hover:bg-primary", "transition-duration-100", "cursor-auto", 2, "padding", "1px", 3, "mouseenter", "mouseleave"], [1, "w-full", "h-full", "border-round", "shadow-2", 3, "src", "alt"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-primary", "text-sm", "absolute", "justify-content-center", "align-items-center", "cursor-pointer", 2, "top", "-10px", "right", "-10px", "display", "none", 3, "id", "click"], ["buttonEl", ""]],
    template: function UploaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "p-fileUpload", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onUpload", function UploaderComponent_Template_p_fileUpload_onUpload_2_listener($event) {
          return ctx.onUpload($event);
        })("onSelect", function UploaderComponent_Template_p_fileUpload_onSelect_2_listener($event) {
          return ctx.onUpload($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UploaderComponent_ng_template_4_Template, 3, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customUpload", true)("multiple", true)("showUploadButton", true)("showCancelButton", false)("auto", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__.FileUpload],
    encapsulation: 2
  });
}

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
//# sourceMappingURL=src_app_demo_components_apps_file_file_app_module_ts.js.map