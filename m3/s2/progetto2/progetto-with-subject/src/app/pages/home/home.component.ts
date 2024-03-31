import { Component } from '@angular/core';
import { iTask } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { iUser } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allTask!: iTask[];

  mapUserTasks!: Record<number, iUser>;

  constructor(private userSvc: UserService, private taskSvc: TaskService) {
    this.taskSvc.$task.subscribe((res) => {
      this.allTask = res;
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
