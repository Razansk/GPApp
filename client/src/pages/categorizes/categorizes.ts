import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewArrivalsPage} from '../new-arrivals/new-arrivals'
@Component({
  selector: 'page-categorizes',
  templateUrl: 'categorizes.html'
})

export class CategorizesPage {

  constructor(public navCtrl: NavController) {

  }

  getProducts(){
     this.navCtrl.push(NewArrivalsPage);

  }
  
}
