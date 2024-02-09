import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true,
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'front-end':
        return 'favorite';
      case 'back-end':
        return 'sort';
      case 'database':
        return 'dataset';
      default:
        return 'grade';
    }
  }
}
