import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from '../layout/layout.service';

//declare function initSidebar(x: any): any;

@Component({
    selector: 'pagebar',
    templateUrl: 'app/common/components/pagebar/pagebar.component.html',
    styleUrls: ['app/common/components/pagebar/pagebar.component.css'],
    providers: []
})
export class PagebarComponent implements OnInit {
    @Input() breadcrumbItems: string[];
    @Input() title: string;
    @Input() subTitle: string;

    constructor(private layoutService: LayoutService) {

    }

    ngOnInit(): void {
        //initSidebar(null);
    }
}
