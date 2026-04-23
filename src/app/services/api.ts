import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {

  baseUrl = 'https://springboot-crud-users-api.onrender.com';

  constructor(private http: HttpClient) {}

  // ✅ LOGIN API
  login(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  // ✅ ADD USER (Protected)
  addUser(data: any) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.baseUrl}/api/addUser`, data, { headers });
  }
  getAllUsers() {
  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  return this.http.get(`${this.baseUrl}/api/getAllUsers`, { headers });
}
}