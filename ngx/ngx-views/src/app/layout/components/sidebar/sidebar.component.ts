import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../../shared/models';

@Component({
  selector: 'xcs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive = false;
  @Input() menuItems: Observable<MenuItem[]>;

  constructor() {
  }

  ngOnInit() {
  }
}
