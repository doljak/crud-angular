import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: '', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CoursesComponent],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
