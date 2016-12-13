import { IEmployee, IMonthlyUtilization } from './rps.interfaces';
import { ContentModelStatus } from './Enums'

export class Projects {
    id: string;
    prjectName: string;

    constructor() {

    }
}

export class Team {
    id: string;
    name: string;

    constructor() {

    }
}

export class Employee implements IEmployee {
    id: string;
    name: string;
    monthlyUtilization: MonthlyUtilization[];
    projectActivities: ProjectActivities[];
    employeeAvailabilities: EmployeeAvailabilities[];
    teams: Team[];
    projects: Projects[];

    constructor() {
        this.monthlyUtilization = [];
    }
}

export class MonthlyUtilization implements IMonthlyUtilization {
    month: number;
    utilization: number;
}

export class ProjectActivities {
    projectId: string;
    employeeId: string;
    week: number;
    work: number;
}

export class EmployeeAvailabilities {
    week: number;
    available: number;
} 

