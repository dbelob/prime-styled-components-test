import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  imports: [ButtonDirective, FormsModule, InputTextModule],
  selector: 'app-component-demo',
  styleUrl: './component-demo.css',
  templateUrl: './component-demo.html',
})
export class ComponentDemo {
  inputTextValue: string | undefined;
}
