import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XTextComponent } from './xtext.component';

describe('XTextComponent', () => {
  let component: XTextComponent;
  let fixture: ComponentFixture<XTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
