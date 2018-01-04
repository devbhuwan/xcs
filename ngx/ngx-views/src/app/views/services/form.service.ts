import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) {
  }

  loadForm(formPath: string): Observable<any> {
    return this.http.get(`/assets/forms/${formPath}`);
  }
}
