import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import "reflect-metadata";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import ServeResponse from '../shared/models/ServeResponse';
import * as moment from 'moment';

@Component({
  selector: 'app-home-front',
  templateUrl: './home-front.component.html',
  styleUrls: ['./home-front.component.scss']
})
export class HomeFrontComponent implements OnInit {
  public API = environment.serveBaseUrl;
  public GET_OVERVIEW_API = `${this.API}/get-overview`;
  public GET_LATEST_SUBMISSIONS_API = `${this.API}/get-latest-submissions`;
  public GET_LATEST_EVENTS_API = `${this.API}/get-latest-events/5`;
  public GET_LATEST_EVENTS_SUMMARY_API = `${this.API}/get-latest-events-summary/0`;
  public GET_DB_STATUS_API = `${this.API}/get-db-status`;
  sub: Subscription;

  isTestDb: boolean = false;
  dbStatus: any;
  overview: any;
  latest: any;
  latestSummary: any;
  latestSubmissions: any;
  resumeAdded: moment.Moment;
  letterAdded: moment.Moment;
  employerAdded: moment.Moment;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.getOverview().subscribe((response: ServeResponse) => {
      this.overview = response.model[0];
      this.resumeAdded =  moment(response.model[0].latestResumeAddedDatetime, "YYYY-MM-DD HH:mm:ss");
      this.letterAdded =  moment(response.model[0].latestLetterAddedDatetime, "YYYY-MM-DD HH:mm:ss");
      this.employerAdded = moment(response.model[0].latestEmployerAddedDatetime, "YYYY-MM-DD HH:mm:ss");
    });
    this.sub = this.getLatest().subscribe((response: ServeResponse) => {
      this.latest = response.model;
    });
    this.sub = this.getLatestSubmissions().subscribe((response: ServeResponse) => {
      this.latestSubmissions = response.model;
    });
    this.sub = this.getLatestSummary().subscribe((response: ServeResponse) => {
      this.latestSummary = response.model;
    });
    this.sub = this.getDbStatus().subscribe((response: ServeResponse) => {
      this.dbStatus = response.model[0];
      console.log(this.dbStatus);
      this.isTestDb = (this.dbStatus.databaseName.indexOf('test') != -1);
    });
  }

  getOverview(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_OVERVIEW_API);
  }
  getLatest(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_LATEST_EVENTS_API);
  }
  getLatestSubmissions(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_LATEST_SUBMISSIONS_API);
  }
  getLatestSummary(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_LATEST_EVENTS_SUMMARY_API);
  }
  getDbStatus(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_DB_STATUS_API);
  }

}
