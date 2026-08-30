import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

interface Language {
  label: string;
  value: string;
}

@Component({
  imports: [ButtonDirective, FormsModule, InputTextModule, SelectModule],
  selector: 'app-component-demo',
  styleUrl: './component-demo.css',
  templateUrl: './component-demo.html',
})
export class ComponentDemo {
  inputTextValue: string | undefined;

  languages: Language[] = [
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Italiano', value: 'it' },
    { label: 'Türkçe', value: 'tr' },
    { label: '日本語', value: 'ja' },
    { label: '中文', value: 'zh' },
  ];
  selectedLanguage: string | undefined;
}
