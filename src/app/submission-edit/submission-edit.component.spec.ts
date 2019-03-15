import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule, MatBottomSheet, MatCardModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepicker, MatDialogModule, MatDialog, MAT_DATEPICKER_SCROLL_STRATEGY, MatNativeDateModule, MatDatepickerModule, MatCardTitle } from '@angular/material';
import { SubmissionEditComponent } from './submission-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDatetimepickerModule, MatNativeDatetimeModule, MatDatetimepicker } from '@mat-datetimepicker/core';
import { JobAdService } from '../shared/api/job-ads.service';
import { EmployerService } from '../shared/api/employers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { SubmissionService } from '../shared/api/submissions.service';
import { ResumeService } from '../shared/api/resumes.service';
import { LetterService } from '../shared/api/letters.service';

describe('SubmissionEditComponent', () => {
  let component: SubmissionEditComponent;
  let fixture: ComponentFixture<SubmissionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionEditComponent ],
      imports: [ 
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDividerModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDatetimepickerModule,
        MatDatepickerModule,
        MatNativeDatetimeModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [ 
        MatDialog,
        MatDatetimepicker,
        MatDatepickerModule,
        SubmissionService,
        ResumeService,
        LetterService,
        JobAdService,
        EmployerService, 
        MatBottomSheet,
        Overlay        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
