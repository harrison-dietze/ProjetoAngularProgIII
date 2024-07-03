import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../commom/constants/base-url';
import { Photo } from '../model/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private httpClient: HttpClient 

  constructor() {
    this.httpClient = inject(HttpClient)
  }

  public getPhotosByAlbum(albumId?: number): Observable<Photo[]> {
    return this.httpClient?.get<Photo[]>(
      BaseUrl.jsonPlaceholder + 'album/' + albumId + '/photos/'
    );
  }
}
