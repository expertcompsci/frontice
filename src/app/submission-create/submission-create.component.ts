import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import ServeResponse from '../shared/models/ServeResponse';

import Submission from '../shared/models/Submission';
import { SubmissionService } from '../shared/api/submissions.service';

import Resume from '../shared/models/Resume';
import { ResumeService } from '../shared/api/resumes.service';

import Letter from '../shared/models/Letter';
import { LetterService } from '../shared/api/letters.service';

import JobAd from '../shared/models/JobAd';
import { JobAdService } from '../shared/api/job-ads.service';

import Employer from '../shared/models/Employer';
import { EmployerService } from '../shared/api/employers.service';
import * as moment from 'moment';


@Component({
  selector: 'submission-create',
  templateUrl: './submission-create.component.html',
  styleUrls: ['./submission-create.component.scss']
})
export class SubmissionCreateComponent implements OnInit {
  submission: Submission;
  resumes: Resume[];
  letters: Letter[];
  jobAds: JobAd[];
  employers: Employer[];
  jsSubmittedDatetime: moment.Moment;
  resumeId: number;
  letterId: number;
  jobAdId: number;
  employerId: number;

  constructor(
    private router: Router,
    private submissionService: SubmissionService,
    private resumeService: ResumeService,
    private letterService: LetterService,
    private jobAdService: JobAdService,
    private employerService: EmployerService
  ) { }

  ngOnInit() {
    this.submission = new Submission();
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
  }

  save(form: any) {
    form.resumeId = this.resumeId;
    form.jobAdId = this.jobAdId;
    form.employerId = this.employerId;
    form.letterId = this.letterId;
    form.submittedDatetime = this.jsSubmittedDatetime.format("YYYY-MM-DD HH:mm:ss");
    this.submissionService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
  gotoList() {
    this.router.navigate(['/submission-list']);
  }

}
