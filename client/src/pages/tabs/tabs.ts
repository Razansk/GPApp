import { Component } from '@angular/core';

import { NewArrivalsPage } from '../new-arrivals/new-arrivals';
import { ProfilePage } from '../profile/profile';
import { CategorizesPage } from '../categorizes/categorizes';
import { CartPage } from '../cart/cart';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CategorizesPage;
  tab2Root = NewArrivalsPage;
  tab3Root = CartPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
