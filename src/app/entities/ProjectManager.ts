import { BaseCrew } from './BaseCrew';
import { Manager } from './Manager';

export class ProjectManager implements BaseCrew {
    Manager: Manager;
    CrewId: String;
    CrewEmail: String;
    CrewPhoneNumber: String;
    CrewExtension: String;
    FirstName: String;
    LastName: String;
    OnCallDays: Array<Number>;
}
