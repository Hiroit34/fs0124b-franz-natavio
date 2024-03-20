import { Component } from '@angular/core';
import { iPost } from './models/interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  postArr:iPost[] = []
  postRandom: iPost[] = []

  ngOnInit() {
    fetch('../assets/db.json')
    .then(posts => posts.json())
    .then((post) => this.postArr = post.posts)
  }

  randomIndex() {
    let randomNumber: number = Math.floor(Math.random() * 31)
    return randomNumber
  }

  

  }
