import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { iTask } from '../../models/task';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {

  taskDone!:iTask[]

  constructor(private taskSvc:TaskService){}

  ngOnInit(){
    this.taskDone = this.taskSvc.getAllCompletedTask()
  }

}
