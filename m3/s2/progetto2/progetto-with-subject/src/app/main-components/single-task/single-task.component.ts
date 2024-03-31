import { Component, Input } from '@angular/core';
import { iTask } from '../../models/task';
import { iUser } from '../../models/user';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss',
})
export class SingleTaskComponent {
  @Input() task!: iTask;
  @Input() user?: iUser;
}
