import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
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
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
})
export class SignUpComponent {}
