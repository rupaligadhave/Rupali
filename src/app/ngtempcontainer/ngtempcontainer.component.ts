import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtempcontainer',
  templateUrl: './ngtempcontainer.component.html',
  styleUrls: ['./ngtempcontainer.component.css']
})
export class NgtempcontainerComponent implements OnInit {
checkflage:boolean=false;
color:any=['red','yellow','pink','blue'];
  constructor() { }

  ngOnInit(): void {
  }

}
