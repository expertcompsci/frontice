import { Component, ViewChild, ElementRef,OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { BottomSheetErrorComponent } from '../bottom-sheet-error/bottom-sheet-error.component';
import AppErrorInterpreter from '../shared/api/app-error-interpreter';
import { ResumeService } from '../shared/api/resumes.service';
import Resume from '../shared/models/Resume';
import ServeResponse from '../shared/models/ServeResponse';
import "reflect-metadata";
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AreYouSureDialogComponent } from '../are-you-sure-dialog/are-you-sure-dialog.component';

@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.scss']
})

export class ResumeEditComponent implements OnInit, AfterViewInit {

  @ViewChild('fileInputEdit') fileInputRef: ElementRef;
  fileInputElement: HTMLInputElement;
  file: string = "";
  fileDate: moment.Moment;
  newFileToBeCommited: boolean = false;

  public API = environment.serveBaseUrl;
  public UPDATE_RESUME_API = `${this.API}/update-resume`;
  public UPLOAD_RESUME_API = `${this.API}/upload-resume`;

  resume: Resume;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resumeService: ResumeService,
    private http: HttpClient,
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.fileInputElement = this.fileInputRef.nativeElement as HTMLInputElement;
  }

  ngOnInit() {
    this.resume = new Resume();
    this.route.params.subscribe(params => {
      this.resume.id = params['id'];
      this.resumeService.get(this.resume.id).subscribe((response: ServeResponse) => {
        if (response.model[0]) {
          this.resume = response.model[0];
          this.file = this.resume.originalBasename;
          this.fileDate = moment(this.resume.lastModified, "YYYY-MM-DD HH:mm:ss");
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
    const formData: FormData = new FormData();
    formData.append("id", this.resume.id.toString());
    formData.append("purpose", this.resume.purpose);
    formData.append("notes", this.resume.notes);
    formData.append("lastModified", this.fileDate.format("YYYY-MM-DD HH:mm:ss"));
    if (this.newFileToBeCommited) {
      let file = this.fileInputElement.files[0];
      formData.append('resume', file, file.name);
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
          data: ["There is already a resume with this purpose and extension."]
        });
      } else {
        this.bottomSheet.open(BottomSheetErrorComponent, {
          data: appErr.errorMessages
        });
      }
    } else {
      this.router.navigate(['/resume-list']);
    }
  }

  chooseFile() {
    this.fileInputElement.click();
  }

  gotoList() {
    this.router.navigate(['/resume-list']);
  }

  openDialog(event: MouseEvent): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: '250px',
      data: {message: "Are you sure you want to delete this resume and all associated revisions?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.resumeService.remove(this.resume.id).subscribe(
          result => {
            this.gotoList();
          },
          error => console.error(error)
        );
      }
    });
  }

}

