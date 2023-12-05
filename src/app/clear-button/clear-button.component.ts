import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.css'],
  standalone: true
})
export class ClearButtonComponent {
  constructor(private http:HttpClient) {

  }
  token = localStorage.getItem("token");
  //CLEAR_URL ='http://127.0.0.1:8080/clear?token=' + this.token;
  CLEAR_URL = "";
  clear() {
    console.log(this.CLEAR_URL);


    this.CLEAR_URL = 'http://127.0.0.1:8080/clear?token=' + this.token;
    setTimeout(() => {this.getClearDelay();
    }, 30);
    console.log(this.CLEAR_URL);
    //this.http.get(this.CLEAR_URL);
  }


  getClearDelay(){
    this.CLEAR_URL = "";
  }
}
