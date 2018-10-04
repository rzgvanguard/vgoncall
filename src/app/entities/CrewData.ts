import { ProjectManager } from './ProjectManager';
import { BaseCrew } from './BaseCrew';
import { Manager } from './Manager';

export class CrewData extends BaseCrew {
    CrewPM: ProjectManager;
    CrewManager: Manager;
}
