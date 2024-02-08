import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { enviroment } from '../../../enviroment/enviroment';
import { Course } from '../courses/courses.model';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = `${enviroment.apiUrl}`;
  finishedLoading: boolean = false;
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get<Course[]>(`${this.API}/courses`).pipe(
      first(),
      tap((courses) => {
        this.finishedLoading = true;
        return courses;
      })
    );
  }
}
