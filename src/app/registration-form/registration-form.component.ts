import { Component } from '@angular/core';
import {SignInServiceService} from "../sign-in-service.service";
import {FormsModule, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-registration-form',
  standalone: true,
  templateUrl: './registration-form.component.html',
  imports: [
    FormsModule,
    AsyncPipe,
    NgForOf,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  ROOT_URL = 'http://127.0.0.1:8080/register?login=';
  result: Observable<any> = of([{"result":"null"}]);
  token: number = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
  constructor(private http:HttpClient, private router : Router) {
  }
  onSubmit(f: NgForm) {
    this.ROOT_URL+= f.value.username;
    this.ROOT_URL+= "&passwd=";
    this.ROOT_URL+= f.value.password;
    this.ROOT_URL+= "&repeat_passwd=";
    this.ROOT_URL+= f.value.repeat_password;
    this.ROOT_URL+= "&token=";
    this.ROOT_URL+= this.token;
    this.result = this.http.get(this.ROOT_URL);
    this.result.subscribe((data: any) => {
      // Проверка результата на успешное выполнение
      if (data && data.length > 0 && data[0].result === 'true') {
        // Перенаправление на страницу "main" после успешной аутентификации
        this.router.navigate(['/main']);
        localStorage.setItem('token', String(this.token));
      } else {
        // Логика для обработки других результатов
      }
      this.ROOT_URL = 'http://127.0.0.1:8080/register?login=';
    });
  }
}
