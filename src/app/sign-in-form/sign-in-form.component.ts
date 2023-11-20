import { Component } from '@angular/core';
import {SignInServiceService} from "../sign-in-service.service";
import {FormsModule, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from "@angular/router";


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
  constructor(private http:HttpClient) {
  }
  onSubmit(f: NgForm) {
    this.ROOT_URL+= f.value.username;
    this.ROOT_URL+= "&passwd="
    this.ROOT_URL+= f.value.password;
    this.ROOT_URL+= "&token="
    this.ROOT_URL+= SignInServiceService.token;

    this.result = this.http.get(this.ROOT_URL);
    this.result.subscribe((x)=>{this.result = this.http.get(this.ROOT_URL);});
  }
}
