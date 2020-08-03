import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebusItemsComponent } from './rebus-items.component';

describe('RebusItemsComponent', () => {
  let component: RebusItemsComponent;
  let fixture: ComponentFixture<RebusItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebusItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebusItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
