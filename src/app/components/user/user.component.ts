import { Component, inject } from '@angular/core';
import { Observable, map, zip } from 'rxjs';
import { Post } from '../../model/post.interface';
import { PostService } from '../../services/post.service';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user.interface';
import { Album } from '../../model/album.interface';
import { AlbumService } from '../../services/album.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TimelineComponent } from '../timeline/timeline.component';
import { AlbumsComponent } from '../albums/albums.component';
import { ToDosComponent } from '../todos/to-dos.component';
import { ToDo } from '../../model/to-do.interface';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TimelineComponent,
    AlbumsComponent,
    ToDosComponent,
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  private activatedRoute = inject(ActivatedRoute);

  private userId?: number;

  public posts$: Observable<Post[]> = new Observable();
  public user$: Observable<User> = new Observable();
  public albums$: Observable<Album[]> = new Observable();
  public toDos$: Observable<ToDo[]> = new Observable();

  constructor(
    private userService: UserService,
    private postService: PostService,
    private albumService: AlbumService,
    private toDoService: ToDoService
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.queryParams['userId'];
    this.fetchData();
  }

  private fetchData(): void {
    this.albums$ = this.albumService.getAlbumsByUser(this.userId);
    this.user$ = this.userService.getUserById(this.userId);
    this.toDos$ = this.toDoService.getToDosByUser(this.userId);
    this.posts$ = zip(
      this.postService.getPostsByUser(this.userId),
      this.user$
    ).pipe(map(([posts, user]) => posts.map((p) => ({ ...p, user: user }))));
  }
}
