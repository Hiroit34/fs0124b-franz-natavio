import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Ipost } from '../Modules/ipost';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {
    this.getAllPost().subscribe((res) => {
      this.postSubject.next(res);
    });
  }

  postUrl: string = environment.postUrl;

  postArray!: Ipost[];

  postSubject = new BehaviorSubject<Ipost[]>([]);
  $post = this.postSubject.asObservable();

  getAllPost() {
    return this.http.get<Ipost[]>(this.postUrl);
  }
}
