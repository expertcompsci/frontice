import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import { AreYouSureDialogComponent, DialogData } from './are-you-sure-dialog.component';

describe('AreYouSureDialogComponent', () => {
  let component: AreYouSureDialogComponent;
  let fixture: ComponentFixture<AreYouSureDialogComponent>;
  let data: DialogData = new DialogData();
  data.message = 'Dialog Message'
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatButtonModule, MatDialogModule ],
      declarations: [ AreYouSureDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: data }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreYouSureDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
