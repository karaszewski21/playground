import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceTextComponent } from './replace-text.component';

describe('ReplaceTextComponent', () => {
  let component: ReplaceTextComponent;
  let fixture: ComponentFixture<ReplaceTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
