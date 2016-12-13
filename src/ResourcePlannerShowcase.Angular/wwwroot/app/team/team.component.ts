import { Component, OnInit } from '@angular/core';

import * as _ from "lodash"; //Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.


import {  } from '../common/models/rps.interfaces';
import { Team, Employee } from '../common/models/rps.classes';


import { TeamService } from './team.service';
import { GlobalService } from '../common/services/global.service';
import { ModalComponent } from '../common/components/modal/modal.component';



@Component({
    selector: 'team',
    templateUrl: 'app/team/team.component.html',
    providers: [TeamService]
})
export class TeamComponent implements OnInit {
    showModal: boolean = false;
    selectedMonth: number;
    selectedEmployee: string;
    selectedTeam: string = "";

    constructor(private ts: TeamService, private gs: GlobalService) {

    }

    ngOnInit(): void {
        this.ts.getTeams();
        this.ts.getEmployees();
    }

    onSelected(item: any) {
        console.log('Selected: ' + item.value + ', ' + item.label);
    }
    onDeselected(item: any) {
        console.log('Selected: ' + item.value + ', ' + item.label);
    }

    test() {
        var t = this.ts.teams;
        var e = this.ts.employees; 
        var st = this.selectedTeam;
    }

    openModal(month: number, employeeId: string) {
        this.selectedEmployee = employeeId;
        this.selectedMonth = month;
        this.ts.getMondays(2016, month);

        this.showModal = true;
    }

    onClose(close: boolean) {
        this.showModal = close;
    }
}

