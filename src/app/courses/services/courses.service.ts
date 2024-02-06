import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { enviroment } from '../../../enviroment/enviroment';
import { Course } from '../courses/courses.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = `${enviroment.apiUrl}/posts/`;
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get<Course[]>(this.API);
  }
}
