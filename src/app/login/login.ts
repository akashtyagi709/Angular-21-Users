import { Component } from '@angular/core';
import { Api } from '../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule
],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

email = '';
  password = '';

  constructor(private api: Api,private router:Router) {}

  login() {
    this.api.login({
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      console.log(res);
if (res.token) {
   localStorage.setItem('token', res.token);
     this.router.navigate(['/add-user']);

}
      // ✅ Save token
     
    });
  }
}