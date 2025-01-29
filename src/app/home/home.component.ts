import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    console.log('oninit run');
  }
}
