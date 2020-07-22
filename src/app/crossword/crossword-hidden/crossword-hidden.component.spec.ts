import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordHiddenComponent } from './crossword-hidden.component';

describe('CrosswordHiddenComponent', () => {
  let component: CrosswordHiddenComponent;
  let fixture: ComponentFixture<CrosswordHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
