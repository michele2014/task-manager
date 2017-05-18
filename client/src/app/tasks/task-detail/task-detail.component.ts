import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../../models/models';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  pageTitle: string = 'Task Detail';
  task: Task = new Task();

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.task = this.route.snapshot.data['task'];
    if (!this.task._id) {
      this.pageTitle = 'Add Task';
    } else {
      this.pageTitle = `Edit Task: ${this.task.title}`;
    }
  }
}