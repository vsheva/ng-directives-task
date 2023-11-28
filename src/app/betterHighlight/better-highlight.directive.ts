import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding, Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})


export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  //@Input() highlightColor: string = "green";
  @Input("highlightColor") highlightColor: string = "green";

  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elRef: ElementRef, private renderera: Renderer2) {
  }

  ngOnInit() {
    //this.renderera.setStyle(this.elRef.nativeElement, "background-color", "gold")
    this.backgroundColor = this.defaultColor
  }

  @HostListener("mouseenter") /*event*/ mouseover(eventData: Event) {
    //this.renderera.setStyle(this.elRef.nativeElement, "background-color", "gold")
    this.backgroundColor = this.highlightColor
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    //this.renderera.setStyle(this.elRef.nativeElement, "background-color", "transparent")
    this.backgroundColor = this.defaultColor
  }

}
