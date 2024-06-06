"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_apps_blog_blog_app_module_ts"],{

/***/ 82429:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/apps/blog/blog.app-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogAppRoutingModule: () => (/* binding */ BlogAppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class BlogAppRoutingModule {
  static #_ = this.ɵfac = function BlogAppRoutingModule_Factory(t) {
    return new (t || BlogAppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: BlogAppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
      path: 'list',
      data: {
        breadcrumb: 'List'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dataview_mjs"), __webpack_require__.e("src_app_demo_components_apps_blog_blog-list_blog-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blog-list/blog-list.module */ 6794)).then(m => m.BlogListModule)
    }, {
      path: 'detail',
      data: {
        breadcrumb: 'Detail'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_apps_blog_blog-detail_blog-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blog-detail/blog-detail.module */ 48285)).then(m => m.BlogDetailModule)
    }, {
      path: 'edit',
      data: {
        breadcrumb: 'Edit'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fileupload_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-editor_mjs"), __webpack_require__.e("src_app_demo_components_apps_blog_blog-edit_blog-edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blog-edit/blog-edit.module */ 62052)).then(m => m.BlogEditModule)
    }, {
      path: '**',
      redirectTo: '/notfound'
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogAppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 56891:
/*!**************************************************************!*\
  !*** ./src/app/demo/components/apps/blog/blog.app.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogAppModule: () => (/* binding */ BlogAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _blog_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.app-routing.module */ 82429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class BlogAppModule {
  static #_ = this.ɵfac = function BlogAppModule_Factory(t) {
    return new (t || BlogAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BlogAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _blog_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogAppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogAppModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _blog_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogAppRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_apps_blog_blog_app_module_ts.js.map