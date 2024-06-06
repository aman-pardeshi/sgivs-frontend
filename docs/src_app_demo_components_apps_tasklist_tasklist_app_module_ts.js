"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_apps_tasklist_tasklist_app_module_ts"],{

/***/ 81963:
/*!************************************************************************************!*\
  !*** ./src/app/demo/components/apps/tasklist/create-task/create-task.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTaskComponent: () => (/* binding */ CreateTaskComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_demo_service_member_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/member.service */ 9753);
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/task.service */ 99063);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/editor */ 12435);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 57411);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/autocomplete */ 74823);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 51339);














function CreateTaskComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", member_r2.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", member_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r2.name);
  }
}
function CreateTaskComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", member_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", member_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.name);
  }
}
const _c0 = () => ({
  "height": "150px"
});
const _c1 = () => ({
  "height": "2.5rem"
});
class CreateTaskComponent {
  constructor(memberService, messageService, taskService) {
    this.memberService = memberService;
    this.messageService = messageService;
    this.taskService = taskService;
    this.members = [];
    this.filteredMembers = [];
    this.dialogConfig = {
      header: '',
      visible: false
    };
    this.subscription = this.taskService.selectedTask$.subscribe(data => this.task = data);
    this.dialogSubscription = this.taskService.dialogSource$.subscribe(data => {
      this.dialogConfig = data;
      if (this.dialogConfig.newTask) {
        this.resetTask();
      }
    });
  }
  ngOnInit() {
    this.memberService.getMembers().then(members => this.members = members);
    this.resetTask();
  }
  filterMembers(event) {
    let filtered = [];
    let query = event.query;
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.name?.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(member);
      }
    }
    this.filteredMembers = filtered;
  }
  save() {
    this.task.id = Math.floor(Math.random() * 1000);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Task "${this.task.name}" created successfully.`
    });
    this.taskService.addTask(this.task);
    this.taskService.closeDialog();
  }
  cancelTask() {
    this.resetTask();
    this.taskService.closeDialog();
  }
  resetTask() {
    this.task = {
      id: this.task && this.task.id ? this.task.id : Math.floor(Math.random() * 1000),
      status: 'Waiting'
    };
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function CreateTaskComponent_Factory(t) {
    return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_member_service__WEBPACK_IMPORTED_MODULE_0__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CreateTaskComponent,
    selectors: [["app-create-task"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService])],
    decls: 29,
    vars: 18,
    consts: [["styleClass", "mx-3 sm:mx-0 sm:w-full md:w-8 lg:w-6", "contentStyleClass", "border-round-bottom border-top-1 surface-border p-0", 3, "header", "visible", "modal", "dismissableMask", "visibleChange"], [1, "p-4"], [1, "grid", "p-fluid", "formgrid"], [1, "col-12", "field"], ["for", "name", 1, "text-900", "font-semibold"], ["id", "name", "type", "text", "placeholder", "Title", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "description", 1, "text-900", "font-semibold"], [3, "ngModel", "ngModelChange"], [1, "col-6", "field", "mt-0"], ["for", "start", 1, "text-900", "font-semibold"], ["appendTo", "body", "dateFormat", "yy-mm-dd", "inputId", "start", "placeholder", "Start Date", 3, "showTime", "ngModel", "ngModelChange"], ["for", "end", 1, "text-900", "font-semibold"], ["appendTo", "body", "dateFormat", "yy-mm-dd", "inputId", "end", "placeholder", "Due Date", 3, "showTime", "ngModel", "ngModelChange"], ["for", "members", 1, "text-900", "font-semibold"], ["appendTo", "body", "inputId", "members", "field", "name", "placeholder", "Choose team members", 3, "ngModel", "suggestions", "multiple", "inputStyle", "ngModelChange", "completeMethod"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "col-12", "flex", "justify-content-end", "mt-4"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", "label", "Cancel", 1, "p-button-outlined", "w-8rem", "mr-3", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", "label", "Save", 1, "p-button-primary", "w-8rem", 3, "click"], [1, "flex", "align-items-center"], [1, "h-2rem", "w-2rem", "mr-2", 3, "src", "alt"], [1, "text-900", "font-medium"], [1, "flex", "align-items-center", "border-round"]],
    template: function CreateTaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function CreateTaskComponent_Template_p_dialog_visibleChange_1_listener($event) {
          return ctx.dialogConfig.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Task Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTaskComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.task.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p-editor", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTaskComponent_Template_p_editor_ngModelChange_11_listener($event) {
          return ctx.task.description = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p-calendar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTaskComponent_Template_p_calendar_ngModelChange_15_listener($event) {
          return ctx.task.startDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p-calendar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTaskComponent_Template_p_calendar_ngModelChange_19_listener($event) {
          return ctx.task.endDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 3)(21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Add Team Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p-autoComplete", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTaskComponent_Template_p_autoComplete_ngModelChange_23_listener($event) {
          return ctx.task.members = $event;
        })("completeMethod", function CreateTaskComponent_Template_p_autoComplete_completeMethod_23_listener($event) {
          return ctx.filterMembers($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CreateTaskComponent_ng_template_24_Template, 4, 3, "ng-template", 15)(25, CreateTaskComponent_ng_template_25_Template, 4, 3, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_27_listener() {
          return ctx.cancelTask();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_28_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx.dialogConfig.header || "")("visible", ctx.dialogConfig.visible)("modal", true)("dismissableMask", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.task.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.task.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showTime", false)("ngModel", ctx.task.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showTime", false)("ngModel", ctx.task.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.task.members)("suggestions", ctx.filteredMembers)("multiple", true)("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c1));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_editor__WEBPACK_IMPORTED_MODULE_7__.Editor, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutoComplete, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.Ripple],
    encapsulation: 2
  });
}

/***/ }),

/***/ 99063:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/apps/tasklist/service/task.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskService: () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);



class TaskService {
  constructor(http) {
    this.http = http;
    this.dialogConfig = {
      visible: false,
      header: '',
      newTask: false
    };
    this.tasks = [];
    this.taskSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.tasks);
    this.selectedTask = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.dialogSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.dialogConfig);
    this.taskSource$ = this.taskSource.asObservable();
    this.selectedTask$ = this.selectedTask.asObservable();
    this.dialogSource$ = this.dialogSource.asObservable();
    this.http.get('assets/demo/data/tasks.json').toPromise().then(res => res.data).then(data => {
      this.tasks = data;
      this.taskSource.next(data);
    });
  }
  addTask(task) {
    if (this.tasks.includes(task)) {
      this.tasks = this.tasks.map(t => t.id === task.id ? task : t);
    } else {
      this.tasks = [...this.tasks, task];
    }
    this.taskSource.next(this.tasks);
  }
  removeTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.taskSource.next(this.tasks);
  }
  onTaskSelect(task) {
    this.selectedTask.next(task);
  }
  markAsCompleted(task) {
    this.tasks = this.tasks.map(t => t.id === task.id ? task : t);
    this.taskSource.next(this.tasks);
  }
  showDialog(header, newTask) {
    this.dialogConfig = {
      visible: true,
      header: header,
      newTask: newTask
    };
    this.dialogSource.next(this.dialogConfig);
  }
  closeDialog() {
    this.dialogConfig = {
      visible: false
    };
    this.dialogSource.next(this.dialogConfig);
  }
  static #_ = this.ɵfac = function TaskService_Factory(t) {
    return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TaskService,
    factory: TaskService.ɵfac
  });
}

/***/ }),

/***/ 12294:
/*!********************************************************************************!*\
  !*** ./src/app/demo/components/apps/tasklist/task-list/task-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskListComponent: () => (/* binding */ TaskListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/task.service */ 99063);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 11580);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 51339);










const _c0 = ["menu"];
function TaskListComponent_li_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r1.comments);
  }
}
function TaskListComponent_li_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r1.attachments);
  }
}
function TaskListComponent_li_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.parseDate(task_r1.startDate));
  }
}
function TaskListComponent_li_4_p_avatar_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-avatar", 23);
  }
  if (rf & 2) {
    const member_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("image", "assets/demo/images/avatar/", member_r11.image, "");
  }
}
const _c1 = () => ({
  "background-color": "#ffffff",
  "color": "#212121",
  "border": "2px solid var(--surface-border)"
});
function TaskListComponent_li_4_p_avatar_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-avatar", 24);
  }
  if (rf & 2) {
    const task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("label", "+ ", task_r1.members.length - 4, "");
  }
}
const _c2 = a0 => ({
  "line-through": a0
});
function TaskListComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3)(1, "div", 4)(2, "p-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function TaskListComponent_li_4_Template_p_checkbox_onChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const task_r1 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onCheckboxChange($event, task_r1));
    })("ngModelChange", function TaskListComponent_li_4_Template_p_checkbox_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const task_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](task_r1.completed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7)(6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TaskListComponent_li_4_span_7_Template, 3, 1, "span", 9)(8, TaskListComponent_li_4_span_8_Template, 3, 1, "span", 9)(9, TaskListComponent_li_4_span_9_Template, 3, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11)(11, "p-avatarGroup", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TaskListComponent_li_4_p_avatar_12_Template, 1, 1, "p-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TaskListComponent_li_4_p_avatar_14_Template, 1, 4, "p-avatar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskListComponent_li_4_Template_button_click_15_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const task_r1 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.toggleMenu($event, task_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p-menu", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("binary", true)("ngModel", task_r1.completed)("inputId", task_r1.id.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c2, task_r1.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r1.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r1.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r1.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](13, 12, task_r1.members, 0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r1 && task_r1.members && task_r1.members.length > 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popup", true)("model", ctx_r0.menuItems);
  }
}
class TaskListComponent {
  constructor(taskService) {
    this.taskService = taskService;
    this.menuItems = [];
  }
  ngOnInit() {
    this.menuItems = [{
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => this.onEdit()
    }, {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => this.handleDelete()
    }];
  }
  parseDate(date) {
    let d = new Date(date);
    return d.toUTCString().split(' ').slice(1, 3).join(' ');
  }
  handleDelete() {
    this.taskService.removeTask(this.clickedTask.id);
  }
  toggleMenu(event, task) {
    this.clickedTask = task;
    this.menu.toggle(event);
  }
  onEdit() {
    this.taskService.onTaskSelect(this.clickedTask);
    this.taskService.showDialog('Edit Task', false);
  }
  onCheckboxChange(event, task) {
    event.originalEvent.stopPropagation();
    task.completed = event.checked;
    this.taskService.markAsCompleted(task);
  }
  static #_ = this.ɵfac = function TaskListComponent_Factory(t) {
    return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TaskListComponent,
    selectors: [["app-task-list"]],
    viewQuery: function TaskListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
      }
    },
    inputs: {
      taskList: "taskList",
      title: "title"
    },
    decls: 5,
    vars: 2,
    consts: [[1, "text-900", "font-semibold", "text-lg", "mt-5", "mb-3", "border-bottom-1", "surface-border", "py-3"], [1, "list-none", "p-0", "m-0"], ["class", "flex flex-column gap-3 md:flex-row md:align-items-center p-2 border-bottom-1 surface-border", 4, "ngFor", "ngForOf"], [1, "flex", "flex-column", "gap-3", "md:flex-row", "md:align-items-center", "p-2", "border-bottom-1", "surface-border"], [1, "flex", "align-items-center", "flex-1"], [3, "binary", "ngModel", "inputId", "onChange", "ngModelChange"], ["for", "task.id", 1, "font-medium", "ml-2", 2, "word-break", "break-word", 3, "ngClass"], [1, "flex", "flex-1", "gap-3", "flex-column", "sm:flex-row", "sm:justify-content-between"], [1, "flex", "align-items-center"], ["class", "flex align-items-center font-semibold mr-3", 4, "ngIf"], ["class", "flex align-items-center font-semibold white-space-nowrap", 4, "ngIf"], [1, "flex", "align-items-center", "sm:justify-content-end"], ["styleClass", "mr-3"], ["size", "large", "shape", "circle", 3, "image", 4, "ngFor", "ngForOf"], ["shape", "circle", "size", "large", 3, "label", "style", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "z-3", "ml-auto", "sm:ml-0", 3, "click"], ["styleClass", "w-8rem", 3, "popup", "model"], ["menu", ""], [1, "flex", "align-items-center", "font-semibold", "mr-3"], [1, "pi", "pi-comment", "mr-2"], [1, "pi", "pi-paperclip", "mr-2"], [1, "flex", "align-items-center", "font-semibold", "white-space-nowrap"], [1, "pi", "pi-clock", "mr-2"], ["size", "large", "shape", "circle", 3, "image"], ["shape", "circle", "size", "large", 3, "label"]],
    template: function TaskListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TaskListComponent_li_4_Template, 18, 18, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.taskList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.Avatar, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_6__.AvatarGroup, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 23538:
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/apps/tasklist/tasklist.app-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskListAppRoutingModule: () => (/* binding */ TaskListAppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _tasklist_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasklist.app.component */ 24441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class TaskListAppRoutingModule {
  static #_ = this.ɵfac = function TaskListAppRoutingModule_Factory(t) {
    return new (t || TaskListAppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TaskListAppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _tasklist_app_component__WEBPACK_IMPORTED_MODULE_0__.TaskListAppComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TaskListAppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 24441:
/*!*************************************************************************!*\
  !*** ./src/app/demo/components/apps/tasklist/tasklist.app.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskListAppComponent: () => (/* binding */ TaskListAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/task.service */ 99063);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task/create-task.component */ 81963);
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-list/task-list.component */ 12294);






class TaskListAppComponent {
  constructor(taskService) {
    this.taskService = taskService;
    this.todo = [];
    this.completed = [];
    this.subscription = this.taskService.taskSource$.subscribe(data => this.categorize(data));
  }
  categorize(tasks) {
    this.todo = tasks.filter(t => t.completed !== true);
    this.completed = tasks.filter(t => t.completed);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  showDialog() {
    this.taskService.showDialog('Create Task', true);
  }
  static #_ = this.ɵfac = function TaskListAppComponent_Factory(t) {
    return new (t || TaskListAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TaskListAppComponent,
    selectors: [["ng-component"]],
    decls: 8,
    vars: 2,
    consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-5"], [1, "text-900", "text-xl", "font-semibold"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "label", "Create Task", 1, "p-button-outlined", "font-semibold", 3, "click"], ["title", "ToDo", 3, "taskList"], ["title", "Completed", 3, "taskList"]],
    template: function TaskListAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Task List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskListAppComponent_Template_button_click_4_listener() {
          return ctx.showDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-task-list", 4)(6, "app-task-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-create-task");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("taskList", ctx.todo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("taskList", ctx.completed);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__.CreateTaskComponent, _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__.TaskListComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 26978:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/apps/tasklist/tasklist.app.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskListAppModule: () => (/* binding */ TaskListAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _tasklist_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasklist.app-routing.module */ 23538);
/* harmony import */ var _tasklist_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasklist.app.component */ 24441);
/* harmony import */ var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-task/create-task.component */ 81963);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/editor */ 12435);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 57411);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/autocomplete */ 74823);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/avatar */ 87889);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/avatargroup */ 11009);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/checkbox */ 11580);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list/task-list.component */ 12294);
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/task.service */ 99063);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);




















class TaskListAppModule {
  static #_ = this.ɵfac = function TaskListAppModule_Factory(t) {
    return new (t || TaskListAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: TaskListAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [_service_task_service__WEBPACK_IMPORTED_MODULE_4__.TaskService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _tasklist_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaskListAppRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_editor__WEBPACK_IMPORTED_MODULE_10__.EditorModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.ToastModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__.AutoCompleteModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_14__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_15__.AvatarGroupModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.CheckboxModule, primeng_menu__WEBPACK_IMPORTED_MODULE_17__.MenuModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_19__.RippleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TaskListAppModule, {
    declarations: [_tasklist_app_component__WEBPACK_IMPORTED_MODULE_1__.TaskListAppComponent, _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_2__.CreateTaskComponent, _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__.TaskListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _tasklist_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaskListAppRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_editor__WEBPACK_IMPORTED_MODULE_10__.EditorModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.ToastModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__.AutoCompleteModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_14__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_15__.AvatarGroupModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.CheckboxModule, primeng_menu__WEBPACK_IMPORTED_MODULE_17__.MenuModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_19__.RippleModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_apps_tasklist_tasklist_app_module_ts.js.map