import {ChangeDetectionStrategy, Component, EventEmitter, Inject, inject, OnInit, Output} from '@angular/core';
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
import {LoginService} from "../../services/login.service";

interface LoginToggle {
  Loginstatus: number | undefined;
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

  loginstatus=0;

  @Output() onToggleLogin: EventEmitter<LoginToggle> = new EventEmitter();

  status : number | undefined | string;

  loginForm: FormGroup | any;
  constructor(private router:Router,private fb: FormBuilder,private authService:AuthService,private loginService:LoginService) {}

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


      const requestData = {"username":username,"password":password}
      console.log(this.loginService.loginpost(requestData))



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
