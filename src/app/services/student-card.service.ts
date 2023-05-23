import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentCardService {
  private apiServerUrl = 'http://localhost:8082';
  // http://localhost:8082/student/update
  public student?: Student;

  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  updateStudent(student: Student): Observable<Student> {
    console.log('updateStudent : ', student);
    return this.httpClient
      .put<Student>(`${this.apiServerUrl}/student/update`, student)
      .pipe(catchError(this.handleError));
  }

  deleteStudent(student: Student): Observable<Student> {
    console.log('deleteStudent : ', student);
    console.log("delete path: ", `${this.apiServerUrl}/student/delete/${student.id}`);
    return this.httpClient
      .delete<Student>(`${this.apiServerUrl}/student/delete/${student.id}`)
      .pipe(catchError(this.handleError));
  }
}
