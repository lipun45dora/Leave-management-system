import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  registerMode=false;

adminregisterMode=false;
  constructor() { }

  ngOnInit(): void {
  }
  adminRegisterToggle()
  {
    this.adminregisterMode= !this.adminregisterMode;
    this.registerMode=false;
    
  }
  empRegisterToggle()
  {
   this.registerMode= !this.registerMode;
   this.adminregisterMode=false;
  }
  
  cancelRegisterMode(event :boolean)
  {
    this.registerMode=event;
    this.adminregisterMode=event;
  }
}
