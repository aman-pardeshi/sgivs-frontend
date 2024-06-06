"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_ecommerce_newproduct_newproduct_module_ts"],{

/***/ 56129:
/*!***********************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/newproduct/newproduct-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewProductRoutingModule: () => (/* binding */ NewProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _newproduct_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproduct.component */ 81484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class NewProductRoutingModule {
  static #_ = this.ɵfac = function NewProductRoutingModule_Factory(t) {
    return new (t || NewProductRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NewProductRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      component: _newproduct_component__WEBPACK_IMPORTED_MODULE_0__.NewProductComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewProductRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 81484:
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/newproduct/newproduct.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewProductComponent: () => (/* binding */ NewProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/chip */ 23500);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputswitch */ 81763);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/editor */ 12435);












const _c0 = ["buttonEl"];
function NewProductComponent_ng_template_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Drop or select images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NewProductComponent_ng_template_19_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NewProductComponent_ng_template_19_div_2_div_1_Template_div_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const file_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onImageMouseOver(file_r7));
    })("mouseleave", function NewProductComponent_ng_template_19_div_2_div_1_Template_div_mouseleave_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const file_r7 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onImageMouseLeave(file_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewProductComponent_ng_template_19_div_2_div_1_Template_button_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const file_r7 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.removeImage(file_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", file_r7.objectURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", file_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", file_r7.name);
  }
}
function NewProductComponent_ng_template_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewProductComponent_ng_template_19_div_2_div_1_Template, 4, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.product.images);
  }
}
function NewProductComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewProductComponent_ng_template_19_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.advancedFileInput.nativeElement.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewProductComponent_ng_template_19_div_1_Template, 4, 0, "div", 35)(2, NewProductComponent_ng_template_19_div_2_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.product.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.product.images.length);
  }
}
const _c1 = () => ({
  "border-radius": "20px"
});
function NewProductComponent_p_chip_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-chip", 46)(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewProductComponent_p_chip_35_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const tag_r16 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onChipRemove(tag_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r16);
  }
}
function NewProductComponent_div_45_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 52);
  }
}
function NewProductComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewProductComponent_div_45_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const color_r20 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.onColorSelect(color_r20.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewProductComponent_div_45_i_1_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r20 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](color_r20.background);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.product.colors.indexOf(color_r20.name) !== -1);
  }
}
const _c2 = () => ({
  "height": "250px"
});
class NewProductComponent {
  constructor() {
    this.text = '';
    this.categoryOptions = ['Sneakers', 'Apparel', 'Socks'];
    this.colorOptions = [{
      name: 'Black',
      background: "bg-gray-900"
    }, {
      name: 'Orange',
      background: "bg-orange-500"
    }, {
      name: 'Navy',
      background: "bg-blue-500"
    }];
    this.product = {
      name: '',
      price: '',
      code: '',
      sku: '',
      status: 'Draft',
      tags: ['Nike', 'Sneaker'],
      category: 'Sneakers',
      colors: ['Blue'],
      stock: 'Sneakers',
      inStock: true,
      description: '',
      images: []
    };
    this.uploadedFiles = [];
    this.showRemove = false;
  }
  onChipRemove(item) {
    this.product.tags = this.product.tags.filter(i => i !== item);
  }
  onColorSelect(color) {
    this.product.colors.indexOf(color) == -1 ? this.product.colors.push(color) : this.product.colors.splice(this.product.colors.indexOf(color), 1);
  }
  onUpload(event) {
    for (let file of event.files) {
      this.product.images.push(file);
    }
  }
  onImageMouseOver(file) {
    this.buttonEl.toArray().forEach(el => {
      el.nativeElement.id === file.name ? el.nativeElement.style.display = 'flex' : null;
    });
  }
  onImageMouseLeave(file) {
    this.buttonEl.toArray().forEach(el => {
      el.nativeElement.id === file.name ? el.nativeElement.style.display = 'none' : null;
    });
  }
  removeImage(file) {
    this.product.images = this.product.images.filter(i => i !== file);
  }
  static #_ = this.ɵfac = function NewProductComponent_Factory(t) {
    return new (t || NewProductComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NewProductComponent,
    selectors: [["ng-component"]],
    viewQuery: function NewProductComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonEl = _t);
      }
    },
    decls: 58,
    vars: 21,
    consts: [[1, "card"], [1, "block", "text-900", "font-bold", "text-xl", "mb-4"], [1, "grid", "grid-nogutter", "flex-wrap", "gap-3", "p-fluid"], [1, "col-12", "lg:col-8"], [1, "grid", "formgrid"], [1, "col-12", "field"], ["pInputText", "", "type", "text", "placeholder", "Product Name", "label", "Product Name", 3, "ngModel", "ngModelChange"], [1, "col-12", "lg:col-4", "field"], ["pInputText", "", "type", "text", "placeholder", "Price", "label", "Price", 3, "ngModel", "ngModelChange"], ["pInputText", "", "type", "text", "placeholder", "Product Code", "label", "Product Code", 3, "ngModel", "ngModelChange"], ["pInputText", "", "type", "text", "placeholder", "Product SKU", "label", "SKU", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["name", "demo[]", "url", "./upload.php", "accept", "image/*", "styleClass", "border-1 surface-border surface-card border-round", 3, "customUpload", "multiple", "showUploadButton", "showCancelButton", "auto", "onUpload", "onSelect"], ["fileUploader", ""], ["pTemplate", "content"], [1, "flex-1", "w-full", "lg:w-3", "xl:w-4", "flex", "flex-column", "row-gap-3"], [1, "border-1", "surface-border", "border-round"], [1, "text-900", "font-bold", "block", "border-bottom-1", "surface-border", "p-3"], [1, "p-3"], [1, "bg-gray-100", "py-2", "px-3", "flex", "align-items-center", "border-round"], [1, "text-black-alpha-90", "font-bold", "mr-3"], [1, "text-black-alpha-60", "font-semibold"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-fw pi-pencil", 1, "p-button-rounded", "p-button-text", "text-black-alpha-60", "ml-auto"], [1, "p-3", "flex", "flex-wrap", "gap-1"], ["styleClass", "mr-2 py-2 px-3 text-900 font-bold surface-card border-1 surface-border", 3, "style", 4, "ngFor", "ngForOf"], ["placeholder", "Select a category", 3, "options", "ngModel", "ngModelChange"], [1, "p-3", "flex"], ["class", "w-2rem h-2rem mr-2 border-1 surface-border border-circle cursor-pointer flex justify-content-center align-items-center", 3, "class", "click", 4, "ngFor", "ngForOf"], ["placeholder", "Select stock", 3, "options", "ngModel", "ngModelChange"], [1, "border-1", "surface-border", "flex", "justify-content-between", "align-items-center", "py-2", "px-3", "border-round"], [1, "text-900", "font-bold", "p-3"], [1, "flex", "flex-column", "sm:flex-row", "justify-content-between", "align-items-center", "gap-3", "py-2"], ["pButton", "", "pRipple", "", "label", "Discard", "icon", "pi pi-fw pi-trash", 1, "p-button-danger", "flex-1", "p-button-outlined"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-fw pi-check", 1, "p-button-primary", "flex-1", "border-round"], [1, "h-15rem", "overflow-y-auto", "py-3", "border-round", 2, "cursor", "copy", 3, "click"], ["class", "flex flex-column w-full h-full justify-content-center align-items-center", 4, "ngIf"], ["class", "flex flex-wrap gap-3 border-round", 4, "ngIf"], [1, "flex", "flex-column", "w-full", "h-full", "justify-content-center", "align-items-center"], [1, "pi", "pi-file", "text-4xl", "text-primary"], [1, "block", "font-semibold", "text-900", "text-lg", "mt-3"], [1, "flex", "flex-wrap", "gap-3", "border-round"], ["class", "h-full relative w-7rem h-7rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto", "style", "padding: 1px;", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "h-full", "relative", "w-7rem", "h-7rem", "border-3", "border-transparent", "border-round", "hover:bg-primary", "transition-duration-100", "cursor-auto", 2, "padding", "1px", 3, "mouseenter", "mouseleave"], [1, "w-full", "h-full", "border-round", "shadow-2", 3, "src", "alt"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-primary", "text-sm", "absolute", "justify-content-center", "align-items-center", "cursor-pointer", "w-2rem", "h-2rem", 2, "top", "-10px", "right", "-10px", "display", "none", 3, "id", "click"], ["buttonEl", ""], ["styleClass", "mr-2 py-2 px-3 text-900 font-bold surface-card border-1 surface-border"], [1, "mr-3"], [1, "chip-remove-icon", "flex", "align-items-center", "justify-content-center", "border-1", "surface-border", "bg-gray-100", "border-circle", "cursor-pointer", 3, "click"], [1, "pi", "pi-fw", "pi-times", "text-black-alpha-60"], [1, "w-2rem", "h-2rem", "mr-2", "border-1", "surface-border", "border-circle", "cursor-pointer", "flex", "justify-content-center", "align-items-center", 3, "click"], ["class", "pi pi-check text-sm text-white", 4, "ngIf"], [1, "pi", "pi-check", "text-sm", "text-white"]],
    template: function NewProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewProductComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.product.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewProductComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.product.price = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewProductComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.product.code = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewProductComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.product.sku = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5)(15, "p-editor", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewProductComponent_Template_p_editor_ngModelChange_15_listener($event) {
          return ctx.product.description = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5)(17, "p-fileUpload", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onUpload", function NewProductComponent_Template_p_fileUpload_onUpload_17_listener($event) {
          return ctx.onUpload($event);
        })("onSelect", function NewProductComponent_Template_p_fileUpload_onSelect_17_listener($event) {
          return ctx.onUpload($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewProductComponent_ng_template_19_Template, 3, 2, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18)(25, "div", 19)(26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16)(32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NewProductComponent_p_chip_35_Template, 5, 4, "p-chip", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16)(37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18)(40, "p-dropdown", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewProductComponent_Template_p_dropdown_ngModelChange_40_listener($event) {
          return ctx.product.category = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16)(42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, NewProductComponent_div_45_Template, 2, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16)(47, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18)(50, "p-dropdown", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewProductComponent_Template_p_dropdown_ngModelChange_50_listener($event) {
          return ctx.product.stock = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29)(52, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "In stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p-inputSwitch", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewProductComponent_Template_p_inputSwitch_ngModelChange_54_listener($event) {
          return ctx.product.inStock = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "button", 32)(57, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.sku);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customUpload", true)("multiple", true)("showUploadButton", true)("showCancelButton", false)("auto", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.categoryOptions)("ngModel", ctx.product.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colorOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.categoryOptions)("ngModel", ctx.product.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.inStock);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, primeng_chip__WEBPACK_IMPORTED_MODULE_3__.Chip, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__.FileUpload, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__.InputSwitch, primeng_editor__WEBPACK_IMPORTED_MODULE_11__.Editor],
    styles: [".chip-remove-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.chip-remove-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n\n[_nghost-%COMP%]     .p-fileupload {\n  padding: 0;\n}\n[_nghost-%COMP%]     .p-fileupload .p-fileupload-buttonbar {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload .p-fileupload-content {\n  border: 0 none;\n}\n[_nghost-%COMP%]     .p-fileupload .p-fileupload-row {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload .p-progressbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2Vjb21tZXJjZS9uZXdwcm9kdWN0L25ld3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7O0FBSUk7RUFDSSxVQUFBO0FBRFI7QUFHUTtFQUNJLGFBQUE7QUFEWjtBQUlRO0VBQ0ksY0FBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0FBSFo7QUFNUTtFQUNJLGFBQUE7QUFKWiIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwLXJlbW92ZS1pY29uIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAucC1maWxldXBsb2FkIHtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAucC1maWxldXBsb2FkLWJ1dHRvbmJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtZmlsZXVwbG9hZC1jb250ZW50IHtcbiAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtZmlsZXVwbG9hZC1yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wLXByb2dyZXNzYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH0gICAgXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 96771:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/ecommerce/newproduct/newproduct.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewProductModule: () => (/* binding */ NewProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _newproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproduct-routing.module */ 56129);
/* harmony import */ var _newproduct_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newproduct.component */ 81484);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chip */ 23500);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputswitch */ 81763);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/editor */ 12435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);













class NewProductModule {
  static #_ = this.ɵfac = function NewProductModule_Factory(t) {
    return new (t || NewProductModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NewProductModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _newproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewProductRoutingModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule, primeng_chip__WEBPACK_IMPORTED_MODULE_5__.ChipModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__.FileUploadModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__.InputSwitchModule, primeng_editor__WEBPACK_IMPORTED_MODULE_12__.EditorModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewProductModule, {
    declarations: [_newproduct_component__WEBPACK_IMPORTED_MODULE_1__.NewProductComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _newproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewProductRoutingModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule, primeng_chip__WEBPACK_IMPORTED_MODULE_5__.ChipModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__.FileUploadModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__.InputSwitchModule, primeng_editor__WEBPACK_IMPORTED_MODULE_12__.EditorModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_ecommerce_newproduct_newproduct_module_ts.js.map