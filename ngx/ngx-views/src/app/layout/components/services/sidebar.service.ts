import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../../shared/models';

@Injectable()
export class SidebarService {

  constructor(private http: HttpClient) {
  }

  findAllMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`/assets/api/layout/menu-item.json`);
  }
}
