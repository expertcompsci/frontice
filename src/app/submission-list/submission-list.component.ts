import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { SubmissionService } from '../shared/api/submissions.service';
import ServeResponse from '../shared/models/ServeResponse';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';

interface SubmissionsRow {
  id: number;
  position: string;
  companyName: string;
  submittedDatetime: string;
  isRejected: string;
};

@Component({
  selector: 'app-Submission-list',
  templateUrl: './Submission-list.component.html',
  styleUrls: ['./Submission-list.component.scss']
})

export class SubmissionListComponent implements OnInit {
  @ViewChild('paginatorPos') paginator: MatPaginator;
  dataSource: MatTableDataSource<SubmissionsRow>;
  displayedColumns: string[] = ['position', 'companyName', 'submittedDatetime', 'isRejected'];
  displayedColumnHeaders = [];
  submissionRow: SubmissionsRow;
  submissionRows: SubmissionsRow[] = new Array();
  submissions: Observable<any>;
  full: boolean = true;
  showRejected: boolean = true;

  constructor(
    private SubmissionsService: SubmissionService,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.displayedColumnHeaders['position'] = 'Position Applied For';
    this.displayedColumnHeaders['companyName'] = 'Employer';
    this.displayedColumnHeaders['submittedDatetime'] = 'When';
    this.displayedColumnHeaders['fromNow'] = '';
    this.displayedColumnHeaders['isRejected'] = 'Rejected?';
  } 

  ngOnInit() {
    this.SubmissionsService.getAll().subscribe((response: ServeResponse) => {
      this.submissions = from(response.model);
      this.loadList();
    });
  }

  loadList() {
    this.submissionRows = new Array();
    this.submissions.subscribe(submissionRow => {
      if(this.showRejected || !submissionRow.isRejected) {
        this.submissionRows.push({
          "id": submissionRow.id,
          "position": submissionRow.position,
          "companyName": submissionRow.companyName,
          "submittedDatetime": submissionRow.submittedDatetime + " (" + moment(submissionRow.submittedDatetime).fromNow() + ")",
          "isRejected": ((submissionRow.isRejected) ? "Yes" : "No")
        })
      }
    });
    this.dataSource = new MatTableDataSource(this.submissionRows);
    this.paginator.pageIndex = 0;
    this.dataSource.paginator = this.paginator;
    this.changeDetectorRefs.detectChanges();
  }

  getCurrent() {
    const skip = this.paginator.pageSize * this.paginator.pageIndex;
    const paged = this.submissionRows.filter((u, i) => i >= skip)
      .filter((u, i) => i < this.paginator.pageSize);
  }
  goTo(id: number) {
    this.router.navigate(['/submission-edit/' + id]);
  }
}
