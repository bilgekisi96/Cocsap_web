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

      const urlpost = 'https://tekelektrikcompany.com/api/auth/login';
      const requestData = {"username":username,"password":password}

      //const username = 'chatbot';
      //const password = 'wrong';
      const basicAuth = 'Basic ' + btoa(username + ':' + password);

      const response = await axios.post(urlpost, requestData);

      console.log('Status Code:', response.status);
      console.log('Response JSON:', response.data);

      this.fetchData(response)
      // Add your login logic here

    }


  }

  async fetchData(accesskey:{data:string,status:number}) {

    const basicAuth = 'Bearer ' + Object.values(accesskey.data)[0];

    try {
      const response = await axios.get('https://tekelektrikcompany.com/api/auth/login', {
        method: 'GET',
        headers: {
          'Authorization': basicAuth
        }
      });
      // Since we can't access the response body or headers, we won't be able to handle the data here
      console.log(response)

    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors here
    }
  }

  onRegister() {
    // Navigate to the register page or perform the registration action
    this.router.navigate(['/register']); // Adjust this to your actual register route
  }


}
