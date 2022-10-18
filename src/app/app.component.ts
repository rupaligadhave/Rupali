import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routering';
  test:boolean=true;
  ug=[
    {name:'UG Home',path:'ug/home'},
    {name:'UG Staff',path:'ug/ugstaff'},
    {name:'UG Student',path:'ug/ugstud'},
    {name:'UG Course',path:'ug/ugcourse'}
  ]
  pg=[
    {name:'PG Home',path:'pg/home'},
    {name:'PG Staff',path:'pg/pgstaff'},
    {name:'PG Student',path:'pg/pgstud'},
    {name:'PG Addimision',path:'pg/pgaddimision'}
  ]

  constructor(private router:Router){

}

  navigatetoStud(){
    if(this.test==true){
      //this.router.navigate(['stud']);
      this.router.navigateByUrl('stud');
      this.router.navigate(['staff']);


    }
    //else{
      //this.router.navigate(['error']);
   // }
  
  
  }
  intercommunictionlazyload(x:any){
   let route=x.target.value;
   console.log(route);
   this.router.navigate([route]);
  }

  intercommunictionlazyloadpg(y:any){
    let route=y.target.value;
   console.log(route);
   this.router.navigate([route]);
  }
}
