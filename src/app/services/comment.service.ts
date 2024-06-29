import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../commom/constants/base-url';
import { Comment } from '../model/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private httpClient: HttpClient 

  constructor() {
    this.httpClient = inject(HttpClient)
  }

   public getCommentByPost(postID?: number): Observable<Comment[]> {

    return this.httpClient?.get<Comment[]>(BaseUrl.jsonPlaceholder + 'posts/' + postID  + '/comments')
   }
}
