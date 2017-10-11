import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
 
@Injectable()
export class CartProvider  {
 
  public token: any;
  
  constructor(public http: Http, public storage: Storage) {
 
  }

   addToCart(kessaDetails){

    return new Promise((resolve, reject) => {


        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('https://kessa.herokuapp.com/api/auth/register', JSON.stringify(kessaDetails), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    })
   };
}