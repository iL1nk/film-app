import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmId: string; 
  @Input()
  viewType: number;
  filmItem: any[] = [];
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    if(this.filmId) {
      this.filmCardService.getFilmById(this.filmId)
        .subscribe(
          (filmItem: any[]) => {
            if (filmItem) {
              this.filmItem = filmItem;
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

}

