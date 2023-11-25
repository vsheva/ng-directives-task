import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appHighlight]' //!! по этому селектору - в app обращаемся к директиву
})

export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "blue";
  }
}
