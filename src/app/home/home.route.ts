import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeLayoutComponent } from './layout.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
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
