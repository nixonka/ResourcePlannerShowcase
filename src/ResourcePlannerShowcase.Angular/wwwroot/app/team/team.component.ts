import { Component, OnInit } from '@angular/core';

import {  } from '../common/models/rps.interfaces';
import { Team, Employee } from '../common/models/rps.classes';


import { TeamService } from './team.service';
import { GlobalService } from '../common/services/global.service';

@Component({
    selector: 'team',
    templateUrl: 'app/team/team.component.html',
    providers: [TeamService]
})
export class TeamComponent implements OnInit {

    options: any[];

    constructor(private ts: TeamService, private gs: GlobalService) {
        this.pushTeamsToOptions();
    }

    ngOnInit(): void {
        this.ts.getTeams();
        this.ts.getEmployees();
    }

    onSelected(item: any) {
        console.log('Selected: ' + item.value + ', ' + item.label);
    }

    pushTeamsToOptions() {
        for (let team of this.gs.teams) {
            let item = { value: team.name, label: team.id };
            this.options.push(item);
        }
    }

    test() {
        var t = this.ts.teams;
        var e = this.ts.employees; 
    }
}

