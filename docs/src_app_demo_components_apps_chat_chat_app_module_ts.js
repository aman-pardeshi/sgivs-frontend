"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_apps_chat_chat_app_module_ts"],{

/***/ 86874:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/apps/chat/chat-box/chat-box.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatBoxComponent: () => (/* binding */ ChatBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/chat.service */ 46895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/overlaypanel */ 17830);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);









function ChatBoxComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26)(4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", ctx_r5.user.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.parseDate(message_r4.createdAt));
  }
}
function ChatBoxComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "div", 31)(2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r6.parseDate(message_r4.createdAt), " ");
  }
}
function ChatBoxComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatBoxComponent_div_15_div_1_Template, 11, 4, "div", 22)(2, ChatBoxComponent_div_15_div_2_Template, 7, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r4.ownerId !== 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r4.ownerId === ctx_r1.defaultUserId);
  }
}
function ChatBoxComponent_ng_template_24_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatBoxComponent_ng_template_24_button_0_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const emoji_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
      _r2.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.onEmojiSelect(emoji_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const emoji_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", emoji_r10);
  }
}
function ChatBoxComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChatBoxComponent_ng_template_24_button_0_Template, 1, 1, "button", 33);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.emojis);
  }
}
const _c0 = (a0, a1, a2) => ({
  "bg-green-400": a0,
  "bg-red-400": a1,
  "bg-yellow-400": a2
});
class ChatBoxComponent {
  constructor(chatService) {
    this.chatService = chatService;
    this.defaultUserId = 123;
    this.textContent = '';
    this.uploadedFiles = [];
    this.emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '🤪', '😜', '😝', '😛', '🤑', '😎', '🤓', '🧐', '🤠', '🥳', '🤗', '🤡', '😏', '😶', '😐', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🤥', '😳', '😞', '😟', '😠', '😡', '🤬', '😔', '😟', '😠', '😡', '🤬', '😔', '😕', '🙁', '😬', '🥺', '😣', '😖', '😫', '😩', '🥱', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '🤤'];
  }
  setMessage() {
    if (this.user) {
      let filteredMessages = this.user.messages.filter(m => m.ownerId !== this.defaultUserId);
      this.message = filteredMessages[filteredMessages.length - 1];
    }
  }
  ngOnInit() {
    this.setMessage();
  }
  sendMessage() {
    if (this.textContent == '' || this.textContent === ' ') {
      return;
    } else {
      let message = {
        text: this.textContent,
        ownerId: 123,
        createdAt: new Date().getTime()
      };
      this.chatService.sendMessage(message);
      this.textContent = '';
    }
  }
  onEmojiSelect(emoji) {
    this.textContent += emoji;
  }
  parseDate(timestamp) {
    return new Date(timestamp).toTimeString().split(':').slice(0, 2).join(':');
  }
  static #_ = this.ɵfac = function ChatBoxComponent_Factory(t) {
    return new (t || ChatBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ChatBoxComponent,
    selectors: [["app-chat-box"]],
    inputs: {
      user: "user"
    },
    decls: 25,
    vars: 10,
    consts: [[1, "flex", "flex-column", "h-full"], [1, "flex", "align-items-center", "border-bottom-1", "surface-border", "p-3", "lg:p-6"], [1, "relative", "flex", "align-items-center", "mr-3"], ["alt", "user.name", 1, "w-4rem", "h-4rem", "border-circle", "shadow-4", 3, "src"], [1, "w-1rem", "h-1rem", "border-circle", "border-2", "surface-border", "absolute", "bottom-0", "right-0", 3, "ngClass"], [1, "mr-2"], [1, "text-900", "font-semibold", "block"], [1, "text-700"], [1, "flex", "align-items-center", "ml-auto"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-phone", 1, "p-button-rounded", "p-button-outlined", "p-button-secondary", "mr-3"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-outlined", "p-button-secondary"], [1, "p-3", "md:px-4", "lg:px-6", "lg:py-4", "mt-2", "overflow-y-auto", 2, "max-height", "53vh", 3, "scrollTop"], ["chatWindow", ""], [4, "ngFor", "ngForOf"], [1, "p-3", "md:p-4", "lg:p-6", "flex", "flex-column", "sm:flex-row", "align-items-center", "mt-auto", "border-top-1", "surface-border", "gap-3"], ["id", "message", "type", "text", "pInputText", "", "placeholder", "Type a message", 1, "flex-1", "w-full", "sm:w-auto", "border-round", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "flex", "w-full", "sm:w-auto", "gap-3"], ["pRipple", "", 1, "p-button", "p-button-secondary", "w-full", "sm:w-auto", "justify-content-center", "text-xl", 3, "click"], ["pButton", "", "pRipple", "", "label", "Send", "icon", "pi pi-send", 1, "w-full", "sm:w-auto", 3, "click"], ["styleClass", "w-full sm:w-30rem"], ["op", ""], ["pTemplate", ""], ["class", "grid grid-nogutter mb-4", 4, "ngIf"], [1, "grid", "grid-nogutter", "mb-4"], [1, "mr-3", "mt-1"], ["alt", "user.name", 1, "w-3rem", "h-3rem", "border-circle", "shadow-4", 3, "src"], [1, "col", "mt-3"], [1, "text-900", "font-semibold", "mb-3"], [1, "text-700", "inline-block", "font-medium", "border-1", "surface-border", "p-3", "white-space-normal", "border-round", 2, "word-break", "break-word", "max-width", "80%"], [1, "text-700", "mt-3"], [1, "pi", "pi-check", "ml-2", "text-green-400"], [1, "col", "mt-3", "text-right"], [1, "inline-block", "text-left", "font-medium", "border-1", "surface-border", "bg-primary-100", "text-primary-900", "p-3", "white-space-normal", "border-round", 2, "word-break", "break-word", "max-width", "80%"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-2 p-button-text text-2xl", 3, "label", "click", 4, "ngFor", "ngForOf"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-2", "p-button-text", "text-2xl", 3, "label", "click"]],
    template: function ChatBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Last active 1 hour ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "button", 9)(12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ChatBoxComponent_div_15_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatBoxComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.textContent = $event;
        })("keydown.enter", function ChatBoxComponent_Template_input_keydown_enter_17_listener() {
          return ctx.sendMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatBoxComponent_Template_button_click_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r2.toggle($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\uD83D\uDE00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatBoxComponent_Template_button_click_21_listener() {
          return ctx.sendMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p-overlayPanel", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ChatBoxComponent_ng_template_24_Template, 1, 1, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", ctx.user.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx.user.status === "active", ctx.user.status === "busy", ctx.user.status === "away"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollTop", _r0.scrollHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.user.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.textContent);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__.OverlayPanel, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 86765:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/apps/chat/chat-sidebar/chat-sidebar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatSidebarComponent: () => (/* binding */ ChatSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/chat.service */ 46895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-card/user-card.component */ 83373);






function ChatSidebarComponent_app_user_card_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-card", 9);
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", user_r1);
  }
}
class ChatSidebarComponent {
  constructor(chatService) {
    this.chatService = chatService;
    this.searchValue = '';
    this.users = [];
    this.filteredUsers = [];
  }
  ngOnInit() {
    this.chatService.getChatData().then(data => {
      this.users = data;
      this.filteredUsers = this.users;
    });
  }
  filter() {
    let filtered = [];
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i];
      if (user.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) == 0) {
        filtered.push(user);
      }
    }
    this.filteredUsers = [...filtered];
  }
  static #_ = this.ɵfac = function ChatSidebarComponent_Factory(t) {
    return new (t || ChatSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChatSidebarComponent,
    selectors: [["app-chat-sidebar"]],
    decls: 10,
    vars: 2,
    consts: [[1, "flex", "flex-column", "align-items-center", "border-bottom-1", "surface-border", "p-6"], ["src", "assets/demo/images/avatar/circle/avatar-f-1@2x.png", "alt", "Asiya Javayant", 1, "w-6rem", "h-6rem", "border-circle", "shadow-4"], [1, "text-900", "text-xl", "font-semibold", "mt-4"], [1, "w-full", "flex", "row-gap-4", "flex-column", "surface-border", "p-4"], [1, "p-input-icon-left", "w-full"], [1, "pi", "pi-search"], ["id", "search", "type", "text", "pInputText", "", "placeholder", "Search", 1, "w-full", 3, "ngModel", "ngModelChange", "input"], [1, "flex", "flex-row", "gap-4", "md:flex-column", "overflow-auto"], [3, "user", 4, "ngFor", "ngForOf"], [3, "user"]],
    template: function ChatSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Asiya Javayant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatSidebarComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.searchValue = $event;
        })("input", function ChatSidebarComponent_Template_input_input_7_listener() {
          return ctx.filter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ChatSidebarComponent_app_user_card_9_Template, 1, 1, "app-user-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredUsers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_1__.UserCardComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5590:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/apps/chat/chat.app-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatAppRoutingModule: () => (/* binding */ ChatAppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _chat_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.app.component */ 12120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class ChatAppRoutingModule {
  static #_ = this.ɵfac = function ChatAppRoutingModule_Factory(t) {
    return new (t || ChatAppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ChatAppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _chat_app_component__WEBPACK_IMPORTED_MODULE_0__.ChatAppComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatAppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 12120:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/apps/chat/chat.app.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatAppComponent: () => (/* binding */ ChatAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/chat.service */ 46895);
/* harmony import */ var _chat_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-sidebar/chat-sidebar.component */ 86765);
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-box/chat-box.component */ 86874);




class ChatAppComponent {
  constructor(chatService) {
    this.chatService = chatService;
    this.subscription = this.chatService.activeUser$.subscribe(data => this.activeUser = data);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function ChatAppComponent_Factory(t) {
    return new (t || ChatAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ChatAppComponent,
    selectors: [["ng-component"]],
    decls: 5,
    vars: 1,
    consts: [[1, "flex", "flex-column", "md:flex-row", "gap-5", 2, "min-height", "81vh"], [1, "md:w-25rem", "card", "p-0"], [1, "flex-1", "card", "p-0"], [3, "user"]],
    template: function ChatAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-chat-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-chat-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("user", ctx.activeUser);
      }
    },
    dependencies: [_chat_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ChatSidebarComponent, _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__.ChatBoxComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 44540:
/*!**************************************************************!*\
  !*** ./src/app/demo/components/apps/chat/chat.app.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatAppModule: () => (/* binding */ ChatAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _chat_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.app-routing.module */ 5590);
/* harmony import */ var _chat_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.app.component */ 12120);
/* harmony import */ var _chat_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-sidebar/chat-sidebar.component */ 86765);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/overlaypanel */ 17830);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/badge */ 67650);
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-card/user-card.component */ 83373);
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-box/chat-box.component */ 86874);
/* harmony import */ var _service_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/chat.service */ 46895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);















class ChatAppModule {
  static #_ = this.ɵfac = function ChatAppModule_Factory(t) {
    return new (t || ChatAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ChatAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [_service_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _chat_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatAppRoutingModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.AvatarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule, primeng_badge__WEBPACK_IMPORTED_MODULE_12__.BadgeModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_13__.OverlayPanelModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ChatAppModule, {
    declarations: [_chat_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.ChatSidebarComponent, _chat_app_component__WEBPACK_IMPORTED_MODULE_1__.ChatAppComponent, _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_3__.UserCardComponent, _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__.ChatBoxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _chat_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatAppRoutingModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.AvatarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule, primeng_badge__WEBPACK_IMPORTED_MODULE_12__.BadgeModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_13__.OverlayPanelModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule]
  });
})();

/***/ }),

/***/ 46895:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/apps/chat/service/chat.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatService: () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class ChatService {
  constructor(http) {
    this.http = http;
    this._activeUser = {
      "id": 1,
      "name": "Ioni Bowcher",
      "image": "ionibowcher.png",
      "status": "active",
      "messages": [{
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "ownerId": 1,
        "createdAt": 1652646338240
      }, {
        "text": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "ownerId": 1,
        "createdAt": 1652646368718
      }, {
        "text": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "ownerId": 123,
        "createdAt": 1652646368718
      }],
      "lastSeen": "2d"
    };
    this.activeUser = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this._activeUser);
    this.activeUser$ = this.activeUser.asObservable();
  }
  getChatData() {
    return this.http.get('assets/demo/data/chat.json').toPromise().then(res => res.data).then(data => data);
  }
  changeActiveChat(user) {
    this._activeUser = user;
    this.activeUser.next(user);
  }
  sendMessage(message) {
    this._activeUser.messages.push(message);
    this.activeUser.next(this._activeUser);
  }
  static #_ = this.ɵfac = function ChatService_Factory(t) {
    return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ChatService,
    factory: ChatService.ɵfac
  });
}

/***/ }),

/***/ 83373:
/*!****************************************************************************!*\
  !*** ./src/app/demo/components/apps/chat/user-card/user-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserCardComponent: () => (/* binding */ UserCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/chat.service */ 46895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);



const _c0 = (a0, a1) => ({
  "bg-green-400": a0,
  "bg-red-400": a1,
  "bg-yellow-400": "away"
});
class UserCardComponent {
  constructor(chatService) {
    this.chatService = chatService;
  }
  ngOnInit() {
    let filtered = this.user.messages.filter(m => m.ownerId !== 123);
    this.lastMessage = filtered[filtered.length - 1];
  }
  changeView(user) {
    this.chatService.changeActiveChat(user);
  }
  static #_ = this.ɵfac = function UserCardComponent_Factory(t) {
    return new (t || UserCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserCardComponent,
    selectors: [["app-user-card"]],
    inputs: {
      user: "user"
    },
    decls: 12,
    vars: 8,
    consts: [["tabindex", "0", 1, "flex", "flex-nowrap", "justify-content-between", "align-items-center", "border-1", "surface-border", "border-round", "p-3", "cursor-pointer", "select-none", "hover:surface-hover", "transition-colors", "transition-duration-150", 3, "keydown.enter", "click"], [1, "flex", "align-items-center"], [1, "relative", "md:mr-3"], ["alt", "user", 1, "w-3rem", "h-3rem", "border-circle", "shadow-4", 3, "src"], [1, "w-1rem", "h-1rem", "border-circle", "border-2", "surface-border", "absolute", 2, "bottom", "2px", "right", "2px", 3, "ngClass"], [1, "flex-column", "hidden", "md:flex"], [1, "text-900", "font-semibold", "block"], [1, "block", "text-600", "text-overflow-ellipsis", "overflow-hidden", "white-space-nowrap", "w-10rem", "text-sm"], [1, "text-700", "font-semibold", "ml-auto", "hidden", "md:inline"]],
    template: function UserCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function UserCardComponent_Template_div_keydown_enter_0_listener() {
          return ctx.changeView(ctx.user);
        })("click", function UserCardComponent_Template_div_click_0_listener() {
          return ctx.changeView(ctx.user);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", ctx.user.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx.user.status === "active", ctx.user.status === "busy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lastMessage.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.lastSeen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
    encapsulation: 2
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
//# sourceMappingURL=src_app_demo_components_apps_chat_chat_app_module_ts.js.map