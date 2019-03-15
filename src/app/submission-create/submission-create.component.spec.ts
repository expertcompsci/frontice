import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule, MatBottomSheet, MatCardModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepicker, MatDialogModule, MatDialog, MAT_DATEPICKER_SCROLL_STRATEGY, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { SubmissionCreateComponent } from './submission-create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDatetimepickerModule, MatNativeDatetimeModule, MatDatetimepicker } from '@mat-datetimepicker/core';
import { JobAdService } from '../shared/api/job-ads.service';
import { EmployerService } from '../shared/api/employers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { ResumeService } from '../shared/api/resumes.service';
import { LetterService } from '../shared/api/letters.service';
import { SubmissionService } from '../shared/api/submissions.service';

describe('SubmissionCreateComponent', () => {
  let component: SubmissionCreateComponent;
  let fixture: ComponentFixture<SubmissionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionCreateComponent ],
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
        JobAdService,
        EmployerService, 
        ResumeService,
        LetterService,
        MatBottomSheet,
        Overlay        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
