import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IUser } from '../Modules/i-user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    this.getAllUsers().subscribe((res) => {
      this.userSubject.next(res);
    });
  }

  userUrl: string = environment.userUrl;

  userArray!: IUser[];

  userSubject = new BehaviorSubject<IUser[]>([]);
  $allUser = this.userSubject.asObservable();

  getAllUsers() {
    return this.http.get<IUser[]>(this.userUrl);
  }
}
