import { Directive, ComponentFactoryResolver, ComponentFactory, ComponentRef, ViewContainerRef } from '@angular/core';

import { ModalComponent } from '../../components/modal/modal.component';
import { IModalComponent } from '../../models/rps.interfaces';


@Directive({
    selector: '[modalAnchor]'
})
export class ModalAnchorDirective {
    constructor(private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    //createModal<T>(modalComponent: { new (): T }): ComponentRef<T> {
    createModal(modalComponent: { new (): IModalComponent }): ComponentRef<IModalComponent> {
        this.viewContainer.clear();

        let modalComponentFactory =
            this.componentFactoryResolver.resolveComponentFactory(modalComponent);
        let modalComponentRef = this.viewContainer.createComponent(modalComponentFactory);

        modalComponentRef.instance.close.subscribe(() => {
            modalComponentRef.destroy();
        });

        return modalComponentRef;
    }
}