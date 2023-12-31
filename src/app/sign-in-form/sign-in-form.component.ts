import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from "@angular/router";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  templateUrl: './sign-in-form.component.html',
  imports: [
    FormsModule,
    AsyncPipe,
    NgForOf,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent {
  ROOT_URL = 'http://127.0.0.1:8080/sign_in?login=';
  result: Observable<any> = of([{"result":"null"}]);
  it:any;
  token: number = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
  constructor(private http:HttpClient, private router: Router) {

  }
  onSubmit(f: NgForm) {
    this.ROOT_URL+= f.value.username;
    this.ROOT_URL+= "&passwd="
    this.ROOT_URL+= f.value.password;
    this.ROOT_URL+= "&token="
    this.ROOT_URL+= this.token;


    this.result = this.http.get(this.ROOT_URL);
    this.ROOT_URL = 'http://127.0.0.1:8080/sign_in?login=';
    this.result.subscribe((data: any) => {
      // Проверка результата на успешное выполнение
      if (data && data.length > 0 && data[0].result === 'true') {
        // Перенаправление на страницу "main" после успешной аутентификации
        this.router.navigate(['/main']);
        localStorage.setItem('token', String(this.token));
      } else {
        // Логика для обработки других результатов
      }

    });
  }
}
