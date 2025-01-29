import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-auth-layout',
  template: `
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AuthLayoutComponent {}
