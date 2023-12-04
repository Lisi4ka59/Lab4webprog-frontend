import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import {TableHistoryComponent} from "../table-history/table-history.component";

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  ROOT_URL = "http://127.0.0.1:8080/image?x=";
  inputXValue: string = '';
  inputRValue: string = '';
  inputYValue: string = '';
  token = localStorage.getItem("token");
  ADD_URL = "1000&y=0&r=1&rnd=0.5&userId=" + this.token;


  updateInputX(value: string, event: MouseEvent) {
    this.inputXValue = value;
    event.preventDefault();
  }
  updateInputR(value: string, event: MouseEvent) {
    this.inputRValue = value;
    this.ADD_URL = "1000&y=0&r=" + value + "&rnd=0.5&userId=" + this.token;
    event.preventDefault();
  }
  onSubmit(f: NgForm) {
    this.ADD_URL = "";
    let parseX = parseFloat(f.value.X)*72 + 100;
    this.ADD_URL += parseX;
    this.ADD_URL += "&y=";
    let parseY = -parseFloat(f.value.Y)*72 + 100;
    this.ADD_URL += parseY;
    this.ADD_URL += "&r=";
    this.ADD_URL += f.value.R;
    this.ADD_URL += "&rnd=0.5";
    this.ADD_URL += "&userId=" + this.token;


    // this.result = this.http.get(this.ROOT_URL);
    // this.ROOT_URL = "http://127.0.0.1:8080/image?x=";
    // this.result.subscribe((data: any) => {
    //   // Проверка результата на успешное выполнение
    //   if (data && data.length > 0 && data[0].result === 'true') {
    //     // Перенаправление на страницу "main" после успешной аутентификации
    //     this.router.navigate(['/main']);
    //     localStorage.setItem('token', String(this.token));
    //   } else {
    //     // Логика для обработки других результатов
    //   }

    //});
  }
    onImageClick(e: MouseEvent, f: NgForm) {
      this.ADD_URL = "";
      this.ADD_URL += e.offsetX;
      this.ADD_URL += "&y=";
      this.ADD_URL += e.offsetY;
      this.ADD_URL += "&r=";
      this.ADD_URL += f.value.R;
      this.ADD_URL += "&rnd=0.5";
      this.ADD_URL += "&userId=" + this.token;

    }



}
