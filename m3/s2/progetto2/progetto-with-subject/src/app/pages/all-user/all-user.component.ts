import { Component } from '@angular/core';
import { iUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { iTask } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrl: './all-user.component.scss',
})
export class AllUserComponent {
  users!: iUser[];
  mapUserTasks!: Record<number, iTask[]>;

  constructor(private userSvc: UserService, private taskSvc: TaskService) {
    this.userSvc.$users.subscribe((res) => {
      this.users = res;
    });
    this.taskSvc.$task.subscribe((res) => {
      this.mapUserTasks = res.reduce<Record<number, iTask[]>>((prev, curr) => {
        if (curr.userId in prev) {
          return {
            ...prev,
            [curr.userId]: [...prev[curr.userId], curr],
          };
        }
        return {
          ...prev,
          [curr.userId]: [curr],
        };
      }, {});
    });
  }
}
