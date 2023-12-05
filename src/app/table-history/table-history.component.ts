import {Component, HostListener, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AsyncPipe, NgForOf} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ClearButtonComponent} from "../clear-button/clear-button.component";


@Component({
  selector: 'app-table-history',
  templateUrl: './table-history.component.html',
  styleUrls: ['./table-history.component.css'],
  imports: [
    AsyncPipe,
    NgForOf,
    FormsModule,
    ClearButtonComponent
  ],
  standalone: true
})
export class TableHistoryComponent implements OnInit{
  token = localStorage.getItem("token");
  constructor(private http:HttpClient) {

  }
  readonly ROOT_URL ='http://127.0.0.1:8080/table?userId=' + this.token;

  data: any;
  @HostListener('document:click', ['$event'])
  getData(event: MouseEvent | null){
    setTimeout(() => {
      this.getDataDelay();
    }, 75);
  }


  getDataDelay(){
    this.data = this.http.get(this.ROOT_URL);
  }
ngOnInit(){
    this.getData(null);
}
}

