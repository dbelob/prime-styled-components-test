import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  imports: [ButtonDirective],
  selector: 'app-component-demo',
  styleUrl: './component-demo.css',
  templateUrl: './component-demo.html'
})
export class ComponentDemo {}
