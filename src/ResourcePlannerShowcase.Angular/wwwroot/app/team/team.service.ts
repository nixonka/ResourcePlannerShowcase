import { Injectable, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import * as _ from "lodash";

import { } from '../common/models/rps.interfaces';
import { Team, Employee, MonthlyUtilization, EmployeeAvailabilities, ProjectActivities } from '../common/models/rps.classes';
import { GlobalService } from '../common/services/global.service';

@Injectable()
export class TeamService implements OnInit {

    teams: Team[];
    employees: Employee[];
    options: any[];
    weeksPerMonth: number[];
    mondaysOfMonth: Date[];

    constructor(private http: Http, private gs: GlobalService) {
        this.teams = [];
        this.options = [];
        this.weeksPerMonth = [];
        this.mondaysOfMonth = [];

        this.getWeeks(2016);
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
            .subscribe(employees => this.calculateMonthlyUtilization(employees));
    }

    getWeeks(year: number): void {
        for (var i = 1; i <= 12; i++) {
            this.http.get((this.gs.getApiUrl('data', 'weeks') + `?month=${i}&year=${year}`))
                .map((response: Response) => <number>response.json())
                .do(data => console.log("All: " + JSON.stringify(data)))
                .catch(this.handleError)
                .subscribe(weeks => this.weeksPerMonth.push(weeks));
        }
    }

    getMondays(year: number, month: number): void {
        this.http.get((this.gs.getApiUrl('data', 'mondays') + `?month=${month}&year=${year}`))
            .map((response: Response) => <Date[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
            .subscribe(mondays => this.mondaysOfMonth = mondays);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    calculateMonthlyUtilization(employees: Employee[]) {
        this.employees = employees;
        for (let emplooyee of this.employees) {
            emplooyee.monthlyUtilization = [];
            for (var i = 1; i <= 12; i++) {
                let utilization = new MonthlyUtilization();

                utilization.month = i;
                utilization.utilization = this.calculateUtilitizationForEmployee(
                    emplooyee.employeeAvailabilities,
                    emplooyee.projectActivities,
                    this.weeksPerMonth[i],
                    i
                );

                emplooyee.monthlyUtilization.push(utilization);
            }
        }
    }

    calculateUtilitizationForEmployee(employeeAvailabilities: EmployeeAvailabilities[], projectActivities: ProjectActivities[], weeks: number, month: number): number {
        var monthlyHours: number = 0;
        var weeksToProcess: number = 0;

        weeksToProcess = this.getWeeksInMonth(month);

        for (let week of employeeAvailabilities) {
            if (week.week >= weeksToProcess && week.week <= weeks) {
                monthlyHours += week.available;
            }
        }

        var monthlyWork: number = 0;
        for (let activity of projectActivities) {
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
    }

    getWeeksInMonth(month: number) {
        if (month == 1)
            return 1;
        else
            return this.calculateWeeksToMonth(month);
    }


    calculateWeeksToMonth(month: number) {
        let weeks = 1;
        for (var i = 1; i <= 12; i++) {
            if (i < month) {
                weeks += this.weeksPerMonth[i];
            }
        }
        return weeks;
    }
}