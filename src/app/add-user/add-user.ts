import { Component } from '@angular/core';
import { Api } from '../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  name = '';
  email = '';
  password = '';

  constructor(private api: Api,private router: Router) {}

  addUser() {
    this.api.addUser({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe(res => {
      console.log(res);
    });
  }
  
  logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}

seeMebers(){
    this.router.navigate(['/users']);

}
}
