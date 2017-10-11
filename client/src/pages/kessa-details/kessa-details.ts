import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
/**
 * Generated class for the KessaDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-kessa-details',
  templateUrl: 'kessa-details.html',
})
export class KessaDetailsPage {
  size: string;
  loading : any;


  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
  public cartService: CartProvider) {
  }


  moveToCart(){
     this.showLoader();

     let kessaDetails = {
        size: this.size
     };

    this.cartService.addToCart(kessaDetails).then((result) => {
      this.loading.dismiss();
      console.log(result);
      
     },(err) => {
        this.loading.dismiss();
     });
  }

 
  
   showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Adding to cart..'
    });
 
    this.loading.present();
 
  }
 

}
