import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});
  mensaje: string = "";
  submitted: boolean = false;
  colorAlert: string = "alert-danger";
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { this.createForm() }

  ngOnInit(): void {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onLogin() {
    this.authService.supabase.auth.signInWithPassword({
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }).then((response) => {
      if (response.error) {
        this.colorAlert = "alert-danger"
        this.mensaje = response.error.message;
        this.submitted = true;
        console.log('Usuario no registrado', response.error)
      } else {
        this.colorAlert = "alert-success"
        this.mensaje = "Verificado✓";
        this.submitted = true;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000)
      }
    }).catch((error: { message: string; }) => {
      this.colorAlert = "alert-danger"
      this.mensaje = error.message;
      this.submitted = true;
      console.log('Usuario no registrado', error)
    })
  }

  entrarComoAdmin() {
    if (this.loginForm) {
      this.loginForm.controls['email'].setValue("admin@admin.com");
      this.loginForm.controls['password'].setValue("111111");
    }
  }

}
