"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/app.layout.component */ 79206);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 50159);
/* harmony import */ var _components_public_holiday_public_holiday_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/public-holiday/public-holiday.component */ 19202);
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ 8112);
/* harmony import */ var _components_additional_services_additional_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/additional-services/additional-services.component */ 38349);
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/faq/faq.component */ 46050);
/* harmony import */ var _components_customer_experience_customer_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customer-experience/customer-experience.component */ 59989);
/* harmony import */ var _components_security_regulations_security_regulations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/security-regulations/security-regulations.component */ 93839);
/* harmony import */ var _components_useful_links_useful_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/useful-links/useful-links.component */ 20123);
/* harmony import */ var _components_attestation_service_attestation_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/attestation-service/attestation-service.component */ 14876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);













const routes = [{
  path: '',
  component: _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_0__.AppLayoutComponent,
  children: [{
    path: '',
    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
  }, {
    path: 'news',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_news_news_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/news/news.module */ 1618)).then(m => m.NewsModule)
  }, {
    path: 'visa',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_visa-type_visa-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/visa-type/visa-type.module */ 41604)).then(m => m.VisaTypeModule)
  }, {
    path: 'passport',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_passport-service_passport-service_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/passport-service/passport-service.module */ 82609)).then(m => m.PassportServiceModule)
  }, {
    path: 'attestation/:id',
    data: {
      breadcrumb: 'Attestation Service'
    },
    component: _components_attestation_service_attestation_service_component__WEBPACK_IMPORTED_MODULE_9__.AttestationServiceComponent
  }, {
    path: 'public-holidays',
    data: {
      breadcrumb: 'Public Holidays'
    },
    component: _components_public_holiday_public_holiday_component__WEBPACK_IMPORTED_MODULE_2__.PublicHolidayComponent
  }, {
    path: 'contact-us',
    data: {
      breadcrumb: 'Contact Us'
    },
    component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__.ContactUsComponent
  }, {
    path: 'additional-services',
    data: {
      breadcrumb: 'Additional Services'
    },
    component: _components_additional_services_additional_services_component__WEBPACK_IMPORTED_MODULE_4__.AdditionalServicesComponent
  }, {
    path: 'faq',
    data: {
      breadcrumb: 'FAQ'
    },
    component: _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__.FaqComponent
  }, {
    path: 'customer-exerience',
    data: {
      breadcrumb: 'Customer Experience'
    },
    component: _components_customer_experience_customer_experience_component__WEBPACK_IMPORTED_MODULE_6__.CustomerExperienceComponent
  }, {
    path: 'security-regulations',
    data: {
      breadcrumb: 'Security Regulation'
    },
    component: _components_security_regulations_security_regulations_component__WEBPACK_IMPORTED_MODULE_7__.SecurityRegulationsComponent
  }, {
    path: 'useful-links',
    data: {
      breadcrumb: 'Useful Links'
    },
    component: _components_useful_links_useful_links_component__WEBPACK_IMPORTED_MODULE_8__.UsefulLinksComponent
  }, {
    path: 'dashboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_dashboards_dashboards_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/dashboards/dashboards.module */ 82887)).then(m => m.DashboardsModule)
  }, {
    path: 'uikit',
    data: {
      breadcrumb: 'UI Kit'
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_uikit_uikit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/uikit/uikit.module */ 83250)).then(m => m.UIkitModule)
  }, {
    path: 'utilities',
    data: {
      breadcrumb: 'Utilities'
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_utilities_utilities_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/utilities/utilities.module */ 91178)).then(m => m.UtilitiesModule)
  }, {
    path: 'pages',
    data: {
      breadcrumb: 'Pages'
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/pages/pages.module */ 4586)).then(m => m.PagesModule)
  }, {
    path: 'profile',
    data: {
      breadcrumb: 'User Management'
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/profile/profile.module */ 82670)).then(m => m.ProfileModule)
  }, {
    path: 'documentation',
    data: {
      breadcrumb: 'Documentation'
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_documentation_documentation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/documentation/documentation.module */ 73482)).then(m => m.DocumentationModule)
  }, {
    path: 'blocks',
    data: {
      breadcrumb: 'Prime Blocks'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-password_mjs"), __webpack_require__.e("src_app_demo_components_primeblocks_primeblocks_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/primeblocks/primeblocks.module */ 7232)).then(m => m.PrimeBlocksModule)
  }, {
    path: 'ecommerce',
    data: {
      breadcrumb: 'E-Commerce'
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_ecommerce_ecommerce_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/ecommerce/ecommerce.module */ 10414)).then(m => m.EcommerceModule)
  }, {
    path: 'apps',
    data: {
      breadcrumb: 'Apps'
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_apps_apps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/apps/apps.module */ 44953)).then(m => m.AppsModule)
  }]
}, {
  path: 'auth',
  data: {
    breadcrumb: 'Auth'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/auth/auth.module */ 66205)).then(m => m.AuthModule)
}, {
  path: 'landing',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/landing/landing.module */ 96010)).then(m => m.LandingModule)
}, {
  path: 'notfound',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_notfound_notfound_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/notfound/notfound.module */ 32076)).then(m => m.NotfoundModule)
}, {
  path: '**',
  redirectTo: '/notfound'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);



class AppComponent {
  constructor(primengConfig) {
    this.primengConfig = primengConfig;
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app.layout.module */ 84295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.HashLocationStrategy
    }],
    imports: [_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__.AppLayoutModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__.AppLayoutModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 38349:
/*!*********************************************************************************!*\
  !*** ./src/app/components/additional-services/additional-services.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalServicesComponent: () => (/* binding */ AdditionalServicesComponent)
/* harmony export */ });
/* harmony import */ var _visa_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visa-type/utils */ 64431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);






const _c0 = a0 => ({
  active: a0
});
function AdditionalServicesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdditionalServicesComponent_div_4_Template_div_click_0_listener() {
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
class AdditionalServicesComponent {
  constructor(homePageDataService) {
    this.homePageDataService = homePageDataService;
  }
  ngOnInit() {
    this.fetchPageData('additional-services');
  }
  fetchPageData(slug) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: response => {
        this.pageData = response.data[0].attributes;
        this.tabs = this.pageData.blocks;
        // this.destructureDataFromPageData();
        console.log('Data fetched successfully', this.pageData, this.tabs);
        this.handleTabChange(0);
      },
      error: err => {
        this.error = err;
        console.log('Error fetching', err);
      }
    });
  }
  handleTabChange(i) {
    this.currentTab = this.tabs[i];
    console.log('currentTab', this.currentTab);
    this.currentContent = (0,_visa_type_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(this.currentTab.content);
  }
  static #_ = this.ɵfac = function AdditionalServicesComponent_Factory(t) {
    return new (t || AdditionalServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AdditionalServicesComponent,
    selectors: [["app-additional-services"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 4,
    consts: [[1, "visa-type-container"], [1, "options-container"], ["class", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-container"], [3, "innerHtml"], [1, "option", 3, "ngClass", "click"]],
    template: function AdditionalServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdditionalServicesComponent_div_4_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageData == null ? null : ctx.pageData.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentTab == null ? null : ctx.currentTab.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.currentContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
    styles: [".visa-type-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n  width: 18%;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    overflow-x: auto;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 1rem;\n  cursor: pointer;\n  border-radius: 8px;\n  flex: 0 0 auto;\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: var(--blue-100);\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0 1rem 1rem 0;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZGRpdGlvbmFsLXNlcnZpY2VzL2FkZGl0aW9uYWwtc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFKRjtJQUtJLHNCQUFBO0VBRUY7QUFDRjtBQUFFO0VBQ0UsVUFBQTtBQUVKO0FBQUk7RUFIRjtJQUlJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0VBR0o7QUFDRjtBQURJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHTjtBQUFJO0VBQ0UsMkJBQUE7QUFFTjtBQUVFO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFSTtFQUpGO0lBS0ksV0FBQTtFQUNKO0FBQ0Y7QUFDSTtFQUNFLGVBQUE7QUFDTiIsInNvdXJjZXNDb250ZW50IjpbIi52aXNhLXR5cGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAub3B0aW9ucy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxOCU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuXG4gICAgLm9wdGlvbiB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLTEwMCk7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtIDA7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250ZW50LWltYWdlIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 14876:
/*!*********************************************************************************!*\
  !*** ./src/app/components/attestation-service/attestation-service.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttestationServiceComponent: () => (/* binding */ AttestationServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _visa_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visa-type/utils */ 64431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);







const _c0 = a0 => ({
  active: a0
});
function AttestationServiceComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AttestationServiceComponent_div_6_Template_div_click_0_listener() {
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
class AttestationServiceComponent {
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
    this.attestationId = urlParams[urlParams.length - 1];
    this.fetchAttestationService();
  }
  onRouteChange() {
    this.attestationId = this.router.url.split('/')[this.router.url.split('/').length - 1];
    this.fetchAttestationService();
  }
  fetchAttestationService() {
    this.homePageDataService.getAttestationService(this.attestationId).subscribe({
      next: response => {
        this.attestationService = response.data[0].attributes;
        console.log('data', this.attestationService);
        this.handleTabChange(0);
      },
      error: err => {
        console.log('error fetching', err);
      }
    });
  }
  handleTabChange(i) {
    this.currentTab = this.attestationService.tabs[i];
    console.log('currentTab', this.currentTab);
    this.currentContent = (0,_visa_type_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(this.currentTab.content_eoi);
  }
  static #_ = this.ɵfac = function AttestationServiceComponent_Factory(t) {
    return new (t || AttestationServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AttestationServiceComponent,
    selectors: [["app-attestation-service"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "wrapper", "pb-4"], [1, "p-1", "main-heading"], [1, "visa-type-container"], [1, "options-container", "card", "mb-0", "p-3"], ["class", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-container", "card"], [1, "section-heading"], [3, "innerHtml"], [1, "option", 3, "ngClass", "click"]],
    template: function AttestationServiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AttestationServiceComponent_div_6_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.attestationService == null ? null : ctx.attestationService.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.attestationService == null ? null : ctx.attestationService.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentTab == null ? null : ctx.currentTab.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.currentContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    styles: [".visa-type-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    overflow-x: auto;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 1rem;\n  cursor: pointer;\n  border-radius: 8px;\n  flex: 0 0 auto;\n}\n.visa-type-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: var(--blue-100);\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  width: 78%;\n  min-height: 40rem;\n}\n@media (max-width: 500px) {\n  .visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.visa-type-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdHRlc3RhdGlvbi1zZXJ2aWNlL2F0dGVzdGF0aW9uLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFKRjtJQUtJLHNCQUFBO0VBRUY7QUFDRjtBQUFFO0VBRUUsaUJBQUE7QUFDSjtBQUNJO0VBSkY7SUFLSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtFQUVKO0FBQ0Y7QUFBSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRU47QUFDSTtFQUNFLDJCQUFBO0FBQ047QUFHRTtFQUNFLFVBQUE7RUFFQSxpQkFBQTtBQUZKO0FBSUk7RUFMRjtJQU1JLFdBQUE7RUFESjtBQUNGO0FBR0k7RUFDRSxlQUFBO0FBRE4iLCJzb3VyY2VzQ29udGVudCI6WyIudmlzYS10eXBlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm9wdGlvbnMtY29udGFpbmVyIHtcbiAgICAvLyB3aWR0aDogMjIlO1xuICAgIG1pbi1oZWlnaHQ6IDIwcmVtO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cblxuICAgIC5vcHRpb24ge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIH1cblxuICAgIC5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS0xMDApO1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc4JTtcbiAgICAvLyBwYWRkaW5nOiAxcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDQwcmVtO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udGVudC1pbWFnZSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8112:
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsComponent: () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _visa_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visa-type/utils */ 64431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);







const _c0 = a0 => ({
  active: a0
});
function ContactUsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactUsComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.handleCenterChange(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const center_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, center_r2 === ctx_r0.selectedCenter));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", center_r2.attributes.title, " ");
  }
}
function ContactUsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "iframe", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.mapEmbedLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
  }
}
class ContactUsComponent {
  constructor(homePageDataService, sanitizer) {
    this.homePageDataService = homePageDataService;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.fetchCenters();
  }
  fetchCenters() {
    this.homePageDataService.getCentersWithHolidays().subscribe({
      next: response => {
        this.centers = response.data;
        this.selectedCenter = this.centers[0];
        console.log('error fetching', this.centers[2].attributes.content);
        this.renderMapLink();
      },
      error: err => {
        console.log('error fetching', err);
      }
    });
  }
  renderMapLink() {
    if (!this.selectedCenter.attributes.embed_map_link) {
      this.mapEmbedLink = '';
      return;
    }
    this.mapEmbedLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedCenter.attributes.embed_map_link);
  }
  handleCenterChange(i) {
    this.selectedCenter = this.centers[i];
    this.address = (0,_visa_type_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(this.selectedCenter.attributes.address);
    this.content = (0,_visa_type_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(this.selectedCenter.attributes.content);
    this.renderMapLink();
  }
  static #_ = this.ɵfac = function ContactUsComponent_Factory(t) {
    return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__.HomepageDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContactUsComponent,
    selectors: [["app-contact-us"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 6,
    consts: [[1, "card", "wrapper"], [1, ""], [1, "left-container"], [1, "options-container"], ["class", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-container"], [1, "address-container", 3, "innerHTML"], [1, "mt-3"], [1, "mt-3", 3, "innerHTML"], ["class", "mt-3", 4, "ngIf"], [1, "option", 3, "ngClass", "click"], ["width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0", 3, "src"]],
    template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ContactUsComponent_div_6_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7)(15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Telephone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ContactUsComponent_div_20_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.centers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedCenter == null ? null : ctx.selectedCenter.attributes.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.address, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedCenter == null ? null : ctx.selectedCenter.attributes == null ? null : ctx.selectedCenter.attributes.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mapEmbedLink);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
    styles: [".left-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n.left-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n  width: 18%;\n}\n@media (max-width: 500px) {\n  .left-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    overflow-x: auto;\n  }\n}\n.left-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 1rem;\n  cursor: pointer;\n  border-radius: 8px;\n  flex: 0 0 auto;\n}\n.left-container[_ngcontent-%COMP%]   .options-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: var(--blue-100);\n}\n.left-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0FBQ0o7QUFDSTtFQUhGO0lBSUksV0FBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUFFSjtBQUNGO0FBQUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQ0k7RUFDRSwyQkFBQTtBQUNOO0FBR0U7RUFDRSxVQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG5cbiAgLm9wdGlvbnMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTglO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cblxuICAgIC5vcHRpb24ge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIH1cblxuICAgIC5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS0xMDApO1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 59989:
/*!*********************************************************************************!*\
  !*** ./src/app/components/customer-experience/customer-experience.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerExperienceComponent: () => (/* binding */ CustomerExperienceComponent)
/* harmony export */ });
/* harmony import */ var _visa_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visa-type/utils */ 64431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);





const _c0 = (a0, a1) => ({
  "bg-primary": a0,
  "hover:surface-hover": a1
});
function CustomerExperienceComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerExperienceComponent_li_9_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.changeItem(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 11)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r0.activeIndex === i_r2, ctx_r0.activeIndex !== i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.title);
  }
}
const _c1 = a0 => ({
  "mb-3": a0
});
class CustomerExperienceComponent {
  constructor(homePageDataService) {
    this.homePageDataService = homePageDataService;
    this.items = [];
    this.activeIndex = 0;
  }
  ngOnInit() {
    this.fetchPageData('customer-experience');
  }
  fetchPageData(slug) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: response => {
        this.pageData = response.data[0].attributes;
        this.items = this.pageData.blocks;
        console.log('Data fetched successfully', this.pageData);
      },
      error: err => {
        this.error = err;
        console.log('Error fetching', err);
      }
    });
  }
  loadAnswer(answer) {
    return (0,_visa_type_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(answer);
  }
  changeItem(i) {
    this.activeIndex = i;
  }
  static #_ = this.ɵfac = function CustomerExperienceComponent_Factory(t) {
    return new (t || CustomerExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CustomerExperienceComponent,
    selectors: [["app-customer-experience"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 8,
    consts: [[1, "card"], [1, "text-900", "font-bold", "text-xl", 3, "ngClass"], [1, "text-600", "line-height-3"], [1, "flex", "flex-column", "md:flex-row", "gap-5"], [1, "card", "mb-0", "md:w-20rem"], [1, "list-none", "m-0", "p-0"], ["pRipple", "", "class", "mb-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "flex-1"], [1, "text-900", "font-bold", "text-xl", "mb-3"], [1, "line-height-3", "m-0", "p-0", 3, "innerHTML"], ["pRipple", "", 1, "mb-2", 3, "click"], [1, "flex", "align-items-center", "cursor-pointer", "select-none", "p-3", "transition-colors", "transition-duration-150", "border-round", 3, "ngClass"]],
    template: function CustomerExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CustomerExperienceComponent_li_9_Template, 4, 5, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx.pageData == null ? null : ctx.pageData.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.pageData == null ? null : ctx.pageData.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageData == null ? null : ctx.pageData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.items[ctx.activeIndex] == null ? null : ctx.items[ctx.activeIndex].title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.loadAnswer(ctx.items[ctx.activeIndex] == null ? null : ctx.items[ctx.activeIndex].content), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 46050:
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _visa_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visa-type/utils */ 64431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/accordion */ 93295);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 51339);






const _c0 = (a0, a1) => ({
  "bg-primary": a0,
  "hover:surface-hover": a1
});
function FaqComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FaqComponent_li_11_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.changeItem(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 11)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r0.activeIndex === i_r3, ctx_r0.activeIndex !== i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.title);
  }
}
function FaqComponent_p_accordionTab_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-accordionTab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", faq_r6.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r1.loadAnswer(faq_r6.answer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
class FaqComponent {
  constructor(homePageDataService) {
    this.homePageDataService = homePageDataService;
    this.items = [];
    this.activeIndex = 0;
  }
  ngOnInit() {
    this.fetchPageData('faq');
  }
  fetchPageData(slug) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: response => {
        this.pageData = response.data[0].attributes;
        this.items = this.pageData.blocks;
        // this.destructureDataFromPageData();
        console.log('Data fetched successfully', this.pageData);
      },
      error: err => {
        this.error = err;
        console.log('Error fetching', err);
      }
    });
  }
  loadAnswer(answer) {
    return (0,_visa_type_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(answer);
  }
  changeItem(i) {
    this.activeIndex = i;
  }
  static #_ = this.ɵfac = function FaqComponent_Factory(t) {
    return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FaqComponent,
    selectors: [["ng-component"]],
    decls: 15,
    vars: 4,
    consts: [[1, "card"], [1, "text-900", "font-bold", "text-xl", "mb-3"], [1, "text-600", "line-height-3"], [1, "flex", "flex-column", "md:flex-row", "gap-5"], [1, "card", "mb-0", "md:w-20rem"], [1, "text-900", "block", "font-bold", "mb-3"], [1, "list-none", "m-0", "p-0"], ["pRipple", "", "class", "mb-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "flex-1"], [3, "header", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "mb-2", 3, "click"], [1, "flex", "align-items-center", "cursor-pointer", "select-none", "p-3", "transition-colors", "transition-duration-150", "border-round", 3, "ngClass"], [3, "header"], [1, "line-height-3", "m-0", "p-0", 3, "innerHTML"]],
    template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FaqComponent_li_11_Template, 4, 5, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "p-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FaqComponent_p_accordionTab_14_Template, 2, 2, "p-accordionTab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageData.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items[ctx.activeIndex].faq);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, primeng_accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionTab, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple],
    encapsulation: 2
  });
}

/***/ }),

/***/ 50159:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/divider */ 10920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/carousel */ 11720);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chip */ 23500);
/* harmony import */ var _useful_links_useful_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useful-links/useful-links.component */ 20123);
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.development */ 45516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _homepage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage-data.service */ 73631);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 98026);

















function HomeComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", product_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", product_r5.image.data.attributes.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", product_r5.name);
  }
}
const _c0 = a1 => ["/news/article", a1];
function HomeComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-chip", 52)(5, "p-chip", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const article_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, article_r6.attributes.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](article_r6.attributes.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", article_r6.attributes.departure_country);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", article_r6.attributes.date);
  }
}
const _c1 = a1 => ["/visa/visa-types", a1];
function HomeComponent_a_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const visa_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, visa_r8.attributes.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", visa_r8.attributes.title, " ");
  }
}
function HomeComponent_a_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", image_r10.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", image_r10.media.data.attributes.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "blockquote", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 58)(5, "cite");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r11.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r11.reviewer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r11.country);
  }
}
const _c2 = () => ({
  color: "#000"
});
const _c3 = () => ({
  color: "#017DD2"
});
class HomeComponent {
  constructor(homePageDataService) {
    this.homePageDataService = homePageDataService;
    this.environment = src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__.environment;
  }
  ngOnInit() {
    this.fetchPageData('home');
    this.fetchNewsArticles();
    this.fetchVisaTypes();
    // window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        this.txtType(elements[i], JSON.parse(toRotate), period);
      }
      // }
      // INJECT CSS
      var css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
      document.body.appendChild(css);
    }
  }
  txtType(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  }
  fetchPageData(slug) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: response => {
        this.pageData = response.data[0].attributes;
        this.destructureDataFromPageData();
        console.log('Data fetched successfully', this.pageData);
      },
      error: err => {
        this.error = err;
        console.log('Error fetching', err);
      }
    });
  }
  fetchNewsArticles() {
    this.homePageDataService.getNewsArticles().subscribe({
      next: response => {
        this.newsArticles = response.data;
      },
      error: err => {
        this.error = err;
        console.log('Error fetching', err);
      }
    });
  }
  fetchVisaTypes() {
    this.homePageDataService.getVisaTypes().subscribe({
      next: response => {
        this.visaTypes = response.data;
      },
      error: err => {
        this.error = err;
        console.log('Error fetching', err);
      }
    });
  }
  destructureDataFromPageData() {
    this.pageData.blocks.map(block => {
      switch (block.__component) {
        case 'blocks.slider':
          this.slides = block.slide;
          break;
        case 'blocks.media':
          this.videoMedia = block.content.filter(x => x.media_type === 'Video');
          this.imageMedia = block.content.filter(x => x.media_type === 'Image');
          break;
        case 'blocks.testimonials':
          this.testimonials = block.review;
          break;
        default:
          break;
      }
    });
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_homepage_data_service__WEBPACK_IMPORTED_MODULE_2__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 84,
    vars: 20,
    consts: [[1, "hero-section"], [1, "main"], ["href", "", "data-period", "2000", "data-type", "[ \"Passport Services.\", \"Visa Services.\", \" OCI Services.\", \"Attestation Services.\" , \"Consular Services\"]", 1, "typewrite", "roller"], [1, "wrap"], [1, "hero-description"], [1, "primary-btn", "mt-3"], ["src", "assets/demo/images/hero-bg.png", "alt", "", 1, "banner-bg-img"], ["src", "assets/demo/images/hero-bg.png", "alt", "", 1, "banner-bg-img2"], [1, "process-container", "wrapper"], [1, "section-heading", "pl-5"], [1, "process-subcontainer"], [1, "container"], [1, "container__sources", "process-block"], [1, "mb-0"], ["viewbox", "0 0 10 100"], ["x1", "5", "x2", "5", "y1", "0", "y2", "100"], [1, "container__build", "process-block"], ["viewbox", "0 0 10 100 "], [1, "container__deploy", "process-block"], ["src", "assets/demo/images/exploring_scrolling_animation.gif", 1, "gif-element"], [1, "mt-2", "banner-carousel"], [3, "value", "numVisible", "numScroll", "circular", "autoplayInterval"], ["pTemplate", "item"], [1, "performance-container"], [1, "main-heading", "wrapper"], [1, "performance-subcontainer", "wrapper"], [1, "number-element"], [1, "number-subtitle"], [1, "news-visa-container", "wrapper"], [1, "subcontainer"], [1, ""], ["class", "news-card mb-3", 4, "ngFor", "ngForOf"], ["label", "More News", 3, "routerLink"], [1, "flex", "flex-wrap", "gap-2"], ["class", "visa-types text-xl", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "media-container", "wrapper"], [1, "video-container"], ["controls", ""], ["type", "video/mp4", 3, "src"], [1, "image-container"], [3, "href", 4, "ngFor", "ngForOf"], [1, "banner-carousel", "wrapper"], ["styleClass", "mb-3", 3, "value", "numVisible", "numScroll", "circular"], [1, "useful-links-container"], [1, "border-1", "surface-border", "border-round", "m-2", "p-3"], [1, "mb-3"], [1, "relative", "mx-auto"], [3, "href"], [1, "w-full", "border-round", 3, "src", "alt"], [1, "news-card", "mb-3"], [1, "text-xl", 3, "routerLink"], [1, "mt-2", "flex", "gap-2", "align-items-center"], [3, "label"], ["icon", "pi pi-calendar", 3, "label"], [1, "visa-types", "text-xl", 3, "routerLink"], ["alt", "", 3, "src"], [1, "card", "m-2", "testimonial-card"], [1, "relative", "flex", "content"], [1, "mt-auto"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Experience Seamless ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Your gateway to seamless passport, visa, attestation, and OCI services, ensuring efficiency and peace of mind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Book Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 6)(11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "section", 11)(17, "div", 12)(18, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Choose Service Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16)(23, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Book Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 18)(28, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Visit Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 20)(33, "p-carousel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, HomeComponent_ng_template_34_Template, 5, 3, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 23)(36, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Since 2001, we have processed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "287,380,263");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 25)(44, "div")(45, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "3415");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Application Centres");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div")(50, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "151");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Countries of Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div")(55, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "67");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Client Governments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 28)(60, "div", 29)(61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "News and Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, HomeComponent_div_64_Template, 6, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "p-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 29)(67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Which type of Visa are you searching for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, HomeComponent_a_70_Template, 2, 4, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 35)(72, "div", 36)(73, "video", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "source", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, HomeComponent_a_77_Template, 2, 2, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "p-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 41)(80, "p-carousel", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, HomeComponent_ng_template_81_Template, 9, 3, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "app-useful-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.slides)("numVisible", 1)("numScroll", 1)("circular", true)("autoplayInterval", 5000);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.newsArticles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/news/articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.visaTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.videoMedia == null ? null : ctx.videoMedia[0].media.data.attributes.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.imageMedia);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.testimonials)("numVisible", 3)("numScroll", 1)("circular", true);
      }
    },
    dependencies: [primeng_divider__WEBPACK_IMPORTED_MODULE_4__.DividerModule, primeng_divider__WEBPACK_IMPORTED_MODULE_4__.Divider, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_carousel__WEBPACK_IMPORTED_MODULE_10__.CarouselModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_10__.Carousel, primeng_chip__WEBPACK_IMPORTED_MODULE_11__.ChipModule, primeng_chip__WEBPACK_IMPORTED_MODULE_11__.Chip, _useful_links_useful_links_component__WEBPACK_IMPORTED_MODULE_0__.UsefulLinksComponent],
    styles: [".hero-section[_ngcontent-%COMP%] {\n  height: calc(100vh - 5rem);\n  width: 99.6vw;\n  background: linear-gradient(178deg, rgb(0, 70, 191) 13%, rgb(108, 148, 218) 99%);\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  font-family: \"Poppins-800\";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n  color: #f1faee;\n  font-size: 4rem;\n}\n.hero-section[_ngcontent-%COMP%]   .roller[_ngcontent-%COMP%] {\n  height: 4.125rem;\n  line-height: 4rem;\n  position: relative;\n  overflow: hidden;\n  width: 99vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #feef22;\n}\n.hero-section[_ngcontent-%COMP%]   #spare-time[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-style: italic;\n  letter-spacing: 1rem;\n  margin-top: 0;\n  color: #a8dadc;\n}\n.hero-section[_ngcontent-%COMP%]   .roller[_ngcontent-%COMP%]   #rolltext[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  animation: _ngcontent-%COMP%_slide 10s infinite;\n  animation-delay: 2s;\n}\n@keyframes _ngcontent-%COMP%_slide {\n  0% {\n    top: 0;\n  }\n  25% {\n    top: -4rem;\n  }\n  50% {\n    top: -8rem;\n  }\n  72.5% {\n    top: -12.25rem;\n  }\n  90% {\n    top: -16rem;\n  }\n}\n@media screen and (max-width: 600px) {\n  .hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n    text-transform: uppercase;\n    color: #f1faee;\n    font-size: 2.125rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .roller[_ngcontent-%COMP%] {\n    height: 2.6rem;\n    line-height: 2.125rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   #spare-time[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    letter-spacing: 0.1rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .roller[_ngcontent-%COMP%]   #rolltext[_ngcontent-%COMP%] {\n    animation: slide-mob 5s infinite;\n  }\n  @keyframes slide-mob {\n    0% {\n      top: 0;\n    }\n    25% {\n      top: -2.125rem;\n    }\n    50% {\n      top: -4.25rem;\n    }\n    72.5% {\n      top: -6.375rem;\n    }\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  font-family: \"Karla-400\";\n}\n.hero-section[_ngcontent-%COMP%]   .banner-bg-img[_ngcontent-%COMP%] {\n  width: 80%;\n  position: absolute;\n  bottom: -80px;\n  left: -30px;\n  filter: grayscale(1);\n}\n.hero-section[_ngcontent-%COMP%]   .banner-bg-img2[_ngcontent-%COMP%] {\n  width: 80%;\n  position: absolute;\n  bottom: -80px;\n  left: 78%;\n  filter: grayscale(1);\n}\n\n.process-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.process-container[_ngcontent-%COMP%]   .process-subcontainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.process-container[_ngcontent-%COMP%]   .process-subcontainer[_ngcontent-%COMP%]   .gif-element[_ngcontent-%COMP%] {\n  border-radius: 14px;\n}\n.process-container[_ngcontent-%COMP%]   .gif-container[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.process-container[_ngcontent-%COMP%]   .process-block[_ngcontent-%COMP%] {\n  background: #feef22;\n  width: 12rem;\n  height: 12rem;\n  border-radius: 10rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.process-container[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%], .process-container[_ngcontent-%COMP%]   .container__sources[_ngcontent-%COMP%]:before, .process-container[_ngcontent-%COMP%]   .container__build[_ngcontent-%COMP%]:before, .process-container[_ngcontent-%COMP%]   .container__deploy[_ngcontent-%COMP%]:before {\n  position: absolute;\n  right: 0;\n  bottom: 100%;\n  color: #fff;\n  background: #ffb238;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 2.5px;\n}\n.process-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .process-container[_ngcontent-%COMP%]   .container__sources[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .process-container[_ngcontent-%COMP%]   .container__build[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  line-height: 2;\n  background: #fff;\n  padding: 1.2rem 1rem;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px #e6e6e6;\n}\n.process-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 30%;\n  background: #fff;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.process-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 4rem;\n  width: 1rem;\n}\n.process-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #5f39dd;\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-dasharray: 2px 20px;\n  animation: _ngcontent-%COMP%_animateline 5s linear both infinite;\n}\n.process-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 300;\n}\n.process-container[_ngcontent-%COMP%]   .container__sources[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 0 1rem;\n}\n.process-container[_ngcontent-%COMP%]   .container__build[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.process-container[_ngcontent-%COMP%]   .container__build[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: auto;\n  fill: #5f39dd;\n}\n@media (max-width: 700px) {\n  .process-container[_ngcontent-%COMP%]   .container__sources[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .process-container[_ngcontent-%COMP%]   .container__sources[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_animateline {\n  from {\n    stroke-dashoffset: 0;\n  }\n  to {\n    stroke-dashoffset: -5rem;\n  }\n}\n\n.news-visa-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5rem;\n  padding: 3rem 2rem;\n}\n.news-visa-container[_ngcontent-%COMP%]   .subcontainer[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.news-visa-container[_ngcontent-%COMP%]   .subcontainer[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%] {\n  border: 1px solid #cecece;\n  border-radius: 14px;\n  padding: 1rem;\n}\n.news-visa-container[_ngcontent-%COMP%]   .subcontainer[_ngcontent-%COMP%]   .visa-types[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 10rem;\n  color: #000;\n  background: var(--blue-100);\n}\n.news-visa-container[_ngcontent-%COMP%]   .subcontainer[_ngcontent-%COMP%]   .visa-types[_ngcontent-%COMP%]:hover {\n  background: var(--blue-200);\n}\n\n.testimonial-card[_ngcontent-%COMP%] {\n  height: 97%;\n}\n.testimonial-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100% !important;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.media-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.media-container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.media-container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]    > video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.media-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.media-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.media-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.performance-container[_ngcontent-%COMP%] {\n  padding: 3rem 2rem 2rem;\n  margin-top: 2rem;\n  background: #feef22;\n}\n.performance-container[_ngcontent-%COMP%]   .performance-subcontainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 2rem;\n  padding-bottom: 2rem;\n}\n.performance-container[_ngcontent-%COMP%]   .number-element[_ngcontent-%COMP%] {\n  font-family: \"Poppins-800\";\n  color: #017dd2;\n  margin-bottom: 0;\n}\n.performance-container[_ngcontent-%COMP%]   .number-subtitle[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: \"Poppins-500\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtFQUtBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFTRTtFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVJKO0FBV0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7QUFWSjtBQWFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVhKO0FBY0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBWko7QUFlRTtFQUNFO0lBQ0UsTUFBQTtFQWJKO0VBZUU7SUFDRSxVQUFBO0VBYko7RUFlRTtJQUNFLFVBQUE7RUFiSjtFQWVFO0lBQ0UsY0FBQTtFQWJKO0VBZUU7SUFDRSxXQUFBO0VBYko7QUFDRjtBQWdCRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQWRKO0VBaUJFO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0VBZko7RUFrQkU7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUFoQko7RUFtQkU7SUFDRSxnQ0FBQTtFQWpCSjtFQW9CRTtJQUNFO01BQ0UsTUFBQTtJQWxCSjtJQW9CRTtNQUNFLGNBQUE7SUFsQko7SUFvQkU7TUFDRSxhQUFBO0lBbEJKO0lBb0JFO01BQ0UsY0FBQTtJQWxCSjtFQUNGO0FBQ0Y7QUFxQkU7RUFDRSx3QkFBQTtBQW5CSjtBQXNCRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFwQko7QUF1QkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBckJKOztBQXlCQTtFQUNFLGFBQUE7QUF0QkY7QUF3QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBdEJKO0FBd0JJO0VBQ0UsbUJBQUE7QUF0Qk47QUEwQkU7RUFDRSxVQUFBO0FBeEJKO0FBMkJFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBekJKO0FBNEJFOzs7O0VBSUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBMUJKO0FBNEJFOzs7RUFHRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUExQko7QUE2QkU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEzQko7QUE2QkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQTNCSjtBQTZCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4Q0FBQTtBQTNCSjtBQThCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUE1Qko7QUFzQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFwQ0o7QUE0Q0U7RUFDRSxjQUFBO0FBMUNKO0FBNENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBMUNKO0FBbURFO0VBQ0U7SUFDRSxzQkFBQTtFQWpESjtFQW1ERTtJQUNFLGNBQUE7RUFqREo7QUFDRjtBQTJFRTtFQUNFO0lBQ0Usb0JBQUE7RUFqREo7RUFtREU7SUFDRSx3QkFBQTtFQWpESjtBQUNGOztBQXFEQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFsREY7QUFvREU7RUFDRSxVQUFBO0FBbERKO0FBb0RJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFsRE47QUFxREk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBbkROO0FBcURNO0VBQ0UsMkJBQUE7QUFuRFI7O0FBeURBO0VBQ0UsV0FBQTtBQXRERjtBQXdERTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUF0REo7O0FBMERBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUF2REY7QUF5REU7RUFDRSxVQUFBO0FBdkRKO0FBeURJO0VBQ0UsV0FBQTtBQXZETjtBQTJERTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUF6REo7QUEyREk7RUFDRSxVQUFBO0FBekROO0FBMkRNO0VBQ0UsV0FBQTtBQXpEUjs7QUErREE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE1REY7QUE4REU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUE1REo7QUErREU7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTdESjtBQWdFRTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQTlESiIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLXNlY3Rpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1cmVtKTtcbiAgd2lkdGg6IDk5LjZ2dztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE3OGRlZyxcbiAgICByZ2JhKDAsIDcwLCAxOTEsIDEpIDEzJSxcbiAgICByZ2JhKDEwOCwgMTQ4LCAyMTgsIDEpIDk5JVxuICApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2RlbW8vaW1hZ2VzL2hlcm8tYmcucG5nXCIpO1xuXG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLTgwMFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAvLyBiYWNrZ3JvdW5kOiAjMjgyYzM0O1xuICAvLyBhbmltYXRpb24gY3NzIGNvZGVcbiAgLm1haW4ge1xuICAgIC8vIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2YxZmFlZTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cblxuICAucm9sbGVyIHtcbiAgICBoZWlnaHQ6IDQuMTI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA5OXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGNvbG9yOiAjZmVlZjIyO1xuICB9XG5cbiAgI3NwYXJlLXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogI2E4ZGFkYztcbiAgfVxuXG4gIC5yb2xsZXIgI3JvbGx0ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUgMTBzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0b3A6IC00cmVtO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdG9wOiAtOHJlbTtcbiAgICB9XG4gICAgNzIuNSUge1xuICAgICAgdG9wOiAtMTIuMjVyZW07XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICB0b3A6IC0xNnJlbTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGgxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogI2YxZmFlZTtcbiAgICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gICAgfVxuXG4gICAgLnJvbGxlciB7XG4gICAgICBoZWlnaHQ6IDIuNnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjEyNXJlbTtcbiAgICB9XG5cbiAgICAjc3BhcmUtdGltZSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIH1cblxuICAgIC5yb2xsZXIgI3JvbGx0ZXh0IHtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtbW9iIDVzIGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGUtbW9iIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgMjUlIHtcbiAgICAgICAgdG9wOiAtMi4xMjVyZW07XG4gICAgICB9XG4gICAgICA1MCUge1xuICAgICAgICB0b3A6IC00LjI1cmVtO1xuICAgICAgfVxuICAgICAgNzIuNSUge1xuICAgICAgICB0b3A6IC02LjM3NXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaGVyby1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiS2FybGEtNDAwXCI7XG4gIH1cblxuICAuYmFubmVyLWJnLWltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtODBweDtcbiAgICBsZWZ0OiAtMzBweDtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgfVxuXG4gIC5iYW5uZXItYmctaW1nMiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtODBweDtcbiAgICBsZWZ0OiA3OCU7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gIH1cbn1cblxuLnByb2Nlc3MtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcblxuICAucHJvY2Vzcy1zdWJjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG5cbiAgICAuZ2lmLWVsZW1lbnQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICB9XG4gIH1cblxuICAuZ2lmLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5wcm9jZXNzLWJsb2NrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmVlZjIyO1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBoZWlnaHQ6IDEycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLnRvb2x0aXAsXG4gIC5jb250YWluZXJfX3NvdXJjZXM6YmVmb3JlLFxuICAuY29udGFpbmVyX19idWlsZDpiZWZvcmUsXG4gIC5jb250YWluZXJfX2RlcGxveTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI2ZmYjIzODtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyLjVweDtcbiAgfVxuICAuY2FyZCxcbiAgLmNvbnRhaW5lcl9fc291cmNlcyBkaXYsXG4gIC5jb250YWluZXJfX2J1aWxkIGRpdiB7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxLjJyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCAjZTZlNmU2O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciBzdmcge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogMXJlbTtcbiAgfVxuICAuY29udGFpbmVyIHN2ZyBsaW5lIHtcbiAgICBzdHJva2U6ICM1ZjM5ZGQ7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDJweCAyMHB4O1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZWxpbmUgNXMgbGluZWFyIGJvdGggaW5maW5pdGU7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICAvLyAuY29udGFpbmVyX19zb3VyY2VzIHtcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLy8gICBwYWRkaW5nOiAxLjVyZW07XG4gIC8vICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIH1cblxuICAuY29udGFpbmVyX19zb3VyY2VzIGRpdiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgfVxuICAvLyAuY29udGFpbmVyX19idWlsZCB7XG4gIC8vICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvLyAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyB9XG5cbiAgLmNvbnRhaW5lcl9fYnVpbGQgZGl2IHtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgfVxuICAuY29udGFpbmVyX19idWlsZCBkaXYgc3ZnIHtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmlsbDogIzVmMzlkZDtcbiAgfVxuICAvLyAuY29udGFpbmVyX19kZXBsb3kge1xuICAvLyAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIC8vICAgcGFkZGluZzogMS41cmVtO1xuICAvLyAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuY29udGFpbmVyX19zb3VyY2VzIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5jb250YWluZXJfX3NvdXJjZXMgZGl2IHtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIH1cbiAgfVxuICBALW1vei1rZXlmcmFtZXMgYW5pbWF0ZWxpbmUge1xuICAgIGZyb20ge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtNXJlbTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVsaW5lIHtcbiAgICBmcm9tIHtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTVyZW07XG4gICAgfVxuICB9XG4gIEAtby1rZXlmcmFtZXMgYW5pbWF0ZWxpbmUge1xuICAgIGZyb20ge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtNXJlbTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBhbmltYXRlbGluZSB7XG4gICAgZnJvbSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC01cmVtO1xuICAgIH1cbiAgfVxufVxuXG4ubmV3cy12aXNhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXJlbTtcbiAgcGFkZGluZzogM3JlbSAycmVtO1xuXG4gIC5zdWJjb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICAubmV3cy1jYXJkIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAudmlzYS10eXBlcyB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLTEwMCk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLTIwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50ZXN0aW1vbmlhbC1jYXJkIHtcbiAgaGVpZ2h0OiA5NyU7XG5cbiAgLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4ubWVkaWEtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC52aWRlby1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICA+IHZpZGVvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgPiBhIHtcbiAgICAgIHdpZHRoOiA0OCU7XG5cbiAgICAgID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wZXJmb3JtYW5jZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAzcmVtIDJyZW0gMnJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogI2ZlZWYyMjtcblxuICAucGVyZm9ybWFuY2Utc3ViY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5udW1iZXItZWxlbWVudCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy04MDBcIjtcbiAgICBjb2xvcjogIzAxN2RkMjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLm51bWJlci1zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy01MDBcIjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 73631:
/*!**********************************************************!*\
  !*** ./src/app/components/home/homepage-data.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageDataService: () => (/* binding */ HomepageDataService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.development */ 45516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class HomepageDataService {
  visaTypeApi(slug) {
    return `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl}/visa-types?filters[slug][$eq]=${slug}&populate[tabs][populate]=true&locale[0]=en`;
  }
  newsArticleApi(slug) {
    return `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl}/news-and-articles?filters[slug][$eq]=${slug}&populate[tabs][populate]=true&locale[0]=en`;
  }
  headerApi() {
    return `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl}/header-links?populate[items][populate]=*&locale[0]=en`;
  }
  passportServiceApi(slug) {
    return `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl}/passport-services?filters[slug][$eq]=${slug}&populate[tabs][populate]=true`;
  }
  attestationServiceApi(slug) {
    return `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl}/attestation-services?filters[slug][$eq]=${slug}&populate[tabs][populate]=true`;
  }
  constructor(http) {
    this.http = http;
    this.newsApiUrl = src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl + '/news-and-articles';
    this.visaTypesApiUrl = src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl + '/visa-types?populate[tabs][populate]=true';
    this.centersWithHolidaysApi = src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl + '/centers?populate[public_holidays_and_closures][populate]=true&locale[0]=en';
  }
  getHeaderData() {
    return this.http.get(this.headerApi());
  }
  getNewsArticles() {
    return this.http.get(this.newsApiUrl);
  }
  getVisaTypes() {
    return this.http.get(this.visaTypesApiUrl);
  }
  getVisaType(slug) {
    return this.http.get(this.visaTypeApi(slug));
  }
  getNewsArticle(slug) {
    return this.http.get(this.newsArticleApi(slug));
  }
  getCentersWithHolidays() {
    return this.http.get(this.centersWithHolidaysApi);
  }
  getPageData(slug) {
    return this.http.get(`${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.cmsApiUrl}/landing-pages?filters[slug]=${slug}`);
  }
  getPassportService(slug) {
    return this.http.get(this.passportServiceApi(slug));
  }
  getAttestationService(slug) {
    return this.http.get(this.attestationServiceApi(slug));
  }
  static #_ = this.ɵfac = function HomepageDataService_Factory(t) {
    return new (t || HomepageDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HomepageDataService,
    factory: HomepageDataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 19202:
/*!***********************************************************************!*\
  !*** ./src/app/components/public-holiday/public-holiday.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicHolidayComponent: () => (/* binding */ PublicHolidayComponent)
/* harmony export */ });
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 98026);











function PublicHolidayComponent_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Holiday");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function PublicHolidayComponent_div_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowData_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rowData_r3.attributes.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rowData_r3.attributes.day, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rowData_r3.attributes.holiday, " ");
  }
}
const _c0 = () => ({
  "min-width": "50rem"
});
function PublicHolidayComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "p-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PublicHolidayComponent_div_8_ng_template_2_Template, 7, 0, "ng-template", 8)(3, PublicHolidayComponent_div_8_ng_template_3_Template, 7, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r0.centers)("value", ctx_r0.currentHolidayList)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
  }
}
class PublicHolidayComponent {
  constructor(homePageDataService) {
    this.homePageDataService = homePageDataService;
  }
  ngOnInit() {
    this.fetchCentersAndHolidays();
  }
  fetchCentersAndHolidays() {
    this.homePageDataService.getCentersWithHolidays().subscribe({
      next: response => {
        this.centers = response.data;
        console.log('error fetching', this.centers);
      },
      error: err => {
        console.log('error fetching', err);
      }
    });
  }
  onChangeHandler() {
    this.currentHolidayList = this.centers.filter(center => center.attributes.title === this.selectedCenter.attributes.title)[0].attributes.public_holidays_and_closures.data;
  }
  static #_ = this.ɵfac = function PublicHolidayComponent_Factory(t) {
    return new (t || PublicHolidayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_0__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PublicHolidayComponent,
    selectors: [["app-public-holiday"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 4,
    consts: [[1, "wrapper"], [1, "card"], [1, ""], [1, "mt-3", "w-2"], ["placeholder", "Select Center", "optionLabel", "attributes.title", "styleClass", "w-full", 3, "options", "ngModel", "showClear", "ngModelChange", "onChange"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3"], [3, "columns", "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"]],
    template: function PublicHolidayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Public Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Russia Visa Application Centres will be closed for business on the following holidays in 2024: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "p-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PublicHolidayComponent_Template_p_dropdown_ngModelChange_7_listener($event) {
          return ctx.selectedCenter = $event;
        })("onChange", function PublicHolidayComponent_Template_p_dropdown_onChange_7_listener() {
          return ctx.onChangeHandler();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PublicHolidayComponent_div_8_Template, 4, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.centers)("ngModel", ctx.selectedCenter)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedCenter);
      }
    },
    dependencies: [primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 93839:
/*!***********************************************************************************!*\
  !*** ./src/app/components/security-regulations/security-regulations.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityRegulationsComponent: () => (/* binding */ SecurityRegulationsComponent)
/* harmony export */ });
/* harmony import */ var _visa_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visa-type/utils */ 64431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);



class SecurityRegulationsComponent {
  constructor(homePageDataService) {
    this.homePageDataService = homePageDataService;
  }
  ngOnInit() {
    this.fetchPageData('security-regulations');
  }
  fetchPageData(slug) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: response => {
        this.pageData = response.data[0].attributes;
        this.loadContent();
        console.log('data', this.pageData);
      },
      error: err => {
        this.error = err;
      }
    });
  }
  loadContent() {
    this.content = (0,_visa_type_utils__WEBPACK_IMPORTED_MODULE_0__.convertToHtml)(this.pageData.blocks[0].content);
  }
  static #_ = this.ɵfac = function SecurityRegulationsComponent_Factory(t) {
    return new (t || SecurityRegulationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_1__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SecurityRegulationsComponent,
    selectors: [["app-security-regulations"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 2,
    consts: [[1, "card"], [1, "px-6", "px-6"], [3, "innerHTML"]],
    template: function SecurityRegulationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageData == null ? null : ctx.pageData.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 18434:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/megamenu */ 18518);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/menubar */ 50499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/homepage-data.service */ 73631);







const _c0 = ["searchinput"];
function HeaderComponent_ng_template_7_div_0_ng_template_5_div_0_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r13["link"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r13.label);
  }
}
function HeaderComponent_ng_template_7_div_0_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_ng_template_7_div_0_ng_template_5_div_0_a_5_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submenu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", submenu_r7.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", submenu_r7.items);
  }
}
function HeaderComponent_ng_template_7_div_0_ng_template_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", submenu_r7["link"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](submenu_r7.label);
  }
}
function HeaderComponent_ng_template_7_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderComponent_ng_template_7_div_0_ng_template_5_div_0_Template, 6, 2, "div", 15)(1, HeaderComponent_ng_template_7_div_0_ng_template_5_ng_template_1_Template, 2, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const submenu_r7 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", submenu_r7.items == null ? null : submenu_r7.items.length)("ngIfElse", _r11);
  }
}
function HeaderComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_ng_template_7_div_0_ng_template_5_Template, 3, 2, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r1.items);
  }
}
function HeaderComponent_ng_template_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.label);
  }
}
function HeaderComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderComponent_ng_template_7_div_0_Template, 6, 2, "div", 13)(1, HeaderComponent_ng_template_7_ng_template_1_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.items == null ? null : item_r1.items.length)("ngIfElse", _r5);
  }
}
const _c1 = () => ["/"];
class HeaderComponent {
  activateSearch() {
    this.searchActive = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 100);
  }
  deactivateSearch() {
    this.searchActive = false;
  }
  get logo() {
    const logo = 'assets/layout/images/logo.png';
    return logo;
  }
  constructor(router, homePageDataService) {
    this.router = router;
    this.homePageDataService = homePageDataService;
    this.searchActive = false;
  }
  // getHeaderData
  ngOnInit() {
    this.fetchHeaderLink();
    this.items = [{
      label: 'Services',
      items: [{
        label: 'Passport',
        items: [{
          label: 'Passport Requirement As Per EOI, Abu Dhabi & Al Ain Residents',
          route: ''
        }, {
          label: 'Passport Requirement As Per CGI, Dubai & Northern Emirates Residents',
          route: ''
        }, {
          label: 'Global Entry Program (GEP)',
          route: ''
        }, {
          label: 'Passport Fee',
          route: ''
        }, {
          label: 'Photograph Specification',
          route: ''
        }, {
          label: 'Other Application Form',
          route: ''
        }, {
          label: 'Tatkal Service',
          route: ''
        }]
      }, {
        label: 'Visa',
        items: [{
          label: 'Student Visa',
          route: ''
        }, {
          label: 'Visa Requirements for EOI (Abu Dhabi)',
          route: ''
        }, {
          label: 'Visa Requirements for CGI (Dubai)',
          route: ''
        }]
      }, {
        label: 'OCI',
        route: '',
        items: [{
          label: '',
          route: ''
        }]
      }, {
        label: 'Attestation',
        route: '',
        items: [{
          label: '',
          route: ''
        }]
      }, {
        label: 'Consular',
        route: '',
        items: [{
          label: '',
          route: ''
        }]
      }]
    }, {
      label: 'General Information',
      items: [{
        label: 'Public Holidays',
        route: '/public-holidays'
      }, {
        label: 'Contact Us',
        route: '/contact-us'
      }, {
        label: 'Customer Experience',
        route: '/customer-exerience'
      }, {
        label: 'Security Regulation',
        route: '/security-regulations'
      }, {
        label: 'Useful Links',
        route: '/useful-links'
      }]
    }, {
      label: 'Additional Services',
      command: () => {
        this.router.navigate(['/additional-services']);
      }
    }, {
      label: 'News and Updates Services',
      command: () => {
        this.router.navigate(['/news/articles']);
      }
    }, {
      label: 'Track Application',
      command: () => {
        this.router.navigate(['/installation']);
      }
    }, {
      label: "FAQ's",
      command: () => {
        this.router.navigate(['/faq']);
      }
    }];
  }
  fetchHeaderLink() {
    this.homePageDataService.getHeaderData().subscribe({
      next: response => {
        this.items = response.data?.map(x => x['attributes']);
        console.log('first', this.items);
      },
      error: err => {
        console.log('Error Fetching', err);
      }
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_0__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    viewQuery: function HeaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 4,
    consts: [["id", "myTopnav", 1, "topnav"], [1, "logo-container"], [1, "brand-logo"], ["alt", "app logo", "width", "150", 3, "src"], [1, "option-container"], [1, "option", 3, "routerLink"], ["ngFor", "", 3, "ngForOf"], ["href", "javascript:void(0);", "onclick", "myFunction()", 1, "icon", 2, "font-size", "15px"], [1, "dropdown"], [1, "dropbtn"], [1, "pi", "pi-angle-down", "text-sm"], [1, "dropdown-content"], ["href", "#"], ["class", "dropdown", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "submenu-dropdown", 4, "ngIf", "ngIfElse"], ["submenuElse", ""], [1, "submenu-dropdown"], [1, "submenu-dropbtn"], [1, "pi", "pi-angle-right", "text-sm"], [1, "submenu-dropdown-content"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["href", "#home", 1, "option", "active"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_ng_template_7_Template, 3, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " EN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Japanese");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [primeng_menubar__WEBPACK_IMPORTED_MODULE_3__.MenubarModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__.MegaMenuModule],
    styles: [".topnav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 2rem;\n}\n.topnav[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.topnav[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  color: #000;\n  text-align: center;\n  padding: 18px 16px;\n  text-decoration: none;\n  font-size: 17px;\n  border: none;\n  background: transparent;\n  border-bottom: 2px solid transparent;\n}\n.topnav[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #4d7ed2;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #04aa6d;\n}\n\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  padding: 18px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  border-radius: 1rem;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  text-align: left;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n  border-radius: 1rem;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media screen and (max-width: 600px) {\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child), .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%] {\n    float: right;\n    display: block;\n  }\n}\n@media screen and (max-width: 600px) {\n  .topnav.responsive[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: left;\n  }\n}\n.submenu-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.submenu-dropdown[_ngcontent-%COMP%]   .submenu-dropbtn[_ngcontent-%COMP%] {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  padding: 18px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n  cursor: pointer;\n}\n.submenu-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  text-align: left;\n  border-right: 1px solid #dedede;\n}\n.submenu-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n.submenu-dropdown[_ngcontent-%COMP%]   .submenu-dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  top: 0;\n  left: 101%;\n  width: 30rem;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n\n.submenu-dropdown[_ngcontent-%COMP%]:hover   .submenu-dropdown-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQUNOO0FBRU07RUFDRSxnQ0FBQTtBQUFSOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7QUFKRjs7QUFhQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0FBVkY7O0FBYUE7RUFDRTs7SUFFRSxhQUFBO0VBVkY7RUFZQTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VBVkY7QUFDRjtBQWFBO0VBQ0U7SUFDRSxrQkFBQTtFQVhGO0VBYUE7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxNQUFBO0VBWEY7RUFhQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFYRjtFQWFBO0lBQ0UsV0FBQTtFQVhGO0VBYUE7SUFDRSxrQkFBQTtFQVhGO0VBYUE7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBWEY7QUFDRjtBQWNBO0VBQ0Usa0JBQUE7QUFaRjtBQWNFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFaSjtBQWVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQWJKO0FBZUk7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFiTjtBQWlCRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWZKOztBQW1CQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWhCRiIsInNvdXJjZXNDb250ZW50IjpbIi50b3BuYXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDJyZW07XG5cbiAgLm9wdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5vcHRpb24ge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxOHB4IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIC8vIHRyYW5zaXRpb246IGFsbCAycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNGQ3ZWQyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udG9wbmF2IGEge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRhYTZkO1xufVxuXG4udG9wbmF2IC5pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kcm9wZG93biAuZHJvcGJ0biB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxOHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvLyBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvcG5hdiBhOmhvdmVyLFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgLy8gY29sb3I6IHdoaXRlO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRvcG5hdiBhOm5vdCg6Zmlyc3QtY2hpbGQpLFxuICAuZHJvcGRvd24gLmRyb3BidG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnRvcG5hdiBhLmljb24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudG9wbmF2LnJlc3BvbnNpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLnRvcG5hdi5yZXNwb25zaXZlIGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biAuZHJvcGJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuXG4uc3VibWVudS1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuc3VibWVudS1kcm9wYnRuIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMThweCAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZGVkZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAuc3VibWVudS1kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAxMDElO1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuXG4uc3VibWVudS1kcm9wZG93bjpob3ZlciAuc3VibWVudS1kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 20123:
/*!*******************************************************************!*\
  !*** ./src/app/components/useful-links/useful-links.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsefulLinksComponent: () => (/* binding */ UsefulLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _home_homepage_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/homepage-data.service */ 73631);





function UsefulLinksComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", link_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r1.label);
  }
}
class UsefulLinksComponent {
  constructor(homePageDataService) {
    this.homePageDataService = homePageDataService;
  }
  ngOnInit() {
    this.fetchPageData('useful-links');
  }
  fetchPageData(slug) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: response => {
        this.pageData = response.data[0].attributes;
        this.links = this.pageData.blocks.filter(x => x.__component === 'elements.button-link');
      },
      error: err => {
        this.error = err;
      }
    });
  }
  static #_ = this.ɵfac = function UsefulLinksComponent_Factory(t) {
    return new (t || UsefulLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_homepage_data_service__WEBPACK_IMPORTED_MODULE_0__.HomepageDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UsefulLinksComponent,
    selectors: [["app-useful-links"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 2,
    consts: [[1, "card", "wrapper"], [1, "px-4", "text-center"], [1, "px-4", "flex", "gap-3", "flex-wrap", "justify-content-center"], ["class", "link-component", 4, "ngFor", "ngForOf"], [1, "link-component"], [1, "fancy", 3, "href"], [1, "top-key"], [1, "text", "text-xl"], [1, "bottom-key-1"]],
    template: function UsefulLinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UsefulLinksComponent_div_4_Template, 6, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageData == null ? null : ctx.pageData.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
    styles: [".fancy[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 2px solid #000;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 1.25em 2em;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: none;\n  transition: all 0.3s ease-in-out;\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 13px;\n  width: 20rem;\n  height: 100%;\n}\n\n.fancy[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 1.125em;\n  line-height: 1.33333em;\n  padding-left: 2em;\n  display: block;\n  text-align: left;\n  transition: all 0.3s ease-in-out;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: black;\n}\n\n.fancy[_ngcontent-%COMP%]   .top-key[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 1.5625rem;\n  top: -2px;\n  left: 0.625rem;\n  position: absolute;\n  background: #e8e8e8;\n  transition: width 0.5s ease-out, left 0.3s ease-out;\n}\n\n.fancy[_ngcontent-%COMP%]   .bottom-key-1[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 1.5625rem;\n  right: 1.875rem;\n  bottom: -2px;\n  position: absolute;\n  background: #e8e8e8;\n  transition: width 0.5s ease-out, right 0.3s ease-out;\n}\n\n.fancy[_ngcontent-%COMP%]   .bottom-key-2[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 0.625rem;\n  right: 0.625rem;\n  bottom: -2px;\n  position: absolute;\n  background: #e8e8e8;\n  transition: width 0.5s ease-out, right 0.3s ease-out;\n}\n\n.fancy[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: black;\n}\n\n.fancy[_ngcontent-%COMP%]:hover::before {\n  background: white;\n}\n\n.fancy[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.fancy[_ngcontent-%COMP%]:hover   .top-key[_ngcontent-%COMP%] {\n  left: -2px;\n  width: 0px;\n}\n\n.fancy[_ngcontent-%COMP%]:hover   .bottom-key-1[_ngcontent-%COMP%], .fancy[_ngcontent-%COMP%]:hover   .bottom-key-2[_ngcontent-%COMP%] {\n  right: 0;\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VmdWwtbGlua3MvdXNlZnVsLWxpbmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVpGOztBQWVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFaRjs7QUFlQTtFQUVFLGlCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsWUFBQTtBQWJGOztBQWdCQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBYkY7O0FBZ0JBOztFQUVFLFFBQUE7RUFDQSxRQUFBO0FBYkYiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFuY3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZzogMS4yNWVtIDJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLy8gLmZhbmN5OjpiZWZvcmUge1xuLy8gICBjb250ZW50OiBcIiBcIjtcbi8vICAgd2lkdGg6IDEuNTYyNXJlbTtcbi8vICAgaGVpZ2h0OiAycHg7XG4vLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgbGVmdDogMS41ZW07XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuLy8gICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBsaW5lYXIsIHdpZHRoIDAuM3MgbGluZWFyO1xuLy8gfVxuXG4uZmFuY3kgLnRleHQge1xuICBmb250LXNpemU6IDEuMTI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzZW07XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZmFuY3kgLnRvcC1rZXkge1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAwLjYyNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2Utb3V0LCBsZWZ0IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5mYW5jeSAuYm90dG9tLWtleS0xIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxLjU2MjVyZW07XG4gIHJpZ2h0OiAxLjg3NXJlbTtcbiAgYm90dG9tOiAtMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1vdXQsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5mYW5jeSAuYm90dG9tLWtleS0yIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAwLjYyNXJlbTtcbiAgcmlnaHQ6IDAuNjI1cmVtO1xuICBib3R0b206IC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLW91dCwgcmlnaHQgMC4zcyBlYXNlLW91dDtcbn1cblxuLmZhbmN5OmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmZhbmN5OmhvdmVyOjpiZWZvcmUge1xuICAvLyB3aWR0aDogMC45Mzc1cmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmZhbmN5OmhvdmVyIC50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmFuY3k6aG92ZXIgLnRvcC1rZXkge1xuICBsZWZ0OiAtMnB4O1xuICB3aWR0aDogMHB4O1xufVxuXG4uZmFuY3k6aG92ZXIgLmJvdHRvbS1rZXktMSxcbi5mYW5jeTpob3ZlciAuYm90dG9tLWtleS0yIHtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64431:
/*!***********************************************!*\
  !*** ./src/app/components/visa-type/utils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToHtml: () => (/* binding */ convertToHtml),
/* harmony export */   selectRandomColor: () => (/* binding */ selectRandomColor)
/* harmony export */ });
const colorsArray = ['blue-300', 'blue-400', 'blue-500', 'blue-600', 'blue-700', 'blue-800', 'blue-900', 'green-300', 'green-400', 'green-500', 'green-600', 'green-700', 'green-800', 'green-900', 'yellow-300', 'yellow-400', 'yellow-500', 'yellow-600', 'yellow-700', 'yellow-800', 'yellow-900', 'cyan-300', 'cyan-400', 'cyan-500', 'cyan-600', 'cyan-700', 'cyan-800', 'cyan-900', 'pink-300', 'pink-400', 'pink-500', 'pink-600', 'pink-700', 'pink-800', 'pink-900', 'indigo-200', 'indigo-300', 'indigo-400', 'indigo-500', 'indigo-600', 'indigo-700', 'indigo-800', 'indigo-900', 'red-300', 'red-400', 'red-500', 'red-600', 'red-700', 'red-800', 'red-900', 'teal-400', 'teal-500', 'teal-600', 'teal-700', 'teal-800', 'teal-900', 'orange-300', 'orange-400', 'orange-500', 'orange-600', 'orange-700', 'orange-800', 'orange-900', 'bluegray-300', 'bluegray-400', 'bluegray-500', 'bluegray-600', 'bluegray-700', 'bluegray-800', 'bluegray-900', 'purple-300', 'purple-400', 'purple-500', 'purple-600', 'purple-700', 'purple-800', 'purple-900', 'primary-400', 'primary-500', 'primary-600', 'primary-700', 'primary-800', 'primary-900'];
function convertToHtml(content) {
  if (!content || !Array.isArray(content)) {
    return '';
  }
  return content.map(block => {
    switch (block.type) {
      case 'paragraph':
        return `<p>${convertChildrenToHtml(block.children)}</p>`;
      // Handle other types as needed
      case 'image':
        return `<img src="${block.image.url}" alt="${block.image.alternativeText}" class="content-image"/>`;
      case 'list':
        return block.format === 'unordered' ? `<ul>${convertChildrenToHtml(block.children)}</ul>` : `<ol>${convertChildrenToHtml(block.children)}</ol>`;
      case 'heading':
        if (block.level === 1) {
          return `<h1>${convertChildrenToHtml(block.children)}</h1>`;
        } else if (block.level === 2) {
          return `<h2>${convertChildrenToHtml(block.children)}</h2>`;
        } else if (block.level === 3) {
          return `<h3>${convertChildrenToHtml(block.children)}</h3>`;
        } else if (block.level === 4) {
          return `<h4>${convertChildrenToHtml(block.children)}</h4>`;
        } else if (block.level === 5) {
          return `<h5>${convertChildrenToHtml(block.children)}</h5>`;
        } else {
          return `<h6>${convertChildrenToHtml(block.children)}</h6>`;
        }
        return;
      case 'code':
        return `<pre><code>${convertChildrenToHtml(block.children)}</code></pre>`;
      case 'quote':
        return `<blockquote>${convertChildrenToHtml(block.children)}</blockquote>`;
      default:
        return '';
    }
  }).join('');
}
function convertChildrenToHtml(children) {
  if (!children || !Array.isArray(children)) {
    return '';
  }
  return children.map(child => {
    switch (child.type) {
      case 'text':
        let codeString = child.text;
        if (child.bold) {
          codeString = `<b>${codeString}</b>`;
        }
        if (child.italic) {
          codeString = `<em>${codeString}</em>`;
        }
        if (child.underline) {
          codeString = `<u>${codeString}</u>`;
        }
        if (child.strikethrough) {
          codeString = `<del>${codeString}</del>`;
        }
        if (child.code) {
          codeString = `<code>${codeString}</code>`;
        }
        return codeString;
      // Handle other child types as needed
      case 'link':
        return `<a href="${child.url}">${child.children[0].text}</a>`;
      case 'list-item':
        return `<li>${convertChildrenToHtml(child.children)}</li>`;
      default:
        return '';
    }
  }).join('');
}
function selectRandomColor() {
  let random = Math.random() * 120;
  random = Math.floor(random);
  return colorsArray[random];
}

/***/ }),

/***/ 70549:
/*!****************************************************!*\
  !*** ./src/app/layout/app.breadcrumb.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppBreadcrumbComponent: () => (/* binding */ AppBreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);






function AppBreadcrumbComponent_nav_0_ng_template_7_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppBreadcrumbComponent_nav_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppBreadcrumbComponent_nav_0_ng_template_7_li_2_Template, 2, 0, "li", 6);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r3);
  }
}
const _c0 = () => ["/"];
function AppBreadcrumbComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1)(1, "ol")(2, "li")(3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppBreadcrumbComponent_nav_0_ng_template_7_Template, 3, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx_r0.breadcrumbs$));
  }
}
class AppBreadcrumbComponent {
  constructor(router) {
    this.router = router;
    this._breadcrumbs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.showBreadCrumb = false;
    this.breadcrumbs$ = this._breadcrumbs$.asObservable();
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(event => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      this._breadcrumbs$.next(breadcrumbs);
    });
  }
  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.checkForHomePage();
      }
    });
  }
  addBreadcrumb(route, parentUrl, breadcrumbs) {
    const routeUrl = parentUrl.concat(route.url.map(url => url.path));
    const breadcrumb = route.data['breadcrumb'];
    const parentBreadcrumb = route.parent && route.parent.data ? route.parent.data['breadcrumb'] : null;
    if (breadcrumb && breadcrumb !== parentBreadcrumb) {
      breadcrumbs.push({
        label: route.data['breadcrumb'],
        url: '/' + routeUrl.join('/')
      });
    }
    if (route.firstChild) {
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
    if (breadcrumbs.length > 0) {
      this.showBreadCrumb = true;
    }
  }
  checkForHomePage() {
    if (this.router.url === '/') {
      this.showBreadCrumb = false;
    }
  }
  static #_ = this.ɵfac = function AppBreadcrumbComponent_Factory(t) {
    return new (t || AppBreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppBreadcrumbComponent,
    selectors: [["app-breadcrumb"]],
    decls: 1,
    vars: 1,
    consts: [["class", "layout-breadcrumb wrapper my-3 px-3", 4, "ngIf"], [1, "layout-breadcrumb", "wrapper", "my-3", "px-3"], [3, "routerLink"], [1, "pi", "pi-home"], [1, "layout-breadcrumb-chevron"], ["ngFor", "", 3, "ngForOf"], ["class", "layout-breadcrumb-chevron", 4, "ngIf"]],
    template: function AppBreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppBreadcrumbComponent_nav_0_Template, 9, 5, "nav", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBreadCrumb);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 57133:
/*!************************************************!*\
  !*** ./src/app/layout/app.footer.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFooterComponent: () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 43859);


class AppFooterComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  get colorScheme() {
    return this.layoutService.config().colorScheme;
  }
  static #_ = this.ɵfac = function AppFooterComponent_Factory(t) {
    return new (t || AppFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppFooterComponent,
    selectors: [["app-footer"]],
    decls: 11,
    vars: 0,
    consts: [[1, "layout-footer"], [1, "footer-start"], [1, "footer-end"]],
    template: function AppFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Privacy and cookie policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Certification and accreditation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00A9 IVF Global, All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 79206:
/*!************************************************!*\
  !*** ./src/app/layout/app.layout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLayoutComponent: () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.sidebar.component */ 65196);
/* harmony import */ var _app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.topbar.component */ 67707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.menu.service */ 60704);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/header/header.component */ 18434);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.footer.component */ 57133);
/* harmony import */ var _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.breadcrumb.component */ 70549);












class AppLayoutComponent {
  constructor(menuService, layoutService, renderer, router) {
    this.menuService = menuService;
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }
      if ((this.layoutService.isSlim() || this.layoutService.isSlimPlus()) && !this.menuScrollListener) {
        this.menuScrollListener = this.renderer.listen(this.appSidebar.menuContainer.nativeElement, 'scroll', event => {
          if (this.layoutService.isDesktop()) {
            this.hideMenu();
          }
        });
      }
      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd)).subscribe(() => {
      this.hideMenu();
    });
    this.tabOpenSubscription = this.layoutService.tabOpen$.subscribe(tab => {
      this.router.navigate(tab.routerLink);
      this.layoutService.openTab(tab);
    });
    this.tabCloseSubscription = this.layoutService.tabClose$.subscribe(event => {
      if (this.router.isActive(event.tab.routerLink[0], {
        paths: 'subset',
        queryParams: 'subset',
        fragment: 'ignored',
        matrixParams: 'ignored'
      })) {
        const tabs = this.layoutService.tabs;
        if (tabs.length > 1) {
          if (event.index === tabs.length - 1) this.router.navigate(tabs[tabs.length - 2].routerLink);else this.router.navigate(tabs[event.index + 1].routerLink);
        } else {
          this.router.navigate(['/']);
        }
      }
      this.layoutService.closeTab(event.index);
    });
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    this.menuService.reset();
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    if (this.menuScrollListener) {
      this.menuScrollListener();
      this.menuScrollListener = null;
    }
    this.unblockBodyScroll();
  }
  get containerClass() {
    return {
      'layout-slim': this.layoutService.config().menuMode === 'slim',
      'layout-slim-plus': this.layoutService.config().menuMode === 'slim-plus',
      'layout-static': this.layoutService.config().menuMode === 'static',
      'layout-overlay': this.layoutService.config().menuMode === 'overlay',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === 'static',
      'p-input-filled': this.layoutService.config().inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config().ripple,
      'layout-light': this.layoutService.config().layoutTheme === 'colorScheme' && this.layoutService.config().colorScheme === 'light',
      'layout-dark': this.layoutService.config().layoutTheme === 'colorScheme' && this.layoutService.config().colorScheme === 'dark',
      'layout-primary': this.layoutService.config().colorScheme !== 'dark' && this.layoutService.config().layoutTheme === 'primaryColor'
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
    if (this.tabOpenSubscription) {
      this.tabOpenSubscription.unsubscribe();
    }
    if (this.tabCloseSubscription) {
      this.tabCloseSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function AppLayoutComponent_Factory(t) {
    return new (t || AppLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AppLayoutComponent,
    selectors: [["app-layout"]],
    viewQuery: function AppLayoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.appSidebar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.appTopbar = _t.first);
      }
    },
    decls: 8,
    vars: 1,
    consts: [[1, "layout-container", 3, "ngClass"], [1, "layout-content-wrapper"], [1, "layout-content"], [1, "layout-content-inner"]],
    template: function AppLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-breadcrumb")(6, "router-outlet")(7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.containerClass);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _app_footer_component__WEBPACK_IMPORTED_MODULE_5__.AppFooterComponent, _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.AppBreadcrumbComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 84295:
/*!*********************************************!*\
  !*** ./src/app/layout/app.layout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLayoutModule: () => (/* binding */ AppLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/badge */ 67650);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputswitch */ 81763);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.menu.component */ 57037);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 6093);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _app_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.topbar.component */ 67707);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.sidebar.component */ 65196);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.footer.component */ 57133);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config.module */ 92913);
/* harmony import */ var _app_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.layout.component */ 79206);
/* harmony import */ var _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.breadcrumb.component */ 70549);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/styleclass */ 30152);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/header/header.component */ 18434);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/menubar */ 50499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 26575);



























class AppLayoutModule {
  static #_ = this.ɵfac = function AppLayoutModule_Factory(t) {
    return new (t || AppLayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppLayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule, primeng_menu__WEBPACK_IMPORTED_MODULE_16__.MenuModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.DropdownModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__.SidebarModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_20__.StyleClassModule, primeng_badge__WEBPACK_IMPORTED_MODULE_21__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_23__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__.TooltipModule, _config_config_module__WEBPACK_IMPORTED_MODULE_5__.AppConfigModule, _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent, primeng_menubar__WEBPACK_IMPORTED_MODULE_25__.MenubarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppLayoutModule, {
    declarations: [_app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent, _app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.AppTopBarComponent, _app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.AppSidebarComponent, _app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent, _app_menu_component__WEBPACK_IMPORTED_MODULE_0__.AppMenuComponent, _app_layout_component__WEBPACK_IMPORTED_MODULE_6__.AppLayoutComponent, _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.AppBreadcrumbComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule, primeng_menu__WEBPACK_IMPORTED_MODULE_16__.MenuModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.DropdownModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__.SidebarModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_20__.StyleClassModule, primeng_badge__WEBPACK_IMPORTED_MODULE_21__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_23__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__.TooltipModule, _config_config_module__WEBPACK_IMPORTED_MODULE_5__.AppConfigModule, _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent, primeng_menubar__WEBPACK_IMPORTED_MODULE_25__.MenubarModule],
    exports: [_app_layout_component__WEBPACK_IMPORTED_MODULE_6__.AppLayoutComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetComponentScope"](_app_menu_component__WEBPACK_IMPORTED_MODULE_0__.AppMenuComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent], []);

/***/ }),

/***/ 57037:
/*!**********************************************!*\
  !*** ./src/app/layout/app.menu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuComponent: () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 43859);


function AppMenuComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r1)("index", i_r2)("root", true);
  }
}
class AppMenuComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.model = [];
  }
  ngOnInit() {
    this.model = [{
      label: 'Dashboard',
      icon: 'pi pi-home',
      items: [{
        label: 'SaaS',
        icon: 'pi pi-desktop',
        routerLink: ['/']
      }, {
        label: 'Sales',
        icon: 'pi pi-chart-bar',
        routerLink: ['/dashboard-sales']
      }]
    }, {
      label: 'UI Kit',
      icon: 'pi pi-star',
      routerLink: ['/uikit'],
      items: [{
        label: 'Form Layout',
        icon: 'pi pi-id-card',
        routerLink: ['/uikit/formlayout']
      }, {
        label: 'Input',
        icon: 'pi pi-check-square',
        routerLink: ['/uikit/input']
      }, {
        label: 'Float Label',
        icon: 'pi pi-bookmark',
        routerLink: ['/uikit/floatlabel']
      }, {
        label: 'Invalid State',
        icon: 'pi pi-exclamation-circle',
        routerLink: ['/uikit/invalidstate']
      }, {
        label: 'Button',
        icon: 'pi pi-box',
        routerLink: ['/uikit/button']
      }, {
        label: 'Table',
        icon: 'pi pi-table',
        routerLink: ['/uikit/table']
      }, {
        label: 'List',
        icon: 'pi pi-list',
        routerLink: ['/uikit/list']
      }, {
        label: 'Tree',
        icon: 'pi pi-share-alt',
        routerLink: ['/uikit/tree']
      }, {
        label: 'Panel',
        icon: 'pi pi-tablet',
        routerLink: ['/uikit/panel']
      }, {
        label: 'Overlay',
        icon: 'pi pi-clone',
        routerLink: ['/uikit/overlay']
      }, {
        label: 'Media',
        icon: 'pi pi-image',
        routerLink: ['/uikit/media']
      }, {
        label: 'Menu',
        icon: 'pi pi-bars',
        routerLink: ['/uikit/menu'],
        routerLinkActiveOptions: {
          paths: 'subset',
          queryParams: 'ignored',
          matrixParams: 'ignored',
          fragment: 'ignored'
        }
      }, {
        label: 'Message',
        icon: 'pi pi-comment',
        routerLink: ['/uikit/message']
      }, {
        label: 'File',
        icon: 'pi pi-file',
        routerLink: ['/uikit/file']
      }, {
        label: 'Chart',
        icon: 'pi pi-chart-bar',
        routerLink: ['/uikit/charts']
      }, {
        label: 'Misc',
        icon: 'pi pi-circle-off',
        routerLink: ['/uikit/misc']
      }]
    }, {
      label: 'Apps',
      icon: 'pi pi-th-large',
      items: [{
        label: 'Blog',
        icon: 'pi pi-fw pi-comment',
        items: [{
          label: 'List',
          icon: 'pi pi-fw pi-image',
          routerLink: ['/apps/blog/list']
        }, {
          label: 'Detail',
          icon: 'pi pi-fw pi-list',
          routerLink: ['/apps/blog/detail']
        }, {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          routerLink: ['/apps/blog/edit']
        }]
      }, {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        routerLink: ['/apps/calendar']
      }, {
        label: 'Chat',
        icon: 'pi pi-fw pi-comments',
        routerLink: ['/apps/chat']
      }, {
        label: 'Files',
        icon: 'pi pi-fw pi-folder',
        routerLink: ['/apps/files']
      }, {
        label: 'Kanban',
        icon: 'pi pi-fw pi-sliders-v',
        routerLink: ['/apps/kanban']
      }, {
        label: 'Mail',
        icon: 'pi pi-fw pi-envelope',
        items: [{
          label: 'Inbox',
          icon: 'pi pi-fw pi-inbox',
          routerLink: ['/apps/mail/inbox']
        }, {
          label: 'Compose',
          icon: 'pi pi-fw pi-pencil',
          routerLink: ['/apps/mail/compose']
        }, {
          label: 'Detail',
          icon: 'pi pi-fw pi-comment',
          routerLink: ['/apps/mail/detail/1000']
        }]
      }, {
        label: 'Task List',
        icon: 'pi pi-fw pi-check-square',
        routerLink: ['/apps/tasklist']
      }]
    }, {
      label: 'Prime Blocks',
      icon: 'pi pi-fw pi-prime',
      routerLink: ['/blocks'],
      items: [{
        label: 'Free Blocks',
        icon: 'pi pi-fw pi-eye',
        routerLink: ['/blocks']
      }, {
        label: 'All Blocks',
        icon: 'pi pi-fw pi-globe',
        url: 'https://www.primefaces.org/primeblocks-ng',
        target: '_blank'
      }]
    }, {
      label: 'Utilities',
      icon: 'pi pi-fw pi-compass',
      routerLink: ['/utilities'],
      items: [{
        label: 'PrimeIcons',
        icon: 'pi pi-fw pi-prime',
        routerLink: ['utilities/icons']
      }, {
        label: 'Colors',
        icon: 'pi pi-fw pi-palette',
        routerLink: ['utilities/colors']
      }, {
        label: 'PrimeFlex',
        icon: 'pi pi-fw pi-desktop',
        url: 'https://www.primefaces.org/primeflex/',
        target: '_blank'
      }, {
        label: 'Figma',
        icon: 'pi pi-fw pi-pencil',
        url: 'https://www.figma.com/file/PgQXX4HXMPeCkT74tGajod/Preview-%7C-Verona-2022?node-id=1303%3A750',
        target: '_blank'
      }]
    }, {
      label: 'Pages',
      icon: 'pi pi-fw pi-briefcase',
      items: [{
        label: 'Landing',
        icon: 'pi pi-fw pi-globe',
        routerLink: ['/landing'],
        data: {
          'fullPage': true
        }
      }, {
        label: 'Auth',
        icon: 'pi pi-fw pi-user',
        items: [{
          label: 'Login',
          icon: 'pi pi-fw pi-sign-in',
          routerLink: ['/auth/login'],
          data: {
            'fullPage': true
          }
        }, {
          label: 'Error',
          icon: 'pi pi-fw pi-times-circle',
          routerLink: ['/auth/error'],
          data: {
            'fullPage': true
          }
        }, {
          label: 'Access Denied',
          icon: 'pi pi-fw pi-lock',
          routerLink: ['/auth/access'],
          data: {
            'fullPage': true
          }
        }, {
          label: 'Register',
          icon: 'pi pi-fw pi-user-plus',
          routerLink: ['/auth/register'],
          data: {
            'fullPage': true
          }
        }, {
          label: 'Forgot Password',
          icon: 'pi pi-fw pi-question',
          routerLink: ['/auth/forgotpassword'],
          data: {
            'fullPage': true
          }
        }, {
          label: 'New Password',
          icon: 'pi pi-fw pi-cog',
          routerLink: ['/auth/newpassword'],
          data: {
            'fullPage': true
          }
        }, {
          label: 'Verification',
          icon: 'pi pi-fw pi-envelope',
          routerLink: ['/auth/verification'],
          data: {
            'fullPage': true
          }
        }, {
          label: 'Lock Screen',
          icon: 'pi pi-fw pi-eye-slash',
          routerLink: ['/auth/lockscreen'],
          data: {
            'fullPage': true
          }
        }]
      }, {
        label: 'Crud',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['/pages/crud']
      }, {
        label: 'Timeline',
        icon: 'pi pi-fw pi-calendar',
        routerLink: ['/pages/timeline']
      }, {
        label: 'Invoice',
        icon: 'pi pi-fw pi-dollar',
        routerLink: ['/pages/invoice']
      }, {
        label: 'About Us',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/pages/aboutus']
      }, {
        label: 'Help',
        icon: 'pi pi-fw pi-question-circle',
        routerLink: ['/pages/help']
      }, {
        label: 'Not Found',
        icon: 'pi pi-fw pi-exclamation-circle',
        routerLink: ['/pages/notfound']
      }, {
        label: 'Empty',
        icon: 'pi pi-fw pi-circle-off',
        routerLink: ['/pages/empty']
      }, {
        label: 'FAQ',
        icon: 'pi pi-fw pi-question',
        routerLink: ['/pages/faq']
      }, {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-phone',
        routerLink: ['/pages/contact']
      }]
    }, {
      label: 'E-Commerce',
      icon: 'pi pi-fw pi-wallet',
      items: [{
        label: 'Product Overview',
        icon: 'pi pi-fw pi-image',
        routerLink: ['ecommerce/product-overview']
      }, {
        label: 'Product List',
        icon: 'pi pi-fw pi-list',
        routerLink: ['ecommerce/product-list']
      }, {
        label: 'New Product',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['ecommerce/new-product']
      }, {
        label: 'Shopping Cart',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['ecommerce/shopping-cart']
      }, {
        label: 'Checkout Form',
        icon: 'pi pi-fw pi-check-square',
        routerLink: ['ecommerce/checkout-form']
      }, {
        label: 'Order History',
        icon: 'pi pi-fw pi-history',
        routerLink: ['ecommerce/order-history']
      }, {
        label: 'Order Summary',
        icon: 'pi pi-fw pi-file',
        routerLink: ['ecommerce/order-summary']
      }]
    }, {
      label: 'User Management',
      icon: 'pi pi-fw pi-user',
      items: [{
        label: 'List',
        icon: 'pi pi-fw pi-list',
        routerLink: ['profile/list']
      }, {
        label: 'Create',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['profile/create']
      }]
    }, {
      label: 'Hierarchy',
      icon: 'pi pi-align-left',
      items: [{
        label: 'Submenu 1',
        icon: 'pi pi-align-left',
        items: [{
          label: 'Submenu 1.1',
          icon: 'pi pi-align-left',
          items: [{
            label: 'Submenu 1.1.1',
            icon: 'pi pi-align-left'
          }, {
            label: 'Submenu 1.1.2',
            icon: 'pi pi-align-left'
          }, {
            label: 'Submenu 1.1.3',
            icon: 'pi pi-align-left'
          }]
        }, {
          label: 'Submenu 1.2',
          icon: 'pi pi-align-left',
          items: [{
            label: 'Submenu 1.2.1',
            icon: 'pi pi-align-left'
          }]
        }]
      }, {
        label: 'Submenu 2',
        icon: 'pi pi-align-left',
        items: [{
          label: 'Submenu 2.1',
          icon: 'pi pi-align-left',
          items: [{
            label: 'Submenu 2.1.1',
            icon: 'pi pi-align-left'
          }, {
            label: 'Submenu 2.1.2',
            icon: 'pi pi-align-left'
          }]
        }, {
          label: 'Submenu 2.2',
          icon: 'pi pi-align-left',
          items: [{
            label: 'Submenu 2.2.1',
            icon: 'pi pi-align-left'
          }]
        }]
      }]
    }, {
      label: 'Start',
      icon: 'pi pi-download',
      items: [{
        label: 'Buy Now',
        icon: 'pi pi-shopping-cart',
        url: 'https://www.primefaces.org/store'
      }, {
        label: 'Documentation',
        icon: 'pi pi-info-circle',
        routerLink: ['/documentation']
      }]
    }];
  }
  static #_ = this.ɵfac = function AppMenuComponent_Factory(t) {
    return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppMenuComponent,
    selectors: [["app-menu"]],
    decls: 2,
    vars: 1,
    consts: [[1, "layout-menu"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root"]],
    template: function AppMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppMenuComponent_li_1_Template, 1, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.model);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 60704:
/*!********************************************!*\
  !*** ./src/app/layout/app.menu.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class MenuService {
  constructor() {
    this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.menuSource$ = this.menuSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
  static #_ = this.ɵfac = function MenuService_Factory(t) {
    return new (t || MenuService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MenuService,
    factory: MenuService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6093:
/*!**************************************************!*\
  !*** ./src/app/layout/app.menuitem.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuitemComponent: () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 43859);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.sidebar.component */ 65196);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.menu.service */ 60704);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);











const _c0 = ["submenu"];
const _c1 = ["app-menuitem", ""];
function AppMenuitemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.item.label);
  }
}
function AppMenuitemComponent_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 9);
  }
}
function AppMenuitemComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.itemClick($event));
    })("mouseenter", function AppMenuitemComponent_a_2_Template_a_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.onMouseEnter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppMenuitemComponent_a_2_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.item.class)("pTooltip", ctx_r1.item.label)("tooltipDisabled", !(ctx_r1.isSlim && ctx_r1.root && !ctx_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("href", ctx_r1.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", ctx_r1.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.item.items);
  }
}
function AppMenuitemComponent_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 9);
  }
}
const _c2 = () => ({
  paths: "exact",
  queryParams: "ignored",
  matrixParams: "ignored",
  fragment: "ignored"
});
function AppMenuitemComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppMenuitemComponent_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.itemClick($event));
    })("mouseenter", function AppMenuitemComponent_a_3_Template_a_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.onMouseEnter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppMenuitemComponent_a_3_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.item.class)("routerLink", ctx_r2.item.routerLink)("routerLinkActiveOptions", ctx_r2.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c2))("fragment", ctx_r2.item.fragment)("queryParamsHandling", ctx_r2.item.queryParamsHandling)("preserveFragment", ctx_r2.item.preserveFragment)("skipLocationChange", ctx_r2.item.skipLocationChange)("replaceUrl", ctx_r2.item.replaceUrl)("state", ctx_r2.item.state)("queryParams", ctx_r2.item.queryParams)("pTooltip", ctx_r2.item.label)("tooltipDisabled", !(ctx_r2.isSlim && ctx_r2.root));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("target", ctx_r2.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.item.items);
  }
}
function AppMenuitemComponent_ul_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "li", 13);
  }
  if (rf & 2) {
    const child_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](child_r14.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", child_r14)("index", i_r15)("parentKey", ctx_r13.key);
  }
}
function AppMenuitemComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@children.done", function AppMenuitemComponent_ul_4_Template_ul_animation_children_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.onSubmenuAnimated($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppMenuitemComponent_ul_4_ng_template_2_Template, 1, 5, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@children", ctx_r3.submenuAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.item.items);
  }
}
class AppMenuitemComponent {
  constructor(layoutService, cd, appSidebar, router, menuService) {
    this.layoutService = layoutService;
    this.cd = cd;
    this.appSidebar = appSidebar;
    this.router = router;
    this.menuService = menuService;
    this.active = false;
    this.key = "";
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(params => {
      if (this.isSlimPlus || this.isSlim) {
        this.active = false;
      } else {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
        }
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    if (!this.isSlim && this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  ngAfterViewChecked() {
    if (this.root && this.active && this.layoutService.isDesktop() && (this.layoutService.isSlim() || this.layoutService.isSlimPlus())) {
      this.calculatePosition(this.submenu?.nativeElement, this.submenu?.nativeElement.parentElement);
    }
  }
  onSubmenuAnimated(event) {
    if (event.toState === 'visible' && this.layoutService.isDesktop() && (this.layoutService.isSlim() || this.layoutService.isSlimPlus())) {
      const el = event.element;
      const elParent = el.parentElement;
      this.calculatePosition(el, elParent);
    }
  }
  calculatePosition(overlay, target) {
    if (overlay) {
      const {
        left,
        top
      } = target.getBoundingClientRect();
      const vHeight = window.innerHeight;
      const oHeight = overlay.offsetHeight;
      const topbarEl = document.querySelector('.layout-topbar');
      const topbarHeight = topbarEl?.offsetHeight || 0;
      // reset
      overlay.style.top = '';
      overlay.style.left = '';
      if (this.layoutService.isSlim() || this.layoutService.isSlimPlus()) {
        const topOffset = top - topbarHeight;
        const height = topOffset + oHeight + topbarHeight;
        overlay.style.top = vHeight < height ? `${topOffset - (height - vHeight)}px` : `${topOffset}px`;
      }
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], this.item.routerLinkActiveOptions || {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
    if (activeRoute) {
      this.menuService.onMenuStateChange({
        key: this.key,
        routeEvent: true
      });
    }
  }
  itemClick(event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    // navigate with hover
    if (this.root && this.isSlim || this.isSlimPlus) {
      this.layoutService.state.menuHoverActive = !this.layoutService.state.menuHoverActive;
    }
    // execute command
    if (this.item.command) {
      this.item.command({
        originalEvent: event,
        item: this.item
      });
    }
    // add tab
    if (event.metaKey && this.item.routerLink && (!this.item.data || !this.item.data.fullPage)) {
      this.layoutService.onTabOpen(this.item);
      event.preventDefault();
    }
    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
      if (this.root && this.active && (this.isSlim || this.isSlimPlus)) {
        this.layoutService.onOverlaySubmenuOpen();
      }
    } else {
      if (this.layoutService.isMobile()) {
        this.layoutService.state.staticMenuMobileActive = false;
      }
      if (this.isSlim || this.isSlimPlus) {
        this.menuService.reset();
        this.layoutService.state.menuHoverActive = false;
      }
    }
    this.menuService.onMenuStateChange({
      key: this.key
    });
  }
  onMouseEnter() {
    // activate item on hover
    if (this.root && (this.isSlim || this.isSlimPlus) && this.layoutService.isDesktop()) {
      if (this.layoutService.state.menuHoverActive) {
        this.active = true;
        this.menuService.onMenuStateChange({
          key: this.key
        });
      }
    }
  }
  get submenuAnimation() {
    if (this.layoutService.isDesktop() && (this.layoutService.isSlim() || this.layoutService.isSlimPlus())) return this.active ? 'visible' : 'hidden';else return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }
  get isSlim() {
    return this.layoutService.isSlim();
  }
  get isSlimPlus() {
    return this.layoutService.isSlimPlus();
  }
  get isMobile() {
    return this.layoutService.isMobile();
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function AppMenuitemComponent_Factory(t) {
    return new (t || AppMenuitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.AppSidebarComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppMenuitemComponent,
    selectors: [["", "app-menuitem", ""]],
    viewQuery: function AppMenuitemComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.submenu = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
      }
    },
    inputs: {
      item: "item",
      index: "index",
      root: "root",
      parentKey: "parentKey"
    },
    attrs: _c1,
    decls: 5,
    vars: 4,
    consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "pTooltip", "tooltipDisabled", "click", "mouseenter", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "pTooltip", "tooltipDisabled", "click", "mouseenter", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "pTooltip", "tooltipDisabled", "click", "mouseenter"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "pTooltip", "tooltipDisabled", "click", "mouseenter"], ["submenu", ""], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]],
    template: function AppMenuitemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppMenuitemComponent_div_1_Template, 2, 1, "div", 0)(2, AppMenuitemComponent_a_2_Template, 5, 8, "a", 1)(3, AppMenuitemComponent_a_3_Template, 5, 17, "a", 2)(4, AppMenuitemComponent_ul_4_Template, 3, 2, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.root && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.item.visible !== false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, AppMenuitemComponent],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('children', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        display: 'none'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        display: 'block'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('collapsed <=> expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
    }
  });
}

/***/ }),

/***/ 65196:
/*!*************************************************!*\
  !*** ./src/app/layout/app.sidebar.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSidebarComponent: () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 43859);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.component */ 57037);



const _c0 = ["menuContainer"];
class AppSidebarComponent {
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
  static #_ = this.ɵfac = function AppSidebarComponent_Factory(t) {
    return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppSidebarComponent,
    selectors: [["app-sidebar"]],
    viewQuery: function AppSidebarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menuContainer = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: [[1, "layout-sidebar"], [1, "layout-menu-container"], ["menuContainer", ""]],
    template: function AppSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_app_menu_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 67707:
/*!************************************************!*\
  !*** ./src/app/layout/app.topbar.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTopBarComponent: () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/styleclass */ 30152);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 51339);






const _c0 = ["searchinput"];
const _c1 = ["menubutton"];
const _c2 = () => ({
  paths: "exact",
  queryParams: "ignored",
  fragment: "ignored",
  matrixParams: "ignored"
});
function AppTopBarComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 13)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r2.routerLink)("routerLinkActiveOptions", item_r2.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2))("fragment", item_r2.fragment)("queryParamsHandling", item_r2.queryParamsHandling)("preserveFragment", item_r2.preserveFragment)("skipLocationChange", item_r2.skipLocationChange)("replaceUrl", item_r2.replaceUrl)("state", item_r2.state)("queryParams", item_r2.queryParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.label);
  }
}
class AppTopBarComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.menu = [];
    this.searchActive = true;
  }
  ngOnInit() {
    this.items = [{
      label: 'Visa Services',
      items: [{
        label: 'Components',
        icon: 'pi pi-bolt'
      }, {
        label: 'Blocks',
        icon: 'pi pi-server'
      }, {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      }]
    }, {
      label: 'General Information'
    }, {
      label: 'Additional Services'
    }, {
      label: 'News and Updates Services'
    }, {
      label: 'Track Application'
    }, {
      label: "FAQ's"
    }];
  }
  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }
  activateSearch() {
    this.searchActive = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 100);
  }
  deactivateSearch() {
    this.searchActive = false;
  }
  removeTab(event, item, index) {
    this.layoutService.onTabClose(item, index);
    event.preventDefault();
  }
  get layoutTheme() {
    return this.layoutService.config().layoutTheme;
  }
  get colorScheme() {
    return this.layoutService.config().colorScheme;
  }
  get logo() {
    const logo = 'assets/layout/images/ivf-logo.png';
    return logo;
  }
  get tabs() {
    return this.layoutService.tabs;
  }
  static #_ = this.ɵfac = function AppTopBarComponent_Factory(t) {
    return new (t || AppTopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppTopBarComponent,
    selectors: [["app-topbar"]],
    viewQuery: function AppTopBarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menuButton = _t.first);
      }
    },
    decls: 22,
    vars: 3,
    consts: [[1, "layout-topbar"], ["routerLink", "/", 1, "app-logo"], ["alt", "app logo", 3, "src"], [1, "app-name"], ["type", "button", 1, "topbar-menubutton", "p-link", 3, "click"], ["menubutton", ""], [1, "topbar-menu", "text-black"], [4, "ngFor", "ngForOf"], [1, "topbar-profile"], ["type", "button", "pStyleClass", "@next", "enterClass", "hidden", "enterActiveClass", "scalein", "leaveToClass", "hidden", "leaveActiveClass", "fadeout", 1, "topbar-profile-button", "p-link", 3, "hideOnOutsideClick"], [1, "pi", "pi-angle-down"], [1, "list-none", "p-3", "m-0", "border-round", "shadow-2", "hidden", "absolute", "surface-overlay", "origin-top", "w-full", "sm:w-12rem", "mt-2", "right-0", "top-auto"], ["pRipple", "", 1, "flex", "p-2", "border-round", "align-items-center", "hover:surface-hover", "transition-colors", "transition-duration-150", "cursor-pointer"], ["routerLinkActive", "active-route", 3, "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"]],
    template: function AppTopBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Verona");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_5_listener() {
          return ctx.onMenuButtonClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppTopBarComponent_li_9_Template, 4, 11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " EN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 11)(15, "li")(16, "a", 12)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Japanese");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hideOnOutsideClick", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_styleclass__WEBPACK_IMPORTED_MODULE_4__.StyleClass, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1111:
/*!*******************************************************!*\
  !*** ./src/app/layout/config/app.config.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigComponent: () => (/* binding */ AppConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 43859);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.menu.service */ 60704);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputswitch */ 81763);









function AppConfigComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Menu Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 22)(4, "div", 23)(5, "p-radioButton", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_3_Template_p_radioButton_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 26)(9, "p-radioButton", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_3_Template_p_radioButton_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Overlay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 23)(13, "p-radioButton", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_3_Template_p_radioButton_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Slim");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 26)(17, "p-radioButton", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_3_Template_p_radioButton_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Slim +");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "hr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.menuMode);
  }
}
function AppConfigComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Layout Theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 33)(4, "p-radioButton", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_15_Template_p_radioButton_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.menuTheme = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Color Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 33)(8, "p-radioButton", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_15_Template_p_radioButton_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.menuTheme = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Primary Color (Light Only)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.menuTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.menuTheme)("disabled", ctx_r1.colorScheme === "dark");
  }
}
function AppConfigComponent_div_19_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 40);
  }
}
const _c0 = (a0, a1) => ({
  "background-color": a0,
  "color": a1
});
function AppConfigComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_div_19_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const theme_r12 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.changeTheme(theme_r12.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppConfigComponent_div_19_i_2_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const theme_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r2.colorScheme === "light" ? theme_r12.lightColor : theme_r12.darkColor, ctx_r2.colorScheme === "light" ? "#ffffff" : "#000000"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentTheme === theme_r12.name);
  }
}
const _c1 = a0 => ({
  "text-primary-500": a0
});
function AppConfigComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 41);
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c1, s_r16 === ctx_r3.scale));
  }
}
class AppConfigComponent {
  get currentTheme() {
    return this.layoutService.config().theme;
  }
  set currentTheme(_val) {
    this.layoutService.config.update(config => ({
      ...config,
      theme: _val
    }));
  }
  get colorScheme() {
    return this.layoutService.config().colorScheme;
  }
  set colorScheme(_val) {
    if (_val == 'dark') {
      this.layoutService.config.update(config => ({
        ...config,
        layoutTheme: 'colorScheme'
      }));
    }
    this.layoutService.config.update(config => ({
      ...config,
      colorScheme: _val
    }));
  }
  get visible() {
    return this.layoutService.state.configSidebarVisible;
  }
  set visible(_val) {
    this.layoutService.state.configSidebarVisible = _val;
  }
  get scale() {
    return this.layoutService.config().scale;
  }
  set scale(_val) {
    this.layoutService.config.update(config => ({
      ...config,
      scale: _val
    }));
  }
  get menuTheme() {
    return this.layoutService.config().layoutTheme;
  }
  set menuTheme(_val) {
    this.layoutService.config.update(config => ({
      ...config,
      layoutTheme: _val
    }));
  }
  get menuMode() {
    return this.layoutService.config().menuMode;
  }
  set menuMode(_val) {
    this.layoutService.config.update(config => ({
      ...config,
      menuMode: _val
    }));
    if (this.layoutService.isSlimPlus() || this.layoutService.isSlim()) {
      this.menuService.reset();
    }
  }
  get inputStyle() {
    return this.layoutService.config().inputStyle;
  }
  set inputStyle(_val) {
    this.layoutService.config.update(config => ({
      ...config,
      inputStyle: _val
    }));
  }
  get ripple() {
    return this.layoutService.config().ripple;
  }
  set ripple(_val) {
    this.layoutService.config.update(config => ({
      ...config,
      menuTheme: _val
    }));
  }
  constructor(layoutService, menuService) {
    this.layoutService = layoutService;
    this.menuService = menuService;
    this.minimal = false;
    this.componentThemes = [];
    this.scales = [12, 13, 14, 15, 16];
  }
  ngOnInit() {
    this.componentThemes = [{
      name: 'indigo',
      lightColor: '#4C63B6',
      darkColor: '#6A7EC2'
    }, {
      name: 'blue',
      lightColor: '#1992D4',
      darkColor: '#3BABE8'
    }, {
      name: 'green',
      lightColor: '#27AB83',
      darkColor: '#44D4A9'
    }, {
      name: 'deeppurple',
      lightColor: '#896FF4',
      darkColor: '#B1A0F8'
    }, {
      name: 'orange',
      lightColor: '#DE911D',
      darkColor: '#E8AB4F'
    }, {
      name: 'cyan',
      lightColor: '#00B9C6',
      darkColor: '#58CDD5'
    }, {
      name: 'yellow',
      lightColor: '#F9C404',
      darkColor: '#FDDD68'
    }, {
      name: 'pink',
      lightColor: '#C74B95',
      darkColor: '#D77FB4'
    }, {
      name: 'purple',
      lightColor: '#BA6FF4',
      darkColor: '#D1A0F8'
    }, {
      name: 'lime',
      lightColor: '#84BD20',
      darkColor: '#A3D44E'
    }];
  }
  changeTheme(theme) {
    this.currentTheme = theme;
  }
  isIE() {
    return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  decrementScale() {
    this.scale--;
  }
  incrementScale() {
    this.scale++;
  }
  static #_ = this.ɵfac = function AppConfigComponent_Factory(t) {
    return new (t || AppConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppConfigComponent,
    selectors: [["app-config"]],
    inputs: {
      minimal: "minimal"
    },
    decls: 41,
    vars: 13,
    consts: [["type", "button", 1, "layout-config-button", "p-link", 2, "cursor", "pointer", 3, "click"], [1, "pi", "pi-cog"], ["position", "right", "styleClass", "layout-config-sidebar w-18rem", 3, "visible", "transitionOptions", "visibleChange"], [4, "ngIf"], [1, "flex"], [1, "field-radiobutton", "flex-1"], ["name", "colorScheme", "value", "light", "inputId", "scheme1", 3, "ngModel", "ngModelChange"], ["for", "scheme1"], ["name", "colorScheme", "value", "dark", "inputId", "scheme2", 3, "ngModel", "ngModelChange"], ["for", "scheme2"], [1, "flex", "flex-wrap", "gap-3"], [4, "ngFor", "ngForOf"], [1, "flex", "align-items-center"], ["icon", "pi pi-minus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "mr-2", 3, "disabled", "click"], [1, "flex", "gap-3", "align-items-center"], ["class", "pi pi-circle-fill text-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["icon", "pi pi-plus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "ml-2", 3, "disabled", "click"], ["name", "inputStyle", "value", "outlined", "inputId", "inputStyle1", 3, "ngModel", "ngModelChange"], ["for", "inputStyle1"], ["name", "inputStyle", "value", "filled", "inputId", "inputStyle2", 3, "ngModel", "ngModelChange"], ["for", "inputStyle2"], [3, "ngModel", "ngModelChange"], [1, "flex", "flex-wrap", "row-gap-3"], [1, "flex", "align-items-center", "gap-2", "w-6"], ["name", "menuMode", "value", "static", "inputId", "mode1", 3, "ngModel", "ngModelChange"], ["for", "mode1"], [1, "flex", "align-items-center", "gap-2", "w-6", "pl-2"], ["name", "menuMode", "value", "overlay", "inputId", "mode2", 3, "ngModel", "ngModelChange"], ["for", "mode2"], ["name", "menuMode", "value", "slim", "inputId", "mode3", 3, "ngModel", "ngModelChange"], ["for", "mode3"], ["name", "menuMode", "value", "slim-plus", "inputId", "mode4", 3, "ngModel", "ngModelChange"], [1, "surface-border"], [1, "field-radiobutton"], ["name", "menuTheme", "value", "colorScheme", "inputId", "menutheme-colorscheme", 3, "ngModel", "ngModelChange"], ["for", "menutheme-colorscheme"], ["name", "menuTheme", "value", "primaryColor", "inputId", "menutheme-primarycolor", 3, "ngModel", "disabled", "ngModelChange"], ["for", "menutheme-primarycolor"], [1, "inline-flex", "justify-content-center", "align-items-center", "w-2rem", "h-2rem", "border-round", 2, "cursor", "pointer", 3, "ngStyle", "click"], ["class", "pi pi-check", 4, "ngIf"], [1, "pi", "pi-check"], [1, "pi", "pi-circle-fill", "text-300", 3, "ngClass"]],
    template: function AppConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_0_listener() {
          return ctx.onConfigButtonClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppConfigComponent_Template_p_sidebar_visibleChange_2_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppConfigComponent_ng_container_3_Template, 21, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Color Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "p-radioButton", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_8_listener($event) {
          return ctx.colorScheme = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "p-radioButton", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_12_listener($event) {
          return ctx.colorScheme = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AppConfigComponent_ng_container_15_Template, 11, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AppConfigComponent_div_19_Template, 3, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12)(23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_23_listener() {
          return ctx.decrementScale();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AppConfigComponent_i_25_Template, 1, 3, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_26_listener() {
          return ctx.incrementScale();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Input Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4)(30, "div", 5)(31, "p-radioButton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_31_listener($event) {
          return ctx.inputStyle = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Outlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 5)(35, "p-radioButton", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_35_listener($event) {
          return ctx.inputStyle = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Ripple Effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p-inputSwitch", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_inputSwitch_ngModelChange_40_listener($event) {
          return ctx.ripple = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visible)("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.colorScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.colorScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.componentThemes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.scales);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.inputStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.inputStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ripple);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__.RadioButton, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__.InputSwitch],
    encapsulation: 2
  });
}

/***/ }),

/***/ 92913:
/*!************************************************!*\
  !*** ./src/app/layout/config/config.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigModule: () => (/* binding */ AppConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputswitch */ 81763);
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config.component */ 1111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);








class AppConfigModule {
  static #_ = this.ɵfac = function AppConfigModule_Factory(t) {
    return new (t || AppConfigModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppConfigModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppConfigModule, {
    declarations: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule],
    exports: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent]
  });
})();

/***/ }),

/***/ 43859:
/*!******************************************************!*\
  !*** ./src/app/layout/service/app.layout.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutService: () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);



class LayoutService {
  constructor() {
    this._config = {
      ripple: false,
      inputStyle: 'outlined',
      menuMode: 'slim',
      colorScheme: 'light',
      theme: 'indigo',
      layoutTheme: 'colorScheme',
      scale: 14
    };
    this.config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(this._config);
    this.state = {
      staticMenuDesktopInactive: false,
      overlayMenuActive: false,
      profileSidebarVisible: false,
      configSidebarVisible: false,
      staticMenuMobileActive: false,
      menuHoverActive: false
    };
    this.tabs = [{
      label: 'Visa Services',
      icon: 'pi pi-home'
    }, {
      label: 'General Information',
      icon: 'pi pi-star'
    }, {
      label: 'Additional Services',
      icon: 'pi pi-star'
    }, {
      label: 'News and Updates Services',
      icon: 'pi pi-star'
    }, {
      label: 'Track Application',
      icon: 'pi pi-star'
    }, {
      label: "FAQ's",
      icon: 'pi pi-star'
    }];
    this.configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.overlayOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.tabOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.tabClose = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.configUpdate$ = this.configUpdate.asObservable();
    this.overlayOpen$ = this.overlayOpen.asObservable();
    this.tabOpen$ = this.tabOpen.asObservable();
    this.tabClose$ = this.tabClose.asObservable();
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const config = this.config();
      if (this.updateStyle(config)) {
        this.changeTheme();
      }
      this.changeScale(config.scale);
      this.onConfigUpdate();
    });
  }
  updateStyle(config) {
    return config.theme !== this._config.theme || config.colorScheme !== this._config.colorScheme;
  }
  changeTheme() {
    const config = this.config();
    const themeLink = document.getElementById('theme-link');
    const themeLinkHref = themeLink.getAttribute('href');
    const newHref = themeLinkHref.split('/').map(el => el == this._config.theme ? el = config.theme : el == `theme-${this._config.colorScheme}` ? el = `theme-${config.colorScheme}` : el).join('/');
    this.replaceThemeLink(newHref);
  }
  replaceThemeLink(href) {
    const id = 'theme-link';
    let themeLink = document.getElementById(id);
    const cloneLinkElement = themeLink.cloneNode(true);
    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');
    themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);
    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
    });
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  onOverlaySubmenuOpen() {
    this.overlayOpen.next(null);
  }
  showProfileSidebar() {
    this.state.profileSidebarVisible = true;
  }
  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isOverlay() {
    return this.config().menuMode === 'overlay';
  }
  isSlim() {
    return this.config().menuMode === 'slim';
  }
  isSlimPlus() {
    return this.config().menuMode === 'slim-plus';
  }
  isMobile() {
    return !this.isDesktop();
  }
  onConfigUpdate() {
    this._config = {
      ...this.config()
    };
    this.configUpdate.next(this.config());
  }
  onTabOpen(value) {
    this.tabOpen.next(value);
  }
  openTab(value) {
    this.tabs = [...this.tabs, value];
  }
  onTabClose(value, index) {
    this.tabClose.next({
      tab: value,
      index: index
    });
  }
  closeTab(index) {
    this.tabs.splice(index, 1);
    this.tabs = [...this.tabs];
  }
  changeScale(value) {
    document.documentElement.style.fontSize = `${value}px`;
  }
  static #_ = this.ɵfac = function LayoutService_Factory(t) {
    return new (t || LayoutService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LayoutService,
    factory: LayoutService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 45516:
/*!*****************************************************!*\
  !*** ./src/environments/environment.development.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  cmsBaseUrl: 'https://usable-sharing-154ca913c3.strapiapp.com/',
  cmsApiUrl: 'https://usable-sharing-154ca913c3.strapiapp.com/api'
};

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);


// import {environment} from "./environments/environment";
// import {enableProdMode} from "@angular/core";
// if (environment.production) {
//   enableProdMode();
// }
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map