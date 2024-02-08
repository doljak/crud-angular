import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';

import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { CoursesService } from '../services/courses.service';
import { Course } from './courses.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppMaterialModule, DialogComponent],
  providers: [CoursesService],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses$!: Observable<Course[]>;
  finishedLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.getList().pipe(
      catchError((error) => {
        console.log(error);
        const error_404 =
          'Listagem não encontrada,\n tente novamente mais tarde.'; // TODO: abstrair mensagens
        this.errorDialog(error_404);
        return of([]);
      })
    );
    this.finishedLoading.next(coursesService.finishedLoading);
  }

  errorDialog(data: string) {
    this.dialog.open(DialogComponent, {
      data,
    });
  }
}
