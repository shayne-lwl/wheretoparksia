import { Component } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  imports: [ThemeToggle],
})
export class NavigationBar {}
