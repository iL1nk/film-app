import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class FilmService {
  private searchUrl: string = "http://www.omdbapi.com/";
  private apiKey: string = "520bbe17";
  constructor(private http: Http) { }

  // private filmUrl: string = "http://www.omdbapi.com/?i=";
  // private apikey: string = "&apikey=520bbe17";
  // apiKey: string = '2a3fe283'

  private extractListData(res: Response): Array<any> {
    let body = res.json();
    return body.Search || {};
  }

  private extractItemData(res: Response): Array<any> {
    let body = res.json();
    return body || {};
  }

  getFilms (filmName: string, pageNumber: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('apikey', this.apiKey);
    params.set('page', pageNumber || '1');
    params.set('s', filmName);
    return this.http.get(this.searchUrl, {search: params}).map(this.extractListData)
      .catch((error: any)=> {return Observable.throw(error);});
  }

  getFilmById (filmId: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('i', filmId);
    params.set('apikey', this.apiKey);
    return this.http.get(this.searchUrl, {search: params}).map(this.extractItemData)
      .catch((error: any) => {return Observable.throw(error);});
  }

   // return this.http.get(this.searchUrl + filmName + this.apikey).map(this.extractListData);  
   // return this.http.get(this.filmUrl + filmId + this.apikey).map(this.extractItemData);
}
