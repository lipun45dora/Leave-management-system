/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { Admin } from '../_models/admin';
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AdminAccountService {
  baseUrl='https://localhost:5001/api/';
 
 private currentAdminSource= new ReplaySubject<Admin>(1);
 currentAdmin$= this.currentAdminSource.asObservable();


  constructor(private http:HttpClient) { }
  
Adminlogin(model:any)
  {
    return this.http.post(this.baseUrl + 'adminaccount/login', model).pipe(
      map((response : Admin) =>{
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentAdminSource.next(user);
        }
      })
    )
  }
  

  adminRegister(model:any)
  {
return this.http.post(this.baseUrl + 'adminaccount/register', model).pipe(
  map((user:Admin) =>{
    if(user){
      localStorage.setItem('user', JSON.stringify(user));
      this.currentAdminSource.next(user);
    }
  })
)
  }
    
  setCurrentAdmin(user:Admin)
  {
    this.currentAdminSource.next(user);
  }
  
  logout()
  {
    localStorage.removeItem('user');
    this.currentAdminSource.next(null);

  }
}*/

