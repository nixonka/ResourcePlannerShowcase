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
var layout_service_1 = require('./layout.service');
var modal_anchor_directive_1 = require('../../directives/modal-anchor/modal-anchor.directive');
var modal_anchor_service_1 = require('../../directives/modal-anchor/modal-anchor.service');
var modal_component_1 = require('../modal/modal.component');
var LayoutComponent = (function () {
    function LayoutComponent(layoutService, modalAnchorService) {
        this.layoutService = layoutService;
        this.modalAnchorService = modalAnchorService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.layoutService.calculateSidebarWidth();
        this.layoutService.calculatePropertiesBarWidth();
        this.layoutService.calculateContentWidth();
        this.layoutService.calculateHeight("content");
    };
    LayoutComponent.prototype.ngAfterViewInit = function () {
        this.modalAnchorService.modalAnchor = this.modalAnchor;
    };
    LayoutComponent.prototype.openModal = function () {
        this.modalAnchorService.modalAnchor.createModal(modal_component_1.ModalComponent);
    };
    __decorate([
        core_1.ViewChild(modal_anchor_directive_1.ModalAnchorDirective), 
        __metadata('design:type', modal_anchor_directive_1.ModalAnchorDirective)
    ], LayoutComponent.prototype, "modalAnchor", void 0);
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'layout',
            templateUrl: 'app/common/components/layout/layout.component.html',
            styleUrls: ['app/common/components/layout/layout.component.css'],
            providers: [],
            entryComponents: [modal_component_1.ModalComponent]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [layout_service_1.LayoutService, modal_anchor_service_1.ModalAnchorService])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=layout.component.js.map