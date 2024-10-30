import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: string[] = [];

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    this.tasks = tasks ? JSON.parse(tasks) : [];
  }

  addTask(task: string) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
