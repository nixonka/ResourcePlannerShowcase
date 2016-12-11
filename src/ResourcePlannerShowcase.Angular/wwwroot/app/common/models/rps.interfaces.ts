import { EventEmitter } from '@angular/core';

import { ContentModelStatus } from './Enums'

export interface IEmployee {
    id: string;
    name: string;
    monthlyUtilization: IMonthlyUtilization[];
}

export interface IMonthlyUtilization {
    month: string;
    utilization: number;
}

export interface IContentModel {
    id: string;
    name: string;
    description: string;
    status: ContentModelStatus;
    contentFields: IContentField[];
}

export interface IContentField {
    key: string;
    name: string;
    description: string;
    type: IFieldType;

}

export interface IFieldType {
    type: string;
    length: number;
    icon: string;
    descriptions: string[];
}

export interface IContent {
    id: string;
    contentModelId: string;
    contentFieldsValues: any;
}

export interface IModalComponent {
    close: EventEmitter<{}>;
}