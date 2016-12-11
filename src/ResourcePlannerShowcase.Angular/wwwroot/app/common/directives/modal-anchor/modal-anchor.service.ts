import { Injectable, OnInit, ComponentFactoryResolver, ComponentFactory, ComponentRef, ViewContainerRef } from '@angular/core';

import { IModalComponent } from '../../models/rps.interfaces';

import { ModalAnchorDirective } from '../../directives/modal-anchor/modal-anchor.directive';


@Injectable()
export class ModalAnchorService {
    modalAnchor: any;

    constructor() { }
}