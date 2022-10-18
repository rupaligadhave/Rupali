import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-uesrdetails',
  templateUrl: './uesrdetails.component.html',
  styleUrls: ['./uesrdetails.component.css']
})
export class UesrdetailsComponent implements OnInit {
  username:any;
  userid:any;


  constructor(private actRoute:ActivatedRoute) {
    //  to fecth the route data we have two options

    console.log(this.actRoute.snapshot.params);
    this.userid=this.actRoute.snapshot.params['id'];
    this.username=this.actRoute.snapshot.params['name'];

    //2.Route map(obserrvable value)
    console.log(this.actRoute.paramMap);
    this.actRoute.paramMap.subscribe((res:any)=>{
      console.log(res);
       this.userid=res.params.id;
       this.username=res.params.name;
    })

   }

  ngOnInit(): void {
   
  }

}
