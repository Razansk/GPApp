import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {NewArrivalsPage} from '../new-arrivals/new-arrivals';



@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    loading: any;
 
   constructor(public navCtrl: NavController,
    public authService: AuthProvider, 
    public loadingCtrl: LoadingController) {
   }

register(){
    this.showLoader();
 
    let details = {
      
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        role: this.role
    };
 
    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(NewArrivalsPage);
    }, (err) => {
        this.loading.dismiss();
    });


    // this.navCtrl.setRoot(TabsPage);
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Registering...'
    });
 
    this.loading.present();
 
  }

}
