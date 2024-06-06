"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_apps_kanban_kanban_app_module_ts"],{

/***/ 56488:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/apps/kanban/kanban-card/kanban-card.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanCardComponent: () => (/* binding */ KanbanCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_kanban_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/kanban.service */ 67797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tieredmenu */ 33462);









function KanbanCardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.card.description);
  }
}
const _c0 = () => ({
  "height": ".5rem"
});
function KanbanCardComponent_p_progressBar_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-progressBar", 13);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.card.progress)("showValue", false);
  }
}
function KanbanCardComponent_p_avatar_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-avatar", 14);
  }
  if (rf & 2) {
    const assignee_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("image", "assets/demo/images/avatar/", assignee_r6.image, "");
  }
}
function KanbanCardComponent_p_avatar_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-avatar", 15);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("label", "+ ", ctx_r4.card.assignees.length - 3, "");
  }
}
function KanbanCardComponent_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.generateTaskInfo());
  }
}
function KanbanCardComponent_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.card.attachments);
  }
}
function KanbanCardComponent_div_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.parseDate(ctx_r9.card.dueDate));
  }
}
function KanbanCardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KanbanCardComponent_div_15_span_1_Template, 3, 1, "span", 17)(2, KanbanCardComponent_div_15_span_2_Template, 3, 1, "span", 17)(3, KanbanCardComponent_div_15_span_3_Template, 3, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.card.taskList.tasks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.card.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.card.dueDate);
  }
}
class KanbanCardComponent {
  constructor(kanbanService) {
    this.kanbanService = kanbanService;
    this.menuItems = [];
    this.subscription = this.kanbanService.lists$.subscribe(data => {
      let subMenu = data.map(d => ({
        id: d.listId,
        label: d.title,
        command: () => this.onMove(d.listId)
      }));
      this.generateMenu(subMenu);
    });
  }
  parseDate(dueDate) {
    return new Date(dueDate).toDateString().split(' ').slice(1, 3).join(' ');
  }
  onDelete() {
    this.kanbanService.deleteCard(this.card.id, this.listId);
  }
  onCopy() {
    this.kanbanService.copyCard(this.card, this.listId);
  }
  onMove(listId) {
    this.kanbanService.moveCard(this.card, listId, this.listId);
  }
  generateMenu(subMenu) {
    this.menuItems = [{
      label: 'Copy card',
      command: () => this.onCopy()
    }, {
      label: 'Move card',
      items: subMenu
    }, {
      label: 'Delete card',
      command: () => this.onDelete()
    }];
  }
  generateTaskInfo() {
    let total = this.card.taskList.tasks.length;
    let completed = this.card.taskList.tasks.filter(t => t.completed).length;
    return `${completed} / ${total}`;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function KanbanCardComponent_Factory(t) {
    return new (t || KanbanCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_kanban_service__WEBPACK_IMPORTED_MODULE_0__.KanbanService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: KanbanCardComponent,
    selectors: [["app-kanban-card"]],
    inputs: {
      card: "card",
      listId: "listId"
    },
    decls: 16,
    vars: 13,
    consts: [[1, "flex", "surface-card", "flex-column", "w-full", "border-1", "surface-border", "p-3", "gap-5", "hover:surface-ground", "cursor-pointer", "border-round", 3, "id"], [1, "flex", "justify-content-between", "align-items-center"], [1, "text-900", "font-semibold"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "p-button-secondary", "p-trigger", 3, "click"], ["appendTo", "body", 3, "model", "popup"], ["menu", ""], ["style", "word-break: break-word", "class", "text-700", 4, "ngIf"], [3, "value", "showValue", "style", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-between", "flex-column", "md:flex-row", "gap-4", "md:gap-0"], ["shape", "circle", "styleClass", "border-2 surface-border", 3, "image", 4, "ngFor", "ngForOf"], ["shape", "circle", "styleClass", "border-2 surface-border mb-1 surface-ground", 3, "label", 4, "ngIf"], ["class", "flex align-items-center gap-3", 4, "ngIf"], [1, "text-700", 2, "word-break", "break-word"], [3, "value", "showValue"], ["shape", "circle", "styleClass", "border-2 surface-border", 3, "image"], ["shape", "circle", "styleClass", "border-2 surface-border mb-1 surface-ground", 3, "label"], [1, "flex", "align-items-center", "gap-3"], ["class", "text-900 font-semibold", 4, "ngIf"], [1, "pi", "pi-check-square", "text-700", "mr-2"], [1, "pi", "pi-paperclip", "text-700", "mr-2"], [1, "pi", "pi-clock", "text-700", "mr-2"]],
    template: function KanbanCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KanbanCardComponent_Template_button_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-tieredMenu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, KanbanCardComponent_div_8_Template, 2, 1, "div", 6)(9, KanbanCardComponent_p_progressBar_9_Template, 1, 5, "p-progressBar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "p-avatarGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, KanbanCardComponent_p_avatar_12_Template, 1, 1, "p-avatar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, KanbanCardComponent_p_avatar_14_Template, 1, 1, "p-avatar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, KanbanCardComponent_div_15_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.card.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.card.title ? ctx.card.title : "Untitled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx.menuItems)("popup", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.card.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.card.taskList.tasks.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](13, 9, ctx.card.assignees, 0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.card.assignees && ctx.card.assignees.length > 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.card.attachments || ctx.card.dueDate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__.ProgressBar, primeng_avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_7__.AvatarGroup, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_8__.TieredMenu, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9966:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/apps/kanban/kanban-list/kanban-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanListComponent: () => (/* binding */ KanbanListComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _kanban_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kanban.app.component */ 75765);
/* harmony import */ var _service_kanban_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/kanban.service */ 67797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inplace */ 1236);
/* harmony import */ var _kanban_card_kanban_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kanban-card/kanban-card.component */ 56488);















const _c0 = ["inputEl"];
const _c1 = ["listEl"];
function KanbanListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.list.title);
  }
}
function KanbanListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanListComponent_ng_template_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.list.title = $event);
    })("keydown.enter", function KanbanListComponent_ng_template_5_Template_input_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.deactivate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.list.title)("ngModel", ctx_r2.list.title);
  }
}
function KanbanListComponent_app_kanban_card_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-kanban-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanListComponent_app_kanban_card_12_Template_app_kanban_card_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const card_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.onCardClick($event, card_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r10 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", card_r10)("listId", ctx_r5.list.listId)("cdkDragDisabled", ctx_r5.isMobileDevice);
  }
}
class KanbanListComponent {
  constructor(parent, kanbanService) {
    this.parent = parent;
    this.kanbanService = kanbanService;
    this.menuItems = [];
    this.title = '';
    this.timeout = null;
    this.isMobileDevice = false;
  }
  ngOnInit() {
    this.isMobileDevice = this.kanbanService.isMobileDevice();
    this.menuItems = [{
      label: 'List actions',
      items: [{
        separator: true
      }, {
        label: 'Copy list',
        command: () => this.onCopy(this.list)
      }, {
        label: 'Remove list',
        command: () => {
          if (this.list.listId) {
            this.onDelete(this.list.listId);
          }
        }
      }]
    }];
  }
  toggleSidebar() {
    this.parent.sidebarVisible = true;
  }
  onDelete(id) {
    this.kanbanService.deleteList(id);
  }
  onCopy(list) {
    this.kanbanService.copyList(list);
  }
  onCardClick(event, card) {
    const eventTarget = event.target;
    if (!(eventTarget.classList.contains('p-button-icon') || eventTarget.classList.contains('p-trigger'))) {
      if (this.list.listId) {
        this.kanbanService.onCardSelect(card, this.list.listId);
      }
      this.parent.sidebarVisible = true;
    }
  }
  insertCard() {
    if (this.list.listId) {
      this.kanbanService.addCard(this.list.listId);
    }
  }
  dropCard(event) {
    if (event.previousContainer === event.container) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  focus() {
    this.timeout = setTimeout(() => this.inputEl.nativeElement.focus(), 1);
  }
  insertHeight(event) {
    event.container.element.nativeElement.style.minHeight = '10rem';
  }
  removeHeight(event) {
    event.container.element.nativeElement.style.minHeight = '2rem';
  }
  static #_ = this.ɵfac = function KanbanListComponent_Factory(t) {
    return new (t || KanbanListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_kanban_app_component__WEBPACK_IMPORTED_MODULE_0__.KanbanAppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_kanban_service__WEBPACK_IMPORTED_MODULE_1__.KanbanService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: KanbanListComponent,
    selectors: [["app-kanban-list"]],
    viewQuery: function KanbanListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listEl = _t.first);
      }
    },
    inputs: {
      list: "list",
      listIds: "listIds"
    },
    decls: 15,
    vars: 7,
    consts: [[1, "card", "md:w-25rem", "overflow-hidden"], [1, "flex", "justify-content-between", "align-items-center", "w-full", "h-3rem"], ["closeIcon", "pi pi-check", "styleClass", "h-auto", 3, "closable", "onActivate"], ["inplace", ""], ["pTemplate", "display"], ["pTemplate", "content"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-h", 1, "p-button-rounded", "p-button-text", "p-button-secondary", 3, "click"], [3, "model", "popup"], ["menu", ""], ["cdkDropList", "", 1, "flex", "flex-column", "gap-5", "overflow-y-auto", "mt-4", "scrollable", "kanban-list", 2, "min-height", "2rem", 3, "id", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], ["listEl", ""], ["cdkDrag", "", "cdkDragHandle", "", 3, "card", "listId", "cdkDragDisabled", "click", 4, "ngFor", "ngForOf"], [1, "px-4", "mb-3", "w-full", "mt-4", "flex"], ["pButton", "", "pRipple", "", "label", "New Card", "icon", "pi pi-plus font-semibold", 1, "py-3", "justify-content-center", "font-semibold", "w-full", "border-round", 3, "click"], ["pTooltip", "Click to edit", "tooltipPosition", "top", 1, "block", "text-900", "font-semibold", "mt-4", "pl-2", "text-lg", 2, "word-break", "break-word"], ["type", "text", "pInputText", "", 1, "w-10rem", "sm:w-15rem", "h-3rem", "text-900", "text-lg", 3, "value", "ngModel", "ngModelChange", "keydown.enter"], ["inputEl", ""], ["cdkDrag", "", "cdkDragHandle", "", 3, "card", "listId", "cdkDragDisabled", "click"]],
    template: function KanbanListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-inplace", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActivate", function KanbanListComponent_Template_p_inplace_onActivate_2_listener() {
          return ctx.focus();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, KanbanListComponent_ng_template_4_Template, 2, 1, "ng-template", 4)(5, KanbanListComponent_ng_template_5_Template, 2, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanListComponent_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r3.toggle($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-menu", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function KanbanListComponent_Template_div_cdkDropListDropped_10_listener($event) {
          return ctx.dropCard($event);
        })("cdkDropListEntered", function KanbanListComponent_Template_div_cdkDropListEntered_10_listener($event) {
          return ctx.insertHeight($event);
        })("cdkDropListExited", function KanbanListComponent_Template_div_cdkDropListExited_10_listener($event) {
          return ctx.removeHeight($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, KanbanListComponent_app_kanban_card_12_Template, 1, 3, "app-kanban-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanListComponent_Template_button_click_14_listener() {
          return ctx.insertCard();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.menuItems)("popup", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.list.listId)("cdkDropListData", ctx.list.cards)("cdkDropListConnectedTo", ctx.listIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list.cards);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDragHandle, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_menu__WEBPACK_IMPORTED_MODULE_11__.Menu, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.Tooltip, primeng_inplace__WEBPACK_IMPORTED_MODULE_13__.Inplace, _kanban_card_kanban_card_component__WEBPACK_IMPORTED_MODULE_2__.KanbanCardComponent],
    styles: ["[_nghost-%COMP%]     .p-button-label {\n  flex: 0;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .scrollable {\n  scroll-behavior: smooth;\n  max-height: 70vh;\n}\n\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--gray-500);\n  border-radius: 20px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2FwcHMva2FuYmFuL2thbmJhbi1saXN0L2thbmJhbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFNSTtFQUNJLFVBQUE7QUFIUjtBQU1JO0VBQ0ksdUJBQUE7QUFKUjtBQU9JO0VBQ0ksaUNBQUE7RUFDQSxtQkFBQTtBQUxSOztBQVNBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBTko7O0FBV0E7RUFDSSxhQUFBO0FBUko7O0FBV0E7RUFDSSxzREFBQTtBQVJKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAucC1idXR0b24tbGFiZWwge1xuICAgICAgICBmbGV4OiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgfVxufVxuXG46aG9zdCB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiA2cHg7ICAgICAgICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbiAgXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDAuMjU7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 17612:
/*!****************************************************************************************!*\
  !*** ./src/app/demo/components/apps/kanban/kanban-sidebar/kanban-sidebar.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanSidebarComponent: () => (/* binding */ KanbanSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _kanban_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kanban.app.component */ 75765);
/* harmony import */ var src_app_demo_service_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/member.service */ 9753);
/* harmony import */ var _service_kanban_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/kanban.service */ 67797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ 57411);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 30652);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inplace */ 1236);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/autocomplete */ 74823);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/overlaypanel */ 17830);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/checkbox */ 11580);




















const _c0 = ["inputTitle"];
const _c1 = ["inputTaskListTitle"];
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.formValue.title ? ctx_r4.formValue.title : "Untitled");
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.formValue.title = $event);
    })("keydown.enter", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_5_Template_input_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r3.deactivate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.formValue.title);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_11_span_4_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const list_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.onMove(list_r18.listId || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const list_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](list_r18.title);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Move to...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_11_span_4_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 45)(6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_11_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.addTaskList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Create a tasklist");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.listNames);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-progressBar", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r8.formValue.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r8.formValue.progress)("showValue", false);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r24.formValue.taskList.title);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ng_template_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.formValue.taskList.title = $event);
    })("keydown.enter", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ng_template_5_Template_input_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r23.deactivate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r25.formValue.taskList.title);
  }
}
const _c2 = (a0, a1) => ({
  "text-600 line-through": a0,
  "text-900": a1
});
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 63)(1, "p-checkbox", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ul_7_li_1_Template_p_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const task_r32 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](task_r32.completed = $event);
    })("onChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ul_7_li_1_Template_p_checkbox_onChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.calculateProgress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", task_r32.text + i_r33)("ngModel", task_r32.completed)("binary", true)("inputId", task_r32.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c2, task_r32.completed, !task_r32.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", task_r32.text, " ");
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ul_7_li_1_Template, 4, 9, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r26.formValue.taskList == null ? null : ctx_r26.formValue.taskList.tasks);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "div", 53)(2, "p-inplace", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActivate", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_Template_p_inplace_onActivate_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.focus(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ng_template_4_Template, 2, 1, "ng-template", 8)(5, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ng_template_5_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_Template_textarea_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.taskContent = $event);
    })("keydown.enter", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_Template_textarea_keydown_enter_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.addTask($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_ul_7_Template, 2, 1, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.taskContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r9.formValue.taskList == null ? null : ctx_r9.formValue.taskList.tasks == null ? null : ctx_r9.formValue.taskList.tasks.length) !== 0);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assignee_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", assignee_r41.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", assignee_r41.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](assignee_r41.name);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assignee_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", assignee_r42.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", assignee_r42.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](assignee_r42.name);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_44_p_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-avatar", 77);
  }
  if (rf & 2) {
    const comment_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("image", "assets/demo/images/avatar/", comment_r43.image, "");
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_44_p_avatar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-avatar", 78);
  }
}
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_44_p_avatar_1_Template, 1, 1, "p-avatar", 70)(2, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_44_p_avatar_2_Template, 1, 0, "p-avatar", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 72)(4, "div", 73)(5, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "1 Jun 17:58 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const comment_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", comment_r43.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !comment_r43.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](comment_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](comment_r43 == null ? null : comment_r43.text);
  }
}
const _c3 = () => ({
  "height": "3.5rem"
});
const _c4 = () => ({
  "height": "2.5rem"
});
function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_form_submit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.onSave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5)(2, "p-inplace", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActivate", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_p_inplace_onActivate_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.focus(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_4_Template, 2, 1, "ng-template", 8)(5, KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_5_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 9)(7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r6.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r51.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-overlayPanel", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_11_Template, 10, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 14)(13, "div", 15)(14, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_textarea_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.formValue.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 18)(18, "div", 19)(19, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p-calendar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_p_calendar_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r53.formValue.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19)(25, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p-calendar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_p_calendar_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r54.formValue.dueDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_30_Template, 7, 3, "div", 25)(31, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_31_Template, 8, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 26)(33, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Assignees");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p-autoComplete", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_p_autoComplete_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r55.formValue.assignees = $event);
    })("completeMethod", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_p_autoComplete_completeMethod_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r56.filterAssignees($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_36_Template, 4, 3, "ng-template", 29)(37, KanbanSidebarComponent_p_sidebar_0_ng_template_2_ng_template_37_Template, 4, 3, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 31)(39, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "p-avatar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_textarea_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r57.comment = $event);
    })("keydown.enter", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_textarea_keydown_enter_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r58.onComment($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, KanbanSidebarComponent_p_sidebar_0_ng_template_2_div_44_Template, 11, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r59.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 5)("ngModel", ctx_r2.formValue.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appendTo", _r1)("showTime", false)("required", true)("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c3))("ngModel", ctx_r2.formValue.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appendTo", _r1)("showTime", false)("required", true)("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c3))("ngModel", ctx_r2.formValue.dueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.formValue.taskList.tasks.length || ctx_r2.showTaskContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.formValue.taskList.tasks.length || ctx_r2.showTaskContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appendTo", _r1)("ngModel", ctx_r2.formValue.assignees)("suggestions", ctx_r2.filteredAssignees)("multiple", true)("showEmptyMessage", true)("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.formValue.comments);
  }
}
function KanbanSidebarComponent_p_sidebar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-sidebar", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function KanbanSidebarComponent_p_sidebar_0_Template_p_sidebar_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r60.parent.sidebarVisible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, KanbanSidebarComponent_p_sidebar_0_ng_template_2_Template, 49, 26, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx_r0.parent.sidebarVisible)("baseZIndex", 10000)("showCloseIcon", false);
  }
}
class KanbanSidebarComponent {
  constructor(parent, memberService, kanbanService) {
    this.parent = parent;
    this.memberService = memberService;
    this.kanbanService = kanbanService;
    this.card = {
      id: '',
      taskList: {
        title: 'Untitled Task List',
        tasks: []
      }
    };
    this.listId = '';
    this.filteredAssignees = [];
    this.assignees = [];
    this.newComment = {
      id: '123',
      name: 'Jane Cooper',
      text: ''
    };
    this.newTask = {
      text: '',
      completed: false
    };
    this.comment = '';
    this.taskContent = '';
    this.timeout = null;
    this.showTaskContainer = false;
    this.menuItems = [];
    this.listNames = [];
    this.memberService.getMembers().then(members => this.assignees = members);
    this.cardSubscription = this.kanbanService.selectedCard$.subscribe(data => {
      this.card = data;
      this.formValue = {
        ...data
      };
    });
    this.listSubscription = this.kanbanService.selectedListId$.subscribe(data => this.listId = data);
    this.listNameSubscription = this.kanbanService.listNames$.subscribe(data => this.listNames = data);
  }
  ngOnDestroy() {
    this.cardSubscription.unsubscribe();
    this.listSubscription.unsubscribe();
    this.listNameSubscription.unsubscribe();
    clearTimeout(this.timeout);
  }
  close() {
    this.parent.sidebarVisible = false;
    this.resetForm();
  }
  filterAssignees(event) {
    let filtered = [];
    let query = event.query;
    for (let i = 0; i < this.assignees.length; i++) {
      let assignee = this.assignees[i];
      if (assignee.name && assignee.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(assignee);
      }
    }
    this.filteredAssignees = filtered;
  }
  onComment(event) {
    event.preventDefault();
    if (this.comment.trim().length > 0) {
      this.newComment = {
        ...this.newComment,
        text: this.comment
      };
      this.formValue?.comments?.unshift(this.newComment);
      this.comment = '';
    }
  }
  onSave(event) {
    event.preventDefault();
    this.card = {
      ...this.formValue
    };
    this.kanbanService.updateCard(this.card, this.listId);
    this.close();
  }
  onMove(listId) {
    this.kanbanService.moveCard(this.formValue, listId, this.listId);
  }
  onDelete() {
    this.kanbanService.deleteCard(this.formValue?.id || '', this.listId);
    this.parent.sidebarVisible = false;
    this.resetForm();
  }
  resetForm() {
    this.formValue = {
      id: '',
      taskList: {
        title: 'Untitled Task List',
        tasks: []
      }
    };
  }
  addTaskList() {
    this.showTaskContainer = !this.showTaskContainer;
    if (!this.showTaskContainer) {
      return;
    } else if (!this.formValue.taskList) {
      let id = this.kanbanService.generateId();
      this.formValue = {
        ...this.formValue,
        taskList: {
          id: id,
          title: 'Untitled Task List',
          tasks: []
        }
      };
    }
  }
  addTask(event) {
    event.preventDefault();
    if (this.taskContent.trim().length > 0) {
      this.newTask = {
        text: this.taskContent,
        completed: false
      };
      this.formValue.taskList?.tasks.unshift(this.newTask);
      this.taskContent = '';
      this.calculateProgress();
    }
  }
  focus(arg) {
    if (arg == 1) {
      this.timeout = setTimeout(() => this.inputTitle.nativeElement.focus(), 1);
    }
    if (arg == 2) {
      this.timeout = setTimeout(() => this.inputTaskListTitle.nativeElement.focus(), 1);
    }
  }
  calculateProgress() {
    if (this.formValue.taskList) {
      let completed = this.formValue.taskList.tasks.filter(t => t.completed).length;
      this.formValue.progress = Math.round(100 * (completed / this.formValue.taskList.tasks.length));
    }
  }
  static #_ = this.ɵfac = function KanbanSidebarComponent_Factory(t) {
    return new (t || KanbanSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_kanban_app_component__WEBPACK_IMPORTED_MODULE_0__.KanbanAppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_member_service__WEBPACK_IMPORTED_MODULE_1__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_kanban_service__WEBPACK_IMPORTED_MODULE_2__.KanbanService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: KanbanSidebarComponent,
    selectors: [["app-kanban-sidebar"]],
    viewQuery: function KanbanSidebarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputTitle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputTaskListTitle = _t.first);
      }
    },
    decls: 1,
    vars: 1,
    consts: [["position", "right", "styleClass", "w-full md:w-8 lg:w-6 xl:w-5", 3, "visible", "baseZIndex", "showCloseIcon", "visibleChange", 4, "ngIf"], ["position", "right", "styleClass", "w-full md:w-8 lg:w-6 xl:w-5", 3, "visible", "baseZIndex", "showCloseIcon", "visibleChange"], ["sidebar", ""], ["pTemplate", "content"], [3, "submit"], [1, "px-4", "py-6", "border-bottom-1", "surface-border", "flex", "align-items-center", "justify-content-between", "h-4rem"], ["closeIcon", "pi pi-check", "styleClass", "h-3rem", "styleClass", "white-space-nowrap", 3, "closable", "onActivate"], ["inplace", ""], ["pTemplate", "display"], [1, "flex"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-cog", "pTooltip", "card actions", "tooltipPosition", "left", 1, "p-button-rounded", "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-text", "p-button-secondary", 3, "click"], ["op", ""], ["pTemplate", ""], [1, "grid", "grid-nogutter", "gap-5", "pt-5", "flex-wrap", "flex-1", "flex", "flex-column"], [1, "col-12", "field", "px-5"], ["for", "start", 1, "block", "text-900", "font-semibold"], ["id", "description", "name", "description", "type", "text", "pInputTextarea", "", 1, "w-full", 2, "resize", "none", 3, "rows", "ngModel", "ngModelChange"], [1, "col-12", "px-5", "flex", "gap-5"], [1, "flex", "flex-column", "field", "w-full"], [1, "p-input-icon-left", "w-full", 2, "height", "3.5rem"], [1, "pi", "pi-clock", "z-1", 2, "left", "1.5rem"], ["name", "startDate", "dateFormat", "yy-mm-dd", "inputId", "start", "inputStyleClass", "w-full pl-7 text-900 font-semibold", "styleClass", "w-full", 3, "appendTo", "showTime", "required", "inputStyle", "ngModel", "ngModelChange"], ["for", "due", 1, "block", "text-900", "font-semibold"], ["name", "endDate", "dateFormat", "yy-mm-dd", "inputId", "due", "inputStyleClass", "w-full pl-7 text-900 font-semibold", "styleClass", "w-full", 3, "appendTo", "showTime", "required", "inputStyle", "ngModel", "ngModelChange"], ["class", "col-12 flex flex-column px-5", 4, "ngIf"], [1, "col-12", "flex", "flex-column", "field", "px-5"], ["for", "assignees", 1, "block", "text-900", "font-semibold", "mb-3"], ["name", "assignees", "field", "name", "emptyMessage", "No results found", "placeholder", "Choose assignees", 3, "appendTo", "ngModel", "suggestions", "multiple", "showEmptyMessage", "inputStyle", "ngModelChange", "completeMethod"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "col-12", "flex", "flex-column", "row-gap-4", "px-5", "mb-6"], [1, "block", "text-900", "font-semibold"], [1, "flex", "align-items-center"], ["icon", "pi pi-user", "shape", "circle", "size", "large", 1, "mr-3"], ["type", "text", "pInputTextarea", "", "name", "comment", "placeholder", "Write a comment...", 1, "w-full", 2, "resize", "none", 3, "ngModel", "ngModelChange", "keydown.enter"], ["class", "flex align-items-center border-round", 4, "ngFor", "ngForOf"], [1, "flex", "w-full", "justify-content-end", "border-top-1", "surface-border", "py-5", "px-5", "gap-3"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-paperclip", 1, "p-button-outlined", "p-button-secondary", "surface-border", "text-900", "w-3rem", "h-3rem"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-outlined", "p-button-secondary", "surface-border", "text-900", "w-3rem", "h-3rem", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "icon", "pi pi-check", "label", "Save", 1, "p-button-primary", "h-3rem"], ["pTooltip", "Click to edit", 1, "block", "text-900", "font-semibold", "text-lg", "pl-2"], ["type", "text", "name", "title", "pInputText", "", 1, "w-13rem", "sm:w-18rem", "h-3rem", "text-900", "text-lg", 3, "ngModel", "ngModelChange", "keydown.enter"], ["inputTitle", ""], [1, "grid", "grid-nogutter", "flex-column", "gap-5", "w-15rem"], [1, "col-12", "flex", "flex-column"], [1, "text-900", "font-semibold", "block", "w-full", "border-bottom-1", "surface-border", "pb-3", "mb-2"], ["pRipple", "", "class", "text-700 block p-2 cursor-pointer hover:surface-ground select-none border-round", 3, "click", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "text-700", "block", "p-2", "cursor-pointer", "hover:surface-ground", "select-none", "border-round", 3, "click"], [1, "col-12", "flex", "flex-column", "px-5"], [1, "flex", "justify-content-between", "mb-3"], [1, "text-900", "font-semibold"], ["name", "progress", 3, "value", "showValue"], [1, "h-4rem", "-mb-4"], ["closeIcon", "pi pi-check", "styleClass", "h-4rem", 3, "closable", "onActivate"], ["inplace2", ""], ["type", "text", "pInputTextarea", "", "name", "taskContent", "placeholder", "Add a task", 1, "w-full", "mt-4", 2, "resize", "none", 3, "ngModel", "ngModelChange", "keydown.enter"], ["class", "list-none p-4 flex flex-column gap-3 surface-ground surface-border border-1 border-round", 4, "ngIf"], ["pTooltip", "Click to edit", "tooltipPosition", "left", 1, "block", "text-900", "font-semibold", "text-lg", "mt-3"], ["type", "text", "name", "title", "pInputText", "", 1, "w-20rem", "h-3rem", "text-900", "mt-2", "text-lg", 3, "ngModel", "ngModelChange", "keydown.enter"], ["inputTaskListTitle", ""], [1, "list-none", "p-4", "flex", "flex-column", "gap-3", "surface-ground", "surface-border", "border-1", "border-round"], ["class", "flex align-items-start gap-3", 4, "ngFor", "ngForOf"], [1, "flex", "align-items-start", "gap-3"], [3, "name", "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [2, "word-break", "break-all", 3, "ngClass"], [1, "flex", "align-items-center", "gap-3", "border-round"], [1, "h-2rem", "w-2rem", "border-2", "border-circle", "surface-border", "mr-2", 3, "src", "alt"], [1, "text-900"], [1, "flex", "align-items-center", "border-round"], ["class", "mb-4", "shape", "circle", "size", "large", 3, "image", 4, "ngIf"], ["icon", "pi pi-user", "class", "mb-4", "shape", "circle", "size", "large", 4, "ngIf"], [1, "ml-3", "w-full"], [1, "flex", "justify-content-between", "mb-2"], [1, "block", "text-900"], [1, "block", "text-700"], [1, "block", "text-900", "border-1", "surface-ground", "surface-border", "p-2", "border-round", 2, "word-break", "break-all"], ["shape", "circle", "size", "large", 1, "mb-4", 3, "image"], ["icon", "pi pi-user", "shape", "circle", "size", "large", 1, "mb-4"]],
    template: function KanbanSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, KanbanSidebarComponent_p_sidebar_0_Template, 3, 3, "p-sidebar", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formValue);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_progressbar__WEBPACK_IMPORTED_MODULE_9__.ProgressBar, primeng_avatar__WEBPACK_IMPORTED_MODULE_10__.Avatar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_12__.Calendar, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextarea, primeng_sidebar__WEBPACK_IMPORTED_MODULE_14__.Sidebar, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, primeng_inplace__WEBPACK_IMPORTED_MODULE_16__.Inplace, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__.AutoComplete, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_18__.OverlayPanel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__.Checkbox],
    styles: ["[_nghost-%COMP%]     .p-autocomplete {\n  display: block;\n}\n[_nghost-%COMP%]     .p-autocomplete .p-autocomplete-multiple-container {\n  gap: 0.5rem;\n}\n[_nghost-%COMP%]     .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {\n  background: var(--surface-ground);\n  border: 1px solid var(--surface-border);\n}\n[_nghost-%COMP%]     .p-sidebar .p-sidebar-header {\n  display: none;\n}\n[_nghost-%COMP%]     .p-sidebar .p-sidebar-content {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2FwcHMva2FuYmFuL2thbmJhbi1zaWRlYmFyL2thbmJhbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtBQUFSO0FBRVE7RUFDSSxXQUFBO0FBQVo7QUFFWTtFQUNJLGlDQUFBO0VBQ0EsdUNBQUE7QUFBaEI7QUFNUTtFQUNJLGFBQUE7QUFKWjtBQU9RO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFMWiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnAtYXV0b2NvbXBsZXRlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgLnAtYXV0b2NvbXBsZXRlLW11bHRpcGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBnYXA6IDAuNXJlbTtcblxuICAgICAgICAgICAgLnAtYXV0b2NvbXBsZXRlLXRva2VuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnAtc2lkZWJhciB7XG4gICAgICAgIC5wLXNpZGViYXItaGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5wLXNpZGViYXItY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 22751:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/apps/kanban/kanban.app-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanAppRoutingModule: () => (/* binding */ KanbanAppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _kanban_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kanban.app.component */ 75765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class KanbanAppRoutingModule {
  static #_ = this.ɵfac = function KanbanAppRoutingModule_Factory(t) {
    return new (t || KanbanAppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: KanbanAppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      data: {
        breadcrumb: 'Board'
      },
      component: _kanban_app_component__WEBPACK_IMPORTED_MODULE_0__.KanbanAppComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KanbanAppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 75765:
/*!*********************************************************************!*\
  !*** ./src/app/demo/components/apps/kanban/kanban.app.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanAppComponent: () => (/* binding */ KanbanAppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 31523);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_kanban_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/kanban.service */ 67797);




function KanbanAppComponent_app_kanban_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-kanban-list", 4);
  }
  if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("list", list_r1)("listIds", ctx_r0.listIds)("cdkDragDisabled", ctx_r0.isMobileDevice);
  }
}
class KanbanAppComponent {
  constructor(kanbanService) {
    this.kanbanService = kanbanService;
    this.sidebarVisible = false;
    this.lists = [];
    this.listIds = [];
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    this.isMobileDevice = false;
    this.subscription = this.kanbanService.lists$.subscribe(data => {
      this.lists = data;
      this.listIds = this.lists.map(l => l.listId || '');
    });
  }
  ngOnInit() {
    this.removeLayoutResponsive();
    this.isMobileDevice = this.kanbanService.isMobileDevice();
  }
  toggleSidebar() {
    this.sidebarVisible = true;
  }
  addList() {
    this.kanbanService.addList();
  }
  dropList(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
  }
  removeLayoutResponsive() {
    this.style = document.createElement('style');
    this.style.innerHTML = `
                .layout-content {
                    width: 100%;
                }
                
                .layout-topbar {
                    width: 100%;
                }
            `;
    document.head.appendChild(this.style);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    document.head.removeChild(this.style);
  }
  static #_ = this.ɵfac = function KanbanAppComponent_Factory(t) {
    return new (t || KanbanAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_kanban_service__WEBPACK_IMPORTED_MODULE_0__.KanbanService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: KanbanAppComponent,
    selectors: [["ng-component"]],
    decls: 5,
    vars: 2,
    consts: [["id", "kanban-wrapper", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "grid", "grid-nogutter", "w-full", "flex-column", "md:flex-row", "flex-nowrap", "gap-5", "lg:overflow-y-hidden", "overflow-x-auto", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", "cdkDragHandle", "", "class", "p-kanban-list", 3, "list", "listIds", "cdkDragDisabled", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1", "mb-3", "md:w-25rem", "flex-shrink-0"], ["pButton", "", "pRipple", "", "label", "New List", "icon", "pi pi-plus font-semibold", 1, "py-3", "justify-content-center", "font-semibold", "w-full", "border-round", 3, "click"], ["cdkDrag", "", "cdkDragHandle", "", 1, "p-kanban-list", 3, "list", "listIds", "cdkDragDisabled"]],
    template: function KanbanAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function KanbanAppComponent_Template_div_cdkDropListDropped_0_listener($event) {
          return ctx.dropList($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KanbanAppComponent_app_kanban_list_1_Template, 1, 3, "app-kanban-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KanbanAppComponent_Template_button_click_3_listener() {
          return ctx.addList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-kanban-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.lists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lists);
      }
    },
    styles: ["[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--gray-500);\n  border-radius: 20px;\n}\n\n[_nghost-%COMP%]     .p-button-label {\n  flex: 0;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .p-inplace .p-inplace-content .p-inputtext {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[_nghost-%COMP%]     .p-inplace .p-inplace-content .p-button {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  width: 3rem;\n  height: 3rem;\n}\n[_nghost-%COMP%]     .p-inplace .p-inplace-display {\n  padding: 0;\n}\n\n.p-kanban-list[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: min-content;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2FwcHMva2FuYmFuL2thbmJhbi5hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0FBQVI7QUFHSTtFQUNJLHVCQUFBO0FBRFI7QUFJSTtFQUNJLGlDQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFPSTtFQUNJLE9BQUE7RUFDQSxtQkFBQTtBQUpSO0FBU1k7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FBUGhCO0FBVVk7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSaEI7QUFZUTtFQUNJLFVBQUE7QUFWWjs7QUFlQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBWko7O0FBaUJBO0VBQ0ksYUFBQTtBQWRKOztBQWlCQTtFQUNJLHNEQUFBO0FBZEoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGhlaWdodDogNnB4OyAgICAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNTAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnAtYnV0dG9uLWxhYmVsIHtcbiAgICAgICAgZmxleDogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICAucC1pbnBsYWNlIHtcbiAgICAgICAgLnAtaW5wbGFjZS1jb250ZW50IHtcbiAgICAgICAgICAgIC5wLWlucHV0dGV4dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAucC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnAtaW5wbGFjZS1kaXNwbGF5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH0gICAgXG4gICAgfVxufVxuXG4ucC1rYW5iYW4tbGlzdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4gIFxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwLjI1O1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 33665:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/apps/kanban/kanban.app.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanAppModule: () => (/* binding */ KanbanAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _kanban_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kanban.app-routing.module */ 22751);
/* harmony import */ var _kanban_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kanban.app.component */ 75765);
/* harmony import */ var _kanban_list_kanban_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kanban-list/kanban-list.component */ 9966);
/* harmony import */ var _kanban_sidebar_kanban_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kanban-sidebar/kanban-sidebar.component */ 17612);
/* harmony import */ var _kanban_card_kanban_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kanban-card/kanban-card.component */ 56488);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chips */ 8061);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/calendar */ 57411);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtextarea */ 30652);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inplace */ 1236);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/autocomplete */ 74823);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tieredmenu */ 33462);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/overlaypanel */ 17830);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/checkbox */ 11580);
/* harmony import */ var _service_kanban_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/kanban.service */ 67797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
































class KanbanAppModule {
  static #_ = this.ɵfac = function KanbanAppModule_Factory(t) {
    return new (t || KanbanAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: KanbanAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [_service_kanban_service__WEBPACK_IMPORTED_MODULE_5__.KanbanService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _kanban_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.KanbanAppRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.RippleModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__.ProgressBarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_13__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_14__.AvatarGroupModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputTextModule, primeng_chips__WEBPACK_IMPORTED_MODULE_16__.ChipsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.CalendarModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.DropdownModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__.InputTextareaModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_20__.SidebarModule, primeng_menu__WEBPACK_IMPORTED_MODULE_21__.MenuModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_22__.InplaceModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__.AutoCompleteModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__.TooltipModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_25__.TieredMenuModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_26__.OverlayPanelModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_27__.CheckboxModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](KanbanAppModule, {
    declarations: [_kanban_app_component__WEBPACK_IMPORTED_MODULE_1__.KanbanAppComponent, _kanban_list_kanban_list_component__WEBPACK_IMPORTED_MODULE_2__.KanbanListComponent, _kanban_sidebar_kanban_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.KanbanSidebarComponent, _kanban_card_kanban_card_component__WEBPACK_IMPORTED_MODULE_4__.KanbanCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _kanban_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.KanbanAppRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.RippleModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__.ProgressBarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_13__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_14__.AvatarGroupModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputTextModule, primeng_chips__WEBPACK_IMPORTED_MODULE_16__.ChipsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.CalendarModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.DropdownModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__.InputTextareaModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_20__.SidebarModule, primeng_menu__WEBPACK_IMPORTED_MODULE_21__.MenuModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_22__.InplaceModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__.AutoCompleteModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__.TooltipModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_25__.TieredMenuModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_26__.OverlayPanelModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_27__.CheckboxModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_kanban_app_component__WEBPACK_IMPORTED_MODULE_1__.KanbanAppComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDragHandle, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, _kanban_list_kanban_list_component__WEBPACK_IMPORTED_MODULE_2__.KanbanListComponent, _kanban_sidebar_kanban_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.KanbanSidebarComponent], []);

/***/ }),

/***/ 67797:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/apps/kanban/service/kanban.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanService: () => (/* binding */ KanbanService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);



class KanbanService {
  constructor(http) {
    this.http = http;
    this._lists = [];
    this.selectedCard = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.selectedListId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.lists = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this._lists);
    this.listNames = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.lists$ = this.lists.asObservable();
    this.selectedCard$ = this.selectedCard.asObservable();
    this.selectedListId$ = this.selectedListId.asObservable();
    this.listNames$ = this.listNames.asObservable();
    this.http.get('assets/demo/data/kanban.json').toPromise().then(res => res.data).then(data => {
      this.updateLists(data);
    });
  }
  updateLists(data) {
    this._lists = data;
    let small = data.map(l => ({
      listId: l.listId,
      title: l.title
    }));
    this.listNames.next(small);
    this.lists.next(data);
  }
  addList() {
    const listId = this.generateId();
    const title = "Untitled List";
    const newList = {
      listId: listId,
      title: title,
      cards: []
    };
    this._lists.push(newList);
    this.lists.next(this._lists);
  }
  addCard(listId) {
    const cardId = this.generateId();
    const title = "Untitled card";
    const newCard = {
      id: cardId,
      title: title,
      description: '',
      progress: '',
      assignees: [],
      attachments: 0,
      comments: [],
      startDate: '',
      dueDate: '',
      completed: false,
      taskList: {
        title: 'Untitled Task List',
        tasks: []
      }
    };
    let lists = [];
    lists = this._lists.map(l => l.listId === listId ? {
      ...l,
      cards: [...(l.cards || []), newCard]
    } : l);
    this.updateLists(lists);
  }
  updateCard(card, listId) {
    let lists = this._lists.map(l => l.listId === listId ? {
      ...l,
      cards: l.cards.map(c => c.id === card.id ? {
        ...card
      } : c)
    } : l);
    this.updateLists(lists);
  }
  deleteList(id) {
    this._lists = this._lists.filter(l => l.listId !== id);
    this.lists.next(this._lists);
  }
  copyList(list) {
    let newId = this.generateId();
    let newList = {
      ...list,
      listId: newId
    };
    this._lists.push(newList);
    this.lists.next(this._lists);
  }
  deleteCard(cardId, listId) {
    let lists = [];
    for (let i = 0; i < this._lists.length; i++) {
      let list = this._lists[i];
      if (list.listId === listId && list.cards) {
        list.cards = list.cards.filter(c => c.id !== cardId);
      }
      lists.push(list);
    }
    this.updateLists(lists);
  }
  copyCard(card, listId) {
    let lists = [];
    for (let i = 0; i < this._lists.length; i++) {
      let list = this._lists[i];
      if (list.listId === listId && list.cards) {
        let cardIndex = list.cards.indexOf(card);
        let newId = this.generateId();
        let newCard = {
          ...card,
          id: newId
        };
        list.cards.splice(cardIndex, 0, newCard);
      }
      lists.push(list);
    }
    this.updateLists(lists);
  }
  moveCard(card, targetListId, sourceListId) {
    if (card.id) {
      this.deleteCard(card.id, sourceListId);
      let lists = this._lists.map(l => l.listId === targetListId ? {
        ...l,
        cards: [...(l.cards || []), card]
      } : l);
      this.updateLists(lists);
    }
  }
  onCardSelect(card, listId) {
    this.selectedCard.next(card);
    this.selectedListId.next(listId);
  }
  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  isMobileDevice() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || /(android)/i.test(navigator.userAgent);
  }
  static #_ = this.ɵfac = function KanbanService_Factory(t) {
    return new (t || KanbanService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: KanbanService,
    factory: KanbanService.ɵfac
  });
}

/***/ }),

/***/ 1236:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inplace.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Inplace: () => (/* binding */ Inplace),
/* harmony export */   InplaceContent: () => (/* binding */ InplaceContent),
/* harmony export */   InplaceDisplay: () => (/* binding */ InplaceDisplay),
/* harmony export */   InplaceModule: () => (/* binding */ InplaceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/times */ 28993);








const _c0 = ["*"];
function Inplace_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = a0 => ({
  "p-disabled": a0
});
function Inplace_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Inplace_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onActivateClick($event));
    })("keydown", function Inplace_div_1_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Inplace_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r0.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.displayTemplate);
  }
}
function Inplace_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Inplace_div_2_ng_container_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Inplace_div_2_ng_container_3_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onDeactivateClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.closeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r8.closeAriaLabel);
  }
}
function Inplace_div_2_ng_container_3_button_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon");
  }
}
function Inplace_div_2_ng_container_3_button_2_2_ng_template_0_Template(rf, ctx) {}
function Inplace_div_2_ng_container_3_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Inplace_div_2_ng_container_3_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Inplace_div_2_ng_container_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Inplace_div_2_ng_container_3_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onDeactivateClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Inplace_div_2_ng_container_3_button_2_TimesIcon_1_Template, 1, 0, "TimesIcon", 6)(2, Inplace_div_2_ng_container_3_button_2_2_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-icon-only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r9.closeAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.closeIconTemplate);
  }
}
function Inplace_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Inplace_div_2_ng_container_3_button_1_Template, 1, 2, "button", 7)(2, Inplace_div_2_ng_container_3_button_2_Template, 3, 4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.closeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.closeIcon);
  }
}
function Inplace_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Inplace_div_2_ng_container_2_Template, 1, 0, "ng-container", 4)(3, Inplace_div_2_ng_container_3_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closable);
  }
}
const _c2 = [[["", "pInplaceDisplay", ""]], [["", "pInplaceContent", ""]]];
const _c3 = a1 => ({
  "p-inplace p-component": true,
  "p-inplace-closable": a1
});
const _c4 = ["[pInplaceDisplay]", "[pInplaceContent]"];
class InplaceDisplay {
  static ɵfac = function InplaceDisplay_Factory(t) {
    return new (t || InplaceDisplay)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InplaceDisplay,
    selectors: [["p-inplaceDisplay"]],
    hostAttrs: [1, "p-element"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function InplaceDisplay_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InplaceDisplay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inplaceDisplay',
      template: '<ng-content></ng-content>',
      host: {
        class: 'p-element'
      }
    }]
  }], null, null);
})();
class InplaceContent {
  static ɵfac = function InplaceContent_Factory(t) {
    return new (t || InplaceContent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InplaceContent,
    selectors: [["p-inplaceContent"]],
    hostAttrs: [1, "p-element"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function InplaceContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InplaceContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inplaceContent',
      template: '<ng-content></ng-content>',
      host: {
        class: 'p-element'
      }
    }]
  }], null, null);
})();
/**
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 * @group Components
 */
class Inplace {
  cd;
  /**
   * Whether the content is displayed or not.
   * @group Props
   */
  active = false;
  /**
   * Displays a button to switch back to display mode.
   * @group Props
   */
  closable = false;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Allows to prevent clicking.
   * @group Props
   */
  preventClick;
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
   * Icon to display in the close button.
   * @group Props
   */
  closeIcon;
  /**
   * Establishes a string value that labels the close button.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Callback to invoke when inplace is opened.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when inplace is closed.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  templates;
  hover;
  displayTemplate;
  contentTemplate;
  closeIconTemplate;
  constructor(cd) {
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'display':
          this.displayTemplate = item.template;
          break;
        case 'closeicon':
          this.closeIconTemplate = item.template;
          break;
        case 'content':
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  onActivateClick(event) {
    if (!this.preventClick) this.activate(event);
  }
  onDeactivateClick(event) {
    if (!this.preventClick) this.deactivate(event);
  }
  /**
   * Activates the content.
   * @param {Event} event - Browser event.
   * @group Method
   */
  activate(event) {
    if (!this.disabled) {
      this.active = true;
      this.onActivate.emit(event);
      this.cd.markForCheck();
    }
  }
  /**
   * Deactivates the content.
   * @param {Event} event - Browser event.
   * @group Method
   */
  deactivate(event) {
    if (!this.disabled) {
      this.active = false;
      this.hover = false;
      this.onDeactivate.emit(event);
      this.cd.markForCheck();
    }
  }
  onKeydown(event) {
    if (event.code === 'Enter') {
      this.activate(event);
      event.preventDefault();
    }
  }
  static ɵfac = function Inplace_Factory(t) {
    return new (t || Inplace)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Inplace,
    selectors: [["p-inplace"]],
    contentQueries: function Inplace_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      active: "active",
      closable: "closable",
      disabled: "disabled",
      preventClick: "preventClick",
      style: "style",
      styleClass: "styleClass",
      closeIcon: "closeIcon",
      closeAriaLabel: "closeAriaLabel"
    },
    outputs: {
      onActivate: "onActivate",
      onDeactivate: "onDeactivate"
    },
    ngContentSelectors: _c4,
    decls: 3,
    vars: 9,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-inplace-display", "tabindex", "0", "role", "button", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["class", "p-inplace-content", 4, "ngIf"], ["tabindex", "0", "role", "button", 1, "p-inplace-display", 3, "ngClass", "click", "keydown"], [4, "ngTemplateOutlet"], [1, "p-inplace-content"], [4, "ngIf"], ["type", "button", "pButton", "", 3, "icon", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "icon", "click"], ["type", "button", "pButton", "", 3, "ngClass", "click"]],
    template: function Inplace_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Inplace_div_1_Template, 3, 4, "div", 1)(2, Inplace_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.closable))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", "polite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_icons_times__WEBPACK_IMPORTED_MODULE_4__.TimesIcon],
    styles: ["@layer primeng{.p-inplace .p-inplace-display{display:inline;cursor:pointer}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{flex:1 1 auto;width:1%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Inplace, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inplace',
      template: `
        <div [ngClass]="{ 'p-inplace p-component': true, 'p-inplace-closable': closable }" [ngStyle]="style" [class]="styleClass" [attr.aria-live]="'polite'">
            <div class="p-inplace-display" (click)="onActivateClick($event)" tabindex="0" role="button" (keydown)="onKeydown($event)" [ngClass]="{ 'p-disabled': disabled }" *ngIf="!active">
                <ng-content select="[pInplaceDisplay]"></ng-content>
                <ng-container *ngTemplateOutlet="displayTemplate"></ng-container>
            </div>
            <div class="p-inplace-content" *ngIf="active">
                <ng-content select="[pInplaceContent]"></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>

                <ng-container *ngIf="closable">
                    <button *ngIf="closeIcon" type="button" [icon]="closeIcon" pButton (click)="onDeactivateClick($event)" [attr.aria-label]="closeAriaLabel"></button>
                    <button *ngIf="!closeIcon" type="button" pButton [ngClass]="'p-button-icon-only'" (click)="onDeactivateClick($event)" [attr.aria-label]="closeAriaLabel">
                        <TimesIcon *ngIf="!closeIconTemplate" />
                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                    </button>
                </ng-container>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-inplace .p-inplace-display{display:inline;cursor:pointer}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{flex:1 1 auto;width:1%}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preventClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onActivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDeactivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }]
  });
})();
class InplaceModule {
  static ɵfac = function InplaceModule_Factory(t) {
    return new (t || InplaceModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InplaceModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_4__.TimesIcon, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InplaceModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_4__.TimesIcon],
      exports: [Inplace, InplaceDisplay, InplaceContent, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
      declarations: [Inplace, InplaceDisplay, InplaceContent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_apps_kanban_kanban_app_module_ts.js.map