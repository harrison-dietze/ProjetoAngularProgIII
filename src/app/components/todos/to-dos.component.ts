import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../model/to-do.interface';
import { ToDoService } from '../../services/to-do.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-to-dos',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    CommonModule,
  ],
  templateUrl: './to-dos.component.html',
  styleUrl: './to-dos.component.scss',
})
export class ToDosComponent {
  @Input() public toDos$?: Observable<ToDo[]>;
  @Input() public userId?: number;

  constructor(private toDoService: ToDoService) {}

  ngAfterViewInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    if (!this.toDos$)
      this.toDos$ = this.toDoService.getToDosByUser(this.userId);
  }
}
