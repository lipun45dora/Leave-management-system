import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode=false;

adminregisterMode=false;

  constructor( ) { }

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
