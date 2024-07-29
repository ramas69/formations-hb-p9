import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(values:string[], terms:string): string[] {
    return values.filter(value=> value.toLowerCase().includes(terms.toLowerCase()) );
  }

}
