import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyProducts } from 'src/model/myProducts';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
 
  getProducts:any;


 constructor (private api: ApiService) {}
 
  ngOnInit(): void {
    this.getProductApi();
  }

getProductApi(){
  this.api.getProductsApi().subscribe((data:any)=>{
    console.log(data);
    this.getProducts = data;
    
  });
}

}
