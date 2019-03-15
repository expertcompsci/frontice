import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import Submission from '../models/Submission';
import ServeResponse from '../models/ServeResponse';

@Injectable()
export class SubmissionService {
  public API = environment.serveBaseUrl;
  public GET_ALL_SUBMISSION_API = `${this.API}/get-all-submissions`;
  public GET_ONE_SUBMISSION_API = `${this.API}/get-submission`;
  public DELETE_SUBMISSION_API = `${this.API}/delete-submission`;
  public UPDATE_SUBMISSION_API = `${this.API}/update-submission`;
  public INSERT_SUBMISSION_API = `${this.API}/insert-submission`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_ALL_SUBMISSION_API);
  }

  get(id: string) {
    return this.http.get(`${this.GET_ONE_SUBMISSION_API}/${id}`);
  }

  save(submission: Submission): Observable<ServeResponse> {
    let result: Observable<ServeResponse>;
    if (submission.id) {
      result = this.http.post<ServeResponse>(this.UPDATE_SUBMISSION_API, submission);
    } else {
      result = this.http.post<ServeResponse>(this.INSERT_SUBMISSION_API, submission);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.DELETE_SUBMISSION_API}/${id.toString()}`);
  }
}