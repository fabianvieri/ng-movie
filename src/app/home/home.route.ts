import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'watchlist',
        loadComponent: () =>
          import('./watchlist/watchlist.component').then(
            (c) => c.WatchlistComponent,
          ),
      },
    ],
  },
];
