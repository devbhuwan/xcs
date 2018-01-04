import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'xcs-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() heading: string;
  @Input() icon: string;

  constructor(private location: Location) {
  }

  ngOnInit() {
  }
}
