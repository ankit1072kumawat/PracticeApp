import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elref : ElementRef, private renderer : Renderer2) { }

ngOnInit() {
  
}
@HostListener('mouseenter') mouseover() {
  this.renderer.setStyle(this.elref.nativeElement, 'background-color' , '#00000038');
}
@HostListener('mouseleave') mouseleave() {
  this.renderer.setStyle(this.elref.nativeElement, 'background-color' , 'transparent');
}

}
