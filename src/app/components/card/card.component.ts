import { Component, Input, OnInit } from '@angular/core';
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
  }
}
