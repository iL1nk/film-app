import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Movie catalog';

  links = [
    { path: '/dashboard', icon: 'movie', label: 'Main page'},
    { path: '/filmList', icon: 'view_list', label: 'All movies'},
    { path: '/profile', icon: 'account_circle', label: 'Profile'}
  ];

}
