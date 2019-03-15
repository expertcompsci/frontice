import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetErrorComponent } from '../bottom-sheet-error/bottom-sheet-error.component';
import AppErrorInterpreter from '../shared/api/app-error-interpreter';

import { Router } from '@angular/router';
import { EmployerService } from '../shared/api/employers.service';
import { JobAdService } from '../shared/api/job-ads.service';
import Common from '../shared/models/Common';
import Employer from '../shared/models/Employer';
import JobAd from '../shared/models/JobAd';
import ServeResponse from '../shared/models/ServeResponse';
import * as moment from 'moment';

@Component({
  selector: 'app-jobad-create',
  templateUrl: './jobad-create.component.html',
  styleUrls: ['./jobad-create.component.scss']
})
export class JobadCreateComponent implements OnInit {
  jobAd: JobAd;
  employers: Employer[];
  employerId: number;
  jsPostedDatetime: moment.Moment;


  jobBoards: string[] = Common.jobBoards;

  constructor(
    private router: Router,
    private jobAdService: JobAdService,
    private employerService: EmployerService,
    private bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit() {
    this.jobAd = new JobAd();
    this.jsPostedDatetime = moment();
    this.employerService.getAll().subscribe((response: ServeResponse) => {
      console.log(response);
      this.employers = response.model;
    });

  }
  save(form: any) {
    form.employerId = this.employerId;
    form.postedDatetime = this.jsPostedDatetime.format("YYYY-MM-DD HH:mm:ss")
    this.jobAdService.save(form).subscribe(
      (result: ServeResponse) => {
        let appErr = new AppErrorInterpreter(result);
        if (!appErr.isOk()) {
          this.bottomSheet.open(BottomSheetErrorComponent, {
            data: appErr.errorMessages
          });
        } else {
          this.router.navigate(['/jobad-list']);
        }
      },
      error => console.error(error)
    );
  }

  gotoList() {
    this.router.navigate(['/jobad-list']);
  }

}
