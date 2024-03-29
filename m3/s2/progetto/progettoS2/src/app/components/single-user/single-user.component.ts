import { TaskService } from './../../services/task.service';
import { Component, Input} from '@angular/core';
import { iUser } from '../../models/user';
import { iTask } from '../../models/task';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss'
})
export class SingleUserComponent {
  userWithTask:{user: iUser; task:iTask[]}[] = []

  constructor(private userSvc:UserService, private taskSvc:TaskService){}

  ngOnInit(){
    const users = this.userSvc.getAllUser();
    this.userWithTask = users.map((user) => ({
      user:user,
      task: this.taskSvc
      .getAllTask()
        .filter((task) => task.userId === user.id),
    }));
  }
}
