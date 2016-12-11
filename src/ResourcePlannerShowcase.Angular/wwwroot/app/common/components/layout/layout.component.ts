import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {  } from '../../models/rps.interfaces';

import { LayoutService } from './layout.service';
import { ModalAnchorDirective } from '../../directives/modal-anchor/modal-anchor.directive';
import { ModalAnchorService } from '../../directives/modal-anchor/modal-anchor.service';

import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'layout',
    templateUrl: 'app/common/components/layout/layout.component.html',
    styleUrls: ['app/common/components/layout/layout.component.css'],
    providers: [],
    entryComponents: [ModalComponent]
})

@Injectable()
export class LayoutComponent implements OnInit, AfterViewInit {
    @ViewChild(ModalAnchorDirective) modalAnchor: ModalAnchorDirective;

    constructor(private layoutService: LayoutService,
        private modalAnchorService: ModalAnchorService) {

    }

    ngOnInit(): void {
        this.layoutService.calculateSidebarWidth();
        this.layoutService.calculatePropertiesBarWidth();
        this.layoutService.calculateContentWidth();
        this.layoutService.calculateHeight("content");
    }

    ngAfterViewInit() {
        this.modalAnchorService.modalAnchor = this.modalAnchor;
    }

    openModal() {
        this.modalAnchorService.modalAnchor.createModal(ModalComponent);
    }
}
