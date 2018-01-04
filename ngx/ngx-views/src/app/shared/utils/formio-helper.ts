import {FormioAppConfig} from 'angular-formio';
import {Provider} from '@angular/core';

export class FormioHelper {

  static extractOnlyPayload(submission: any): any {
    delete submission.data.submit;
    return submission.data;
  }

  static localTypeFormioConfigProvider(): Provider {
    return {
      provide: FormioAppConfig, useValue: {
        appUrl: 'http://localhost:4200',
        apiUrl: 'http://localhost:4200',
        formOnly: false
      }
    };
  }
}

export class FormioRefreshType {
  public static SUBMISSION = 'submission';
  public static FORM = 'form';
}
