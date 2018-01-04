import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../app/shared/models';

@Component({
  selector: 'xcs-pages',
  template: `
    <xcs-layout [menuItems]="menu"></xcs-layout>
  `
})
export class PagesComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private location: Location) {
  }

  ngOnInit() {
    this.menu = Observable.of([
      {
        routerLink: 'pages/entity',
        title: {
          label: 'Entity',
          icon: 'fa fa-fw fa-dasboard'
        }
      }
    ]);
  }

}
