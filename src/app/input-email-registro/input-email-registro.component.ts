import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-email-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-email-registro.component.html',
  styleUrl: './input-email-registro.component.css'
})
export class InputEmailRegistroComponent {
  name:string = '';
}
