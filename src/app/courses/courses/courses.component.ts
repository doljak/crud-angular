import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';
import { Course } from './courses.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppMaterialModule],
  providers: [CoursesService],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses$!: Observable<Course[]>;
  finishedLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.getList();
    this.finishedLoading.next(coursesService.finishedLoading);
  }
}
