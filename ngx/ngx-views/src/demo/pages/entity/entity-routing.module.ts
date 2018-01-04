import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {EntityCreateComponent} from './create/create.component';
import {EntityListComponent} from './list/list.component';
import {EntityViewComponent} from './view/view.component';

const routes: Routes = [
  {
    path: 'create',
    component: EntityCreateComponent
  },
  {
    path: ':id',
    component: EntityViewComponent
  },
  {
    path: '',
    component: EntityListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityRoutingModule {

}
