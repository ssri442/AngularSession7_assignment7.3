import { Directive , ElementRef, HostListener,Renderer} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef, private render: Renderer) {
    this.changecolor("black")
  }
 
  //Adding Host listener for firing events and changing colors accordingy

  @HostListener('mouseenter', ['$event']) 
  onMouseenter($event: any) {
    const value = $event.target.textContent;
    if (this.isOdd(value)) {
      this.changecolor("red")
    } else {
      this.changecolor("green")
    }
  }

  @HostListener('mouseout', ['$event'])
  onMouseout($event: any) {
    this.changecolor("black")
  }


  isOdd(num) {
    if (num % 2) return true
    else return false
  }

  private changecolor(color: string) {
    this.render.setElementStyle(this.el.nativeElement, 'color', color);
  }
}