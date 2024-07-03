import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../commom/constants/base-url';
import { Album } from '../model/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private httpClient: HttpClient 

  constructor() {
    this.httpClient = inject(HttpClient)
  }

  public getAlbumsByUser(userId?: number): Observable<Album[]> {
    return this.httpClient?.get<Album[]>(
      BaseUrl.jsonPlaceholder + 'user/' + userId + '/albums/'
    );
  }
}
