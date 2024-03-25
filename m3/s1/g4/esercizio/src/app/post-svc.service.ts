import { iPost } from './models/interface';
import { Injectable } from '@angular/core';
import { iRoot } from './models/interface2';

@Injectable({
  providedIn: 'root'
})
export class PostSvcService {

  getAllPost():Promise<iPost[]>{
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((post: iRoot) => post.posts)
  }

  getActivePost():Promise<iPost[]>{

    return this.getAllPost()
    .then(res => res.filter(p => p.active))
  }

  getInactivePost() {

    return this.getAllPost()
    .then(res => res.filter(p => !p.active))
  }

}
