import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  isLoginMode: boolean = true; // State to track the form mode
  loginCollapsed =true;

  screenWidth = 0;

  constructor(private fb: FormBuilder,private router:Router) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  ngOnInit(){}

  onLogin() {
    if (this.loginForm.valid) {
      // Perform login action
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      // Perform registration action
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onToggleSideNav(data: SideNavToggle): void {

      this.screenWidth = data.screenWidth;
      data.collapsed = this.loginCollapsed;

  };
  homefunc(){

    this.router.navigate(['/monitoring'])

    }



}
