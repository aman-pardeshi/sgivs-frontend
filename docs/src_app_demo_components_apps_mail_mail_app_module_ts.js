"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_apps_mail_mail_app_module_ts"],{

/***/ 8603:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-archive/mail-archive.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailArchiveComponent: () => (/* binding */ MailArchiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail-table/mail-table.component */ 61178);



class MailArchiveComponent {
  constructor(mailService) {
    this.mailService = mailService;
    this.archivedMails = [];
    this.subscription = this.mailService.mails$.subscribe(data => {
      this.archivedMails = data.filter(d => d.archived);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MailArchiveComponent_Factory(t) {
    return new (t || MailArchiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailArchiveComponent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [[3, "mails"]],
    template: function MailArchiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mail-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mails", ctx.archivedMails);
      }
    },
    dependencies: [_mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__.MailTableComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 89726:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-compose/mail-compose.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailComposeComponent: () => (/* binding */ MailComposeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/mail.service */ 50045);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/editor */ 12435);










const _c0 = () => ({
  "height": "250px"
});
class MailComposeComponent {
  constructor(messageService, location, router, mailService) {
    this.messageService = messageService;
    this.location = location;
    this.router = router;
    this.mailService = mailService;
    this.newMail = {
      id: '',
      to: '',
      email: '',
      image: '',
      title: '',
      message: '',
      date: '',
      important: false,
      starred: false,
      trash: false,
      spam: false,
      archived: false,
      sent: true
    };
  }
  sendMail() {
    if (this.newMail.message) {
      this.newMail.id = Math.floor(Math.random() * 1000);
      this.mailService.onSend(this.newMail);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Mail sent'
      });
      this.router.navigate(['apps/mail/inbox']);
    }
  }
  goBack() {
    this.location.back();
  }
  static #_ = this.ɵfac = function MailComposeComponent_Factory(t) {
    return new (t || MailComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MailComposeComponent,
    selectors: [["ng-component"]],
    decls: 21,
    vars: 6,
    consts: [[1, "flex", "align-items-center", "px-4", "md:px-0", "border-top-1", "surface-border", "md:border-none", "pt-4", "md:pt-0"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-chevron-left", 1, "p-button-outlined", "p-button-secondary", "surface-border", "text-900", "w-3rem", "h-3rem", "mr-3", 3, "click"], [1, "block", "text-900", "font-bold", "text-xl"], [1, "surface-section", "grid", "mt-4", "grid-nogutter", "formgrid", "p-4", "gap-3", "md:surface-border", "md:border-1", "border-round"], [1, "col-12", "field"], ["for", "to", 1, "text-900", "font-semibold"], [1, "p-input-icon-left", "w-full", 2, "height", "3.5rem"], [1, "pi", "pi-user", 2, "left", "1.5rem"], ["id", "to", "type", "text", "pInputText", "", 1, "w-full", "pl-7", "text-900", "font-semibold", 2, "height", "3.5rem", 3, "ngModel", "ngModelChange"], ["for", "Subject", 1, "text-900", "font-semibold"], [1, "pi", "pi-pencil", 2, "left", "1.5rem"], ["id", "subject", "type", "text", "pInputText", "", "placeholder", "Subject", 1, "w-full", "pl-7", "text-900", "font-semibold", 2, "height", "3.5rem", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [1, "col-12", "flex", "column-gap-3", "justify-content-end"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-send", "label", "Send Message", 1, "p-button-primary", "h-3rem", "w-full", "sm:w-auto", 3, "click"]],
    template: function MailComposeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailComposeComponent_Template_button_click_1_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Compose Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MailComposeComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.newMail.to = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MailComposeComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.newMail.title = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4)(18, "p-editor", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MailComposeComponent_Template_p_editor_ngModelChange_18_listener($event) {
          return ctx.newMail.message = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailComposeComponent_Template_button_click_20_listener() {
          return ctx.sendMail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newMail.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newMail.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newMail.message);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_editor__WEBPACK_IMPORTED_MODULE_9__.Editor],
    encapsulation: 2
  });
}

/***/ }),

/***/ 97714:
/*!********************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-detail/mail-detail.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailDetailComponent: () => (/* binding */ MailDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/mail.service */ 50045);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/editor */ 12435);











function MailDetailComponent_div_0_p_avatar_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-avatar", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", "assets/demo/images/avatar/" + ctx_r1.mail.image);
  }
}
const _c0 = () => ({
  "height": "250px"
});
function MailDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailDetailComponent_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MailDetailComponent_div_0_p_avatar_4_Template, 1, 1, "p-avatar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "button", 10)(14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p-editor", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MailDetailComponent_div_0_Template_p_editor_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.newMail.message = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "button", 17)(22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailDetailComponent_div_0_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.sendMail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.mail && ctx_r0.mail.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mail.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("To: ", ctx_r0.mail.email || ctx_r0.mail.to, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mail.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mail.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.mail.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.newMail.message);
  }
}
class MailDetailComponent {
  constructor(route, mailService, location, router, messageService) {
    this.route = route;
    this.mailService = mailService;
    this.location = location;
    this.router = router;
    this.messageService = messageService;
    this.newMail = {
      id: '',
      to: '',
      email: '',
      image: '',
      title: '',
      message: '',
      date: '',
      important: false,
      starred: false,
      trash: false,
      spam: false,
      archived: false,
      sent: true
    };
    this.mail = {};
    this.subscription = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(params => {
      this.id = params['id'];
      return this.mailService.mails$;
    })).subscribe(data => {
      this.mail = data.filter(d => d.id == this.id)[0];
    });
  }
  goBack() {
    this.location.back();
  }
  sendMail() {
    if (this.newMail.message) {
      this.newMail.to = this.mail.from ? this.mail.from : this.mail.to;
      this.newMail.image = this.mail.image;
      this.mailService.onSend(this.newMail);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Mail sent'
      });
      this.router.navigate(['apps/mail/inbox']);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MailDetailComponent_Factory(t) {
    return new (t || MailDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MailDetailComponent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "flex", "flex-column", "md:flex-row", "md:align-items-center", "md:justify-content-between", "mb-5", "pt-5", "md:pt-0", "gap-4", "md:border-top-none", "border-top-1", "surface-border"], [1, "flex", "align-items-center", "md:justify-content-start"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-chevron-left", 1, "p-button-text", "p-button-plain", "md:mr-3", 3, "click"], ["size", "large", "shape", "circle", "styleClass", "border-2 surface-border", 3, "image", 4, "ngIf"], [1, "flex", "flex-column", "mx-3"], [1, "block", "text-900", "font-bold", "text-lg"], [1, "block", "text-900", "font-semibold"], [1, "flex", "align-items-center", "justify-content-end", "column-gap-3", "px-4", "md:px-0"], [1, "text-900", "font-semibold", "white-space-nowrap", "mr-auto"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-reply", 1, "p-button-text", "p-button-plain", "flex-shrink-0"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-text", "p-button-plain", "flex-shrink-0"], [1, "surface-border", "border-1", "border-round", "p-4"], [1, "text-900", "font-semibold", "text-lg", "mb-3"], [1, "line-height-3", "mt-0", "mb-3", 3, "innerHTML"], [3, "ngModel", "ngModelChange"], [1, "flex", "column-gap-3", "justify-content-end", "mt-3"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-image", 1, "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-paperclip", 1, "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-send", "label", "Send", 1, "p-button-primary", 3, "click"], ["size", "large", "shape", "circle", "styleClass", "border-2 surface-border", 3, "image"]],
    template: function MailDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MailDetailComponent_div_0_Template, 24, 10, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.Avatar, primeng_editor__WEBPACK_IMPORTED_MODULE_10__.Editor],
    encapsulation: 2
  });
}

/***/ }),

/***/ 77771:
/*!**************************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-important/mail-important.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailImportantComponent: () => (/* binding */ MailImportantComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail-table/mail-table.component */ 61178);



class MailImportantComponent {
  constructor(mailService) {
    this.mailService = mailService;
    this.importantMails = [];
    this.subscription = this.mailService.mails$.subscribe(data => {
      this.importantMails = data.filter(d => d.important && !d.spam && !d.trash && !d.archived);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MailImportantComponent_Factory(t) {
    return new (t || MailImportantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailImportantComponent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [[3, "mails"]],
    template: function MailImportantComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mail-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mails", ctx.importantMails);
      }
    },
    dependencies: [_mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__.MailTableComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 51994:
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-inbox/mail-inbox.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailInboxComponent: () => (/* binding */ MailInboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail-table/mail-table.component */ 61178);




class MailInboxComponent {
  constructor(mailService, router) {
    this.mailService = mailService;
    this.router = router;
    this.mails = [];
    this.subscription = this.mailService.mails$.subscribe(data => {
      this.mails = data.filter(d => !d.archived && !d.spam && !d.trash && !d.hasOwnProperty('sent'));
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MailInboxComponent_Factory(t) {
    return new (t || MailInboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailInboxComponent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [[3, "mails"]],
    template: function MailInboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mail-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mails", ctx.mails);
      }
    },
    dependencies: [_mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__.MailTableComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 35193:
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-reply/mail-reply.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailReplyComponent: () => (/* binding */ MailReplyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/mail.service */ 50045);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/editor */ 12435);











function MailReplyComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.content.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
const _c0 = () => ({
  "height": "250px"
});
function MailReplyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MailReplyComponent_div_0_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.content.from = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3)(9, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MailReplyComponent_div_0_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.content.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MailReplyComponent_div_0_div_14_Template, 1, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailReplyComponent_div_0_Template_span_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p-editor", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MailReplyComponent_div_0_Template_p_editor_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.newMail.message = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "button", 17)(21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailReplyComponent_div_0_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.sendMail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.content.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.content.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.displayMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTooltip", ctx_r0.displayMessage ? "Hide content" : "Show content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.newMail.message);
  }
}
class MailReplyComponent {
  constructor(messageService, mailService) {
    this.messageService = messageService;
    this.mailService = mailService;
    this.newMail = {
      id: '',
      to: '',
      email: '',
      image: '',
      title: '',
      message: '',
      date: '',
      important: false,
      starred: false,
      trash: false,
      spam: false,
      archived: false,
      sent: true
    };
    this.displayMessage = false;
    this.content = {};
    this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  sendMail() {
    let {
      image,
      from,
      title
    } = this.content;
    this.newMail = {
      ...this.newMail,
      to: from,
      title: title,
      image: image
    };
    this.mailService.onSend(this.newMail);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Mail sent'
    });
    this.hide.emit();
  }
  toggleMessage() {
    this.displayMessage = !this.displayMessage;
  }
  static #_ = this.ɵfac = function MailReplyComponent_Factory(t) {
    return new (t || MailReplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MailReplyComponent,
    selectors: [["app-mail-reply"]],
    inputs: {
      content: "content"
    },
    outputs: {
      hide: "hide"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "p-0 m-0", 4, "ngIf"], [1, "p-0", "m-0"], [1, "surface-section", "grid", "grid-nogutter", "formgrid", "flex-column", "md:flex-row", "gap-6", "p-5", "border-round"], [1, "col"], ["for", "to", 1, "block", "text-900", "font-semibold", "mb-3"], [1, "p-input-icon-left", "w-full", 2, "height", "3.5rem"], [1, "pi", "pi-user", 2, "left", "1.5rem"], ["id", "to", "type", "text", "pInputText", "", 1, "w-full", "pl-7", "text-900", "font-semibold", 2, "height", "3.5rem", 3, "ngModel", "ngModelChange"], ["for", "Subject", 1, "block", "text-900", "font-semibold", "mb-3"], [1, "pi", "pi-pencil", 2, "left", "1.5rem"], ["id", "subject", "type", "text", "pInputText", "", "placeholder", "Subject", 1, "w-full", "pl-7", "text-900", "font-semibold", 2, "height", "3.5rem", 3, "ngModel", "ngModelChange"], ["class", "border-1 surface-border border-round p-4", 3, "innerHTML", 4, "ngIf"], [1, "col-12", "field"], [1, "surface-ground", "cursor-pointer", "border-round", "px-2", 3, "pTooltip", "click"], [1, "pi", "pi-ellipsis-h"], ["styleClass", "mt-3", 3, "ngModel", "ngModelChange"], [1, "flex", "column-gap-3", "justify-content-end", "p-5", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-image", 1, "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-paperclip", 1, "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-send", "label", "Send", 1, "p-button-primary", "h-3rem", 3, "click"], [1, "border-1", "surface-border", "border-round", "p-4", 3, "innerHTML"]],
    template: function MailReplyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MailReplyComponent_div_0_Template, 23, 8, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_editor__WEBPACK_IMPORTED_MODULE_9__.Editor],
    encapsulation: 2
  });
}

/***/ }),

/***/ 95753:
/*!****************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-sent/mail-sent.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailSentComponent: () => (/* binding */ MailSentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail-table/mail-table.component */ 61178);



class MailSentComponent {
  constructor(mailService) {
    this.mailService = mailService;
    this.sentMails = [];
    this.subscription = this.mailService.mails$.subscribe(data => {
      this.sentMails = data.filter(d => d.sent && !d.trash && !d.archived);
    });
  }
  static #_ = this.ɵfac = function MailSentComponent_Factory(t) {
    return new (t || MailSentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailSentComponent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [[3, "mails"]],
    template: function MailSentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mail-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mails", ctx.sentMails);
      }
    },
    dependencies: [_mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__.MailTableComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8968:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-sidebar/mail-sidebar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailSidebarComponent: () => (/* binding */ MailSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 51339);








function MailSidebarComponent_li_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.badge);
  }
}
const _c0 = (a0, a1) => ({
  "bg-primary": a0,
  "hover:surface-hover": a1
});
const _c1 = a0 => ({
  "text-primary-50": a0
});
function MailSidebarComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailSidebarComponent_li_4_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.navigate(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MailSidebarComponent_li_4_span_4_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, ctx_r0.url === item_r1.routerLink, ctx_r0.url !== item_r1.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r1.icon || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx_r0.url === item_r1.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx_r0.url === item_r1.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.badge);
  }
}
class MailSidebarComponent {
  constructor(router, mailService) {
    this.router = router;
    this.mailService = mailService;
    this.items = [];
    this.url = '';
    this.mailSubscription = this.mailService.mails$.subscribe(data => this.getBadgeValues(data));
    this.routeSubscription = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(params => {
      this.url = params.url;
    });
  }
  navigate(item) {
    if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }
  getBadgeValues(data) {
    let inbox = [],
      starred = [],
      spam = [],
      important = [],
      archived = [],
      trash = [],
      sent = [];
    for (let i = 0; i < data.length; i++) {
      let mail = data[i];
      if (!mail.archived && !mail.trash && !mail.spam && !mail.hasOwnProperty('sent')) {
        inbox.push(mail);
      }
      if (mail.starred && !mail.archived && !mail.trash) {
        starred.push(mail);
      }
      if (mail.spam && !mail.archived && !mail.trash) {
        spam.push(mail);
      }
      if (mail.important && !mail.archived && !mail.trash) {
        important.push(mail);
      }
      if (mail.archived && !mail.trash) {
        archived.push(mail);
      }
      if (mail.trash) {
        trash.push(mail);
      }
      if (mail.sent && !mail.archived && !mail.trash) {
        sent.push(mail);
      }
    }
    this.badgeValues = {
      inbox: inbox.length,
      starred: starred.length,
      spam: spam.length,
      important: important.length,
      archived: archived.length,
      trash: trash.length,
      sent: sent.length
    };
    this.updateSidebar();
  }
  updateSidebar() {
    this.items = [{
      label: 'Inbox',
      icon: 'pi pi-inbox',
      badge: this.badgeValues.inbox,
      routerLink: '/apps/mail/inbox'
    }, {
      label: 'Starred',
      icon: 'pi pi-star',
      badge: this.badgeValues.starred,
      routerLink: '/apps/mail/starred'
    }, {
      label: 'Spam',
      icon: 'pi pi-ban',
      badge: this.badgeValues.spam,
      routerLink: '/apps/mail/spam'
    }, {
      label: 'Important',
      icon: 'pi pi-bookmark',
      badge: this.badgeValues.important,
      routerLink: '/apps/mail/important'
    }, {
      label: 'Sent',
      icon: 'pi pi-send',
      badge: this.badgeValues.sent,
      routerLink: '/apps/mail/sent'
    }, {
      label: 'Archived',
      icon: 'pi pi-book',
      badge: this.badgeValues.archived,
      routerLink: '/apps/mail/archived'
    }, {
      label: 'Trash',
      icon: 'pi pi-trash',
      badge: this.badgeValues.trash,
      routerLink: '/apps/mail/trash'
    }];
  }
  ngOnDestroy() {
    this.mailSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MailSidebarComponent_Factory(t) {
    return new (t || MailSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MailSidebarComponent,
    selectors: [["app-mail-sidebar"]],
    decls: 5,
    vars: 1,
    consts: [["pButton", "", "pRipple", "", "label", "Compose New", "routerLink", "/apps/mail/compose", 1, "mb-5", "w-full", "p-button-outlined"], [1, "overflow-auto"], [1, "flex", "flex-row", "md:flex-column", "gap-1", "md:gap-2", "list-none", "m-0", "p-0", "overflow-auto"], ["pRipple", "", "class", "cursor-pointer select-none p-3 transition-duration-150 border-round flex align-items-center justify-content-center md:justify-content-start md:flex-1 flex-auto", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "cursor-pointer", "select-none", "p-3", "transition-duration-150", "border-round", "flex", "align-items-center", "justify-content-center", "md:justify-content-start", "md:flex-1", "flex-auto", 3, "ngClass", "click"], [1, "md:mr-3", "text-600", "transition-duration-150", "text-lg", 3, "ngClass"], [1, "text-900", "font-medium", "hidden", "md:inline", 3, "ngClass"], ["class", "ml-auto text-sm font-semibold bg-primary-50 text-primary-900 px-2 py-1 hidden md:inline", "style", "border-radius: 2rem", 4, "ngIf"], [1, "ml-auto", "text-sm", "font-semibold", "bg-primary-50", "text-primary-900", "px-2", "py-1", "hidden", "md:inline", 2, "border-radius", "2rem"]],
    template: function MailSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MailSidebarComponent_li_4_Template, 5, 14, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple],
    encapsulation: 2
  });
}

/***/ }),

/***/ 17731:
/*!****************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-spam/mail-spam.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailSpamComponent: () => (/* binding */ MailSpamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail-table/mail-table.component */ 61178);



class MailSpamComponent {
  constructor(mailService) {
    this.mailService = mailService;
    this.spamMails = [];
    this.subscription = this.mailService.mails$.subscribe(data => {
      this.spamMails = data.filter(d => d.spam && !d.archived && !d.trash && !d.hasOwnProperty('sent'));
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MailSpamComponent_Factory(t) {
    return new (t || MailSpamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailSpamComponent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [[3, "mails"]],
    template: function MailSpamComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mail-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mails", ctx.spamMails);
      }
    },
    dependencies: [_mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__.MailTableComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4140:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-starred/mail-starred.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailStarredComponent: () => (/* binding */ MailStarredComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail-table/mail-table.component */ 61178);



class MailStarredComponent {
  constructor(mailService) {
    this.mailService = mailService;
    this.starredMails = [];
    this.subscription = this.mailService.mails$.subscribe(data => {
      this.starredMails = data.filter(d => d.starred && !d.archived && !d.trash);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MailStarredComponent_Factory(t) {
    return new (t || MailStarredComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailStarredComponent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [[3, "mails"]],
    template: function MailStarredComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mail-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mails", ctx.starredMails);
      }
    },
    dependencies: [_mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__.MailTableComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 61178:
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-table/mail-table.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailTableComponent: () => (/* binding */ MailTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var _mail_reply_mail_reply_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail-reply/mail-reply.component */ 35193);














function MailTableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-tableHeaderCheckbox")(3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailTableComponent_ng_template_2_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r3.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-menu", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function MailTableComponent_ng_template_2_Template_input_input_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx_r1.menuItems)("appendTo", _r0)("popup", true);
  }
}
const _c0 = (a0, a1) => ({
  "pi-star-fill": a0,
  "pi-star": a1
});
function MailTableComponent_ng_template_3_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailTableComponent_ng_template_3_td_3_Template_span_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.onStar($event, mail_r7.id));
    })("touchend", function MailTableComponent_ng_template_3_td_3_Template_span_touchend_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onStar($event, mail_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1, _c0, mail_r7.starred, !mail_r7.starred));
  }
}
const _c1 = (a0, a1) => ({
  "pi-bookmark-fill": a0,
  "pi-bookmark": a1
});
function MailTableComponent_ng_template_3_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailTableComponent_ng_template_3_td_4_Template_span_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.onBookmark($event, mail_r7.id));
    })("touchend", function MailTableComponent_ng_template_3_td_4_Template_span_touchend_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.onBookmark($event, mail_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1, _c1, mail_r7.important, !mail_r7.important));
  }
}
function MailTableComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function MailTableComponent_ng_template_3_Template_tr_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.toggleOptions($event, _r11, _r10));
    })("mouseleave", function MailTableComponent_ng_template_3_Template_tr_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.toggleOptions($event, _r11, _r10));
    })("click", function MailTableComponent_ng_template_3_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const mail_r7 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.onRowSelect(mail_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 16)(2, "p-tableCheckbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailTableComponent_ng_template_3_Template_p_tableCheckbox_click_2_listener($event) {
      return $event.stopPropagation();
    })("touchend", function MailTableComponent_ng_template_3_Template_p_tableCheckbox_touchend_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MailTableComponent_ng_template_3_td_3_Template, 3, 4, "td", 18)(4, MailTableComponent_ng_template_3_td_4_Template, 3, 4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "p-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 22)(10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 24)(13, "div", 25)(14, "span", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 28, 29)(19, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailTableComponent_ng_template_3_Template_button_click_19_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const mail_r7 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.onArchive($event, mail_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailTableComponent_ng_template_3_Template_button_click_20_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const mail_r7 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.onReply($event, mail_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailTableComponent_ng_template_3_Template_button_click_21_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const mail_r7 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.onTrash($event, mail_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const mail_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", mail_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !mail_r7.trash && !mail_r7.spam);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !mail_r7.trash && !mail_r7.spam);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("image", mail_r7.image ? "assets/demo/images/avatar/" + mail_r7.image : "assets/layout/images/avatar.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mail_r7.from || mail_r7.to, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mail_r7.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mail_r7.date, " ");
  }
}
const _c2 = () => ["from", "title", "message"];
const _c3 = () => [10, 20, 30];
class MailTableComponent {
  constructor(router, mailService, messageService) {
    this.router = router;
    this.mailService = mailService;
    this.messageService = messageService;
    this.menuItems = [];
    this.selectedMails = [];
    this.mail = {};
    this.dialogVisible = false;
  }
  ngOnInit() {
    this.menuItems = [{
      label: 'Archive',
      icon: 'pi pi-fw pi-file',
      command: () => this.onArchiveMultiple()
    }, {
      label: 'Spam',
      icon: 'pi pi-fw pi-ban',
      command: () => this.onSpamMultiple()
    }, {
      label: 'Delete',
      icon: 'pi pi-fw pi-trash',
      command: () => this.onDeleteMultiple()
    }];
  }
  toggleOptions(event, opt, date) {
    if (event.type === 'mouseenter') {
      opt.style.display = 'flex';
      date.style.display = 'none';
    } else {
      opt.style.display = 'none';
      date.style.display = 'flex';
    }
  }
  onRowSelect(id) {
    this.router.navigate(['/apps/mail/detail/', id]);
  }
  onStar(event, id) {
    event.stopPropagation();
    this.mailService.onStar(id);
  }
  onArchive(event, id) {
    event.stopPropagation();
    this.mailService.onArchive(id);
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Mail archived',
      life: 3000
    });
  }
  onBookmark(event, id) {
    event.stopPropagation();
    this.mailService.onBookmark(id);
  }
  onDelete(id) {
    this.mailService.onDelete(id);
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Mail deleted',
      life: 3000
    });
  }
  onDeleteMultiple() {
    if (this.selectedMails && this.selectedMails.length > 0) {
      this.mailService.onDeleteMultiple(this.selectedMails);
      this.messageService.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Mails deleted',
        life: 3000
      });
    }
  }
  onSpamMultiple() {
    if (this.selectedMails && this.selectedMails.length > 0) {
      this.mailService.onSpamMultiple(this.selectedMails);
      this.messageService.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Moved to spam',
        life: 3000
      });
    }
  }
  onArchiveMultiple() {
    if (this.selectedMails && this.selectedMails.length > 0) {
      this.mailService.onArchiveMultiple(this.selectedMails);
      this.messageService.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Moved to archive',
        life: 3000
      });
    }
  }
  onTrash(event, mail) {
    event.stopPropagation();
    if (mail.trash) {
      this.onDelete(mail.id);
    }
    this.mailService.onTrash(mail.id);
  }
  onReply(event, mail) {
    event.stopPropagation();
    this.mail = mail;
    this.dialogVisible = true;
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, 'contains');
  }
  static #_ = this.ɵfac = function MailTableComponent_Factory(t) {
    return new (t || MailTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailTableComponent,
    selectors: [["app-mail-table"]],
    inputs: {
      mails: "mails"
    },
    decls: 6,
    vars: 13,
    consts: [["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rows", "globalFilterFields", "paginator", "rowsPerPageOptions", "selection", "rowHover", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "body"], ["header", "New Message", "styleClass", "mx-3 sm:mx-0 sm:w-full md:w-8 lg:w-6", "contentStyleClass", "border-round-bottom border-top-1 surface-border p-0", 3, "visible", "closable", "modal", "visibleChange", "onHide"], [3, "content", "hide"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], [1, "flex", "gap-2", "align-items-center"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-refresh", 1, "p-button-rounded", "p-button-text", "p-button-plain", "ml-4"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "p-button-plain", "ml-3", 3, "click"], [3, "model", "appendTo", "popup"], ["menu", ""], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Mail", 1, "w-full", "sm:w-auto", 3, "input"], [1, "cursor-pointer", 3, "mouseenter", "mouseleave", "click"], [1, "pl-3", 2, "width", "4rem"], [3, "value", "click", "touchend"], ["style", "width: 4rem", 4, "ngIf"], [2, "min-width", "4rem"], [3, "image"], [1, "text-900", "font-semibold", 2, "min-width", "12rem"], [2, "min-width", "12rem"], [1, "font-medium", "white-space-nowrap", "overflow-hidden", "text-overflow-ellipsis", "block", 2, "max-width", "30rem"], [2, "min-width", "10rem"], [1, "flex", "justify-content-end", "w-full", "px-0"], [1, "text-700", "font-semibold", "white-space-nowrap"], ["date", ""], [2, "display", "none"], ["options", ""], ["pButton", "", "pRipple", "", "icon", "pi pi-inbox", "pTooltip", "Archive", "tooltipPosition", "top", "type", "button", 1, "h-2rem", "w-2rem", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-reply", "pTooltip", "Reply", "tooltipPosition", "top", "type", "button", 1, "p-button-secondary", "h-2rem", "w-2rem", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "pTooltip", "Trash", "tooltipPosition", "top", "type", "button", 1, "p-button-danger", "h-2rem", "w-2rem", 3, "click"], [2, "width", "4rem"], [1, "cursor-pointer", 3, "click", "touchend"], [1, "pi", "pi-fw", "text-xl", 3, "ngClass"]],
    template: function MailTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function MailTableComponent_Template_p_table_selectionChange_0_listener($event) {
          return ctx.selectedMails = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MailTableComponent_ng_template_2_Template, 10, 3, "ng-template", 2)(3, MailTableComponent_ng_template_3_Template, 22, 7, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-dialog", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function MailTableComponent_Template_p_dialog_visibleChange_4_listener($event) {
          return ctx.dialogVisible = $event;
        })("onHide", function MailTableComponent_Template_p_dialog_onHide_4_listener() {
          return ctx.dialogVisible = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-mail-reply", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("hide", function MailTableComponent_Template_app_mail_reply_hide_5_listener() {
          return ctx.dialogVisible = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.mails)("rows", 10)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c2))("paginator", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c3))("selection", ctx.selectedMails)("rowHover", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.dialogVisible)("closable", true)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.mail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.Menu, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableHeaderCheckbox, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_avatar__WEBPACK_IMPORTED_MODULE_12__.Avatar, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, _mail_reply_mail_reply_component__WEBPACK_IMPORTED_MODULE_1__.MailReplyComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 95239:
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail-trash/mail-trash.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailTrashComponent: () => (/* binding */ MailTrashComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/components/apps/mail/service/mail.service */ 50045);
/* harmony import */ var _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail-table/mail-table.component */ 61178);



class MailTrashComponent {
  constructor(mailService) {
    this.mailService = mailService;
    this.trashMails = [];
    this.subscription = this.mailService.mails$.subscribe(data => {
      this.trashMails = data.filter(d => d.trash);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MailTrashComponent_Factory(t) {
    return new (t || MailTrashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_components_apps_mail_service_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailTrashComponent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [[3, "mails"]],
    template: function MailTrashComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mail-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mails", ctx.trashMails);
      }
    },
    dependencies: [_mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_1__.MailTableComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 14352:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail.app-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailAppRoutingModule: () => (/* binding */ MailAppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _mail_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail.app.component */ 13416);
/* harmony import */ var _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail-inbox/mail-inbox.component */ 51994);
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ 89726);
/* harmony import */ var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail-detail/mail-detail.component */ 97714);
/* harmony import */ var _mail_archive_mail_archive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail-archive/mail-archive.component */ 8603);
/* harmony import */ var _mail_important_mail_important_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail-important/mail-important.component */ 77771);
/* harmony import */ var _mail_sent_mail_sent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-sent/mail-sent.component */ 95753);
/* harmony import */ var _mail_spam_mail_spam_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail-spam/mail-spam.component */ 17731);
/* harmony import */ var _mail_starred_mail_starred_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-starred/mail-starred.component */ 4140);
/* harmony import */ var _mail_trash_mail_trash_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-trash/mail-trash.component */ 95239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);













class MailAppRoutingModule {
  static #_ = this.ɵfac = function MailAppRoutingModule_Factory(t) {
    return new (t || MailAppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: MailAppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([{
      path: '',
      component: _mail_app_component__WEBPACK_IMPORTED_MODULE_0__.MailAppComponent,
      children: [{
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
      }, {
        path: 'inbox',
        data: {
          breadcrumb: 'Inbox'
        },
        component: _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_1__.MailInboxComponent
      }, {
        path: 'detail/:id',
        data: {
          breadcrumb: 'Detail'
        },
        component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_3__.MailDetailComponent
      }, {
        path: 'compose',
        data: {
          breadcrumb: 'Compose'
        },
        component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_2__.MailComposeComponent
      }, {
        path: 'archived',
        data: {
          breadcrumb: 'Archived'
        },
        component: _mail_archive_mail_archive_component__WEBPACK_IMPORTED_MODULE_4__.MailArchiveComponent
      }, {
        path: 'important',
        data: {
          breadcrumb: 'Important'
        },
        component: _mail_important_mail_important_component__WEBPACK_IMPORTED_MODULE_5__.MailImportantComponent
      }, {
        path: 'sent',
        data: {
          breadcrumb: 'Sent'
        },
        component: _mail_sent_mail_sent_component__WEBPACK_IMPORTED_MODULE_6__.MailSentComponent
      }, {
        path: 'spam',
        data: {
          breadcrumb: 'Spam'
        },
        component: _mail_spam_mail_spam_component__WEBPACK_IMPORTED_MODULE_7__.MailSpamComponent
      }, {
        path: 'starred',
        data: {
          breadcrumb: 'Starred'
        },
        component: _mail_starred_mail_starred_component__WEBPACK_IMPORTED_MODULE_8__.MailStarredComponent
      }, {
        path: 'trash',
        data: {
          breadcrumb: 'Trash'
        },
        component: _mail_trash_mail_trash_component__WEBPACK_IMPORTED_MODULE_9__.MailTrashComponent
      }]
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MailAppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 13416:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail.app.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailAppComponent: () => (/* binding */ MailAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail-sidebar/mail-sidebar.component */ 8968);




class MailAppComponent {
  static #_ = this.ɵfac = function MailAppComponent_Factory(t) {
    return new (t || MailAppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MailAppComponent,
    selectors: [["ng-component"]],
    decls: 7,
    vars: 0,
    consts: [[1, "card"], [1, "flex", "flex-column", "md:flex-row", "gap-4"], [1, "w-full", "md:w-3", "xl:w-2", "xl:p-3"], [1, "md:w-9", "xl:w-10", "xl:p-3"]],
    template: function MailAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-mail-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast, _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.MailSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 45057:
/*!**************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/mail.app.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailAppModule: () => (/* binding */ MailAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _mail_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail.app-routing.module */ 14352);
/* harmony import */ var _mail_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.app.component */ 13416);
/* harmony import */ var _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-inbox/mail-inbox.component */ 51994);
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ 89726);
/* harmony import */ var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail-detail/mail-detail.component */ 97714);
/* harmony import */ var _mail_reply_mail_reply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail-reply/mail-reply.component */ 35193);
/* harmony import */ var _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-sidebar/mail-sidebar.component */ 8968);
/* harmony import */ var _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail-table/mail-table.component */ 61178);
/* harmony import */ var _mail_archive_mail_archive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-archive/mail-archive.component */ 8603);
/* harmony import */ var _mail_important_mail_important_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-important/mail-important.component */ 77771);
/* harmony import */ var _mail_sent_mail_sent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mail-sent/mail-sent.component */ 95753);
/* harmony import */ var _mail_spam_mail_spam_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mail-spam/mail-spam.component */ 17731);
/* harmony import */ var _mail_starred_mail_starred_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mail-starred/mail-starred.component */ 4140);
/* harmony import */ var _mail_trash_mail_trash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mail-trash/mail-trash.component */ 95239);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/checkbox */ 11580);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/editor */ 12435);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _service_mail_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/mail.service */ 50045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);






























class MailAppModule {
  static #_ = this.ɵfac = function MailAppModule_Factory(t) {
    return new (t || MailAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: MailAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    providers: [primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService, _service_mail_service__WEBPACK_IMPORTED_MODULE_14__.MailService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _mail_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.MailAppRoutingModule, primeng_menu__WEBPACK_IMPORTED_MODULE_19__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_21__.RippleModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__.InputTextModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_24__.CheckboxModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_25__.AvatarModule, primeng_editor__WEBPACK_IMPORTED_MODULE_26__.EditorModule, primeng_toast__WEBPACK_IMPORTED_MODULE_27__.ToastModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_29__.DialogModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](MailAppModule, {
    declarations: [_mail_app_component__WEBPACK_IMPORTED_MODULE_1__.MailAppComponent, _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_2__.MailInboxComponent, _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_3__.MailComposeComponent, _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_4__.MailDetailComponent, _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.MailSidebarComponent, _mail_reply_mail_reply_component__WEBPACK_IMPORTED_MODULE_5__.MailReplyComponent, _mail_table_mail_table_component__WEBPACK_IMPORTED_MODULE_7__.MailTableComponent, _mail_archive_mail_archive_component__WEBPACK_IMPORTED_MODULE_8__.MailArchiveComponent, _mail_important_mail_important_component__WEBPACK_IMPORTED_MODULE_9__.MailImportantComponent, _mail_sent_mail_sent_component__WEBPACK_IMPORTED_MODULE_10__.MailSentComponent, _mail_spam_mail_spam_component__WEBPACK_IMPORTED_MODULE_11__.MailSpamComponent, _mail_starred_mail_starred_component__WEBPACK_IMPORTED_MODULE_12__.MailStarredComponent, _mail_trash_mail_trash_component__WEBPACK_IMPORTED_MODULE_13__.MailTrashComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _mail_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.MailAppRoutingModule, primeng_menu__WEBPACK_IMPORTED_MODULE_19__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_21__.RippleModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__.InputTextModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_24__.CheckboxModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_25__.AvatarModule, primeng_editor__WEBPACK_IMPORTED_MODULE_26__.EditorModule, primeng_toast__WEBPACK_IMPORTED_MODULE_27__.ToastModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_29__.DialogModule]
  });
})();

/***/ }),

/***/ 50045:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/apps/mail/service/mail.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailService: () => (/* binding */ MailService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class MailService {
  constructor(http) {
    this.http = http;
    this._mails = [];
    this.mails = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this._mails);
    this.mails$ = this.mails.asObservable();
    this.http.get('assets/demo/data/mail.json').toPromise().then(res => res.data).then(data => {
      this.updateMails(data);
    });
  }
  updateMails(data) {
    this._mails = data;
    this.mails.next(data);
  }
  onStar(id) {
    this._mails = this._mails.map(m => m.id === id ? {
      ...m,
      starred: !m.starred
    } : m);
    this.mails.next(this._mails);
  }
  onArchive(id) {
    this._mails = this._mails.map(m => m.id === id ? {
      ...m,
      archived: !m.archived
    } : m);
    this.mails.next(this._mails);
  }
  onBookmark(id) {
    this._mails = this._mails.map(m => m.id === id ? {
      ...m,
      important: !m.important
    } : m);
    this.mails.next(this._mails);
  }
  onDelete(id) {
    this._mails = this._mails.filter(m => m.id !== id);
    this.mails.next(this._mails);
  }
  onDeleteMultiple(mails) {
    let idArray = mails.map(m => Number(m.id));
    this._mails = this._mails.filter(m => idArray.indexOf(m.id) == -1);
    this.mails.next(this._mails);
  }
  onArchiveMultiple(mails) {
    let idArray = mails.map(m => m.id);
    for (let i = 0; i < this._mails.length; i++) {
      let mail = this._mails[i];
      if (idArray.indexOf(mail.id) !== -1) {
        mail.archived = true;
        this._mails[i] = mail;
      }
    }
    this.mails.next(this._mails);
  }
  onSpamMultiple(mails) {
    let idArray = mails.map(m => m.id);
    for (let i = 0; i < this._mails.length; i++) {
      let mail = this._mails[i];
      if (idArray.indexOf(mail.id) !== -1) {
        mail = {
          ...mail,
          spam: true,
          important: false,
          starred: false,
          archived: false
        };
        this._mails[i] = mail;
      }
    }
    this.mails.next(this._mails);
  }
  onTrash(id) {
    this._mails = this._mails.map(m => m.id === id ? {
      ...m,
      trash: true
    } : m);
    this.mails.next(this._mails);
  }
  onSend(mail) {
    if (!mail.id) {
      mail.id = this.generateId();
    }
    if (!mail.title) {
      mail.title = 'Untitled';
    }
    mail.date = this.generateDate();
    this._mails.push(mail);
    this.mails.next(this._mails);
  }
  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  generateDate() {
    return new Date().toDateString().split(' ').slice(1, 4).join(' ');
  }
  static #_ = this.ɵfac = function MailService_Factory(t) {
    return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MailService,
    factory: MailService.ɵfac
  });
}

/***/ }),

/***/ 87889:
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-avatar.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* binding */ Avatar),
/* harmony export */   AvatarModule: () => (/* binding */ AvatarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);





/**
 * Avatar represents people using icons, labels and images.
 * @group Components
 */
function Avatar_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
function Avatar_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-avatar-icon");
  }
}
function Avatar_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Avatar_ng_template_3_span_0_Template, 1, 3, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.icon)("ngIfElse", _r4);
  }
}
function Avatar_ng_template_5_img_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function Avatar_ng_template_5_img_0_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.imageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r6.ariaLabel);
  }
}
function Avatar_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Avatar_ng_template_5_img_0_Template, 1, 2, "img", 7);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.image);
  }
}
const _c0 = ["*"];
class Avatar {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Size of the element.
   * @group Props
   */
  size = 'normal';
  /**
   * Shape of the element.
   * @group Props
   */
  shape = 'square';
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Establishes a string value that labels the component.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  containerClass() {
    return {
      'p-avatar p-component': true,
      'p-avatar-image': this.image != null,
      'p-avatar-circle': this.shape === 'circle',
      'p-avatar-lg': this.size === 'large',
      'p-avatar-xl': this.size === 'xlarge'
    };
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  static ɵfac = function Avatar_Factory(t) {
    return new (t || Avatar)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Avatar,
    selectors: [["p-avatar"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      size: "size",
      shape: "shape",
      style: "style",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onImageError: "onImageError"
    },
    ngContentSelectors: _c0,
    decls: 7,
    vars: 9,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-avatar-text", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["imageTemplate", ""], [1, "p-avatar-text"], [3, "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass"], [3, "src", "error", 4, "ngIf"], [3, "src", "error"]],
    template: function Avatar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Avatar_span_2_Template, 2, 1, "span", 1)(3, Avatar_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, Avatar_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("data-pc-name", "avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Avatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-avatar',
      template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-label]="ariaLabel" [attr.data-pc-name]="'avatar'">
            <ng-content></ng-content>
            <span class="p-avatar-text" *ngIf="label; else iconTemplate">{{ label }}</span>
            <ng-template #iconTemplate><span [class]="icon" [ngClass]="'p-avatar-icon'" *ngIf="icon; else imageTemplate"></span></ng-template>
            <ng-template #imageTemplate><img [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" /></ng-template>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}\n"]
    }]
  }], null, {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    image: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onImageError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class AvatarModule {
  static ɵfac = function AvatarModule_Factory(t) {
    return new (t || AvatarModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AvatarModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [Avatar],
      declarations: [Avatar]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_apps_mail_mail_app_module_ts.js.map