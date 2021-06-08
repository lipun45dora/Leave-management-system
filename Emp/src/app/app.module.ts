import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {HttpClientModule} from '@angular/common/http';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import {ToastrModule} from 'ngx-toastr';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminMembersComponent } from './adminmember/admin-members/admin-members.component';
import { AdminHomeComponent } from './adminmember/admin-home/admin-home.component';
import { AdminComponent } from './adminmember/admin/admin.component';
 @NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    AdminRegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    ApplyLeaveComponent,
    AdminNavComponent,
    AdminMembersComponent,
    AdminHomeComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'})
   
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
