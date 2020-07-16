import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordQuestionComponent } from './crossword-question.component';

describe('CrosswordQuestionComponent', () => {
  let component: CrosswordQuestionComponent;
  let fixture: ComponentFixture<CrosswordQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
