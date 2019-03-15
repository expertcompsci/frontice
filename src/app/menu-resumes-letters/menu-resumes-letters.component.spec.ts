import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule, MatToolbarModule } from '@angular/material';

import { MenuResumesLettersComponent } from './menu-resumes-letters.component';

describe('MenuResumesLettersComponent', () => {
  let component: MenuResumesLettersComponent;
  let fixture: ComponentFixture<MenuResumesLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatMenuModule
      ],
      declarations: [ MenuResumesLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuResumesLettersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
