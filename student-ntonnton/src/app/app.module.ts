import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsaddComponent } from './students/add/studentsadd.component.';



// THIS IS THE ROUTERS
const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student-list/:id', component: StudentListComponent },
  { path: 'student', component: StudentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentListComponent,
    StudentsaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[StudentsaddComponent]
})
export class AppModule { }
