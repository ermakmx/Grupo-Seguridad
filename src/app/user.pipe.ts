import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(modules: any[], searchValue: string): any[] {
    if(!modules) return [];
    if(!searchValue || searchValue == '') return modules;

    return modules.filter(user => user.nombre.toLowerCase().includes(searchValue.toLowerCase()));
  }

}
