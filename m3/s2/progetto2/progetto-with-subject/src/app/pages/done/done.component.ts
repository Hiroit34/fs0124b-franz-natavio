import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { iTask } from '../../models/task';
import { iUser } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss',
})
export class DoneComponent {
  tasks!: iTask[];

  mapUserTasks!: Record<number, iUser>;

  constructor(private userSvc: UserService, private taskSvc: TaskService) {
    this.taskSvc.$task.subscribe((res) => {
      this.tasks = res.filter((t) => t.completed);
    });
    this.userSvc.$users.subscribe((res) => {
      this.mapUserTasks = res.reduce<Record<number, iUser>>((prev, curr) => {
        return {
          ...prev,
          [curr.id]: curr,
        };
      }, {});
    });
  }
}
