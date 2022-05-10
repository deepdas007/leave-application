import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'leave-application';
  //items: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    // this.items = [
    //   {
    //     label: 'Show Leaves',
    //     routerLink: '/',
    //   },
    //   {
    //     label: 'Add Leave Application',
    //     routerLink: '/add-leave',
    //   },
    // ];
  }
}
