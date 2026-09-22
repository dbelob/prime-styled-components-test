import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from 'primeng/button';
import { GalleryModule } from 'primeng/gallery';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { ChevronRight } from '@primeicons/angular/chevron-right';
import { Replay } from '@primeicons/angular/replay';
import { Refresh } from '@primeicons/angular/refresh';
import { SearchPlus } from '@primeicons/angular/search-plus';
import { SearchMinus } from '@primeicons/angular/search-minus';
import { ArrowsH } from '@primeicons/angular/arrows-h';
import { ArrowsV } from '@primeicons/angular/arrows-v';
import { Download } from '@primeicons/angular/download';
import { ArrowUpRightAndArrowDownLeftFromCenter } from '@primeicons/angular/arrow-up-right-and-arrow-down-left-from-center';
import { ArrowDownLeftAndArrowUpRightToCenter } from '@primeicons/angular/arrow-down-left-and-arrow-up-right-to-center';

interface Language {
  label: string;
  value: string;
}

@Component({
  imports: [ButtonDirective, FormsModule, GalleryModule, InputTextModule, SelectModule,
            ChevronLeft, ChevronRight, Replay, Refresh, SearchPlus, SearchMinus, ArrowsH, ArrowsV, Download,
            ArrowUpRightAndArrowDownLeftFromCenter, ArrowDownLeftAndArrowUpRightToCenter],
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

  photos: [number, number, number][] = [
    [10, 1200, 800],
    [11, 800, 1200],
    [15, 1400, 700],
    [16, 700, 1050],
    [17, 1000, 1000],
    [18, 1300, 650],
    [19, 600, 1200],
    [20, 1200, 900],
    [27, 750, 1125],
    [28, 1400, 800],
    [29, 800, 1100],
    [36, 1100, 700],
    [37, 650, 1300],
    [39, 1200, 750],
    [42, 900, 1200],
    [43, 1300, 800],
    [47, 700, 1400],
    [48, 1000, 800],
    [49, 800, 1000],
    [50, 1400, 600],
    [52, 600, 900],
    [53, 1200, 1200],
    [54, 900, 600],
    [55, 750, 1000],
    [56, 1100, 800],
    [57, 1400, 900],
    [58, 850, 1275],
    [59, 1000, 600],
    [60, 600, 1000],
    [64, 1300, 1300]
  ];
  images = this.photos.map(([id, w, h]) => `https://picsum.photos/id/${id}/${w}/${h}`);
}
