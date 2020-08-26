import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'netPrice'
})
export class NetPricePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("NetPricePipe -> transform -> value", value)

    return value+(value*0.2);
  }

}
