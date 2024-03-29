import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { iUser } from '../../models/user';
import { iTask } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrl: './all-user.component.scss'
})
export class AllUserComponent {

  allUser!: iUser[]

  allTask!: iTask[]

  constructor(private userSvc:UserService, private taskSvc:TaskService){}

  ngOnInit(){
    this.allUser = this.userSvc.getAllUser()
    this.allTask = this.taskSvc.getAllTask()
  }

}
