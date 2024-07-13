import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isActive',
  standalone: true,
  pure: false
})
export class IsActivePipe implements PipeTransform {

  transform(users: any[]): any[] {
    return users.filter(u => u.isActive);
  }

}
