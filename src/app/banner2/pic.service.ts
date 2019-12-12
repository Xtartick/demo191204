import { Injectable } from '@angular/core';
import { Type } from '@angular/core';
import { AdPicComponent } from './ad-pic/ad-pic.component';

export class picItem {
  constructor(public component:Type<any>, public data:any){ }
}

@Injectable({
  providedIn: 'root'
})
export class PicService {

  constructor() { }

  getPic(){
    return [
      new picItem(AdPicComponent,{src:'../../../assets/KFC01.jpg'}),
      new picItem(AdPicComponent,{src:'../../../assets/KFC02.jpg'}),
      new picItem(AdPicComponent,{src:'../../../assets/KFC03.jpg'}),
      new picItem(AdPicComponent,{src:'../../../assets/KFC04.jpg'})
    ];
  }
}
