import { Component, Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AppMaterialModule } from '../app-material/app-material.module';

@Component({
  selector: 'dialog.component',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, AppMaterialModule],
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
