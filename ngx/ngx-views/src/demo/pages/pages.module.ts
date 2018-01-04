import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {LayoutModule} from '../../app';
import {TranslateModule} from '@ngx-translate/core';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    TranslateModule,
    PagesRoutingModule,
    LayoutModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ],
})
export class PagesModule {
}
