import { Component, OnInit } from '@angular/core';
import { CPUService } from '../cpu.service';
import { CPU } from '../cpu';

@Component({
  selector: 'app-di-cpu',
  templateUrl: './di-cpu.component.html',
  styleUrls: ['./di-cpu.component.scss'],
  providers: [CPUService]
})
export class DiCPUComponent implements OnInit {
  CPUs:CPU[];

  constructor( private cpu: CPUService ) { this.CPUs = cpu.getCPU(); }

  ngOnInit() {
  }

}
