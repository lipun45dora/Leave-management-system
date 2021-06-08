import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/_models/admin';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
}