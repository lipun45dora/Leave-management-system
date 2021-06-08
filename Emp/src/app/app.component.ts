import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from './_models/admin';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Leave Management System';
  users:any;
  admin: any;
  navMode= false;
  adminnavMode= false;
  constructor ( private accountService : AccountService){}
  ngOnInit() {
    // this.getUsers();
     //this.getAdmins();

  }
  setCurrentUser()
  {
    const user : User= JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
  setCurrentAdmin()
  {
    const user : Admin= JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentAdmin(user);
  }
  /* getnavmode()
   {
     this.navMode=!this.navMode;
     this.adminnavMode=false;
   }
   getadminNavMode()
   {
     this.adminnavMode= !this.adminnavMode;
     this.navMode=false;
   }*/
  /*getUsers()
  {
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
       this.users= response;
     },
     error =>{
       console.log(error);
     }
     )
  }
  getAdmins()
  {
    this.http.get('https://localhost:5001/api/admin').subscribe(response =>{
       this.admin= response;
     },
     error =>{
       console.log(error);
     }
     )
  }*/
}
