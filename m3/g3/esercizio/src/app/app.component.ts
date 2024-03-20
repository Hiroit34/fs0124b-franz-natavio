import { Component, OnInit } from '@angular/core';
import { iPost } from './models/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  posts: iPost{ } = {}

  ngOnInit() {
    fetch("../assets/db.json")
    .then(reponse => reponse.json())
    .then((post: iPost[]) => this.posts = post)
  }
}
