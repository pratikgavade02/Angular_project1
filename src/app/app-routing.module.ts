import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminDashbordComponent } from './module/components/admin/admin-dashbord/admin-dashbord.component';
import { AdminHomeComponent } from './module/components/admin/admin-home/admin-home.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"",
    component:AdminDashbordComponent,
    children:[
      {
        path:"admin",
        component:AdminHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
