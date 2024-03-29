import { Component, Input } from '@angular/core';
import { iTask } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { iUser } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss'
})
export class SingleTaskComponent {

  @Input() task!:iTask

  user!: iUser[]

  constructor(private taskSvc: TaskService, private userSvc:UserService){}

  onChangeTask(id: number){
    this.taskSvc.toggle(id)
    this.user = this.userSvc.getAllUser().filter(u => u.firstName)
  }

}
