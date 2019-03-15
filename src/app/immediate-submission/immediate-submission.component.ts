import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Router } from '@angular/router';
import { BottomSheetErrorComponent } from '../bottom-sheet-error/bottom-sheet-error.component';
import AppErrorInterpreter from '../shared/api/app-error-interpreter';
import { ResumeService } from '../shared/api/resumes.service';
import { ImmediateSubmissionService } from '../shared/api/immediate-submission.service';
import Common from '../shared/models/Common';
import Resume from '../shared/models/Resume';
import ServeResponse from '../shared/models/ServeResponse';
import * as moment from 'moment';


@Component({
  selector: 'app-immediate-submission',
  templateUrl: './immediate-submission.component.html',
  styleUrls: ['./immediate-submission.component.scss']
})
export class ImmediateSubmissionComponent implements OnInit {
  jobBoards: string[] = Common.jobBoards;
  resumes: Resume[];
  resumeId: number;
  mustBeUniqueError: boolean = false;
  mustBeUrlError: boolean = false;

  constructor(
    private router: Router,
    private resumeService: ResumeService,
    private immediateSubmissionService: ImmediateSubmissionService,
    private bottomSheet: MatBottomSheet,
  ) {
  }

  ngOnInit() {
    this.resumeService.getAll().subscribe((response: ServeResponse) => {
      this.resumes = response.model;
    });
  }
  save(form: any) {
    this.mustBeUniqueError = false;
    this.mustBeUrlError = false;
    form.resumeId = this.resumeId;
    this.immediateSubmissionService.save(form).subscribe(
      (result: ServeResponse) => {
        let appErr = new AppErrorInterpreter(result);
        if (!appErr.isOk()) {
          this.bottomSheet.open(BottomSheetErrorComponent, {
            data: appErr.errorMessages
          });
        } else {
          this.router.navigate(['/submission-list']);
        }
      },
      error => console.error(error)
    );
  }

  gotoList() {
    this.router.navigate(['/submission-list']);
  }
}
