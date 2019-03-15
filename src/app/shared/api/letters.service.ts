import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import Letter from '../models/Letter';
import ServeResponse from '../models/ServeResponse';

@Injectable()
export class LetterService {
  public API = environment.serveBaseUrl;
  public GET_ALL_LETTER_API = `${this.API}/get-all-letters`;
  public GET_ONE_LETTER_API = `${this.API}/get-letter`;
  public DELETE_LETTER_API = `${this.API}/delete-letter`;
  public UPDATE_LETTER_API = `${this.API}/update-letter`;
  public INSERT_LETTER_API = `${this.API}/upload-letter`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ServeResponse> {
    return this.http.get<ServeResponse>(this.GET_ALL_LETTER_API);
  }

  get(id: number) {
    return this.http.get(`${this.GET_ONE_LETTER_API}/${id.toString()}`);
  }

  save(letter: Letter): Observable<ServeResponse> {
    let result: Observable<ServeResponse>;
    if (letter.id) {
      result = this.http.post<ServeResponse>(this.UPDATE_LETTER_API, letter);
    } else {
      result = this.http.post<ServeResponse>(this.INSERT_LETTER_API, letter);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.DELETE_LETTER_API}/${id.toString()}`);
  }
}