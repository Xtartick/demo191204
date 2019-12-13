import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, Input, OnDestroy } from '@angular/core';
import { PicDirective } from '../pic.directive';
import { Pic } from '../pic';
import { PicService } from '../pic.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {

  @Input() callback: void;
  // @ViewChild('vc', { static: true }) vc : ViewContainerRef;
  @ViewChild(PicDirective, { static: true }) picHost: PicDirective;
  public img;
  public interval: Subscription;

  constructor(private service: PicService) { }

  ngOnInit() {
    this.executeSet();
    this.callback = this.loadComponent();
  }

  loadComponent() {
    this.service.loadComponent(this.picHost);
  }


  getAds() {
    const source = interval(2000);
    this.interval = source.subscribe( val => {
      this.loadComponent();
    });
  }

  executeSet() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe();

  }

}
