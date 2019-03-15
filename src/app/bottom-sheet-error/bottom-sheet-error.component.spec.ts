import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatListModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

import { BottomSheetErrorComponent } from './bottom-sheet-error.component';

describe('BottomSheetErrorComponent', () => {
  let component: BottomSheetErrorComponent;
  let fixture: ComponentFixture<BottomSheetErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatListModule ],
      declarations: [ BottomSheetErrorComponent ],
      providers: [
        {provide: MatBottomSheetRef, useValue: {} },
        {provide: MAT_BOTTOM_SHEET_DATA, useValue: ['test_one','test_two'] }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetErrorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
