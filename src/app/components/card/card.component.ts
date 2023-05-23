import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { Subject } from 'src/app/models/Subject';
import { StudentCardService } from 'src/app/services/student-card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() student?: Student;

  constructor(
    private studentCardService: StudentCardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.student = this.studentCardService.student;
    console.log('onStudentSubmitted : ', this.student);
    console.log(typeof this.student);
    console.log('modules : ', this.student?.modules);
  }

  onGradeChange(subject: Subject, event: Event) {
    const newGrade = (event.target as HTMLInputElement).valueAsNumber;
    if (!isNaN(newGrade)) {
      subject.grade = newGrade;
    }
  }

  updateGrades() {
    if (this.student && this.student.modules) {
      for (const module of this.student.modules) {
        for (const subject of module.subjects) {
          const newGrade = subject.grade;
          if (!isNaN(newGrade)) {
            subject.grade = newGrade;
          }
        }
      }
      this.studentCardService.updateStudent(this.student);
      console.log('Call updateStudent');
      console.log(
        this.student.modules[0].subjects[0].name,
        this.student.modules[0].subjects[0].grade
      );
    }
  }

  deleteStudent() {
    const confirmDelete = confirm('Are you sure you want to delete?');
    if (confirmDelete) {
      if (this.student) {
        this.studentCardService
          .deleteStudent(this.student)
          .subscribe((response: Student) => {
            console.log('student deleted : ', this.student);
            this.router.navigate(['/student']);
          });
      }
    }
  }
}
