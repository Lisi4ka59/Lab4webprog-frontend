import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import {interval, Observable} from "rxjs";


@Component({
  selector: 'app-current-time',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './current-time.component.html',
  styleUrl: './current-time.component.css'
})
export class CurrentTimeComponent {
  source: Observable<number> = interval(1000);
  constructor(private http:HttpClient) {}
  readonly ROOT_URL ='http://127.0.0.1:8080/current_date';
  data: any;
  getData(){
    this.data = this.http.get(this.ROOT_URL);
    this.source.subscribe((x)=>{this.data = this.http.get(this.ROOT_URL);});
  }
  @HostListener('window:load', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.source.subscribe((x)=>{this.data = this.http.get(this.ROOT_URL);});
  }
}
