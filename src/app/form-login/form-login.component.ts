import { Component } from '@angular/core';
import { InputEmailComponent } from "../input-email/input-email.component";
import { InputPasswordComponent } from "../input-password/input-password.component";
import { ButtonLoginComponent } from "../button-login/button-login.component";


@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [InputEmailComponent, InputPasswordComponent,
    ButtonLoginComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

}
