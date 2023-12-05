import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputFormComponent} from "../input-form/input-form.component";
import {CurrentTimeComponent} from "../current-time/current-time.component";
import {SignInServiceService} from "../sign-in-service.service";
import {Router, RouterLink} from "@angular/router";
import {interval, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TableHistoryComponent} from "../table-history/table-history.component";
import {ClearButtonComponent} from "../clear-button/clear-button.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, InputFormComponent, CurrentTimeComponent, RouterLink, TableHistoryComponent, ClearButtonComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {


  result: Observable<any> = of([{"result":"null"}]);
  source: Observable<number> = interval(1000);

  it:any;
  token:string = "" + localStorage.getItem("token");
  LOG_OUT_URL = "";
  private subscribe: any;
  constructor(private http:HttpClient, private signInService : SignInServiceService, private router: Router) {
    this.subscribe = this.source.subscribe((x)=> {this.isAuthorized()});
    setTimeout(()=> this.subscribe.unsubscribe(), 2000);
  }
  @HostListener('window:load', ['$event'])
  isAuthorized() {
    this.result = this.signInService.getResult(this.token);
    this.result.subscribe((data: any) => {});
  }
  logOut(){
    this.LOG_OUT_URL = 'http://127.0.0.1:8080/log_out?token=' + this.token;

    setTimeout(() => {this.getLogOutDelay();
    }, 30);
    console.log(this.LOG_OUT_URL);
    //this.http.get(this.CLEAR_URL);
  }


  getLogOutDelay(){
    this.LOG_OUT_URL = "";
  }
}
