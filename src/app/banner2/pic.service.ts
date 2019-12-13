import { Injectable, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Type } from '@angular/core';
import { AdPicComponent } from './ad-pic/ad-pic.component';
import { PicDirective } from './pic.directive';
import { Pic } from './pic';

export class picItem {
  constructor(public component: Type<any>, public data: any) { }
}



@Injectable({
  providedIn: 'root'
})
export class PicService {


  private picItems: picItem[] = [];
  currentAdIndex = -1;
  componentArray = this.getComponent();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  plusComponent(index: number) {
    const temp = new picItem(AdPicComponent, { src: `../../../assets/KFC0${index}.jpg` });
    this.picItems.push(temp);
  }

  removeComponent() {
    this.picItems = [];
  }

  getComponent(): Array<any> {
    console.log(this.picItems);
    return this.picItems;
  }

  loadComponent(picHost) {
    this.componentArray = this.getComponent();
    if (this.componentArray.length !== 0) {
      this.currentAdIndex = (this.currentAdIndex + 1) % this.componentArray.length;
      const picItem = this.componentArray[this.currentAdIndex];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(picItem.component);
      let viewContainerRef = picHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<Pic>componentRef.instance).data = picItem.data;
    }
  }
}
