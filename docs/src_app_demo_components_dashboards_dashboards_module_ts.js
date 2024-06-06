"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_dashboards_dashboards_module_ts"],{

/***/ 33140:
/*!*************************************************************************!*\
  !*** ./src/app/demo/components/dashboards/dashboards-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardsRoutingModule: () => (/* binding */ DashboardsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class DashboardsRoutingModule {
  static #_ = this.ɵfac = function DashboardsRoutingModule_Factory(t) {
    return new (t || DashboardsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: DashboardsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
      path: '',
      data: {
        breadcrumb: 'SaaS Dashboard'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-avatar_mjs-node_modules_primeng_fesm2022_primen-1ffce5"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chart_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-panel_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_dashboards_saas_saas_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./saas/saas.dashboard.module */ 25692)).then(m => m.SaaSDashboardModule)
    }, {
      path: 'dashboard-sales',
      data: {
        breadcrumb: 'Sales Dashboard'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-avatar_mjs-node_modules_primeng_fesm2022_primen-1ffce5"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chart_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-inputgroup_mjs-node_modules_primeng_fesm2022_pr-e62cba"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_dashboards_sales_sales_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales/sales.dashboard.module */ 25619)).then(m => m.SalesDashboardModule)
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 82887:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/dashboards/dashboards.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardsModule: () => (/* binding */ DashboardsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboards-routing.module */ 33140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class DashboardsModule {
  static #_ = this.ɵfac = function DashboardsModule_Factory(t) {
    return new (t || DashboardsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DashboardsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardsRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_dashboards_dashboards_module_ts.js.map