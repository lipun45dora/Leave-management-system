import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any={}
  navmode=false;

  

  constructor(public accountService: AccountService,private router: Router,private toastr:ToastrService,
    private appcomponent:AppComponent) { }

  ngOnInit(): void {
  }
 login()
  {
  this.accountService.login(this.model).subscribe(response =>{
    this.router.navigateByUrl('/members');
    
  },
  error =>{
    console.log(error);
    this.toastr.error(error.error);
  })
  
  }

 Adminlogin()
  {
  this.accountService.Adminlogin(this.model).subscribe(response =>{
    this.router.navigateByUrl('/adminNav');
    
   
  },
  error =>{
    console.log(error);
    this.toastr.error(error.error);
  })
 
  }
 logout()
 {
   this.accountService.logout();
   this.router.navigateByUrl('/');
 }


}

