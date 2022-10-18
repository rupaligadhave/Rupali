import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  staffData:any=[
    {name:'neha',age:25,id:12,mark:85},
    {name:'sonali',age:20,id:10,mark:90},
    {name:'priya',age:18,id:3,mark:80}
  ];

  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }
staffinfo(x:any){
  console.log(x);
  let id=x.id;
  let name=x.name;
 this.router.navigateByUrl(`staff/${id}/${name}`);

}
}
