import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from '@angular/material/dialog';
// import {MatDialog, MatDialogConfig} from '@angular/material/dialog';




@Component({
  selector: 'app-studentsadd',
  templateUrl: './studentsadd.component.html',
})
export class StudentsaddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentsaddComponent>) { }

  ngOnInit(): void {

  }

  onSubmit(){

  }

  onClose(){
    this.dialogRef.close();

  }



}
