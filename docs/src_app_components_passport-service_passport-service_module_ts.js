"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_components_passport-service_passport-service_module_ts"],{

/***/ 76413:
/*!********************************************************************************!*\
  !*** ./src/app/components/passport-service/passport-service-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassportServiceRoutingModule: () => (/* binding */ PassportServiceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _passport_service_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passport-service.component */ 67522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class PassportServiceRoutingModule {
  static #_ = this.ɵfac = function PassportServiceRoutingModule_Factory(t) {
    return new (t || PassportServiceRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PassportServiceRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      data: {
        breadcrumb: 'Passport Service'
      },
      component: _passport_service_component__WEBPACK_IMPORTED_MODULE_0__.PassportServiceComponent,
      children: [{
        path: 'service/:id',
        component: _passport_service_component__WEBPACK_IMPORTED_MODULE_0__.PassportServiceComponent
      }]
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PassportServiceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 67522:
/*!***************************************************************************!*\
  !*** ./src/app/components/passport-service/passport-service.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassportServiceComponent: () => (/* binding */ PassportServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _visa_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visa-type/utils */ 64431);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);











const _c0 = a0 => ({
  active: a0
});
function PassportServiceComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PassportServiceComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.handleTabChange(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, tab_r4 === ctx_r0.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tab_r4.label, " ");
  }
}
const _c1 = () => ({
  width: "300px"
});
function PassportServiceComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 10)(3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Application Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PassportServiceComponent_div_10_Template_p_dropdown_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.selectedApplicationType = $event);
    })("onChange", function PassportServiceComponent_div_10_Template_p_dropdown_onChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.calculateFee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13)(7, "div", 14)(8, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PassportServiceComponent_div_10_Template_p_dropdown_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.selectedServiceType = $event);
    })("onChange", function PassportServiceComponent_div_10_Template_p_dropdown_onChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.calculateFee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 17)(12, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Booklet Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PassportServiceComponent_div_10_Template_p_dropdown_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.selectedBookletType = $event);
    })("onChange", function PassportServiceComponent_div_10_Template_p_dropdown_onChange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.calculateFee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 17)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Applicant Age ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PassportServiceComponent_div_10_Template_p_dropdown_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.selectedAgeGroup = $event);
    })("onChange", function PassportServiceComponent_div_10_Template_p_dropdown_onChange_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.calculateFee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 19)(20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Fee - AED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " ** Passport fee and service charges are non-refundable. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " ** Please note that there is a BLS Service charges of 9 AED and ICWF Charge 8.05 AED in addition of the Passport fee for all categories of Passport. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " ** Effective from 1st January-2018, 5% VAT will be levied on BLS fee, premium lounge fee and Value added services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " ** Value Added Service availed will be charged additional ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.applicationTypes)("ngModel", ctx_r1.selectedApplicationType)("panelStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.serviceTypes)("ngModel", ctx_r1.selectedServiceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.bookletType)("ngModel", ctx_r1.selectedBookletType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.ageGroups)("ngModel", ctx_r1.selectedAgeGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fee);
  }
}
function PassportServiceComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r2.currentContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
const _c2 = () => ({
  width: "22%"
});
class PassportServiceComponent {
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
    this.passportId = urlParams[urlParams.length - 1];
    console.log('pass', this.passportId);
    this.fetchPassportService();
    this.applicationTypes = [{
      label: 'Renewal/Reissue on expiry of validity/Exhaustion of visa pages',
      value: ''
    }, {
      label: 'New passport in lieu of LossDamage of passport',
      value: ''
    }, {
      label: 'Registration of Birth/ Issue of Birth certificate and passport for a child born in UAE',
      value: ''
    }, {
      label: 'Police clearance certificate',
      value: ''
    }, {
      label: 'NRI certificates (For educational purpose only)',
      value: ''
    }, {
      label: 'Certification of Date/Place of birth, Marital status, Spouse name etc. as per entry in passport',
      value: ''
    }, {
      label: 'Extract from birth register (Issue of those who are born in UAE and birth has been registered in Consulate General of India, Dubai)',
      value: ''
    }, {
      label: 'Certificate of Genuineness of Indian Passport',
      value: ''
    }, {
      label: 'SVP Passport (Short Validity Passport)',
      value: ''
    }];
    this.serviceTypes = [{
      label: 'Normal',
      value: ''
    }, {
      label: 'Tatkal',
      value: ''
    }];
    this.bookletType = [{
      label: 'Normal',
      value: ''
    }, {
      label: 'Jumbo',
      value: ''
    }];
    this.ageGroups = [{
      label: '18 Years and Above',
      value: ''
    }, {
      label: 'Between 15 to 18 Years',
      value: ''
    }, {
      label: 'Below 18 Years',
      value: ''
    }];
  }
  onRouteChange() {
    const urlParams = this.router.url.split('/');
    this.passportId = urlParams[urlParams.length - 1];
    this.fetchPassportService();
  }
  fetchPassportService() {
    this.homePageDataService.getPassportService(this.passportId).subscribe({
      next: response => {
        this.passportService = response?.data[0].attributes;
        console.log('data', this.passportService);
        this.handleTabChange(0);
      },
      error: err => {
        console.log('error fetching', err);
      }
    });
  }
  handleTabChange(i) {
    this.currentTab = this.passportService.tabs[i];
    console.log('currentTab', this.currentTab);
    this.currentContent = (0,_visa_type_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(this.currentTab.content_eoi);
  }
  calculateFee() {
    if (this.selectedApplicationType && this.selectedServiceType && this.selectedBookletType && this.selectedAgeGroup) {
      this.fee = 859;
    }
  }
  static #_ = this.ɵfac = function PassportServiceComponent_Factory(t) {
    return new (t || PassportServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PassportServiceComponent,
    selectors: [["app-passport-service"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 8,
    consts: [[1, "wrapper"], [1, "p-1"], [1, "visa-type-container", "mb-3"], [1, "options-container", "card", "mb-0", "p-3"], ["class", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-container", "card"], [4, "ngIf", "ngIfElse"], ["elseContentBlock", ""], [1, "option", 3, "ngClass", "click"], [1, ""], [1, "field", "flex", "flex-column", "w-full"], ["htmlFor", "applicationTypes", 1, "ml-1", "mb-2", "font-bold"], ["optionLabel", "label", "id", "applicationTypes", "styleClass", "w-full", "placeholder", "Select application type", 3, "options", "ngModel", "panelStyle", "ngModelChange", "onChange"], [1, "flex", "gap-3", "mt-3", "justify-content-evenly"], [1, "field", "flex", "flex-column", "w-4"], ["htmlFor", "serviceType", 1, "ml-1", "mb-2", "font-bold"], ["optionLabel", "label", "id", "serviceType", "styleClass", "w-full", "placeholder", "Select application type", 3, "options", "ngModel", "ngModelChange", "onChange"], [1, "flex", "flex-column", "w-4"], ["optionLabel", "label", "styleClass", "w-full", "placeholder", "Select application type", 3, "options", "ngModel", "ngModelChange", "onChange"], [1, "mt-3"], [1, "font-bold"], [1, "text-sm", "text-red-300", "mt-3"], [3, "innerHtml"]],
    template: function PassportServiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PassportServiceComponent_div_6_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PassportServiceComponent_div_10_Template, 32, 11, "div", 6)(11, PassportServiceComponent_ng_template_11_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.passportService == null ? null : ctx.passportService.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.passportService == null ? null : ctx.passportService.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentTab == null ? null : ctx.currentTab.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentTab.title === "Fees")("ngIfElse", _r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown],
    styles: [".visa-type-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    overflow-x: auto;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 1rem;\n  cursor: pointer;\n  border-radius: 8px;\n  flex: 0 0 auto;\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: var(--blue-100);\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  width: 78%;\n  min-height: 40rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzcG9ydC1zZXJ2aWNlL3Bhc3Nwb3J0LXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFKRjtJQUtJLHNCQUFBO0VBRUY7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7QUFFSjtBQUFJO0VBSEY7SUFJSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtFQUdKO0FBQ0Y7QUFESTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR047QUFBSTtFQUNFLDJCQUFBO0FBRU47QUFFRTtFQUNFLFVBQUE7RUFFQSxpQkFBQTtBQURKO0FBR0k7RUFMRjtJQU1JLFdBQUE7RUFBSjtBQUNGO0FBRUk7RUFDRSxlQUFBO0FBQU4iLCJzb3VyY2VzQ29udGVudCI6WyIudmlzYS10eXBlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm9wdGlvbnMtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG5cbiAgICAub3B0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtMTAwKTtcbiAgICB9XG4gIH1cblxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3OCU7XG4gICAgLy8gcGFkZGluZzogMXJlbTtcbiAgICBtaW4taGVpZ2h0OiA0MHJlbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82609:
/*!************************************************************************!*\
  !*** ./src/app/components/passport-service/passport-service.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassportServiceModule: () => (/* binding */ PassportServiceModule)
/* harmony export */ });
/* harmony import */ var _passport_service_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passport-service-routing.module */ 76413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class PassportServiceModule {
  static #_ = this.ɵfac = function PassportServiceModule_Factory(t) {
    return new (t || PassportServiceModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PassportServiceModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_passport_service_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassportServiceRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PassportServiceModule, {
    imports: [_passport_service_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassportServiceRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_passport-service_passport-service_module_ts.js.map