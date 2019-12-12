import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PicDirective } from '../pic.directive';
import { Pic } from '../pic';
import { PicService, picItem } from '../pic.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @ViewChild(PicDirective,{ static: true }) picHost : PicDirective;
  // @ViewChild('vc', { static: true }) vc : ViewContainerRef;
  public img:picItem[];
  public currentAdIndex = -1;
  public interval:any;

  constructor(private service: PicService,private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {    
    this.img = this.service.getPic();
    this.loadComponent();
    this.getAds();
  }

  
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.img.length;
    let picItem = this.img[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(picItem.component);

    let viewContainerRef = this.picHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<Pic>componentRef.instance).data = picItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
  }

}
