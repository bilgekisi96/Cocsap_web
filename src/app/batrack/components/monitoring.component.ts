import { Component,OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styles: [
  ]
})
export class MonitoringComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit(){

    }


  homefunc(){
    this.router.navigate(['/monitoring'])
    console.log("home")
    }
  confunc(){

    }
  logfunc(){
    this.router.navigate(['/login'])
    }

  infbu1() { //Misyon vizyon
    this.router.navigate(['/history'])
  }

  infbu2() {
    this.router.navigate(['/history'])
  }

  infbu3() {
    this.router.navigate(['/history'])
  }

  infbu4() {
    this.router.navigate(['/history'])
  }

  infbu5() {
    this.router.navigate(['/history'])
  }

  infbu6() {
    this.router.navigate(['/history'])
  }
}
