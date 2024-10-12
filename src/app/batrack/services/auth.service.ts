import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false; // Track whether the user is logged in

  constructor(private router: Router) {}

  // Simulate login and set user as authenticated
  login(jwt_token?:any) {
    localStorage.setItem('authToken', jwt_token);
    this.router.navigate(['/monitoring']);
    return true;
  }

  // Simulate logout and set user as not authenticated
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
