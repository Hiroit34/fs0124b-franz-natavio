import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../../Modules/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerData: Partial<IUser> = {};

  constructor(private authSVC: AuthService, private router: Router) {}

  signUp() {
    this.authSVC
      .register(this.registerData)
      .subscribe((data) => this.router.navigate(['/auth/login']));
  }
}
