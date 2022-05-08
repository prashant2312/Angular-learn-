

import { BusbookingService } from './busbooking.service';
import { UseraddressService } from './useraddress.service';
import { UserdataService } from './userdata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipePipe } from './custompipe.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Agent1Component } from './agent1/agent1.component';
import { Agent2Component } from './agent2/agent2.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component'

@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    Agent1Component,
    Agent2Component,
    CustomerdetailsComponent,
    EmployeeComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
