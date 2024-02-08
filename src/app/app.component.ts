import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoursesComponent } from './courses/courses/courses.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { DialogComponent } from './shared/dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppMaterialModule,
    HttpClientModule,
    CoursesComponent,
    DialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crud-angular';
}
