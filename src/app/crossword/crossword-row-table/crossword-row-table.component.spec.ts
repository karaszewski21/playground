import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordRowTableComponent } from './crossword-row-table.component';

describe('CrosswordRowTableComponent', () => {
  let component: CrosswordRowTableComponent;
  let fixture: ComponentFixture<CrosswordRowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordRowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
