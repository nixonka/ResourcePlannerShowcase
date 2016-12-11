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
var ModalAnchorDirective = (function () {
    function ModalAnchorDirective(viewContainer, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    //createModal<T>(modalComponent: { new (): T }): ComponentRef<T> {
    ModalAnchorDirective.prototype.createModal = function (modalComponent) {
        this.viewContainer.clear();
        var modalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(modalComponent);
        var modalComponentRef = this.viewContainer.createComponent(modalComponentFactory);
        modalComponentRef.instance.close.subscribe(function () {
            modalComponentRef.destroy();
        });
        return modalComponentRef;
    };
    ModalAnchorDirective = __decorate([
        core_1.Directive({
            selector: '[modalAnchor]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
    ], ModalAnchorDirective);
    return ModalAnchorDirective;
}());
exports.ModalAnchorDirective = ModalAnchorDirective;
//# sourceMappingURL=modal-anchor.directive.js.map