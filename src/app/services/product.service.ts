import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProductData(): Observable<any> {
    return this.http.get('http://localhost:8080/product/get');
  }

  public addProduct(product: Object): Observable<any> {
    console.log(product);
    return this.http.post('http://localhost:8080/product/add', product);
  }
}
