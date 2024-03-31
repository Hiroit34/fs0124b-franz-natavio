import { Component, Input } from '@angular/core';
import { iUser } from '../../models/user';
import { iTask } from '../../models/task';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss',
})
export class SingleUserComponent {
  @Input() user!: iUser;
  @Input() tasks!: iTask[];
}
