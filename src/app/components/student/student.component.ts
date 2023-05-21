import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { StudentCardService } from 'src/app/services/student-card.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | undefined;
  student: Student | undefined;
  public showCard: boolean = false;
  @Output() studentSubmitted = new EventEmitter<Student>();

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private studentCardService: StudentCardService
  ) {}

  ngOnInit(): void {
    this.getStudents();

    this.route.paramMap
      .pipe(
        filter((params) => params.get('id') !== null),
        map((params) => params.get('id')),
        switchMap((id) => this.studentService.getStudentById(id!))
      )
      .subscribe((student) => {
        this.student = student;
        this.showCard = true;
      });
  }

  public getStudents(): void {
    this.studentService.getAllStudents().subscribe((response: any[]) => {
      this.students = response;
    });
    console.log(this.students);
    (error: HttpErrorResponse) => {
      alert(error.message);
    };
  }

  public searchStudents(event: Event): void {
    const key = (event.target as HTMLInputElement).value;
    const results: Student[] = [];
    if (this.students) {
      for (const student of this.students) {
        if (
          student.first_name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
        ) {
          results.push(student);
        }
      }
      this.students = results;
      if (results.length === 0 || !key) {
        this.getStudents();
      }
    }
  }

  public showCardGpt(student: Student) {
    if (this.selectedStudent === student) {
      this.selectedStudent = undefined;
    } else {
      this.selectedStudent = student;
    }
  }

  public submitStudent(student: Student) {
    console.log('submitStudent : ', student);
    this.studentCardService.student = student;
    this.router.navigate(['/card', student.id]);
  }
}
