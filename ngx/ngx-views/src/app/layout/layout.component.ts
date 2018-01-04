import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../shared/models';

@Component({
  selector: 'xcs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() menuItems: Observable<MenuItem[]>;

  constructor() {
  }

  ngOnInit() {
  }
}
