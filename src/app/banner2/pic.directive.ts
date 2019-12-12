import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPic]'
})
export class PicDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
