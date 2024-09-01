import {Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from "axios";


interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit{

  loginCollapsed =true;

  screenWidth = 0;
  username: string | undefined;
  password: string | undefined;

  loginForm: FormGroup | any;
  constructor(private router:Router,private fb: FormBuilder) {}


  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onLogin() {

    if (this.loginForm.valid) {

      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log('Username:', username);
      console.log('Password:', password);

      const urlpost = 'https://tekelektrikcompany.com/api/api/auth/login/';
      const requestData = {"username":username,"password":password}

      //const username = 'chatbot';
      //const password = 'wrong';
      //const basicAuth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.post(urlpost, requestData, {});

      console.log('Status Code:', response.status);
      console.log('Response JSON:', response.data);


      // Add your login logic here

    }
  }

  onRegister() {
    // Navigate to the register page or perform the registration action
    this.router.navigate(['/register']); // Adjust this to your actual register route
  }


}
