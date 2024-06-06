"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_uikit_uikit_module_ts"],{

/***/ 30720:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/uikit-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIkitRoutingModule: () => (/* binding */ UIkitRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class UIkitRoutingModule {
  static #_ = this.ɵfac = function UIkitRoutingModule_Factory(t) {
    return new (t || UIkitRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: UIkitRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
      path: 'button',
      data: {
        breadcrumb: 'Button'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-togglebutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-splitbutton_mjs"), __webpack_require__.e("src_app_demo_components_uikit_button_buttondemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./button/buttondemo.module */ 22796)).then(m => m.ButtonDemoModule)
    }, {
      path: 'charts',
      data: {
        breadcrumb: 'Charts'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chart_mjs"), __webpack_require__.e("src_app_demo_components_uikit_charts_chartsdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/chartsdemo.module */ 78284)).then(m => m.ChartsDemoModule)
    }, {
      path: 'file',
      data: {
        breadcrumb: 'File'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fileupload_mjs"), __webpack_require__.e("src_app_demo_components_uikit_file_filedemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./file/filedemo.module */ 52576)).then(m => m.FileDemoModule)
    }, {
      path: 'floatlabel',
      data: {
        breadcrumb: 'Float Label'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chips_mjs-node_modules_primeng_fesm2022_primeng-ef2cf2"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-cascadeselect_mjs-node_modules_primeng_fesm2022-7dc730"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_floatlabel_floatlabeldemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./floatlabel/floatlabeldemo.module */ 19482)).then(m => m.FloatlabelDemoModule)
    }, {
      path: 'formlayout',
      data: {
        breadcrumb: 'Form Layout'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chips_mjs-node_modules_primeng_fesm2022_primeng-ef2cf2"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-cascadeselect_mjs-node_modules_primeng_fesm2022-7dc730"), __webpack_require__.e("src_app_demo_components_uikit_formlayout_formlayoutdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./formlayout/formlayoutdemo.module */ 57025)).then(m => m.FormLayoutDemoModule)
    }, {
      path: 'input',
      data: {
        breadcrumb: 'Input'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chips_mjs-node_modules_primeng_fesm2022_primeng-ef2cf2"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-cascadeselect_mjs-node_modules_primeng_fesm2022-7dc730"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-rating_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-togglebutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-slider_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-inputgroup_mjs-node_modules_primeng_fesm2022_pr-e62cba"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_input_inputdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./input/inputdemo.module */ 13874)).then(m => m.InputDemoModule)
    }, {
      path: 'invalidstate',
      data: {
        breadcrumb: 'Invalid State'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chips_mjs-node_modules_primeng_fesm2022_primeng-ef2cf2"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-cascadeselect_mjs-node_modules_primeng_fesm2022-7dc730"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-password_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_invalid_invalidstatedemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./invalid/invalidstatedemo.module */ 82226)).then(m => m.InvalidStateDemoModule)
    }, {
      path: 'list',
      data: {
        breadcrumb: 'List'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-rating_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dataview_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_list_listdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list/listdemo.module */ 40900)).then(m => m.ListDemoModule)
    }, {
      path: 'media',
      data: {
        breadcrumb: 'Media'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-focustrap_mjs-node_modules_primeng_fesm2022_pri-6c81de"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_media_mediademo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./media/mediademo.module */ 83499)).then(m => m.MediaDemoModule)
    }, {
      path: 'message',
      data: {
        breadcrumb: 'Message'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("src_app_demo_components_uikit_messages_messagesdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./messages/messagesdemo.module */ 41254)).then(m => m.MessagesDemoModule)
    }, {
      path: 'misc',
      data: {
        breadcrumb: 'Misc'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-avatar_mjs-node_modules_primeng_fesm2022_primen-1ffce5"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_misc_miscdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./misc/miscdemo.module */ 33658)).then(m => m.MiscDemoModule)
    }, {
      path: 'overlay',
      data: {
        breadcrumb: 'Overlay'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-focustrap_mjs-node_modules_primeng_fesm2022_pri-6c81de"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-overlaypanel_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_overlays_overlaysdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./overlays/overlaysdemo.module */ 83817)).then(m => m.OverlaysDemoModule)
    }, {
      path: 'panel',
      data: {
        breadcrumb: 'Panel'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-panel_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-splitbutton_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_panels_panelsdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./panels/panelsdemo.module */ 37351)).then(m => m.PanelsDemoModule)
    }, {
      path: 'table',
      data: {
        breadcrumb: 'Table'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-progressbar_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-rating_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-togglebutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-slider_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_table_tabledemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./table/tabledemo.module */ 89795)).then(m => m.TableDemoModule)
    }, {
      path: 'tree',
      data: {
        breadcrumb: 'Tree'
      },
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_uikit_tree_treedemo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tree/treedemo.module */ 84551)).then(m => m.TreeDemoModule)
    }, {
      path: 'menu',
      data: {
        breadcrumb: 'Menu'
      },
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_menus_menus_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menus/menus.module */ 93525)).then(m => m.MenusModule)
    }, {
      path: '**',
      redirectTo: '/notfound'
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UIkitRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 83250:
/*!*******************************************************!*\
  !*** ./src/app/demo/components/uikit/uikit.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIkitModule: () => (/* binding */ UIkitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uikit-routing.module */ 30720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class UIkitModule {
  static #_ = this.ɵfac = function UIkitModule_Factory(t) {
    return new (t || UIkitModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: UIkitModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UIkitRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UIkitModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UIkitRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_uikit_module_ts.js.map