import { EventEmitter } from '@angular/core';

import { ContentModelStatus } from './Enums'

export interface IEmployee {
    id: string;
    name: string;
    monthlyUtilization: IMonthlyUtilization[];
}

export interface IMonthlyUtilization {
    month: number;
    utilization: number;
}


export interface IModalComponent {
    close: EventEmitter<{}>;
}