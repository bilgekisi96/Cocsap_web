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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
>>>>>>> 3ba36a2 (initial commit)
})
export class AppComponent {
  title = 'cocsap';
}
