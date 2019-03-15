import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployerListComponent } from './employer-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatBottomSheet, MatTableModule, MatPaginatorModule } from '@angular/material';
import { EmployerService } from '../shared/api/employers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';

describe('EmployerListComponent', () => {
  let component: EmployerListComponent;
  let fixture: ComponentFixture<EmployerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerListComponent ],
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
        EmployerService, 
        MatBottomSheet,
        Overlay ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
