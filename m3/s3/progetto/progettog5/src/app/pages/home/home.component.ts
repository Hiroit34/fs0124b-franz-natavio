import { Component } from '@angular/core';
import { Ipost } from '../../Modules/ipost';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allPost!: Ipost[];
  page: number = 1;
  pageSize: number = 4;
  constructor(private postSvc: PostService) {
    this.refreshCountries;
  }

  refreshCountries() {
    this.postSvc.$post.subscribe((res) => {
      this.allPost = res
        .map((country, i) => ({
          ...country,
          id: i + 1,
        }))
        .slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize
        );
    });
  }
}
