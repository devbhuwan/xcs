import {TestBed} from '@angular/core/testing';

import {FormService} from './form.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Injector} from '@angular/core';

describe('FormService', () => {
  let formService: FormService;
  let injector: Injector;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports:
        [HttpClientTestingModule],
      providers:
        [FormService]
    });
    formService = injector.get(FormService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should fetch form in json from /assets/forms by appending formPath parameter', () => {
    const form: any = {title: 'Hello'};
    let formResponse: any = {};
    formService.loadForm(`entryForm.json`).subscribe(value => formResponse = value);
    httpMock.expectOne({url: '/assets/forms/entryForm.json', method: 'GET'}).flush(form);
    expect(formResponse).toBe(form);
  });


});
