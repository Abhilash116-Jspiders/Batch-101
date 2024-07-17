import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [{id: 1, name: 'Pen'}, {id: 2, name: 'Compass'}];
  }
}
