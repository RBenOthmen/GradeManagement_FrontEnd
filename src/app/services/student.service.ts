import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiServerUrl = "http://localhost:8082"

  constructor(private httpClient: HttpClient) { }

  public getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.apiServerUrl}/student/all`);
  }
}
