import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  sampletextdata:any;
    iteam:any;
  constructor(private myser1:SharingService,private router:Router) { 
    this.myser1.getMessage().subscribe((res:any)=>{
      console.log(res);
      this.iteam=res;
    })
  }

  ngOnInit(): void {
  }
senddatafromfirst(){
  this.sampletextdata='welcome to data form first component... ';
  this.myser1.setMessage(this.sampletextdata);
  this.router.navigate(['second']);

}

}
