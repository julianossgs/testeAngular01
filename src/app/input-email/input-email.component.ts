import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.css'
})
export class InputEmailComponent {
  name:string='';
}
