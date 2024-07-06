import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post.interface';
import { BaseUrl } from '../../commom/constants/base-url';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = inject(HttpClient);
  }

  public getAllPosts(): Observable<Post[]> {
    return this.httpClient?.get<Post[]>(BaseUrl.jsonPlaceholder + '/posts');
  }

  public getPostsByUser(userId?: number): Observable<Post[]> {
    return this.httpClient?.get<Post[]>(
      BaseUrl.jsonPlaceholder + 'user/' + userId + '/posts/'
    );
  }

  public createPost(post: Post): Observable<Object> {
    return this.httpClient?.post(BaseUrl.jsonPlaceholder + '/post', post) 
   }

   public deletePostById(postId?: number): Observable<Object> {
    return this.httpClient?.delete(
      BaseUrl.jsonPlaceholder + '/post/' + postId
    );
  }
}
