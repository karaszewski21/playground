import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebusPasswordComponent } from './rebus-password.component';

describe('RebusPasswordComponent', () => {
  let component: RebusPasswordComponent;
  let fixture: ComponentFixture<RebusPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebusPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebusPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
