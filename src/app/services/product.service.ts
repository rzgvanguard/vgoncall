import { Injectable } from '@angular/core';
import { ProductData } from '../entities/ProductData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(httpClient: HttpClient) { }

  getProductsByManagerId(id: String): ProductData[] {
    let p1 = new ProductData();
    p1.ProductName = 'Agent Permissions';
    p1.ProductAbrv = 'ap';
    p1.ProductOwner = 'Theresa Young';
    p1.TechnicalOwner = 'Mike Cavallo'
    p1.TechnicalOwnerId = id;
    
    let p2 = new ProductData();
    p2.ProductName = 'Notification of Death';
    p2.ProductAbrv = 'NOD';
    p2.ProductOwner = 'Theresa Young';
    p2.TechnicalOwner = 'Mike Cavallo'
    p2.TechnicalOwnerId = id;

    let p3 = new ProductData();
    p3.ProductName = 'Mail Preferences';
    p3.ProductAbrv = 'mp';
    p3.ProductOwner = 'Theresa Young';
    p3.TechnicalOwner = 'Mike Cavallo'
    p3.TechnicalOwnerId = id;

    let p4 = new ProductData();
    p4.ProductName = 'Portfolio Watch';
    p4.ProductAbrv = 'pw';
    p4.ProductOwner = 'Theresa Young';
    p4.TechnicalOwner = 'Mike Cavallo'
    p4.TechnicalOwnerId = id;

    let data = new Array<ProductData>();

    data.push(p1, p2, p3, p4);

    return data;
  }
}
