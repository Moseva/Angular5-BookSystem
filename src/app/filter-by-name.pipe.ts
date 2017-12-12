import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

    transform(list:any[], field:string, keyword:string):any {
        if (!field || !keyword) {
            return list;
        }
        return list.filter(item=>item[field].indexOf(keyword) >= 0);
    }

}
