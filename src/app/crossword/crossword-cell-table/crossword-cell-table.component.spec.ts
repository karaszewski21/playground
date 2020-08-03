import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordCellTableComponent } from './crossword-cell-table.component';

describe('CrosswordCellTableComponent', () => {
  let component: CrosswordCellTableComponent;
  let fixture: ComponentFixture<CrosswordCellTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordCellTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordCellTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
