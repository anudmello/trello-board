(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-edit-card/add-edit-card.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-edit-card/add-edit-card.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lZGl0LWNhcmQvYWRkLWVkaXQtY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-edit-card/add-edit-card.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-edit-card/add-edit-card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"submitForm()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newCard.title\" name=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <textarea class=\"form-control\" [(ngModel)]=\"newCard.description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Column</label>\n    <select class=\"form-control\" [(ngModel)]=\"newCard.column\" name=\"column\" required>\n      <option value=\"To Do\">To Do</option>\n      <option value=\"Doing\">Doing</option>\n      <option value=\"Done\">Done</option>\n    </select>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n</form>\n"

/***/ }),

/***/ "./src/app/add-edit-card/add-edit-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-edit-card/add-edit-card.component.ts ***!
  \**********************************************************/
/*! exports provided: AddEditCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditCardComponent", function() { return AddEditCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card.service */ "./src/app/card.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var AddEditCardComponent = /** @class */ (function () {
    function AddEditCardComponent(cardService, dialogRef) {
        this.cardService = cardService;
        this.dialogRef = dialogRef;
        this.showModal = false;
        this.addCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newCard = {
            title: '',
            description: '',
            column: 'To Do'
        };
    }
    AddEditCardComponent.prototype.closeModal = function () {
        this.newCard = {
            title: '',
            description: '',
            column: 'To Do'
        };
        this.showModal = false;
    };
    AddEditCardComponent.prototype.submitForm = function () {
        if (this.newCard.title && this.newCard.description && this.newCard.column) {
            this.cardService.sendNewCard(this.newCard);
            this.resetForm();
            this.dialogRef.close();
        }
        else {
            alert('Please fill out all required fields.');
        }
    };
    AddEditCardComponent.prototype.resetForm = function () {
        this.newCard = {
            title: '',
            description: '',
            column: 'To Do'
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditCardComponent.prototype, "showModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditCardComponent.prototype, "addCard", void 0);
    AddEditCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-card',
            template: __webpack_require__(/*! ./add-edit-card.component.html */ "./src/app/add-edit-card/add-edit-card.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-card.component.css */ "./src/app/add-edit-card/add-edit-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], AddEditCardComponent);
    return AddEditCardComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-trello';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _add_edit_card_add_edit_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-edit-card/add-edit-card.component */ "./src/app/add-edit-card/add-edit-card.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card.service */ "./src/app/card.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_11__["BoardComponent"],
                _add_edit_card_add_edit_card_component__WEBPACK_IMPORTED_MODULE_12__["AddEditCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"]
            ],
            providers: [_card_service__WEBPACK_IMPORTED_MODULE_14__["CardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_add_edit_card_add_edit_card_component__WEBPACK_IMPORTED_MODULE_12__["AddEditCardComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css2?family=Kalam&family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap');\r\n.nav-custom-header{\r\n    background: rgb(168,134,214);\r\n    background: linear-gradient(90deg, rgba(168,134,214,1) 0%, rgba(172,50,167,1) 35%, rgba(216,143,182,1) 100%);\r\n}\r\n.customIconHome{\r\n    border: solid 1px white;\r\n    background-color: #c2aae2;\r\n    padding: 10px 14px !important;\r\n    border-radius: 0.20rem;\r\n}\r\n.customIconUser{\r\n    border: solid 1px white;\r\n    background-color: #c2aae2;\r\n    padding: 7px 14px !important;\r\n    border-radius: 50%;\r\n}\r\n.nav-item .search {\r\n    background-color: #c2aae2;\r\n    color: white;\r\n    height: 46px;\r\n    border: solid 1px white;\r\n}\r\n.navbar-brand img{\r\n    height: 35px;\r\n}\r\n.custom-button{\r\n    background-color: #c2aae2;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 0.20rem;\r\n    padding: 10px 20px;\r\n}\r\n.customFont{\r\n    color: white;\r\n}\r\n.customStar{\r\n    color: #f1b130;\r\n    background-color: #c2aae2;\r\n    border-radius: 0.20rem;\r\n    color: #f1b130;\r\n    padding: 3px 12px;\r\n    font-size: 25px;\r\n}\r\n.customText{\r\n    color: #f1b130;\r\n    background-color: #c2aae2;\r\n    border-radius: 0.20rem;\r\n    color: #fff;\r\n    padding: 6px 16px;\r\n    font-size: 19px;\r\n}\r\n.customTextProfile{\r\n    border-radius: 1.3rem;\r\n    color: #fff;\r\n    padding: 6px 16px;\r\n    font-size: 19px;\r\n    background-color: #c2aae2;\r\n}\r\n.line{\r\n    margin-left: 10px;\r\n    font-size: 25px;\r\n    color: #9a50a8;\r\n}\r\n.imgCustom{\r\n    height: 42px;\r\n    margin-left: 10px;\r\n    z-index: 1000;\r\n}\r\n.imgCustom2{\r\n    height: 42px;\r\n    margin-left: -10px;\r\n  \r\n}\r\n.deleteIcon{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    font-weight: 900;\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n.customlist{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    font-weight: 900;\r\n    color: #6d798eed;\r\n    cursor: pointer;\r\n}\r\n.customOpen{\r\n    position: absolute;\r\n    left: 10px;\r\n    bottom: 0px;\r\n    font-weight: 400;\r\n    color: #6d798e;\r\n    cursor: pointer;\r\n    font-size: 30px;\r\n}\r\n.card{\r\n    padding-bottom: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrSUFBa0k7QUFDbEk7SUFDSSw0QkFBNEI7SUFDNUIsNEdBQTRHO0FBQ2hIO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbGFtJmZhbWlseT1VYnVudHUrU2FucytNb25vOml0YWwsd2dodEAwLDQwMC4uNzAwOzEsNDAwLi43MDAmZGlzcGxheT1zd2FwJyk7XHJcbi5uYXYtY3VzdG9tLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNjgsMTM0LDIxNCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTY4LDEzNCwyMTQsMSkgMCUsIHJnYmEoMTcyLDUwLDE2NywxKSAzNSUsIHJnYmEoMjE2LDE0MywxODIsMSkgMTAwJSk7XHJcbn1cclxuLmN1c3RvbUljb25Ib21le1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJhYWUyO1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjIwcmVtO1xyXG59XHJcbi5jdXN0b21JY29uVXNlcntcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYWFlMjtcclxuICAgIHBhZGRpbmc6IDdweCAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm5hdi1pdGVtIC5zZWFyY2gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYWFlMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xyXG59XHJcbi5uYXZiYXItYnJhbmQgaW1ne1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5jdXN0b20tYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYWFlMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjByZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuLmN1c3RvbUZvbnR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmN1c3RvbVN0YXJ7XHJcbiAgICBjb2xvcjogI2YxYjEzMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmFhZTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjIwcmVtO1xyXG4gICAgY29sb3I6ICNmMWIxMzA7XHJcbiAgICBwYWRkaW5nOiAzcHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uY3VzdG9tVGV4dHtcclxuICAgIGNvbG9yOiAjZjFiMTMwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYWFlMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjByZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbi5jdXN0b21UZXh0UHJvZmlsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuM3JlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJhYWUyO1xyXG59XHJcbi5saW5le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzlhNTBhODtcclxufVxyXG4uaW1nQ3VzdG9te1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5pbWdDdXN0b20ye1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIFxyXG59XHJcbi5kZWxldGVJY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY3VzdG9tbGlzdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjNmQ3OThlZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmN1c3RvbU9wZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM2ZDc5OGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"board\">\n  <!-- header starts -->\n<nav class=\"navbar navbar-expand-lg navbar-dark nav-custom-header\">\n  \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link customIconHome\" href=\"#\"><i class=\"fa fa-home\"></i> <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2 ml-sm-2 search\" type=\"search\" aria-label=\"Search\">\n          <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\n        </form>\n      </li>\n    </ul>\n    <div class=\"d-flex justify-content-center flex-grow-1\">\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/images/logo.png\" alt=\"logo\"></a>\n    </div>\n    <div class=\"nav-item\">\n      <a class=\"nav-link customIconHome text-light\" href=\"#\"><i class=\"fa fa-plus\"></i> </a>\n    </div>\n    <div class=\"nav-item mr-2 ml-2\">\n      <a class=\"nav-link customIconHome text-light\" href=\"#\"><i class=\"fa fa-info-circle\"></i> </a>\n    </div>\n    <div class=\"nav-item\">\n      <a class=\"nav-link customIconHome text-light\" href=\"#\"><i class=\"fa fa-bell\"></i> </a>\n    </div>\n    <div class=\"nav-item ml-2\">\n      <a class=\"nav-link customIconUser text-light\" href=\"#\"><i class=\"fa fa-user\"></i> </a>\n    </div>\n    \n  </div>\n</nav>\n<!-- header ends -->\n<div class=\"container-fluid pt-3\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <button class=\"btn btn-outline-secondary custom-button dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-th-list\"></i></button>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    <h4 class=\" ml-3 mt-2 customFont\">Project Team Spirit</h4>\n    <div class=\" ml-3  customStar\"><i class=\"fa fa-star-o\"></i></div> <span class=\"line\">&#124;</span>\n    <div class=\" ml-3 customText\">Acme, Inc</div><span class=\"line\">&#124;</span>\n    <img src=\"assets/images/p1.png\" alt=\"\" class=\"imgCustom\">\n    <img src=\"assets/images/p2.png\" alt=\"\" class=\"imgCustom2\">\n    <div class=\" ml-2 customTextProfile\">+12</div>\n    <div class=\" ml-2 customText\">Invite</div>\n  </div>\n</div>\n\n<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"col\" *ngFor=\"let column of columns\" cdkDropList [cdkDropListData]=\"column.cards\" (cdkDropListDropped)=\"onDrop($event)\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">{{ column.name }}</div>\n        <div class=\"card-body\">\n          <div *ngFor=\"let card of column.cards\" class=\"card mb-2\" cdkDrag [cdkDragData]=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{ card.title }}</h5>\n              <p class=\"card-text\">{{ card.description }}</p>\n              <span class=\"deleteIcon\" (click)=\"deleteCard(column, card)\">x</span>\n            </div>\n          </div>\n        </div>\n        <span class=\"customlist\">...</span>\n        <span class=\"customOpen\" (click)=\"openAddCardModal()\">+</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n</section>"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _add_edit_card_add_edit_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-edit-card/add-edit-card.component */ "./src/app/add-edit-card/add-edit-card.component.ts");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card.service */ "./src/app/card.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");






var BoardComponent = /** @class */ (function () {
    function BoardComponent(dialog, cardService) {
        this.dialog = dialog;
        this.cardService = cardService;
        this.columns = [
            { name: 'To Do', cards: [{ title: 'Task 1', description: 'Description for Task 1' }] },
            { name: 'Doing', cards: [{ title: 'Task 2', description: 'Description for Task 2' }] },
            { name: 'Done', cards: [{ title: 'Task 3', description: 'Description for Task 3' }] }
        ];
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardService.getNewCard().subscribe(function (newCard) {
            if (newCard) {
                _this.addCard(newCard);
            }
        });
    };
    BoardComponent.prototype.openAddCardModal = function () {
        var dialogRef = this.dialog.open(_add_edit_card_add_edit_card_component__WEBPACK_IMPORTED_MODULE_3__["AddEditCardComponent"], {
            width: '400px',
            data: { title: '', description: '', column: 'To Do' }
        });
    };
    BoardComponent.prototype.addCard = function (newCard) {
        var targetColumn = this.columns.find(function (col) { return col.name === newCard.column; });
        if (targetColumn) {
            targetColumn.cards.push(newCard);
        }
    };
    BoardComponent.prototype.deleteCard = function (column, card) {
        var columnIndex = this.columns.findIndex(function (col) { return col.name === column.name; });
        if (columnIndex !== -1) {
            var cardIndex = this.columns[columnIndex].cards.indexOf(card);
            if (cardIndex !== -1) {
                this.columns[columnIndex].cards.splice(cardIndex, 1);
            }
        }
    };
    BoardComponent.prototype.onDrop = function (event) {
        var previousIndex = event.previousIndex;
        var currentIndex = event.currentIndex;
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(event.container.data, previousIndex, currentIndex);
        }
        else {
            var item = event.previousContainer.data[previousIndex];
            event.previousContainer.data.splice(previousIndex, 1);
            event.container.data.splice(currentIndex, 0, item);
        }
    };
    BoardComponent.prototype.findColumn = function (columnId) {
        return this.columns.find(function (col) { return col.name.toLowerCase().replace(' ', '-') === columnId; });
    };
    BoardComponent.prototype.handleAddCard = function (newCard) {
        console.log('New Card:', newCard);
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/card.service.ts":
/*!*********************************!*\
  !*** ./src/app/card.service.ts ***!
  \*********************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CardService = /** @class */ (function () {
    function CardService() {
        this.newCardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    // Method to send new card data
    CardService.prototype.sendNewCard = function (newCard) {
        this.newCardSubject.next(newCard);
    };
    // Method to subscribe to new card data changes
    CardService.prototype.getNewCard = function () {
        return this.newCardSubject.asObservable();
    };
    CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anushreepd\Desktop\angular-trello\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map