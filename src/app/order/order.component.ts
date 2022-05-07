import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.removeItem("username"));
    console.log(sessionStorage.getItem("email"));
    console.log(sessionStorage.getItem("email"));
    console.log(JSON.parse(localStorage.getItem("user")));
  }

}
