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
    return this.httpClient?.get<User[]>(BaseUrl.jsonPlaceholder + '/Users') 
   }

   public getUserById(userId?: number): Observable<User> {
    return this.httpClient?.get<User>(
      BaseUrl.jsonPlaceholder + 'users/' + userId
    );
  }
   
  }
