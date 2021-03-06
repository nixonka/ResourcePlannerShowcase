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
var GlobalService = (function () {
    //teams: Team[];
    function GlobalService(http) {
        this.http = http;
        this._baseApiUrl = "http://localhost:64661";
        //this.teams = [];
    }
    GlobalService.prototype.getApiUrl = function (controller, method) {
        return this._baseApiUrl + "/api/" + controller + "/" + method;
    };
    //getTeams(): void {
    //    this.http.get(this.getApiUrl('data', 'getteams'))
    //        .map((response: Response) => <Team[]>response.json())
    //        .do(data => console.log("All: " + JSON.stringify(data)))
    //        .catch(this.handleError)
    //        .subscribe(teams => this.teams = teams);
    //}
    GlobalService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    GlobalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;
//# sourceMappingURL=global.service.js.map