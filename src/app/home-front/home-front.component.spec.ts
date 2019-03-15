import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFrontComponent } from './home-front.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatListModule } from '@angular/material';
import { EmployerService } from '../shared/api/employers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeFrontComponent', () => {
  let component: HomeFrontComponent;
  let fixture: ComponentFixture<HomeFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFrontComponent ],
      imports: [ 
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDividerModule,
        HttpClientTestingModule,
        MatListModule
      ],
      providers: [ 
        EmployerService, 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFrontComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
