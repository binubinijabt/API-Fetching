import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProducts } from 'src/model/myProducts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl='https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  getProductsApi():Observable<MyProducts["products"]>{
    return this.http.get(this.baseUrl)
  }

}
