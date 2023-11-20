import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


interface Validator {
  isValidToken: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class SignInServiceService {
  static token:number = 0;
  ROOT_URL = 'http://127.0.0.1:8080/check?token=';
  isValid: Validator = {isValidToken : false};
  bool:boolean = false;
  result: Observable<any>;

  constructor(private http:HttpClient) {
    if (SignInServiceService.token == 0) {
      SignInServiceService.token = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
    }
    console.log(SignInServiceService.token);
    this.result = this.http.get(this.ROOT_URL + SignInServiceService.token);
    this.result.subscribe((x)=> {this.isValid = {isValidToken : (x as any).isValidToken};});
  }

}


