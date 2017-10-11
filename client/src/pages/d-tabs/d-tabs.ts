import { Component } from '@angular/core';


import { CollectionPage } from '../collection/collection';;
import { DOrdersPage } from '../d-orders/d-orders';
import { NewItemPage } from '../new-item/new-item';



import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'd-tabs.html',
})
export class DTabsPage {
  

  tab1Root = CollectionPage;
  tab2Root = DOrdersPage;
  tab3Root = NewItemPage;
  tab4Root = NewItemPage;

  constructor() {
    
  }
}
