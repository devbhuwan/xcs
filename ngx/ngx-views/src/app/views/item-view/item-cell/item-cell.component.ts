import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'xcs-item-cell',
  templateUrl: './item-cell.component.html',
  styleUrls: ['./item-cell.component.scss']
})
export class ItemCellComponent implements OnInit {
  @Input() key: string;
  @Input() value: any;
  @Input() template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
