import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskName: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.taskName.trim()) {
      this.taskAdded.emit(this.taskName);
      this.taskName = '';
    }
  }
}
