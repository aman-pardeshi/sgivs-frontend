"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_pages_pages_module_ts"],{

/***/ 38877:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/pages/pages-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRoutingModule: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class PagesRoutingModule {
  static #_ = this.ɵfac = function PagesRoutingModule_Factory(t) {
    return new (t || PagesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: PagesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
      path: 'aboutus',
      data: {
        breadcrumb: 'About'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_aboutus_aboutus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./aboutus/aboutus.module */ 48739)).then(m => m.AboutUsModule)
    }, {
      path: 'contact',
      data: {
        breadcrumb: 'Contact'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 22772)).then(m => m.ContactModule)
    }, {
      path: 'crud',
      data: {
        breadcrumb: 'Crud'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fileupload_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-focustrap_mjs-node_modules_primeng_fesm2022_pri-6c81de"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-rating_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_pages_crud_crud_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./crud/crud.module */ 17488)).then(m => m.CrudModule)
    }, {
      path: 'empty',
      data: {
        breadcrumb: 'Empty'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_empty_emptydemo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./empty/emptydemo.module */ 31157)).then(m => m.EmptyDemoModule)
    },
    // { path: 'faq', data: { breadcrumb: 'FAQ' }, loadChildren: () => import('../../../components/faq/faq.module').then(m => m.FaqModule) },
    {
      path: 'help',
      data: {
        breadcrumb: 'Help'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./help/help.module */ 61549)).then(m => m.HelpModule)
    }, {
      path: 'invoice',
      data: {
        breadcrumb: 'Invoice'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_invoice_invoice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./invoice/invoice.module */ 57815)).then(m => m.InvoiceModule)
    }, {
      path: 'timeline',
      data: {
        breadcrumb: 'Timeline'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_timeline_timelinedemo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./timeline/timelinedemo.module */ 1754)).then(m => m.TimelineDemoModule)
    }, {
      path: '**',
      redirectTo: '/notfound'
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 4586:
/*!*******************************************************!*\
  !*** ./src/app/demo/components/pages/pages.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 38877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class PagesModule {
  static #_ = this.ɵfac = function PagesModule_Factory(t) {
    return new (t || PagesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PagesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_pages_pages_module_ts.js.map