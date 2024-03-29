import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { iTask } from '../../models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  task!:iTask[]

  constructor(private taskSvc:TaskService) {}

  ngOnInit(){
    this.task = this.taskSvc.getAllTask()
  }


}
