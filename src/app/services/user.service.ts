import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';
import { BaseUrl } from '../../commom/constants/base-url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient: HttpClient 

  constructor() {
    this.httpClient = inject(HttpClient)
  }

   public getAllUsers(): Observable<User[]> {
    return this.httpClient?.get<User[]>(BaseUrl.jsonPlaceholder + '/users') 
   }

   public createUser(user: User): Observable<Object> {
    return this.httpClient?.post(BaseUrl.jsonPlaceholder + '/user', user) 
   }

   public getUserById(userId?: number): Observable<User> {
    return this.httpClient?.get<User>(
      BaseUrl.jsonPlaceholder + 'user/' + userId
    );
  }

  public deleteUserById(userId?: number): Observable<Object> {
    return this.httpClient?.delete(
      BaseUrl.jsonPlaceholder + '/user/' + userId
    );
  }
   
  }
