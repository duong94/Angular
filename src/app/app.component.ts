import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1 [class.with-border]="withBorder">{{title}}</h1>
    <img [src]="imageSrc">
    `,
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Coders.Tokyo Updated';
  imageSrc = 'https://picsum.photos/id/237/200';

  textColor = 'tomato';
  backgroundColor = 'black';
  styleObj = {color: this.textColor, background: this.backgroundColor};

  withBorder = false;
}
