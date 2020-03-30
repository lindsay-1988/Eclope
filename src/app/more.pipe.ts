import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'more'
})
export class MorePipe implements PipeTransform {

  transform(contenu:string, limit?: number)
  {
    if (contenu.length == 0) return null;

    const vraiLimit =  (limit) ? limit : 50;

    return contenu.substr(0,vraiLimit);
  }

}
