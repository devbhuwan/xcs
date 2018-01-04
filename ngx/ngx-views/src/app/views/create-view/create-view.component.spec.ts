import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateViewComponent} from './create-view.component';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {FormioModule} from 'angular-formio';
import {FormioHelper} from '../../shared/utils';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormService} from '../services';

let fixture: ComponentFixture<CreateViewComponent>;
let component: CreateViewComponent;

describe('CreateViewComponent', () => {
  beforeEach(async(setupTest));

  it('should created', () => {
    expect(component).toBeTruthy();
  });
  it('given formInJson then should rendered the form', async(() => {
    component.createFormJson = JSON.parse('{"_id":"5a4d101688c5ed0008eb6f7d","machineName":"form1","modified":"2018-01-03T17:17:10.449Z","display":"form","title":"FORM1","name":"form1","path":"form1","created":"2018-01-03T17:17:10.401Z","components":[{"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"name","key":"name","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","hideLabel":false,"labelPosition":"top","tags":[],"properties":{"":""}},{"input":true,"label":"Submit","tableView":false,"key":"submit","size":"md","leftIcon":"","rightIcon":"","block":false,"action":"submit","disableOnInvalid":false,"theme":"primary","type":"button","hideLabel":false}],"owner":"5a4d0fdc88c5ed0008eb6f7c","submissionAccess":[{"type":"create_own","roles":["5a4d0fdb88c5ed0008eb6f6f"]},{"type":"read_own","roles":["5a4d0fdb88c5ed0008eb6f6f"]},{"type":"update_own","roles":["5a4d0fdb88c5ed0008eb6f6f"]},{"type":"delete_own","roles":["5a4d0fdb88c5ed0008eb6f6f"]}],"access":[{"type":"read_all","roles":["5a4d0fdb88c5ed0008eb6f6e","5a4d0fdb88c5ed0008eb6f6f","5a4d0fdb88c5ed0008eb6f70"]}],"tags":["common"],"type":"form"}');
    fixture.detectChanges();
    fixture.whenStable().then(value => {
      const input = fixture.debugElement.nativeElement.querySelector('input[name="data[name]"]');
      expect(input.name).toBe('data[name]');
    });
  }));

});

function setupTest() {
  return TestBed.configureTestingModule({
    imports: [
      FormioModule,
      HttpClientTestingModule,
      TranslateModule.forRoot({
        loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}
      })
    ],
    declarations: [CreateViewComponent],
    providers: [FormService, FormioHelper.localTypeFormioConfigProvider()],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
  })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CreateViewComponent);
      component = fixture.componentInstance;
    });
}
