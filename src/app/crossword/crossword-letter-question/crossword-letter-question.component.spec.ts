import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordLetterQuestionComponent } from './crossword-letter-question.component';

describe('CrosswordLetterQuestionComponent', () => {
  let component: CrosswordLetterQuestionComponent;
  let fixture: ComponentFixture<CrosswordLetterQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordLetterQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordLetterQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
