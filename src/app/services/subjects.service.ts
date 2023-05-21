import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  public student?: Student;

  constructor() { }

  
}
