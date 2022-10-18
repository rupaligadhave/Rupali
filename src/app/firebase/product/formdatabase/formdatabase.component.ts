import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-formdatabase',
  templateUrl: './formdatabase.component.html',
  styleUrls: ['./formdatabase.component.css']
})
export class FormdatabaseComponent implements OnInit {

  constructor(private mysr1:FirebaseService) { }
   DataTitle='Table Product';
    products=[{
      id:'A1',
      name:'Spl+',
      Price:89800

    },
    {
     id:'A2',
      name:'Passtion',
      Price:92000
    },
    {
      id:'A3',
      name:'super-spl',
      Price:94000
    }
  ]
  onAddProduct(id:{value:any;},name:{value:any;},Price:{value:any;}){
    this. products.push({
      id :id.value,
      name :name.value,
      Price :Price.value

    })
  }
  onSaveProduct(){
    this.mysr1.saveProducts(this.products).subscribe((res:any)=>{
      console.log(res);
    });
    (err:any)=>{
      console.log(err);
    }
    }
    onFetchProduct(){
    }
    onDeleteProduct(id:any){
      if(confirm("Do you want to delete this product")){
        this.products.splice(id,1)
      }
      }

  ngOnInit(): void {
  }

}
