import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
 model:any={}
  constructor(public accountService: AccountService,private router: Router,private toastr:ToastrService,
    ) { }

  ngOnInit(): void {
  }
 /* Adminlogin()
  {
  this.accountService.Adminlogin(this.model).subscribe(response =>{
    console.log(response);
    //this.appcomponent.navMode=false;
   
  },
  error =>{
    console.log(error);
    this.toastr.error(error.error);
  })
  }*/
 
 
 logout()
 {
   this.accountService.logout();
   this.router.navigateByUrl('/');
 }

}
