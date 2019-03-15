import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { BottomSheetErrorComponent } from '../bottom-sheet-error/bottom-sheet-error.component';
import AppErrorInterpreter from '../shared/api/app-error-interpreter';
import { LetterService } from '../shared/api/letters.service';
import Letter from '../shared/models/Letter';
import ServeResponse from '../shared/models/ServeResponse';
import "reflect-metadata";
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AreYouSureDialogComponent } from '../are-you-sure-dialog/are-you-sure-dialog.component';

@Component({
  selector: 'app-letter-edit',
  templateUrl: './letter-edit.component.html',
  styleUrls: ['./letter-edit.component.scss']
})
export class LetterEditComponent implements OnInit, AfterViewInit {

  @ViewChild('fileInputEdit') fileInputRef: ElementRef;
  fileInputElement: HTMLInputElement;
  file: string = "";
  fileDate: moment.Moment;
  newFileToBeCommited: boolean = false;

  private API = environment.serveBaseUrl;
  private UPDATE_RESUME_API = `${this.API}/update-letter`;
  private UPLOAD_RESUME_API = `${this.API}/upload-letter`;

  letter: Letter;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private letterService: LetterService,
    private http: HttpClient,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.fileInputElement = this.fileInputRef.nativeElement as HTMLInputElement;
  }

  ngOnInit() {
    this.letter = new Letter();
    this.route.params.subscribe(params => {
      this.letter.id = params['id'];
      this.letterService.get(this.letter.id).subscribe((response: ServeResponse) => {
        if (response.model[0]) {
          this.letter = response.model[0];
          this.file = this.letter.originalBasename;
          this.fileDate = moment(this.letter.lastModified, "YYYY-MM-DD HH:mm:ss");
        } else {
          this.gotoList();
        }
      });
    });
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.newFileToBeCommited = true;
      this.file = fileInput.target.files[0].name;
      this.fileDate = moment(fileInput.target.files[0].lastModified);
    }
  }

  save() {
    console.log(this.letter);
    const formData: FormData = new FormData();
    formData.append("id", this.letter.id.toString());
    formData.append("description", this.letter.description);
    formData.append("notes", this.letter.notes);
    formData.append("lastModified", this.fileDate.format("YYYY-MM-DD HH:mm:ss"));
    console.log(formData);
    if (this.newFileToBeCommited) {
      let file = this.fileInputElement.files[0];
      formData.append('letter', file, file.name);
      this.http.post(this.UPLOAD_RESUME_API, formData).subscribe(
        (result: ServeResponse) => {
          this.handleResult(result);
        });
    } else {
      this.http.post(this.UPDATE_RESUME_API, formData).subscribe(
        (result: ServeResponse) => {
          this.handleResult(result);
        });
    }
  }

  handleResult(result: ServeResponse) {
    let appErr = new AppErrorInterpreter(result);
    if (!appErr.isOk()) {
      if (appErr.isIntegrityViolation()) {
        this.bottomSheet.open(BottomSheetErrorComponent, {
          data: ["There is already a letter with this purpose and extension."]
        });
      } else {
        this.bottomSheet.open(BottomSheetErrorComponent, {
          data: appErr.errorMessages
        });
      }
    } else {
      this.router.navigate(['/letter-list']);
    }
  }

  chooseFile() {
    this.fileInputElement.click();
  }

  gotoList() {
    this.router.navigate(['/letter-list']);
  }

  deleteAllRevisions(event: MouseEvent) {
    event.preventDefault();
    this.letterService.remove(this.letter.id).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  openDialog(event: MouseEvent): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: '250px',
      data: {message: "Are you sure you want to delete this resume and all associated revisions?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.letterService.remove(this.letter.id).subscribe(
          result => {
            this.gotoList();
          },
          error => console.error(error)
        );
      }
    });
  }


}

