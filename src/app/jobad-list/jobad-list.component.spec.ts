import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatBottomSheet, MatTableModule, MatPaginatorModule } from '@angular/material';
import { JobadListComponent } from './jobad-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { JobAdService } from '../shared/api/job-ads.service';

describe('JobadListComponent', () => {
  let component: JobadListComponent;
  let fixture: ComponentFixture<JobadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobadListComponent ],
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
        JobAdService, 
        MatBottomSheet,
        Overlay ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobadListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
