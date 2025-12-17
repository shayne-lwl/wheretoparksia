import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggle } from './components/theme-toggle/theme-toggle.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, ThemeToggle],
})
export class AppComponent implements OnInit {
  public matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  public domSanitizer: DomSanitizer = inject(DomSanitizer);

  constructor() {}

  ngOnInit() {
    this.matIconRegistry.addSvgIconSetInNamespace(
      'hero-solid',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/hero-icons-solid.svg'
      )
    );
  }
}
