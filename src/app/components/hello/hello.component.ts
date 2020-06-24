import { 
    Component,
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    Input,
    Output,
    EventEmitter,
    SimpleChanges, 
  } from '@angular/core';
import { title } from 'process';
import  { DataService } from 'src/app/services/data.service';
  
  @Component({
    selector: 'app-hello',
    template: `
      <h2>Hello from hello component</h2>
      <p>{{ text }} from parent</p>

      <button (click)="onButtonClicked()">Button in Hello</button>
      `,
  })
  export class HelloComponent 
    implements OnInit, OnChanges, OnDestroy, AfterViewChecked, AfterContentInit, AfterViewInit, AfterContentChecked { 
    @Input() text:string;
    @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _dataService: DataService) {
    }

    onButtonClicked(){
        this.text = 'Changed from Hello Component';
        this.buttonClicked.emit(this.text);
    }

    ngOnInit(): void{
      console.log('Child OnInit ran');
      this._dataService.setTextFromHello(this.text);
    }
    ngOnChanges(Changes: SimpleChanges): void{
      //console.log('Child OnChanges ran', { Changes });
    }
    ngOnDestroy(): void{
      //console.log('Child OnDestroy ran');
    }
    ngAfterViewInit(): void{
      //console.log('Child fterViewInit ran');
    }
    ngAfterContentInit(): void{
      //console.log('Child AfterContentInit ran');
    }
    ngAfterViewChecked(): void{
      //console.log('Child AfterViewChecked ran');
    }
    ngAfterContentChecked(): void{
      //console.log('Child AfterContentChecked ran');
    }
  
    
  }
  