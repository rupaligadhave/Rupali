import { Component, OnInit, ViewChild } from '@angular/core';
import { ChlidComponent } from './chlid/chlid.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataformparenttochild:any;
 dataformchildtoparent:any;

 @ViewChild(ChlidComponent) childvar:any;
  constructor() { 
    this.dataformparenttochild="welcome to data form parent componet to child component";
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.childvar.noramlMethodofChild();
    console.log(this.childvar.dataformchildtoparent);
  }

  emitDataFromchild(ev:any){

    console.log("welcome to custom event..");
    console.log(ev);
    this.dataformchildtoparent=ev;
  }
}
