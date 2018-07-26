import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';

  @HostBinding('style.backgroundColor') backgroundColor:string ;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(){
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue');
  }
  
  //with host listener and renderer
  // @HostListener('mouseenter') mouseover(eventData:Event){
  //   this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue');
  // }

  // @HostListener('mouseleave') mouseleave(eventData:Event){
  //   this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
  // }

   //with host listener and host binding
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor=this.defaultColor;
  }
}
