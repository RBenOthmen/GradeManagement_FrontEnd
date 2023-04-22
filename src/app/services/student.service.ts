import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private httpClient: HttpClient) {}

  private apiServerUrl = 'http://localhost:8082';

  getStudentById(id: string): Observable<Student | undefined> {
    const apiUrl = `${this.apiServerUrl}/student/find/${id}`;
    console.log('API URL:', apiUrl);
    return this.httpClient
      .get<Student | undefined>(apiUrl)
      .pipe(catchError(this.handleError));
  }

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

  public getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.apiServerUrl}/student/find`);
  }
}
