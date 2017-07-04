import { Component, OnInit } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  moduleId: module.id,
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList : any[] = [];
  filmName : string;
  pageNumber: string;
  viewRequired: number;
  rowHeightRequired: string;
  constructor(private filmListService: FilmService) { }

  ngOnInit() {
    this.filmName = "Brothers";
    this.pageNumber = "1";
    this.viewRequired = 1;
    this.rowHeightRequired = "900px";
    this.selectView(this.viewRequired);
    this.getFilms(this.filmName);
  }

  private getFilms(filmName: string): void {
    if (filmName) {
      this.filmListService.getFilms(filmName, this.pageNumber)
        .subscribe(
          (films: any[]) => {
            if (films && films.length) {
              this.filmList = this.filmList.concat(films);
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  getNewFilms(filmName: string): void {
    this.filmName = filmName;
    this.pageNumber = "1";
    this.filmList = [];
    this.getFilms(this.filmName);
  }

  addFilms(filmName: string): void {
    if (this.filmName === filmName) {
      this.getFilms(this.filmName);
    } else {
      this.getNewFilms(filmName);
    }
  }

  addMoreFilms(): void {
    this.pageNumber = String(parseInt(this.pageNumber) + 1);
    this.getFilms(this.filmName);
  }

  selectView(viewType: number): void {
    this.viewRequired = viewType;
    this.setRowHeight(viewType);
  }

  setRowHeight(viewType: number): void {
    viewType === 1 ? this.rowHeightRequired = "900px" : this.rowHeightRequired = "450px";
  }
}
