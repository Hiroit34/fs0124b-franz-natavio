import { Component, Input } from '@angular/core';
import { iTask } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss'
})
export class SingleTaskComponent {

  @Input() task!:iTask

  constructor(private taskSvc: TaskService){}

  onChangeTask(id: number){
    this.taskSvc.toggle(id)
  }

}
