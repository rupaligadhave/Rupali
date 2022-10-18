import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
iteam:any;
  constructor(private test1:SharingService,private router:Router) { 
   this.test1.getMessage().subscribe((res:any)=>{
    console.log(res);
    this.iteam=res;
   }) 
  }

  ngOnInit(): void {
  }

  senddataformsecond(){
    let sub1="welcome to data form second component to first component...";
    this.test1.setMessage(sub1);
    this.router.navigate(['first']);
  }
}
