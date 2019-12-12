import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPicComponent } from './ad-pic.component';

describe('AdPicComponent', () => {
  let component: AdPicComponent;
  let fixture: ComponentFixture<AdPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
