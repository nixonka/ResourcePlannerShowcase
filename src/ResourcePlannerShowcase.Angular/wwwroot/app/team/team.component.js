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
var TeamComponent = (function () {
    function TeamComponent(ts) {
        this.ts = ts;
        this.employees = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.ts.getTeams();
        this.ts.getEmployees();
        this.options = [
            {
                value: 'a',
                label: 'Alpha'
            },
            {
                value: 'b',
                label: 'Beta'
            },
            {
                value: 'c',
                label: 'Gamma'
            }
        ];
    };
    TeamComponent.prototype.onSelected = function (item) {
        console.log('Selected: ' + item.value + ', ' + item.label);
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'team',
            templateUrl: 'app/team/team.component.html',
            providers: [team_service_1.TeamService]
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map