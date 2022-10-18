import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }

  getPeoples(): Observable<HttpRequest<any>> {
    const url = 'https://swapi.dev/api/people/';
    return this.http.get<HttpRequest<any>>(url);
  }

  getPeoplesId(id: number): Observable<HttpRequest<any>> {
    const url = `https://swapi.dev/api/people/${id}`;
    return this.http.get<HttpRequest<any>>(url);
  }

  getFilmsId(id: number): Observable<HttpRequest<any>> {
    const url = `https://swapi.dev/api/films/${id}`;
    return this.http.get<HttpRequest<any>>(url);
  }
}
