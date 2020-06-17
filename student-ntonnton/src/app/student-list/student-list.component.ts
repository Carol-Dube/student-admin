import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../shared/students.service';
import { Students } from '../shared/students.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentsService]
})
export class StudentListComponent implements OnInit {

  constructor(public studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails(){
    this.studentsService.getStudentsDlist().subscribe((res) => {
      this.studentsService.students = Array(res) as Students[];
    });
  }


}
