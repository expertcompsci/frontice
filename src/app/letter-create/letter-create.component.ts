import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetErrorComponent } from '../bottom-sheet-error/bottom-sheet-error.component';
import AppErrorInterpreter from '../shared/api/app-error-interpreter';

import Letter from '../shared/models/Letter';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import ServeResponse from '../shared/models/ServeResponse';
import * as moment from 'moment';

@Component({
  selector: 'app-letter-create',
  templateUrl: './letter-create.component.html',
  styleUrls: ['./letter-create.component.scss']
})

export class LetterCreateComponent implements OnInit, AfterViewInit {

  @ViewChild('fileInput')
  fileInputRef: ElementRef;
  fileInputElement: HTMLInputElement;

  file: any;
  fileDate: moment.Moment;
  fileChosen = false;

  letter: Letter;

  public API = environment.serveBaseUrl;
  public INSERT_RESUME_API = `${this.API}/upload-letter`;

  constructor(
    private router: Router,
    private http: HttpClient,
    private bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit() {
    this.letter = new Letter();
  }

  ngAfterViewInit() {
    this.fileInputElement = this.fileInputRef.nativeElement as HTMLInputElement;
  }

  chooseFile() {
    this.fileInputElement.click();
  }

  save() {
    const formData: FormData = new FormData();
    let file = this.fileInputElement.files[0];
    formData.append('letter', file, file.name);
    formData.append("description", this.letter.description);
    formData.append("lastModified", this.fileDate.format("YYYY-MM-DD HH:mm:ss"));
    formData.append("notes", this.letter.notes);
    this.http.post(this.INSERT_RESUME_API, formData).subscribe(
      (result: ServeResponse) => { 
        let appErr = new AppErrorInterpreter(result);
        if (!appErr.isOk()) {
          if (appErr.isIntegrityViolation()) {
            this.bottomSheet.open(BottomSheetErrorComponent, {
              data: ["There is already a letter with this description and extension."]
            });
          } else {
            this.bottomSheet.open(BottomSheetErrorComponent, {
              data: appErr.errorMessages
            });
          }
        } else {
          this.router.navigate(['/letter-list']);
        }
      });
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.fileChosen = true;
      this.file = fileInput.target.files[0].name;
      this.fileDate = moment(fileInput.target.files[0].lastModified);
    }
  }

  gotoList() {
    this.router.navigate(['/letter-list']);
  }

}
