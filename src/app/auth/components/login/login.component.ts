import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   constructor(private service : AuthService){}


   form2:FormGroup = new FormGroup({
      username : new FormControl(""),
      password : new FormControl("")
   })

   loginform(){
    this.service.login(this.form2.value).subscribe (res=>{

        console.log(res)
    })

   }

}
