(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-admin-admin-module"],{

/***/ "+kcG":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-user/admin-user-overview/admin-user-overview-shell/admin-user-overview-shell.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AdminUserOverviewShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserOverviewShellComponent", function() { return AdminUserOverviewShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_shared_toolbar_shared_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/shared-toolbar/shared-toolbar.component */ "tg0J");
/* harmony import */ var src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_presenter_admin_user_overview_presenter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/admin/admin-user/admin-user-overview/admin-user-overview-presenter/admin-user-overview-presenter.component */ "S7rM");




class AdminUserOverviewShellComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminUserOverviewShellComponent.ɵfac = function AdminUserOverviewShellComponent_Factory(t) { return new (t || AdminUserOverviewShellComponent)(); };
AdminUserOverviewShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUserOverviewShellComponent, selectors: [["app-admin-user-overview-shell"]], decls: 2, vars: 2, consts: [["title", "Gebruikers", 3, "hasBackButton", "hasAddButton"]], template: function AdminUserOverviewShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shared-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin-user-overview-presenter");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackButton", true)("hasAddButton", true);
    } }, directives: [_shared_components_shared_toolbar_shared_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SharedToolbarComponent"], src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_presenter_admin_user_overview_presenter_component__WEBPACK_IMPORTED_MODULE_2__["AdminUserOverviewPresenterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLW92ZXJ2aWV3LXNoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserOverviewShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-user-overview-shell',
                templateUrl: './admin-user-overview-shell.component.html',
                styleUrls: ['./admin-user-overview-shell.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/KgU":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-table/admin-table-overview/admin-table-overview-shell/admin-table-overview-shell.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AdminTableOverviewShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTableOverviewShellComponent", function() { return AdminTableOverviewShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_features_admin_admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/admin/admin-table/admin-table-details/admin-table-details-shell/admin-table-details-shell.component */ "DnLl");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/table.service */ "TQws");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_components_shared_toolbar_shared_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/shared-toolbar/shared-toolbar.component */ "tg0J");
/* harmony import */ var _admin_table_overview_presenter_admin_table_overview_presenter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-table-overview-presenter/admin-table-overview-presenter.component */ "8l0s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class AdminTableOverviewShellComponent {
    constructor(_tableService, dialog) {
        this._tableService = _tableService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this._tableService.loadTables();
        this.tables$ = this._tableService.tables$.asObservable();
    }
    actionTable(result) {
        this._tableService.loadTableDetails(result.tableID);
        this.openDialog(result.action);
    }
    deleteTable(tableID) {
        this._tableService.deleteTable(tableID);
    }
    openDialog(action) {
        const dialogRef = this.dialog.open(src_app_features_admin_admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_1__["AdminTableDetailsShellComponent"], {
            minWidth: '400px',
            data: { action: action },
        });
    }
}
AdminTableOverviewShellComponent.ɵfac = function AdminTableOverviewShellComponent_Factory(t) { return new (t || AdminTableOverviewShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
AdminTableOverviewShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTableOverviewShellComponent, selectors: [["app-admin-table-overview-shell"]], decls: 3, vars: 5, consts: [["title", "Tafels", 3, "hasBackButton", "hasAddButton", "onAddPressed"], [3, "tables", "delete", "actionButton"]], template: function AdminTableOverviewShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-shared-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddPressed", function AdminTableOverviewShellComponent_Template_app_shared_toolbar_onAddPressed_0_listener() { return ctx.actionTable("CREATE"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-admin-table-overview-presenter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function AdminTableOverviewShellComponent_Template_app_admin_table_overview_presenter_delete_1_listener($event) { return ctx.deleteTable($event); })("actionButton", function AdminTableOverviewShellComponent_Template_app_admin_table_overview_presenter_actionButton_1_listener($event) { return ctx.actionTable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackButton", true)("hasAddButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tables", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.tables$));
    } }, directives: [_shared_components_shared_toolbar_shared_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["SharedToolbarComponent"], _admin_table_overview_presenter_admin_table_overview_presenter_component__WEBPACK_IMPORTED_MODULE_5__["AdminTableOverviewPresenterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10YWJsZS1vdmVydmlldy1zaGVsbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTableOverviewShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-table-overview-shell',
                templateUrl: './admin-table-overview-shell.component.html',
                styleUrls: ['./admin-table-overview-shell.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "8288":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-team/admin-team-overview/admin-team-overview-presenter/admin-team-overview-presenter.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AdminTeamOverviewPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTeamOverviewPresenterComponent", function() { return AdminTeamOverviewPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_shared_paginator_shared_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/shared-paginator/shared-paginator.component */ "+4ND");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function AdminTeamOverviewPresenterComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTeamOverviewPresenterComponent_tr_6_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const team_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clickView(team_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTeamOverviewPresenterComponent_tr_6_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const team_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clickDelete(team_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r1.name.length > 30 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 2, team_r1.name, 0, 30).toString() + "..." : team_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r1.companyName.length > 30 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 6, team_r1.companyName, 0, 30).toString() + "..." : team_r1.companyName, " ");
} }
class AdminTeamOverviewPresenterComponent {
    constructor() {
        this.minTable = 0;
        this.splitEvery = 5;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.actionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //TODO PRELOADER
    ngOnChanges() {
        console.log(this.teams);
        this.total = this.teams.length;
        this.viewTeams = this.teams.slice(this.minTable, this.splitEvery);
    }
    tablePagination(min, max) {
        this.viewTeams = this.teams.slice(min, max);
    }
    clickPrevious(result) {
        this.tablePagination(result.from, result.to);
    }
    clickNext(result) {
        this.tablePagination(result.from, result.to);
    }
    clickView(ID) {
        console.log('click view');
        this.actionButton.emit({ ID: ID, action: 'VIEW' });
    }
    clickDelete(ID) {
        this.delete.emit(ID);
    }
    ngOnInit() { }
}
AdminTeamOverviewPresenterComponent.ɵfac = function AdminTeamOverviewPresenterComponent_Factory(t) { return new (t || AdminTeamOverviewPresenterComponent)(); };
AdminTeamOverviewPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTeamOverviewPresenterComponent, selectors: [["app-admin-team-overview-presenter"]], inputs: { teams: "teams" }, outputs: { delete: "delete", actionButton: "actionButton" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 4, consts: [[1, "flex", "flex-col"], [1, "-my-2", "overflow-x-auto", "sm:-mx-6", "lg:-mx-8"], [1, "py-2", "align-middle", "inline-block", "min-w-full", "sm:px-6", "lg:px-8"], [1, "rounded-lg", "shadow", "overflow-hidden", "border-b", "border-gray-200", "dark:border-gray-500"], [1, "min-w-full", "divide-y", "divide-gray-200", "dark:divide-gray-500"], [1, "bg-white", "dark:bg-gray-700", "divide-y", "divide-grey-200", "dark:divide-gray-500"], ["class", "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800", 4, "ngFor", "ngForOf"], ["tableName", "Teams", 3, "minCount", "splitEvery", "total", "onPreviousPressed", "onNextPressed"], [1, "cursor-pointer", "hover:bg-gray-100", "dark:hover:bg-gray-800"], [1, "px-6", "py-4", "whitespace-nowrap", 3, "click"], [1, "flex", "items-center"], [1, "flex-shrink-0", "h-10", "w-10"], ["src", "assets/img/team.jpg", "alt", "", 1, "h-10", "w-10", "rounded-full"], [1, "ml-4"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-gray-50"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "px-2", "whitespace-nowrap", "text-right", "text-sm", "font-medium"], ["mat-icon-button", "", 1, "text-red-500", 3, "click"], [1, "material-icons-round"]], template: function AdminTeamOverviewPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminTeamOverviewPresenterComponent_tr_6_Template, 16, 10, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-shared-paginator", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPreviousPressed", function AdminTeamOverviewPresenterComponent_Template_app_shared_paginator_onPreviousPressed_7_listener($event) { return ctx.clickPrevious($event); })("onNextPressed", function AdminTeamOverviewPresenterComponent_Template_app_shared_paginator_onNextPressed_7_listener($event) { return ctx.clickNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewTeams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minCount", ctx.minTable)("splitEvery", ctx.splitEvery)("total", ctx.total);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_shared_paginator_shared_paginator_component__WEBPACK_IMPORTED_MODULE_2__["SharedPaginatorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10ZWFtLW92ZXJ2aWV3LXByZXNlbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTeamOverviewPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-team-overview-presenter',
                templateUrl: './admin-team-overview-presenter.component.html',
                styleUrls: ['./admin-team-overview-presenter.component.scss'],
            }]
    }], null, { teams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], actionButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "8l0s":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-table/admin-table-overview/admin-table-overview-presenter/admin-table-overview-presenter.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: AdminTableOverviewPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTableOverviewPresenterComponent", function() { return AdminTableOverviewPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_shared_paginator_shared_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/shared-paginator/shared-paginator.component */ "+4ND");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function AdminTableOverviewPresenterComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTableOverviewPresenterComponent_tr_6_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const table_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clickView(table_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTableOverviewPresenterComponent_tr_6_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const table_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clickDelete(table_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", table_r1.name.length > 30 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 2, table_r1.name, 0, 30).toString() + "..." : table_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", table_r1.location.length > 30 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 6, table_r1.location, 0, 30).toString() + "..." : table_r1.location, " ");
} }
class AdminTableOverviewPresenterComponent {
    constructor() {
        //table pagination
        this.minTable = 0;
        this.splitEvery = 5;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.actionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //TODO PRELOADER
    ngOnChanges() {
        this.total = this.tables.length;
        this.viewTable = this.tables.slice(this.minTable, this.splitEvery);
    }
    tablePagination(min, max) {
        this.viewTable = this.tables.slice(min, max);
    }
    clickPrevious(result) {
        this.tablePagination(result.from, result.to);
    }
    clickNext(result) {
        this.tablePagination(result.from, result.to);
    }
    clickView(tableID) {
        console.log('click view');
        this.actionButton.emit({ tableID: tableID, action: 'VIEW' });
    }
    clickDelete(tableID) {
        this.delete.emit(tableID);
    }
    ngOnInit() { }
}
AdminTableOverviewPresenterComponent.ɵfac = function AdminTableOverviewPresenterComponent_Factory(t) { return new (t || AdminTableOverviewPresenterComponent)(); };
AdminTableOverviewPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTableOverviewPresenterComponent, selectors: [["app-admin-table-overview-presenter"]], inputs: { tables: "tables" }, outputs: { delete: "delete", actionButton: "actionButton" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 4, consts: [[1, "flex", "flex-col"], [1, "-my-2", "overflow-x-auto", "sm:-mx-6", "lg:-mx-8"], [1, "py-2", "align-middle", "inline-block", "min-w-full", "sm:px-6", "lg:px-8"], [1, "rounded-lg", "shadow", "overflow-hidden", "border-b", "border-gray-200", "dark:border-gray-500"], [1, "min-w-full", "divide-y", "divide-gray-200", "dark:divide-gray-500"], [1, "bg-white", "dark:bg-gray-700", "divide-y", "divide-grey-200", "dark:divide-gray-500"], ["class", "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800", 4, "ngFor", "ngForOf"], ["tableName", "Tafels", 3, "minCount", "splitEvery", "total", "onPreviousPressed", "onNextPressed"], [1, "cursor-pointer", "hover:bg-gray-100", "dark:hover:bg-gray-800"], [1, "px-6", "py-4", "whitespace-nowrap", 3, "click"], [1, "flex", "items-center"], [1, "flex-shrink-0", "h-10", "w-10"], ["src", "assets/img/table.png", "alt", "", 1, "h-10", "w-10", "rounded-full"], [1, "ml-4"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-gray-50"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "px-2", "whitespace-nowrap", "text-right", "text-sm", "font-medium"], ["mat-icon-button", "", 1, "text-red-500", 3, "click"], [1, "material-icons-round"]], template: function AdminTableOverviewPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminTableOverviewPresenterComponent_tr_6_Template, 16, 10, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-shared-paginator", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPreviousPressed", function AdminTableOverviewPresenterComponent_Template_app_shared_paginator_onPreviousPressed_7_listener($event) { return ctx.clickPrevious($event); })("onNextPressed", function AdminTableOverviewPresenterComponent_Template_app_shared_paginator_onNextPressed_7_listener($event) { return ctx.clickNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minCount", ctx.minTable)("splitEvery", ctx.splitEvery)("total", ctx.total);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_shared_paginator_shared_paginator_component__WEBPACK_IMPORTED_MODULE_2__["SharedPaginatorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10YWJsZS1vdmVydmlldy1wcmVzZW50ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTableOverviewPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-table-overview-presenter',
                templateUrl: './admin-table-overview-presenter.component.html',
                styleUrls: ['./admin-table-overview-presenter.component.scss'],
            }]
    }], null, { tables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], actionButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "DnLl":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-table/admin-table-details/admin-table-details-shell/admin-table-details-shell.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: AdminTableDetailsShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTableDetailsShellComponent", function() { return AdminTableDetailsShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/table.service */ "TQws");
/* harmony import */ var _admin_table_details_presenter_admin_table_details_presenter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-table-details-presenter/admin-table-details-presenter.component */ "hyVp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









class AdminTableDetailsShellComponent {
    constructor(dialogRef, data, fb, _tableService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this._tableService = _tableService;
        this.createTableForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            imageUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            contactPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
        });
        this.action = data.action;
        this.table$ = this._tableService.tableDetails$.asObservable();
    }
    ngOnInit() {
        this.isEdit = false;
    }
    submitForm() {
        console.log('SUMBIT');
        //TODO Create new table
        if (this.action == 'CREATE') {
            //TODO Create update table
        }
        else if (this.action == 'UPDATE') {
        }
        this.closeDialog();
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
AdminTableDetailsShellComponent.ɵfac = function AdminTableDetailsShellComponent_Factory(t) { return new (t || AdminTableDetailsShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"])); };
AdminTableDetailsShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTableDetailsShellComponent, selectors: [["app-admin-table-details-shell"]], decls: 2, vars: 4, consts: [[3, "table", "formGroup", "closeDialog", "submitForm"]], template: function AdminTableDetailsShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-admin-table-details-presenter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeDialog", function AdminTableDetailsShellComponent_Template_app_admin_table_details_presenter_closeDialog_0_listener() { return ctx.closeDialog(); })("submitForm", function AdminTableDetailsShellComponent_Template_app_admin_table_details_presenter_submitForm_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("table", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.table$))("formGroup", ctx.createTableForm);
    } }, directives: [_admin_table_details_presenter_admin_table_details_presenter_component__WEBPACK_IMPORTED_MODULE_4__["AdminTableDetailsPresenterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10YWJsZS1kZXRhaWxzLXNoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTableDetailsShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-table-details-shell',
                templateUrl: './admin-table-details-shell.component.html',
                styleUrls: ['./admin-table-details-shell.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"] }]; }, null); })();


/***/ }),

/***/ "S7rM":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-user/admin-user-overview/admin-user-overview-presenter/admin-user-overview-presenter.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AdminUserOverviewPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserOverviewPresenterComponent", function() { return AdminUserOverviewPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_components_shared_paginator_shared_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/shared-paginator/shared-paginator.component */ "+4ND");





class AdminUserOverviewPresenterComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminUserOverviewPresenterComponent.ɵfac = function AdminUserOverviewPresenterComponent_Factory(t) { return new (t || AdminUserOverviewPresenterComponent)(); };
AdminUserOverviewPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUserOverviewPresenterComponent, selectors: [["app-admin-user-overview-presenter"]], decls: 21, vars: 3, consts: [[1, "flex", "flex-col"], [1, "-my-2", "overflow-x-auto", "sm:-mx-6", "lg:-mx-8"], [1, "py-2", "align-middle", "inline-block", "min-w-full", "sm:px-6", "lg:px-8"], [1, "rounded-lg", "shadow", "overflow-hidden", "border-b", "border-gray-200", "dark:border-gray-500"], [1, "min-w-full", "divide-y", "divide-gray-200", "dark:divide-gray-500"], [1, "bg-white", "dark:bg-gray-700", "divide-y", "divide-grey-200", "dark:divide-gray-500"], [1, "cursor-pointer", "hover:bg-gray-100", "dark:hover:bg-gray-800"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "flex", "items-center"], [1, "flex-shrink-0", "h-10", "w-10"], ["src", "assets/img/user.png", "alt", "", 1, "h-10", "w-10", "rounded-full"], [1, "ml-4"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-gray-50"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "px-2", "whitespace-nowrap", "text-right", "text-sm", "font-medium"], ["mat-icon-button", "", 1, "text-red-500", 3, "click"], [1, "material-icons-round"], ["tableName", "Gebruikers", 3, "from", "to", "total"]], template: function AdminUserOverviewPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " [Voornaam] [Naam] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " [Geboortedatum] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUserOverviewPresenterComponent_Template_button_click_17_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-shared-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("from", 1)("to", 1)("total", 1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _shared_components_shared_paginator_shared_paginator_component__WEBPACK_IMPORTED_MODULE_3__["SharedPaginatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLW92ZXJ2aWV3LXByZXNlbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserOverviewPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-user-overview-presenter',
                templateUrl: './admin-user-overview-presenter.component.html',
                styleUrls: ['./admin-user-overview-presenter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SgHw":
/*!********************************************************!*\
  !*** ./src/app/features/admin/admin-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_features_admin_admin_match_admin_match_details_admin_match_details_shell_admin_match_details_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/admin/admin-match/admin-match-details/admin-match-details-shell/admin-match-details-shell.component */ "uB8+");
/* harmony import */ var src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_shell_admin_match_overview_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/admin/admin-match/admin-match-overview/admin-match-overview-shell/admin-match-overview-shell.component */ "c4HX");
/* harmony import */ var src_app_features_admin_admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/features/admin/admin-table/admin-table-details/admin-table-details-shell/admin-table-details-shell.component */ "DnLl");
/* harmony import */ var src_app_features_admin_admin_table_admin_table_overview_admin_table_overview_shell_admin_table_overview_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/features/admin/admin-table/admin-table-overview/admin-table-overview-shell/admin-table-overview-shell.component */ "/KgU");
/* harmony import */ var src_app_features_admin_admin_team_admin_team_details_admin_team_details_shell_admin_team_details_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/features/admin/admin-team/admin-team-details/admin-team-details-shell/admin-team-details-shell.component */ "hyS3");
/* harmony import */ var src_app_features_admin_admin_team_admin_team_overview_admin_team_overview_shell_admin_team_overview_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/features/admin/admin-team/admin-team-overview/admin-team-overview-shell/admin-team-overview-shell.component */ "TSsg");
/* harmony import */ var src_app_features_admin_admin_user_admin_user_details_admin_user_details_shell_admin_user_details_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/features/admin/admin-user/admin-user-details/admin-user-details-shell/admin-user-details-shell.component */ "Usib");
/* harmony import */ var src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_shell_admin_user_overview_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/features/admin/admin-user/admin-user-overview/admin-user-overview-shell/admin-user-overview-shell.component */ "+kcG");












const routes = [{
        path: 'table/overview',
        component: src_app_features_admin_admin_table_admin_table_overview_admin_table_overview_shell_admin_table_overview_shell_component__WEBPACK_IMPORTED_MODULE_5__["AdminTableOverviewShellComponent"],
    },
    {
        path: 'table/details/:id',
        component: src_app_features_admin_admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_4__["AdminTableDetailsShellComponent"],
    },
    {
        path: 'team/overview',
        component: src_app_features_admin_admin_team_admin_team_overview_admin_team_overview_shell_admin_team_overview_shell_component__WEBPACK_IMPORTED_MODULE_7__["AdminTeamOverviewShellComponent"],
    },
    {
        path: 'team/details/:id',
        component: src_app_features_admin_admin_team_admin_team_details_admin_team_details_shell_admin_team_details_shell_component__WEBPACK_IMPORTED_MODULE_6__["AdminTeamDetailsShellComponent"],
    },
    {
        path: 'user/overview',
        component: src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_shell_admin_user_overview_shell_component__WEBPACK_IMPORTED_MODULE_9__["AdminUserOverviewShellComponent"],
    },
    {
        path: 'user/details/:id',
        component: src_app_features_admin_admin_user_admin_user_details_admin_user_details_shell_admin_user_details_shell_component__WEBPACK_IMPORTED_MODULE_8__["AdminUserDetailsShellComponent"],
    },
    {
        path: 'match/overview',
        component: src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_shell_admin_match_overview_shell_component__WEBPACK_IMPORTED_MODULE_3__["AdminMatchOverviewShellComponent"],
    },
    {
        path: 'match/details/:id',
        component: src_app_features_admin_admin_match_admin_match_details_admin_match_details_shell_admin_match_details_shell_component__WEBPACK_IMPORTED_MODULE_2__["AdminMatchDetailsShellComponent"],
    },
    {
        path: '**',
        pathMatch: 'full',
        // TODO change later to admin menu
        redirectTo: 'table/overview',
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TSsg":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-team/admin-team-overview/admin-team-overview-shell/admin-team-overview-shell.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AdminTeamOverviewShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTeamOverviewShellComponent", function() { return AdminTeamOverviewShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_features_admin_admin_team_admin_team_details_admin_team_details_shell_admin_team_details_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/admin/admin-team/admin-team-details/admin-team-details-shell/admin-team-details-shell.component */ "hyS3");
/* harmony import */ var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/team.service */ "GDbA");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_components_shared_toolbar_shared_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/shared-toolbar/shared-toolbar.component */ "tg0J");
/* harmony import */ var _admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-team-overview-presenter/admin-team-overview-presenter.component */ "8288");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class AdminTeamOverviewShellComponent {
    constructor(_teamService, dialog) {
        this._teamService = _teamService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this._teamService.loadTeams();
        this.teams$ = this._teamService.teams$.asObservable();
    }
    actionTable(result) {
        this._teamService.loadTeamDetails(result.ID);
        this.openDialog(result.action);
    }
    deleteTable(ID) {
        this._teamService.deleteTeam(ID);
    }
    openDialog(action) {
        const dialogRef = this.dialog.open(src_app_features_admin_admin_team_admin_team_details_admin_team_details_shell_admin_team_details_shell_component__WEBPACK_IMPORTED_MODULE_1__["AdminTeamDetailsShellComponent"], {
            minWidth: '400px',
            data: { action: action },
        });
    }
}
AdminTeamOverviewShellComponent.ɵfac = function AdminTeamOverviewShellComponent_Factory(t) { return new (t || AdminTeamOverviewShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
AdminTeamOverviewShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTeamOverviewShellComponent, selectors: [["app-admin-team-overview-shell"]], decls: 3, vars: 5, consts: [["title", "Teams", 3, "hasBackButton", "hasAddButton"], [3, "teams", "delete", "actionButton"]], template: function AdminTeamOverviewShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shared-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-admin-team-overview-presenter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function AdminTeamOverviewShellComponent_Template_app_admin_team_overview_presenter_delete_1_listener($event) { return ctx.deleteTable($event); })("actionButton", function AdminTeamOverviewShellComponent_Template_app_admin_team_overview_presenter_actionButton_1_listener($event) { return ctx.actionTable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackButton", true)("hasAddButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("teams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.teams$));
    } }, directives: [_shared_components_shared_toolbar_shared_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["SharedToolbarComponent"], _admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_5__["AdminTeamOverviewPresenterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10ZWFtLW92ZXJ2aWV3LXNoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTeamOverviewShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-team-overview-shell',
                templateUrl: './admin-team-overview-shell.component.html',
                styleUrls: ['./admin-team-overview-shell.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Usib":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-user/admin-user-details/admin-user-details-shell/admin-user-details-shell.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AdminUserDetailsShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserDetailsShellComponent", function() { return AdminUserDetailsShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminUserDetailsShellComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminUserDetailsShellComponent.ɵfac = function AdminUserDetailsShellComponent_Factory(t) { return new (t || AdminUserDetailsShellComponent)(); };
AdminUserDetailsShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUserDetailsShellComponent, selectors: [["app-admin-user-details-shell"]], decls: 2, vars: 0, template: function AdminUserDetailsShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-user-details-shell works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLWRldGFpbHMtc2hlbGwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserDetailsShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-user-details-shell',
                templateUrl: './admin-user-details-shell.component.html',
                styleUrls: ['./admin-user-details-shell.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "c4HX":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-match/admin-match-overview/admin-match-overview-shell/admin-match-overview-shell.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AdminMatchOverviewShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMatchOverviewShellComponent", function() { return AdminMatchOverviewShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_shared_toolbar_shared_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/shared-toolbar/shared-toolbar.component */ "tg0J");
/* harmony import */ var src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_presenter_admin_match_overview_presenter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/admin/admin-match/admin-match-overview/admin-match-overview-presenter/admin-match-overview-presenter.component */ "zh4L");




class AdminMatchOverviewShellComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminMatchOverviewShellComponent.ɵfac = function AdminMatchOverviewShellComponent_Factory(t) { return new (t || AdminMatchOverviewShellComponent)(); };
AdminMatchOverviewShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMatchOverviewShellComponent, selectors: [["app-admin-match-overview-shell"]], decls: 2, vars: 2, consts: [["title", "Wedstrijden", 3, "hasBackButton", "hasAddButton"]], template: function AdminMatchOverviewShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shared-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin-match-overview-presenter");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackButton", true)("hasAddButton", true);
    } }, directives: [_shared_components_shared_toolbar_shared_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SharedToolbarComponent"], src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_presenter_admin_match_overview_presenter_component__WEBPACK_IMPORTED_MODULE_2__["AdminMatchOverviewPresenterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1tYXRjaC1vdmVydmlldy1zaGVsbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMatchOverviewShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-match-overview-shell',
                templateUrl: './admin-match-overview-shell.component.html',
                styleUrls: ['./admin-match-overview-shell.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hyS3":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-team/admin-team-details/admin-team-details-shell/admin-team-details-shell.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AdminTeamDetailsShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTeamDetailsShellComponent", function() { return AdminTeamDetailsShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/team.service */ "GDbA");
/* harmony import */ var src_app_features_admin_admin_user_admin_user_details_admin_user_details_presenter_admin_user_details_presenter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/features/admin/admin-user/admin-user-details/admin-user-details-presenter/admin-user-details-presenter.component */ "xk8t");








class AdminTeamDetailsShellComponent {
    constructor(dialogRef, data, fb, _teamService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this._teamService = _teamService;
        this.createTableForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            imageUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            contactPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
        });
        this.action = data.action;
        this.team$ = this._teamService.teamDetails$.asObservable();
    }
    ngOnInit() {
        this.isEdit = false;
    }
    submitForm() {
        console.log('SUMBIT');
        //TODO Create new teams
        if (this.action == 'CREATE') {
            //TODO Create update teams
        }
        else if (this.action == 'UPDATE') {
        }
        this.closeDialog();
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
AdminTeamDetailsShellComponent.ɵfac = function AdminTeamDetailsShellComponent_Factory(t) { return new (t || AdminTeamDetailsShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"])); };
AdminTeamDetailsShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTeamDetailsShellComponent, selectors: [["app-admin-team-details-shell"]], decls: 1, vars: 0, template: function AdminTeamDetailsShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-user-details-presenter");
    } }, directives: [src_app_features_admin_admin_user_admin_user_details_admin_user_details_presenter_admin_user_details_presenter_component__WEBPACK_IMPORTED_MODULE_4__["AdminUserDetailsPresenterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10ZWFtLWRldGFpbHMtc2hlbGwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTeamDetailsShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-team-details-shell',
                templateUrl: './admin-team-details-shell.component.html',
                styleUrls: ['./admin-team-details-shell.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] }]; }, null); })();


/***/ }),

/***/ "hyVp":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-table/admin-table-details/admin-table-details-presenter/admin-table-details-presenter.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: AdminTableDetailsPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTableDetailsPresenterComponent", function() { return AdminTableDetailsPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class AdminTableDetailsPresenterComponent {
    constructor() {
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    clickSubmitForm() {
        this.submitForm.emit();
    }
    addCloseDialog() {
        this.closeDialog.emit();
    }
}
AdminTableDetailsPresenterComponent.ɵfac = function AdminTableDetailsPresenterComponent_Factory(t) { return new (t || AdminTableDetailsPresenterComponent)(); };
AdminTableDetailsPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTableDetailsPresenterComponent, selectors: [["app-admin-table-details-presenter"]], inputs: { table: "table", formGroup: "formGroup" }, outputs: { closeDialog: "closeDialog", submitForm: "submitForm" }, decls: 13, vars: 4, consts: [[3, "formGroup", "ngSubmit"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "mat-flat-button", "", "color", "warn", 3, "click"]], template: function AdminTableDetailsPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminTableDetailsPresenterComponent_Template_form_ngSubmit_4_listener() { return ctx.clickSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTableDetailsPresenterComponent_Template_button_click_11_listener() { return ctx.addCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.table), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10YWJsZS1kZXRhaWxzLXByZXNlbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTableDetailsPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-table-details-presenter',
                templateUrl: './admin-table-details-presenter.component.html',
                styleUrls: ['./admin-table-details-presenter.component.scss'],
            }]
    }], function () { return []; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], submitForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "rISS":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-match/admin-match-details/admin-match-details-presenter/admin-match-details-presenter.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: AdminMatchDetailsPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMatchDetailsPresenterComponent", function() { return AdminMatchDetailsPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminMatchDetailsPresenterComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminMatchDetailsPresenterComponent.ɵfac = function AdminMatchDetailsPresenterComponent_Factory(t) { return new (t || AdminMatchDetailsPresenterComponent)(); };
AdminMatchDetailsPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMatchDetailsPresenterComponent, selectors: [["app-admin-match-details-presenter"]], decls: 2, vars: 0, template: function AdminMatchDetailsPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-match-details-presenter works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1tYXRjaC1kZXRhaWxzLXByZXNlbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMatchDetailsPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-match-details-presenter',
                templateUrl: './admin-match-details-presenter.component.html',
                styleUrls: ['./admin-match-details-presenter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uB8+":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-match/admin-match-details/admin-match-details-shell/admin-match-details-shell.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: AdminMatchDetailsShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMatchDetailsShellComponent", function() { return AdminMatchDetailsShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminMatchDetailsShellComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminMatchDetailsShellComponent.ɵfac = function AdminMatchDetailsShellComponent_Factory(t) { return new (t || AdminMatchDetailsShellComponent)(); };
AdminMatchDetailsShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMatchDetailsShellComponent, selectors: [["app-admin-match-details-shell"]], decls: 2, vars: 0, template: function AdminMatchDetailsShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-match-details-shell works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1tYXRjaC1kZXRhaWxzLXNoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMatchDetailsShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-match-details-shell',
                templateUrl: './admin-match-details-shell.component.html',
                styleUrls: ['./admin-match-details-shell.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xDfr":
/*!************************************************!*\
  !*** ./src/app/features/admin/admin.module.ts ***!
  \************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "SgHw");
/* harmony import */ var _admin_table_admin_table_overview_admin_table_overview_shell_admin_table_overview_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-table/admin-table-overview/admin-table-overview-shell/admin-table-overview-shell.component */ "/KgU");
/* harmony import */ var _admin_table_admin_table_overview_admin_table_overview_presenter_admin_table_overview_presenter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-table/admin-table-overview/admin-table-overview-presenter/admin-table-overview-presenter.component */ "8l0s");
/* harmony import */ var _admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-table/admin-table-details/admin-table-details-shell/admin-table-details-shell.component */ "DnLl");
/* harmony import */ var _admin_match_admin_match_details_admin_match_details_shell_admin_match_details_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-match/admin-match-details/admin-match-details-shell/admin-match-details-shell.component */ "uB8+");
/* harmony import */ var src_app_features_admin_admin_match_admin_match_details_admin_match_details_presenter_admin_match_details_presenter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/features/admin/admin-match/admin-match-details/admin-match-details-presenter/admin-match-details-presenter.component */ "rISS");
/* harmony import */ var src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_shell_admin_match_overview_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/features/admin/admin-match/admin-match-overview/admin-match-overview-shell/admin-match-overview-shell.component */ "c4HX");
/* harmony import */ var _admin_table_admin_table_details_admin_table_details_presenter_admin_table_details_presenter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-table/admin-table-details/admin-table-details-presenter/admin-table-details-presenter.component */ "hyVp");
/* harmony import */ var _admin_team_admin_team_overview_admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-team/admin-team-overview/admin-team-overview-presenter/admin-team-overview-presenter.component */ "8288");
/* harmony import */ var src_app_features_admin_admin_team_admin_team_overview_admin_team_overview_shell_admin_team_overview_shell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/features/admin/admin-team/admin-team-overview/admin-team-overview-shell/admin-team-overview-shell.component */ "TSsg");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_shell_admin_user_overview_shell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/features/admin/admin-user/admin-user-overview/admin-user-overview-shell/admin-user-overview-shell.component */ "+kcG");
/* harmony import */ var src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_presenter_admin_user_overview_presenter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/features/admin/admin-user/admin-user-overview/admin-user-overview-presenter/admin-user-overview-presenter.component */ "S7rM");
/* harmony import */ var src_app_features_admin_admin_user_admin_user_details_admin_user_details_shell_admin_user_details_shell_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/features/admin/admin-user/admin-user-details/admin-user-details-shell/admin-user-details-shell.component */ "Usib");
/* harmony import */ var src_app_features_admin_admin_user_admin_user_details_admin_user_details_presenter_admin_user_details_presenter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/features/admin/admin-user/admin-user-details/admin-user-details-presenter/admin-user-details-presenter.component */ "xk8t");
/* harmony import */ var src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_presenter_admin_match_overview_presenter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/features/admin/admin-match/admin-match-overview/admin-match-overview-presenter/admin-match-overview-presenter.component */ "zh4L");
/* harmony import */ var src_app_features_admin_admin_team_admin_team_details_admin_team_details_presenter_admin_team_details_presenter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/features/admin/admin-team/admin-team-details/admin-team-details-presenter/admin-team-details-presenter.component */ "xYZJ");
/* harmony import */ var src_app_features_admin_admin_team_admin_team_details_admin_team_details_shell_admin_team_details_shell_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/features/admin/admin-team/admin-team-details/admin-team-details-shell/admin-team-details-shell.component */ "hyS3");





















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_table_admin_table_overview_admin_table_overview_shell_admin_table_overview_shell_component__WEBPACK_IMPORTED_MODULE_3__["AdminTableOverviewShellComponent"],
        _admin_table_admin_table_overview_admin_table_overview_presenter_admin_table_overview_presenter_component__WEBPACK_IMPORTED_MODULE_4__["AdminTableOverviewPresenterComponent"],
        _admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_5__["AdminTableDetailsShellComponent"],
        _admin_table_admin_table_details_admin_table_details_presenter_admin_table_details_presenter_component__WEBPACK_IMPORTED_MODULE_9__["AdminTableDetailsPresenterComponent"],
        _admin_team_admin_team_overview_admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_10__["AdminTeamOverviewPresenterComponent"],
        src_app_features_admin_admin_team_admin_team_overview_admin_team_overview_shell_admin_team_overview_shell_component__WEBPACK_IMPORTED_MODULE_11__["AdminTeamOverviewShellComponent"],
        _admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_5__["AdminTableDetailsShellComponent"],
        _admin_team_admin_team_overview_admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_10__["AdminTeamOverviewPresenterComponent"],
        src_app_features_admin_admin_team_admin_team_overview_admin_team_overview_shell_admin_team_overview_shell_component__WEBPACK_IMPORTED_MODULE_11__["AdminTeamOverviewShellComponent"],
        _admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_5__["AdminTableDetailsShellComponent"],
        _admin_team_admin_team_overview_admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_10__["AdminTeamOverviewPresenterComponent"],
        src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_shell_admin_match_overview_shell_component__WEBPACK_IMPORTED_MODULE_8__["AdminMatchOverviewShellComponent"],
        src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_presenter_admin_match_overview_presenter_component__WEBPACK_IMPORTED_MODULE_17__["AdminMatchOverviewPresenterComponent"],
        src_app_features_admin_admin_match_admin_match_details_admin_match_details_presenter_admin_match_details_presenter_component__WEBPACK_IMPORTED_MODULE_7__["AdminMatchDetailsPresenterComponent"],
        _admin_match_admin_match_details_admin_match_details_shell_admin_match_details_shell_component__WEBPACK_IMPORTED_MODULE_6__["AdminMatchDetailsShellComponent"],
        src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_shell_admin_user_overview_shell_component__WEBPACK_IMPORTED_MODULE_13__["AdminUserOverviewShellComponent"],
        src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_presenter_admin_user_overview_presenter_component__WEBPACK_IMPORTED_MODULE_14__["AdminUserOverviewPresenterComponent"],
        src_app_features_admin_admin_team_admin_team_details_admin_team_details_shell_admin_team_details_shell_component__WEBPACK_IMPORTED_MODULE_19__["AdminTeamDetailsShellComponent"],
        src_app_features_admin_admin_user_admin_user_details_admin_user_details_shell_admin_user_details_shell_component__WEBPACK_IMPORTED_MODULE_15__["AdminUserDetailsShellComponent"],
        src_app_features_admin_admin_user_admin_user_details_admin_user_details_presenter_admin_user_details_presenter_component__WEBPACK_IMPORTED_MODULE_16__["AdminUserDetailsPresenterComponent"],
        src_app_features_admin_admin_team_admin_team_details_admin_team_details_presenter_admin_team_details_presenter_component__WEBPACK_IMPORTED_MODULE_18__["AdminTeamDetailsPresenterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _admin_table_admin_table_overview_admin_table_overview_shell_admin_table_overview_shell_component__WEBPACK_IMPORTED_MODULE_3__["AdminTableOverviewShellComponent"],
                    _admin_table_admin_table_overview_admin_table_overview_presenter_admin_table_overview_presenter_component__WEBPACK_IMPORTED_MODULE_4__["AdminTableOverviewPresenterComponent"],
                    _admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_5__["AdminTableDetailsShellComponent"],
                    _admin_table_admin_table_details_admin_table_details_presenter_admin_table_details_presenter_component__WEBPACK_IMPORTED_MODULE_9__["AdminTableDetailsPresenterComponent"],
                    _admin_team_admin_team_overview_admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_10__["AdminTeamOverviewPresenterComponent"],
                    src_app_features_admin_admin_team_admin_team_overview_admin_team_overview_shell_admin_team_overview_shell_component__WEBPACK_IMPORTED_MODULE_11__["AdminTeamOverviewShellComponent"],
                    _admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_5__["AdminTableDetailsShellComponent"],
                    _admin_team_admin_team_overview_admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_10__["AdminTeamOverviewPresenterComponent"],
                    src_app_features_admin_admin_team_admin_team_overview_admin_team_overview_shell_admin_team_overview_shell_component__WEBPACK_IMPORTED_MODULE_11__["AdminTeamOverviewShellComponent"],
                    _admin_table_admin_table_details_admin_table_details_shell_admin_table_details_shell_component__WEBPACK_IMPORTED_MODULE_5__["AdminTableDetailsShellComponent"],
                    _admin_team_admin_team_overview_admin_team_overview_presenter_admin_team_overview_presenter_component__WEBPACK_IMPORTED_MODULE_10__["AdminTeamOverviewPresenterComponent"],
                    src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_shell_admin_match_overview_shell_component__WEBPACK_IMPORTED_MODULE_8__["AdminMatchOverviewShellComponent"],
                    src_app_features_admin_admin_match_admin_match_overview_admin_match_overview_presenter_admin_match_overview_presenter_component__WEBPACK_IMPORTED_MODULE_17__["AdminMatchOverviewPresenterComponent"],
                    src_app_features_admin_admin_match_admin_match_details_admin_match_details_presenter_admin_match_details_presenter_component__WEBPACK_IMPORTED_MODULE_7__["AdminMatchDetailsPresenterComponent"],
                    _admin_match_admin_match_details_admin_match_details_shell_admin_match_details_shell_component__WEBPACK_IMPORTED_MODULE_6__["AdminMatchDetailsShellComponent"],
                    src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_shell_admin_user_overview_shell_component__WEBPACK_IMPORTED_MODULE_13__["AdminUserOverviewShellComponent"],
                    src_app_features_admin_admin_user_admin_user_overview_admin_user_overview_presenter_admin_user_overview_presenter_component__WEBPACK_IMPORTED_MODULE_14__["AdminUserOverviewPresenterComponent"],
                    src_app_features_admin_admin_team_admin_team_details_admin_team_details_shell_admin_team_details_shell_component__WEBPACK_IMPORTED_MODULE_19__["AdminTeamDetailsShellComponent"],
                    src_app_features_admin_admin_user_admin_user_details_admin_user_details_shell_admin_user_details_shell_component__WEBPACK_IMPORTED_MODULE_15__["AdminUserDetailsShellComponent"],
                    src_app_features_admin_admin_user_admin_user_details_admin_user_details_presenter_admin_user_details_presenter_component__WEBPACK_IMPORTED_MODULE_16__["AdminUserDetailsPresenterComponent"],
                    src_app_features_admin_admin_team_admin_team_details_admin_team_details_presenter_admin_team_details_presenter_component__WEBPACK_IMPORTED_MODULE_18__["AdminTeamDetailsPresenterComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xYZJ":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-team/admin-team-details/admin-team-details-presenter/admin-team-details-presenter.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AdminTeamDetailsPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTeamDetailsPresenterComponent", function() { return AdminTeamDetailsPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminTeamDetailsPresenterComponent {
    // @Input() team: ITeamDetails;
    // @Input() formGroup;
    // @Output() closeDialog = new EventEmitter();
    // @Output() submitForm = new EventEmitter();
    constructor() { }
    ngOnInit() { }
}
AdminTeamDetailsPresenterComponent.ɵfac = function AdminTeamDetailsPresenterComponent_Factory(t) { return new (t || AdminTeamDetailsPresenterComponent)(); };
AdminTeamDetailsPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTeamDetailsPresenterComponent, selectors: [["app-admin-team-details-presenter"]], decls: 2, vars: 0, template: function AdminTeamDetailsPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi10ZWFtLWRldGFpbHMtcHJlc2VudGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTeamDetailsPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-team-details-presenter',
                templateUrl: './admin-team-details-presenter.component.html',
                styleUrls: ['./admin-team-details-presenter.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xk8t":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-user/admin-user-details/admin-user-details-presenter/admin-user-details-presenter.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AdminUserDetailsPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserDetailsPresenterComponent", function() { return AdminUserDetailsPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminUserDetailsPresenterComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminUserDetailsPresenterComponent.ɵfac = function AdminUserDetailsPresenterComponent_Factory(t) { return new (t || AdminUserDetailsPresenterComponent)(); };
AdminUserDetailsPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUserDetailsPresenterComponent, selectors: [["app-admin-user-details-presenter"]], decls: 2, vars: 0, template: function AdminUserDetailsPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-user-details-presenter works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLWRldGFpbHMtcHJlc2VudGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserDetailsPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-user-details-presenter',
                templateUrl: './admin-user-details-presenter.component.html',
                styleUrls: ['./admin-user-details-presenter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zh4L":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/features/admin/admin-match/admin-match-overview/admin-match-overview-presenter/admin-match-overview-presenter.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: AdminMatchOverviewPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMatchOverviewPresenterComponent", function() { return AdminMatchOverviewPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_components_shared_paginator_shared_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/shared-paginator/shared-paginator.component */ "+4ND");





class AdminMatchOverviewPresenterComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminMatchOverviewPresenterComponent.ɵfac = function AdminMatchOverviewPresenterComponent_Factory(t) { return new (t || AdminMatchOverviewPresenterComponent)(); };
AdminMatchOverviewPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMatchOverviewPresenterComponent, selectors: [["app-admin-match-overview-presenter"]], decls: 22, vars: 3, consts: [[1, "flex", "flex-col"], [1, "-my-2", "overflow-x-auto", "sm:-mx-6", "lg:-mx-8"], [1, "py-2", "align-middle", "inline-block", "min-w-full", "sm:px-6", "lg:px-8"], [1, "rounded-lg", "shadow", "overflow-hidden", "border-b", "border-gray-200", "dark:border-gray-500"], [1, "min-w-full", "divide-y", "divide-gray-200", "dark:divide-gray-500"], [1, "bg-white", "dark:bg-gray-700", "divide-y", "divide-grey-200", "dark:divide-gray-500"], [1, "cursor-pointer", "hover:bg-gray-100", "dark:hover:bg-gray-800"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "flex", "items-center"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-gray-50"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "px-2", "whitespace-nowrap", "text-right", "text-sm", "font-medium"], ["mat-icon-button", "", 1, "text-primary", "dark:text-primary-light", 3, "click"], [1, "material-icons-round"], ["mat-icon-button", "", 1, "text-red-500", 3, "click"], ["tableName", "Matchen", 3, "from", "to", "total"]], template: function AdminMatchOverviewPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " [Naam] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " [Datum] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminMatchOverviewPresenterComponent_Template_button_click_15_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminMatchOverviewPresenterComponent_Template_button_click_18_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-shared-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("from", 1)("to", 1)("total", 1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _shared_components_shared_paginator_shared_paginator_component__WEBPACK_IMPORTED_MODULE_3__["SharedPaginatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1tYXRjaC1vdmVydmlldy1wcmVzZW50ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMatchOverviewPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-match-overview-presenter',
                templateUrl: './admin-match-overview-presenter.component.html',
                styleUrls: ['./admin-match-overview-presenter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-admin-admin-module.js.map