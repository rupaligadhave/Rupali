import { Component, OnInit } from '@angular/core';
import { BackendapiService } from '../backendapi.service';

@Component({
  selector: 'app-sampletext',
  templateUrl: './sampletext.component.html',
  styleUrls: ['./sampletext.component.css']
})
export class SampletextComponent implements OnInit {
  courses:any=['BCS','BCA','BSC','BE','BCOM','MCA','MCOM'];
  fn:any="Yashwant";
  data:any;

  constructor(private mysr:BackendapiService) {

   }

  ngOnInit(): void {
   this. backeddata();
   this.senddata();
  }
  onSubmitForm(frm:any){
    console.log(frm.value);
  }
  backeddata(){
    this.mysr.getData().subscribe((res:any)=>{
      console.log(res);
    });
    (err:any)=>{
      console.log(err);
    }
  }
  senddata() {
    this.data = {
      name: 'neha',
      password:123 ,
      id:1,
      profession:'softwer developer'
    }
    this.mysr.sendaipdata(this.data).subscribe((res: any) => {
      console.log(res);
    });
    (err: any) => {
      console.log(err);
    }

  }
  
}
