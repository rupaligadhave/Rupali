import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 postData:any;

  constructor(private test:UserdetailsService,private router:Router) { }

  ngOnInit(): void {
   this.userdetailsForm() ;
  }

  userdetailsForm(){
    this.test. getUserDetalis().subscribe((res:any)=>{
      console.log(res);
      this.postData=res;
    });
    (err:any)=>{
      console.log(err);
    }
  }
  userdetails(a:any){
      
    console.log(a);

  
  let id=a.id;
  let name=a.name;
 this.router.navigateByUrl(`userdetails/${id}/${name}`);
 //this.router.navigateByUrl(`userdetails/${id}`);
 
 

  }
}
