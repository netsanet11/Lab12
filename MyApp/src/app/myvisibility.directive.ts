import { Directive, Input, ElementRef, Renderer, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective implements OnInit {
  @Input('input') input: boolean;

  constructor(private e: ElementRef, private r: Renderer) {


  }
  ngOnInit() {
    if (this.input) {
      console.log("visible " + this.input);
      this.r.setElementStyle(this.e.nativeElement, "display", "true");
    } else {
      console.log("hidden " + this.input);
      this.r.setElementStyle(this.e.nativeElement, "display", "none");
    }
  }

}
