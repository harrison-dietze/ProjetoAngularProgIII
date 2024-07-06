import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../../model/user.interface';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent {
  constructor(
    private postService: PostService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  public users$: Observable<User[]> = this.userService.getAllUsers()

  public form: UntypedFormGroup = this.formBuilder.group({
    id: null,
    title: ['', Validators.required],
    body: ['', Validators.required],
    userId: [null, Validators.required],
  });

  ngOnInit(): void {}

  public createPost(): void {
    this.postService.createPost(this.form.getRawValue()).subscribe(() => this.form.reset());
  }
}
