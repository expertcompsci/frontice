import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheet, MatCardModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepicker, MatDialogModule, MatDialog, MAT_DATEPICKER_SCROLL_STRATEGY, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { ResumeCreateComponent } from './resume-create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LetterService } from '../shared/api/letters.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';

describe('ResumeCreateComponent', () => {
  let component: ResumeCreateComponent;
  let fixture: ComponentFixture<ResumeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCreateComponent ],
      imports: [ 
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        HttpClientTestingModule,
        MatDividerModule
      ],
      providers: [ 
        LetterService, 
        MatBottomSheet,
        Overlay
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCreateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
