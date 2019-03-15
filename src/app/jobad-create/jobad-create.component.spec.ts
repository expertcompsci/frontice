import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatBottomSheet, MatCardModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepicker, MatDialogModule, MatDialog, MAT_DATEPICKER_SCROLL_STRATEGY, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDatetimepickerModule, MatDatetimepicker, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { JobAdService } from '../shared/api/job-ads.service';
import { JobadCreateComponent } from './jobad-create.component';
import { EmployerService } from '../shared/api/employers.service';

describe('JobadCreateComponent', () => {
  let component: JobadCreateComponent;
  let fixture: ComponentFixture<JobadCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobadCreateComponent ],
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
        JobAdService,
        EmployerService, 
        MatBottomSheet,
        Overlay        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobadCreateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
