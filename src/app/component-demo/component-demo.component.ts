import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component-demo',
  host:{
    "[class.colorA]" : "( theme === 'light')",
    "[class.colorB]" : "( theme === 'dark' )"
  },
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.scss']
})

export class ComponentDemoComponent implements OnInit {
  // @ViewChild()   
  public theme: string;
  constructor() { };

  ngOnInit() {
  }

  light(){
    this.theme = 'light';
  }

  dark(){
    this.theme = 'dark';
  }

}
