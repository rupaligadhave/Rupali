import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  constructor(private http:HttpClient) { 

  }
  getData(){
    return this.http.get('http://localhost:8081/listUsers');
  }
  sendaipdata(dt:any){
//return this.http.post('http://localhost:8081/addUser',dt);
    return this.http.post('https://rupali-5f317-default-rtdb.firebaseio.com/rupali.json',dt)

  }
}
