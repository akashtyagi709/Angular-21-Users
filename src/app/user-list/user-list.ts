import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { Api } from '../services/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
 users: any[] = [];

  constructor(private api: Api, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.api.getAllUsers().subscribe((res: any) => {
      console.log(res)
      this.users = res.data; // adjust if your response structure differs
            console.log(this.users)
            this.cdr.detectChanges();

    });
  }
}