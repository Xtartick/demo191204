import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PicService } from './banner2/pic.service';
// import { AdItem } from './banner/ad-item';
// import { AdService } from './banner/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [ AdService ]
})
export class AppComponent implements OnInit {
  @ViewChild('showdiv', { static: true }) showdiv: ElementRef;
  // title = 'demo191204';
  // ads:AdItem[];

  showCom;
  com1;
  com2;
  com3;
  com4;

  bindCallBack;

  // constructor(private adservice:AdService,private renderer:Renderer2) {}
  constructor(private pic: PicService) { }

  ngOnInit() {
    //   this.ads = this.adservice.getAds();
    this.bindCallBack = this.getResult.bind(this);
  }

  show() {
    console.log(this.showdiv);
    this.showdiv.nativeElement.className = 'div animation';

    // this.renderer.setAttribute(this.showdiv,'class', this.showdiv)
  }

  show2() {
    this.showdiv.nativeElement.className = 'div animation animation2';
  }


  getResult() {
    this.showCom = true;
    this.pic.removeComponent();
    const arr = [this.com1, this.com2, this.com3, this.com4];
    arr.forEach((e, index) => {
      if (e) { this.pic.plusComponent(index + 1); }
    });
  }

  clear() {
    this.showCom = false;
    this.pic.removeComponent();
  }

}
