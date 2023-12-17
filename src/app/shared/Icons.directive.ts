// lord-icon.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'lord-icon',
})
export class LordIconDirective implements OnInit {
  @Input() src!: string;
  @Input() trigger: string = 'hover';
  @Input() style: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.innerHTML = `
      <lord-icon
        src="${this.src}"
        trigger="${this.trigger}"
        style="${this.style}">
      </lord-icon>
    `;
  }
}
