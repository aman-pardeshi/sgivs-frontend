"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_components_visa-type_visa-type_module_ts"],{

/***/ 37148:
/*!******************************************************************!*\
  !*** ./src/app/components/visa-type/visa-type-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisaTypeRoutingModule: () => (/* binding */ VisaTypeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _visa_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visa-type.component */ 78952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class VisaTypeRoutingModule {
  static #_ = this.ɵfac = function VisaTypeRoutingModule_Factory(t) {
    return new (t || VisaTypeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: VisaTypeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      data: {
        breadcrumb: 'Visa Types'
      },
      component: _visa_type_component__WEBPACK_IMPORTED_MODULE_0__.VisaTypeComponent,
      children: [{
        path: 'visa-types/:slug',
        component: _visa_type_component__WEBPACK_IMPORTED_MODULE_0__.VisaTypeComponent
      }]
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisaTypeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 78952:
/*!*************************************************************!*\
  !*** ./src/app/components/visa-type/visa-type.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisaTypeComponent: () => (/* binding */ VisaTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 64431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);








const _c0 = a0 => ({
  active: a0
});
function VisaTypeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisaTypeComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.handleTabChange(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, tab_r1 === ctx_r0.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tab_r1.label, " ");
  }
}
const _c1 = () => ({
  width: "22%"
});
class VisaTypeComponent {
  constructor(router, homePageDataService) {
    this.router = router;
    this.homePageDataService = homePageDataService;
  }
  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.onRouteChange();
      }
    });
    const urlParams = this.router.url.split('/');
    this.visaId = urlParams[urlParams.length - 1];
    this.fetchVisaType();
  }
  onRouteChange() {
    const urlParams = this.router.url.split('/');
    this.visaId = urlParams[urlParams.length - 1];
    this.fetchVisaType();
  }
  fetchVisaType() {
    this.homePageDataService.getVisaType(this.visaId).subscribe({
      next: response => {
        this.visaType = response.data[0].attributes;
        this.handleTabChange(0);
      },
      error: err => {
        console.log('error fetching', err);
      }
    });
  }
  handleTabChange(i) {
    this.currentTab = this.visaType.tabs[i];
    // console.log('currentTab', this.currentTab);
    this.currentContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(this.currentTab.content_eoi);
  }
  static #_ = this.ɵfac = function VisaTypeComponent_Factory(t) {
    return new (t || VisaTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VisaTypeComponent,
    selectors: [["app-visa-type"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "wrapper"], [1, "p-1", "main-heading"], [1, "visa-type-container", "mb-3"], [1, "options-container", "card", "mb-0"], ["class", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-container", "card"], [1, "section-heading"], [1, "content", "custom-style-elements", 3, "innerHtml"], [1, "option", 3, "ngClass", "click"]],
    template: function VisaTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, VisaTypeComponent_div_6_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.visaType == null ? null : ctx.visaType.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.visaType == null ? null : ctx.visaType.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentTab == null ? null : ctx.currentTab.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.currentContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
    styles: [".visa-type-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    overflow-x: auto;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 1rem;\n  cursor: pointer;\n  border-radius: 8px;\n  flex: 0 0 auto;\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: var(--blue-100);\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  width: 78%;\n  min-height: 40rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-family: \"Karla-400\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92aXNhLXR5cGUvdmlzYS10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBSkY7SUFLSSxzQkFBQTtFQUVGO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0FBRUo7QUFBSTtFQUhGO0lBSUksV0FBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUFHSjtBQUNGO0FBREk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdOO0FBQUk7RUFDRSwyQkFBQTtBQUVOO0FBRUU7RUFDRSxVQUFBO0VBRUEsaUJBQUE7QUFESjtBQUdJO0VBTEY7SUFNSSxXQUFBO0VBQUo7QUFDRjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBR0k7RUFDRSx3QkFBQTtBQUROIiwic291cmNlc0NvbnRlbnQiOlsiLnZpc2EtdHlwZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5vcHRpb25zLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuXG4gICAgLm9wdGlvbiB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLTEwMCk7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzglO1xuICAgIC8vIHBhZGRpbmc6IDFyZW07XG4gICAgbWluLWhlaWdodDogNDByZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250ZW50LWltYWdlIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBmb250LWZhbWlseTogXCJLYXJsYS00MDBcIjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 41604:
/*!**********************************************************!*\
  !*** ./src/app/components/visa-type/visa-type.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisaTypeModule: () => (/* binding */ VisaTypeModule)
/* harmony export */ });
/* harmony import */ var _visa_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visa-type-routing.module */ 37148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class VisaTypeModule {
  static #_ = this.ɵfac = function VisaTypeModule_Factory(t) {
    return new (t || VisaTypeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: VisaTypeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_visa_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisaTypeRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisaTypeModule, {
    imports: [_visa_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisaTypeRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_visa-type_visa-type_module_ts.js.map