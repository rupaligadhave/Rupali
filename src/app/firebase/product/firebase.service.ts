import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http:HttpClient) {

   }
  saveProducts(products:any[]){
    return this.http.post('https://rupali-5f317-default-rtdb.firebaseio.com/rupali.json',products);
    

   }
}
