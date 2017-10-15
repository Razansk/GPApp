import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Http, Headers } from "@angular/http";
import { TabsPage } from '../tabs/tabs';
import {BoutiqueInfoPage} from '../boutique-info/boutique-info'



@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: any;
    loading: any;
    router: any;

   constructor(public navCtrl: NavController,
    public authService: AuthProvider, 
    public loadingCtrl: LoadingController) {}

registerDesigner(){
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
      this.navCtrl.setRoot(BoutiqueInfoPage);
              
      console.log(result);
    },
       (err) => {
        this.loading.dismiss();
    });

    

  }
  
registerCustomer(){
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
      this.navCtrl.setRoot(TabsPage);
  
      console.log(result);
    },
       (err) => {
        this.loading.dismiss();
    });

    

  }
  
 
    
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Registering...'
    });
 
    this.loading.present();
 
  }

}
