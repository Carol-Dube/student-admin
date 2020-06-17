import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../shared/students.service';
import { Students } from '../shared/students.model';

import { StudentsaddComponent } from './add/studentsadd.component.';


import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {

  constructor(public studentsService: StudentsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshStudentList();
  }

  refreshStudentList(){
    this.studentsService.getStudents().subscribe((res) => {
      this.studentsService.students = res as Students[];
      console.log(res);
    });


  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    this.dialog.open(StudentsaddComponent, dialogConfig);

  }
  viewStudent(id){


    console.log(id);

  }

  deleteAStudent(id){
      this.studentsService.deleteStudent(id).subscribe((res) => {
      this.studentsService.students = Array(res) as Students[];
      window.location.reload();
    });

  }


}
