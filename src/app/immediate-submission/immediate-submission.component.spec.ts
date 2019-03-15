import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateSubmissionComponent } from './immediate-submission.component';

describe('ImmediateSubmissionComponent', () => {
  let component: ImmediateSubmissionComponent;
  let fixture: ComponentFixture<ImmediateSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmediateSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmediateSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
