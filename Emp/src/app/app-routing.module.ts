import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminHomeComponent } from './adminmember/admin-home/admin-home.component';
import { AdminMembersComponent } from './adminmember/admin-members/admin-members.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';

const routes: Routes = [
  
  {path:'',component: HomeComponent},
  {path:'members',component: MemberListComponent},
  {path:'members/:id',component: MemberDetailComponent},
  {path:'lists',component: ListsComponent},
  
   

  {path:'applyleave',component: ApplyLeaveComponent},
  {path:'adminNav', component: AdminNavComponent},
  {path:'adminmembers',component:AdminMembersComponent },
 
 
   {path:'**',component: HomeComponent,pathMatch:'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
