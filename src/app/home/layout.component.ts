import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  selector: 'app-home',
  template: `
    <div class="min-h-screen bg-gray-200 p-2">
      <div class="container mx-auto flex flex-col gap-4">
        <app-nav>
          <main class="bg-white p-2 shadow-sm sm:p-4">
            <router-outlet></router-outlet>
          </main>
        </app-nav>
      </div>
    </div>
  `,
})
export class HomeLayoutComponent {}
