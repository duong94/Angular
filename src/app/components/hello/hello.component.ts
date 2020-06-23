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
    SimpleChanges, 
  } from '@angular/core';
  
  @Component({
    selector: 'app-hello',
    template: `
      <h2>Hello from hello component</h2>
      <p>{{ text }} from parent</p>
      `,
  })
  export class HelloComponent 
    implements OnInit, OnChanges, OnDestroy, AfterViewChecked, AfterContentInit, AfterViewInit, AfterContentChecked { 
    @Input() text:String;

    ngOnInit(): void{
      console.log('Child OnInit ran');
    }
    ngOnChanges(Changes: SimpleChanges): void{
      console.log('Child OnChanges ran', { Changes });
    }
    ngOnDestroy(): void{
      console.log('Child OnDestroy ran');
    }
    ngAfterViewInit(): void{
      console.log('Child fterViewInit ran');
    }
    ngAfterContentInit(): void{
      console.log('Child AfterContentInit ran');
    }
    ngAfterViewChecked(): void{
      console.log('Child AfterViewChecked ran');
    }
    ngAfterContentChecked(): void{
      console.log('Child AfterContentChecked ran');
    }
  
    
  }
  