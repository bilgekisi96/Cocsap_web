import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false; // Track whether the user is logged in

  constructor(private router: Router) {}

  // Simulate login and set user as authenticated
  login() {
    this.loggedIn = true;
  }

  // Simulate logout and set user as not authenticated
  logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
