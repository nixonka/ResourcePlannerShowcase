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
var team_service_1 = require('./team.service');
var global_service_1 = require('../common/services/global.service');
var TeamComponent = (function () {
    function TeamComponent(ts, gs) {
        this.ts = ts;
        this.gs = gs;
        this.pushTeamsToOptions();
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.ts.getTeams();
        this.ts.getEmployees();
    };
    TeamComponent.prototype.onSelected = function (item) {
        console.log('Selected: ' + item.value + ', ' + item.label);
    };
    TeamComponent.prototype.pushTeamsToOptions = function () {
        for (var _i = 0, _a = this.gs.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            var item = { value: team.name, label: team.id };
            this.options.push(item);
        }
    };
    TeamComponent.prototype.test = function () {
        var t = this.ts.teams;
        var e = this.ts.employees;
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'team',
            templateUrl: 'app/team/team.component.html',
            providers: [team_service_1.TeamService]
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, global_service_1.GlobalService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map