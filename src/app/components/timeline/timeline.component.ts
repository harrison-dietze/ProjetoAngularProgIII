import { Component, Input } from '@angular/core';
import { Observable, map, of, tap, zip } from 'rxjs';
import { Post } from '../../model/post.interface';
import { PostService } from '../../services/post.service';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent, CommonModule, MatExpansionModule, MatButtonModule, MatIconModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input() public posts$?: Observable<Post[]>;
  @Input() public user$?: Observable<User>;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mergeData(); // gambiarra clássica pra detectar changes
    }, 0);
  }

  private mergeData(): void {
    if (this.posts$) return;

    this.posts$ = zip(
      this.postService.getAllPosts(),
      this.userService.getAllUsers()
    ).pipe(map(([posts, users]) => posts.map(p => ({...p}))));
  }

  public addUser(): void {
    this.router.navigate(['user-form'] );
  }

  public addPost(): void {
    this.router.navigate(['post-form'] );
  }
}
