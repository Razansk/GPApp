import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class ProductsProvider {
 data: any;
  constructor(public http: Http) {
 
  }
 
  getProducts(){
 
    return new Promise((resolve, reject) => {
      let productsArray = [JSON];
      this.http.get('https://kessa.herokuapp.com/api/products')
        .map(res => res.json())  
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }
 
}