import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from "lodash";

import { TeamService } from '../../../team/team.service';
//import { } from '../../models/rps.interfaces';
import { Employee } from '../../models/rps.classes';


//declare function initSidebar(x: any): any;

@Component({
    selector: 'modal',
    templateUrl: 'app/common/components/modal/modal.component.html',
    styleUrls: ['app/common/components/modal/modal.component.css'],
    providers: [TeamService]
})
export class ModalComponent implements OnInit {
    @Input() teamService: TeamService;
    @Input() selectedMonth: number;
    @Input() selectedEmployee: string;

    @Output() onClose = new EventEmitter<boolean>();

    employee: Employee;

    constructor() {

    }

    ngOnInit(): void {
        this.employee = _.filter(this.teamService.employees, { 'id': this.selectedEmployee })[0];
    }

    closeModal() {
        this.onClose.emit(false);
    }

    getWork(projectId: string, weekOfMonth: number) {

        var work = _.filter(this.employee.projectActivities,
            { 'projectId': projectId, 'week': (this.teamService.calculateWeeksToMonth(this.selectedMonth) + weekOfMonth) });

        if (work.length == 0)
            return 0;
        else
            return work[0].work;
    }

    getModel(projectId: string, week: number) {
        return _.filter(this.employee.projectActivities, { 'projectId': projectId, 'week': week })[0];
    }

    weeksNumbersOnMonth(month: number) {
        var weeksNumbers: number[] = [];

        for (var i = 1; i <= this.teamService.weeksPerMonth[month]; i++) {
            weeksNumbers.push(i + this.teamService.calculateWeeksToMonth(month));
        }

        return weeksNumbers;
    }
}
