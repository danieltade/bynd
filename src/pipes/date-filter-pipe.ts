import {Pipe} from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'dateFilter'})
export class DateFilterPipe {
    transform(value : any, args : string[]) : any {
        if(!value) {
            return;
        }
        return moment(value).format('MMM DD YYYY');
    }
}