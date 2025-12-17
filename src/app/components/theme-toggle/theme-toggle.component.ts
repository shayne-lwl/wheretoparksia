import { Component, OnInit, signal } from '@angular/core';
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

  constructor(private themeToggleService: ThemeToggleService) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    // keep state changes declarative; template binds classes to icons
    const next = this.themeState() === 'light' ? 'dark' : 'light';
    this.themeState.set(next);
    this.themeToggleService.toggle();
  }
}
