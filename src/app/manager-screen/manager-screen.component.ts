import { Component, OnInit } from '@angular/core';
import { CrewApiService } from '../services/crew-api.service';
import { CrewData } from '../entities/CrewData';
import { Manager } from '../entities/Manager';
import { ProductData } from '../entities/ProductData';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})
export class ManagerScreenComponent implements OnInit {

  private crewMembers: Array<CrewData>;
  private manager: Manager;
  constructor(private crewService: CrewApiService, private productService: ProductService) { }

  ngOnInit() {
    this.manager = new Manager();
    this.manager.CrewId = '294023';
    this.manager.FirstName = 'Mike';
    this.manager.LastName = 'Cavallo';
    this.manager.CrewPhoneNumber = '6106677463'
    this.manager.ProductList = new Array<ProductData>();

    this.manager.ProductList = this.productService.getProductsByManagerId(this.manager.CrewId);

    this.crewMembers = this.crewService.getCrewByManager(this.manager.CrewId);
    this.crewMembers.forEach(c => {
      console.log(c.CrewPhoneNumber);
    });
  }

  redirectToCrewProfile() {

  }
}
