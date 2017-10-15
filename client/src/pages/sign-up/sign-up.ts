import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Http, Headers } from "@angular/http";
import { DTabsPage } from '../d-tabs/d-tabs';
import { TabsPage } from '../tabs/tabs';


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
      if(this.role === 1)
            this.navCtrl.setRoot(TabsPage);
      else{
            this.navCtrl.setRoot(DTabsPage);
              }
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
