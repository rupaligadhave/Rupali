import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoService } from './comman service/info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let roleId=3;
      if(roleId==3)
      {
        return true;
      }
      else{
        return false;
      }
     
  }
  constructor(private mysr2:InfoService)
  {

  }
  resolve(route:ActivatedRouteSnapshot ,state:RouterStateSnapshot){
    console.log('welcome to angular Guards resolve');
    this.mysr2.checkstudData().subscribe((res:any)=>{
      console.log(res);
      return true;
    })
     
  }
}
