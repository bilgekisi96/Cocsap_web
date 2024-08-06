import {Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { interval, takeUntil, timer } from 'rxjs';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;

}

interface TogglePage {

  collapsed:boolean

}

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

  pagecollapsed = true;

  ngOnInit() {
      this.router.navigate(['/monitoring'])
  }

  onToggleSideNav(data: SideNavToggle): void {

      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;

  };
}
