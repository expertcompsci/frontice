import { Component, ViewChild, OnInit } from '@angular/core';
import { JobAdService } from '../shared/api/job-ads.service';
import JobAd from '../shared/models/JobAd';
import ServeResponse from '../shared/models/ServeResponse';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';

interface JobAdRow {
  id: number;
  title: string;
  companyName: string;
  DatePosted: string;
};

@Component({
  selector: 'app-jobad-list',
  templateUrl: './jobad-list.component.html',
  styleUrls: ['./jobad-list.component.scss']
})
export class JobadListComponent implements OnInit {
  @ViewChild('paginatorPos') paginator: MatPaginator;
  dataSource: MatTableDataSource<JobAd>;
  displayedColumns: string[] = ['title', 'companyName', 'postedDatetime', 'hasSubmission'];
  displayedColumnHeaders = [];
  jobAd: JobAdRow;
  jobAds: any = new Array();
  full: boolean = true;

  constructor(
    private jobAdService: JobAdService,
    private router: Router
  ) {
    this.displayedColumnHeaders['title'] = 'Title/Position';
    this.displayedColumnHeaders['companyName'] = 'Employer';
    this.displayedColumnHeaders['postedDatetime'] = 'Date Posted';
    this.displayedColumnHeaders['hasSubmission'] = 'Submitted?';
  }
  ngOnInit() {
    this.jobAdService.getAll().subscribe((response: ServeResponse) => {
      const arraySource = from(response.model);
      arraySource.subscribe(jobAd => this.jobAds.push({
        "id": jobAd.id,
        "title": jobAd.title,
        "companyName": jobAd.companyName,
        "postedDatetime": jobAd.postedDatetime + " (" + moment(jobAd.postedDatetime).fromNow() + ")",
        "hasSubmission": (jobAd.submissionCount > 0) ? "Yes" : "No"
      }));
      this.dataSource = new MatTableDataSource(this.jobAds);
      this.paginator.pageIndex = 0;
      this.dataSource.paginator = this.paginator;
    });
  }
  getCurrent() {
    const skip = this.paginator.pageSize * this.paginator.pageIndex;
    const paged = this.jobAds.filter((u, i) => i >= skip)
      .filter((u, i) => i < this.paginator.pageSize);
  }
  goTo(id: number) {
    this.router.navigate(['/jobad-edit/' + id]);
  }
}
