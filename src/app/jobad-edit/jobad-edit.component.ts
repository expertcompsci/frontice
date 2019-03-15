import { Component,OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import "reflect-metadata";
import { BottomSheetErrorComponent } from '../bottom-sheet-error/bottom-sheet-error.component';
import AppErrorInterpreter from '../shared/api/app-error-interpreter';
import { EmployerService } from '../shared/api/employers.service';
import { JobAdService } from '../shared/api/job-ads.service';
import Common from '../shared/models/Common';
import Employer from '../shared/models/Employer';
import JobAd from '../shared/models/JobAd';
import ServeResponse from '../shared/models/ServeResponse';
import * as moment from 'moment';

@Component({
  selector: 'app-jobad-edit',
  templateUrl: './jobad-edit.component.html',
  styleUrls: ['./jobad-edit.component.scss']
})
export class JobadEditComponent implements OnInit {
  jobAd: JobAd;
  jsPostedDatetime: moment.Moment;
  employers: Employer[];
  employerId: number;
  jobBoards: string[] = Common.jobBoards;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobAdService: JobAdService,
    private employerService: EmployerService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.employerService.getAll().subscribe((response: ServeResponse) => {
      this.employers = response.model;
    });
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.jobAdService.get(id).subscribe((response: ServeResponse) => {
          if (response.model[0]) {
            this.jobAd = response.model[0];
            this.jsPostedDatetime = moment(this.jobAd.postedDatetime, "YYYY-MM-DD HH:mm:ss");
            this.employerId = this.jobAd.employerId;
          } else {
            this.gotoList();
          }
        });
      }
    });

  }

  gotoList() {
    this.router.navigate(['/jobad-list']);
  }

  save(form: any) {
    form.employerId = this.employerId;
    form.postedDatetime = this.jsPostedDatetime.format("YYYY-MM-DD HH:mm:ss");
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
      }
    );
  }

  remove(id: number) {
    this.jobAdService.remove(id).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
}

