import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.page.html',
  styleUrls: ['./brand-detail.page.scss'],
})
export class BrandDetailPage implements OnInit {    

  constructor(private nav: NavController) { }

  back() {
    this.nav.navigateBack('/home');
  }

  currPrice:number=14823.15

  public show:boolean = false;

  onclick(){
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'IV Graph',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);

    this.show = true;

  }

  ngOnInit() {
  }

}




