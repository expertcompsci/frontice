import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule, MatBottomSheet, MatCardModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepicker, MatDialogModule, MatDialog, MAT_DATEPICKER_SCROLL_STRATEGY, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { ResumeEditComponent } from './resume-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDatetimepickerModule, MatNativeDatetimeModule, MatDatetimepicker } from '@mat-datetimepicker/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { ResumeService } from '../shared/api/resumes.service';

describe('ResumeEditComponent', () => {
  let component: ResumeEditComponent;
  let fixture: ComponentFixture<ResumeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeEditComponent ],
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
        ResumeService,
        MatDialog,
        MatDatetimepicker,
        MatDatepickerModule,
        MatBottomSheet,
        Overlay        
      ]
   })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
