import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
   username: string ;
   password: string ;
   constructor(private http: HttpClient, private router: Router) {
    this.username='';
    this.password='';
  }

  login() {
    console.log(this.username, this.password);
    this.http.post('https://hrm-backend-square.onrender.com/auth/login', {
      email: this.username,
      password: this.password
    })
    .subscribe((data: any) => {     
      if (data.existingUser) {
        console.log(data);
        this.router.navigateByUrl("/home");
      } else {
        alert("Incorrect email or password. Please try again.");
      }
    }, (error) => {
      console.error('Error:', error);
      alert("Incorrect email or password.");
    });
  }
}  