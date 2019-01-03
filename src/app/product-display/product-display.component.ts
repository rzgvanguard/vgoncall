import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductData } from '../entities/ProductData';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  constructor(private productService: ProductService) { }
  public productList: Array<ProductData>;
  ngOnInit() {
    this.productList = this.productService.getProductsByManagerId('12345');
  }

}
