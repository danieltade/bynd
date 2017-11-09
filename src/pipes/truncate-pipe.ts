import {Pipe} from '@angular/core'

@Pipe({name: 'truncate'})
export class TruncatePipe {
    transform(value : string, args : string[]) : string {
        if(!value) {
            return;
        }
        let limit: number = 200;
        let trail: string = '...';

        return value.length > limit? value.substring(0, limit) + trail: value;
    }
}