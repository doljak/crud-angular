import { Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: '', component: CoursesComponent },
];
