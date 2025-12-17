import {
  Component,
  ElementRef,
  OnInit,
  signal,
  viewChild,
  effect,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ThemeToggleService } from '../../services/theme-toggle.service';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  imports: [CommonModule, MatIcon],
})
export class ThemeToggle implements OnInit {
  themeState = signal<'light' | 'dark'>('light');
  toggleButton = viewChild<ElementRef>('toggleButton');

  constructor(private themeToggleService: ThemeToggleService) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    if (this.themeState() === 'light') {
      this.themeState.set('dark');
      this.toggleButton()?.nativeElement.classList.add('dark');
      this.themeToggleService.toggle();
    } else {
      this.toggleButton()?.nativeElement.classList.remove('dark');
      this.themeState.set('light');
      this.themeToggleService.toggle();
    }
  }
}
