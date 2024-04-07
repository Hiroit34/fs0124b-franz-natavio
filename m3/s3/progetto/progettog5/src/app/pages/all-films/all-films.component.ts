import { Component } from '@angular/core';
import { IFilm } from '../../Modules/i-film';
import { FilmService } from '../../service/film.service';

@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrl: './all-films.component.scss',
})
export class AllFilmsComponent {
  allFilms!: IFilm[];

  constructor(private filmSvc: FilmService) {
    this.filmSvc.$film.subscribe((res) => (this.allFilms = res));
  }

  delete(id: number) {
    this.filmSvc.delete(id).subscribe();
  }
}
