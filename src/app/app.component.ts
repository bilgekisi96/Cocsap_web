<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
=======
import { Component } from '@angular/core';
>>>>>>> 1a638437eca69f8c69b80856a63b3aaf442f6ced

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  constructor(private router: Router) {
  }
  title = 'TEK ELEKTRİK';
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
=======
  styleUrl: './app.component.scss'
>>>>>>> 3ba36a2 (initial commit)
})
export class AppComponent {
  title = 'cocsap';
>>>>>>> 1a638437eca69f8c69b80856a63b3aaf442f6ced
}
