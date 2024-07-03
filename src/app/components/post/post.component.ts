import { Component, Input } from '@angular/core';
import { Post } from '../../model/post.interface';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { CommentsComponent } from '../comments/comments.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    CommentsComponent,
    MatIconModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  constructor(private router: Router) {}
  
  @Input() public post?: Post;

  public detailUser(): void {
    this.router.navigate(['user'], { queryParams: {userId: this.post?.userId} });
  }
}
