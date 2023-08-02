import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import * as Types from './types';
import  { Nav } from './nav';

@Injectable({
  providedIn: 'root'
})

export class Service {

  private _header$ = new BehaviorSubject<Types.Header>({name:"",address:"",phone:"",email:"",photo:""});
  private _about$ = new BehaviorSubject<Types.About>({});
  private _experience$ = new BehaviorSubject<Types.Experience>({});
  private _skills$ = new BehaviorSubject<Types.Skills>({});
  private _hobby$ = new BehaviorSubject<Types.Hobby>({});
  private _portfolio$ = new BehaviorSubject<Types.Portfolio>({});
  nav: Types.Menu[] = Nav;

  constructor(
    private http: HttpClient ) {  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getData(dataUrl:string): Observable<any> { return this.http.get(dataUrl, this.httpOptions); }

  set setHeader(header: Types.Header) { this._header$.next(header); }
  set setAbout(about: Types.About) { this._about$.next(about); }
  set setExperience(experience: Types.Experience) { this._experience$.next(experience); }
  set setSkills(skills: Types.Skills) { this._skills$.next(skills); }
  set setHobby(hobby: Types.Hobby) { this._hobby$.next(hobby); }
  set setPortfolio(portfolio: Types.Portfolio) { this._portfolio$.next(portfolio); }

  get getHeader(): Observable<Types.Header> { return this._header$.asObservable(); }
  get getAbout(): Observable<Types.About> { return this._about$.asObservable(); }
  get getExperience(): Observable<Types.Experience> { return this._experience$.asObservable(); }
  get getSkills(): Observable<Types.Skills> { return this._skills$.asObservable(); }
  get getHobby(): Observable<Types.Hobby> { return this._hobby$.asObservable(); }
  get getPortfolio(): Observable<Types.Portfolio> { return this._portfolio$.asObservable(); }

}
