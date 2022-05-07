import { Injectable } from '@angular/core';
console.log("user address service file");

@Injectable({
  providedIn: 'root'
})
export class UseraddressService {

  constructor() { }
  getUserAddress(){
    return {
    address:"Delhi India"
    }
  }
}
