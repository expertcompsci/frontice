import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatBottomSheet, MatTableModule, MatPaginatorModule } from '@angular/material';
import { LetterListComponent } from './letter-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { LetterService } from '../shared/api/letters.service';

describe('LetterListComponent', () => {
  let component: LetterListComponent;
  let fixture: ComponentFixture<LetterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterListComponent ],
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
        MatPaginatorModule,
        HttpClientTestingModule
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
    fixture = TestBed.createComponent(LetterListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
