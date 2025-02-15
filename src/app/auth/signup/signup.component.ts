import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
})
export class SignUpComponent {}
