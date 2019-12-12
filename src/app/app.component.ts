import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AdItem } from './banner/ad-item';
import { AdService } from './banner/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [ AdService ]
})
export class AppComponent implements OnInit{
  @ViewChild('showdiv',{static:true}) showdiv:ElementRef;
  title = 'demo191204';
  ads:AdItem[];

  constructor(private adservice:AdService,private renderer:Renderer2) {}

  ngOnInit() {
    this.ads = this.adservice.getAds();
  }

  show(){
    console.log(this.showdiv);
    this.showdiv.nativeElement.className = 'div animation';
    
    // this.renderer.setAttribute(this.showdiv,'class', this.showdiv)
  }

  show2(){
    this.showdiv.nativeElement.className = 'div animation animation2';
  }

}
