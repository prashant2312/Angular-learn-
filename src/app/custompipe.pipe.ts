import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    console.log(value,gender);
    
  if( gender=='Male'){
    return "MR. " + value;
  }
  else{
    return "MRS. "+value;
  }
    return null;
  }

}
