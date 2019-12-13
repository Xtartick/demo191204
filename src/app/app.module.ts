import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
// import { Demo2Component } from './demo2/demo2.component';
// import { AdbannerComponent } from './banner/adbanner/adbanner.component';
// import { AdDirective } from './banner/ad.directive';
// import { HeroJobAdComponent } from './banner/hero-job-ad/hero-job-ad.component';
// import { HeroProfileComponent } from './banner/hero-profile/hero-profile.component';
import { DiCPUComponent } from './di/di-cpu/di-cpu.component';
import { NoCPUComponent } from './di/no-cpu/no-cpu.component';
import { BannerComponent } from './banner2/banner/banner.component';
import { AdPicComponent } from './banner2/ad-pic/ad-pic.component';
import { PicDirective } from './banner2/pic.directive';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemoComponent,
    // Demo2Component,
    // AdbannerComponent,
    // AdDirective,
    // HeroJobAdComponent,
    // HeroProfileComponent,
    DiCPUComponent,
    NoCPUComponent,
    BannerComponent,
    AdPicComponent,
    PicDirective
  ],
  entryComponents: [
    // HeroJobAdComponent,
    // HeroProfileComponent,
    AdPicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
