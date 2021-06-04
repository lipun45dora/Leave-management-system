import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  @Output() cancelRegister =new EventEmitter();
model:any={};
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  empregister()
  {
    this.accountService.empRegister(this.model).subscribe(response =>{
      console.log(response);
      this.cancel();
    },error =>{
      console.log(error);
    })
  }
  adminregister()
  {
    this.accountService.adminRegister(this.model).subscribe(response =>{
      console.log(response);
      this.cancel();
    },error =>{
      console.log(error);
    })
  }
  cancel()
  {
    this.cancelRegister.emit(false);
  }

}
