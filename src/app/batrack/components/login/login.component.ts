import {ChangeDetectionStrategy, Component, Inject, inject, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from "axios";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "../../services/auth.service"

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
export class LoginComponent implements OnInit {

  loginCollapsed =true;

  screenWidth = 0;
  username: string | undefined;
  password: string | undefined;

  status : number | undefined | string;

  loginForm: FormGroup | any;
  constructor(private router:Router,private fb: FormBuilder,private authService:AuthService) {}

  readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog, {
      data: { status: this.status }});
  }

  async onLogin() {

    if (this.loginForm.valid) {

      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log('Username:', username);
      console.log('Password:', password);

      const urlpost = 'http://biococmedikal.com/customerapi/auth/login';
      const requestData = {"username":username,"password":password}

      try {

        const response = await axios.post(urlpost, requestData);

        console.log('Status Code:', response.status);
        console.log('Response JSON:', response.data);
        this.status = response.status
        console.log(this.status)
        this.status = "Your Access verified Successfully"
        this.openDialog()
        this.fetchData(response)

        this.authService.login();
        this.router.navigate(['/monitoring']); // Redirect to home after login
      }

      catch(error){
        this.status = "Password or Username is Wrong !"
        this.openDialog()
      }

      // Add your login logic here

    }
  }

  async fetchData(accesskey:{data:string,status:number}) {

    const basicAuth = 'Bearer ' + Object.values(accesskey.data)[0];

    try {

      const response = await axios.get('http://biococmedikal.com/customerapi/auth/login', {
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

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { status: number }, // Inject the passed data
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }


}
