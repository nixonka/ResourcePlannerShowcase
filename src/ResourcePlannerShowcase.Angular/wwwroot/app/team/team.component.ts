import { Component, OnInit } from '@angular/core';

import {  } from '../common/models/rps.interfaces';
import { Team, Employee } from '../common/models/rps.classes';


import { TeamService } from './team.service';
import { GlobalService } from '../common/services/global.service';
import { ModalAnchorService } from '../common/directives/modal-anchor/modal-anchor.service';
import { ModalComponent } from '../common/components/modal/modal.component';

@Component({
    selector: 'team',
    templateUrl: 'app/team/team.component.html',
    providers: [TeamService]
})
export class TeamComponent implements OnInit {

    options: any[] = [];

    constructor(private ts: TeamService, private gs: GlobalService,
        private modalAnchorService: ModalAnchorService) {
        //hard coded filter values
        this.options.push({ value: 1, label: 'Burscher' });
        this.options.push({ value: 2, label: 'Faustner' });
        this.options.push({ value: 3, label: 'Alicic' });
        this.options.push({ value: 4, label: 'Absenger' });
        this.options.push({ value: 5, label: 'Lang' });
        this.options.push({ value: 6, label: 'Konrad' });
        this.options.push({ value: 7, label: 'Krenn' });
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
    }

    openModal() {
        this.modalAnchorService.modalAnchor.createModal(ModalComponent);
    }
}

