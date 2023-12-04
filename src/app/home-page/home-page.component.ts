import { Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CurrentTimeComponent} from "../current-time/current-time.component";
import {RouterLink} from "@angular/router";
import {RegistrationFormComponent} from "../registration-form/registration-form.component";
import {SignInFormComponent} from "../sign-in-form/sign-in-form.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: 'home-page.component.html',
  styles: [],
  imports: [CommonModule, CurrentTimeComponent, RouterLink, NgOptimizedImage, RegistrationFormComponent, SignInFormComponent],

  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  showLogin: boolean = true;
  showRegistration: boolean = false;

  showLoginForm() {
    this.showLogin = true;
    this.showRegistration = false;
  }

  showRegistrationForm() {
    this.showLogin = false;
    this.showRegistration = true;
  }

}
