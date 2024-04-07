import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilm } from '../Modules/i-film';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {
    this.getAllFilm().subscribe((res) => {
      this.filmSubject.next(res);
    });
  }

  filmsUrl: string = environment.movieUrl;

  filmArray!: IFilm[];

  filmSubject = new BehaviorSubject<IFilm[]>([]);
  $film = this.filmSubject.asObservable();

  getAllFilm() {
    return this.http.get<IFilm[]>(this.filmsUrl);
  }

  delete(id: number) {
    return this.http.delete<IFilm>(this.filmsUrl + '/' + id).pipe(
      tap(() => {
        this.filmArray = this.filmArray.filter((m) => m.id != id);
        this.filmSubject.next(this.filmArray);
      })
    );
  }
}
