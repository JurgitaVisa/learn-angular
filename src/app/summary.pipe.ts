import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value) {
            return null;
        } else {
            let actualLimit = limit ? limit : 20;
            return value.substring(0, actualLimit) + '...';
        }
    }

}