import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

//import {  } from './common/models/';
//import {  } from './common/services/';
import { GlobalService } from './common/services/global.service';

//enableProdMode();

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: []
})
export class AppComponent implements OnInit {
    errorMessage: any;

    constructor(private gs: GlobalService) {

    }

    ngOnInit(): void {
        this.gs.getTeams();
    }
}
