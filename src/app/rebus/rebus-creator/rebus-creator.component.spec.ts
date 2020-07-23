import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebusCreatorComponent } from './rebus-creator.component';

describe('RebusCreatorComponent', () => {
  let component: RebusCreatorComponent;
  let fixture: ComponentFixture<RebusCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebusCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebusCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
