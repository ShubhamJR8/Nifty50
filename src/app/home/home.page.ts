import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController, private router: Router) {}

  marketStatus:string="Closed"

  goToDetail() {

    this.router.navigate(['brand-detail'])
  }
}
