"use strict";
(self["webpackChunkverona_ng"] = self["webpackChunkverona_ng"] || []).push([["src_app_demo_components_primeblocks_primeblocks_module_ts"],{

/***/ 59287:
/*!************************************************************************!*\
  !*** ./src/app/demo/components/primeblocks/blocks/blocks.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlocksComponent: () => (/* binding */ BlocksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/chip */ 23500);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/checkbox */ 11580);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var _blockviewer_blockviewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blockviewer/blockviewer.component */ 3044);







class BlocksComponent {
  constructor() {
    this.block1 = `
<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens</span>
            <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <button pButton pRipple label="Learn More" type="button" class="mr-3 p-button-raised"></button>
            <button pButton pRipple label="Live Demo" type="button" class="p-button-outlined"></button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="assets/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`;
    this.block2 = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-3xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
    </div>
    <div class="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Built for Developers</div>
            <span class="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
            <span class="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Easy to Use</div>
            <span class="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
            <span class="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Open Source</div>
            <span class="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Trusted Securitty</div>
            <span class="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>`;
    this.block3 = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div class="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

    <div class="grid">
        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Basic</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$9</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Morbi tincidunt augue</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full mt-auto"></button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Premium</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$29</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Duis ultricies lacus sed</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full"></button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Enterprise</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$49</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Duis ultricies lacus sed</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Imperdiet proin</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span class="text-900">Nisi scelerisque</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full p-button-outlined"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;
    this.block4 = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
        <div class="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
        <div class="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <button pButton pRipple label="Join Now" icon="pi pi-discord" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></button>
    </div>
</div>`;
    this.block5 = `
<div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🔥 Hot Deals!</div>
    <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
    </a>
    <a pRipple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
    </a>
</div>`;
    this.block6 = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span class="text-900 line-height-3">Analytics</span>
        </li>
    </ul>
    <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
            <div class="font-medium text-3xl text-900">Customers</div>
            <div class="flex align-items-center text-700 flex-wrap">
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-users mr-2"></i>
                    <span>332 Active Users</span>
                </div>
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-globe mr-2"></i>
                    <span>9402 Sessions</span>
                </div>
                <div class="flex align-items-center mt-3">
                    <i class="pi pi-clock mr-2"></i>
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div class="mt-3 lg:mt-0">
            <button pButton pRipple label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></button>
            <button pButton pRipple label="Save" icon="pi pi-check"></button>
        </div>
    </div>
</div>`;
    this.block7 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Orders</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Revenue</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Customers</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-500">newly registered</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Comments</span>
                        <div class="text-900 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div>
    </div>
</div>`;
    this.block8 = `
<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <input id="email1" type="text" placeholder="Email address" pInputText class="w-full mb-3">

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <input id="password1" type="password" placeholder="Password" pInputText class="w-full mb-3">

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <p-checkbox id="rememberme1" [binary]="true" styleClass="mr-2"></p-checkbox>
                <label for="rememberme1" class="text-900">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <button pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
    </div>
</div>`;
    this.block9 = `
<div class="surface-section">
    <div class="font-medium text-3xl text-900 mb-3">Movie Information</div>
    <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Title</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Genre</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                <p-chip label="Crime" class="mr-2"></p-chip>
                <p-chip label="Drama" class="mr-2"></p-chip>
                <p-chip label="Thriller"></p-chip>
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Director</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Actors</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                 when they unknowingly leave a clue at their latest heist.</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
    </ul>
</div>`;
    this.block10 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
    <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`;
  }
  static #_ = this.ɵfac = function BlocksComponent_Factory(t) {
    return new (t || BlocksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlocksComponent,
    selectors: [["ng-component"]],
    decls: 368,
    vars: 21,
    consts: [["header", "Hero", 3, "code", "free"], [1, "grid", "grid-nogutter", "surface-section", "text-800"], [1, "col-12", "md:col-6", "p-6", "text-center", "md:text-left", "flex", "align-items-center"], [1, "block", "text-6xl", "font-bold", "mb-1"], [1, "text-6xl", "text-primary", "font-bold", "mb-3"], [1, "mt-0", "mb-4", "text-700", "line-height-3"], ["pButton", "", "pRipple", "", "label", "Learn More", "type", "button", 1, "mr-3", "p-button-raised"], ["pButton", "", "pRipple", "", "label", "Live Demo", "type", "button", 1, "p-button-outlined"], [1, "col-12", "md:col-6", "overflow-hidden"], ["src", "assets/demo/images/blocks/hero/hero-1.png", "alt", "Image", 1, "md:ml-auto", "block", "md:h-full", 2, "clip-path", "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"], ["header", "Feature", 3, "code", "free"], [1, "surface-section", "px-4", "py-8", "md:px-6", "lg:px-8", "text-center"], [1, "mb-3", "font-bold", "text-3xl"], [1, "text-900"], [1, "text-blue-600"], [1, "text-700", "mb-6"], [1, "grid"], [1, "col-12", "md:col-4", "mb-4", "px-5"], [1, "p-3", "shadow-2", "mb-3", "inline-block", "surface-card", 2, "border-radius", "10px"], [1, "pi", "pi-desktop", "text-4xl", "text-blue-500"], [1, "text-900", "text-xl", "mb-3", "font-medium"], [1, "text-700", "line-height-3"], [1, "pi", "pi-lock", "text-4xl", "text-blue-500"], [1, "pi", "pi-check-circle", "text-4xl", "text-blue-500"], [1, "pi", "pi-globe", "text-4xl", "text-blue-500"], [1, "pi", "pi-github", "text-4xl", "text-blue-500"], [1, "col-12", "md:col-4", "md:mb-4", "mb-0", "px-3"], [1, "pi", "pi-shield", "text-4xl", "text-blue-500"], ["header", "Pricing", 3, "code", "free"], [1, "surface-ground", "px-4", "py-8", "md:px-6", "lg:px-8"], [1, "text-900", "font-bold", "text-6xl", "mb-4", "text-center"], [1, "text-700", "text-xl", "mb-6", "text-center", "line-height-3"], [1, "col-12", "lg:col-4"], [1, "p-3", "h-full"], [1, "shadow-2", "p-3", "h-full", "flex", "flex-column", "surface-card", 2, "border-radius", "6px"], [1, "text-900", "font-medium", "text-xl", "mb-2"], [1, "text-600"], [1, "my-3", "mx-0", "border-top-1", "border-none", "surface-border"], [1, "flex", "align-items-center"], [1, "font-bold", "text-2xl", "text-900"], [1, "ml-2", "font-medium", "text-600"], [1, "list-none", "p-0", "m-0", "flex-grow-1"], [1, "flex", "align-items-center", "mb-3"], [1, "pi", "pi-check-circle", "text-green-500", "mr-2"], [1, "mb-3", "mx-0", "border-top-1", "border-none", "surface-border", "mt-auto"], ["pButton", "", "pRipple", "", "label", "Buy Now", 1, "p-3", "w-full", "mt-auto"], [1, "mb-3", "mx-0", "border-top-1", "border-none", "surface-border"], ["pButton", "", "pRipple", "", "label", "Buy Now", 1, "p-3", "w-full"], [1, "shadow-2", "p-3", "flex", "flex-column", "surface-card", 2, "border-radius", "6px"], ["pButton", "", "pRipple", "", "label", "Buy Now", 1, "p-3", "w-full", "p-button-outlined"], ["header", "Call to Action", 3, "code", "free"], [1, "surface-section", "px-4", "py-8", "md:px-6", "lg:px-8"], [1, "text-700", "text-center"], [1, "text-blue-600", "font-bold", "mb-3"], [1, "pi", "pi-discord"], [1, "text-900", "font-bold", "text-5xl", "mb-3"], [1, "text-700", "text-2xl", "mb-5"], ["pButton", "", "pRipple", "", "label", "Join Now", "icon", "pi pi-discord", 1, "font-bold", "px-5", "py-3", "p-button-raised", "p-button-rounded", "white-space-nowrap"], ["header", "Banner", "containerClass", "surface-section py-8", 3, "code", "free"], [1, "bg-bluegray-900", "text-gray-100", "p-3", "flex", "justify-content-between", "lg:justify-content-center", "align-items-center", "flex-wrap"], [1, "font-bold", "mr-8"], [1, "align-items-center", "hidden", "lg:flex"], [1, "line-height-3"], [1, "flex", "align-items-center", "ml-2", "mr-8"], ["href", "#", 1, "text-white"], [1, "underline", "font-bold"], ["pRipple", "", 1, "flex", "align-items-center", "no-underline", "justify-content-center", "border-circle", "text-gray-50", "hover:bg-bluegray-700", "cursor-pointer", "transition-colors", "transition-duration-150", 2, "width", "2rem", "height", "2rem"], [1, "pi", "pi-times"], [1, "block-category-title"], ["header", "Page Heading", 3, "code", "free"], [1, "surface-section", "px-4", "py-5", "md:px-6", "lg:px-8"], [1, "list-none", "p-0", "m-0", "flex", "align-items-center", "font-medium", "mb-3"], [1, "text-500", "no-underline", "line-height-3", "cursor-pointer"], [1, "px-2"], [1, "pi", "pi-angle-right", "text-500", "line-height-3"], [1, "text-900", "line-height-3"], [1, "flex", "align-items-start", "flex-column", "lg:justify-content-between", "lg:flex-row"], [1, "font-medium", "text-3xl", "text-900"], [1, "flex", "align-items-center", "text-700", "flex-wrap"], [1, "mr-5", "flex", "align-items-center", "mt-3"], [1, "pi", "pi-users", "mr-2"], [1, "pi", "pi-globe", "mr-2"], [1, "flex", "align-items-center", "mt-3"], [1, "pi", "pi-clock", "mr-2"], [1, "mt-3", "lg:mt-0"], ["pButton", "", "pRipple", "", "label", "Add", "icon", "pi pi-user-plus", 1, "p-button-outlined", "mr-2"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check"], ["header", "Stats", 3, "code", "free"], [1, "surface-ground", "px-4", "py-5", "md:px-6", "lg:px-8"], [1, "col-12", "md:col-6", "lg:col-3"], [1, "surface-card", "shadow-2", "p-3", "border-round"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-3"], [1, "text-900", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-shopping-cart", "text-blue-500", "text-xl"], [1, "text-green-500", "font-medium"], [1, "text-500"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-map-marker", "text-orange-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-cyan-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-inbox", "text-cyan-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-100", "border-round", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-comment", "text-purple-500", "text-xl"], ["header", "Sign-In", "containerClass", "surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center", 3, "code", "free"], [1, "surface-card", "p-4", "shadow-2", "border-round", "w-full", "lg:w-6"], [1, "text-center", "mb-5"], ["src", "assets/demo/images/blocks/logos/hyper.svg", "alt", "Image", "height", "50", 1, "mb-3"], [1, "text-900", "text-3xl", "font-medium", "mb-3"], [1, "text-600", "font-medium", "line-height-3"], [1, "font-medium", "no-underline", "ml-2", "text-blue-500", "cursor-pointer"], ["for", "email1", 1, "block", "text-900", "font-medium", "mb-2"], ["id", "email1", "type", "text", "placeholder", "Email address", "pInputText", "", 1, "w-full", "mb-3"], ["for", "password1", 1, "block", "text-900", "font-medium", "mb-2"], ["id", "password1", "type", "password", "placeholder", "Password", "pInputText", "", 1, "w-full", "mb-3"], [1, "flex", "align-items-center", "justify-content-between", "mb-6"], ["id", "rememberme1", "styleClass", "mr-2", 3, "binary"], ["for", "rememberme1", 1, "text-900"], [1, "font-medium", "no-underline", "ml-2", "text-blue-500", "text-right", "cursor-pointer"], ["pButton", "", "pRipple", "", "label", "Sign In", "icon", "pi pi-user", 1, "w-full"], ["header", "Description List", "containerClass", "surface-section px-4 py-8 md:px-6 lg:px-8", 3, "code", "free"], [1, "surface-section"], [1, "font-medium", "text-3xl", "text-900", "mb-3"], [1, "text-500", "mb-5"], [1, "list-none", "p-0", "m-0"], [1, "flex", "align-items-center", "py-3", "px-2", "border-top-1", "surface-border", "flex-wrap"], [1, "text-500", "w-6", "md:w-2", "font-medium"], [1, "text-900", "w-full", "md:w-8", "md:flex-order-0", "flex-order-1"], [1, "w-6", "md:w-2", "flex", "justify-content-end"], ["pButton", "", "pRipple", "", "label", "Edit", "icon", "pi pi-pencil", 1, "p-button-text"], ["label", "Crime", 1, "mr-2"], ["label", "Drama", 1, "mr-2"], ["label", "Thriller"], [1, "flex", "align-items-center", "py-3", "px-2", "border-top-1", "border-bottom-1", "surface-border", "flex-wrap"], [1, "text-900", "w-full", "md:w-8", "md:flex-order-0", "flex-order-1", "line-height-3"], ["header", "Card", "containerClass", "px-4 py-8 md:px-6 lg:px-8", 3, "code", "free"], [1, "surface-card", "p-4", "shadow-2", "border-round"], [1, "text-3xl", "font-medium", "text-900", "mb-3"], [1, "font-medium", "text-500", "mb-3"], [1, "border-2", "border-dashed", "surface-border", 2, "height", "150px"]],
    template: function BlocksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "block-viewer", 0)(1, "div", 1)(2, "div", 2)(3, "section")(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create the screens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "your visitors deserve to see");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "button", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "block-viewer", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "One Product, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Many Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "div", 17)(25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Built for Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17)(32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "End-to-End Encryption");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17)(39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Easy to Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17)(46, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Fast & Global Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 17)(53, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Open Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 26)(60, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Trusted Securitty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "block-viewer", 28)(67, "div", 29)(68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Pricing Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 16)(73, "div", 32)(74, "div", 33)(75, "div", 34)(76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Plan description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 38)(82, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "$9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ul", 41)(88, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Arcu vitae elementum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Dui faucibus in ornare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Morbi tincidunt augue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "hr", 44)(101, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 32)(103, "div", 33)(104, "div", 34)(105, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Plan description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 38)(111, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "$29");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "ul", 41)(117, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Arcu vitae elementum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Dui faucibus in ornare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Morbi tincidunt augue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Duis ultricies lacus sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "hr", 46)(134, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 32)(136, "div", 33)(137, "div", 48)(138, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Plan description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 38)(144, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "$49");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "ul", 41)(150, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Arcu vitae elementum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Dui faucibus in ornare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Morbi tincidunt augue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Duis ultricies lacus sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Imperdiet proin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Nisi scelerisque");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "hr", 46)(175, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "block-viewer", 50)(177, "div", 51)(178, "div", 52)(179, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "\u00A0POWERED BY DISCORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Join Our Design Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "block-viewer", 58)(188, "div", 59)(189, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "\uD83D\uDD25 Hot Deals!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 61)(192, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Libero voluptatum atque exercitationem praesentium provident odit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "a", 63)(195, "a", 64)(196, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Application UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "block-viewer", 69)(203, "div", 70)(204, "ul", 71)(205, "li")(206, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "li")(211, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 76)(214, "div")(215, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 78)(218, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "332 Active Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "9402 Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "2.32m Avg. Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "button", 85)(232, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "block-viewer", 87)(234, "div", 88)(235, "div", 16)(236, "div", 89)(237, "div", 90)(238, "div", 91)(239, "div")(240, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "152");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "24 new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "since last visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 89)(251, "div", 90)(252, "div", 91)(253, "div")(254, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "$2.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "%52+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "since last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 89)(265, "div", 90)(266, "div", 91)(267, "div")(268, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "28441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "520 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "newly registered");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 89)(279, "div", 90)(280, "div", 91)(281, "div")(282, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "152 Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "85 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "responded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "block-viewer", 104)(293, "div", 105)(294, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Welcome Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "span", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Don't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Create today!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div")(303, "label", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "label", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 115)(310, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "p-checkbox", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "label", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "button", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "block-viewer", 120)(318, "div", 121)(319, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Movie Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "ul", 124)(324, "li", 125)(325, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Heat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "button", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "li", 125)(332, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](335, "p-chip", 130)(336, "p-chip", 131)(337, "p-chip", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "button", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "li", 125)(341, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Michael Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "button", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "li", 125)(348, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Actors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Robert De Niro, Al Pacino");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "button", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "li", 133)(355, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, " A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](360, "button", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "block-viewer", 135)(362, "div", 136)(363, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "Card Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block1)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block2)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block3)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block4)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block5)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block6)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block7)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block8)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block9)("free", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.block10)("free", true);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, primeng_chip__WEBPACK_IMPORTED_MODULE_4__.Chip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _blockviewer_blockviewer_component__WEBPACK_IMPORTED_MODULE_0__.BlockViewerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3044:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/primeblocks/blockviewer/blockviewer.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockViewerComponent: () => (/* binding */ BlockViewerComponent)
/* harmony export */ });
/* harmony import */ var _home_aman_pardeshi_Documents_angular_learning_strapi_testing_cms_test_frontend_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tooltip */ 31251);




function BlockViewerComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BlockViewerComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BlockViewerComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.containerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r2.previewStyle);
  }
}
function BlockViewerComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "pre", 16)(2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.code);
  }
}
const _c0 = a0 => ({
  "block-action-active": a0
});
const _c1 = ["*"];
var BlockView;
(function (BlockView) {
  BlockView[BlockView["PREVIEW"] = 0] = "PREVIEW";
  BlockView[BlockView["CODE"] = 1] = "CODE";
})(BlockView || (BlockView = {}));
class BlockViewerComponent {
  constructor() {
    this.free = true;
    this.new = false;
    this.BlockView = BlockView;
    this.blockView = BlockView.PREVIEW;
  }
  activateView(event, blockView) {
    this.blockView = blockView;
    event.preventDefault();
  }
  copyCode(event) {
    var _this = this;
    return (0,_home_aman_pardeshi_Documents_angular_learning_strapi_testing_cms_test_frontend_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield navigator.clipboard.writeText(_this.code);
      event.preventDefault();
    })();
  }
  static #_ = this.ɵfac = function BlockViewerComponent_Factory(t) {
    return new (t || BlockViewerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlockViewerComponent,
    selectors: [["block-viewer"]],
    inputs: {
      header: "header",
      code: "code",
      containerClass: "containerClass",
      previewStyle: "previewStyle",
      free: "free",
      new: "new"
    },
    ngContentSelectors: _c1,
    decls: 19,
    vars: 13,
    consts: [[1, "block-section"], [1, "block-header"], [1, "block-title"], ["class", "badge-free", 4, "ngIf"], ["class", "badge-new", 4, "ngIf"], [1, "block-actions"], ["tabindex", "0", 3, "ngClass", "click"], [3, "ngClass", "click"], ["pTooltip", "Copied to clipboard", "tooltipEvent", "focus", "tooltipPosition", "bottom", 1, "block-action-copy", 3, "click"], [1, "pi", "pi-copy", "m-0"], [1, "block-content"], [3, "class", "ngStyle", 4, "ngIf"], [4, "ngIf"], [1, "badge-free"], [1, "badge-new"], [3, "ngStyle"], [1, "app-code"]],
    template: function BlockViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BlockViewerComponent_span_5_Template, 2, 0, "span", 3)(6, BlockViewerComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlockViewerComponent_Template_a_click_8_listener($event) {
          return ctx.activateView($event, ctx.BlockView.PREVIEW);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlockViewerComponent_Template_a_click_11_listener($event) {
          return ctx.activateView($event, ctx.BlockView.CODE);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlockViewerComponent_Template_a_click_14_listener($event) {
          return ctx.copyCode($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BlockViewerComponent_div_17_Template, 2, 3, "div", 11)(18, BlockViewerComponent_div_18_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.free);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.blockView === ctx.BlockView.PREVIEW));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.blockView === ctx.BlockView.CODE));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.blockView === ctx.BlockView.PREVIEW);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.blockView === ctx.BlockView.CODE);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip],
    styles: [".block-section {\n  margin-bottom: 4rem;\n}\n\n.block-header {\n  padding: 1rem 2rem;\n  background-color: var(--surface-section);\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid var(--surface-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.block-header .block-title {\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n}\n.block-header .block-title .badge-free {\n  border-radius: 4px;\n  padding: 0.25rem 0.5rem;\n  background-color: var(--orange-500);\n  color: white;\n  margin-left: 1rem;\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n.block-header .block-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-left: 1rem;\n}\n.block-header .block-actions a {\n  display: flex;\n  align-items: center;\n  margin-right: 0.75rem;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  transition: background-color 0.2s;\n  cursor: pointer;\n}\n.block-header .block-actions a:last-child {\n  margin-right: 0;\n}\n.block-header .block-actions a:not(.block-action-disabled):hover {\n  background-color: var(--surface-hover);\n}\n.block-header .block-actions a.block-action-active {\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n}\n.block-header .block-actions a.block-action-copy i {\n  color: var(--primary-color);\n  font-size: 1.25rem;\n}\n.block-header .block-actions a.block-action-disabled {\n  opacity: 0.6;\n  cursor: auto !important;\n}\n.block-header .block-actions a i {\n  margin-right: 0.5rem;\n}\n\n.block-content {\n  padding: 0;\n  border: 1px solid var(--surface-border);\n  border-top: 0 none;\n}\n\npre[class*=language-] {\n  margin: 0 !important;\n}\npre[class*=language-]:before, pre[class*=language-]:after {\n  display: none !important;\n}\npre[class*=language-] code {\n  border-left: 0 none !important;\n  box-shadow: none !important;\n  background: var(--surface-card) !important;\n  margin: 0;\n  color: var(--text-color);\n  font-size: 14px;\n  padding: 0 2rem !important;\n}\npre[class*=language-] code .token.tag, pre[class*=language-] code .token.keyword {\n  color: #2196F3 !important;\n}\npre[class*=language-] code .token.attr-name, pre[class*=language-] code .token.attr-string {\n  color: #2196F3 !important;\n}\npre[class*=language-] code .token.attr-value {\n  color: #4CAF50 !important;\n}\npre[class*=language-] code .token.punctuation {\n  color: var(--text-color);\n}\npre[class*=language-] code .token.operator, pre[class*=language-] code .token.string {\n  background: transparent;\n}\n\n@media screen and (max-width: 575px) {\n  .block-header {\n    flex-direction: column;\n    align-items: start;\n  }\n  .block-header .block-actions {\n    margin-top: 1rem;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3ByaW1lYmxvY2tzL2Jsb2Nrdmlld2VyL2Jsb2Nrdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNaO0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQURSO0FBR1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQURaO0FBR1k7RUFDSSxlQUFBO0FBRGhCO0FBSVk7RUFDSSxzQ0FBQTtBQUZoQjtBQUtZO0VBQ0ksa0NBQUE7RUFDQSwyQkFBQTtBQUhoQjtBQU9nQjtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7QUFMcEI7QUFTWTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQVBoQjtBQVVZO0VBQ0ksb0JBQUE7QUFSaEI7O0FBY0E7RUFDSSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWNBO0VBQ0ksb0JBQUE7QUFYSjtBQWFJO0VBQ0ksd0JBQUE7QUFYUjtBQWNJO0VBQ0ksOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBWlI7QUFlWTtFQUVJLHlCQUFBO0FBZGhCO0FBaUJZO0VBRUkseUJBQUE7QUFoQmhCO0FBbUJZO0VBQ0kseUJBQUE7QUFqQmhCO0FBb0JZO0VBQ0ksd0JBQUE7QUFsQmhCO0FBcUJZO0VBRUksdUJBQUE7QUFwQmhCOztBQTBCQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtFQXZCTjtFQXlCTTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtFQXZCVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5ibG9jay1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuYmFkZ2UtZnJlZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtNTAwKTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ibG9jay1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjc1cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnM7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm5vdCguYmxvY2stYWN0aW9uLWRpc2FibGVkKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYmxvY2stYWN0aW9uLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYmxvY2stYWN0aW9uLWNvcHkge1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYmxvY2stYWN0aW9uLWRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJsb2NrLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgYm9yZGVyLXRvcDogMCBub25lO1xufVxuXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH0gXG5cbiAgICBjb2RlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDAgbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCkgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogMCAycmVtICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICAgIC50b2tlbiB7XG4gICAgICAgICAgICAmLnRhZyxcbiAgICAgICAgICAgICYua2V5d29yZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTk2RjMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICYuYXR0ci1uYW1lLFxuICAgICAgICAgICAgJi5hdHRyLXN0cmluZyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTk2RjMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICYuYXR0ci12YWx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0Q0FGNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICYucHVuY3R1YXRpb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICYub3BlcmF0b3IsXG4gICAgICAgICAgICAmLnN0cmluZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgLmJsb2NrLWhlYWRlciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcblxuICAgICAgICAuYmxvY2stYWN0aW9ucyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 46875:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/primeblocks/primeblocks-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrimeBlocksRoutingModule: () => (/* binding */ PrimeBlocksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/blocks.component */ 59287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class PrimeBlocksRoutingModule {
  static #_ = this.ɵfac = function PrimeBlocksRoutingModule_Factory(t) {
    return new (t || PrimeBlocksRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PrimeBlocksRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
      path: '',
      data: {
        breadcrumb: 'Free Blocks'
      },
      component: _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_0__.BlocksComponent
    }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrimeBlocksRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7232:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/primeblocks/primeblocks.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrimeBlocksModule: () => (/* binding */ PrimeBlocksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/blocks.component */ 59287);
/* harmony import */ var _primeblocks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primeblocks-routing.module */ 46875);
/* harmony import */ var _blockviewer_blockviewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockviewer/blockviewer.component */ 3044);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chip */ 23500);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ 11580);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/password */ 73219);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);













class PrimeBlocksModule {
  static #_ = this.ɵfac = function PrimeBlocksModule_Factory(t) {
    return new (t || PrimeBlocksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: PrimeBlocksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_chip__WEBPACK_IMPORTED_MODULE_7__.ChipModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__.CheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_password__WEBPACK_IMPORTED_MODULE_11__.PasswordModule, _primeblocks_routing_module__WEBPACK_IMPORTED_MODULE_1__.PrimeBlocksRoutingModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PrimeBlocksModule, {
    declarations: [_blocks_blocks_component__WEBPACK_IMPORTED_MODULE_0__.BlocksComponent, _blockviewer_blockviewer_component__WEBPACK_IMPORTED_MODULE_2__.BlockViewerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_chip__WEBPACK_IMPORTED_MODULE_7__.ChipModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__.CheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_password__WEBPACK_IMPORTED_MODULE_11__.PasswordModule, _primeblocks_routing_module__WEBPACK_IMPORTED_MODULE_1__.PrimeBlocksRoutingModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_primeblocks_primeblocks_module_ts.js.map