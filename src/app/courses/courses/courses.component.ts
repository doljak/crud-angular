import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Observable, first, tap } from 'rxjs';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';
import { Course } from './courses.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterOutlet, AppMaterialModule],
  providers: [CoursesService],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  $courses: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.$courses = this.coursesService.getList().pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }
}
