import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatId',
  standalone: true
})
export class FormatIdPipe implements PipeTransform {

  transform(id: number): string {
    let formattedId = id.toString().padStart(4, '0');
    return `#${formattedId}`;
  }
}
