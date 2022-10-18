import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chlid',
  templateUrl: './chlid.component.html',
  styleUrls: ['./chlid.component.css']
})
export class ChlidComponent implements OnInit {

  @Input() parentData:any;
  @Output() childevent=new EventEmitter<any>();
  dataformchildtoparent:any;
  constructor() {
    this.dataformchildtoparent="welcome to data form child componet to parent component";
   }

  ngOnInit(): void {
  }
  senddataformparent(){
    console.log('welcome ');
    this.childevent.emit(this.dataformchildtoparent);
  }

  noramlMethodofChild(){
    console.log("welcome event from child component");
  }

}
