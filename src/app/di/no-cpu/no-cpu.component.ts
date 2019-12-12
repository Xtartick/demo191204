import { Component, OnInit } from '@angular/core';
import { CPUS } from '../mock-cpu';

@Component({
  selector: 'app-no-cpu',
  templateUrl: './no-cpu.component.html',
  styleUrls: ['./no-cpu.component.scss']
})
export class NoCPUComponent {
  cpus = CPUS;
}
