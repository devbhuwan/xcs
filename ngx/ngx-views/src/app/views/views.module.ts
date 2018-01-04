import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateViewComponent} from './create-view/create-view.component';
import {EditViewComponent} from './edit-view/edit-view.component';
import {ListViewComponent} from './list-view/list-view.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {FormioModule} from 'angular-formio';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared';
import {TranslateModule} from '@ngx-translate/core';
import {EntityService, FormService} from './services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ViewContainerComponent} from './view-container/view-container.component';
import {WidgetViewComponent} from './widget-view/widget-view.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {XcsNgxDatatableColumnComponent} from './list-view/xcs-ngx-datatable-column/xcs-ngx-datatable-column.component';
import {ItemCellComponent} from './item-view/item-cell/item-cell.component';

const COMPONENTS = [
  CreateViewComponent,
  EditViewComponent,
  ListViewComponent,
  ItemViewComponent,
  ViewContainerComponent,
  WidgetViewComponent,
  XcsNgxDatatableColumnComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    RouterModule,
    TranslateModule,
    SharedModule,
    NgbModule.forRoot(),
    NgxDatatableModule
  ],
  declarations: [...COMPONENTS, ItemCellComponent],
  exports: [...COMPONENTS],
  providers: [EntityService, FormService]
})
export class ViewsModule {
}
