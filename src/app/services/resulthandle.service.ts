import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Result } from '../model/result';
import { Resultclass } from '../model/resultclass';
@Injectable({
  providedIn: 'root',
})
export class ResulthandleService {
  baseUrl = 'http://localhost:8080/api/result';
  editUrl = 'http://localhost:8080/api/result';
  constructor(private http: HttpClient) {}
  private Url = 'http://localhost:8080/api/result'; // URL to web api
  users() {
    return this.http.get(this.baseUrl);
  }

  addResult(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteResult(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getUserById(id: any) : Observable<Resultclass>{
    return this.http.get<Resultclass>(`${this.baseUrl}/${id}`);
  }
  updateResult(id: any, data: any) {
    return this.http.put(`${this.editUrl}/${id}`, data);
  }
}
