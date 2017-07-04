import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    filmName: string;
    @Output()
    getFilms = new EventEmitter<string>();

    constructor() {}

    getNewFilms(filmName: string) : void {
        this.getFilms.emit(this.filmName);
    }

}