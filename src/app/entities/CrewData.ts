import { BaseCrew } from './BaseCrew';

export class CrewData implements BaseCrew {
    CrewPMId: String;
    CrewManagerId: String;
    CrewId: String;
    CrewEmail: String;
    CrewPhoneNumber: String;
    CrewExtension: String;
    FirstName: String;
    LastName: String;
    OnCallDays: Array<Number>;
}
