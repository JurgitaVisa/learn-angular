import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// ng g d directives/name-of-dir
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log("on focus");
  }

  @HostListener('blur') onBlur() {
    console.log("on blur");
    let value: string = this.el.nativeElement.value;

    if (this.format == 'upper') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLocaleLowerCase();
    }

  }

}
