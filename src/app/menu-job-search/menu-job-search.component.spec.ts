import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule, MatToolbarModule } from '@angular/material';

import { MenuJobSearchComponent } from './menu-job-search.component';

describe('MenuJobSearchComponent', () => {
  let component: MenuJobSearchComponent;
  let fixture: ComponentFixture<MenuJobSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatMenuModule
      ],
      declarations: [ MenuJobSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuJobSearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
