import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  inject,
  Renderer2,
  RendererFactory2,
  OnInit,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeToggleService implements OnInit {
  /* Renderer2 acts as know how to handle DOM manipulations on client and server side, unlike element.classList.add/remove which only manipulates DOM on client side
   RendererFactory2 creates Renderer2 instances */
  private rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
  private document: Document = inject(DOCUMENT);
  private root: HTMLElement = this.document.documentElement;

  ngOnInit(): void {}

  setDarkMode(enabled: boolean): void {
    if (enabled) {
      this.renderer.addClass(this.root, 'dark');
    } else {
      this.renderer.removeClass(this.root, 'dark');
    }
  }

  toggle(): void {
    const isDark = this.root.classList.contains('dark');
    this.setDarkMode(!isDark);
  }
}
