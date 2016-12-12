import { Injectable, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { } from '../models/rps.interfaces';
import { Team } from '../models/rps.classes';

@Injectable()
export class GlobalService {

    private _baseApiUrl = "http://localhost:64661";
    teams: Team[];

    constructor(private http: Http) {
        this.teams = [];
    }

    getApiUrl(controller: string, method: string): string {
        return `${this._baseApiUrl}/api/${controller}/${method}`;
    }

    getTeams(): void {
        this.http.get(this.getApiUrl('data', 'getteams'))
            .map((response: Response) => <Team[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
            .subscribe(teams => this.teams = teams);
    }


    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}