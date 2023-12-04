import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";


interface Validator {
  isValidToken: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class SignInServiceService {
  ROOT_URL = 'http://127.0.0.1:8080/check?token=';
  isValid: Validator = {isValidToken : false};
  bool:boolean = false;
  result: Observable<any> = of({"result":"false"});

  constructor(private http:HttpClient) {
  }
  getResult(token:string):Observable<any>{
    this.result = this.http.get(this.ROOT_URL + token);
    this.result.subscribe((x)=> {this.isValid = {isValidToken : (x as any).isValidToken};});
    return this.result;
  }
}


