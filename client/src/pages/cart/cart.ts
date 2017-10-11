import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.payments = [];

  }


  placeOrder(){
    // if user choose cash on delivery >
        // this.navCtrl.push(TabsPage);
    // if user choose onlie payment 
       this.navCtrl.push(PaymentPage);
  }

}