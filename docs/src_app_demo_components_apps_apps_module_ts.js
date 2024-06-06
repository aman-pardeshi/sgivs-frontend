"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_apps_apps_module_ts"],{

/***/ 76060:
/*!*************************************************************!*\
  !*** ./src/app/demo/components/apps/apps-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsRoutingModule: () => (/* binding */ AppsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class AppsRoutingModule {
  static #_ = this.ɵfac = function AppsRoutingModule_Factory(t) {
    return new (t || AppsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
      path: 'calendar',
      data: {
        breadcrumb: 'Calendar'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-focustrap_mjs-node_modules_primeng_fesm2022_pri-6c81de"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs"), __webpack_require__.e("src_app_demo_components_apps_calendar_calendar_app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.app.module */ 89882)).then(m => m.CalendarAppModule)
    }, {
      path: 'tasklist',
      data: {
        breadcrumb: 'Task List'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-focustrap_mjs-node_modules_primeng_fesm2022_pri-6c81de"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-avatar_mjs-node_modules_primeng_fesm2022_primen-1ffce5"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-editor_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_apps_tasklist_tasklist_app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tasklist/tasklist.app.module */ 26978)).then(m => m.TaskListAppModule)
    }, {
      path: 'chat',
      data: {
        breadcrumb: 'Chat'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-overlaypanel_mjs"), __webpack_require__.e("src_app_demo_components_apps_chat_chat_app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./chat/chat.app.module */ 44540)).then(m => m.ChatAppModule)
    }, {
      path: 'files',
      data: {
        breadcrumb: 'Files'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fileupload_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chart_mjs"), __webpack_require__.e("src_app_demo_components_apps_file_file_app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./file/file.app.module */ 69369)).then(m => m.FileAppModule)
    }, {
      path: 'mail',
      data: {
        breadcrumb: 'Mail'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fileupload_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-focustrap_mjs-node_modules_primeng_fesm2022_pri-6c81de"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-editor_mjs"), __webpack_require__.e("src_app_demo_components_apps_mail_mail_app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mail/mail.app.module */ 45057)).then(m => m.MailAppModule)
    }, {
      path: 'kanban',
      data: {
        breadcrumb: 'Kanban'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chips_mjs-node_modules_primeng_fesm2022_primeng-ef2cf2"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-avatar_mjs-node_modules_primeng_fesm2022_primen-1ffce5"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-overlaypanel_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_apps_kanban_kanban_app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./kanban/kanban.app.module */ 33665)).then(m => m.KanbanAppModule)
    }, {
      path: 'blog',
      data: {
        breadcrumb: 'Blog'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_apps_blog_blog_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blog/blog.app.module */ 56891)).then(m => m.BlogAppModule)
    }, {
      path: '**',
      redirectTo: '/notfound'
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 44953:
/*!*****************************************************!*\
  !*** ./src/app/demo/components/apps/apps.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsModule: () => (/* binding */ AppsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps-routing.module */ 76060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class AppsModule {
  static #_ = this.ɵfac = function AppsModule_Factory(t) {
    return new (t || AppsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppsRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_apps_apps_module_ts.js.map