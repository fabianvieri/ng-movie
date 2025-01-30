import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    RouterLink,
  ],
  selector: 'app-login',
  templateUrl: 'login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
