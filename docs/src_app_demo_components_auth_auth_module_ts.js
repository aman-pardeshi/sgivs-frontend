"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_auth_auth_module_ts"],{

/***/ 17759:
/*!*************************************************************!*\
  !*** ./src/app/demo/components/auth/auth-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class AuthRoutingModule {
  static #_ = this.ɵfac = function AuthRoutingModule_Factory(t) {
    return new (t || AuthRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AuthRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
      path: 'error',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_auth_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./error/error.module */ 45027)).then(m => m.ErrorModule)
    }, {
      path: 'access',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_auth_accessdenied_accessdenied_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./accessdenied/accessdenied.module */ 99362)).then(m => m.AccessdeniedModule)
    }, {
      path: 'login',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 3957)).then(m => m.LoginModule)
    }, {
      path: 'forgotpassword',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_auth_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgotpassword/forgotpassword.module */ 31098)).then(m => m.ForgotPasswordModule)
    }, {
      path: 'register',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-password_mjs"), __webpack_require__.e("src_app_demo_components_auth_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 3741)).then(m => m.RegisterModule)
    }, {
      path: 'newpassword',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-password_mjs"), __webpack_require__.e("src_app_demo_components_auth_newpassword_newpassword_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./newpassword/newpassword.module */ 68212)).then(m => m.NewPasswordModule)
    }, {
      path: 'verification',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_auth_verification_verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verification/verification.module */ 86848)).then(m => m.VerificationModule)
    }, {
      path: 'lockscreen',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_auth_lockscreen_lockscreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lockscreen/lockscreen.module */ 59871)).then(m => m.LockScreenModule)
    }, {
      path: '**',
      redirectTo: '/notfound'
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 66205:
/*!*****************************************************!*\
  !*** ./src/app/demo/components/auth/auth.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 17759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class AuthModule {
  static #_ = this.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_auth_auth_module_ts.js.map