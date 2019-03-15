import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { EmployerEditComponent } from './employer-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatBottomSheet } from '@angular/material';
import { EmployerService } from '../shared/api/employers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployerEditComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerEditComponent],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDividerModule,
        HttpClientTestingModule
      ],
      providers: [
        EmployerService,
        MatBottomSheet,
        Overlay]
    })
  }));

  let component: EmployerEditComponent;
  let fixture: ComponentFixture<EmployerEditComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

