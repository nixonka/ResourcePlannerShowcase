"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var angular2_select_1 = require('angular2-select');
var app_component_1 = require('./app.component');
var global_service_1 = require('./common/services/global.service');
var layout_component_1 = require('./common/components/layout/layout.component');
var layout_service_1 = require('./common/components/layout/layout.service');
var modal_component_1 = require('./common/components/modal/modal.component');
var pagebar_component_1 = require('./common/components/pagebar/pagebar.component');
var team_component_1 = require('./team/team.component');
var modal_anchor_directive_1 = require('./common/directives/modal-anchor/modal-anchor.directive');
var modal_anchor_service_1 = require('./common/directives/modal-anchor/modal-anchor.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_1.Routing,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                angular2_select_1.SelectModule
            ],
            providers: [global_service_1.GlobalService, layout_service_1.LayoutService, modal_anchor_service_1.ModalAnchorService],
            declarations: [
                app_component_1.AppComponent,
                layout_component_1.LayoutComponent,
                pagebar_component_1.PagebarComponent,
                team_component_1.TeamComponent,
                modal_anchor_directive_1.ModalAnchorDirective,
                modal_component_1.ModalComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map