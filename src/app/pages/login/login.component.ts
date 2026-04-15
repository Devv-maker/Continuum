import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class AuthLoginComponent {
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('username', [Validators.required]),
    password: new FormControl('123456789', [Validators.required]),
    remember: new FormControl(false)
  });

  onLogin() {
    if (this.loginForm.valid) {
      const userData = {
        username: this.loginForm.value.username,
        remember: this.loginForm.value.remember,
        isLoggedIn: true,
        token: 'dummy-token-123'
      };

      localStorage.setItem('user', JSON.stringify(userData));

      this.router.navigate(['/home']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
