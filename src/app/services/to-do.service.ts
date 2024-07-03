import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../commom/constants/base-url';
import { ToDo } from '../model/to-do.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private httpClient: HttpClient 

  constructor() {
    this.httpClient = inject(HttpClient)
  }

  public getToDosByUser(userId?: number): Observable<ToDo[]> {
    return this.httpClient?.get<ToDo[]>(
      BaseUrl.jsonPlaceholder + 'user/' + userId + '/todos/'
    );
  }
}
