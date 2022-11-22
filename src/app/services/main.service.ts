import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  endpoint: string = 'http://localhost:3003/api/product';

  constructor(private http: HttpClient) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  like(_id: string): Observable<Product> {
    return this.http.post<Product>(`${this.endpoint}/${_id}/like`, {});
  }
}
