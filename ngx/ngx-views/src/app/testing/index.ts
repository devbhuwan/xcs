import {FormioHelper} from '../shared/utils/index';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormService} from '../views/services/index';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormioModule} from 'angular-formio';

@NgModule({
  imports: [
    FormioModule,
    HttpClientTestingModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}
    })
  ],
})
export class FormIoBasedViewsTestingModule {
}

export function formIoProvidersForTest() {
  return [FormService, FormioHelper.localTypeFormioConfigProvider()];
}

export function schemasForTest() {
  return [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA];
}



