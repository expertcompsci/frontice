import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { EmployerService } from '../shared/api/employers.service';
import Employer from '../shared/models/Employer';
import ServeResponse from '../shared/models/ServeResponse';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';


interface EmployerRow {
  id: number;
  companyName: string;
  siteUrl: string;
};

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.scss']
})
export class EmployerListComponent implements OnInit {
  @ViewChild('paginatorPos') paginator: MatPaginator;
  dataSource: MatTableDataSource<Employer>;
  displayedColumns: string[] = ['companyName', 'siteUrl', 'latestJobAd'];
  displayedColumnHeaders = [];
  employer: EmployerRow;
  employers: any = new Array();
  full: boolean = true;

  constructor(
    private employerService: EmployerService,
    private router: Router
  ) {
    this.displayedColumnHeaders['companyName'] = 'Company Name';
    this.displayedColumnHeaders['siteUrl'] = 'URL';
    this.displayedColumnHeaders['latestJobAd'] = 'Latest Job Ad'
  }

  ngOnInit() {
    this.employerService.getAll().subscribe((response: ServeResponse) => {
      const arraySource = from(response.model);
      arraySource.subscribe((employer: Employer) => this.employers.push({
        "id": employer.id,
        "companyName": employer.companyName,
        "siteUrl": employer.siteUrl,
        "latestJobAd":  employer.latestJobAd == null ? "not yet" : moment(employer.latestJobAd, "YYYY-MM-DD HH:mm:ss").fromNow()
      }));
      this.dataSource = new MatTableDataSource(this.employers);
      this.paginator.pageIndex = 0;
      this.dataSource.paginator = this.paginator;
    });
  }

  getCurrent() {
    const skip = this.paginator.pageSize * this.paginator.pageIndex;
    this.employers.filter((u, i) => i >= skip)
      .filter((u, i) => i < this.paginator.pageSize);
  }

  goTo(id: number) {
    this.router.navigate(['/employer-edit/' + id]);
  }
}
