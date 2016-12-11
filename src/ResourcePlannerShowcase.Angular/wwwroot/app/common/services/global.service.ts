import { Injectable, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { } from '../models/rps.interfaces';
import { } from '../models/rps.classes';

@Injectable()
export class GlobalService {

    private _baseApiUrl = "http://localhost:64661";

    constructor(private _http: Http) { }

    getApiUrl(controller: string, method: string): string {
        return `${this._baseApiUrl}/api/${controller}/${method}`;
    }





    //buildPOSTTimeCampApiUrl(controller: string): string {
    //    return this._basePOSTTimeCampApiUrl.replace("[controller]", controller).replace("[token]", this.userToken);
    //}

    //buildInternalApiUrl(controller: string, method: string, uriParameter?: string): string {
    //    return this._baseInternalApiUrl.replace("[controller]", controller).replace("[method]", method)
    //        .replace("/[uriParameter]", uriParameter == null ? "" : ("?" + uriParameter));
    //}


}