import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http:HttpClient) {

   }
   getUserDetalis()
   {
     return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
}
