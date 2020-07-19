import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordTableComponent } from './crossword-table.component';

describe('CrosswordTableComponent', () => {
  let component: CrosswordTableComponent;
  let fixture: ComponentFixture<CrosswordTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
