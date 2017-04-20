import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  template: `<ul>       
        <li  *ngFor="let item of list">{{item}}</li>
      </ul>
      <hr/>
      <h1>My Colors</h1>
      <ul>       
        <li  mycolor color={{i}} *ngFor="let item of colors; let i = index">{{item}}</li>
      </ul>          
  `,
  styles: []
})
export class CustomComponentComponent {
  @Input() list: string[];
  colors: string[] = ['Orange', 'Yellow', 'Lightblue'];
  constructor() { }



}
