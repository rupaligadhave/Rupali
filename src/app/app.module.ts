import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { UesrdetailsComponent } from './uesrdetails/uesrdetails.component';
import{HttpClientModule}from '@angular/common/http';
import { ParentComponent } from './data communication/parent/parent.component';
import { ChlidComponent } from './data communication/parent/chlid/chlid.component';
import { FirstComponent } from './data communication/first/first.component';
import { SecondComponent } from './data communication/second/second.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgtempcontainerComponent } from './ngtempcontainer/ngtempcontainer.component';
import { ApiComponent } from './api/api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampletextComponent } from './sampletext/sampletext.component';
import { FormdatabaseComponent } from './firebase/product/formdatabase/formdatabase.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    StudentComponent,
    ContactusComponent,
    ErrorComponent,
    UesrdetailsComponent,
    ParentComponent,
    ChlidComponent,
    FirstComponent,
    SecondComponent,
    NgtempcontainerComponent,
    ApiComponent,
    SampletextComponent,
    FormdatabaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
 
  ],
 providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
