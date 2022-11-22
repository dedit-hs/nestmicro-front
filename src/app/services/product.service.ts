import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint: string = 'http://localhost:3002/api/product';

  constructor(private http: HttpClient) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  create(productData: any): Observable<Product> {
    return this.http.post<Product>(this.endpoint, productData);
  }

  get(_id: string): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${_id}`);
  }

  update(_id: string, productData: any): Observable<Product> {
    return this.http.put<Product>(`${this.endpoint}/${_id}`, productData);
  }

  delete(_id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${_id}`);
  }
}
