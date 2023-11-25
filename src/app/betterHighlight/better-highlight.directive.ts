import {Directive, OnInit, Renderer2, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{


  constructor(private elRef: ElementRef, private renderera:Renderer2) { }

  ngOnInit() {
   //this.renderera.setStyle(this.elRef.nativeElement, "background-color", "gold")
  }

  @HostListener("mouseenter") //event
  mouseover(eventData: Event) {
    this.renderera.setStyle(this.elRef.nativeElement, "background-color", "gold")
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderera.setStyle(this.elRef.nativeElement, "background-color", "transparent")
  }

}
