import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { RouterOutlet } from '@angular/router';
import { Course } from './courses.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterOutlet, AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Front end',
    },
  ];

  displayedColumns = ['name', 'category'];

  constructor() {}
}
