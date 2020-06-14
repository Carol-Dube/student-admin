import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

import { map } from 'rxjs/operators';

import { Students } from './students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  selectedStudents : Students;
  students: Students[];

  url = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }
  // constructor() { }

  // postStudents(stnd: Students){
  //   return this.http.post(this.url, stnd);

  // }

  getStudents(){
    return this.http.get(this.url);

  }



}
