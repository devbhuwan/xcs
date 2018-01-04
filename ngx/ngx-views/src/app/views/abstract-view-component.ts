import {ContentChild} from '@angular/core';
import {ViewTitleComponent} from '../shared/components/view-title/view-title.component';
import {MenuItem} from '../shared/models';

export abstract class AbstractViewComponent {
  @ContentChild(ViewTitleComponent) viewTitle: ViewTitleComponent;
  activeMenuItem: MenuItem;
}
