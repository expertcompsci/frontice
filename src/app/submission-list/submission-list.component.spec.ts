import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatBottomSheet, MatTableModule, MatPaginatorModule } from '@angular/material';
import { SubmissionListComponent } from './submission-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ResumeService } from '../shared/api/resumes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { LetterService } from '../shared/api/letters.service';
import { JobAdService } from '../shared/api/job-ads.service';
import { EmployerService } from '../shared/api/employers.service';
import { SubmissionService } from '../shared/api/submissions.service';

describe('SubmissionListComponent', () => {
  let component: SubmissionListComponent;
  let fixture: ComponentFixture<SubmissionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionListComponent ],
      imports: [ 
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDividerModule,
        MatTableModule,
        HttpClientTestingModule,
        MatPaginatorModule
      ],
      providers: [ 
        ResumeService,
        LetterService,
        JobAdService,
        EmployerService,
        SubmissionService,
        MatBottomSheet,
        Overlay
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
