import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KessaDetailsPage } from '../kessa-details/kessa-details';
import {ProductsProvider} from '../../providers/products/products'
import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-new-arrivals',
  templateUrl: 'new-arrivals.html'
})
export class NewArrivalsPage {
    products:any;
  constructor(public navCtrl: NavController,public productService: ProductsProvider) {

  }

 ionViewDidLoad(){
    this.navCtrl.setRoot(NewArrivalsPage);

    };
 
  

  addToCart(){
    
    this.navCtrl.setRoot(CartPage);

  }

}

