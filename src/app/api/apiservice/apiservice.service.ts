import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor (private http:HttpClient)
  {

   }
   getdata(){
    return this.http.get('https://reqres.in/api/users?page=2');
   }
   sendaipdata(dt:any){
    return this.http.post('https://reqres.in/api/users',dt);
   }
   updataaipdata(dt1:any){
    return this.http.put('https://reqres.in/api/users/2',dt1);
   }
   deletaaipdata(dt2:any){
    return this.http.delete('https://reqres.in/api/users/2',dt2);
   }


}

