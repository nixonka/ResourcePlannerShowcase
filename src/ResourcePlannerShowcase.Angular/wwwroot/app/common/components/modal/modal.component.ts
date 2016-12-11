import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { IModalComponent } from '../../models/rps.interfaces';

//declare function initSidebar(x: any): any;

@Component({
    selector: 'modal',
    templateUrl: 'app/common/components/modal/modal.component.html',
    styleUrls: ['app/common/components/modal/modal.component.css'],
    providers: []
})
export class ModalComponent implements IModalComponent, OnInit {
    close = new EventEmitter();

    constructor() {

    }

    ngOnInit(): void {
        //initSidebar(null);
    }

    closeModal() {
        this.close.emit('event');
    }
}
