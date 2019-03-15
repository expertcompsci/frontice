import { Component, ViewChild, OnInit } from '@angular/core';
import { ResumeService } from '../shared/api/resumes.service';
import Resume from '../shared/models/Resume';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import ServeResponse from '../shared/models/ServeResponse';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { from } from 'rxjs';
import { Router } from '@angular/router';

interface ResumeRow {
  id: number;
  revisionCount: number;
  purpose: string;
  extension: string;
  link: string;
};

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit {
  @ViewChild('paginatorPos') paginator: MatPaginator;
  dataSource: MatTableDataSource<Resume>;
  displayedColumns: string[] = ['purpose', 'latest', 'extension', 'id'];
  displayedColumnHeaders = []; // : string[] = ['Title/Position', 'Date Posted'];
  resume: ResumeRow;
  resumes: any = new Array();
  full: boolean = true;

  constructor(
    private resumeService: ResumeService,
    private router: Router
  ) {  }
  ngOnInit() {
    this.resumeService.getAll().subscribe((response: ServeResponse) => {
      const arraySource = from(response.model);
      arraySource.subscribe(resume => this.resumes.push({
        "id": resume.id,
        "revisionCount": resume.revisionCount,
        "latest": resume.latest + " (" + moment(resume.latest).fromNow() + ")",
        "purpose": resume.purpose + " (" + resume.revisionCount + ")",
        "extension": resume.extension
      }));
      this.dataSource = new MatTableDataSource(this.resumes);
      this.paginator.pageIndex = 0;
      this.dataSource.paginator = this.paginator;
    });
  }
  getCurrent() {
    const skip = this.paginator.pageSize * this.paginator.pageIndex;
    const paged = this.resumes.filter((u, i) => i >= skip)
      .filter((u, i) => i < this.paginator.pageSize);
  }
  edit(id: number) {
    this.router.navigate(['/resume-edit/' + id]);
  }

  goTo(id: number) {
    window.open(environment.serveBaseUrl + "/view-resume/" + id);
  }
}
