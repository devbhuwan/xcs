import {AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'xcs-ngx-datatable-column',
  templateUrl: './xcs-ngx-datatable-column.component.html',
  styleUrls: ['./xcs-ngx-datatable-column.component.scss']
})
export class XcsNgxDatatableColumnComponent implements OnInit, AfterContentInit {

  @Input() name: string;
  @ContentChild(TemplateRef) cellTemplate: TemplateRef<any>;
  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
  }
}
