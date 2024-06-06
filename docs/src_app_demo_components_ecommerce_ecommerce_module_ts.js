"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_ecommerce_ecommerce_module_ts"],{

/***/ 26513:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/ecommerce-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EcommerceRoutingModule: () => (/* binding */ EcommerceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class EcommerceRoutingModule {
  static #_ = this.ɵfac = function EcommerceRoutingModule_Factory(t) {
    return new (t || EcommerceRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: EcommerceRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
      path: 'product-overview',
      data: {
        breadcrumb: 'Product Overview'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tabview_mjs"), __webpack_require__.e("src_app_demo_components_ecommerce_productoverview_productoverview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./productoverview/productoverview.module */ 29051)).then(m => m.ProductoverviewModule)
    }, {
      path: 'shopping-cart',
      data: {
        breadcrumb: 'Shopping Cart'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_ecommerce_shopping-cart_shopping-cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shopping-cart/shopping-cart.module */ 47348)).then(m => m.ShoppingCartModule)
    }, {
      path: 'checkout-form',
      data: {
        breadcrumb: 'Checkout Form'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("src_app_demo_components_ecommerce_checkoutform_checkoutform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./checkoutform/checkoutform.module */ 45625)).then(m => m.CheckoutFormModule)
    }, {
      path: 'product-list',
      data: {
        breadcrumb: 'Product List'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_ecommerce_productlist_productlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./productlist/productlist.module */ 30395)).then(m => m.ProductListModule)
    }, {
      path: 'new-product',
      data: {
        breadcrumb: 'New Product'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fileupload_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-editor_mjs"), __webpack_require__.e("src_app_demo_components_ecommerce_newproduct_newproduct_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./newproduct/newproduct.module */ 96771)).then(m => m.NewProductModule)
    }, {
      path: 'order-history',
      data: {
        breadcrumb: 'Order History'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_ecommerce_orderhistory_orderhistory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./orderhistory/orderhistory.module */ 42916)).then(m => m.OrderHistoryModule)
    }, {
      path: 'order-summary',
      data: {
        breadcrumb: 'Order Summary'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_ecommerce_ordersummary_ordersummary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ordersummary/ordersummary.module */ 6557)).then(m => m.OrderSummaryModule)
    }, {
      path: '**',
      redirectTo: '/notfound'
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 10414:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/ecommerce.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EcommerceModule: () => (/* binding */ EcommerceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecommerce-routing.module */ 26513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class EcommerceModule {
  static #_ = this.ɵfac = function EcommerceModule_Factory(t) {
    return new (t || EcommerceModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: EcommerceModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_0__.EcommerceRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EcommerceModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_0__.EcommerceRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_ecommerce_ecommerce_module_ts.js.map