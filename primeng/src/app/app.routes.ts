import { Routes } from '@angular/router';
import { ComponentDemo } from './component-demo/component-demo';

export const routes: Routes = [
  { path: '**', component: ComponentDemo }
];
