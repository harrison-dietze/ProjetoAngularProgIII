import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { Comment } from '../../model/comment.interface';
import { Observable } from 'rxjs';
import { CommentService } from '../../services/comment.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../model/post.interface';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    CommonModule,
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  constructor(private commentsService: CommentService) {}

  public comments$: Observable<Comment[]> = new Observable();

  @Input() post?: Post;

  public buscarComentarios(): void {
    this.comments$ = this.commentsService.getCommentByPost(this.post?.id);
  }
}
