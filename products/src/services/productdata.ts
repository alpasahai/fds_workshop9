import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Productdata {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getlist() {
    return this.http.get<Product[]>(this.apiUrl + '/getlist');
  }

  add(product: Product) {
    return this.http.post<any>(this.apiUrl + '/add', product);
  }

  updateitem(product: any) {
    return this.http.post<any>(this.apiUrl + '/update', product);
  }

  deleteitem(productid: string) {
    return this.http.post<Product[]>(this.apiUrl + '/deleteitem', { productid: productid });
  }

  getprodcount() {
    return this.http.get<any>(this.apiUrl + '/prodcount');
  }
}
