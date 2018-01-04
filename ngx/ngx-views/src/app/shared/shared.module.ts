import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {RouterModule} from '@angular/router';
import {ViewTitleComponent} from './components/view-title/view-title.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PageHeaderComponent, ViewTitleComponent],
  exports: [PageHeaderComponent, ViewTitleComponent]
})
export class SharedModule {
}
