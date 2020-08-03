import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceTextModalComponent } from './replace-text-modal.component';

describe('ReplaceTextModalComponent', () => {
  let component: ReplaceTextModalComponent;
  let fixture: ComponentFixture<ReplaceTextModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceTextModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
