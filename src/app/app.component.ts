import {Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { interval, takeUntil, timer } from 'rxjs';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface LoginToggle {
  Loginstatus:number | undefined;
}
interface TogglePage {collapsed:boolean}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  constructor(private router: Router) {
  }
  title = 'COCSAPIENTIS';

  isSideNavCollapsed = false;
  screenWidth = 0;
  loginstatus:number | undefined;

  ngOnInit() {
      if(this.loginstatus !== 1){
        this.router.navigate(['/login'])
      }
      else {
        timer(5000).subscribe(x=>{
          this.loginstatus = 1
        })
        this.loginstatus = 0
      }


  }

  onToggleSideNav(data: SideNavToggle): void {

      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;

  };

  onToggleLogin(data:LoginToggle): void {

    this.loginstatus = data.Loginstatus

  }




}
