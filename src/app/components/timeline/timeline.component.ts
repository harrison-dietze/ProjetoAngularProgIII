import { Component } from '@angular/core';
import { Observable, map, zip } from 'rxjs';
import { Post } from '../../model/post.interface';
import { PostService } from '../../services/post.service';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent, CommonModule, MatExpansionModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  public posts$: Observable<Post[]> = new Observable();

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.mergeData();
  }

  private mergeData(): void {
    this.posts$ = zip(
      this.postService.getAllPosts(),
      this.userService.getAllUsers()
    ).pipe(map(([posts, users]) => posts.map(p => ({...p, user: users.find(u => u.id == p.userId)}))));
  }
}
