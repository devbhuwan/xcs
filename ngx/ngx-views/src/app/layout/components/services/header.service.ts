import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HeaderService {

  constructor(private http: HttpClient) {
  }

}
