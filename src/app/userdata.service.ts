import { Injectable } from '@angular/core';
import { UseraddressService } from './useraddress.service';
import {HttpClient} from '@angular/common/http'
import {Customers} from './customer'

const customerData:Customers[]=[
  {
    "id":1,"name":"Prashant","email":"abc@gmail.com","phone":1234598
  },
  {
    "id":2,"name":"Name","email":"abcd@gmail.com","phone":123451
  },
  {
    "id":3,"name":"Game","email":"abcdefgh@gmail.com","phone":123452
  }
]

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class UserdataService {

  constructor(private userAddressService:UseraddressService , private http:HttpClient) { }
  // getUserData(){
  //   return {
  //     name:"prashant",
  //     email:"abc@gmail.com",
  //     mobile:123456,
  //     address:this.userAddressService.getUserAddress().address
  //   }
  // }
  getUserDate(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
getCustomerData(){
  return customerData;
}
}
