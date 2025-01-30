import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrl: 'nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
