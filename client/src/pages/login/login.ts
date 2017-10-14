import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';
import { SignUpPage } from '../sign-up/sign-up';
import { BoutiqueInfoPage } from '../boutique-info/boutique-info'; //Designer app



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    email: string;
    password: string;
    loading: any;

  
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public loadingCtrl: LoadingController,
   public authService: AuthProvider) {
  }


    ionViewDidLoad() {
 
        this.showLoader();
 
        // Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            console.log("Not already authorized");
            this.loading.dismiss();
        });
 
    }
 
    login(){
 
        this.showLoader();
 
        let credentials = {
            email: this.email,
            password: this.password
        };
 
        this.authService.login(credentials).then((result) => {
            this.loading.dismiss();
            console.log(result);
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });

        //  this.navCtrl.setRoot(BoutiqueInfoPage);
 
    }
 
    launchSignup(){
        this.navCtrl.push(SignUpPage);
    }
 
    showLoader(){
 
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
 
        this.loading.present();
 
    }
 
}
