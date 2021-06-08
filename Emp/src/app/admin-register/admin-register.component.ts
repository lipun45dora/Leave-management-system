import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  @Output() cancelRegister =new EventEmitter();
  model:any={};
    constructor(private accountService: AccountService) { }

  ngOnInit(): void {
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
