import { Component, Input } from '@angular/core';
import { Observable, map, zip } from 'rxjs';
import { Post } from '../../model/post.interface';
import { PostService } from '../../services/post.service';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent, CommonModule, MatExpansionModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input() public posts$?: Observable<Post[]>
  @Input() public user$?: Observable<User>

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngAfterViewInit(): void {
    this.mergeData();
  }

  private mergeData(): void {
    if(this.posts$) return 
    
    this.posts$ = zip(
      this.postService.getAllPosts(),
      this.userService.getAllUsers()
    ).pipe(map(([posts, users]) => posts.map(p => ({...p, user: users.find(u => u.id == p.userId)}))));
  }
  
}
