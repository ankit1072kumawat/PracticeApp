// import { Pipe, PipeTransform } from '@angular/core';
// import { CustomerhttpService } from './customerhttp.service';

// @Pipe({
//   name: 'filtered'
// })
// export class FilteredPipe implements PipeTransform {

//   transform(value: any[], filteredStatus : string, name : string): any {  
//     if (!value) return [];
//     if (!name || name.length == 0) return value;
//     return value.filter(() => {
//     return filteredStatus.toLowerCase().indexOf(name.toLowerCase()) !=-1});
//   }
//   // transform(value: any, filteredStatus: string, name: string): any {
//   //   if ( !value  || filteredStatus == '') {
//   //     console.log("asdasdads",value)

//   //     return value;
//   //   }
//   //   let resultArray=[];
//   //   for(const item of value) {

//   //     if(item[name].includes(filteredStatus) ) {
//   //       console.log(item[name])
//   //       resultArray.push(item);
//   //     }

//   //   }
//   //   // value.filter(function (data) {
//   //   //   if (data[name] == filteredStatus) {
//   //   //     resultArray.push(data);
//   //   //   }
//   //   // });
//   //    return resultArray;
//   // }

// }

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filtered'
})

export class FilteredPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (searchText == '') {
      return items;
    }

    let resultArray=[];
    for (let item of items) {
      if (item.value.name.toLowerCase().includes(searchText.toLowerCase())) {
        console.log(item.value.name)
        resultArray.push(item);
      }
    }

    return resultArray;

  }
  // searchText = searchText.toLowerCase();

  // return items.filter(it => {
  //   return it.toLowerCase().includes(searchText);
  // });

}