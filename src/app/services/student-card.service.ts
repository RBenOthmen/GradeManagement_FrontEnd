import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentCardService {

  public student?: Student;

  constructor() { }



}
