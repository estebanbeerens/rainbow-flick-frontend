(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yourivanlaer/Desktop/Hackathon/rainbow-flick-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    // TODO : Edit apiUrl to something that is right
    apiUrl: 'https://rainbow-flick-backend-app.herokuapp.com/api/',
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

/***/ "GDbA":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class TeamService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'team';
        this.teams$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.teamDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    loadTeams() {
        this.http.get(`${this.baseUrl}/all`).subscribe((response) => {
            this.teams$.next(response.results);
        });
    }
    loadTeamDetails(teamID) {
        this.http.get(`${this.baseUrl}/${teamID}`).subscribe((response) => {
            this.teamDetails$.next(response.result);
        });
    }
    createTeam(body) {
        this.http.post(`${this.baseUrl}`, body).subscribe((response) => {
            console.log('Response', response);
            this.teamDetails$.next(response.result);
            this.teams$.next([...this.teams$.value, response.result]);
        });
    }
    //TODO add in teams
    updateTeam(teamID, body) {
        this.http.put(`${this.baseUrl}/${teamID}`, body).subscribe((response) => {
            this.teamDetails$.next(response.result);
        });
    }
    deleteTeam(teamID) {
        this.http.delete(`${this.baseUrl}/${teamID}`).subscribe((response) => {
            this.teams$.next(this.teams$.value.filter((teams) => teams.id != teamID));
        });
    }
    loadTeamByName(teamName) {
        this.http.get(`${this.baseUrl}/search?name=${teamName}`).subscribe((response) => {
            this.teamDetails$.next(response.result);
        });
    }
    joinTeam(teamID, body) {
        this.http.post(`${this.baseUrl}/${teamID}/join`, body).subscribe((response) => {
            this.teamDetails$.next(response.result);
        });
    }
    leaveTeam(teamID, body) {
        this.http.post(`${this.baseUrl}/${teamID}/leave`, body).subscribe((response) => {
            this.teamDetails$.next(response.result);
        });
    }
    acceptTeam(teamID, body) {
        this.http.post(`${this.baseUrl}/${teamID}/accept`, body).subscribe((response) => {
            this.teamDetails$.next(response.result);
        });
    }
}
TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HGD+":
/*!**************************************************!*\
  !*** ./src/app/security/security.interceptor.ts ***!
  \**************************************************/
/*! exports provided: SecurityInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityInterceptor", function() { return SecurityInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");






class SecurityInterceptor {
    constructor(_router, messageService) {
        this._router = _router;
        this.messageService = messageService;
    }
    intercept(request, next) {
        let token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                },
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            if (err.status == 400) {
                this.messageService.setMessage(err.error);
            }
            else if (err.status === 401) {
                this._router.navigate(['security']);
            }
            else {
                console.log(err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('unauthorized');
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        }));
    }
}
SecurityInterceptor.ɵfac = function SecurityInterceptor_Factory(t) { return new (t || SecurityInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
SecurityInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SecurityInterceptor, factory: SecurityInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/team.service */ "GDbA");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/table.service */ "TQws");
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/match.service */ "VfKn");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AppComponent {
    constructor(_userService, _teamService, _tableService, _matchService, _messsageService) {
        this._userService = _userService;
        this._teamService = _teamService;
        this._tableService = _tableService;
        this._matchService = _matchService;
        this._messsageService = _messsageService;
        this.title = 'rainbow-flick-frontend';
    }
    ngOnInit() {
        // console.log('ok');
        // this._userService.login({ email: 'superadmin@example.com', password: 'Admin1234!' });
        // this._userService.userDetails$.subscribe((result) => console.log('User details:', result));
        /*USERS*/
        // this._userService.userAuth$.subscribe((result) => console.log('User auth', result));
        // this._userService.userDetails$.subscribe((result) => console.log('User details:', result));
        // this._userService.register({
        //   firstName: 'Joske',
        //   lastName: 'Vermeulen',
        //   email: 'tt1234@example.com',
        //   dateOfBirth: '1989-01-01T00:00:00.000Z',
        //   imageURL:
        //     'https://cdn5.vectorstock.com/i/thumb-large/17/59/default-placeholder-businessman-half-length-portr-vector-21181759.jpg',
        //   password: 'Joske1234!!',
        // });
        // this._userService.userDetails$.subscribe((result) => console.log('User details:', result));
        // this._userService.userAuth$.subscribe((result) => {
        // });
        // this._userService.loadUserDetails('5fcfec18443c0400049e8ac9');
        // this._userService.updateUser('5fcec9f2ab63bf1ab480294b', {
        //   lastName: 'BONE',
        // });
        // this._teamService.createTeam({
        //   name: 'TYYsrrrrr',
        //   location: '1e verdiep',
        //   companyName: 'Globex Corporation',
        //   imageURL: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/team-1561302-1322526.png',
        // });
        // this._teamService.teamDetails$.subscribe((result) => console.log(result));
        // this._teamService.teams$.subscribe((result) => console.log(result));
        // this._teamService.loadTeamByName('Appellen');
        // this._teamService.joinTeam('5fd1fa42469b4100043bebc3', {
        //   id: '5fce9b3cfb9aa569cca3bef1',
        // });
        // this._teamService.acceptTeam('5fd1fa42469b4100043bebc3', {
        //   id: '5fce9b3cfb9aa569cca3bef1',
        // });
        // this._teamService.teamDetails$.subscribe((resuslt) => console.log(resuslt));
        // this._matchService.challengeMatch({
        //   homeTeam: '5fcfc4782e9463437ce096bb',
        //   awayTeam: '5fcfc9d26938284d8cce830e',
        //   dateTimePlanned: '1607601397106',
        //   table: '5fcf3df863a2aa2dd077782e',
        // });
        // this._messsageService.message$.subscribe((mes) => console.log(mes));
        // this._matchService.matchDetails$.subscribe((result) => console.log('ok', result));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_match_service__WEBPACK_IMPORTED_MODULE_4__["MatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }, { type: src_app_services_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"] }, { type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_4__["MatchService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "TQws":
/*!*******************************************!*\
  !*** ./src/app/services/table.service.ts ***!
  \*******************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class TableService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'table';
        this.tables$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.tableDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    loadTables() {
        this.http.get(`${this.baseUrl}/all`).subscribe((response) => {
            this.tables$.next(response.results);
        });
    }
    loadTableDetails(tableID) {
        this.http.get(`${this.baseUrl}/${tableID}`).subscribe((response) => {
            this.tableDetails$.next(response.result);
        });
    }
    updateTable(tableID, body) {
        this.http.put(`${this.baseUrl}/${tableID}`, body).subscribe((response) => {
            this.tableDetails$.next(response.result);
        });
    }
    deleteTable(tableID) {
        this.http.delete(`${this.baseUrl}/${tableID}`).subscribe((response) => {
            this.tables$.next(this.tables$.value.filter((table) => table.id != tableID));
        });
    }
    createTable(body) {
        this.http.post(`${this.baseUrl}`, body).subscribe((response) => {
            this.tables$.next([...this.tables$.value, response.result]);
        });
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "VfKn":
/*!*******************************************!*\
  !*** ./src/app/services/match.service.ts ***!
  \*******************************************/
/*! exports provided: MatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchService", function() { return MatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MatchService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'match';
        this.matches$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.matchDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    loadMatches() {
        this.http.get(`${this.baseUrl}/all`).subscribe((response) => {
            this.matches$.next(response.results);
        });
    }
    loadMatchDetails(matchID) {
        this.http.get(`${this.baseUrl}/${matchID}`).subscribe((response) => {
            this.matchDetails$.next(response.result);
        });
    }
    updateMatch(matchID, body) {
        this.http.put(`${this.baseUrl}/${matchID}`, body).subscribe((response) => {
            this.matchDetails$.next(response.result);
        });
    }
    deleteMatch(matchID) {
        this.http.delete(`${this.baseUrl}/${matchID}`).subscribe((response) => {
            this.matches$.next(this.matches$.value.filter((match) => match.id != response.result.id));
        });
    }
    createMatch(body) {
        this.http.post(`${this.baseUrl}`, body).subscribe((response) => {
            this.matches$.next([...this.matches$.value, response.result]);
        });
    }
    //TODO update score Match 5fd20c1bfa0d0e000400c1ec
    updateScoreMatch(matchID, body) {
        this.http.put(`${this.baseUrl}/score/${matchID}`, body).subscribe((response) => {
            this.matchDetails$.next(response.result);
        });
    }
    //TODO FIXED PROBLEM: post challenge
    challengeMatch(body) {
        this.http.post(`${this.baseUrl}/challenge`, body).subscribe((response) => {
            this.matchDetails$.next(response.result);
        });
    }
}
MatchService.ɵfac = function MatchService_Factory(t) { return new (t || MatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatchService, factory: MatchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _security_security_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security/security.interceptor */ "HGD+");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _security_security_interceptor__WEBPACK_IMPORTED_MODULE_6__["SecurityInterceptor"], multi: true }], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _security_security_interceptor__WEBPACK_IMPORTED_MODULE_6__["SecurityInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'user';
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.userAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.userDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.loginError$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.registerError$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        const token = localStorage.getItem('token');
        if (token) {
            this.token = token;
            const decodedJwt = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
            this.userAuth$.next(decodedJwt);
        }
    }
    getToken() {
        return this.token;
    }
    login(body) {
        console.log('func login');
        this.http.post(this.baseUrl + '/authenticate', body).subscribe((response) => {
            console.log('response');
            if (response['error']) {
                localStorage.removeItem('token');
                this.loginError$.next(response['error']);
            }
            else {
                const authUser = response;
                const decodedJwt = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(authUser.result.accessToken);
                this.userAuth$.next(decodedJwt);
                localStorage.setItem('token', authUser.result.accessToken);
                const userDetails = response;
                this.userDetails$.next(userDetails.result);
            }
        });
    }
    //TODO message: "Already exist" geen Array en bij "required" array
    register(body) {
        this.http.post(`${this.baseUrl}/register`, body).subscribe((response) => {
            if (response['message']) {
                this.registerError$.next(response['message']);
            }
            else {
                const authUser = response;
                const decodedJwt = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(authUser.result.accessToken);
                this.userAuth$.next(decodedJwt);
                localStorage.setItem('token', authUser.result.accessToken);
                const userDetails = response;
                this.userDetails$.next(userDetails.result);
            }
        });
    }
    createAdmin(body) {
        this.http.post(`${this.baseUrl}/admin`, body).subscribe((response) => {
            this.userDetails$.next(response.result);
        });
    }
    logout() {
        this.userAuth$.next(null);
        localStorage.removeItem('token');
    }
    loadUsers() {
        this.http.get(`${this.baseUrl}/all`).subscribe((response) => {
            this.users$.next(response);
        });
    }
    loadUserDetails(userID) {
        this.http.get(`${this.baseUrl}/${userID}`).subscribe((response) => {
            this.userDetails$.next(response.result);
        });
    }
    updateUser(userID, body) {
        this.http.put(`${this.baseUrl}/${userID}`, body).subscribe((response) => {
            this.userDetails$.next(response.result);
        });
    }
    deleteUser(UserID) {
        this.http.delete(`${this.baseUrl}/${UserID}`).subscribe((response) => {
            this.message$.next(response);
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class MessageService {
    constructor() {
        this.messageStore = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.message$ = this.messageStore.asObservable();
    }
    setMessage(message) {
        this.messageStore.next(message);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    { path: 'app', loadChildren: () => __webpack_require__.e(/*! import() | core-core-module */ "core-core-module").then(__webpack_require__.bind(null, /*! ./core/core.module */ "pKmL")).then(m => m.CoreModule) },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule) },
    { path: '**', redirectTo: 'app' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map