import { Component, OnInit, ViewChild, Input } from '@angular/core'; 
import { NgForm } from '@angular/forms';

import { ITask } from '../../../../../../__shared__/model/task';
import { IUser } from '../../../../../../__shared__/model/user';
import { UserService } from 'src/app/modules/users/services/user-service/user-service';
@Component({
  selector: 'task-edit-info',
  templateUrl: './task-edit-info.component.html',
  styleUrls: ['./task-edit-info.component.css']
})
export class TaskEditInfoComponent implements OnInit {

  @ViewChild(NgForm)
  taskForm: NgForm;

  @Input()
  task: ITask;

  assigneeUsers: IUser[];

  constructor( 
    private userService: UserService
  ) { }

 
  ngOnInit() {
    this.loadForm();
    this.loadUsers();
  }
   
  loadForm() {
    this.taskForm && this.taskForm.reset();
  }

  loadUsers() {
    this.userService
      .findUsers()
      .subscribe((users: IUser[]) => {
        this.assigneeUsers = users;
      })
  }
}