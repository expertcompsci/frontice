import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatBottomSheet, MatCardModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepicker, MatDialogModule, MatDialog, MAT_DATEPICKER_SCROLL_STRATEGY, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { LetterEditComponent } from './letter-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatetimepickerModule, MatNativeDatetimeModule, MatDatetimepicker } from '@mat-datetimepicker/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { LetterService } from '../shared/api/letters.service';

describe('LetterEditComponent', () => {
  let component: LetterEditComponent;
  let fixture: ComponentFixture<LetterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterEditComponent ],
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
        LetterService,
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
    fixture = TestBed.createComponent(LetterEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
