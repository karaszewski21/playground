import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebusVerifyComponent } from './rebus-verify.component';

describe('RebusVerifyComponent', () => {
  let component: RebusVerifyComponent;
  let fixture: ComponentFixture<RebusVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebusVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebusVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
