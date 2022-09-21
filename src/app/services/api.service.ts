import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'models/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL + '/products');
  }

  addProduct(productDetails: Product) {
    return this.http.post<Product>(this.baseURL + '/products', productDetails, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
