import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div class="edit-task" *ngIf="childSelectedTask">
      <h2>Edit Task</h2>
      <div>
        <label>Enter Task Description:</label>
        <input class="form-control" [(ngModel)]="childSelectedTask.description">
      </div>
      <br>
      <div>
        <label>Select Priority</label>
        <select class="form-control" [(ngModel)]="childSelectedTask.priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div>
        <label>Enter Task ID:</label>
        <input class="form-control" [(ngModel)]="childSelectedTask.id">
        <br>
        <button class="btn btn-warning center-block" (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
