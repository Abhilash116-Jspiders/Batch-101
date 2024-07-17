import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display-products',
  standalone: true,
  imports: [],
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent {
  products: any;

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }
}
