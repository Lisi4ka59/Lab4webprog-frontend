import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputFormComponent} from "../input-form/input-form.component";
import {CurrentTimeComponent} from "../current-time/current-time.component";
import {SignInServiceService} from "../sign-in-service.service";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, InputFormComponent, CurrentTimeComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
  constructor(public signInService : SignInServiceService) {
  }
}
