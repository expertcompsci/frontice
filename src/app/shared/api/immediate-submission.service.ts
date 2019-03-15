import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import Application from '../models/Application';
import ServeResponse from '../models/ServeResponse';

@Injectable()
export class ImmediateSubmissionService {
  public API = environment.serveBaseUrl;
  public INSERT_APPLICATION_API = `${this.API}/insert-application`;

  constructor(private http: HttpClient) { }

  save(submission: Application): Observable<ServeResponse> {
    let result: Observable<ServeResponse>;
    result = this.http.post<ServeResponse>(this.INSERT_APPLICATION_API, submission);
    return result;
  }

}