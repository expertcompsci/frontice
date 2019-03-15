import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export class DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-are-you-sure-dialog',
  templateUrl: './are-you-sure-dialog.component.html',
  styleUrls: ['./are-you-sure-dialog.component.scss']
})
export class AreYouSureDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<AreYouSureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) 
      { data.title = (data.title) ? data.title : "Are you sure?" }

    onNoClick(): void {
      this.dialogRef.close(false);
    }
  
    onYesClick(): void {
      this.dialogRef.close(true);
    }
  
    
}
