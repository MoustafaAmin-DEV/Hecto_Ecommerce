import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, args: any): any {
    let type = args.type;
    if (type === 'asc') {
      return value.sort((a: any, b: any) => {
        if (a.price_new - b.price_new > 0) {
          return 1;
        } else if (a.price_new - b.price_new < 0) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      return value.sort((a: any, b: any) => b.price_new - a.price_new);
    }
  }
}
