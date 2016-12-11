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
var layout_service_1 = require('../layout/layout.service');
//declare function initSidebar(x: any): any;
var BreeadcrumbComponent = (function () {
    function BreeadcrumbComponent(layoutService) {
        this.layoutService = layoutService;
    }
    BreeadcrumbComponent.prototype.ngOnInit = function () {
        //initSidebar(null);
    };
    BreeadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'breeadcrumb',
            templateUrl: 'app/common/components/breeadcrumb/breeadcrumb.component.html',
            styleUrls: ['app/common/components/breeadcrumb/breeadcrumb.component.css'],
            providers: []
        }), 
        __metadata('design:paramtypes', [layout_service_1.LayoutService])
    ], BreeadcrumbComponent);
    return BreeadcrumbComponent;
}());
exports.BreeadcrumbComponent = BreeadcrumbComponent;
//# sourceMappingURL=breeadcrumb.component.js.map