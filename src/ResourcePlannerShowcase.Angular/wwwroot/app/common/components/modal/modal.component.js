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
var _ = require("lodash");
var team_service_1 = require('../../../team/team.service');
//declare function initSidebar(x: any): any;
var ModalComponent = (function () {
    function ModalComponent() {
        this.onClose = new core_1.EventEmitter();
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.employee = _.filter(this.teamService.employees, { 'id': this.selectedEmployee })[0];
    };
    ModalComponent.prototype.closeModal = function () {
        this.onClose.emit(false);
    };
    ModalComponent.prototype.getWork = function (projectId, weekOfMonth) {
        var work = _.filter(this.employee.projectActivities, { 'projectId': projectId, 'week': (this.teamService.calculateWeeksToMonth(this.selectedMonth) + weekOfMonth) });
        if (work.length == 0)
            return 0;
        else
            return work[0].work;
    };
    ModalComponent.prototype.getModel = function (projectId, week) {
        return _.filter(this.employee.projectActivities, { 'projectId': projectId, 'week': week })[0];
    };
    ModalComponent.prototype.weeksNumbersOnMonth = function (month) {
        var weeksNumbers = [];
        for (var i = 1; i <= this.teamService.weeksPerMonth[month]; i++) {
            weeksNumbers.push(i + this.teamService.calculateWeeksToMonth(month));
        }
        return weeksNumbers;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', team_service_1.TeamService)
    ], ModalComponent.prototype, "teamService", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ModalComponent.prototype, "selectedMonth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ModalComponent.prototype, "selectedEmployee", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ModalComponent.prototype, "onClose", void 0);
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'modal',
            templateUrl: 'app/common/components/modal/modal.component.html',
            styleUrls: ['app/common/components/modal/modal.component.css'],
            providers: [team_service_1.TeamService]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map