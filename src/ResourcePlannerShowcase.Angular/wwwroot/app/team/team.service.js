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
var rps_classes_1 = require('../common/models/rps.classes');
var global_service_1 = require('../common/services/global.service');
var TeamService = (function () {
    function TeamService(http, gs) {
        this.http = http;
        this.gs = gs;
        this.teams = [];
        this.options = [];
        this.weeks = [];
        this.getWeeks(2016);
    }
    TeamService.prototype.ngOnInit = function () {
    };
    TeamService.prototype.getTeams = function () {
        var _this = this;
        //http get
        this.http.get(this.gs.getApiUrl('data', 'getteams'))
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError)
            .subscribe(function (teams) { return _this.teams = teams; });
    };
    //hard coded - loading employees just for team alicic
    //later will be extended with url parameter so it would load employees just for team
    TeamService.prototype.getEmployees = function () {
        var _this = this;
        this.http.get(this.gs.getApiUrl('data', 'getemployees'))
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError)
            .subscribe(function (employees) { return _this.calculateMonthlyUtilization(employees); });
    };
    TeamService.prototype.getWeeks = function (year) {
        var _this = this;
        for (var i = 1; i <= 12; i++) {
            this.http.get((this.gs.getApiUrl('data', 'weeks') + ("?month=" + i + "&year=" + year)))
                .map(function (response) { return response.json(); })
                .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
                .catch(this.handleError)
                .subscribe(function (weeks) { return _this.weeks.push(weeks); });
        }
    };
    TeamService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TeamService.prototype.calculateMonthlyUtilization = function (employees) {
        this.employees = employees;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var emplooyee = _a[_i];
            emplooyee.monthlyUtilization = [];
            for (var i = 1; i <= 12; i++) {
                var utilization = new rps_classes_1.MonthlyUtilization();
                utilization.month = i;
                utilization.utilization = this.calculateUtilitizationForEmployee(emplooyee.employeeAvailabilities, emplooyee.projectActivities, this.weeks[i], i);
                emplooyee.monthlyUtilization.push(utilization);
            }
        }
    };
    TeamService.prototype.calculateUtilitizationForEmployee = function (employeeAvailabilities, projectActivities, weeks, month) {
        var monthlyHours = 0;
        var weeksToProcess = 0;
        weeksToProcess = this.getWeeksInMonth(month);
        for (var _i = 0, employeeAvailabilities_1 = employeeAvailabilities; _i < employeeAvailabilities_1.length; _i++) {
            var week = employeeAvailabilities_1[_i];
            if (week.week >= weeksToProcess && week.week <= weeks) {
                monthlyHours += week.available;
            }
        }
        var monthlyWork = 0;
        for (var _a = 0, projectActivities_1 = projectActivities; _a < projectActivities_1.length; _a++) {
            var activity = projectActivities_1[_a];
            if (activity.week >= weeksToProcess && activity.week <= weeks) {
                monthlyWork += activity.work;
            }
        }
        if (monthlyHours != 0 && monthlyWork != 0) {
            return monthlyWork / monthlyHours;
        }
        else {
            return 0;
        }
    };
    TeamService.prototype.getWeeksInMonth = function (month) {
        if (month == 1)
            return 1;
        else
            return this.calculateWeeksToMonth(month);
    };
    TeamService.prototype.calculateWeeksToMonth = function (month) {
        var weeks = 1;
        for (var i = 1; i <= 12; i++) {
            if (i < month) {
                weeks += this.weeks[i];
            }
        }
        return weeks;
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, global_service_1.GlobalService])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map