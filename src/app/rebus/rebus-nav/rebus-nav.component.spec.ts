import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebusNavComponent } from './rebus-nav.component';

describe('RebusNavComponent', () => {
  let component: RebusNavComponent;
  let fixture: ComponentFixture<RebusNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebusNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebusNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
