import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import Resume from '../models/Resume';
import ServeResponse from '../models/ServeResponse';

@Injectable()
export class ResumeService {
  public API = environment.serveBaseUrl;
  public GET_ALL_RESUME_API = `${this.API}/get-all-resumes`;
  public GET_ONE_RESUME_API = `${this.API}/get-resume`;
  public DELETE_RESUME_API = `${this.API}/delete-resume`;
  public UPDATE_RESUME_API = `${this.API}/update-resume`;
  public INSERT_RESUME_API = `${this.API}/upload-resume`;
  public COMMIT_RESUME_API = `${this.API}/commit-resume`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_ALL_RESUME_API);
  }

  get(id: number) {
    return this.http.get(`${this.GET_ONE_RESUME_API}/${id.toString()}`);
  }

  save(resume: Resume): Observable<ServeResponse> {
    let result: Observable<ServeResponse>;
    if (resume.id) {
      result = this.http.post<ServeResponse>(this.UPDATE_RESUME_API, resume);
    } else {
      result = this.http.post<ServeResponse>(this.INSERT_RESUME_API, resume);
    }
    return result;
  }

  commit(resume: Resume): Observable<ServeResponse> {
    let result: Observable<ServeResponse>;
    return result = this.http.post<ServeResponse>(this.COMMIT_RESUME_API, resume);
  }

  remove(id: number) {
    return this.http.delete(`${this.DELETE_RESUME_API}/${id.toString()}`);
  }
}