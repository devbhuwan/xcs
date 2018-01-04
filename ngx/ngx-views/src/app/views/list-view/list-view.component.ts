import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {Entity} from '../../shared/models';
import {EntityService} from '../services';
import {XcsNgxDatatableColumnComponent} from './xcs-ngx-datatable-column/xcs-ngx-datatable-column.component';
import {AbstractViewComponent} from '../abstract-view-component';

@Component({
  selector: 'xcs-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent extends AbstractViewComponent implements OnInit, AfterContentInit {

  @ContentChildren(XcsNgxDatatableColumnComponent) ngxColumns: QueryList<XcsNgxDatatableColumnComponent>;
  rows: Entity[];

  constructor(private entityService: EntityService) {
    super();
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.entityService.findAll({key: ''}).subscribe(value => this.rows = value);
  }

}
