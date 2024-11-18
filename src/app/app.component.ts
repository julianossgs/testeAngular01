import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormLoginComponent } from "./form-login/form-login.component";
import { InputEmailComponent } from "./input-email/input-email.component";
import { FormRegistroComponent } from "./form-registro/form-registro.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormLoginComponent, InputEmailComponent,
    FormRegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TesteAngular01';

}
export class AppModule{}

