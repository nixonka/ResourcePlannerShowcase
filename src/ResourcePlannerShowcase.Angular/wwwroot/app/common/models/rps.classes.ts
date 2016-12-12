import { IEmployee, IMonthlyUtilization } from './rps.interfaces';
import { ContentModelStatus } from './Enums'

export class Projects {

}

export class Team {
    id: string;
    name: string;
    //employees: IEmployee[];
    constructor() {
        //this.employees = [];
    }
}

export class Employee implements IEmployee {
    id: string;
    name: string;
    monthlyUtilization: MonthlyUtilization[];
    projectActivities: ProjectActivities[];
    employeeAvailabilities: EmployeeAvailabilities[];

    constructor() {
        this.monthlyUtilization = [];
    }
}

export class MonthlyUtilization implements IMonthlyUtilization {
    month: number;
    utilization: number;
}

export class ProjectActivities {
    week: number;
    work: number;
}

export class EmployeeAvailabilities {
    week: number;
    available: number;
} 

