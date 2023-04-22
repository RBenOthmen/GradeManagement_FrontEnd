import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void { this.getAllStudents(); }

  public getAllStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (response: any[]) => {
        this.students = response.map(student => new Student(
          student.first_name,
          student.last_name,
          student.email,
          student.phone,
          student.image_url,
          student.level,
          student.cin,
        ));
        console.log(this.students);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  // public getAllStudents(): void {
  //   this.studentService.getAllStudents().subscribe(
  //     (response: Student[]) => {
  //       this.students = response;
  //       console.log(this.students);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
}
