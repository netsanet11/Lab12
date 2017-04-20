import { Directive, EventEmitter, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  @Input() color:  number = 0;
  myColors: string[]= ['orange', 'yellow', 'lightblue'];
  constructor() { }
  @HostListener('click') clicked(){ this.myBG = this.myColors[this.color]}
  @HostBinding('style.backgroundColor') myBG;

  
}
