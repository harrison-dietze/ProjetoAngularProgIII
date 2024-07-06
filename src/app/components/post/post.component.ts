import { Component, Input } from '@angular/core';
import { Post } from '../../model/post.interface';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { CommentsComponent } from '../comments/comments.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    CommentsComponent,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  constructor(private router: Router, private userService: UserService, private postService: PostService) {}
  
  @Input() public post?: Post;

  public detailUser(): void {
    // this.router.navigate(['user'], { queryParams: {userId: this.post?.userId} });
  }

  public deleteUser(): void {
    this.userService.deleteUserById(this.post?.user?.id).subscribe()
    setTimeout(() => window.location.href='/', 100)
  }

  public deletePost(): void {
    this.postService.deletePostById(this.post?.id).subscribe()
    setTimeout(() => this.router.navigate(['/']), 100)
  }
}
