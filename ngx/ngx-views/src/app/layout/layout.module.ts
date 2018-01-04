import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {SidebarService} from './components/services/sidebar.service';
import {HeaderService} from './components/services/header.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
  exports: [LayoutComponent],
  providers: [SidebarService, HeaderService]
})
export class LayoutModule {
}
