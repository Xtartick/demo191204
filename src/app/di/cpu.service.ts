import { Injectable } from '@angular/core';
import { CPU } from './cpu';

@Injectable({
  providedIn: 'root'
})

// @Injectable()

export class CPUService {
  private CPUs:CPU[];

  constructor(){
    this.CPUs.push(new CPU('CPU-A',1000));
    this.CPUs.push(new CPU('CPU-B',1500));
    this.CPUs.push(new CPU('CPU-C',6000));
    this.CPUs.push(new CPU('CPU-D',4800));
  }

  getCPU(){
    return this.CPUs;
  }
}
