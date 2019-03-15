import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import JobAd from '../models/JobAd';
import ServeResponse from '../models/ServeResponse';
import MySqlDate from '../api/mySqlDate';

@Injectable()
export class JobAdService {
  public API = environment.serveBaseUrl;
  public GET_ALL_JOB_ADS_API = `${this.API}/get-all-job-ads`;
  public GET_ONE_JOB_AD_API = `${this.API}/get-job-ad`;
  public DELETE_JOB_AD_API = `${this.API}/delete-job-ad`;
  public UPDATE_JOB_AD_API = `${this.API}/update-job-ad`;
  public INSERT_JOB_AD_API = `${this.API}/insert-job-ad`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_ALL_JOB_ADS_API);
  }

  get(id: string) {
    return this.http.get(`${this.GET_ONE_JOB_AD_API}/${id}`);
  }

  save(jobAd: JobAd): Observable<ServeResponse> {
    let result: Observable<ServeResponse>;
    if (jobAd.id) {
      result = this.http.post<ServeResponse>(this.UPDATE_JOB_AD_API, jobAd);
    } else {
      result = this.http.post<ServeResponse>(this.INSERT_JOB_AD_API, jobAd);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.DELETE_JOB_AD_API}/${id.toString()}`);
  }
}