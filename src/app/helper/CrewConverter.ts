import { CrewData } from '../entities/CrewData';
import { CrewListData } from '../entities/CrewListData';

export class CrewConverter {
    convertCrewListDataToCrew(crewListData: CrewListData[]): CrewData[] {
        let crewDataArray = new Array<CrewData>();

        crewListData.forEach(d => { 
            let crew = new CrewData();
            crew.CrewId = d.CrewId;
            crew.FirstName = d.FirstName;
            crew.LastName = d.LastName;
            crewDataArray.push(crew);
        });
        
        return crewDataArray;
    }
}