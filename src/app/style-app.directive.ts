import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyleApp]'
})
export class StyleAppDirective {

  @HostBinding('style.color') textColor
  constructor(private eleRef:ElementRef){
    this.textColor="red"
  }
  
  @HostListener("click") onClick(){
    alert("window click")
    this.textColor="green"
  }
  @HostListener("mouseover") onMouseHover(){
    this.textColor="yellow"
  }
  @HostListener("mouseout") onMouseOut(){
    this.textColor="red"
  }
  
}
