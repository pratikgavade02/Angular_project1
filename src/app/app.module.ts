
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashbordComponent } from './module/components/admin/admin-dashbord/admin-dashbord.component';
import { AdminHomeComponent } from './module/components/admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './module/components/admin/utilities/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './module/components/admin/utilities/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './module/components/admin/utilities/admin-footer/admin-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminDashbordComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
