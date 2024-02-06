import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/courses.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'http://localhost:3000/posts/';
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get<Course[]>(this.API);
  }
}
