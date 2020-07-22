import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordNavComponent } from './crossword-nav.component';

describe('CrosswordNavComponent', () => {
  let component: CrosswordNavComponent;
  let fixture: ComponentFixture<CrosswordNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
