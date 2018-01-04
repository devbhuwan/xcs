import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entity, EntityQuery} from '../../shared/models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EntityService {

  constructor(private http: HttpClient) {
  }

  findAll(entityQuery: EntityQuery): Observable<Entity[]> {
    return this.http.get<Entity[]>(`/assets/api/entity/index.json`);
  }

  findOne(id: string, entityQuery: EntityQuery): Observable<Entity> {
    return this.http.get<Entity>(`/assets/api/entity/findOne.json`);
  }

}
