import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XTextModalComponent } from './xtext-modal.component';

describe('XTextModalComponent', () => {
  let component: XTextModalComponent;
  let fixture: ComponentFixture<XTextModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XTextModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
