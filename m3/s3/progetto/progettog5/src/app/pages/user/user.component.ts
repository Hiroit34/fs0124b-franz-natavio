import { Component } from '@angular/core';
import { IUser } from '../../Modules/i-user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  allUser!: IUser[];

  constructor(private userSvc: UserService) {
    this.userSvc.$allUser.subscribe((res) => (this.allUser = res));
    console.log(this.allUser);
  }
}
