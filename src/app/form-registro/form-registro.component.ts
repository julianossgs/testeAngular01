import { Component } from '@angular/core';
import { InputEmailComponent } from '../input-email/input-email.component';
import { InputPasswordComponent } from '../input-password/input-password.component';
import { ButtonLoginComponent } from '../button-login/button-login.component';
import { InputEmailRegistroComponent } from "../input-email-registro/input-email-registro.component";
import { ButtonRegistroComponent } from "../button-registro/button-registro.component";

@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [
    InputEmailRegistroComponent,
    ButtonRegistroComponent
],
  templateUrl: './form-registro.component.html',
  styleUrl: './form-registro.component.css'
})

export class FormRegistroComponent {

}

