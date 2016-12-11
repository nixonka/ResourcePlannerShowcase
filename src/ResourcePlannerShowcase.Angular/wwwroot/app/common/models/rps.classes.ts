import {
    IContentModel, IContentField, IFieldType, IContent,
    IEmployee, IMonthlyUtilization
} from './rps.interfaces';
import { ContentModelStatus } from './Enums'


//import { InitializationService } from '../services/initialization.service';

export class Projects {

}

export class Team {
    id: string;
    name: string;
    employees: IEmployee[];
    constructor() {
        this.employees = [];
    }
}

export class Employee implements IEmployee {
    id: string;
    name: string;
    monthlyUtilization: IMonthlyUtilization[];
    constructor() { }
}

export class MonthlyUtilization implements IMonthlyUtilization {
    month: string;
    utilization: number;
}


export class ContentModel implements IContentModel {
    id: string;
    name: string;
    description: string;
    status: ContentModelStatus;
    contentFields: IContentField[];

    constructor() {
        this.id = "";
        this.name = "";
        this.description = "";
        this.status = ContentModelStatus.Draft;
        this.contentFields = [];
    }
}

export class ContentField implements IContentField {
    key: string;
    name: string;
    description: string;
    type: IFieldType;

    constructor() { }
}

export class StringFieldType implements IFieldType {
    type: string = "string";
    length: number = 255;
    icon: string = "";
    descriptions: string[] = ["Sortable", "Maximum 255 characters. Use for titles, names, tags, URLs, e-mail addresses."];

    constructor() { }
}

export class TextFieldType implements IFieldType {
    type: string = "text";
    length: number = -1;
    icon: string = "";
    descriptions: string[] = ["Unsortable", "Maximum 50k characters. Use for descriptions, text paragraphs, articles."];

    constructor() { }
}

export class NumberFieldType implements IFieldType {
    type: string = "number";
    length: number = -1;
    icon: string = "";
    descriptions: string[] = ["Integer", "1, 2, 3, 5, 8, 13, …"];

    constructor() { }
}

export class DecimalFieldType implements IFieldType {
    type: string = "decimal";
    length: number = -1;
    icon: string = "";
    descriptions: string[] = ["Decimal", "3.14"];

    constructor() { }
}

export class FieldType implements IFieldType {
    type: string;
    length: number;
    icon: string;
    descriptions: string[];

    constructor() { }
}

export class Content implements IContent {
    id: string;
    contentModelId: string;
    contentFieldsValues: any;

    constructor() { }
}