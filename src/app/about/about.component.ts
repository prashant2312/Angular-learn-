import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {  
name:any
id:any
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      console.log(param);      
      // this.name=param['name']
      // this.id=param['id']
    })
    this.route.queryParams.subscribe(param=>{
      console.log(param)
      this.name=param['name']
      this.id=param['id']
    })
  }
  alerts: Alert[];

  constructor(private route:ActivatedRoute) {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}


