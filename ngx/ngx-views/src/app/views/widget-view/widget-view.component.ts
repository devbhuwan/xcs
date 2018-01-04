import {Component, Input, OnInit} from '@angular/core';
import {ViewTitleComponent} from '../../shared/components/view-title/view-title.component';

@Component({
  selector: 'xcs-widget-view',
  templateUrl: './widget-view.component.html',
  styleUrls: ['./widget-view.component.scss']
})
export class WidgetViewComponent implements OnInit {

  @Input() viewTitle: ViewTitleComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
