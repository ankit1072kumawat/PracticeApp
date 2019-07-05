import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtered'
})
export class FilteredPipe implements PipeTransform {

  transform(value: any, filteredStatus: string, name: string): any {
    if (value.len == 0 || filteredStatus === '') {
      console.log("asdasdads",value)
      // console.log("asdasdads",filteredStatus)
      return value;
    }
    let resultArray=[];
    for(const item of value) {

      if(item[name].includes(filteredStatus) ) {
        console.log(item[name])
        resultArray.push(item);
      }

    }
    // value.filter(function (data) {
    //   if (data[name] == filteredStatus) {
    //     resultArray.push(data);
    //   }
    // });
     return resultArray;
  }

}