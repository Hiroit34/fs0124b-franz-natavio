import { Component } from '@angular/core';
import { iTask } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { iUser } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrl: './undone.component.scss',
})
export class UndoneComponent {
  tasks!: iTask[];

  mapUserTasks!: Record<number, iUser>;

  constructor(private userSvc: UserService, private taskSvc: TaskService) {
    this.taskSvc.$task.subscribe((res) => {
      this.tasks = res.filter((t) => !t.completed);
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
