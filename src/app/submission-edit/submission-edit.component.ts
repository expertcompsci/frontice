import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionService } from '../shared/api/submissions.service';
import Submission from '../shared/models/Submission';
import ServeResponse from '../shared/models/ServeResponse';
import "reflect-metadata";
import * as moment from 'moment';

import Resume from '../shared/models/Resume';
import { ResumeService } from '../shared/api/resumes.service';

import Letter from '../shared/models/Letter';
import { LetterService } from '../shared/api/letters.service';


import JobAd from '../shared/models/JobAd';
import { JobAdService } from '../shared/api/job-ads.service';

import Employer from '../shared/models/Employer';
import { EmployerService } from '../shared/api/employers.service';



@Component({
  selector: 'app-submission-edit',
  templateUrl: './submission-edit.component.html',
  styleUrls: ['./submission-edit.component.scss']
})
export class SubmissionEditComponent implements OnInit {
  submission: Submission = new Submission;
  jsSubmittedDatetime: moment.Moment;

  resumes: Resume[];
  letters: Letter[];
  jobAds: JobAd[];
  employers: Employer[];

  resumeId: number;
  letterId: number;
  jobAdId: number;
  employerId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private resumeService: ResumeService,
    private letterService: LetterService,
    private jobAdService: JobAdService,
    private employerService: EmployerService
  ) { }

  ngOnInit() {
    this.resumeService.getAll().subscribe((response: ServeResponse) => {
      this.resumes = response.model;
    });
    this.letterService.getAll().subscribe((response: ServeResponse) => {
      this.letters = response.model;
    });
    this.jobAdService.getAll().subscribe((response: ServeResponse) => {
      this.jobAds = response.model;
    });
    this.employerService.getAll().subscribe((response: ServeResponse) => {
      this.employers = response.model;
    });

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.submissionService.get(id).subscribe((response: ServeResponse) => {
          if (response.model[0]) {
            this.submission = response.model[0];
            this.jsSubmittedDatetime = moment(this.submission.submittedDatetime, "YYYY-MM-DD HH:mm:ss");
            this.resumeId = this.submission.resumeId;
            this.letterId = this.submission.letterId;
            this.jobAdId = this.submission.jobAdId;
            this.employerId = this.submission.employerId;
          } else {
            this.gotoList();
          }
        });
      }
    });

  }

  gotoList() {
    this.router.navigate(['/submission-list']);
  }

  save(form: any) {
    form.resumeId = this.resumeId;
    form.letterId = this.letterId;
    form.jobAdId = this.jobAdId;
    form.employerId = this.employerId;
    form.submittedDatetime = this.jsSubmittedDatetime.format("YYYY-MM-DD HH:mm:ss");
    this.submissionService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  remove(id: number) {
    this.submissionService.remove(id).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
}

