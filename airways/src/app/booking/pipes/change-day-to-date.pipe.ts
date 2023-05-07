import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'changeDayToDate',
})
export default class ChangeDayToDatePipe implements PipeTransform {
  transform(dateString: string | undefined, type?: string, count?: number) {
    if (!dateString) return 0;

    const date = new Date(dateString);

    if (type === 'add') {
      return date.setDate(date.getDate() + (count ?? 1));
    }
    return date.setDate(date.getDate() - (count ?? 1));
  }
}
