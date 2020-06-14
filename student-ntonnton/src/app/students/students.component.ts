import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../shared/students.service';
import { Students } from '../shared/students.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {

  constructor(public studentsService: StudentsService) { }

  ngOnInit(): void {
    this.refreshStudentList();
  }

  refreshStudentList(){
    this.studentsService.getStudents().subscribe((res) => {
      this.studentsService.students = res as Students[];
      console.log(res);
    });


  }

  onEdit(){

  }

}
