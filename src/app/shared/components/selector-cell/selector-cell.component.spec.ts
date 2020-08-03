import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCellComponent } from './selector-cell.component';

describe('SelectorCellComponent', () => {
  let component: SelectorCellComponent;
  let fixture: ComponentFixture<SelectorCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
