import { Injectable, OnInit } from '@angular/core';

import { ModalAnchorDirective } from '../../directives/modal-anchor/modal-anchor.directive';


@Injectable()
export class LayoutService implements OnInit {
    modalAnchor: ModalAnchorDirective;

    showSidebar: boolean;
    showPropertiesbar: boolean;

    sidebarWidth: number;
    contentHeight: number;
    propertiesbarWidth: number;
    contentWidth: number;

    constructor() {
        this.showSidebar = true;
        this.showPropertiesbar = false;
    }

    ngOnInit(): void {

    }

    calculateHeight(container: string) {
        if (container == "content") {
            this.contentHeight = window.innerHeight - 75;
        }
    }

    calculateSidebarWidth() {
        if (this.showSidebar)
            this.sidebarWidth = 0;
        else
            this.sidebarWidth = 0;
    }

    calculateContentWidth() {
        this.contentWidth = 100;
    }

    calculatePropertiesBarWidth() {
        this.propertiesbarWidth = 0;
    }

    //calculateWidth(container: string) {
    //    if (container == "content") {
    //        return
    //    }
    //}

}