import {Component, HostListener, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AsyncPipe, NgForOf} from '@angular/common';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-table-history',
  templateUrl: './table-history.component.html',
  styleUrls: ['./table-history.component.css'],
  imports: [
    AsyncPipe,
    NgForOf,
    FormsModule
  ],
  standalone: true
})
export class TableHistoryComponent implements OnInit{
  token = localStorage.getItem("token");
  constructor(private http:HttpClient) {

  }
  readonly ROOT_URL ='http://127.0.0.1:8080/table?userId=' + this.token;
  readonly CLEAR_URL ='http://127.0.0.1:8080/clear?token=' + this.token;
  data: any;
  @HostListener('document:click', ['$event'])
  getData(event: MouseEvent | null){
    setTimeout(() => {
      this.getDataDelay();
    }, 75);
  }

  clear() {
console.log(this.CLEAR_URL);
    this.http.get(this.CLEAR_URL);
  }
  getDataDelay(){
    this.data = this.http.get(this.ROOT_URL);
  }
ngOnInit(){
    this.getData(null);
}
}

