import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebusContnetComponent } from './rebus-contnet.component';

describe('RebusContnetComponent', () => {
  let component: RebusContnetComponent;
  let fixture: ComponentFixture<RebusContnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebusContnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebusContnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
