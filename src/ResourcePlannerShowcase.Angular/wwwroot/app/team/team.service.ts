import { Injectable, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { } from '../common/models/rps.interfaces';
import { Team, Employee } from '../common/models/rps.classes';
import { GlobalService } from '../common/services/global.service';

@Injectable()
export class TeamService implements OnInit {

    teams: Team[];
    employees: Employee[];
    options: any[];

    constructor(private http: Http, private gs: GlobalService) {
        this.teams = [];
        this.options = [];
    }

    ngOnInit(): void {

    }

    getTeams(): void {
        //http get
        this.http.get(this.gs.getApiUrl('data', 'getteams'))
            .map((response: Response) => <Team[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
            .subscribe(teams => this.teams = teams);
    }

    //hard coded - loading employees just for team alicic
    //later will be extended with url parameter so it would load employees just for team
    getEmployees(): void {
        this.http.get(this.gs.getApiUrl('data', 'getemployees'))
            .map((response: Response) => <Employee[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
            .subscribe(employees => this.employees = employees);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}