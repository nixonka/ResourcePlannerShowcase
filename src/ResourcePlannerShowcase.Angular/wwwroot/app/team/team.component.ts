import { Component, OnInit } from '@angular/core';

import {  } from '../common/models/rps.interfaces';
import { Team, Employee } from '../common/models/rps.classes';


import { TeamService } from './team.service';

@Component({
    selector: 'team',
    templateUrl: 'app/team/team.component.html',
    providers: [TeamService]
})
export class TeamComponent implements OnInit {

    options: any[];
    employees: Employee[];


    constructor(private ts: TeamService) {
        this.employees = [];
    }

    ngOnInit(): void {
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
    }

    onSelected(item: any) {
        console.log('Selected: ' + item.value + ', ' + item.label);
    }

    //getTeams() {
    //    let options: any[] = []

    //    for (let team of this.ts.teams) {
    //        let item = { value: team.id, label: team.name };
    //        options.push(item);
    //    }
    //    return options;
    //}

    //pushTeamsToOptions(teams: Team[]) {
    //    this.ts.teams = teams;

    //    //for (let team of teams) {
    //    //    let item = { value: team.name, label: team.id };
    //    //    this.options.push(item);
    //    //}
    //    this.opti();
    //}
}

