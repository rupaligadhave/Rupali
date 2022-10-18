import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private sub=new BehaviorSubject('');
  currentdata=this.sub.asObservable();
  constructor() { }


  
  setMessage(msg:any){
    // console.log(msg);
    this.sub.next(msg);
  }

  getMessage(){
    return this.currentdata;
  }
}
