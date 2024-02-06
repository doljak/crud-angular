import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/courses.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getList(): Course[] {
    return [
      {
        _id: '1',
        name: 'Angular',
        category: 'Front end a',
      },
    ];
  }
}
