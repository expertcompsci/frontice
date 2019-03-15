import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import Employer from '../models/Employer';
import ServeResponse from '../models/ServeResponse';

@Injectable()
export class EmployerService {
  public API = environment.serveBaseUrl;
  public GET_ALL_EMPLOYERS_API = `${this.API}/get-all-employers`;
  public GET_ONE_EMPLOYER_API = `${this.API}/get-employer`;
  public DELETE_EMPLOYER_API = `${this.API}/delete-employer`;
  public UPDATE_EMPLOYER_API = `${this.API}/update-employer`;
  public INSERT_EMPLOYER_API = `${this.API}/insert-employer`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_ALL_EMPLOYERS_API);
  }

  get(id: string) {
    return this.http.get(`${this.GET_ONE_EMPLOYER_API}/${id}`);
  }

  save(employer: Employer): Observable<ServeResponse> {
    let result: Observable<ServeResponse>;
    if (employer.id) {
      result = this.http.post<ServeResponse>(this.UPDATE_EMPLOYER_API, employer);
    } else {
      result = this.http.post<ServeResponse>(this.INSERT_EMPLOYER_API, employer);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.DELETE_EMPLOYER_API}/${id.toString()}`);
  }
}