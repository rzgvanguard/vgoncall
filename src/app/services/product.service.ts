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
    p1.ProductName = 'Balances and Holdings';
    p1.ProductAbrv = 'b&h';
    p1.ProductOwner = 'Theresa Young';
    p1.TechnicalOwner = 'Mike Cavallo'
    p1.TechnicalOwnerId = id;
    
    let p2 = new ProductData();
    p2.ProductName = 'Secure Overview';
    p2.ProductAbrv = 'aov';
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
