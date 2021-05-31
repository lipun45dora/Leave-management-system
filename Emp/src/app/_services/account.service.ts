/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { Admin } from '../_models/admin';
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl='https://localhost:5001/api/';
 private currentUserSource= new ReplaySubject<User>(1);
 currentUser$= this.currentUserSource.asObservable();
 private currentAdminSource= new ReplaySubject<Admin>(1);
 currentAdmin$= this.currentAdminSource.asObservable();


  constructor(private http:HttpClient) { }
  login(model: any)
  {
    return this.http.post(this.baseUrl + 'account/login',model).pipe(
      map((response : User)=>
      {
        const user =response;
        if (user)
        {
          localStorage.setItem('user' , JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }
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
  setCurrentAdmin(user:Admin)
  {
    this.currentAdminSource.next(user);
  }
  setCurrentUser(user:User)
  {
    this.currentUserSource.next(user);
  }
  logout()
  {
    localStorage.removeItem('user');
    this.currentAdminSource.next(null);
    this.currentUserSource.next(null);
  }
}*/
