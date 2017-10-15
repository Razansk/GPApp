import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { COrdersPage } from '../c-orders/c-orders';
import { CardsPage } from '../cards/cards';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }


  Orders(){
    this.navCtrl.push(COrdersPage);
  }



  Cards(){
    this.navCtrl.push(CardsPage);
  }

}
