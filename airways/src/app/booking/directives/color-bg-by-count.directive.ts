import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorBgByCount]'
})
export class ColorBgByCountDirective implements OnChanges {
  @Input('appColorBgByCount') count: number | undefined;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnChanges(): void {
    this.changeColorByCount(this.count);
  }

  private changeColorByCount(count: number | undefined): void {
    const color = ColorBgByCountDirective.getColorByCount(count);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

  static getColorByCount(count: number | undefined): string {
    if (!count) return 'white';
    if (count < 10) return 'red';
    if (count < 50) return 'orange';
    if (count < 100) return 'yellow';
    return 'green';
  }


}
