import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/Student';
import { StudentCardService } from 'src/app/services/student-card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() student?: Student;

  constructor(private studentCardService: StudentCardService) {}

  ngOnInit(): void {
    this.student = this.studentCardService.student;
    console.log('onStudentSubmitted : ', this.student);
    console.log(typeof this.student);
  }

  onSubmit(form: NgForm): void {
    // console.log(form.value);
    // if (this.student) {
    //   this.student.subjects = form.value;
    //   this.studentCardService.updateStudent(this.student);
    // }
  }
}
