import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { iTask } from '../../models/task';

@Component({
  selector: 'app-remaining',
  templateUrl: './remaining.component.html',
  styleUrl: './remaining.component.scss'
})
export class RemainingComponent {

  remainingTask!:iTask[]

  constructor(private taskSvc:TaskService){}

  ngOnInit(){
    this.remainingTask = this.taskSvc.getAllRemainingTask()
  }

}
