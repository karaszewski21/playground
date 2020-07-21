import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordQuestionsComponent } from './crossword-questions.component';

xdescribe('CrosswordQuestionsComponent', () => {
  let component: CrosswordQuestionsComponent;
  let fixture: ComponentFixture<CrosswordQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrosswordQuestionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
