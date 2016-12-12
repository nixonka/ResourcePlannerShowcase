import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SelectModule } from  'angular2-select';

import { AppComponent } from './app.component';

import { GlobalService } from './common/services/global.service';
import { LayoutComponent } from './common/components/layout/layout.component';
import { LayoutService } from './common/components/layout/layout.service';
import { ModalComponent } from './common/components/modal/modal.component';
import { PagebarComponent } from './common/components/pagebar/pagebar.component';
import { TeamComponent } from './team/team.component';
import { ModalAnchorDirective } from './common/directives/modal-anchor/modal-anchor.directive';
import { ModalAnchorService } from './common/directives/modal-anchor/modal-anchor.service';
import { Routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        Routing,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2BootstrapModule,
        SelectModule
    ],
    providers: [GlobalService, LayoutService, ModalAnchorService],
    declarations: [
        AppComponent,
        LayoutComponent,
        PagebarComponent,
        TeamComponent,
        ModalAnchorDirective,
        ModalComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
