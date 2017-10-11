import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DTabsPage } from '../d-tabs/d-tabs';

/**
 * Generated class for the BoutiqueInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-boutique-info',
  templateUrl: 'boutique-info.html',
})
export class BoutiqueInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoutiqueInfoPage');
  }


  RejesterBoutiqe(){
      this.navCtrl.push(DTabsPage);


    }

}
