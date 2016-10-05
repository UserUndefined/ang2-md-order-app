import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css',
    //'../../node_modules/@angular/material/core/theming/prebuilt/pink-bluegrey.css'
    //'../../node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.css'
    //'../../node_modules/@angular/material/core/theming/prebuilt/purple-green.css'
    './app.style.css'
  ],
  templateUrl: './app.component.html'
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  isDarkTheme: boolean = false;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor(
    public appState: AppState) {
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
