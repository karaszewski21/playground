import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordPasswordComponent } from './crossword-password.component';

xdescribe('CrosswordPasswordComponent', () => {
  let component: CrosswordPasswordComponent;
  let fixture: ComponentFixture<CrosswordPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrosswordPasswordComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
