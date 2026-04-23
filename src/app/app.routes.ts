import { Routes } from '@angular/router';
import { Login } from './login/login';
import { AddUser } from './add-user/add-user';
import { UserList } from './user-list/user-list';

export const routes: Routes = [
     { path: 'login', component: Login },

  // 🔒 Protected Route (we’ll secure later with guard)
  { path: 'add-user', component: AddUser },

{
  path: 'users',
  component: UserList
},
  // Default Route
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Wildcard (invalid URL)
  { path: '**', redirectTo: 'login' },

];
