import { Component, Input } from '@angular/core';
import { Post } from '../../model/post.interface';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule, MatDividerModule, CommentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() public post?: Post;
}
