import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from './apiservice/apiservice.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data: any;
  constructor(private api: ApiserviceService) {

  }
  ngOnInit(): void {
    this.getdata();
    this.senddata();
    this.updatadata();
    this.deletedata();
  }
  getdata() {
    this.api.getdata().subscribe((res: any) => { console.log(res) });
    (err: any) => {
      console.log(err);
    }
  }
  senddata() {
    this.data = {
      name: 'neha',
      job: 'softwer developer',
    }
    this.api.sendaipdata(this.data).subscribe((res: any) => {
      console.log(res);
    });
    (err: any) => {
      console.log(err);
    }

  }
  updatadata() {
    this.data = {
      name: 'sonali',
      job: 'softwer developer'
    }
    this.api.updataaipdata(this.data).subscribe((res: any) => {
      console.log(res);
    });
    (err: any) => {
      console.log(err);
    }
  }
  deletedata() {
    this.data = {
      
      name: 'sonali',
      job: 'softwer developer'
      
    }
    this.api.deletaaipdata(this.data).subscribe((res: any) => {
      console.log('data deleted successfully');
      console.log(res);
    });
    (err: any) => {
      console.log(err);
    }
  }
}
