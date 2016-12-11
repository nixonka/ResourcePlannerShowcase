"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/Rx');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var global_service_1 = require('../common/services/global.service');
var TeamService = (function () {
    function TeamService(http, gs) {
        this.http = http;
        this.gs = gs;
        this.teams = [];
        this.options = [];
    }
    TeamService.prototype.ngOnInit = function () {
    };
    TeamService.prototype.getTeams = function () {
        var _this = this;
        this.http.get(this.gs.getApiUrl('data', 'getteams'))
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError)
            .subscribe(function (teams) { return _this.teams = teams; });
    };
    TeamService.prototype.getEmployees = function () {
        var _this = this;
        this.http.get(this.gs.getApiUrl('data', 'getemployees'))
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError)
            .subscribe(function (employees) { return _this.teams[2].employees = employees; });
    };
    //getTeams(): Observable<Team[]> {
    //    return this.http.get(this.gs.getApiUrl('data', 'getteams'))
    //        .map((response: Response) => <Team[]>response.json())
    //        .do(data => console.log("All: " + JSON.stringify(data)))
    //        .catch(this.handleError);
    //}
    TeamService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, global_service_1.GlobalService])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map