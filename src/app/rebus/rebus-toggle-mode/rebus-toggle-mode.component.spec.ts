import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebusToggleModeComponent } from './rebus-toggle-mode.component';

describe('RebusToggleModeComponent', () => {
  let component: RebusToggleModeComponent;
  let fixture: ComponentFixture<RebusToggleModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebusToggleModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebusToggleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
