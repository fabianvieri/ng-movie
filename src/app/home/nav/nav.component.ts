import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
