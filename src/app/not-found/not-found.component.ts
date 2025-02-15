import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-not-found',
  template: `
    <div
      class="flex min-h-screen flex-col items-center justify-center bg-gray-100"
    >
      <h1 class="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <p class="mb-8 text-xl text-gray-600">Page Not Found</p>
      <a
        routerLink="/"
        class="rounded-md bg-green-500 px-5 py-2 font-bold text-white hover:bg-green-700"
      >
        Back to Home
      </a>
    </div>
  `,
})
export class NotFoundComponent {}
