import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
	selector: '[appBasicHighLight]'
})
export class BasicHighlightDirective implements OnInit {
	constructor(private elementRef: ElementRef) {
	}

	ngOnInit(){
		//not a good practice
		 this.elementRef.nativeElement.style.backgroundColor = 'pink';
	}
}