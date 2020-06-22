import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1 
      [class.with-border]="withBorder"
      [style.color]="textColor"
      (mouseover)="onTextMouseOver()"
      (mouseout)="onTextMouseOut()"
    >
      {{title}}
    </h1>
    <button (click) = "onButtonClick($event)">{{withBorder ? 'Hide' : 'Show'}} Border</button>
    `,
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Coders.Tokyo Updated';
  imageSrc = 'https://picsum.photos/id/237/200';

  textColor = 'tomato';
  withBorder = true;

  onButtonClick(){
    this.withBorder = !this.withBorder;
  }

  onTextMouseOver(){
    this.textColor = 'dodgerblue';
  }

  onTextMouseOut(){
    this.textColor = 'tomato';
  }
}
